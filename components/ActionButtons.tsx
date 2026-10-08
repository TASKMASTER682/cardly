"use client";

import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Download, ClipboardCheck, Clipboard } from "lucide-react";
import { toPng } from "html-to-image";
import { trackCardEvent } from "@/lib/api";
import { CardSourceType, CardSettings, TweetData } from "@/lib/types";
import { getAspectRatio } from "@/lib/themes";
import type { Platform } from "./CardStudio";
import PreviewCard from "./PreviewCard";

interface ActionButtonsProps {
  cardType: CardSourceType;
  themeUsed: string;
  tweetUrl?: string;
  settings: CardSettings;
  tweet: TweetData;
  platform?: Platform;
}

// Fixed export dimensions per aspect ratio (matching preview ratios exactly)
const EXPORT_SIZES = {
  square:    { width: 1200, height: 1200 },
  portrait:  { width: 1200, height: 1500 },
  landscape: { width: 1600, height: 900 },
  pinterest: { width: 1200, height: 1800 },
  standard:  { width: 1600, height: 1200 },
};

// Transparent 1x1 PNG used when an image cannot be fetched at all. Without a
// placeholder html-to-image sets src="" which fires onerror and rejects the
// whole capture with an unhelpful DOM Event (printed as `{}`).
const TRANSPARENT_PNG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAALSURBVBhXY2AAAgAABQABqtXIUQAAAABJRU5ErkJggg==";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

// Repeated captures re-use the same data URLs so the download button stays fast.
const dataUrlCache = new Map<string, string>();

// Layout dimensions used by the preview (540px base, area preserved per ratio).
// The card renders at this size with its normal CSS, then html-to-image scales
// it up via pixelRatio so text proportions exactly match what the user sees.
function getLayoutSize(ratio: number) {
  const base = 540;
  const width = Math.round(Math.sqrt(base * base * ratio));
  const height = Math.max(Math.round(width / ratio), 1);
  return { width, height };
}

function proxyUrl(url: string): string {
  try {
    const origin = window.location.origin;
    const isExternal = !url.startsWith(origin) && !url.startsWith("data:");
    if (!isExternal) return url;
    return `${API_BASE}/api/proxy-image?url=${encodeURIComponent(url)}`;
  } catch {
    return url;
  }
}

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error ?? new Error("FileReader failed"));
    reader.readAsDataURL(blob);
  });
}

// Fetch an image as a data URL: direct fetch first (works for same-origin and
// CORS-enabled hosts), then the backend proxy. Returns null when both fail.
async function toDataUrl(url: string): Promise<string | null> {
  const cached = dataUrlCache.get(url);
  if (cached) return cached;

  for (const candidate of [url, proxyUrl(url)]) {
    try {
      const res = await fetch(candidate);
      if (!res.ok) continue;
      const blob = await res.blob();
      if (blob.type && !blob.type.startsWith("image/")) continue;
      const dataUrl = await blobToDataUrl(blob);
      if (dataUrl.startsWith("data:image") || !blob.type) {
        dataUrlCache.set(url, dataUrl);
        return dataUrl;
      }
    } catch {
      // try the next candidate
    }
  }
  return null;
}

// Replace every external img src inside the export node with an inlined data
// URL. html-to-image skips images whose src is already a data URL, so this
// removes CORS fetches from the capture path entirely.
async function inlineImages(root: HTMLElement): Promise<void> {
  const imgs = Array.from(root.querySelectorAll("img"));
  await Promise.all(
    imgs.map(async (img) => {
      const src = img.getAttribute("src") || img.src;
      if (!src || src.startsWith("data:")) return;
      const dataUrl = await toDataUrl(src);
      if (!dataUrl) return;
      const original = img.getAttribute("src") || "";
      img.removeAttribute("crossorigin");
      // srcset takes precedence over src — an external srcset left in the SVG
      // would be blocked and can fail the whole render.
      img.removeAttribute("srcset");
      img.setAttribute("src", dataUrl);
      try {
        await img.decode();
      } catch {
        img.setAttribute("src", original);
      }
    })
  );
}

function waitForPaint(condition: () => boolean, timeoutMs = 4000): Promise<void> {
  return new Promise((resolve, reject) => {
    const start = performance.now();
    const tick = () => {
      if (condition()) {
        resolve();
        return;
      }
      if (performance.now() - start > timeoutMs) {
        reject(new Error("Export render timed out"));
        return;
      }
      requestAnimationFrame(tick);
    };
    tick();
  });
}

// html-to-image rejects image load failures with a DOM Event, which stringifies
// to `{}` — turn it into something a human can act on.
function describeCaptureError(e: unknown): string {
  if (e instanceof Error) return e.message;
  if (typeof Event !== "undefined" && e instanceof Event) {
    const target = e.target as HTMLImageElement | null;
    const src = target?.getAttribute?.("src") || "";
    if (src.startsWith("data:")) {
      return "Exported image failed to render (an inlined image was rejected).";
    }
    return `An image failed to load: ${src.slice(0, 140) || "unknown source"}`;
  }
  if (typeof e === "string" && e) return e;
  try {
    const json = JSON.stringify(e);
    if (json && json !== "{}") return json;
  } catch {
    // fall through
  }
  return "Unknown export error — check the browser console.";
}

async function captureCard(
  settings: CardSettings,
  tweet: TweetData,
  platform: Platform = "twitter"
): Promise<string> {
  const ratio = getAspectRatio(settings.aspectRatio).ratio;
  const target = EXPORT_SIZES[settings.aspectRatio] ?? EXPORT_SIZES.square;
  const layout = getLayoutSize(ratio);
  const pixelRatio = target.width / layout.width;

  // Match the preview shell's responsive padding: `p-6 sm:p-12` on .card-shell.
  const pad = typeof window !== "undefined" && window.innerWidth < 640 ? 24 : 48;

  // Offscreen replica of the preview shell (background, radius, padding) so the
  // exported PNG is a pixel-accurate upscale of the live preview.
  //
  // IMPORTANT: the offscreen offset must go through `transform`, NOT `left`.
  // html-to-image copies computed styles (including `left`) into the SVG
  // foreignObject — a negative `left` renders the content outside the SVG
  // viewport and produces a blank PNG. `transform` is reset to `none` below.
  const container = document.createElement("div");
  container.style.cssText = [
    "position: fixed",
    "left: 0",
    "top: 0",
    "transform: translateX(-9999px)",
    `width: ${layout.width}px`,
    `height: ${layout.height}px`,
    `background: ${settings.cardBg}`,
    "border-radius: 28px",
    `padding: ${pad}px`,
    "box-sizing: border-box",
    "overflow: hidden",
    "display: flex",
    "flex-direction: column",
    "visibility: visible",
    "opacity: 1",
    "pointer-events: none",
    "z-index: 2147483647",
  ].join("; ");
  document.body.appendChild(container);

  const root = createRoot(container);
  try {
    root.render(
      <PreviewCard tweet={tweet} settings={settings} platform={platform} />
    );

    // React renders asynchronously — wait until the card is actually in the DOM.
    await waitForPaint(() => container.firstElementChild !== null);

    // Inline images as data URLs before html-to-image runs.
    await inlineImages(container);

    // Let the browser paint once more so the inline swap is reflected.
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
    );

    return await toPng(container, {
      width: layout.width,
      height: layout.height,
      quality: 1,
      pixelRatio,
      skipAutoScale: true,
      imagePlaceholder: TRANSPARENT_PNG,
      onImageErrorHandler: (event) => {
        const target = (event as Event)?.target as HTMLImageElement | null;
        const src = (target?.getAttribute?.("src") || "").slice(0, 140);
        console.warn("Export image skipped (failed to load):", src);
      },
      style: {
        transform: "none",
        transformOrigin: "top left",
      },
      filter: (domNode: Element) => {
        if (domNode instanceof HTMLIFrameElement) return false;
        return true;
      },
    });
  } finally {
    root.unmount();
    container.remove();
  }
}

export default function ActionButtons({
  cardType,
  themeUsed,
  tweetUrl,
  settings,
  tweet,
  platform = "twitter",
}: ActionButtonsProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleDownload = async () => {
    setErrorMessage(null);
    setIsDownloading(true);
    try {
      const dataUrl = await captureCard(settings, tweet, platform);
      const link = document.createElement("a");
      link.download = `frame-posting-${Date.now()}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      trackCardEvent({ cardType, themeUsed, tweetUrl });
    } catch (e) {
      console.error("Card capture failed:", e);
      setErrorMessage(describeCaptureError(e) || "Couldn't generate the image. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopy = async () => {
    setErrorMessage(null);
    setIsCopying(true);
    try {
      const dataUrl = await captureCard(settings, tweet, platform);
      const blob = await (await fetch(dataUrl)).blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob }),
      ]);
      setCopied(true);
      trackCardEvent({ cardType, themeUsed, tweetUrl });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setErrorMessage(
        "Copy isn't supported in this browser. Try downloading instead."
      );
    } finally {
      setIsCopying(false);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center justify-center gap-2 rounded-xl bg-brass px-6 py-3 text-sm font-semibold text-ink hover:bg-brass-soft transition-colors disabled:opacity-50"
        >
          <Download size={16} />
          {isDownloading ? "Rendering…" : "Download High-Res PNG"}
        </button>
        <button
          onClick={handleCopy}
          disabled={isCopying}
          className="flex items-center justify-center gap-2 rounded-xl border border-ink-line px-6 py-3 text-sm font-semibold text-cloud hover:border-brass transition-colors disabled:opacity-50"
        >
          {copied ? <ClipboardCheck size={16} /> : <Clipboard size={16} />}
          {copied ? "Copied!" : "Copy Image to Clipboard"}
        </button>
      </div>
      {errorMessage && (
        <p role="alert" className="text-sm text-[#FF9A8A]">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

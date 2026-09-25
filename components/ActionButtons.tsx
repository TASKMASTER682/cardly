"use client";

import { useState, RefObject } from "react";
import { Download, ClipboardCheck, Clipboard } from "lucide-react";
import { toPng } from "html-to-image";
import { trackCardEvent } from "@/lib/api";
import { CardSourceType } from "@/lib/types";

interface ActionButtonsProps {
  cardRef: RefObject<HTMLDivElement | null>;
  cardType: CardSourceType;
  themeUsed: string;
  tweetUrl?: string;
}

// Renders the DOM node at high-DPI so exported PNGs stay crisp on retina
// screens, regardless of the visitor's own device pixel ratio.
const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

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

async function captureCard(node: HTMLDivElement): Promise<string> {
  const images = Array.from(node.querySelectorAll("img"));
  const originals: { img: HTMLImageElement; src: string }[] = [];

  await Promise.all(
    images.map(async (img) => {
      if (!img.src || img.src.startsWith("data:")) return;
      originals.push({ img, src: img.src });
      const proxied = proxyUrl(img.src);
      try {
        const res = await fetch(proxied);
        const blob = await res.blob();
        const dataUrl = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
        img.src = dataUrl;
      } catch {
        // If proxy fetch fails too, leave original — may still work
      }
    })
  );

  const EXPORT_CLASS = "card-frame--export";
  const hadExportClass = node.classList.contains(EXPORT_CLASS);
  node.classList.add(EXPORT_CLASS);

  // Export exactly the selected aspect ratio. The layout may have been
  // scaled-down by `max-width: 100%` on small screens, so the size comes
  // from the inline design width, not the (possibly shrunk) rendered box.
  const ratio =
    parseFloat(
      getComputedStyle(node).getPropertyValue("--card-ratio")
    ) || 1;
  const designWidth = Math.round(Math.sqrt(540 * 540 * ratio));
  const minHeight = Math.ceil(designWidth / ratio);

  const savedStyles = {
    width: node.style.width,
    maxWidth: node.style.maxWidth,
    height: node.style.height,
    aspectRatio: node.style.aspectRatio,
  };

  node.style.width = `${designWidth}px`;
  node.style.maxWidth = "none";
  node.style.aspectRatio = "auto";
  node.style.height = "auto";
  // The min-height (aspect ratio) stays in place, so the exported height is
  // the natural height: at least the selected ratio, taller if content needs.
  const naturalHeight = Math.ceil(node.offsetHeight);
  const exportHeight = Math.max(minHeight, naturalHeight);
  node.style.height = `${exportHeight}px`;

  try {
    return await toPng(node, {
      quality: 1,
      pixelRatio: 2,
      cacheBust: true,
      skipAutoScale: true,
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
    if (!hadExportClass) {
      node.classList.remove(EXPORT_CLASS);
    }
    node.style.width = savedStyles.width;
    node.style.maxWidth = savedStyles.maxWidth;
    node.style.height = savedStyles.height;
    node.style.aspectRatio = savedStyles.aspectRatio;
    for (const { img, src } of originals) {
      img.src = src;
    }
  }
}

export default function ActionButtons({
  cardRef,
  cardType,
  themeUsed,
  tweetUrl,
}: ActionButtonsProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setErrorMessage(null);
    setIsDownloading(true);
    try {
      const dataUrl = await captureCard(cardRef.current);
      const link = document.createElement("a");
      link.download = `frame-posting-${Date.now()}.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      trackCardEvent({ cardType, themeUsed, tweetUrl });
    } catch (e) {
      console.error("Card capture failed:", e);
      setErrorMessage("Couldn't generate the image. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopy = async () => {
    if (!cardRef.current) return;
    setErrorMessage(null);
    setIsCopying(true);
    try {
      const dataUrl = await captureCard(cardRef.current);
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

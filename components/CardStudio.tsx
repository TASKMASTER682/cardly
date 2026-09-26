"use client";

import { useRef, useState, type CSSProperties } from "react";
import InputSection from "./InputSection";
import CustomizationPanel from "./CustomizationPanel";
import PreviewCard from "./PreviewCard";
import ActionButtons from "./ActionButtons";
import { fetchTweetFromUrl, fetchLinkedInFromUrl, ApiError } from "@/lib/api";
import { getAspectRatio } from "@/lib/themes";
import {
  CardSettings,
  CardSourceType,
  DEFAULT_SETTINGS,
  DEFAULT_TWEET,
  TweetData,
} from "@/lib/types";

export type Platform = "twitter" | "linkedin";

interface CardStudioProps {
  platform?: Platform;
}

// Top-level client component: owns all editor state and wires the
// input, customization panel, live preview, and export actions together.
export default function CardStudio({ platform = "twitter" }: CardStudioProps) {
  const [sourceType, setSourceType] = useState<CardSourceType>("custom_text");
  const [urlValue, setUrlValue] = useState("");
  const [textValue, setTextValue] = useState(DEFAULT_TWEET.body);
  const [tweet, setTweet] = useState<TweetData>(DEFAULT_TWEET);
  const [settings, setSettings] = useState<CardSettings>(DEFAULT_SETTINGS);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  const ratio = getAspectRatio(settings.aspectRatio).ratio;

  const cardShellStyle: CSSProperties = {
    background: settings.cardBg,
    "--card-ratio": String(ratio),
  } as CSSProperties;

  const handleSourceTypeChange = (type: CardSourceType) => {
    setSourceType(type);
    setError(null);
  };

  const handleTextChange = (value: string) => {
    setTextValue(value);
    setTweet((prev) => ({ ...prev, body: value || DEFAULT_TWEET.body }));
  };

  const handleFetchUrl = async () => {
    if (!urlValue.trim()) return;
    setIsLoading(true);
    setError(null);
    try {
      const data =
        platform === "linkedin"
          ? await fetchLinkedInFromUrl(urlValue.trim())
          : await fetchTweetFromUrl(urlValue.trim());
      setTweet(data);
      if (platform === "linkedin" && data.mediaUrl) {
        setSettings((prev) => ({
          ...prev,
          showImage: true,
          imageUrl: data.mediaUrl ?? "",
        }));
      }
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : "Something went wrong fetching that post."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSettingsChange = (patch: Partial<CardSettings>) => {
    setSettings((prev) => ({ ...prev, ...patch }));
  };

  return (
    <section
      aria-label="Tweet to image editor"
      className="mx-auto max-w-6xl px-6 pb-20 pt-4"
    >
      <div className="grid gap-6 lg:gap-10 lg:grid-cols-[minmax(0,380px)_1fr] grid-cols-[1fr]">
        {/* Editor rail — constrained to viewport, never stretched by preview */}
        <div className="space-y-8 animate-rise order-2 lg:order-1 min-w-0 w-full overflow-x-hidden max-w-screen">
          <InputSection
            platform={platform}
            sourceType={sourceType}
            onSourceTypeChange={handleSourceTypeChange}
            urlValue={urlValue}
            onUrlChange={setUrlValue}
            textValue={textValue}
            onTextChange={handleTextChange}
            onFetchUrl={handleFetchUrl}
            isLoading={isLoading}
            error={error}
          />
          <CustomizationPanel settings={settings} onChange={handleSettingsChange} platform={platform} />
        </div>

        {/* Live preview should stay fluid and viewport-safe. The export takes an
             exact-size snapshot separately, so the desktop preview never needs to
             force a fixed width that causes crop or overflow. */}
        <div className="order-1 flex flex-col items-center gap-6 lg:order-2">
          <div className="w-full max-w-full overflow-hidden" style={{ background: settings.cardBg }}>
            <div
              ref={cardRef}
              className="card-shell mx-auto flex w-full flex-col items-stretch rounded-[28px] p-6 sm:p-12"
              style={cardShellStyle}
            >
              <PreviewCard tweet={tweet} settings={settings} platform={platform} />
            </div>
          </div>
          <p className="block lg:hidden text-center text-xs text-cloud-muted px-4 py-2">
            This preview is just to see how the theme looks — it is not an aspect ratio preview.
            The image you download will always be in whichever aspect ratio you have set above.
          </p>
          <div className="mx-auto w-full max-w-[440px] shrink-0">
            <ActionButtons
              cardRef={cardRef}
              cardType={sourceType}
              themeUsed={settings.themeId}
              tweetUrl={sourceType === "url" ? urlValue : undefined}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

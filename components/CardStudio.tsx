"use client";

import { useRef, useState, type CSSProperties } from "react";
import InputSection from "./InputSection";
import CustomizationPanel from "./CustomizationPanel";
import PreviewCard from "./PreviewCard";
import ActionButtons from "./ActionButtons";
import { fetchTweetFromUrl, ApiError } from "@/lib/api";
import { getAspectRatio } from "@/lib/themes";
import {
  CardSettings,
  CardSourceType,
  DEFAULT_SETTINGS,
  DEFAULT_TWEET,
  TweetData,
} from "@/lib/types";

// Top-level client component: owns all editor state and wires the
// input, customization panel, live preview, and export actions together.
export default function CardStudio() {
  const [sourceType, setSourceType] = useState<CardSourceType>("custom_text");
  const [urlValue, setUrlValue] = useState("");
  const [textValue, setTextValue] = useState(DEFAULT_TWEET.body);
  const [tweet, setTweet] = useState<TweetData>(DEFAULT_TWEET);
  const [settings, setSettings] = useState<CardSettings>(DEFAULT_SETTINGS);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);

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
      const data = await fetchTweetFromUrl(urlValue.trim());
      setTweet(data);
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : "Something went wrong fetching that tweet."
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
      <div className="grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr]">
        {/* Editor rail */}
        <div className="space-y-8 animate-rise order-2 lg:order-1">
          <InputSection
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
          <CustomizationPanel settings={settings} onChange={handleSettingsChange} />
        </div>

        {/* Easel / live preview */}
        <div className="flex flex-col items-center gap-6 order-1 lg:order-2">
          <div
            ref={cardRef}
            className="card-frame flex w-full items-center justify-center rounded-[28px] p-6 sm:p-16"
            style={{
              background: settings.cardBg,
              "--card-ratio": getAspectRatio(settings.aspectRatio).ratio,
              maxWidth: "540px",
            } as CSSProperties}
          >
            <PreviewCard tweet={tweet} settings={settings} />
          </div>
          <div className="w-full max-w-[440px]">
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

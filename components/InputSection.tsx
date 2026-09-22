"use client";

import { Link2, Type, Loader2 } from "lucide-react";
import { CardSourceType } from "@/lib/types";

interface InputSectionProps {
  sourceType: CardSourceType;
  onSourceTypeChange: (type: CardSourceType) => void;
  urlValue: string;
  onUrlChange: (value: string) => void;
  textValue: string;
  onTextChange: (value: string) => void;
  onFetchUrl: () => void;
  isLoading: boolean;
  error: string | null;
}

export default function InputSection({
  sourceType,
  onSourceTypeChange,
  urlValue,
  onUrlChange,
  textValue,
  onTextChange,
  onFetchUrl,
  isLoading,
  error,
}: InputSectionProps) {
  return (
    <section aria-labelledby="input-heading" className="space-y-4">
      <h2 id="input-heading" className="font-display text-xl text-cloud">
        1. Add your content
      </h2>

      <div
        role="tablist"
        aria-label="Card content source"
        className="inline-flex rounded-full bg-ink-soft p-1 border border-ink-line/60"
      >
        <button
          role="tab"
          aria-selected={sourceType === "url"}
          onClick={() => onSourceTypeChange("url")}
          className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            sourceType === "url"
              ? "bg-brass text-ink"
              : "text-cloud-muted hover:text-cloud"
          }`}
        >
          <Link2 size={14} /> Tweet URL
        </button>
        <button
          role="tab"
          aria-selected={sourceType === "custom_text"}
          onClick={() => onSourceTypeChange("custom_text")}
          className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            sourceType === "custom_text"
              ? "bg-brass text-ink"
              : "text-cloud-muted hover:text-cloud"
          }`}
        >
          <Type size={14} /> Write text
        </button>
      </div>

      {sourceType === "url" ? (
        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              type="url"
              inputMode="url"
              placeholder="https://x.com/username/status/1234567890"
              value={urlValue}
              onChange={(e) => onUrlChange(e.target.value)}
              className="flex-1 rounded-xl bg-ink-soft border border-ink-line/60 px-4 py-2.5 text-sm text-cloud placeholder:text-cloud-muted/70 focus:border-brass outline-none"
              aria-label="Twitter or X post URL"
            />
            <button
              onClick={onFetchUrl}
              disabled={isLoading || !urlValue.trim()}
              className="shrink-0 rounded-xl bg-brass px-4 py-2.5 text-sm font-semibold text-ink disabled:opacity-40 hover:bg-brass-soft transition-colors flex items-center gap-2"
            >
              {isLoading && <Loader2 size={14} className="animate-spin" />}
              {isLoading ? "Fetching" : "Fetch"}
            </button>
          </div>
          {error && (
            <p role="alert" className="text-sm text-[#FF9A8A]">
              {error}
            </p>
          )}
        </div>
      ) : (
        <textarea
          value={textValue}
          onChange={(e) => onTextChange(e.target.value)}
          maxLength={280}
          rows={4}
          placeholder="Write the words you want on your card..."
          className="w-full resize-none rounded-xl bg-ink-soft border border-ink-line/60 px-4 py-3 text-sm text-cloud placeholder:text-cloud-muted/70 focus:border-brass outline-none"
          aria-label="Custom card text"
        />
      )}
    </section>
  );
}

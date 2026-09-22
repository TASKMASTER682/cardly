"use client";

import { type CSSProperties } from "react";
import Image from "next/image";
import { Heart, Repeat2, MessageCircle } from "lucide-react";
import { CardSettings, TweetData } from "@/lib/types";
import { getTheme, getAspectRatio } from "@/lib/themes";

interface PreviewCardProps {
  tweet: TweetData;
  settings: CardSettings;
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return `${n}`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function PreviewCard({ tweet, settings }: PreviewCardProps) {
  const theme = getTheme(settings.themeId);
  const aspect = getAspectRatio(settings.aspectRatio);
  const shadowOpacity = (settings.shadowIntensity / 100) * 0.6;

  return (
    <div
      id="preview-card"
      className={`card-frame relative flex w-full max-w-[440px] items-stretch overflow-hidden p-6 sm:p-10 ${theme.background}`}
      style={{
        "--card-ratio": aspect.ratio,
        borderRadius: `${settings.cornerRadius}px`,
        boxShadow: `0 30px 60px -15px rgba(0,0,0,${shadowOpacity})`,
      } as CSSProperties}
    >
      <div className="card-scroll flex w-full flex-col overflow-x-hidden overflow-y-auto">
        <div className="my-auto flex flex-col">
          <div className={`flex items-center gap-3 shrink-0 ${theme.textClass}`}>
            {settings.showAvatar && (
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20">
                <Image
                  src={tweet.avatarUrl}
                  alt={`${tweet.authorName} avatar`}
                  fill
                  sizes="44px"
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
            <div className="min-w-0">
              <p
                className="truncate font-extrabold leading-tight"
                style={settings.authorNameColor ? { color: settings.authorNameColor } : undefined}
              >
                {tweet.authorName}
              </p>
              <p
                className={`truncate text-sm ${!settings.authorHandleColor ? theme.accentClass : ""}`}
                style={settings.authorHandleColor ? { color: settings.authorHandleColor } : undefined}
              >
                {tweet.authorHandle}
              </p>
            </div>
          </div>

          <p className={`mt-8 whitespace-pre-wrap text-[1.35rem] font-medium leading-snug ${theme.textClass}`}>
            {tweet.body}
          </p>

          {(settings.showDate || settings.showMetrics) && (
            <div className={`flex flex-wrap items-center gap-4 text-sm shrink-0 mt-8 ${theme.accentClass}`}>
              {settings.showDate && <span>{formatDate(tweet.createdAt)}</span>}
              {settings.showMetrics && (
                <>
                  <span className="flex items-center gap-1.5">
                    <Heart size={14} /> {formatCount(tweet.metrics.likes)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Repeat2 size={14} /> {formatCount(tweet.metrics.reposts)}
                  </span>
                  {typeof tweet.metrics.replies === "number" && (
                    <span className="flex items-center gap-1.5">
                      <MessageCircle size={14} /> {formatCount(tweet.metrics.replies)}
                    </span>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {settings.showBranding && (
        <p className={`absolute bottom-4 right-5 text-xs opacity-70 ${theme.textClass}`}>
          {settings.brandingText}
        </p>
      )}
    </div>
  );
}

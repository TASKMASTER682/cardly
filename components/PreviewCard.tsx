"use client";

import { type CSSProperties } from "react";
import Image from "next/image";
import { Heart, Repeat2, MessageCircle } from "lucide-react";
import { CardSettings, TweetData } from "@/lib/types";
import { getTheme } from "@/lib/themes";
import type { Platform } from "./CardStudio";

interface PreviewCardProps {
  tweet: TweetData;
  settings: CardSettings;
  platform?: Platform;
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

// Theme-matched X mark (inline SVG so color follows currentColor).
function XMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Theme-matched LinkedIn mark (inline SVG so color follows currentColor).
function LinkedInMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function PreviewCard({ tweet, settings, platform = "twitter" }: PreviewCardProps) {
  const theme = getTheme(settings.themeId);
  const shadowOpacity = (settings.shadowIntensity / 100) * 0.6;
  const cardShadow = [
    theme.shadow ?? `0 30px 60px -15px rgba(0,0,0,${shadowOpacity})`,
    theme.glowShadow,
  ]
    .filter(Boolean)
    .join(", ");

  // Content truncation: 100% shows everything, less shows only the first
  // N% of characters followed by accent-colored dots.
  const truncated =
    settings.truncateLength < 100 && tweet.body.length > 0
      ? Math.max(1, Math.floor((tweet.body.length * settings.truncateLength) / 100))
      : tweet.body.length;
  const bodyVisible = tweet.body.slice(0, truncated);
  const bodyTruncated = truncated < tweet.body.length;

  return (
    <div
      id="preview-card"
      className={`relative flex w-full flex-1 flex-col p-6 ${theme.background} ${theme.cardClass ?? ""}`}
      style={{
        borderRadius: `${settings.cornerRadius}px`,
        boxShadow: cardShadow,
      } as CSSProperties}
    >
      <div className="flex w-full flex-1 flex-col">
        <div className={`flex items-center gap-3 shrink-0 ${theme.textClass}`}>
          {settings.showAvatar && (
            <div
              className={`relative h-11 w-11 shrink-0 overflow-hidden rounded-full ${
                theme.avatarClass ?? "ring-2 ring-white/20"
              }`}
            >
              {/* `unoptimized` is deliberate: avatars are 44px squares that are
                  frequently SVGs (dicebear) which the Next.js optimizer does not
                  handle, and html-to-image must read the exact source URL during
                  PNG export. Leave this flag in place. */}
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

        {settings.showImage && settings.imageUrl && (
          <div className="mt-6 flex shrink-0 w-full justify-center">
            {/* Deliberately a raw <img>: html-to-image walks the live DOM during
                export, and next/image's lazy-loading/srcset bookkeeping produces
                blank or low-res captures. Keep this element as-is. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={settings.imageUrl}
              alt=""
              loading="lazy"
              className={`block max-h-[380px] w-full object-contain ${theme.imageClass ?? "rounded-xl border border-white/20"}`}
            />
          </div>
        )}

        <div className="flex flex-1 flex-col justify-center">
          <p
            className={`mt-6 whitespace-pre-wrap font-medium leading-snug ${theme.textClass} ${theme.bodyClass ?? ""}`}
            style={{ fontSize: `${settings.fontSize}px` }}
          >
            {bodyVisible}
            {bodyTruncated && (
              <span className={`font-bold tracking-[0.2em] ${theme.accentClass}`}>
                {" "}
                ·····
              </span>
            )}
          </p>
        </div>

        {(settings.showDate || settings.showMetrics) && (
          <div className={`flex flex-wrap items-center gap-4 text-sm shrink-0 mt-6 ${theme.accentClass}`}>
              {settings.showDate && <span className={theme.chipClass}>{formatDate(tweet.createdAt)}</span>}
              {settings.showMetrics && (
                <>
                  <span className={`flex items-center gap-1.5 ${theme.chipClass ?? ""}`}>
                    <Heart size={14} /> {formatCount(tweet.metrics.likes)}
                  </span>
                  <span className={`flex items-center gap-1.5 ${theme.chipClass ?? ""}`}>
                    <Repeat2 size={14} /> {formatCount(tweet.metrics.reposts)}
                  </span>
                  {typeof tweet.metrics.replies === "number" && (
                    <span className={`flex items-center gap-1.5 ${theme.chipClass ?? ""}`}>
                      <MessageCircle size={14} /> {formatCount(tweet.metrics.replies)}
                    </span>
                  )}
                </>
              )}
</div>
          )}
        </div>

        {settings.showLogo && (
        <span
          className={`absolute top-4 right-5 ${theme.logoClass ?? theme.accentClass}`}
        >
          {platform === "linkedin" ? <LinkedInMark /> : <XMark />}
        </span>
      )}

      {settings.showBranding && (
        <p className={`absolute bottom-4 right-5 text-xs opacity-70 ${theme.textClass}`}>
          {settings.brandingText}
        </p>
      )}
    </div>
  );
}

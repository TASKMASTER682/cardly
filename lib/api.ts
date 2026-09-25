import { CardSourceType, TweetData } from "./types";

// Base URL for the Express backend. Set NEXT_PUBLIC_API_URL in .env.local
// (e.g. http://localhost:4000 in dev, your Render/Railway URL in prod).
const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export class ApiError extends Error {}

/**
 * Resolves a Twitter/X post URL into clean tweet data via our backend,
 * which proxies the public oEmbed endpoint (avoids CORS + hides logic).
 */
export async function fetchTweetFromUrl(url: string): Promise<TweetData> {
  const res = await fetch(`${API_BASE}/api/fetch-tweet`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  if (!res.ok) {
    const payload = await res.json().catch(() => ({}));
    throw new ApiError(payload?.message ?? "Could not fetch that tweet. Check the URL and try again.");
  }

  return res.json();
}

/**
 * Resolves a LinkedIn post URL into card-ready data via our backend, which
 * proxies LinkedIn's public embed endpoint (avoiding CORS + hiding logic).
 */
export async function fetchLinkedInFromUrl(url: string): Promise<TweetData> {
  const res = await fetch(`${API_BASE}/api/fetch-linkedin-post`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  if (!res.ok) {
    const payload = await res.json().catch(() => ({}));
    throw new ApiError(
      payload?.message ?? "Could not fetch that LinkedIn post. Check the URL and try again."
    );
  }

  return res.json();
}

/**
 * Fire-and-forget analytics ping. Never blocks or throws into the UI —
 * a failed analytics call should never stop someone from downloading their card.
 */
export function trackCardEvent(input: {
  cardType: CardSourceType;
  themeUsed: string;
  tweetUrl?: string;
}): void {
  fetch(`${API_BASE}/api/analytics/track`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
    keepalive: true,
  }).catch(() => {
    // Analytics is best-effort. Silently ignore network failures.
  });
}

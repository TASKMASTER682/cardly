import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGE } from "@/lib/og";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frameposting.com";

export const metadata: Metadata = {
  title: "Best Free Tweet-to-Image & LinkedIn-to-Image Tools & Alternatives",
  description:
    "Compare the best free tweet-to-image and social card generators — TweetsPic, TweetPik, Pikaso, and Frame Posting — plus free LinkedIn post to image converters. Find the right tool for your social graphics.",
  alternates: { canonical: "/alternatives" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/alternatives`,
    title: "Best Free Tweet-to-Image & LinkedIn-to-Image Tools & Alternatives | Frame Posting",
    description:
      "Compare the best free tweet-to-image and social card generators — TweetsPic, TweetPik, Pikaso, and Frame Posting — plus free LinkedIn post to image converters.",
    images: [OG_IMAGE],
  },
};

const TWEET_COMPETITORS = [
  {
    name: "TweetsPic",
    summary:
      "TweetsPic is a dedicated X (Twitter) post-to-image service aimed at creators who want clean tweet graphics without taking screenshots. Like most specialized tools it focuses purely on X-style cards, which means you get strong presets but little flexibility for other platforms — and the free tier often pushes you toward a paid account for higher resolutions.",
    advantage:
      "Frame Posting gives you the same tweet-to-image flow with free export, optional branding off by default, and aspect ratios that also fit Instagram, LinkedIn and Pinterest.",
  },
  {
    name: "TweetPik",
    summary:
      "TweetPik is one of the most popular tweet styling tools, offering templates, branding and analytics around TweetPik-branded cards. It is a polished product, but watermark removal, high-resolution export and customization are gated behind a monthly paid plan, and an account is required before you can style a post.",
    advantage:
      "As a genuine free TweetPik alternative, Frame Posting unlocks high-resolution exports without a watermark or account — no paywall between you and the final image.",
  },
  {
    name: "Pikaso",
    summary:
      "Pikaso focuses on X spaces, live streams and tweet screenshots, with scheduling and analytics bolted on for social media managers. It is powerful for publishing workflows, but if your only need is a fast, beautiful social card from a post or piece of text, the extra tooling is overkill.",
    advantage:
      "Frame Posting is purpose-built for one thing: turning a post into a shareable graphic in seconds, with no account and no feature clutter.",
  },
];

const LINKEDIN_COMPETITORS = [
  {
    name: "Postline",
    summary:
      "Postline offers LinkedIn post-to-image conversion with templates and scheduling features. It targets social media managers who need scheduling, but the free tier limits exports and adds watermarks unless you upgrade.",
    advantage:
      "Frame Posting gives you LinkedIn post-to-image conversion with zero watermarks, no account required, and full aspect-ratio control (16:9, 1:1, 4:5, 9:16) for free.",
  },
  {
    name: "AuthoredUp",
    summary:
      "AuthoredUp is a comprehensive LinkedIn content tool with post formatting, preview, and image generation. It's feature-rich for power users, but the free plan limits image exports and requires an account login.",
    advantage:
      "Frame Posting's LinkedIn post to image converter works without any login, gives full-resolution exports instantly, and supports carousel-friendly ratios out of the box.",
  },
  {
    name: "Taplio",
    summary:
      "Taplio is an all-in-one LinkedIn growth platform with AI content generation, scheduling, and post-to-image features. It's built for serious LinkedIn growth, but the free plan is very limited and the paid tiers are expensive.",
    advantage:
      "If you just need a quick, free LinkedIn post to image conversion without the platform overhead, Frame Posting does exactly that — no account, no limits, no watermark.",
  },
];

export default function AlternativesPage() {
  return (
    <main>
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <p className="text-sm text-brass-soft font-medium">
            Comparison guide &middot; Free tweet & LinkedIn post screenshots without the paywall
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.08] text-cloud">
            The Best Free Alternatives to TweetsPic, TweetPik, Pikaso & LinkedIn Tools
          </h1>
          <p className="mt-5 text-cloud-muted text-lg leading-relaxed">
            The top tweet-to-image tools — TweetsPic, TweetPik, and Pikaso — all gate high-resolution exports or watermark removal behind paid plans. The same is true for LinkedIn-specific tools like Postline, AuthoredUp, and Taplio. Frame Posting is different: one free, watermark-free generator that handles both X/Twitter <strong>and</strong> LinkedIn posts, with no account required.
          </p>
        </div>
      </section>

      {/* --- Tweet-to-Image Alternatives --- */}
      <section className="border-b border-ink-line/60 bg-ink-soft/40">
        <div className="mx-auto max-w-4xl px-6 py-14 space-y-12">
          <h2 className="font-display text-3xl text-cloud mb-6">
            Free X / Twitter Post-to-Image Alternatives
          </h2>
          {TWEET_COMPETITORS.map((competitor) => (
            <div key={competitor.name}>
              <h3 className="font-display text-2xl text-cloud mb-3">
                {competitor.name} — overview
              </h3>
              <p className="text-cloud-muted leading-relaxed mb-4">
                {competitor.summary}
              </p>
              <p className="text-cloud-muted leading-relaxed">
                <strong className="text-brass-soft">How Frame Posting differs:</strong>{" "}
                {competitor.advantage}
              </p>
            </div>
          ))}

          <div className="rounded-2xl border border-ink-line/60 p-6">
            <p className="text-cloud-muted leading-relaxed">
              Want a detailed breakdown of the most common competitor? Read
              the full{" "}
              <Link
                href="/tweetpik-alternative"
                className="text-brass-soft underline underline-offset-4 hover:text-brass"
              >
                free TweetPik alternative guide
              </Link>
              , then try the editor risk-free.
            </p>
            <Link
              href="/"
              className="mt-4 inline-block rounded-xl bg-brass px-6 py-3 text-sm font-semibold text-ink hover:bg-brass-soft transition-colors"
            >
              Open the free tweet to image generator
            </Link>
          </div>
        </div>
      </section>

      {/* --- LinkedIn-to-Image Alternatives --- */}
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-14 space-y-12">
          <h2 className="font-display text-3xl text-cloud mb-6">
            Free LinkedIn Post-to-Image Alternatives
          </h2>
          {LINKEDIN_COMPETITORS.map((competitor) => (
            <div key={competitor.name}>
              <h3 className="font-display text-2xl text-cloud mb-3">
                {competitor.name} — overview
              </h3>
              <p className="text-cloud-muted leading-relaxed mb-4">
                {competitor.summary}
              </p>
              <p className="text-cloud-muted leading-relaxed">
                <strong className="text-brass-soft">How Frame Posting differs:</strong>{" "}
                {competitor.advantage}
              </p>
            </div>
          ))}

          <div className="rounded-2xl border border-ink-line/60 p-6">
            <p className="text-cloud-muted leading-relaxed">
              See how Frame Posting compares for LinkedIn posts? Read the full{" "}
              <Link
                href="/linkedin-post-image-maker"
                className="text-brass-soft underline underline-offset-4 hover:text-brass"
              >
                free LinkedIn post to image converter guide
              </Link>
              , then try the LinkedIn editor.
            </p>
            <Link
              href="/linkedin-post-image-maker"
              className="mt-4 inline-block rounded-xl bg-brass px-6 py-3 text-sm font-semibold text-ink hover:bg-brass-soft transition-colors"
            >
              Open the free LinkedIn post to image generator
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-12 text-center">
          <p className="text-cloud-muted mb-6">
            One free tool for both X/Twitter and LinkedIn posts — no account, no watermark, no limits.
          </p>
          <Link
            href="/"
            className="inline-block rounded-xl bg-brass px-6 py-3 text-sm font-semibold text-ink hover:bg-brass-soft transition-colors"
          >
            Open Frame Posting (Free)
          </Link>
        </div>
      </section>
    </main>
  );
}
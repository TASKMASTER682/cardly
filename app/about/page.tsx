import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/og";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frameposting.com";

export const metadata: Metadata = {
  title: "About Frame Posting — Free Tweet to Image Generator",
  description:
    "Frame Posting was built to solve messy screenshots. Convert tweets, LinkedIn posts, and text into studio-quality visual assets and quote cards in seconds.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    title: "About Frame Posting — Free Tweet to Image Generator",
    description:
      "Frame Posting was built to solve messy screenshots. Convert tweets, LinkedIn posts, and text into studio-quality visual assets and quote cards in seconds.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Frame Posting — Free Tweet to Image Generator",
    description:
      "Frame Posting was built to solve messy screenshots. Convert tweets, LinkedIn posts, and text into studio-quality visual assets and quote cards in seconds.",
    images: [OG_IMAGE],
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <p className="text-sm text-brass-soft font-medium">
            Built for creators, by a creator
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.08] text-cloud">
            About Frame Posting
          </h1>
        </div>
      </section>

      <section className="border-b border-ink-line/60 bg-ink-soft/40">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16 space-y-6 text-cloud-muted leading-relaxed">
          <p>
            Frame Posting was built to solve a simple yet frustrating problem:
            standard device screenshots look messy, inconsistent, and unpolished
            when shared across different feeds. Browser chrome, scrollbars,
            awkward cropping, and pixelated text dilute the impact of great
            ideas.
          </p>
          <p>
            We created Frame Posting to give creators, marketers, and founders
            an effortless way to convert tweets, LinkedIn posts, and text
            updates into studio-quality visual assets and quote cards in
            seconds.
          </p>
        </div>
      </section>

      <section className="border-t border-ink-line/60 bg-ink-soft/40">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <h2 className="font-display text-3xl text-cloud mb-6">
            Our Mission
          </h2>
          <p className="text-cloud-muted leading-relaxed">
            Our goal is to help you maximize the reach of your written
            content. Social media algorithms favor native visual media over
            external links or raw screen captures. By transforming links and
            text into high-resolution graphic cards, Frame Posting helps your
            posts capture attention, boost dwell time, and maintain a
            consistent visual identity across any platform. If you are
            looking for a powerful TweetPik alternative, Frame Posting
            delivers the same polished results without a watermark or
            account requirement.
          </p>
        </div>
      </section>

      <section className="border-t border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <h2 className="font-display text-3xl text-cloud mb-6">
            Why Use Frame Posting?
          </h2>
          <ul className="space-y-4 text-cloud-muted leading-relaxed list-disc list-inside">
            <li>
              <strong className="text-cloud">No UI Clutter:</strong> Say
              goodbye to battery icons, browser address bars, and notification
              badges in your graphics.
            </li>
            <li>
              <strong className="text-cloud">Algorithm-Friendly Formats:</strong>{" "}
              Create clean visual media optimized for LinkedIn, X (Twitter),
              Instagram Stories, and news briefs. Whether you need a
              TweetPik alternative for Twitter cards or a LinkedIn post
              converter, Frame Posting handles it all.
            </li>
            <li>
              <strong className="text-cloud">Vector-Quality Output:</strong>{" "}
              Export crisp 2x resolution PNGs and SVGs that stay sharp on
              high-density retina displays.
            </li>
            <li>
              <strong className="text-cloud">Fast &amp; Privacy-Focused:</strong>{" "}
              No manual typing required. Paste a link, customize your canvas
              gradient, and download immediately—no watermark or forced
              sign-up.
            </li>
          </ul>
        </div>
      </section>

      <section className="border-t border-ink-line/60 bg-ink-soft/40">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16 space-y-6 text-cloud-muted leading-relaxed">
          <h2 className="font-display text-3xl text-cloud mb-6">
            Who Built Frame Posting?
          </h2>
          <p>
            Frame Posting was created by a creator who got tired of manually
            editing messy LinkedIn and Twitter screenshots in complex design
            software just to re-share a single quote. Built out of practical
            necessity, Frame Posting continues to evolve based on direct
            feedback from the creator community.
          </p>
          <p>
            Got questions or feature suggestions? Feel free to reach out via our{" "}
            <a
              href="/contact"
              className="text-brass-soft underline underline-offset-4 hover:text-brass"
            >
              Contact Page
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

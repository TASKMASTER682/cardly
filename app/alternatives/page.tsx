import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frameposting.com";

export const metadata: Metadata = {
  title: "Best Free Tweet-to-Image Tools & Alternatives",
  description:
    "Compare the best free tweet-to-image and social card generators — TweetsPic, TweetPik, Pikaso, and Frame Posting — to find the right tool for your social graphics.",
  alternates: { canonical: "/alternatives" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/alternatives`,
    title: "Best Free Tweet-to-Image Tools & Alternatives | Frame Posting",
    description:
      "Compare the best free tweet-to-image and social card generators — TweetsPic, TweetPik, Pikaso, and Frame Posting.",
  },
};

const COMPETITORS = [
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

export default function AlternativesPage() {
  return (
    <main>
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <p className="text-sm text-brass-soft font-medium">
            Comparison guide &middot; Tweet screenshots without the paywall
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.08] text-cloud">
            The Best Free Alternatives to TweetsPic, TweetPik, and Pikaso
          </h1>
          <p className="mt-5 text-cloud-muted text-lg leading-relaxed">
            All three tools do the same core job: turn an X post into a
            cleaner, more shareable image than a raw screenshot. The
            difference comes down to price, watermarks, and whether you can
            use the output without creating an account. Here is how they
            stack up against a free, watermark-free tweet to image generator
            like Frame Posting.
          </p>
        </div>
      </section>

      <section className="border-b border-ink-line/60 bg-ink-soft/40">
        <div className="mx-auto max-w-4xl px-6 py-14 space-y-12">
          {COMPETITORS.map((competitor) => (
            <div key={competitor.name}>
              <h2 className="font-display text-2xl text-cloud mb-3">
                {competitor.name} — overview
              </h2>
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
              <a
                href="/tweetpik-alternative"
                className="text-brass-soft underline underline-offset-4 hover:text-brass"
              >
                free TweetPik alternative guide
              </a>
              , then try the editor risk-free.
            </p>
            <a
              href="/"
              className="mt-4 inline-block rounded-xl bg-brass px-6 py-3 text-sm font-semibold text-ink hover:bg-brass-soft transition-colors"
            >
              Open the free tweet to image generator
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
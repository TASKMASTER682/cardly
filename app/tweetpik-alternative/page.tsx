import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import CardStudio from "@/components/CardStudio";
import FaqList from "@/components/FaqList";
import type { FaqItem } from "@/lib/faqs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frameposting.com";

export const metadata: Metadata = {
  title: "Free TweetPik Alternative (No Watermark, No Signup)",
  description:
    "Looking for a free TweetPik alternative? Frame Posting converts tweets and X posts into high-resolution images with no watermark and no account needed. Try it instantly.",
  alternates: { canonical: "/tweetpik-alternative" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/tweetpik-alternative`,
    title: "Free TweetPik Alternative (No Watermark, No Signup) | Frame Posting",
    description:
      "Looking for a free TweetPik alternative? Frame Posting converts tweets and X posts into high-resolution images with no watermark and no account needed.",
  },
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is Frame Posting completely free?",
    answer:
      "Yes — 100% free. Every theme, aspect ratio and export option works without an account, subscription or hidden paywall.",
  },
  {
    question: "Do I need an account to remove watermarks?",
    answer:
      "No. Exports are watermark-free by default; there is no account and no paid tier required to make social cards.",
  },
  {
    question: "Can I really convert a tweet without signing up?",
    answer:
      "Yes. Paste any x.com or twitter.com post URL into the tool above and download the finished card immediately, right in your browser.",
  },
  {
    question: "What makes Frame Posting different from TweetPik?",
    answer:
      "Frame Posting offers completely free high-resolution exports with unlimited access and no forced watermark, instead of gating those features behind a paid plan.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const COMPARISON_ROWS: {
  feature: string;
  framePosting: string | boolean;
  tweetpik: string | boolean;
}[] = [
  { feature: "Free tier access", framePosting: true, tweetpik: false },
  { feature: "Watermark on free exports", framePosting: false, tweetpik: true },
  { feature: "Account required", framePosting: false, tweetpik: true },
  { feature: "High-resolution export", framePosting: true, tweetpik: "Paid tier" },
  {
    feature: "Custom backgrounds & themes",
    framePosting: true,
    tweetpik: "Paid tier",
  },
];

export default function TweetpikAlternativePage() {
  return (
    <main>
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <p className="text-sm text-brass-soft font-medium">
            No watermark &middot; No account &middot; Free forever
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.08] text-cloud">
            The Free TweetPik Alternative With No Watermark
          </h1>
          <p className="mt-5 text-cloud-muted text-lg leading-relaxed">
            Frame Posting delivers the same polished tweet-to-image conversions you
            get from TweetPik, but without restrictive paywalls, forced
            watermarks, or account registration. Paste a tweet URL or write
            your own text, pick a theme, and export a retina-quality social
            card in seconds.
          </p>
        </div>
      </section>

      <section className="border-b border-ink-line/60 bg-ink-soft/40">
        <div className="mx-auto max-w-4xl px-6 py-14 sm:py-16">
          <h2 className="font-display text-3xl text-cloud mb-6">
            Frame Posting vs TweetPik — at a glance
          </h2>
          <div className="overflow-hidden rounded-2xl border border-ink-line/60">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-ink-soft text-cloud-muted">
                  <th scope="col" className="px-4 py-3 font-medium">
                    Feature
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium text-center">
                    Frame Posting
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium text-center">
                    TweetPik
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-line/50">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-4 py-3 text-cloud">{row.feature}</td>
                    <td className="px-4 py-3 text-center">
                      <CellValue value={row.framePosting} positive />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <CellValue value={row.tweetpik} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-cloud-muted">
            Try the free tool yourself below — no signup needed.{" "}
            <a
              href="/alternatives"
              className="text-brass-soft underline underline-offset-4 hover:text-brass"
            >
              See how Frame Posting compares to more tools
            </a>
            .
          </p>
        </div>
      </section>

      <CardStudio />

      <FaqList items={FAQ_ITEMS} />

      <section className="border-t border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-12 text-center">
          <a
            href="/"
            className="inline-block rounded-xl bg-brass px-6 py-3 text-sm font-semibold text-ink hover:bg-brass-soft transition-colors"
          >
            Back to the free tweet to image generator
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}

function CellValue({ value, positive }: { value: string | boolean; positive?: boolean }) {
  if (value === true) {
    return <Check size={16} className="inline text-brass-soft" />;
  }
  if (value === false) {
    return <X size={16} className="inline text-cloud-muted" />;
  }
  return <span className={positive ? "text-brass-soft" : "text-cloud-muted"}>{value}</span>;
}
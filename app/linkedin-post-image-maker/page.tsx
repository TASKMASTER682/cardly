import type { Metadata } from "next";
import CardStudio from "@/components/CardStudio";
import FaqList from "@/components/FaqList";
import type { FaqItem } from "@/lib/faqs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frameposting.com";

export const metadata: Metadata = {
  title: "Free LinkedIn Post Image Maker — No Watermark",
  description:
    "Convert LinkedIn posts and text into beautiful, shareable social graphics in seconds. Free, high-resolution, no watermark, and no signup required.",
  alternates: { canonical: "/linkedin-post-image-maker" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/linkedin-post-image-maker`,
    title: "Free LinkedIn Post Image Maker — No Watermark | Frame Posting",
    description:
      "Convert LinkedIn posts and text into beautiful, shareable social graphics in seconds — free, high-resolution, and no signup required.",
  },
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is the best image ratio for LinkedIn posts?",
    answer:
      "Use 16:9 for link-style banners and article covers, 1:1 for feed posts that need maximum thumbnail coverage, and 4:5 for taller portrait cards. Frame Posting supports all three plus 9:16, 2:3 and 4:3.",
  },
  {
    question: "Can I use Frame Posting without creating an account?",
    answer:
      "Yes. There is no account, no signup and no subscription — paste or type your content, style the card, and download it instantly.",
  },
  {
    question: "Does the LinkedIn image maker add a watermark?",
    answer:
      "No. Exported social cards are watermark-free by default. Optional \"Made with Frame Posting\" branding can be turned off entirely.",
  },
  {
    question: "Can I turn a LinkedIn post text into a carousel slide?",
    answer:
      "Yes. Switch to the text input, paste your post, and export at 4:5 or 16:9 to build a clean graphic for a LinkedIn carousel or document post.",
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

export default function LinkedinPostImageMakerPage() {
  return (
    <main>
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <p className="text-sm text-brass-soft font-medium">
            LinkedIn post image maker &middot; 16:9, 1:1 and 4:5 ready
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.08] text-cloud">
            Turn LinkedIn Posts &amp; Text Into Shareable Image Cards
          </h1>
          <p className="mt-5 text-cloud-muted text-lg leading-relaxed">
            A strong LinkedIn post starts with a graphic people stop scrolling
            for. Frame Posting converts LinkedIn posts and plain text into polished
            image cards — for carousel slides, quote cards, and feed banners —
            at the exact ratios LinkedIn renders best. Everything is free and
            watermark-free, with no account needed.
          </p>
        </div>
      </section>

      <section className="border-b border-ink-line/60 bg-ink-soft/40">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
          <h2 className="font-display text-3xl text-cloud mb-6">
            Why a LinkedIn post image maker matters
          </h2>
          <div className="space-y-5 text-cloud-muted leading-relaxed">
            <p>
              LinkedIn feeds reward native, visually rich content. Pasting raw
              text or a plain screenshot rarely holds attention — but a clean
              gradient card with a clear line of copy, your name and a crisp
              export reads like a brand asset. Use the editor below to convert
              a LinkedIn post to image at 16:9 for link previews, 1:1 for feed
              posts, or 4:5 if you are building a taller visual for a document
              post or carousel slide.
            </p>
            <p>
              The same tool doubles as a LinkedIn quote graphic maker: type a
              line of text, pick an aesthetic gradient or theme, adjust corner
              radius and shadow, and export at 2x resolution so the card stays
              sharp on every screen size LinkedIn uses.
            </p>
          </div>
        </div>
      </section>

      <CardStudio />

      <FaqList items={FAQ_ITEMS} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
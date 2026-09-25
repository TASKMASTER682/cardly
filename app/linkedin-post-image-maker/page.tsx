import type { Metadata } from "next";
import LazyCardStudio from "@/components/LazyCardStudio";
import FaqList from "@/components/FaqList";
import type { FaqItem } from "@/lib/faqs";
import { OG_IMAGE } from "@/lib/og";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frameposting.com";

export const metadata: Metadata = {
  title: "Free LinkedIn Post to Image Converter — Paste a Link",
  description:
    "Turn any public LinkedIn post into a clean, downloadable image card in seconds. No manual typing, no signups, and 100% free.",
  alternates: { canonical: "/linkedin-post-image-maker" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/linkedin-post-image-maker`,
    title: "Free LinkedIn Post to Image Converter — Paste a Link",
    description:
      "Turn any public LinkedIn post into a clean, downloadable image card in seconds. No manual typing, no signups, and 100% free.",
    images: [OG_IMAGE],
  },
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Do I need to log in or connect my LinkedIn account?",
    answer:
      "No. Frame Posting is completely independent. You don't need to link your account or log into LinkedIn—just paste the link to any public post and you're good to go.",
  },
  {
    question: "Does this tool work with private or restricted posts?",
    answer:
      "Frame Posting works with all public LinkedIn posts. If a post is set to private, restricted to specific connections, or hidden inside a private group, our system won't be able to fetch its details automatically.",
  },
  {
    question: "Is Frame Posting really 100% free?",
    answer:
      "Yes, absolutely. Generating cards and downloading high-resolution PNG or JPG files is free, without hidden limits or watermarks.",
  },
  {
    question: "Can I customize the image dimensions for different platforms?",
    answer:
      "Yes! You can adjust aspect ratios to fit square formats (ideal for Instagram posts), horizontal layouts (great for X/Twitter and LinkedIn), or portrait cards.",
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

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Frame Posting - LinkedIn Post to Image Converter",
  operatingSystem: "All",
  applicationCategory: "DeveloperApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Convert public LinkedIn post links into downloadable, beautiful social media image cards instantly.",
};

export default function LinkedinPostImageMakerPage() {
  return (
    <main>
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <p className="text-sm text-brass-soft font-medium">
            Free LinkedIn post to image converter &middot; No signup &middot; Watermark-free
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.08] text-cloud">
            Turn Any LinkedIn Post Into an Image — Just Paste the Link
          </h1>
          <p className="mt-5 text-cloud-muted text-lg leading-relaxed">
            Turn any public LinkedIn post into a clean, downloadable image card in
            seconds. No manual typing, no signups, and 100% free.
          </p>
        </div>
      </section>

      {/* Tool first — above the fold for immediate interaction */}
      <LazyCardStudio platform="linkedin" />

      <section id="how-it-works" className="border-t border-ink-line/60 bg-ink-soft/40">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
          <h2 className="font-display text-3xl text-cloud mb-6">
            How It Works in 3 Fast Steps
          </h2>
          <p className="text-cloud-muted leading-relaxed mb-8">
            We built Frame Posting so you never have to waste time manually
            retyping posts, taking messy screenshots, or fixing broken alignment.
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl text-cloud mb-2">
                1. Paste Your LinkedIn Link
              </h3>
              <p className="text-cloud-muted leading-relaxed">
                Grab the URL of any public LinkedIn post and drop it into the bar.
                Our engine immediately reads the link to pull in the original text,
                author profile picture, name, and headline automatically.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-cloud mb-2">
                2. Customize the Look & Feel
              </h3>
              <p className="text-cloud-muted leading-relaxed">
                Choose a background color, tweak the layout, and pick the perfect
                aspect ratio. Whether you need a 1:1 square for Instagram, a
                landscape card for X (Twitter), or a native LinkedIn preview style,
                you can match your personal aesthetic in a couple of clicks.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-cloud mb-2">
                3. Export Clean, High-Res Images
              </h3>
              <p className="text-cloud-muted leading-relaxed">
                Hit download to save your card as a crisp PNG or JPG. It&apos;s
                totally free, doesn&apos;t require an account, and comes with zero
                watermark cluttering your work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why-use" className="border-t border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
          <h2 className="font-display text-3xl text-cloud mb-6">
            Why Share LinkedIn Posts as Image Cards?
          </h2>
          <div className="space-y-5 text-cloud-muted leading-relaxed">
            <p>
              If you&apos;ve ever tried sharing a LinkedIn post on another platform,
              you know the friction: a plain text copy-paste strips out all the
              original formatting, buries the author&apos;s identity, and ends up
              looking like an unreadable block of copy. On the flip side, raw
              phone or browser screenshots often look pixelated, crop out important
              details, and bring along unwanted UI clutter like scrollbars and
              system battery icons.
            </p>
            <p>
              Converting your post into a dedicated image card solves all of that:
            </p>
            <ul className="list-disc list-inside space-y-3 text-cloud-muted">
              <li>
                <strong>Preserve Author Authority:</strong> Your profile picture,
                verified headline, and original layout stay intact—giving your
                content immediate credibility anywhere it&apos;s posted.
              </li>
              <li>
                <strong>Stop the Scroll on Visual Platforms:</strong> Instagram, X,
                Pinterest, and Slack channels thrive on visual content. An
                eye-catching image card grabs attention much faster than a
                standard text preview link.
              </li>
              <li>
                <strong>Repurpose in Seconds:</strong> Instead of drafting separate
                posts for every platform, take your best-performing LinkedIn
                insights and drop them straight into newsletters, blog posts, or
                Twitter threads as self-contained graphic cards.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="features" className="border-t border-ink-line/60 bg-ink-soft/40">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
          <h2 className="font-display text-3xl text-cloud mb-6">
            Built Differently: Zero Typing, Zero Fuss
          </h2>
          <ul className="space-y-5 text-cloud-muted leading-relaxed">
            <li>
              <strong>Smart Auto-Import:</strong> The URL does all the heavy
              lifting. You paste the link, and we grab the exact
              metadata—author name, avatar, headline, and body text—instantly.
            </li>
            <li>
              <strong>No Account Required:</strong> You don&apos;t need to log in,
              link your personal account, or give away email addresses to create
              an image.
            </li>
            <li>
              <strong>Watermark-Free Freedom:</strong> Your content should belong
              to you. Every export is completely clean and ready for professional
              distribution.
            </li>
          </ul>
        </div>
      </section>

      <section id="faq" className="border-t border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-14">
          <h2 className="font-display text-3xl text-cloud mb-6">
            Frequently Asked Questions
          </h2>
          <FaqList items={FAQ_ITEMS} />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
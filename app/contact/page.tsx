import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/og";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frameposting.com";

export const metadata: Metadata = {
  title: "Contact Us — Frame Posting",
  description:
    "Have a question, feedback, bug report, or feature request for Frame Posting? We'd love to hear from you. We read every message.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/contact`,
    title: "Contact Us — Frame Posting",
    description:
      "Have a question, feedback, bug report, or feature request for Frame Posting? We'd love to hear from you.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Frame Posting",
    description:
      "Have a question, feedback, bug report, or feature request for Frame Posting? We'd love to hear from you.",
    images: [OG_IMAGE],
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <p className="text-sm text-brass-soft font-medium">
            We read every message
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.08] text-cloud">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="border-t border-ink-line/60 bg-ink-soft/40">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16 space-y-6 text-cloud-muted leading-relaxed">
          <p>
            Have a question, feedback, bug report, or feature request for
            Frame Posting? We'd love to hear from you.
          </p>
          <p>
            We read every message and actively use creator input to build
            better design tools for social sharing.
          </p>
        </div>
      </section>

      <section className="border-t border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <h2 className="font-display text-3xl text-cloud mb-6">
            Get in Touch
          </h2>
          <ul className="space-y-4 text-cloud-muted leading-relaxed list-disc list-inside">
            <li>
              <strong className="text-cloud">General Inquiries &amp;
              Support:</strong>{" "}
              <a
                href="mailto:support@frameposting.com"
                className="text-brass-soft underline underline-offset-4 hover:text-brass"
              >
                support@frameposting.com
              </a>
            </li>
            <li>
              <strong className="text-cloud">Feedback &amp; Feature
              Requests:</strong> Send us an email at{" "}
              <a
                href="mailto:feedback@frameposting.com"
                className="text-brass-soft underline underline-offset-4 hover:text-brass"
              >
                feedback@frameposting.com
              </a>{" "}
              or reach out directly on Twitter/X{" "}
              <a
                href="https://x.com/FramePosting"
                className="text-brass-soft underline underline-offset-4 hover:text-brass"
                target="_blank"
                rel="noopener noreferrer"
              >
                @FramePosting
              </a>
              .
            </li>
          </ul>
        </div>
      </section>

      <section className="border-t border-ink-line/60 bg-ink-soft/40">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <h2 className="font-display text-3xl text-cloud mb-6">
            Frequently Asked Contact Questions
          </h2>
          <div className="space-y-6 text-cloud-muted leading-relaxed">
            <div>
              <h3 className="font-display text-xl text-cloud mb-2">
                How fast do you reply?
              </h3>
              <p>
                We typically respond to inquiries within 24 to 48 business
                hours.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-cloud mb-2">
                Can I request support for a new social media platform?
              </h3>
              <p>
                Yes! If there is a specific network, layout style, or custom
                aspect ratio you'd like us to support, send us a feature
                request via email. Whether you are looking for a TweetPik
                alternative with different platform support or need a
                unique layout, we are happy to consider it.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-cloud mb-2">
                Where can I report a rendering bug?
              </h3>
              <p>
                If a post URL isn't converting properly, please email us the
                exact link along with a screenshot of the display issue so we
                can fix it quickly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

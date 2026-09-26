import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/og";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frameposting.com";

export const metadata: Metadata = {
  title: "Terms of Service — Frame Posting",
  description:
    "Frame Posting terms of service. By accessing or using Frame Posting, you agree to be bound by these Terms of Service.",
  alternates: { canonical: "/terms" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/terms`,
    title: "Terms of Service — Frame Posting",
    description:
      "Frame Posting terms of service. By accessing or using Frame Posting, you agree to be bound by these Terms of Service.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — Frame Posting",
    description:
      "Frame Posting terms of service. By accessing or using Frame Posting, you agree to be bound by these Terms of Service.",
    images: [OG_IMAGE],
  },
};

export default function TermsPage() {
  return (
    <main>
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <p className="text-sm text-brass-soft font-medium">
            Please read these terms carefully
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.08] text-cloud">
            Terms of Service
          </h1>
          <p className="mt-4 text-cloud-muted text-sm">
            <strong>Last Updated:</strong> September 26, 2026
          </p>
        </div>
      </section>

      <section className="border-t border-ink-line/60 bg-ink-soft/40">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16 space-y-6 text-cloud-muted leading-relaxed">
          <p>
            By accessing or using Frame Posting (frameposting.com), you agree
            to be bound by these Terms of Service. If you do not agree to
            these terms, please do not use our services.
          </p>

          <h2 className="font-display text-2xl text-cloud mt-4 mb-3">
            1. Description of Service
          </h2>
          <p>
            Frame Posting provides web-based tools that allow users to import,
            format, and generate downloadable graphic cards from public text,
            links, and user inputs. If you previously used a TweetPik
            alternative, you will find Frame Posting offers the same core
            features with fewer restrictions.
          </p>

          <h2 className="font-display text-2xl text-cloud mt-4 mb-3">
            2. Acceptable Use &amp; Intellectual Property
          </h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>
              <strong className="text-cloud">User Responsibility:</strong> You
              are solely responsible for the content you convert, export, and
              distribute using Frame Posting. You agree not to use this
              service to generate harmful, defamatory, or misleading graphic
              assets.
            </li>
            <li>
              <strong className="text-cloud">Third-Party Rights:</strong>{" "}
              Converting public posts or third-party content into images does
              not transfer copyright ownership. You are responsible for
              respecting the copyright and intellectual property rights of
              original content creators when sharing generated cards
              publicly.
            </li>
          </ul>

          <h2 className="font-display text-2xl text-cloud mt-4 mb-3">
            3. Tool Availability &amp; Disclaimer
          </h2>
          <p>
            Frame Posting is provided on an <strong>AS IS</strong> and{" "}
            <strong>AS AVAILABLE</strong> basis without warranties of any
            kind, either express or implied. While we strive for 100% uptime
            and high accuracy in link fetching, we do not guarantee
            uninterrupted access or error-free rendering.
          </p>

          <h2 className="font-display text-2xl text-cloud mt-4 mb-3">
            4. Limitation of Liability
          </h2>
          <p>
            In no event shall Frame Posting or its owners be liable for any
            indirect, incidental, or consequential damages resulting from
            the use or inability to use our graphic generation service.
          </p>

          <h2 className="font-display text-2xl text-cloud mt-4 mb-3">
            5. Changes to Terms
          </h2>
          <p>
            We reserve the right to update these terms at any time.
            Continued use of the website following any changes constitutes
            acceptance of those updates.
          </p>

          <h2 className="font-display text-2xl text-cloud mt-4 mb-3">
            6. Contact
          </h2>
          <p>
            For legal inquiries regarding these terms, contact us at{" "}
            <a
              href="mailto:legal@frameposting.com"
              className="text-brass-soft underline underline-offset-4 hover:text-brass"
            >
              legal@frameposting.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

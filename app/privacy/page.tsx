import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/og";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frameposting.com";

export const metadata: Metadata = {
  title: "Privacy Policy — Frame Posting",
  description:
    "Frame Posting privacy policy. Learn what information we collect, how we handle public URL parsing, and how we protect your information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/privacy`,
    title: "Privacy Policy — Frame Posting",
    description:
      "Frame Posting privacy policy. Learn what information we collect, how we handle public URL parsing, and how we protect your information.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Frame Posting",
    description:
      "Frame Posting privacy policy. Learn what information we collect, how we handle public URL parsing, and how we protect your information.",
    images: [OG_IMAGE],
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="border-b border-ink-line/60">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
          <p className="text-sm text-brass-soft font-medium">
            Accessible privacy and transparency
          </p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.08] text-cloud">
            Privacy Policy
          </h1>
          <p className="mt-4 text-cloud-muted text-sm">
            <strong>Last Updated:</strong> September 26, 2026
          </p>
        </div>
      </section>

      <section className="border-t border-ink-line/60 bg-ink-soft/40">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16 space-y-6 text-cloud-muted leading-relaxed">
          <p>
            At Frame Posting (accessible via frameposting.com), accessible
            privacy and transparency are core principles. This Privacy Policy
            outlines what information we collect, how we handle public URL
            parsing, and how we protect your information when you use our
            web-based image generation tools.
          </p>

          <h2 className="font-display text-2xl text-cloud mt-4 mb-3">
            1. Information We Collect
          </h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>
              <strong className="text-cloud">Public URLs &amp; Link
              Inputs:</strong> When you paste a public URL (such as a tweet or
              LinkedIn post) into our editor, our servers temporarily fetch the
              publicly accessible metadata (text, avatar, handles, and media)
              required to construct your custom visual card. We do not store or
              claim ownership of the content you import.
            </li>
            <li>
              <strong className="text-cloud">Usage &amp; Analytics
              Data:</strong> We collect basic, non-personally identifiable
              analytical data (such as page views, device type, browser
              platform, and export event counts) to help us optimize
              performance and track server load.
            </li>
            <li>
              <strong className="text-cloud">Cookies:</strong> We use minimal
              essential cookies or local storage strictly to remember your
              design preferences (such as dark mode toggles or selected
              gradient presets) on your device.
            </li>
            <li>
              <strong className="text-cloud">Third-Party Platform Data:</strong>
              When fetching post data from platforms like X or LinkedIn, we
              only retrieve publicly available metadata required to render
              your card. As a privacy-respecting TweetPik alternative, we
              never sell or share this data with third parties.
            </li>
          </ul>

          <h2 className="font-display text-2xl text-cloud mt-4 mb-3">
            2. Third-Party Services
          </h2>
          <p>
            We may utilize privacy-friendly third-party infrastructure
            providers for server hosting, analytics, and content delivery
            (CDNs). These providers only process data necessary to render
            assets and deliver fast loading speeds across global networks.
          </p>

          <h2 className="font-display text-2xl text-cloud mt-4 mb-3">
            3. Data Storage &amp; Security
          </h2>
          <p>
            Frame Posting does not require account creation, passwords, or
            personal login information. Images generated on our platform are
            processed dynamically and rendered client-side or transiently in
            memory, meaning your exported graphic files are never stored
            permanently on our public database servers.
          </p>

          <h2 className="font-display text-2xl text-cloud mt-4 mb-3">
            4. Contact Information
          </h2>
          <p>
            For privacy concerns or inquiries regarding data processing,
            please contact us at{" "}
            <a
              href="mailto:privacy@frameposting.com"
              className="text-brass-soft underline underline-offset-4 hover:text-brass"
            >
              privacy@frameposting.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

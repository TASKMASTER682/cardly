import type { Metadata } from "next";
import Link from "next/link";
import { OG_IMAGE } from "@/lib/og";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://frameposting.com";

export const metadata: Metadata = {
  title: "Page Not Found — Frame Posting",
  description: "The page you're looking for doesn't exist. Return to the free tweet to image generator.",
  alternates: { canonical: "/404" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/404`,
    title: "Page Not Found — Frame Posting",
    description: "The page you're looking for doesn't exist.",
    images: [OG_IMAGE],
  },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center">
      <p className="text-sm font-medium text-brass-soft">404 — page not found</p>
      <h1 className="mt-4 font-display text-4xl text-cloud">
        This frame doesn&apos;t exist
      </h1>
      <p className="mt-4 text-cloud-muted leading-relaxed">
        The page you were looking for moved or never existed. The tweet to
        image generator is still one click away.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-xl bg-brass px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brass-soft"
      >
        Open the free tweet to image generator
      </Link>
    </main>
  );
}

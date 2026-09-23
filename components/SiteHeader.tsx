import Image from "next/image";
import Link from "next/link";

const PAGE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/tweetpik-alternative", label: "TweetPik Alternative" },
  { href: "/alternatives", label: "Alternatives" },
  { href: "/linkedin-post-image-maker", label: "LinkedIn Image Maker" },
];

export default function SiteHeader() {
  return (
    <nav className="border-b border-ink-line/60 bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg text-brass-soft"
        >
          <Image
            src="/logo.png"
            alt="Frame Posting logo"
            width={439}
            height={470}
            className="h-7 w-auto"
            priority
          />
          Frame Posting
        </Link>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-cloud-muted">
          {PAGE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brass-soft transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
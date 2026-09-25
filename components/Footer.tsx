import Link from "next/link";

const PAGE_LINKS = [
  { href: "/", label: "Tweet to image generator" },
  { href: "/tweetpik-alternative", label: "Free TweetPik alternative" },
  { href: "/alternatives", label: "Free tweet-to-image tools" },
  { href: "/linkedin-post-image-maker", label: "LinkedIn post image maker" },
];

const SOCIAL_LINKS = [
  process.env.NEXT_PUBLIC_TWITTER_URL && {
    label: "X",
    href: process.env.NEXT_PUBLIC_TWITTER_URL,
  },
  process.env.NEXT_PUBLIC_LINKEDIN_URL && {
    label: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  },
  process.env.NEXT_PUBLIC_FACEBOOK_URL && {
    label: "Facebook",
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL,
  },
  process.env.NEXT_PUBLIC_INSTAGRAM_URL && {
    label: "Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  },
].filter(Boolean) as { label: string; href: string }[];

export default function Footer() {
  return (
    <footer className="border-t border-ink-line/60">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col items-center justify-between gap-4 text-sm text-cloud-muted sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Frame Posting. Built for creators.</p>
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {PAGE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brass-soft transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {SOCIAL_LINKS.length > 0 && (
          <nav aria-label="Social links" className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cloud-muted hover:text-brass-soft transition-colors"
              >
                {social.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </footer>
  );
}
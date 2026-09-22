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
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-cloud-muted">
        <p>&copy; {new Date().getFullYear()} Cardly. Built for creators.</p>
        <p>Tweet to image generator &middot; No signup &middot; No watermark</p>
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
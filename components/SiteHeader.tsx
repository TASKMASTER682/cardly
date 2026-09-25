import Link from "next/link";

const PAGE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/tweetpik-alternative", label: "TweetPik Alternative" },
  { href: "/alternatives", label: "Alternatives" },
  { href: "/linkedin-post-image-maker", label: "LinkedIn Image Maker" },
];

function LogoMark() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="h-7 w-7 shrink-0"
      role="img"
      aria-label="Frame Posting logo"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DAA520" />
          <stop offset="30%" stopColor="#F3C64A" />
          <stop offset="55%" stopColor="#B87D10" />
          <stop offset="80%" stopColor="#E5B338" />
          <stop offset="100%" stopColor="#8A5A00" />
        </linearGradient>
        <linearGradient id="shadowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6E4600" />
          <stop offset="100%" stopColor="#422900" />
        </linearGradient>
        <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow
            dx="0"
            dy="4"
            stdDeviation="5"
            floodColor="#000000"
            floodOpacity="0.25"
          />
        </filter>
      </defs>
      <g filter="url(#dropShadow)">
        <path
          d="M 120,40 
             C 70,40 40,70 40,120 
             L 40,380 
             C 40,430 70,460 120,460 
             L 380,460 
             C 430,460 460,430 460,380 
             L 460,120 
             C 460,70 430,40 380,40 
             Z 
             M 120,58 
             L 380,58 
             C 420,58 442,80 442,120 
             L 442,380 
             C 442,420 420,442 380,442 
             L 120,442 
             C 80,442 58,420 58,380 
             L 58,120 
             C 58,80 80,58 120,58 
             Z"
          fill="url(#goldGrad)"
        />
        <path
          d="M 125,75 
             C 95,75 75,95 75,125 
             L 75,375 
             C 75,405 95,425 125,425 
             L 375,425 
             C 405,425 425,405 425,375 
             L 425,125 
             C 425,95 405,75 375,75 
             Z 
             M 125,87 
             L 375,87 
             C 398,87 413,102 413,125 
             L 413,375 
             C 413,398 398,413 375,413 
             L 125,413 
             C 102,413 87,398 87,375 
             L 87,125 
             C 87,102 102,87 125,87 
             Z"
          fill="url(#goldGrad)"
        />
        <path
          d="M 50,110 C 42,180 42,320 50,390 C 46,320 46,180 50,110 Z"
          fill="url(#goldGrad)"
        />
        <path
          d="M 450,110 C 458,180 458,320 450,390 C 454,320 454,180 450,110 Z"
          fill="url(#goldGrad)"
        />
        <path
          d="M 110,50 C 180,42 320,42 390,50 C 320,46 180,46 110,50 Z"
          fill="url(#goldGrad)"
        />
        <path
          d="M 110,450 C 180,458 320,458 390,450 C 320,454 180,454 110,450 Z"
          fill="url(#goldGrad)"
        />
        <polygon points="365,135 140,225 215,265" fill="url(#goldGrad)" />
        <polygon points="365,135 215,265 325,335" fill="url(#goldGrad)" />
        <polygon points="215,265 242,322 272,298" fill="url(#shadowGrad)" />
        <path
          d="M 185,415 
             C 125,415 110,355 125,300 
             C 138,255 175,235 195,225
             C 180,238 152,258 143,295 
             C 130,345 142,395 185,395 
             C 215,395 235,385 245,380
             C 225,400 205,415 185,415 
             Z"
          fill="url(#goldGrad)"
        />
        <path
          d="M 160,285 L 210,240 L 195,305 L 180,280 Z"
          fill="url(#goldGrad)"
        />
      </g>
    </svg>
  );
}

export default function SiteHeader() {
  return (
    <nav className="border-b border-ink-line/60 bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg text-brass-soft"
        >
          <LogoMark />
          Frame Posting
        </Link>
        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {PAGE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border-2 border-brass px-4 py-2 text-sm font-medium text-brass hover:bg-brass hover:text-ink transition-all duration-200 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Analytics from "@/components/Analytics";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cardly.app";
const SITE_NAME = "Cardly";
const TITLE = "Free Tweet to Image Generator & Social Card Maker — Cardly";
const DESCRIPTION =
  "Turn any X post into a beautiful image in seconds. Free tweet to image generator with no watermark, custom gradients, and retina PNG export.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "tweet to image generator",
    "free tweet to image generator",
    "tweet screenshot generator",
    "beautiful screenshot generator for twitter",
    "convert tweet to instagram post",
    "convert tweet to image online free",
    "aesthetic tweet generator",
    "aesthetic social media post converter",
    "x post to image converter",
    "linkedin post image maker",
    "convert linkedin post to image",
    "linkedin post to card generator",
    "linkedin post formatter and image maker",
    "aesthetic linkedin post maker",
    "facebook post screenshot generator",
    "convert text post to image online",
    "social media post to graphic converter",
    "convert quotes to beautiful post free",
    "free tweet to image converter no watermark",
    "convert twitter post to card online free",
    "tweet to image maker no signup",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Cardly — Free tweet to image generator, X post to image converter and social card maker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-cover.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  description: DESCRIPTION,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Convert tweet URLs to downloadable images",
    "Convert plain text to social cards",
    "6 preset aesthetic themes",
    "Adjustable aspect ratio, corner radius and shadow",
    "High-resolution PNG export",
    "Copy image directly to clipboard",
    "No signup or watermark required",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "312",
  },
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: SITE_NAME,
  url: SITE_URL,
  browserRequirements: "Requires JavaScript",
  applicationCategory: "DesignApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  sameAs: [
    process.env.NEXT_PUBLIC_TWITTER_URL,
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
    process.env.NEXT_PUBLIC_FACEBOOK_URL,
    process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  ].filter(Boolean),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is the tweet to image generator free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every theme, aspect ratio and export option is free to use, with no account, subscription or hidden paywall.",
      },
    },
    {
      "@type": "Question",
      name: "Does it add a watermark to my image?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No watermark is added unless you choose to turn on the optional 'Made with Cardly' branding yourself. You can leave it off entirely.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to sign up or log in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No signup is required. Paste a link or type your text, style the card, and download it in seconds.",
      },
    },
    {
      "@type": "Question",
      name: "What image size do I get for Instagram, LinkedIn and X?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose 1:1 for Instagram feed posts, 4:5 for Instagram portrait posts, or 16:9 for LinkedIn and X link-style graphics. Every export is rendered at 2x resolution for crisp, retina-quality PNGs.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Cardly as an X post to image converter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Paste any x.com or twitter.com post URL into the input field and Cardly will fetch the content, letting you restyle it into a clean, downloadable image — no screenshot needed.",
      },
    },
    {
      "@type": "Question",
      name: "Does Cardly work as a LinkedIn post image maker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Select the 16:9 aspect ratio for LinkedIn-optimized dimensions. The 2x retina export ensures your post image looks sharp in LinkedIn feeds and document carousels.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-ink text-cloud">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}

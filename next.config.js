/** @type {import('next').NextConfig} */

// `next build` / `next start` set NODE_ENV=production; `next dev` does not.
// The strict headers below are production-only so the dev overlay (which needs
// eval) and local HTTP workbenches are never broken by them.
const isProduction = process.env.NODE_ENV === "production";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

function originOf(url) {
  try {
    return new URL(url).origin;
  } catch {
    return null;
  }
}

const apiOrigin = originOf(API_URL);

// Content Security Policy.
//
// Notes / deliberate trade-offs:
// - `script-src 'unsafe-inline'` is required because the JSON-LD blocks and the
//   GA bootstrap are inline scripts emitted by the framework. To harden this
//   further later, move JSON-LD to hashed <script> tags (compute their SHA-256
//   at build time) and drop 'unsafe-inline'.
// - `img-src https:` allows the avatars/media URLs users paste into the tool.
// - `connect-src` includes the Express API origin plus Google Analytics.
const contentSecurityPolicy = [
  "default-src 'self';",
  "base-uri 'self';",
  "object-src 'none';",
  "frame-ancestors 'self';",
  "form-action 'self';",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;",
  "style-src 'self' 'unsafe-inline';",
  "img-src 'self' data: blob: https:;",
  "font-src 'self' data:;",
  `connect-src 'self'${apiOrigin ? ` ${apiOrigin}` : ""} https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com;`,
  "worker-src 'self' blob:;",
  "manifest-src 'self';",
].join(" ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Download-Options", value: "noopen" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  // Legacy browsers that do not understand CSP still honor this directive.
  ...(isProduction
    ? [
        { key: "Content-Security-Policy", value: contentSecurityPolicy },
        // HTTPS-only site: force it for a year, incl. subdomains.
        { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
        },
      ]
    : []),
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "abs.twimg.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;

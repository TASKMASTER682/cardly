// Shared Open Graph image metadata. Points at the file-convention route
// (app/opengraph-image.tsx) which is statically prerendered at build time.
// Referenced from sub-pages because their own `openGraph` object would
// otherwise shadow/replace the layout/file-based og:image.
export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "Frame Posting — free tweet to image converter and social card maker",
};
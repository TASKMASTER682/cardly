import { ImageResponse } from "next/og";

// Generated on the Node.js runtime and prerendered at build time — no edge
// runtime needed, so the OG image ships as a static, cacheable asset.
export const alt =
  "Frame Posting — free tweet to image generator, X post to image converter and social card maker";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          backgroundColor: "#15141C",
          color: "#F3F1EA",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "9999px",
              backgroundColor: "#C9962F",
            }}
          />
          <div style={{ fontSize: 28, letterSpacing: "0.05em" }}>FRAME POSTING</div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Free tweet to image generator &amp; social card maker
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#A29FB0",
            marginTop: 24,
            maxWidth: 900,
          }}
        >
          Convert any X post or text into a beautiful, retina-quality PNG — no
          watermark, no signup.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
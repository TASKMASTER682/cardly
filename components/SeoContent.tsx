import { Check, X } from "lucide-react";

// Server-rendered, crawlable content below the fold. Written for real readers
// first — the keyword targets are satisfied because the copy genuinely
// answers the questions people search for, not by repeating phrases.
export default function SeoContent() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="border-t border-ink-line/60 bg-ink-soft/40"
    >
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 space-y-16">
        <div>
          <h2
            id="how-it-works-heading"
            className="font-display text-3xl text-cloud mb-6"
          >
            How to convert tweets to beautiful images
          </h2>
          <div className="space-y-5 text-cloud-muted leading-relaxed">
            <p>
              Screenshotting a tweet directly from X keeps the platform&apos;s
              chrome, cramped padding, and inconsistent dark-mode colors —
              none of which look good once you paste them into a blog post,
              a LinkedIn carousel, or an Instagram grid. Cardly solves that by
              rebuilding the tweet as a clean, resizable layout you fully
              control, then exporting it as a beautiful screenshot generator
              for Twitter at retina resolution.
            </p>
            <p>
              To convert a tweet to an Instagram post, start by pasting the
              tweet&apos;s URL into the field above. Cardly reads the post&apos;s
              public author, avatar, text and engagement numbers, drops them
              into a live preview, and lets you pick from six aesthetic
              backgrounds — from a warm sunset gradient to a stark
              minimalist card. Adjust the aspect ratio to 1:1 for a feed
              post, 4:5 for a taller portrait crop, or 16:9 for a LinkedIn
              or X-native banner, then fine-tune corner rounding and shadow
              depth until the card matches your brand.
            </p>
            <p>
              Need a LinkedIn post image maker? Cardly&apos;s 16:9 aspect ratio
              produces the ideal dimensions for LinkedIn link previews and
              document carousels. The high-resolution 2x export ensures your
              graphics look sharp on every screen — no blurriness, no
              compression artifacts.
            </p>
            <p>
              Prefer to skip the link entirely? Switch to &ldquo;Write
              text&rdquo; and type your own quote, caption, or announcement.
              This turns Cardly into a general aesthetic social media post
              converter and tweet to image maker with no signup — useful for
              creators who want the aesthetic without needing a live source
              post at all.
            </p>
            <p>
              Whether you need an X post to image converter for your thread
              highlights, or a free tweet to image converter with no watermark
              for client work, Cardly handles it all in the browser. Nothing
              you type or paste is ever uploaded or stored.
            </p>
            <h3 className="font-display text-xl text-cloud pt-2">
              Exporting your card
            </h3>
            <p>
              When the preview looks right, click{" "}
              <strong className="text-cloud">Download High-Res PNG</strong>{" "}
              to save a file rendered at double pixel density, or{" "}
              <strong className="text-cloud">Copy Image to Clipboard</strong>{" "}
              to paste it straight into Figma, Canva, or a chat window. Both
              actions run entirely in your browser — nothing you type or
              paste is ever required to create an account.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl text-cloud mb-6">
            Why creators use Cardly instead of a plain screenshot
          </h2>
          <div className="overflow-hidden rounded-2xl border border-ink-line/60">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-ink-soft text-cloud-muted">
                  <th scope="col" className="px-4 py-3 font-medium">
                    Capability
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium text-center">
                    Cardly
                  </th>
                  <th scope="col" className="px-4 py-3 font-medium text-center">
                    Native screenshot
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-line/50">
                {[
                  ["Free tweet to image converter, no watermark by default", true, true],
                  ["X post to image converter with 6 aesthetic themes", true, false],
                  ["LinkedIn post image maker with 16:9 export", true, false],
                  ["Beautiful screenshot generator for Twitter", true, false],
                  ["Adjustable 1:1, 4:5 and 16:9 aspect ratios", true, false],
                  ["Retina-quality 2x PNG export", true, false],
                  ["Works from plain text with no live tweet", true, false],
                  ["Aesthetic social media post converter — no signup", true, false],
                ].map(([label, cardly, native]) => (
                  <tr key={label as string}>
                    <td className="px-4 py-3 text-cloud">{label as string}</td>
                    <td className="px-4 py-3 text-center">
                      {cardly ? (
                        <Check size={16} className="inline text-brass-soft" />
                      ) : (
                        <X size={16} className="inline text-cloud-muted" />
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {native ? (
                        <Check size={16} className="inline text-brass-soft" />
                      ) : (
                        <X size={16} className="inline text-cloud-muted" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

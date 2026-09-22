// Static hero header — server component, zero client JS cost.
export default function Header() {
  return (
    <header className="border-b border-ink-line/60">
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-8 sm:pt-14 sm:pb-10">
        <div className="flex items-center gap-2 text-sm text-brass-soft font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-brass" aria-hidden="true" />
          No signup &middot; No watermark by default &middot; Free forever
        </div>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.05] max-w-3xl text-cloud">
          Free tweet to image generator — turn any X post into a{" "}
          <span className="italic text-brass-soft">social card</span> worth
          reposting.
        </h1>
        <p className="mt-5 max-w-xl text-cloud-muted text-base sm:text-lg leading-relaxed">
          Paste an X (Twitter) link or write your own text. Cardly is a tweet
          screenshot generator that renders a high-resolution, aesthetic image
          in seconds — perfect for Instagram, LinkedIn, or your blog.
        </p>
      </div>
    </header>
  );
}

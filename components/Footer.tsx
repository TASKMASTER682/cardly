export default function Footer() {
  return (
    <footer className="border-t border-ink-line/60">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-cloud-muted">
        <p>&copy; {new Date().getFullYear()} Cardly. Built for creators.</p>
        <p>Tweet to image generator &middot; No signup &middot; No watermark</p>
      </div>
    </footer>
  );
}

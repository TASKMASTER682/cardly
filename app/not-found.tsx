import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center">
      <p className="text-sm font-medium text-brass-soft">404 — page not found</p>
      <h1 className="mt-4 font-display text-4xl text-cloud">
        This frame doesn&apos;t exist
      </h1>
      <p className="mt-4 text-cloud-muted leading-relaxed">
        The page you were looking for moved or never existed. The tweet to
        image generator is still one click away.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-xl bg-brass px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brass-soft"
      >
        Open the free tweet to image generator
      </Link>
    </main>
  );
}

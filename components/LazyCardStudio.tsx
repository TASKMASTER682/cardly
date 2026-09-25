"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { Platform } from "./CardStudio";

// The editor (and its html-to-image export dependency) is the heaviest client
// chunk in the app. On the long-form landing pages it sits below several
// screens of crawlable content, so it is loaded only once the visitor scrolls
// near it — keeping LCP on those pages free of editor JS.
const CardStudio = dynamic(() => import("./CardStudio"), {
  ssr: false,
  loading: () => (
    <section
      aria-hidden="true"
      className="mx-auto max-w-6xl px-6 pb-20 pt-4 animate-rise"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,380px)_1fr]">
        <div className="h-[420px] rounded-2xl border border-ink-line/60 bg-ink-soft/60" />
        <div className="h-[420px] rounded-[28px] border border-ink-line/40 bg-ink-soft/40" />
      </div>
    </section>
  ),
});

interface LazyCardStudioProps {
  platform?: Platform;
  /** Distance from the viewport at which the editor starts loading. */
  rootMargin?: string;
}

export default function LazyCardStudio({
  platform = "twitter",
  rootMargin = "600px",
}: LazyCardStudioProps) {
  const holderRef = useRef<HTMLDivElement>(null);
  // Browsers without IntersectionObserver render the editor immediately;
  // state is set inside callbacks (observer intersection) only, never
  // synchronously inside the effect body.
  const [shouldMount, setShouldMount] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    if (shouldMount) return;
    const node = holderRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldMount, rootMargin]);

  return (
    <div ref={holderRef}>
      {shouldMount ? <CardStudio platform={platform} /> : null}
    </div>
  );
}
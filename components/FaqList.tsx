import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/faqs";

interface FaqListProps {
  items: FaqItem[];
}

export default function FaqList({ items }: FaqListProps) {
  return (
    <section className="border-t border-ink-line/60">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl text-cloud mb-8">
          Frequently asked questions
        </h2>
        <div className="divide-y divide-ink-line/50 border-y border-ink-line/50">
          {items.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-cloud">
                {faq.question}
                <ChevronDown
                  size={18}
                  className="shrink-0 text-cloud-muted transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 text-cloud-muted leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
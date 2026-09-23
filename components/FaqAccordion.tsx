"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/faqs";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-labelledby="faq-heading" className="border-t border-ink-line/60">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h2 id="faq-heading" className="font-display text-3xl text-cloud mb-8">
          Frequently asked questions
        </h2>
        <div className="divide-y divide-ink-line/50 border-y border-ink-line/50">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-cloud">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-cloud-muted transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p
                    id={`faq-panel-${index}`}
                    className="pb-5 text-cloud-muted leading-relaxed"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

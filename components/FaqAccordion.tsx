"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Is the tweet to image generator free?",
    answer:
      "Yes. Every theme, aspect ratio and export option is free to use, with no account, subscription or hidden paywall.",
  },
  {
    question: "Does it add a watermark to my image?",
    answer:
      "No watermark is added unless you turn on the optional \"Made with Cardly\" branding yourself — and you can switch it off entirely at any time.",
  },
  {
    question: "Do I need to sign up or log in?",
    answer:
      "No signup is required. Paste a link or type your text, style the card, and download it in seconds.",
  },
  {
    question: "What image size should I use for Instagram, LinkedIn and X?",
    answer:
      "Use 1:1 for an Instagram feed post, 4:5 for a taller Instagram portrait post, or 16:9 for LinkedIn and X-style link cards. Every export renders at 2x resolution for a crisp, retina-quality PNG.",
  },
  {
    question: "Can I use Cardly as an X post to image converter?",
    answer:
      "Absolutely. Paste any x.com or twitter.com post URL into the input field and Cardly will fetch the content, letting you restyle it into a clean, downloadable image — no screenshot needed.",
  },
  {
    question: "Does Cardly work as a LinkedIn post image maker?",
    answer:
      "Yes. Select the 16:9 aspect ratio for LinkedIn-optimized dimensions. The 2x retina export ensures your post image looks sharp in LinkedIn feeds and document carousels.",
  },
  {
    question: "Can I make a card from my own text instead of a real tweet?",
    answer:
      "Yes — switch the input to \"Write text\" and type anything you like. It's a fast way to make an aesthetic quote or caption card with no source post at all.",
  },
];

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

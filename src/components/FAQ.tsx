"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <dl className="divide-y divide-hj-border">
      {faqItems.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className="py-6 sm:py-8">
            <dt>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-8 text-left"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-serif text-xl font-semibold text-hj-ink sm:text-2xl">
                  {item.question}
                </span>
                <span className="mt-1 shrink-0 text-2xl font-light text-hj-ink-muted">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </dt>
            {isOpen && (
              <dd className="mt-4 max-w-2xl text-base leading-relaxed text-hj-ink/85">
                {item.answer}
              </dd>
            )}
          </div>
        );
      })}
    </dl>
  );
}

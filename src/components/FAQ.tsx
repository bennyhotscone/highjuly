"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqItems.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.question}
            className={`hj-card transition-shadow ${isOpen ? "shadow-[0_12px_40px_rgba(15,22,18,0.1)]" : ""}`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-bold text-hj-ink sm:text-lg">{item.question}</span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-hj-cream text-lg font-bold text-hj-green transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="border-t border-hj-border px-5 pb-5 pt-4 text-sm leading-relaxed text-hj-ink-muted sm:px-6 sm:text-base">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

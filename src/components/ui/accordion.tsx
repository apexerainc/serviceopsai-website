"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-white">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-surface/50"
          >
            <span className="pr-4 text-base font-semibold text-foreground">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className="accordion-content"
            data-open={openIndex === index}
          >
            <div className="accordion-inner">
              <p className="px-6 pb-5 text-text-secondary leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

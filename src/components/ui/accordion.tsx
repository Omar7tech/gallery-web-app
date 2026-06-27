"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  question: string;
  answer: string;
}

type AccordionProps = {
  items: AccordionItem[];
  /** Allow multiple panels open at once. */
  multiple?: boolean;
  className?: string;
  defaultOpen?: number;
};

export function Accordion({
  items,
  multiple = false,
  className,
  defaultOpen,
}: AccordionProps) {
  const [open, setOpen] = useState<number[]>(
    defaultOpen !== undefined ? [defaultOpen] : [],
  );
  const baseId = useId();

  function toggle(i: number) {
    setOpen((prev) => {
      const isOpen = prev.includes(i);
      if (multiple) {
        return isOpen ? prev.filter((x) => x !== i) : [...prev, i];
      }
      return isOpen ? [] : [i];
    });
  }

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item, i) => {
        const isOpen = open.includes(i);
        const triggerId = `${baseId}-trigger-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-patina"
              >
                <span className="font-display text-xl text-ink md:text-2xl">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-patina",
                    isOpen && "rotate-45 bg-patina text-chalk",
                  )}
                >
                  <Plus size={16} aria-hidden />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              inert={!isOpen}
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 pr-12 text-base leading-relaxed text-ink-soft">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

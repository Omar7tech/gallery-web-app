"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  label: string;
  content: React.ReactNode;
}

export function Tabs({
  items,
  className,
}: {
  items: TabItem[];
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  return (
    <div className={cn(className)}>
      <div
        role="tablist"
        aria-label="Section tabs"
        className="flex flex-wrap gap-1 border-b border-line"
      >
        {items.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={i}
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight")
                  setActive((p) => (p + 1) % items.length);
                if (e.key === "ArrowLeft")
                  setActive((p) => (p - 1 + items.length) % items.length);
              }}
              className={cn(
                "relative -mb-px px-5 py-3 text-sm font-medium transition-colors",
                selected ? "text-ink" : "text-muted hover:text-ink",
              )}
            >
              {item.label}
              {selected && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-brass" />
              )}
            </button>
          );
        })}
      </div>
      {items.map((item, i) => (
        <div
          key={i}
          role="tabpanel"
          id={`${baseId}-panel-${i}`}
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={i !== active}
          className="pt-8"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}

"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

/** Lightweight tooltip; appears on hover and keyboard focus. */
export function Tooltip({
  label,
  children,
  side = "top",
  className,
}: {
  label: string;
  children: React.ReactNode;
  side?: "top" | "bottom";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <span aria-describedby={open ? id : undefined}>{children}</span>
      <span
        role="tooltip"
        id={id}
        className={cn(
          "pointer-events-none absolute left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-sm bg-ink px-2.5 py-1.5 font-mono text-2xs uppercase tracking-[0.12em] text-chalk transition-all duration-200",
          side === "top" ? "bottom-full mb-2" : "top-full mt-2",
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
        )}
      >
        {label}
      </span>
    </span>
  );
}

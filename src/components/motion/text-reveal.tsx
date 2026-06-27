"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: React.ElementType;
  /** Reveal granularity. */
  by?: "word" | "line";
  delay?: number;
  /** Play immediately (hero) vs. on scroll. */
  trigger?: "load" | "scroll";
};

/**
 * Masked word/line reveal built by manual splitting (no plugin dependency),
 * so it is deterministic and SSR-safe. Disabled under reduced motion.
 */
export function TextReveal({
  text,
  className,
  as: Tag = "span",
  by = "word",
  delay = 0,
  trigger = "scroll",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const words = gsap.utils.toArray<HTMLElement>(
        el.querySelectorAll("[data-word]"),
      );

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(words, { yPercent: 115 });
        gsap.to(words, {
          yPercent: 0,
          duration: 1,
          ease: "power4.out",
          stagger: by === "word" ? 0.06 : 0.12,
          delay,
          scrollTrigger:
            trigger === "scroll"
              ? { trigger: el, start: "top 85%", once: true }
              : undefined,
        });
      });
    },
    { scope: ref, dependencies: [text] },
  );

  const tokens = text.split(" ");

  return (
    <Tag ref={ref} className={cn("inline", className)} aria-label={text}>
      {tokens.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden align-bottom leading-[1.08]"
        >
          <span data-word className="inline-block will-change-transform">
            {word}
          </span>
          {i < tokens.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}

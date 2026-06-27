"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Animation style. */
  variant?: "up" | "fade" | "clip" | "scale";
  /** Stagger direct children instead of the element itself. */
  stagger?: boolean;
  delay?: number;
  /** Distance for the "up" translate, px. */
  y?: number;
  as?: React.ElementType;
};

/**
 * Scroll-triggered reveal. Animates transform/opacity only and is fully
 * disabled under prefers-reduced-motion (content renders visible).
 */
export function Reveal({
  children,
  className,
  variant = "up",
  stagger = false,
  delay = 0,
  y = 40,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const reduce = gsap.matchMedia();
      reduce.add(
        {
          motionOK: "(prefers-reduced-motion: no-preference)",
          motionReduce: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { motionOK } = ctx.conditions as { motionOK: boolean };
          const targets = stagger
            ? (gsap.utils.toArray(el.children) as HTMLElement[])
            : [el];

          if (!motionOK) {
            gsap.set(targets, { opacity: 1, y: 0, clearProps: "all" });
            return;
          }

          const from: gsap.TweenVars = { opacity: 0 };
          if (variant === "up") from.y = y;
          if (variant === "scale") from.scale = 0.94;
          if (variant === "clip") {
            from.clipPath = "inset(0 0 100% 0)";
            from.y = 0;
          }

          gsap.set(targets, from);
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            scale: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
            delay,
            ease: "power3.out",
            stagger: stagger ? 0.1 : 0,
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              once: true,
            },
          });
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}

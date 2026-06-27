"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * The Horizon Line — Solera's signature element. A hairline with a brass node
 * that draws in on scroll. Used to separate and frame editorial sections.
 */
export function Horizon({
  className,
  dark = false,
  animate = true,
}: {
  className?: string;
  dark?: boolean;
  animate?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!animate || !ref.current) return;
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ref.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.4,
            ease: "power3.inOut",
            scrollTrigger: { trigger: ref.current, start: "top 92%", once: true },
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      role="separator"
      className={cn("horizon", dark && "horizon--dark", className)}
    />
  );
}

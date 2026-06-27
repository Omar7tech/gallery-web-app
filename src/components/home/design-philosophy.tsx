"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";

const LINE =
  "Buy less. Choose well. Keep it for life - then give it to someone who will.";

export function DesignPhilosophy() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const words = gsap.utils.toArray<HTMLElement>(
        el.querySelectorAll("[data-w]"),
      );
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(words, { color: "var(--color-sage)" });
        gsap.to(words, {
          color: "var(--color-ink)",
          ease: "none",
          stagger: 0.4,
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            end: "bottom 60%",
            scrub: true,
          },
        });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="bg-chalk-deep">
      <div className="container-page py-28 text-center md:py-40">
        <p className="eyebrow mb-10 text-brass">Nº 07 - Design Philosophy</p>
        <h2 className="mx-auto max-w-5xl text-balance font-display text-4xl leading-[1.12] md:text-6xl lg:text-7xl lg:leading-[1.1]">
          {LINE.split(" ").map((w, i) => (
            <span key={i} data-w className="inline-block">
              {w}
              {i < LINE.split(" ").length - 1 ? " " : ""}
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-12 max-w-xl text-lg leading-relaxed text-ink-soft">
          It is an old idea, and not ours alone. But it governs every decision we
          make - from the trees we buy to the joints we refuse to shortcut.
        </p>
        <Link
          href="/about"
          className="link-underline mt-8 inline-block pb-1 text-sm font-medium text-ink"
        >
          Read our story
        </Link>
      </div>
    </section>
  );
}

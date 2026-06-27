"use client";

import { useRef } from "react";
import type { Product } from "@/types";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/components/product/product-card";

/** Responsive product grid with staggered scroll-in. */
export function ProductGrid({
  products,
  className,
  columns = 4,
  withIndex = false,
}: {
  products: Product[];
  className?: string;
  columns?: 3 | 4;
  withIndex?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(
          ref.current!.querySelectorAll("[data-card]"),
        );
        gsap.set(cards, { opacity: 0, y: 36 });
        ScrollBatch(cards);
      });
      function ScrollBatch(cards: HTMLElement[]) {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        });
      }
    },
    { scope: ref, dependencies: [products.length] },
  );

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-6 lg:gap-y-16",
        columns === 4
          ? "lg:grid-cols-4"
          : "lg:grid-cols-3",
        className,
      )}
    >
      {products.map((product, i) => (
        <div data-card key={product.slug}>
          <ProductCard
            product={product}
            index={withIndex ? i : undefined}
            priority={i < 4}
          />
        </div>
      ))}
    </div>
  );
}

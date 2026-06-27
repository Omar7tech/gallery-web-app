"use client";

import { useRef } from "react";
import { bestSellers } from "@/data/products";
import { gsap, useGSAP } from "@/lib/gsap";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeader } from "@/components/ui/section-header";

export function BestSellers() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = ref.current;
      const track = trackRef.current;
      if (!section || !track) return;

      // Pinned horizontal scroll on large screens only.
      gsap.matchMedia().add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const distance = track.scrollWidth - track.clientWidth;
          if (distance <= 0) return;
          gsap.to(track, {
            x: -distance,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${distance + window.innerHeight * 0.4}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        },
      );
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="overflow-hidden bg-paper py-24 md:py-0 md:min-h-screen md:flex md:flex-col md:justify-center">
      <div className="container-page">
        <SectionHeader
          serial="03"
          eyebrow="Most Requested"
          title="The pieces our clients return for."
          link={{ label: "All best sellers", href: "/best-sellers" }}
        />
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex gap-6 overflow-x-auto px-[var(--spacing-gutter)] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-16 md:overflow-visible md:pb-0"
      >
        {bestSellers.map((product, i) => (
          <div
            key={product.slug}
            className="w-[78vw] shrink-0 snap-start sm:w-[42vw] lg:w-[24vw]"
          >
            <ProductCard product={product} index={i} priority={i < 3} />
          </div>
        ))}
        <div className="hidden w-[10vw] shrink-0 lg:block" aria-hidden />
      </div>
    </section>
  );
}

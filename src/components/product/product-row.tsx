"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/components/product/product-card";

export function ProductRow({
  products,
  className,
}: {
  products: Product[];
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: "smooth" });
  }

  if (products.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      <div className="mb-6 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
        >
          <ArrowLeft size={16} aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
        >
          <ArrowRight size={16} aria-hidden />
        </button>
      </div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((p, i) => (
          <div
            key={p.slug}
            className="w-[68vw] shrink-0 snap-start sm:w-[40vw] lg:w-[23vw]"
          >
            <ProductCard product={p} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

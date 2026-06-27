"use client";

import { useEffect } from "react";
import { products } from "@/data/products";
import { useRecentlyViewed } from "@/hooks/use-recently-viewed";
import { SectionHeader } from "@/components/ui/section-header";
import { ProductRow } from "@/components/product/product-row";

/** Records the current product and renders the visitor's recently-viewed row. */
export function RecentlyViewed({ currentSlug }: { currentSlug: string }) {
  const { slugs, record } = useRecentlyViewed();

  useEffect(() => {
    record(currentSlug);
  }, [currentSlug, record]);

  const items = slugs
    .filter((s) => s !== currentSlug)
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, 6) as typeof products;

  if (items.length === 0) return null;

  return (
    <section className="container-page border-t border-line py-20 md:py-28">
      <SectionHeader serial="-" eyebrow="Where you've been" title="Recently viewed." />
      <div className="mt-10">
        <ProductRow products={items} />
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import type { Product, ProductFilters, SortOption } from "@/types";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/overlay";
import { ProductCardSkeleton } from "@/components/ui/skeleton";
import { ProductCard } from "@/components/product/product-card";
import { SortDropdown } from "@/components/shop/sort-dropdown";
import { FilterPanel, EMPTY_FILTERS } from "@/components/shop/filter-panel";

function applyFilters(
  products: Product[],
  filters: ProductFilters,
  sort: SortOption,
): Product[] {
  let out = products.filter((p) => {
    if (filters.collections.length && !filters.collections.includes(p.collection))
      return false;
    if (
      filters.materials.length &&
      !p.materials.some((m) => filters.materials.includes(m))
    )
      return false;
    if (filters.colors.length && !filters.colors.includes(p.colorFamily))
      return false;
    if (filters.priceMax !== null && p.price > filters.priceMax) return false;
    return true;
  });

  out = [...out].sort((a, b) => {
    switch (sort) {
      case "newest":
        return b.year - a.year || Number(b.isNew) - Number(a.isNew);
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return (
          Number(b.isBestSeller) - Number(a.isBestSeller) ||
          b.rating - a.rating
        );
    }
  });
  return out;
}

export function ProductShop({
  products,
  showCollectionFilter = true,
}: {
  products: Product[];
  showCollectionFilter?: boolean;
}) {
  const [filters, setFilters] = useState<ProductFilters>(EMPTY_FILTERS);
  const [sort, setSort] = useState<SortOption>("featured");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const results = useMemo(
    () => applyFilters(products, filters, sort),
    [products, filters, sort],
  );

  const activeCount =
    filters.collections.length +
    filters.materials.length +
    filters.colors.length +
    (filters.priceMax !== null ? 1 : 0);

  return (
    <div className="container-page py-14 md:py-20">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex h-11 items-center gap-2 rounded-md border border-line bg-paper px-4 text-sm text-ink transition-colors hover:border-ink lg:hidden"
          >
            <SlidersHorizontal size={16} aria-hidden />
            Filters
            {activeCount > 0 && (
              <span className="grid h-5 w-5 place-items-center rounded-full bg-ink font-mono text-2xs text-chalk">
                {activeCount}
              </span>
            )}
          </button>
          <p className="font-mono text-sm text-muted">
            {results.length} piece{results.length === 1 ? "" : "s"}
          </p>
        </div>
        <SortDropdown value={sort} onChange={setSort} />
      </div>

      <div className="grid gap-10 pt-10 lg:grid-cols-[260px_1fr] lg:gap-14">
        {/* Desktop filters */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="mb-5 flex items-center justify-between">
              <span className="eyebrow text-ink">Refine</span>
              {activeCount > 0 && (
                <button
                  type="button"
                  onClick={() => setFilters(EMPTY_FILTERS)}
                  className="link-underline text-xs text-muted"
                >
                  Clear all
                </button>
              )}
            </div>
            <FilterPanel
              filters={filters}
              onChange={setFilters}
              showCollections={showCollectionFilter}
            />
          </div>
        </aside>

        {/* Results */}
        <div>
          {results.length === 0 ? (
            <div className="flex flex-col items-center gap-5 rounded-lg border border-dashed border-line py-24 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-chalk-deep text-sage">
                <X size={22} aria-hidden />
              </span>
              <div>
                <p className="font-display text-2xl text-ink">
                  No pieces match those filters
                </p>
                <p className="mt-2 text-muted">
                  Try widening your selection or clearing the filters.
                </p>
              </div>
              <Button variant="outline" onClick={() => setFilters(EMPTY_FILTERS)}>
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-6 lg:grid-cols-3 lg:gap-y-16">
              {results.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} priority={i < 3} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        side="left"
        title="Refine"
      >
        <div className="px-6 py-6">
          <FilterPanel
            filters={filters}
            onChange={setFilters}
            showCollections={showCollectionFilter}
          />
          <div className="mt-6 flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setFilters(EMPTY_FILTERS)}
            >
              Clear
            </Button>
            <Button className="flex-1" onClick={() => setDrawerOpen(false)}>
              Show {results.length}
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

/** Skeleton state for shop grids (used in loading.tsx files). */
export function ProductShopSkeleton() {
  return (
    <div className="container-page py-14 md:py-20">
      <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-6 lg:grid-cols-3 lg:gap-y-16">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

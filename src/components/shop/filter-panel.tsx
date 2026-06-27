"use client";

import type { CollectionSlug, ColorFamily, ProductFilters } from "@/types";
import { collections } from "@/data/collections";
import { materials } from "@/data/materials";
import { PRICE_CEILING, PRICE_FLOOR } from "@/data/products";
import { cn, formatPrice } from "@/lib/utils";
import { Checkbox } from "@/components/ui/field";

const COLORS: { value: ColorFamily; label: string; hex: string }[] = [
  { value: "neutral", label: "Neutral", hex: "#cabfa6" },
  { value: "warm", label: "Warm", hex: "#b89766" },
  { value: "earth", label: "Earth", hex: "#7a4f33" },
  { value: "green", label: "Green", hex: "#2c4138" },
  { value: "black", label: "Black", hex: "#23211e" },
];

function Group({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-line py-6 first:pt-0">
      <p className="eyebrow mb-4 text-muted">{title}</p>
      {children}
    </div>
  );
}

export function FilterPanel({
  filters,
  onChange,
  showCollections = true,
  className,
}: {
  filters: ProductFilters;
  onChange: (next: ProductFilters) => void;
  showCollections?: boolean;
  className?: string;
}) {
  function toggleCollection(slug: CollectionSlug) {
    const has = filters.collections.includes(slug);
    onChange({
      ...filters,
      collections: has
        ? filters.collections.filter((c) => c !== slug)
        : [...filters.collections, slug],
    });
  }
  function toggleMaterial(id: string) {
    const has = filters.materials.includes(id);
    onChange({
      ...filters,
      materials: has
        ? filters.materials.filter((m) => m !== id)
        : [...filters.materials, id],
    });
  }
  function toggleColor(c: ColorFamily) {
    const has = filters.colors.includes(c);
    onChange({
      ...filters,
      colors: has
        ? filters.colors.filter((x) => x !== c)
        : [...filters.colors, c],
    });
  }

  return (
    <div className={cn("flex flex-col", className)}>
      {showCollections && (
        <Group title="Room">
          <div className="flex flex-col gap-3">
            {collections.map((c) => (
              <Checkbox
                key={c.slug}
                label={c.name}
                checked={filters.collections.includes(c.slug)}
                onChange={() => toggleCollection(c.slug)}
              />
            ))}
          </div>
        </Group>
      )}

      <Group title="Material">
        <div className="flex flex-col gap-3">
          {materials.slice(0, 6).map((m) => (
            <Checkbox
              key={m.id}
              label={m.name}
              checked={filters.materials.includes(m.id)}
              onChange={() => toggleMaterial(m.id)}
            />
          ))}
        </div>
      </Group>

      <Group title="Colour">
        <div className="flex flex-wrap gap-2.5">
          {COLORS.map((c) => {
            const active = filters.colors.includes(c.value);
            return (
              <button
                key={c.value}
                type="button"
                onClick={() => toggleColor(c.value)}
                aria-pressed={active}
                aria-label={c.label}
                className={cn(
                  "flex items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-3 text-xs transition-all",
                  active ? "border-ink" : "border-line hover:border-sage",
                )}
              >
                <span
                  className="h-5 w-5 rounded-full border border-ink/10"
                  style={{ background: c.hex }}
                  aria-hidden
                />
                {c.label}
              </button>
            );
          })}
        </div>
      </Group>

      <Group title={`Price — up to ${formatPrice(filters.priceMax ?? PRICE_CEILING)}`}>
        <input
          type="range"
          min={PRICE_FLOOR}
          max={PRICE_CEILING}
          step={100}
          value={filters.priceMax ?? PRICE_CEILING}
          onChange={(e) =>
            onChange({ ...filters, priceMax: Number(e.target.value) })
          }
          aria-label="Maximum price"
          className="h-1 w-full cursor-pointer appearance-none rounded-full bg-line accent-patina"
        />
        <div className="mt-2 flex justify-between font-mono text-2xs text-muted">
          <span>{formatPrice(PRICE_FLOOR)}</span>
          <span>{formatPrice(PRICE_CEILING)}</span>
        </div>
      </Group>
    </div>
  );
}

export const EMPTY_FILTERS: ProductFilters = {
  collections: [],
  materials: [],
  colors: [],
  priceMax: null,
};

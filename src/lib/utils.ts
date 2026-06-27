import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes with conflict resolution. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Build a sized Unsplash URL from a photo id. Keeps payloads tight and
 * intentional (matches next.config qualities + image direction).
 */
export function unsplash(
  id: string,
  { w = 1600, h, q = 80 }: { w?: number; h?: number; q?: number } = {},
): string {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(w),
    q: String(q),
  });
  if (h) params.set("h", String(h));
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`;
}

/** Currency formatting for simulated pricing. */
export function formatPrice(value: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

/** Editorial serial label, e.g. "Nº 01". */
export function serial(n: number | string): string {
  const s = typeof n === "number" ? String(n).padStart(2, "0") : n;
  return `Nº ${s}`;
}

/** Human-readable date, e.g. "June 27, 2026". */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Slugify a string for routing / ids. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Title-case a kebab slug, e.g. "living-room" -> "Living Room". */
export function titleFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

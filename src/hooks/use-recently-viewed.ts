"use client";

import { useCallback } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";

const MAX = 8;

/** Tracks recently viewed product slugs in localStorage (most-recent first). */
export function useRecentlyViewed() {
  const [slugs, setSlugs] = useLocalStorage<string[]>(
    "solera:recently-viewed",
    [],
  );

  const record = useCallback(
    (slug: string) => {
      setSlugs((prev) => [slug, ...prev.filter((s) => s !== slug)].slice(0, MAX));
    },
    [setSlugs],
  );

  return { slugs, record };
}

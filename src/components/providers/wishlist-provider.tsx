"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";

interface WishlistContextValue {
  items: string[];
  has: (slug: string) => boolean;
  toggle: (slug: string) => boolean; // returns new state (true = added)
  remove: (slug: string) => void;
  clear: () => void;
  count: number;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useLocalStorage<string[]>("solera:wishlist", []);

  const has = useCallback((slug: string) => items.includes(slug), [items]);

  const toggle = useCallback(
    (slug: string) => {
      const exists = items.includes(slug);
      setItems((prev) =>
        exists ? prev.filter((s) => s !== slug) : [...prev, slug],
      );
      return !exists;
    },
    [items, setItems],
  );

  const remove = useCallback(
    (slug: string) => setItems((prev) => prev.filter((s) => s !== slug)),
    [setItems],
  );

  const clear = useCallback(() => setItems([]), [setItems]);

  const value = useMemo<WishlistContextValue>(
    () => ({ items, has, toggle, remove, clear, count: items.length }),
    [items, has, toggle, remove, clear],
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist(): WishlistContextValue {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}

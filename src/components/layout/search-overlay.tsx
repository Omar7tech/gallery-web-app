"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { createPortal } from "react-dom";
import { products } from "@/data/products";
import { collections } from "@/data/collections";
import { cn, formatPrice } from "@/lib/utils";

const SUGGESTIONS = ["Sofa", "Oak", "Dining table", "Brass", "Outdoor"];

export function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => inputRef.current?.focus(), 80);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter((p) =>
        [p.name, p.category, p.collection, ...p.tags]
          .join(" ")
          .toLowerCase()
          .includes(q),
      )
      .slice(0, 6);
  }, [query]);

  const collectionResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return collections.filter((c) => c.name.toLowerCase().includes(q));
  }, [query]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-[180] transition-opacity duration-300",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className={cn(
          "absolute inset-x-0 top-0 origin-top bg-chalk shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="container-page py-7">
          <div className="flex items-center gap-4 border-b border-line pb-5">
            <Search size={22} className="shrink-0 text-muted" aria-hidden />
            <label htmlFor="site-search" className="sr-only">
              Search the collection
            </label>
            <input
              ref={inputRef}
              id="site-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pieces, materials, collections…"
              className="w-full bg-transparent font-display text-2xl text-ink placeholder:text-muted/60 focus:outline-none md:text-3xl"
            />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close search"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <X size={20} aria-hidden />
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto py-6">
            {!query && (
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-muted">Popular</span>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setQuery(s)}
                    className="rounded-full border border-line px-4 py-2 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {query && results.length === 0 && collectionResults.length === 0 && (
              <div className="py-12 text-center">
                <p className="font-display text-2xl text-ink">No pieces found</p>
                <p className="mt-2 text-muted">
                  Try a material, a room, or{" "}
                  <Link
                    href="/collections"
                    onClick={onClose}
                    className="link-underline text-ink"
                  >
                    browse all collections
                  </Link>
                  .
                </p>
              </div>
            )}

            {collectionResults.length > 0 && (
              <div className="mb-6">
                <p className="eyebrow mb-3 text-muted">Collections</p>
                <div className="flex flex-wrap gap-3">
                  {collectionResults.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/collections/${c.slug}`}
                      onClick={onClose}
                      className="rounded-md border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-ink"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {results.length > 0 && (
              <div>
                <p className="eyebrow mb-3 text-muted">
                  Pieces - {results.length}
                </p>
                <ul className="divide-y divide-line">
                  {results.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/products/${p.slug}`}
                        onClick={onClose}
                        className="group flex items-center gap-4 py-3"
                      >
                        <div className="img-frame relative h-16 w-14 shrink-0 overflow-hidden rounded">
                          <Image
                            src={p.images[0]}
                            alt=""
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-display text-lg text-ink transition-colors group-hover:text-patina">
                            {p.name}
                          </p>
                          <p className="text-sm text-muted">{p.category}</p>
                        </div>
                        <span className="serial text-sm text-muted">
                          {formatPrice(p.price)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

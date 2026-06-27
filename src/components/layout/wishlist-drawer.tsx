"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, X } from "lucide-react";
import { Drawer } from "@/components/ui/overlay";
import { useWishlist } from "@/components/providers/wishlist-provider";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function WishlistDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, remove, clear } = useWishlist();
  const saved = products.filter((p) => items.includes(p.slug));

  return (
    <Drawer open={open} onClose={onClose} title={`Wishlist - ${saved.length}`}>
      {saved.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-4 px-8 text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-chalk-deep text-sage">
            <Heart size={24} aria-hidden />
          </span>
          <p className="font-display text-2xl text-ink">Nothing saved yet</p>
          <p className="max-w-xs text-sm text-muted">
            Tap the heart on any piece to keep it here while you compose your
            rooms.
          </p>
          <Link
            href="/collections"
            onClick={onClose}
            className={buttonVariants({ variant: "outline", size: "md" })}
          >
            Browse collections
          </Link>
        </div>
      ) : (
        <div className="flex h-full flex-col">
          <ul className="flex-1 divide-y divide-line px-6">
            {saved.map((p) => (
              <li key={p.slug} className="flex gap-4 py-5">
                <Link
                  href={`/products/${p.slug}`}
                  onClick={onClose}
                  className="img-frame relative h-24 w-20 shrink-0 overflow-hidden rounded"
                >
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col">
                  <p className="eyebrow text-muted">{p.category}</p>
                  <Link
                    href={`/products/${p.slug}`}
                    onClick={onClose}
                    className="font-display text-lg text-ink hover:text-patina"
                  >
                    {p.name}
                  </Link>
                  <p className="mt-auto text-sm text-muted">
                    {formatPrice(p.price)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => remove(p.slug)}
                  aria-label={`Remove ${p.name}`}
                  className="h-fit rounded-full p-1.5 text-muted transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  <X size={16} aria-hidden />
                </button>
              </li>
            ))}
          </ul>
          <div className="border-t border-line bg-paper px-6 py-5">
            <Link
              href="/contact"
              onClick={onClose}
              className={buttonVariants({ variant: "primary", size: "md" }) + " w-full"}
            >
              Request a quote for these
            </Link>
            <button
              type="button"
              onClick={clear}
              className="link-underline mx-auto mt-4 block text-xs text-muted"
            >
              Clear wishlist
            </button>
          </div>
        </div>
      )}
    </Drawer>
  );
}

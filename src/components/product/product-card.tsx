import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { cn, formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { WishlistButton } from "@/components/product/wishlist-button";

export function ProductCard({
  product,
  priority = false,
  className,
  index,
}: {
  product: Product;
  priority?: boolean;
  className?: string;
  index?: number;
}) {
  return (
    <article className={cn("group relative flex flex-col", className)}>
      <Link
        href={`/products/${product.slug}`}
        className="flex flex-col gap-4 focus:outline-none"
      >
        <div className="img-frame aspect-[4/5] w-full rounded-md">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
            priority={priority}
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
          {/* Secondary image cross-fade on hover */}
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt=""
              aria-hidden
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
          )}

          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {product.isNew && <Badge variant="brass">New</Badge>}
            {product.isBestSeller && !product.isNew && (
              <Badge variant="solid">Best Seller</Badge>
            )}
          </div>

          {typeof index === "number" && (
            <span className="serial absolute bottom-3 left-3 text-2xs text-chalk/90">
              Nº {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="eyebrow text-muted">{product.category}</p>
            <h3 className="mt-1.5 font-display text-xl leading-tight text-ink transition-colors duration-300 group-hover:text-patina">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {formatPrice(product.price, product.currency)}
            </p>
          </div>
        </div>
      </Link>

      <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100 max-md:opacity-100">
        <WishlistButton slug={product.slug} name={product.name} />
      </div>
    </article>
  );
}

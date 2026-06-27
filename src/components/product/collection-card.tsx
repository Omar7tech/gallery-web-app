import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Collection } from "@/types";
import { cn } from "@/lib/utils";

export function CollectionCard({
  collection,
  className,
  size = "default",
  priority = false,
}: {
  collection: Collection;
  className?: string;
  size?: "default" | "tall" | "wide";
  priority?: boolean;
}) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className={cn(
        "img-frame group relative block overflow-hidden rounded-lg",
        size === "tall" && "aspect-[3/4]",
        size === "wide" && "aspect-[16/10]",
        size === "default" && "aspect-[4/5]",
        className,
      )}
    >
      <Image
        src={collection.image}
        alt={collection.name}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-8">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-chalk/80">
            {collection.pieceCount} pieces
          </span>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-chalk/40 text-chalk opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bg-chalk group-hover:text-ink">
            <ArrowUpRight size={16} aria-hidden />
          </span>
        </div>
        <div>
          <p className="eyebrow mb-2 text-chalk/70">{collection.tagline}</p>
          <h3 className="font-display text-3xl text-chalk md:text-4xl">
            {collection.name}
          </h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-chalk/80 opacity-0 transition-all duration-500 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
            {collection.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

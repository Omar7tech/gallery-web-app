import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { buttonVariants } from "@/components/ui/button";
import { collections } from "@/data/collections";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink text-chalk">
      <Image
        src={unsplash(IMG.interiorE, { w: 2200, h: 1400, q: 80 })}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

      <div className="container-page relative z-10 py-32">
        <p className="eyebrow text-brass-soft">Error 404 - Page not found</p>
        <p className="mt-6 font-display text-[28vw] leading-[0.8] text-chalk/10 md:text-[18vw]">
          404
        </p>
        <h1 className="-mt-4 max-w-2xl text-balance font-display text-4xl text-chalk md:text-6xl">
          This room doesn't exist.
        </h1>
        <p className="mt-5 max-w-md text-lg text-chalk/70">
          The page you're looking for may have been moved, or never furnished at
          all. Let's get you back to something solid.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link href="/" className={buttonVariants({ variant: "brass", size: "lg" })}>
            Back to home
            <ArrowRight size={17} aria-hidden />
          </Link>
          <Link
            href="/collections"
            className="link-underline pb-1 text-sm font-medium text-chalk"
          >
            Browse collections
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-6 gap-y-2">
          {collections.map((c) => (
            <Link
              key={c.slug}
              href={`/collections/${c.slug}`}
              className="font-mono text-xs uppercase tracking-[0.16em] text-chalk/50 transition-colors hover:text-chalk"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

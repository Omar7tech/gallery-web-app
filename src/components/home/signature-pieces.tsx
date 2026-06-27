import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { signaturePieces } from "@/data/products";
import { cn, formatPrice } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";

export function SignaturePieces() {
  const pieces = signaturePieces.slice(0, 3);

  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeader
        serial="04"
        eyebrow="Signature Work"
        title="Three pieces that define the house."
        align="center"
      />

      <div className="mt-20 flex flex-col gap-24 md:gap-36">
        {pieces.map((product, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={product.slug}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
            >
              <Reveal
                variant="clip"
                className={cn("md:col-span-1", flip && "md:order-2")}
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="img-frame group block aspect-[5/6] overflow-hidden rounded-lg"
                >
                  <Parallax className="h-full w-full" amount={10}>
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={1200}
                      height={1500}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="h-[112%] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </Parallax>
                </Link>
              </Reveal>

              <div className={cn("md:col-span-1", flip && "md:order-1")}>
                <Reveal variant="up" y={28}>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-brass" aria-hidden />
                    <p className="eyebrow text-muted">
                      {product.category}, by {product.designer}
                    </p>
                  </div>
                  <h3 className="mt-5 font-display text-5xl text-ink md:text-6xl">
                    {product.name}
                  </h3>
                  <p className="prose-editorial mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                    {product.story}
                  </p>
                  <div className="mt-8 flex items-center gap-6">
                    <Link
                      href={`/products/${product.slug}`}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
                    >
                      <span className="link-underline pb-1">View the piece</span>
                      <ArrowUpRight
                        size={16}
                        aria-hidden
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                    <span className="font-mono text-sm text-muted">
                      From {formatPrice(product.price)}
                    </span>
                  </div>
                </Reveal>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

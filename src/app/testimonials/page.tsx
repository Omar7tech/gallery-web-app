import type { Metadata } from "next";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { CTABlock } from "@/components/marketing/cta-block";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What Solera clients say — collectors, architects, and homeowners on the pieces and the service.",
};

export default function TestimonialsPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials" },
        ])}
      />
      <PageHeader
        serial="10"
        eyebrow="In Their Words"
        title="Trusted with the rooms that matter."
        intro="Collectors, architects, and homeowners on living with Solera — the pieces, the patience, and the people behind the bench."
        crumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
        image={unsplash(IMG.interiorM, { w: 2000, h: 1100, q: 80 })}
      />

      <section className="container-page py-20 md:py-28">
        <div className="gap-6 [column-fill:balance] columns-1 md:columns-2 lg:columns-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.id}
              variant="up"
              y={24}
              delay={(i % 3) * 0.06}
              className="mb-6 block break-inside-avoid"
            >
              <figure className="flex flex-col gap-5 rounded-xl border border-line bg-paper p-7">
                <Quote size={26} className="text-brass" aria-hidden />
                <blockquote className="font-display text-xl leading-snug text-ink">
                  {t.quote}
                </blockquote>
                <div
                  className="flex gap-0.5 text-brass"
                  aria-label={`${t.rating} out of 5`}
                >
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={14} className="fill-brass" aria-hidden />
                  ))}
                </div>
                <figcaption className="mt-1 flex items-center gap-3 border-t border-line pt-5">
                  <div className="img-frame relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-ink">{t.author}</p>
                    <p className="text-sm text-muted">
                      {t.role} — {t.location}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="container-page pb-16 md:pb-24">
        <CTABlock
          eyebrow="Join them"
          title="Your room could be the next one."
          body="Start with a single piece or a full consultation. We'll treat your home with the same care these clients trusted us with."
          primary={{ label: "Book a consultation", href: "/contact" }}
          secondary={{ label: "Explore collections", href: "/collections" }}
          image={unsplash(IMG.interiorD, { w: 2000, h: 1100, q: 80 })}
        />
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { CTABlock } from "@/components/marketing/cta-block";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";

const spreads: { id: string; caption: string; ratio: "tall" | "square" | "wide" }[] = [
  { id: IMG.livingHero, caption: "The Halden, in morning light", ratio: "wide" },
  { id: IMG.bedroomA, caption: "Maren, dressed in chalk linen", ratio: "tall" },
  { id: IMG.interiorD, caption: "A composed living room", ratio: "square" },
  { id: IMG.diningHero, caption: "Tivoli set for eight", ratio: "wide" },
  { id: IMG.interiorG, caption: "Brass and bleached oak", ratio: "tall" },
  { id: IMG.sofaB, caption: "Low seating, long evenings", ratio: "square" },
  { id: IMG.interiorM, caption: "A painter's studio", ratio: "tall" },
  { id: IMG.outdoorA, caption: "Teak, silvered by sun", ratio: "square" },
  { id: IMG.loungeChairC, caption: "Verel, by the window", ratio: "tall" },
  { id: IMG.interiorH, caption: "Orto along the wall", ratio: "wide" },
  { id: IMG.bedroomC, caption: "Søren and a book", ratio: "square" },
  { id: IMG.interiorE, caption: "Smoked walnut against snow", ratio: "tall" },
];

const ratioClass = {
  tall: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
} as const;

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    "The Solera lookbook — our pieces photographed where they live, across apartments, farmhouses, studios, and retreats.",
};

export default function LookbookPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Lookbook", path: "/lookbook" },
        ])}
      />
      <PageHeader
        serial="08"
        eyebrow="The Lookbook"
        title="A room is a single composition."
        intro="Our pieces, photographed where they live — across apartments, farmhouses, studios, and retreats. Less a catalogue than a way of seeing."
        crumbs={[{ label: "Home", href: "/" }, { label: "Lookbook" }]}
        image={unsplash(IMG.interiorD, { w: 2000, h: 1100, q: 80 })}
      />

      <section className="container-page py-16 md:py-24">
        <div className="gap-4 [column-fill:balance] columns-2 md:columns-3 md:gap-6">
          {spreads.map((s, i) => (
            <Reveal
              key={s.id + i}
              variant="clip"
              delay={(i % 3) * 0.05}
              className="mb-4 block break-inside-avoid md:mb-6"
            >
              <figure className="img-frame group relative overflow-hidden rounded-lg">
                <div className={ratioClass[s.ratio]}>
                  <Image
                    src={unsplash(s.id, { w: 900, h: 1100, q: 80 })}
                    alt={s.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 z-10 translate-y-2 p-5 font-mono text-2xs uppercase tracking-[0.16em] text-chalk opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {s.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="container-page pb-16 md:pb-24">
        <CTABlock
          eyebrow="Bring it home"
          title="Recreate the look in your space."
          body="Tell our designers which spread caught your eye. We'll help you adapt it to your room, your light, and your life."
          primary={{ label: "Book a consultation", href: "/contact" }}
          secondary={{ label: "Shop the collections", href: "/collections" }}
          image={unsplash(IMG.interiorL, { w: 2000, h: 1100, q: 80 })}
        />
      </div>
    </>
  );
}

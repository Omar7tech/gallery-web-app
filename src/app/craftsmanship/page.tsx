import type { Metadata } from "next";
import Image from "next/image";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeader } from "@/components/ui/section-header";
import { Horizon } from "@/components/ui/horizon";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { CTABlock } from "@/components/marketing/cta-block";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Craftsmanship",
  description:
    "How a Solera piece is made - from selecting the boards by eye to hand-cutting joinery and finishing with oil and wax. Built to order in Hudson, New York.",
};

const steps = [
  {
    n: "01",
    title: "We select the boards by eye",
    body: "Every order begins at the timber rack. We choose and match boards by hand for grain and colour, so the wood reads as one continuous piece - not a patchwork.",
    image: IMG.materialWood,
  },
  {
    n: "02",
    title: "We cut the joinery by hand",
    body: "Mortise-and-tenon, dovetail, breadboard end. The joints that let wood move with the seasons are the joints that can't be rushed - so we don't rush them.",
    image: IMG.craftA,
  },
  {
    n: "03",
    title: "We tie the suspension by hand",
    body: "Upholstered pieces are sprung with eight-way hand-tied coils over a kiln-dried hardwood frame. It is slow, old, and the reason a Halden sofa still sits true after thirty years.",
    image: IMG.craftB,
  },
  {
    n: "04",
    title: "We finish with oil and wax",
    body: "No plastic lacquer. Hand-rubbed oils and waxes let the surface breathe, warm to the touch over time, and can be mended in place rather than stripped and resprayed.",
    image: IMG.interiorF,
  },
];

export default function CraftsmanshipPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Craftsmanship", path: "/craftsmanship" },
        ])}
      />
      <PageHeader
        serial="05"
        eyebrow="Inside the Atelier"
        title="Twelve pairs of hands, one chair."
        intro="Every Solera piece is built to order in our Hudson workshop. Here is exactly how - step by step, with nothing hidden."
        crumbs={[{ label: "Home", href: "/" }, { label: "Craftsmanship" }]}
        image={unsplash(IMG.craftA, { w: 2000, h: 1100, q: 80 })}
      />

      <section className="container-page py-20 md:py-28">
        <div className="flex flex-col gap-24 md:gap-36">
          {steps.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={s.n}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <Reveal variant="clip" className={flip ? "md:order-2" : ""}>
                  <div className="img-frame aspect-[4/3] overflow-hidden rounded-lg">
                    <Parallax className="h-full w-full" amount={10}>
                      <Image
                        src={unsplash(s.image, { w: 1200, h: 900, q: 80 })}
                        alt={s.title}
                        width={1200}
                        height={900}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="h-[112%] w-full object-cover"
                      />
                    </Parallax>
                  </div>
                </Reveal>
                <div className={flip ? "md:order-1" : ""}>
                  <Reveal variant="up" y={24}>
                    <span className="serial text-7xl text-chalk-deep">{s.n}</span>
                    <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
                      {s.title}
                    </h2>
                    <p className="prose-editorial mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                      {s.body}
                    </p>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-ink py-20 text-chalk md:py-28">
        <div className="container-page">
          <SectionHeader
            serial="-"
            eyebrow="The guarantee"
            title="If a joint ever fails, we'll mend it. For as long as you own it."
            light
          />
          <Horizon dark className="mt-12" />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              ["Lifetime", "Structural guarantee on every joint we cut."],
              ["In-house", "Repairs and refinishing done by the same hands that built it."],
              ["Made to order", "No warehouse, no overproduction, no compromise."],
            ].map(([h, b]) => (
              <Reveal key={h} variant="up" y={20}>
                <p className="font-display text-3xl text-brass-soft">{h}</p>
                <p className="mt-3 text-chalk/65">{b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container-page py-16 md:py-24">
        <CTABlock
          eyebrow="See for yourself"
          title="Visit the workshop."
          body="We open the Hudson atelier by appointment. Come see the benches, handle the timber, and meet the people who'll build your piece."
          primary={{ label: "Arrange a visit", href: "/contact" }}
          secondary={{ label: "Read the journal", href: "/blog" }}
          image={unsplash(IMG.interiorE, { w: 2000, h: 1100, q: 80 })}
        />
      </div>
    </>
  );
}

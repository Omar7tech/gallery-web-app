import type { Metadata } from "next";
import Image from "next/image";
import { materials } from "@/data/materials";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { CTABlock } from "@/components/marketing/cta-block";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Materials",
  description:
    "The timber, stone, metal, textile, and leather Solera builds with - each chosen because it grows more beautiful with use.",
};

const typeLabels: Record<string, string> = {
  wood: "Timber",
  stone: "Stone",
  metal: "Metal",
  textile: "Textile",
  leather: "Leather",
};

export default function MaterialsPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Materials", path: "/materials" },
        ])}
      />
      <PageHeader
        serial="06"
        eyebrow="Honest Materials"
        title="We choose what ages well."
        intro="A deliberately small palette - eight materials, each selected because it earns its patina. Nothing here is laminated, printed, or pretending to be something else."
        crumbs={[{ label: "Home", href: "/" }, { label: "Materials" }]}
        image={unsplash(IMG.materialWood, { w: 2000, h: 1100, q: 80 })}
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((m, i) => (
            <Reveal key={m.id} variant="up" y={28} delay={(i % 3) * 0.06}>
              <article className="group flex flex-col gap-5">
                <div className="img-frame relative aspect-[5/4] overflow-hidden rounded-lg">
                  <Image
                    src={m.image.replace("w=600&q=80&h=600", "w=900&q=80&h=720")}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 z-10 rounded-sm bg-paper/90 px-2.5 py-1 font-mono text-2xs uppercase tracking-[0.16em] text-ink backdrop-blur-sm">
                    {typeLabels[m.type]}
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="font-display text-2xl text-ink">{m.name}</h2>
                    <span
                      className="h-5 w-5 shrink-0 rounded-full border border-ink/10"
                      style={{ background: m.hex }}
                      aria-hidden
                    />
                  </div>
                  <p className="eyebrow mt-1 text-muted">{m.origin}</p>
                  <p className="mt-3 leading-relaxed text-ink-soft">{m.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-page">
          <SectionHeader
            serial="-"
            eyebrow="A note on finishes"
            title="Why we refuse to seal things shut."
            intro="A thick plastic lacquer looks flawless for five years, then cannot be mended. We finish with oil and wax instead - repairable in place, and warmer to the touch every year."
          />
        </div>
      </section>

      <div className="container-page py-16 md:py-24">
        <CTABlock
          eyebrow="See them in person"
          title="Order material samples."
          body="We'll send a boxed set of timber, stone, and fabric swatches so you can judge them in your own light before you commit."
          primary={{ label: "Request samples", href: "/contact" }}
          secondary={{ label: "Browse the collection", href: "/collections" }}
          image={unsplash(IMG.materialStone, { w: 2000, h: 1100, q: 80 })}
        />
      </div>
    </>
  );
}

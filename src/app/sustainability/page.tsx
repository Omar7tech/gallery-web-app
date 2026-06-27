import type { Metadata } from "next";
import Image from "next/image";
import { Sprout, Recycle, MapPin, Hammer, Trees, PackageOpen } from "lucide-react";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { CTABlock } from "@/components/marketing/cta-block";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Solera's honest approach to sustainability: FSC-certified timber, made-to-order production, repairable finishes, and short local supply chains.",
};

const commitments = [
  { icon: Trees, title: "FSC-certified timber", body: "Every board is traceable to a responsibly managed forest. We plant more than we mill, and we publish our suppliers." },
  { icon: Hammer, title: "Made to order, not to stock", body: "We build only what is bought. No speculative production, no clearance sales, no skip full of last season's colour." },
  { icon: Recycle, title: "Repaired, never replaced", body: "Oil and wax finishes are mended in place. We hold parts and offer refinishing for the life of the piece." },
  { icon: MapPin, title: "Short, local supply", body: "Cut, joined, and finished within a hundred miles of our Hudson workshop. Fewer miles, less freight, real accountability." },
  { icon: PackageOpen, title: "Plastic-free delivery", body: "Reusable blankets and recyclable crates. Our white-glove team removes and returns all packaging." },
  { icon: Sprout, title: "Low-VOC throughout", body: "Water-based adhesives and natural finishes - better for the maker's lungs and your indoor air." },
];

export default function SustainabilityPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sustainability", path: "/sustainability" },
        ])}
      />
      <PageHeader
        serial="09"
        eyebrow="Honestly Made"
        title="Sustainability without the slogans."
        intro="We don't offset our way to a clean conscience. We make fewer, better things from materials that last - and we tell you exactly how, with nothing rounded up."
        crumbs={[{ label: "Home", href: "/" }, { label: "Sustainability" }]}
        image={unsplash(IMG.interiorJ, { w: 2000, h: 1100, q: 80 })}
      />

      <section className="container-page py-20 md:py-28">
        <SectionHeader serial="01" eyebrow="Our commitments" title="Six things we actually do." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((c, i) => (
            <Reveal key={c.title} variant="up" y={24} delay={(i % 3) * 0.06} className="bg-chalk">
              <div className="flex h-full flex-col gap-4 p-8">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-patina/10 text-patina">
                  <c.icon size={20} aria-hidden strokeWidth={1.6} />
                </span>
                <h3 className="font-display text-xl text-ink">{c.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal variant="clip" className="container-page">
        <div className="img-frame aspect-[16/8] overflow-hidden rounded-xl">
          <Parallax className="h-full w-full" amount={12}>
            <Image
              src={unsplash(IMG.interiorK, { w: 2400, h: 1300, q: 80 })}
              alt="A naturally lit, sparsely furnished sustainable interior"
              width={2400}
              height={1300}
              sizes="100vw"
              className="h-[112%] w-full object-cover"
            />
          </Parallax>
        </div>
      </Reveal>

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            ["1.4", "trees planted for every one milled"],
            ["92%", "of materials sourced within 100 miles"],
            ["0", "pieces held in speculative stock"],
          ].map(([stat, label]) => (
            <Reveal key={label} variant="up" y={20}>
              <p className="font-display text-6xl text-patina">{stat}</p>
              <p className="mt-3 max-w-xs text-ink-soft">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="container-page pb-16 md:pb-24">
        <CTABlock
          eyebrow="The longest-lasting choice"
          title="The greenest furniture is the kind you keep."
          body="Buy once, keep for life, pass it down. It's the oldest sustainability strategy there is - and the one we're built around."
          primary={{ label: "Explore the collection", href: "/collections" }}
          secondary={{ label: "How it's made", href: "/craftsmanship" }}
          image={unsplash(IMG.outdoorHero, { w: 2000, h: 1100, q: 80 })}
        />
      </div>
    </>
  );
}

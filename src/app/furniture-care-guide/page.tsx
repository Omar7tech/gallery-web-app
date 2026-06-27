import type { Metadata } from "next";
import Link from "next/link";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { PageHeader } from "@/components/layout/page-header";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Furniture Care Guide",
  description:
    "How to care for solid wood, stone, brass, leather, and textiles so your Solera pieces age beautifully for generations.",
};

const careByMaterial: Record<string, { question: string; answer: string }[]> = {
  "Wood": [
    {
      question: "Everyday cleaning",
      answer:
        "Dust with a soft, dry or barely-damp cloth, following the grain. Avoid all-purpose sprays and anything containing silicone or ammonia - they cloud the finish over time.",
    },
    {
      question: "Refreshing the finish",
      answer:
        "Once or twice a year, apply a thin coat of the matching oil or wax from your care kit, leave it to soak, then buff. This is what keeps oiled timber alive and repairable.",
    },
    {
      question: "Marks and rings",
      answer:
        "Most water marks lift with a light re-oil. Deeper scratches can be sanded and spot-finished - contact us and we'll send the right grade and shade.",
    },
  ],
  "Stone": [
    {
      question: "Sealing and spills",
      answer:
        "Honed travertine is porous. Wipe spills - especially wine, citrus, and oil - promptly. We seal every stone top before delivery; reseal annually with a penetrating stone sealer.",
    },
    {
      question: "Cleaning",
      answer:
        "Use only pH-neutral stone cleaner or warm water. Never use vinegar or acidic cleaners, which etch the surface permanently.",
    },
  ],
  "Brass & Metal": [
    {
      question: "Living with patina",
      answer:
        "Unlacquered brass naturally deepens to a warm, mottled tone. If you love it, do nothing. To return it to bright, polish gently with a brass cleaner and a soft cloth.",
    },
    {
      question: "Blackened steel",
      answer:
        "Wipe with a dry cloth and re-wax once a year with a clear paste wax to maintain the soft graphite depth and resist fingerprints.",
    },
  ],
  "Leather": [
    {
      question: "Conditioning",
      answer:
        "Vegetable-tanned leather develops a personal patina. Condition twice a year with a natural leather balm to keep it supple. Keep out of direct sun to avoid uneven fading.",
    },
    {
      question: "Spills",
      answer:
        "Blot immediately with a dry cloth - never rub. For stubborn marks, a slightly damp cloth and patience; avoid soaps and solvents entirely.",
    },
  ],
  "Textiles": [
    {
      question: "Routine care",
      answer:
        "Vacuum upholstery gently with a brush attachment and rotate loose cushions to even out wear. Plump and reshape down-wrapped cushions regularly - softness is a feature, not a fault.",
    },
    {
      question: "Stains",
      answer:
        "Treat spills quickly by blotting from the outside in. Most of our fabrics are stain-resistant; for anything stubborn, professional upholstery cleaning is safest.",
    },
  ],
};

export default function FurnitureCareGuidePage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Furniture Care", path: "/furniture-care-guide" },
        ])}
      />
      <PageHeader
        serial="-"
        eyebrow="Care Guide"
        title="Helping your pieces age well."
        intro="A well-made piece doesn't need much - just a little attention, at the right moments. Here's how to care for every material we build with."
        crumbs={[{ label: "Home", href: "/" }, { label: "Furniture Care" }]}
        image={unsplash(IMG.materialTextile, { w: 2000, h: 1100, q: 80 })}
      />

      <section className="container-page py-20 md:py-28">
        <div className="mx-auto flex max-w-3xl flex-col gap-16">
          {Object.entries(careByMaterial).map(([material, items]) => (
            <Reveal key={material} variant="up" y={24}>
              <div>
                <h2 className="mb-2 font-display text-2xl text-ink md:text-3xl">
                  {material}
                </h2>
                <Accordion items={items} multiple />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="container-page mx-auto max-w-3xl">
          <SectionHeader
            serial="-"
            eyebrow="Included with every order"
            title="A care kit matched to your finish."
            intro="Every delivery arrives with the right oil, wax, or balm for your specific piece, plus a printed card of these instructions. Need a refill? Just ask."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className={buttonVariants({ variant: "primary" })}>
              Request a care kit
            </Link>
            <Link href="/buying-guide" className={buttonVariants({ variant: "outline" })}>
              Read the buying guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

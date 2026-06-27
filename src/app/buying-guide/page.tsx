import type { Metadata } from "next";
import Link from "next/link";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Buying Guide",
  description:
    "How to buy furniture meant to last — measuring your space, judging solid wood, choosing materials, and understanding made-to-order lead times.",
};

const sections = [
  {
    id: "measure",
    n: "01",
    title: "Measure twice, order once",
    paras: [
      "Before anything else, draw your room to scale — including doorways, the swing of doors, radiators, and the path the piece must travel to get in. The most common regret in furniture is not style; it's a sofa that won't make the turn on the stairs.",
      "Leave generous circulation space: 90cm for primary walkways, 60cm minimum elsewhere. A piece that fits the floor plan but chokes the room is the wrong piece.",
    ],
  },
  {
    id: "solid-wood",
    n: "02",
    title: "How to judge solid wood",
    paras: [
      "Turn a drawer over and look at the corner joint. A cut dovetail signals care; staples signal cost-cutting. On a tabletop, check that the grain continues around the edge — a real board, not a veneer wrapped over particleboard.",
      "Ask how the piece is finished. Hand-rubbed oil and wax can be repaired in place for a lifetime; a thick polyurethane shell looks perfect for five years and then can't be mended at all.",
    ],
  },
  {
    id: "materials",
    n: "03",
    title: "Choose materials for how they age",
    paras: [
      "The best materials improve with use. Unlacquered brass patinas, oiled oak warms, vegetable-tanned leather softens to your shape. If a finish is designed to stay perfectly new, it's designed to look worn the moment it isn't.",
      "Order samples and judge them in your own light, at different times of day. Showroom lighting flatters everything; your living room is the only test that matters.",
    ],
  },
  {
    id: "lead-times",
    n: "04",
    title: "Understand made-to-order",
    paras: [
      "Made-to-order furniture is built for you after you order — which is why it takes eight to fourteen weeks. That wait buys grain-matched timber, your exact finish and fabric, and a piece that was never sitting in a warehouse.",
      "Plan around it. Order early, especially for dining tables and beds, and treat the lead time as part of the craft rather than a delay.",
    ],
  },
  {
    id: "invest",
    n: "05",
    title: "Buy fewer, better things",
    paras: [
      "A single excellent piece outlives a room full of disposable ones, financially and aesthetically. Spend on the objects you touch every day — the sofa, the bed, the dining table — and let them anchor everything else.",
      "Think in decades. The right question is not 'can I afford this now?' but 'what will this cost me per year across the next thirty?'",
    ],
  },
];

export default function BuyingGuidePage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Buying Guide", path: "/buying-guide" },
        ])}
      />
      <PageHeader
        serial="—"
        eyebrow="Guidance"
        title="How to buy furniture for life."
        intro="A short, honest guide to choosing pieces that will still serve — and still look right — decades from now. No upsell, just what we'd tell a friend."
        crumbs={[{ label: "Home", href: "/" }, { label: "Buying Guide" }]}
        image={unsplash(IMG.interiorB, { w: 2000, h: 1100, q: 80 })}
      />

      <div className="container-page grid gap-12 py-20 lg:grid-cols-[230px_1fr] lg:gap-20 md:py-28">
        {/* TOC */}
        <aside className="hidden lg:block">
          <nav aria-label="Contents" className="sticky top-28">
            <p className="eyebrow mb-5 text-muted">Contents</p>
            <ol className="flex flex-col gap-3">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-baseline gap-3 text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    <span className="serial text-brass">{s.n}</span>
                    <span className="link-underline pb-0.5">{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Content */}
        <div className="flex max-w-2xl flex-col gap-16">
          {sections.map((s) => (
            <Reveal key={s.id} variant="up" y={24}>
              <section id={s.id} className="scroll-mt-28">
                <span className="serial text-5xl text-chalk-deep">{s.n}</span>
                <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
                  {s.title}
                </h2>
                <div className="prose-editorial mt-5 flex flex-col gap-4">
                  {s.paras.map((p, i) => (
                    <p key={i} className="text-lg leading-relaxed text-ink-soft">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}

          <div className="rounded-xl border border-line bg-paper p-8">
            <h2 className="font-display text-2xl text-ink">
              Want a second opinion?
            </h2>
            <p className="mt-2 text-ink-soft">
              Send us your room and we'll tell you honestly what we'd choose.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className={buttonVariants({ variant: "primary" })}>
                Ask a designer
              </Link>
              <Link href="/furniture-care-guide" className={buttonVariants({ variant: "outline" })}>
                Read the care guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

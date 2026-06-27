import type { Metadata } from "next";
import Image from "next/image";
import { collections } from "@/data/collections";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeader } from "@/components/ui/section-header";
import { Horizon } from "@/components/ui/horizon";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Parallax } from "@/components/motion/parallax";
import { CTABlock } from "@/components/marketing/cta-block";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Solera is a furniture atelier in Hudson, New York, building heirloom pieces by the solera method - heritage craft blended with modern design.",
};

const values = [
  {
    title: "Built to be inherited",
    body: "We design for the second owner. If a piece can't be passed down, we don't make it.",
  },
  {
    title: "Honesty in material",
    body: "Solid timber, real stone, unlacquered metal. What you see is what holds the weight.",
  },
  {
    title: "Restraint over novelty",
    body: "A small palette of finishes, kept for years, so today's piece blends with last decade's.",
  },
  {
    title: "Made, not manufactured",
    body: "Each order is built once, by hand, in our own workshop - never held in a warehouse.",
  },
];

const timeline = [
  { year: "1998", text: "Founded as a two-bench workshop in a Hudson warehouse." },
  { year: "2006", text: "The Halden sofa is released and becomes the house signature." },
  { year: "2014", text: "Interior design service opens; first full-residence commission." },
  { year: "2026", text: "Five collections, one atelier, still made to order." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHeader
        serial="-"
        eyebrow={`The Atelier, est. ${SITE.founded}`}
        title="We make furniture meant to outlast us."
        intro="Solera takes its name from the centuries-old method of ageing wine - where each new vintage is blended with the old, and nothing is ever wholly replaced. It is how we believe a home should be built."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        image={unsplash(IMG.interiorE, { w: 2000, h: 1100, q: 80 })}
      />

      {/* Mission */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <Reveal variant="fade">
            <span className="eyebrow text-brass">Our Mission</span>
          </Reveal>
          <h2 className="max-w-3xl text-3xl leading-snug text-ink md:text-4xl lg:text-5xl">
            <TextReveal text="To make fewer, better things - from materials that age into beauty, by hands that still cut their own joints." />
          </h2>
        </div>
      </section>

      <Reveal variant="clip" className="container-page">
        <div className="img-frame aspect-[16/8] overflow-hidden rounded-xl">
          <Parallax className="h-full w-full" amount={12}>
            <Image
              src={unsplash(IMG.craftB, { w: 2400, h: 1300, q: 80 })}
              alt="Inside the Solera workshop in Hudson, New York"
              width={2400}
              height={1300}
              sizes="100vw"
              className="h-[112%] w-full object-cover"
            />
          </Parallax>
        </div>
      </Reveal>

      {/* Vision + values */}
      <section className="container-page py-20 md:py-28">
        <SectionHeader
          serial="01"
          eyebrow="What we believe"
          title="Four convictions, held since 1998."
          intro="They are not a marketing exercise. They decide which trees we buy, which joints we refuse to shortcut, and which orders we turn down."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} variant="up" y={24} delay={i * 0.05} className="bg-chalk">
              <div className="flex h-full flex-col gap-3 p-8 md:p-10">
                <span className="serial text-sm text-brass">
                  Nº {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-ink">{v.title}</h3>
                <p className="text-ink-soft">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink py-20 text-chalk md:py-28">
        <div className="container-page">
          <SectionHeader serial="02" eyebrow="A short history" title="Twenty-eight years at one bench." light />
          <Horizon dark className="my-12" />
          <ol className="grid gap-10 md:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} variant="up" y={24} delay={i * 0.08}>
                <li>
                  <p className="font-display text-4xl text-brass-soft">{t.year}</p>
                  <p className="mt-4 text-sm leading-relaxed text-chalk/65">
                    {t.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Who it's for */}
      <section className="container-page py-20 md:py-28">
        <SectionHeader serial="03" eyebrow="Who we make for" title="People furnishing for the long term." />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal variant="up" y={24}>
            <article className="flex flex-col gap-3 rounded-lg border border-line bg-paper p-8">
              <span className="eyebrow text-muted">The Settler</span>
              <h3 className="font-display text-2xl text-ink">
                Buying the last sofa they'll ever need
              </h3>
              <p className="text-ink-soft">
                Mid-career, just bought or renovated, done with replacing flat-pack
                every five years. They want one good piece now and the confidence
                it will still match what they add later.
              </p>
            </article>
          </Reveal>
          <Reveal variant="up" y={24} delay={0.08}>
            <article className="flex flex-col gap-3 rounded-lg border border-line bg-paper p-8">
              <span className="eyebrow text-muted">The Curator</span>
              <h3 className="font-display text-2xl text-ink">
                Composing a whole home with intent
              </h3>
              <p className="text-ink-soft">
                An architect, collector, or designer furnishing a project end to
                end. They value provenance, restraint, and a single point of
                contact who can specify an entire residence.
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <div className="container-page pb-12 md:pb-20">
        <CTABlock
          eyebrow="Begin"
          title="Start with a single piece."
          body="Browse the collections, or talk to us about the room you're trying to compose. There's no rush - these are decisions meant to last."
          primary={{ label: "Explore collections", href: "/collections" }}
          secondary={{ label: "Visit the craft", href: "/craftsmanship" }}
          image={collections[0].image}
        />
      </div>
    </>
  );
}

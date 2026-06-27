import Link from "next/link";
import { ArrowRight, Sprout, Recycle, MapPin, Hammer } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";

const pillars = [
  {
    icon: Sprout,
    title: "FSC-certified timber",
    body: "Every board is traceable to a responsibly managed forest. We plant more than we mill.",
  },
  {
    icon: Hammer,
    title: "Made to order, not to stock",
    body: "We build only what is bought. No overproduction, no clearance, no landfill of last season.",
  },
  {
    icon: Recycle,
    title: "Repaired, never replaced",
    body: "Oiled and waxed finishes can be mended in place. We keep parts for decades, not years.",
  },
  {
    icon: MapPin,
    title: "Local supply, short miles",
    body: "Cut, joined, and finished within a hundred miles of our Hudson workshop.",
  },
];

export function SustainabilitySection() {
  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeader
        serial="09"
        eyebrow="Honestly Made"
        title="Sustainability without the slogans."
        intro="We don't offset our way to a clean conscience. We make fewer, better things, from materials that last - and we tell you exactly how."
        link={{ label: "Our commitments", href: "/sustainability" }}
      />

      <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal key={p.title} variant="up" y={24} delay={i * 0.06} className="bg-chalk">
            <div className="flex h-full flex-col gap-4 p-8">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-patina/10 text-patina">
                <p.icon size={20} aria-hidden strokeWidth={1.6} />
              </span>
              <h3 className="font-display text-xl text-ink">{p.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal variant="fade">
        <Link
          href="/sustainability"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink"
        >
          <span className="link-underline pb-1">Read the full report</span>
          <ArrowRight
            size={16}
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </Reveal>
    </section>
  );
}

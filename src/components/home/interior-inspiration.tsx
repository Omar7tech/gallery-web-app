import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Parallax } from "@/components/motion/parallax";

export function InteriorInspiration() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-end overflow-hidden bg-ink text-chalk">
      <Parallax className="absolute inset-0 -z-10" amount={18}>
        <Image
          src={unsplash(IMG.interiorD, { w: 2400, h: 1500, q: 80 })}
          alt="An interior composed entirely with Solera furniture"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </Parallax>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10" />

      <div className="container-page py-20 md:py-28">
        <Reveal variant="fade">
          <span className="eyebrow text-brass-soft">Nº 08 - Interiors</span>
        </Reveal>
        <h2 className="mt-6 max-w-4xl text-4xl leading-tight text-chalk md:text-6xl lg:text-7xl">
          <TextReveal text="A room is a single composition." />
        </h2>
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal variant="up" y={20}>
            <p className="max-w-md text-lg leading-relaxed text-chalk/75">
              See how our pieces live together - across apartments, farmhouses,
              and ateliers - in the Solera lookbook.
            </p>
          </Reveal>
          <Reveal variant="fade">
            <Link
              href="/lookbook"
              className="group inline-flex items-center gap-2 border-b border-chalk/40 pb-1.5 text-sm font-medium text-chalk transition-colors hover:border-chalk"
            >
              Open the lookbook
              <ArrowUpRight
                size={16}
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Parallax } from "@/components/motion/parallax";

const stats = [
  { value: "120+", label: "Hours per sofa" },
  { value: "12", label: "Hands on each piece" },
  { value: "1998", label: "Atelier founded" },
  { value: "∞", label: "Structural guarantee" },
];

export function CraftsmanshipStory() {
  return (
    <section className="bg-ink text-chalk">
      <div className="container-page grid gap-12 py-24 md:grid-cols-2 md:gap-20 md:py-32">
        <div className="flex flex-col justify-center">
          <Reveal variant="fade">
            <div className="flex items-center gap-3">
              <span className="serial text-sm text-brass-soft">Nº 05</span>
              <span className="eyebrow text-chalk/50">Inside the Atelier</span>
            </div>
          </Reveal>
          <h2 className="mt-6 max-w-xl text-4xl text-chalk md:text-5xl lg:text-6xl">
            <TextReveal text="Twelve pairs of hands, one chair." />
          </h2>
          <Reveal variant="up" y={24}>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-chalk/70">
              Every Solera piece is built to order in our Hudson workshop. We
              select the boards by eye, cut the joinery by hand, and finish each
              surface with oil and wax rather than plastic. Nothing leaves until
              it could be passed down.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line-dark bg-line-dark">
            {stats.map((s) => (
              <Reveal key={s.label} variant="fade" className="bg-ink">
                <div className="p-6 md:p-8">
                  <p className="font-display text-4xl text-brass-soft md:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-chalk/55">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" y={20}>
            <Link
              href="/craftsmanship"
              className="group mt-12 inline-flex items-center gap-2 text-sm font-medium text-chalk"
            >
              <span className="link-underline pb-1">
                Read the craftsmanship story
              </span>
              <ArrowRight
                size={16}
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <Reveal variant="clip" className="md:order-first">
          <div className="img-frame aspect-[4/5] overflow-hidden rounded-lg">
            <Parallax className="h-full w-full" amount={14}>
              <Image
                src={unsplash(IMG.craftA, { w: 1200, h: 1500, q: 80 })}
                alt="A cabinetmaker fitting a hand-cut joint in the Solera workshop"
                width={1200}
                height={1500}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-[114%] w-full object-cover"
              />
            </Parallax>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import { cn, unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { CTABlock } from "@/components/marketing/cta-block";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected Solera interiors - full residences, apartments, and retreats furnished end to end, from the Hudson Valley to Copenhagen.",
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <PageHeader
        serial="-"
        eyebrow="Selected Work"
        title="Whole homes, composed."
        intro="A selection of interiors furnished end to end through our design service - each one a study in restraint, material, and light."
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        image={unsplash(IMG.interiorB, { w: 2000, h: 1100, q: 80 })}
      />

      <section className="container-page py-20 md:py-28">
        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={p.slug} className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
                <Reveal
                  variant="clip"
                  className={cn("md:col-span-8", flip && "md:order-2 md:col-start-5")}
                >
                  <div className="img-frame aspect-[16/10] overflow-hidden rounded-lg">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                      className="object-cover transition-transform duration-1000 hover:scale-105"
                    />
                  </div>
                </Reveal>
                <div className={cn("md:col-span-4", flip && "md:order-1 md:col-start-1")}>
                  <Reveal variant="up" y={24}>
                    <span className="serial text-sm text-brass">Nº {p.serial}</span>
                    <p className="eyebrow mt-2 text-muted">
                      {p.type} - {p.year}
                    </p>
                    <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
                      {p.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted">{p.location}</p>
                    <p className="mt-5 leading-relaxed text-ink-soft">{p.summary}</p>
                    <div className="mt-6 flex gap-2">
                      {p.gallery.slice(0, 3).map((g, gi) => (
                        <div
                          key={gi}
                          className="img-frame relative aspect-square w-16 overflow-hidden rounded"
                        >
                          <Image src={g} alt="" fill sizes="64px" className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="container-page pb-16 md:pb-24">
        <CTABlock
          eyebrow="Your project next"
          title="Let's compose your rooms together."
          body="Whether it's one room or a whole house, our design team can take it from first conversation to finished, styled space."
          primary={{ label: "Start a project", href: "/interior-design-service" }}
          secondary={{ label: "Book a consultation", href: "/contact" }}
          image={unsplash(IMG.interiorD, { w: 2000, h: 1100, q: 80 })}
        />
      </div>
    </>
  );
}

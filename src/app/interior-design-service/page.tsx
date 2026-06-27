import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { PageHeader } from "@/components/layout/page-header";
import { SectionHeader } from "@/components/ui/section-header";
import { Horizon } from "@/components/ui/horizon";
import { Reveal } from "@/components/motion/reveal";
import { ConsultationForm } from "@/components/marketing/consultation-form";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Interior Design Service",
  description:
    "Work one-to-one with a Solera designer - from a single room to a whole home. Considered, unhurried, and built around pieces made to fit your life.",
};

const steps = [
  { n: "01", title: "Conversation", body: "We meet - in your space or over a call - to understand how you live, what you have, and what the room needs to become." },
  { n: "02", title: "Concept", body: "Your designer develops a furnishing scheme: a plan, a palette, and a curated set of pieces with finishes and fabrics specified." },
  { n: "03", title: "Refinement", body: "We review together, adjust, and order material samples so every decision is made in your own light, not a showroom's." },
  { n: "04", title: "Installation", body: "We manage production and white-glove delivery, then place and style every piece. You walk into a finished room." },
];

const included = [
  "A dedicated designer for the length of the project",
  "On-site visit or detailed remote consultation",
  "Floor plan and furnishing scheme",
  "Curated piece, finish, and fabric specification",
  "Boxed material samples to your door",
  "Order management through to installation",
  "Styling and final placement on delivery",
  "A year-one check-in and care service",
];

export default function InteriorDesignServicePage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Interior Design", path: "/interior-design-service" },
        ])}
      />
      <PageHeader
        serial="11"
        eyebrow="Design Service"
        title="Rooms composed with you."
        intro="From a single piece to a whole home - work one-to-one with a Solera designer who listens first and specifies second. Complimentary on full projects."
        crumbs={[{ label: "Home", href: "/" }, { label: "Interior Design" }]}
        image={unsplash(IMG.interiorD, { w: 2000, h: 1100, q: 80 })}
      />

      <section className="container-page py-20 md:py-28">
        <SectionHeader serial="01" eyebrow="How it works" title="Four unhurried steps." />
        <Horizon className="my-12" />
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} variant="up" y={24} delay={i * 0.07}>
              <div className="flex flex-col gap-4">
                <span className="serial text-5xl text-chalk-deep">{s.n}</span>
                <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                <p className="text-ink-soft">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="clip">
            <div className="img-frame aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={unsplash(IMG.interiorL, { w: 1200, h: 1500, q: 80 })}
                alt="A designed interior with Solera furniture"
                width={1200}
                height={1500}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="flex flex-col justify-center">
            <SectionHeader serial="02" eyebrow="What's included" title="Everything, end to end." as="h2" />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <Reveal key={item} variant="fade">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-patina text-chalk">
                      <Check size={12} strokeWidth={3} aria-hidden />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-soft">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            serial="03"
            eyebrow="Begin"
            title="Tell us about your project."
            intro="A few details to start. There's no obligation, and no charge for the first conversation."
            align="center"
          />
          <div className="mt-12">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}

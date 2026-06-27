import type { Metadata } from "next";
import Link from "next/link";
import { faqItems, faqGroups } from "@/data/faq";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { PageHeader } from "@/components/layout/page-header";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Solera — lead times, materials, care, delivery, returns, and our design service.",
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <JsonLdScript data={faqSchema} />
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <PageHeader
        serial="—"
        eyebrow="Good Questions"
        title="Everything, answered honestly."
        intro="Lead times, materials, care, delivery, and the design service. If your question isn't here, we're one message away."
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        image={unsplash(IMG.interiorG, { w: 2000, h: 1100, q: 80 })}
      />

      <section className="container-page py-20 md:py-28">
        <div className="mx-auto flex max-w-3xl flex-col gap-16">
          {faqGroups.map((group) => (
            <Reveal key={group} variant="up" y={24}>
              <div>
                <h2 className="mb-2 font-display text-2xl text-ink md:text-3xl">
                  {group}
                </h2>
                <Accordion
                  items={faqItems
                    .filter((f) => f.group === group)
                    .map((f) => ({ question: f.question, answer: f.answer }))}
                  multiple
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-2xl rounded-xl border border-line bg-paper px-8 py-12 text-center">
          <h2 className="font-display text-3xl text-ink">Still wondering?</h2>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            Our atelier team answers every message personally — usually within a
            business day.
          </p>
          <Link href="/contact" className={buttonVariants({ variant: "primary", size: "lg" }) + " mt-7"}>
            Ask us anything
          </Link>
        </div>
      </section>
    </>
  );
}

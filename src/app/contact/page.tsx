import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { ConsultationForm } from "@/components/marketing/consultation-form";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Solera atelier - book a consultation, request a quote, or arrange a visit to our Hudson workshop.",
};

const details = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: "Telephone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Atelier", value: SITE.address },
  { icon: Clock, label: "Studio hours", value: "Tue-Sat, 10-6 (by appointment)" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHeader
        serial="-"
        eyebrow="Say Hello"
        title="Let's begin a conversation."
        intro="Whether you're furnishing a single room or a whole home - or simply have a question - we'd love to hear from you. Every message reaches a real person."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image={unsplash(IMG.interiorH, { w: 2000, h: 1100, q: 80 })}
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Details */}
          <div>
            <span className="eyebrow text-brass">Reach us directly</span>
            <ul className="mt-8 flex flex-col gap-7">
              {details.map((d) => (
                <Reveal key={d.label} variant="fade">
                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-chalk-deep text-patina">
                      <d.icon size={18} aria-hidden strokeWidth={1.7} />
                    </span>
                    <div>
                      <p className="eyebrow text-muted">{d.label}</p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="link-underline mt-1 inline-block text-lg text-ink"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-lg text-ink">{d.value}</p>
                      )}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <div className="img-frame mt-10 aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={unsplash(IMG.interiorF, { w: 1000, h: 750, q: 80 })}
                alt="The Solera workshop in Hudson, New York"
                width={1000}
                height={750}
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl border border-line bg-paper p-7 md:p-10">
            <h2 className="font-display text-3xl text-ink">Send us a note</h2>
            <p className="mt-2 text-ink-soft">
              Tell us a little about your project and we'll reply within one
              business day.
            </p>
            <div className="mt-8">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

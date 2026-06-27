"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { materials } from "@/data/materials";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { Horizon } from "@/components/ui/horizon";

export function MaterialsSection() {
  const [active, setActive] = useState(0);
  const current = materials[active];

  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeader
        serial="06"
        eyebrow="Honest Materials"
        title="We choose what ages well."
        intro="A small, deliberate palette of timber, stone, metal, textile, and leather — each selected because it grows more beautiful with use, not less."
        link={{ label: "Explore materials", href: "/materials" }}
      />

      <Horizon className="my-12" />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Preview */}
        <div className="img-frame relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-auto">
          {materials.map((m, i) => (
            <Image
              key={m.id}
              src={m.image.replace("w=600&q=80&h=600", "w=1200&q=80&h=1000")}
              alt={m.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={cn(
                "object-cover transition-opacity duration-700",
                i === active ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-7">
            <p className="eyebrow text-chalk/70">{current.origin}</p>
            <p className="mt-1 font-display text-3xl text-chalk">
              {current.name}
            </p>
          </div>
        </div>

        {/* Selector */}
        <div className="flex flex-col">
          <div className="flex flex-wrap gap-3">
            {materials.map((m, i) => (
              <button
                key={m.id}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={cn(
                  "group flex items-center gap-3 rounded-full border py-2 pl-2 pr-4 text-sm transition-all duration-300",
                  i === active
                    ? "border-ink bg-ink text-chalk"
                    : "border-line text-ink-soft hover:border-ink",
                )}
              >
                <span
                  className="h-7 w-7 rounded-full border border-ink/10"
                  style={{ background: m.hex }}
                  aria-hidden
                />
                {m.name}
              </button>
            ))}
          </div>

          <div
            key={current.id}
            className="mt-10 flex flex-1 flex-col border-t border-line pt-10 animate-[toast-in_0.45s_ease]"
          >
            <p className="eyebrow text-muted">{current.type}</p>
            <p className="mt-4 max-w-md font-display text-2xl leading-snug text-ink md:text-3xl">
              {current.note}
            </p>
            <Link
              href="/materials"
              className="group mt-auto inline-flex w-fit items-center gap-2 pt-10 text-sm font-medium text-ink"
            >
              <span className="link-underline pb-1">See it in the collection</span>
              <ArrowRight
                size={16}
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

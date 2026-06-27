"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

export function Testimonials({
  items,
  className,
}: {
  items: Testimonial[];
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const current = items[active];

  function go(dir: 1 | -1) {
    setActive((p) => (p + dir + items.length) % items.length);
  }

  return (
    <div className={cn("relative", className)}>
      <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <figure className="order-2 flex flex-col gap-8 md:order-1">
          <div
            className="flex gap-1 text-brass"
            aria-label={`${current.rating} out of 5 stars`}
          >
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} size={16} className="fill-brass" aria-hidden />
            ))}
          </div>
          <blockquote
            key={current.id}
            className="font-display text-2xl leading-snug text-ink md:text-3xl lg:text-4xl animate-[toast-in_0.5s_ease]"
          >
            “{current.quote}”
          </blockquote>
          <figcaption className="flex items-center justify-between gap-6">
            <div>
              <p className="font-medium text-ink">{current.author}</p>
              <p className="text-sm text-muted">
                {current.role} — {current.location}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
              >
                <ArrowLeft size={16} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
              >
                <ArrowRight size={16} aria-hidden />
              </button>
            </div>
          </figcaption>
          <div className="flex gap-1.5" role="tablist" aria-label="Testimonials">
            {items.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={i === active}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  i === active ? "w-10 bg-ink" : "w-4 bg-sage hover:bg-muted",
                )}
              />
            ))}
          </div>
        </figure>

        <div className="img-frame order-1 aspect-[4/5] overflow-hidden rounded-lg md:order-2">
          <Image
            key={current.avatar}
            src={current.avatar.replace("w=160", "w=900").replace("h=160", "h=1100")}
            alt={current.author}
            fill
            sizes="(max-width: 768px) 100vw, 35vw"
            className="object-cover animate-[toast-in_0.6s_ease]"
          />
        </div>
      </div>
    </div>
  );
}

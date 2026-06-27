"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { TextReveal } from "@/components/motion/text-reveal";
import { MagneticLink } from "@/components/marketing/magnetic-link";
import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      gsap.matchMedia().add(
        {
          ok: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const { ok } = ctx.conditions as { ok: boolean };
          const image = root.querySelector("[data-hero-img]");
          const veil = root.querySelector("[data-hero-veil]");
          const fade = gsap.utils.toArray<HTMLElement>(
            root.querySelectorAll("[data-hero-fade]"),
          );

          if (!ok) {
            gsap.set([image, veil, ...fade], { opacity: 1, clearProps: "all" });
            return;
          }

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          tl.fromTo(
            image,
            { scale: 1.16, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" },
          )
            .fromTo(
              veil,
              { opacity: 0 },
              { opacity: 1, duration: 1.4 },
              0.2,
            )
            .fromTo(
              fade,
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 1, stagger: 0.12 },
              0.7,
            );

          // Subtle parallax drift on scroll.
          gsap.to(image, {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        },
      );
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] flex-col justify-end overflow-hidden bg-ink text-chalk"
    >
      <div data-hero-img className="absolute inset-0 -z-10 will-change-transform">
        <Image
          src={unsplash(IMG.livingHero, { w: 2400, h: 1600, q: 80 })}
          alt="A sunlit living room furnished by Solera"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        data-hero-veil
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/45 to-ink/25"
      />

      <div className="container-page pb-20 md:pb-24">
        <p data-hero-fade className="eyebrow mb-6 text-brass-soft">
          Furniture atelier, since 1998
        </p>
        <h1 className="max-w-4xl text-balance text-5xl leading-[0.96] text-chalk md:text-6xl lg:text-7xl">
          <TextReveal text="The art of living," trigger="load" />
          <span className="block text-brass-soft">
            <TextReveal text="layered over time." trigger="load" delay={0.25} />
          </span>
        </h1>

        <div
          data-hero-fade
          className="mt-8 flex flex-col gap-7 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-sm text-lg leading-relaxed text-chalk/75">
            Heirloom furniture, built to order in solid timber and honest
            materials, made to be added to across a lifetime.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <MagneticLink
              href="/collections"
              className={buttonVariants({ variant: "brass", size: "lg" })}
            >
              Explore collections
              <ArrowRight size={17} aria-hidden />
            </MagneticLink>
            <Link
              href="/craftsmanship"
              className="link-underline pb-1 text-sm font-medium text-chalk"
            >
              Our craft
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

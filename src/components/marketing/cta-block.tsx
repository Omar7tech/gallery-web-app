import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { MagneticLink } from "@/components/marketing/magnetic-link";

type CTABlockProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  image?: string;
  className?: string;
};

/** Full-width premium call-to-action. */
export function CTABlock({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  image,
  className,
}: CTABlockProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden rounded-xl bg-patina text-chalk",
        className,
      )}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-patina via-patina/85 to-patina/40" />
        </>
      )}
      <div className="relative z-10 flex flex-col items-start gap-8 px-7 py-16 md:px-16 md:py-24 lg:px-24">
        {eyebrow && (
          <Reveal variant="fade">
            <span className="eyebrow text-brass-soft">{eyebrow}</span>
          </Reveal>
        )}
        <h2 className="max-w-3xl text-4xl text-chalk md:text-5xl lg:text-6xl">
          <TextReveal text={title} />
        </h2>
        {body && (
          <Reveal variant="up" y={20}>
            <p className="max-w-xl text-lg leading-relaxed text-chalk/75">
              {body}
            </p>
          </Reveal>
        )}
        <Reveal variant="up" y={20}>
          <div className="flex flex-wrap items-center gap-4">
            <MagneticLink href={primary.href} className={buttonVariants({ variant: "brass", size: "lg" })}>
              {primary.label}
              <ArrowRight size={17} aria-hidden />
            </MagneticLink>
            {secondary && (
              <Link
                href={secondary.href}
                className="link-underline pb-1 text-sm font-medium text-chalk"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

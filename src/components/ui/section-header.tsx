import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

type SectionHeaderProps = {
  eyebrow?: string;
  serial?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  link?: { label: string; href: string };
  className?: string;
  /** Render title as h2 (default) or another heading level. */
  as?: "h1" | "h2" | "h3";
  light?: boolean;
};

/** Editorial section header: serial + eyebrow, large display title, optional link. */
export function SectionHeader({
  eyebrow,
  serial,
  title,
  intro,
  align = "left",
  link,
  className,
  as: Heading = "h2",
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {(eyebrow || serial) && (
        <Reveal variant="fade">
          <div
            className={cn(
              "flex items-center gap-3",
              align === "center" && "justify-center",
            )}
          >
            {serial && (
              <span
                className={cn(
                  "serial text-sm",
                  light ? "text-brass-soft" : "text-brass",
                )}
              >
                Nº {serial}
              </span>
            )}
            {eyebrow && (
              <span
                className={cn(
                  "eyebrow",
                  light ? "text-chalk/60" : "text-muted",
                )}
              >
                {eyebrow}
              </span>
            )}
          </div>
        </Reveal>
      )}

      <div
        className={cn(
          "flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12",
          align === "center" && "md:flex-col md:items-center",
        )}
      >
        <Heading
          className={cn(
            "max-w-3xl text-4xl md:text-5xl lg:text-6xl",
            light ? "text-chalk" : "text-ink",
          )}
        >
          <TextReveal text={title} />
        </Heading>

        {link && (
          <Reveal variant="fade" className="shrink-0">
            <Link
              href={link.href}
              className={cn(
                "link-underline group inline-flex items-center gap-2 pb-1 text-sm font-medium",
                light ? "text-chalk" : "text-ink",
              )}
            >
              {link.label}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>
          </Reveal>
        )}
      </div>

      {intro && (
        <Reveal variant="up" y={20}>
          <p
            className={cn(
              "max-w-2xl text-lg leading-relaxed text-pretty",
              align === "center" && "mx-auto",
              light ? "text-chalk/70" : "text-ink-soft",
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

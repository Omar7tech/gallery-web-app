import Image from "next/image";
import { Breadcrumb, type Crumb } from "@/components/ui/breadcrumb";
import { TextReveal } from "@/components/motion/text-reveal";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  serial?: string;
  title: string;
  intro?: string;
  crumbs: Crumb[];
  image?: string;
  align?: "left" | "center";
};

/**
 * Dark editorial page header used across inner pages. Keeps the transparent
 * navigation legible at the top of every route.
 */
export function PageHeader({
  eyebrow,
  serial,
  title,
  intro,
  crumbs,
  image,
  align = "left",
}: PageHeaderProps) {
  return (
    <header className="relative isolate overflow-hidden bg-ink text-chalk">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/50" />
        </>
      )}
      <div
        className={cn(
          "container-page flex flex-col gap-7 pb-16 pt-32 md:pb-20 md:pt-40",
          align === "center" && "items-center text-center",
        )}
      >
        <Breadcrumb items={crumbs} light />
        {(eyebrow || serial) && (
          <div
            className={cn(
              "flex items-center gap-3",
              align === "center" && "justify-center",
            )}
          >
            {serial && (
              <span className="serial text-sm text-brass-soft">Nº {serial}</span>
            )}
            {eyebrow && <span className="eyebrow text-chalk/55">{eyebrow}</span>}
          </div>
        )}
        <h1
          className={cn(
            "max-w-4xl text-balance text-5xl leading-[1.02] md:text-6xl lg:text-7xl",
            align === "center" && "mx-auto",
          )}
        >
          <TextReveal text={title} trigger="load" />
        </h1>
        {intro && (
          <Reveal variant="up" y={20}>
            <p
              className={cn(
                "max-w-2xl text-lg leading-relaxed text-chalk/70",
                align === "center" && "mx-auto",
              )}
            >
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}

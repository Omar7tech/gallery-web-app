import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";

export interface LegalSection {
  heading: string;
  paras: string[];
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
  crumbLabel,
  crumbHref,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  crumbLabel: string;
  crumbHref: string;
}) {
  return (
    <>
      <PageHeader
        serial="—"
        eyebrow={`Last updated ${updated}`}
        title={title}
        intro={intro}
        crumbs={[{ label: "Home", href: "/" }, { label: crumbLabel, href: crumbHref }]}
      />
      <div className="container-page grid gap-12 py-20 lg:grid-cols-[230px_1fr] lg:gap-20 md:py-28">
        <aside className="hidden lg:block">
          <nav aria-label="Contents" className="sticky top-28">
            <p className="eyebrow mb-5 text-muted">Sections</p>
            <ol className="flex flex-col gap-3">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#section-${i}`}
                    className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <div className="flex max-w-2xl flex-col gap-12">
          {sections.map((s, i) => (
            <Reveal key={s.heading} variant="up" y={20}>
              <section id={`section-${i}`} className="scroll-mt-28">
                <h2 className="font-display text-2xl text-ink md:text-3xl">
                  {s.heading}
                </h2>
                <div className="prose-editorial mt-4 flex flex-col gap-4">
                  {s.paras.map((p, j) => (
                    <p key={j} className="leading-relaxed text-ink-soft">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}

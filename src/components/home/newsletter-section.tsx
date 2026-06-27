import { Newsletter } from "@/components/marketing/newsletter";
import { Reveal } from "@/components/motion/reveal";

export function NewsletterSection() {
  return (
    <section className="container-page py-24 md:py-28">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <Reveal variant="fade">
          <span className="eyebrow text-brass">Nº 13 — The Ledger</span>
        </Reveal>
        <h2 className="mt-6 font-display text-4xl text-ink md:text-5xl">
          Stay close to the bench.
        </h2>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
          A seasonal dispatch of new work, material notes, and the occasional
          open studio. A few times a year — never more.
        </p>
        <div className="mt-9 w-full">
          <Newsletter className="mx-auto" />
        </div>
        <p className="mt-4 font-mono text-xs text-muted">
          No noise. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

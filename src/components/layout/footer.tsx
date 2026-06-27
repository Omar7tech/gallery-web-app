import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FOOTER_NAV, SITE } from "@/lib/site";
import { Logo } from "@/components/layout/logo";
import { Newsletter } from "@/components/marketing/newsletter";

export function Footer() {
  return (
    <footer className="relative bg-ink text-chalk">
      <div className="container-page py-20 md:py-28">
        {/* Top: brand + newsletter */}
        <div className="grid gap-12 border-b border-line-dark pb-16 lg:grid-cols-[1.1fr_1fr]">
          <div className="max-w-md">
            <Logo className="text-chalk" />
            <p className="mt-6 text-lg leading-relaxed text-chalk/65">
              {SITE.description}
            </p>
            <div className="mt-8 flex flex-col gap-1 font-mono text-sm text-chalk/55">
              <span>{SITE.address}</span>
              <a href={`mailto:${SITE.email}`} className="link-underline w-fit">
                {SITE.email}
              </a>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="w-fit">
                {SITE.phone}
              </a>
            </div>
          </div>

          <div className="lg:pl-12">
            <p className="eyebrow text-brass-soft">The Ledger — Seasonal Dispatch</p>
            <h2 className="mt-4 max-w-md font-display text-3xl text-chalk md:text-4xl">
              New pieces, quietly announced.
            </h2>
            <p className="mt-4 max-w-md text-chalk/60">
              A few times a year: new work, material notes, and the occasional
              open studio. No noise.
            </p>
            <div className="mt-7 [&_input]:border-chalk/30 [&_input]:text-chalk [&_input]:placeholder:text-chalk/40 [&_input:focus]:border-chalk [&_button]:bg-brass [&_button]:text-ink hover:[&_button]:bg-brass-soft">
              <Newsletter variant="stacked" />
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 md:grid-cols-4">
          {FOOTER_NAV.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <p className="eyebrow mb-5 text-chalk/45">{col.heading}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label + l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-chalk/75 transition-colors hover:text-chalk"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 border-t border-line-dark pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-chalk/45">
            © {new Date().getFullYear()} {SITE.legalName}. Made to order in
            Hudson, New York.
          </p>
          <div className="flex items-center gap-6">
            {SITE.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.14em] text-chalk/60 transition-colors hover:text-chalk"
              >
                {s.label}
                <ArrowUpRight
                  size={12}
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
          <div className="flex gap-5 font-mono text-xs text-chalk/45">
            <Link href="/privacy-policy" className="hover:text-chalk">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-chalk">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Oversized wordmark watermark */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden border-t border-line-dark"
      >
        <p className="whitespace-nowrap py-8 text-center font-display text-[18vw] leading-none tracking-tight text-chalk/[0.04]">
          SOLERA
        </p>
      </div>
    </footer>
  );
}

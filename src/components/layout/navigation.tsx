"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, Search, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MEGA_MENU, SITE } from "@/lib/site";
import { Logo } from "@/components/layout/logo";
import { SearchOverlay } from "@/components/layout/search-overlay";
import { WishlistDrawer } from "@/components/layout/wishlist-drawer";
import { useWishlist } from "@/components/providers/wishlist-provider";

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count } = useWishlist();
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change.
  useEffect(() => {
    setActivePanel(null);
    setMobileOpen(false);
  }, [pathname]);

  const solid = scrolled || activePanel !== null;
  const panel = MEGA_MENU.find((p) => p.label === activePanel);

  function openPanel(label: string) {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setActivePanel(label);
  }
  function scheduleClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActivePanel(null), 140);
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[120] transition-[background,box-shadow,color] duration-500",
          solid
            ? "bg-chalk/95 text-ink shadow-[0_1px_0_var(--color-line)] backdrop-blur-md"
            : "bg-transparent text-chalk",
        )}
        onMouseLeave={scheduleClose}
      >
        <div className="container-page flex h-18 items-center justify-between gap-6 md:h-20">
          {/* Left: mobile menu + desktop nav */}
          <div className="flex items-center gap-8">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="lg:hidden"
            >
              <Menu size={22} aria-hidden />
            </button>

            <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
              {MEGA_MENU.map((p) => (
                <button
                  key={p.label}
                  onMouseEnter={() => openPanel(p.label)}
                  onFocus={() => openPanel(p.label)}
                  onClick={() => setActivePanel(activePanel === p.label ? null : p.label)}
                  aria-expanded={activePanel === p.label}
                  className={cn(
                    "link-underline py-2 text-sm font-medium transition-colors",
                    activePanel === p.label && "text-patina",
                  )}
                >
                  {p.label}
                </button>
              ))}
              <Link href="/blog" className="link-underline py-2 text-sm font-medium">
                Journal
              </Link>
              <Link href="/about" className="link-underline py-2 text-sm font-medium">
                About
              </Link>
            </nav>
          </div>

          {/* Center: logo */}
          <Link
            href="/"
            aria-label="Solera — home"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <Logo />
          </Link>

          {/* Right: actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-current/5"
            >
              <Search size={19} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => setWishlistOpen(true)}
              aria-label={`Wishlist, ${count} item${count === 1 ? "" : "s"}`}
              className="relative grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-current/5"
            >
              <Heart size={19} aria-hidden />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 grid h-4.5 w-4.5 place-items-center rounded-full bg-brass font-mono text-[0.6rem] font-semibold text-ink">
                  {count}
                </span>
              )}
            </button>
            <Link
              href="/contact"
              className={cn(
                "ml-1 hidden h-10 items-center rounded-full px-5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors md:inline-flex",
                solid
                  ? "bg-ink text-chalk hover:bg-patina"
                  : "border border-chalk/40 text-chalk hover:bg-chalk hover:text-ink",
              )}
            >
              Consultation
            </Link>
          </div>
        </div>

        {/* Mega panel */}
        <div
          className={cn(
            "absolute inset-x-0 top-full hidden overflow-hidden border-t border-line bg-chalk/98 backdrop-blur-md transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:block",
            panel ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
          )}
          onMouseEnter={() => panel && openPanel(panel.label)}
          onMouseLeave={scheduleClose}
        >
          {panel && (
            <div className="container-page grid grid-cols-[1fr_1fr_0.9fr] gap-12 py-10 text-ink">
              {panel.columns.map((col) => (
                <div key={col.heading}>
                  <p className="eyebrow mb-5 text-muted">{col.heading}</p>
                  <ul className="flex flex-col gap-3">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="group inline-flex items-center gap-1.5 font-display text-xl text-ink transition-colors hover:text-patina"
                        >
                          {l.label}
                          <ArrowUpRight
                            size={14}
                            className="opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link
                href={panel.feature.href}
                className="img-frame group relative col-start-3 overflow-hidden rounded-lg"
              >
                <Image
                  src={panel.feature.image}
                  alt={panel.feature.title}
                  fill
                  sizes="20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  <p className="eyebrow mb-1 text-chalk/70">
                    {panel.feature.eyebrow}
                  </p>
                  <p className="font-display text-2xl text-chalk">
                    {panel.feature.title}
                  </p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <WishlistDrawer open={wishlistOpen} onClose={() => setWishlistOpen(false)} />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

/* ---- Mobile navigation ----------------------------------------------------*/

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[170] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-ink/50 transition-opacity duration-500",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={cn(
          "absolute inset-y-0 left-0 flex w-[min(88vw,26rem)] flex-col bg-chalk transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <Logo className="text-ink" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-ink/5"
          >
            <X size={20} aria-hidden />
          </button>
        </div>
        <nav
          aria-label="Mobile"
          className="flex-1 overflow-y-auto px-6 py-8"
        >
          {MEGA_MENU.map((p) => (
            <div key={p.label} className="mb-7">
              <Link
                href={p.href}
                onClick={onClose}
                className="font-display text-2xl text-ink"
              >
                {p.label}
              </Link>
              <ul className="mt-3 flex flex-col gap-2 border-l border-line pl-4">
                {p.columns.flatMap((c) => c.links).map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={onClose}
                      className="text-base text-ink-soft transition-colors hover:text-patina"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-3 border-t border-line pt-6">
            <Link href="/blog" onClick={onClose} className="font-display text-2xl text-ink">
              Journal
            </Link>
            <Link href="/about" onClick={onClose} className="font-display text-2xl text-ink">
              About
            </Link>
          </div>
        </nav>
        <div className="border-t border-line px-6 py-5">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center rounded-md bg-ink text-sm font-semibold uppercase tracking-[0.14em] text-chalk"
          >
            Book a Consultation
          </Link>
          <p className="mt-4 text-center font-mono text-xs text-muted">
            {SITE.email}
          </p>
        </div>
      </div>
    </div>
  );
}

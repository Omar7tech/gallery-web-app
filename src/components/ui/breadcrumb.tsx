import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href?: string;
}

/** Accessible breadcrumb trail. Pair with BreadcrumbList JSON-LD at page level. */
export function Breadcrumb({
  items,
  className,
  light = false,
}: {
  items: Crumb[];
  className?: string;
  light?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn(className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={cn(
                    "link-underline font-mono uppercase tracking-[0.14em] transition-colors",
                    light ? "text-chalk/60 hover:text-chalk" : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={cn(
                    "font-mono uppercase tracking-[0.14em]",
                    light ? "text-chalk" : "text-ink",
                  )}
                >
                  {item.label}
                </span>
              )}
              {!last && (
                <ChevronRight
                  size={12}
                  aria-hidden
                  className={light ? "text-chalk/40" : "text-sage"}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

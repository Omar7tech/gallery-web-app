"use client";

import Link from "next/link";
import { Magnetic } from "@/components/motion/magnetic";

/** A Next.js Link wrapped in the magnetic hover effect, for primary CTAs. */
export function MagneticLink({
  href,
  className,
  children,
  strength = 0.35,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  strength?: number;
}) {
  return (
    <Magnetic strength={strength}>
      <Link href={href} className={className}>
        {children}
      </Link>
    </Magnetic>
  );
}

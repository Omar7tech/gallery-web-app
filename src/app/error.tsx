"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production this would report to an error service.
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[80svh] items-center bg-chalk">
      <div className="container-page py-32 text-center">
        <p className="eyebrow text-error">Something went wrong</p>
        <h1 className="mx-auto mt-6 max-w-2xl text-balance font-display text-4xl text-ink md:text-6xl">
          A joint came loose.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-ink-soft">
          An unexpected error interrupted this page. Try again - and if it
          persists, we'd genuinely like to know.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" onClick={reset}>
            <RotateCcw size={16} aria-hidden />
            Try again
          </Button>
          <Link href="/" className="link-underline pb-1 text-sm font-medium text-ink">
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}

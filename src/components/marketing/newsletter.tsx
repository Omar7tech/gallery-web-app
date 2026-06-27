"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/providers/toast-provider";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Newsletter({
  variant = "inline",
  className,
}: {
  variant?: "inline" | "stacked";
  className?: string;
}) {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    // Simulated subscription request.
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setEmail("");
    toast({
      title: "Welcome to Solera",
      description: "Look out for The Ledger in your inbox each season.",
      variant: "success",
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn(
        "w-full",
        variant === "stacked" ? "max-w-md" : "max-w-xl",
        className,
      )}
    >
      <div
        className={cn(
          "flex gap-3",
          variant === "stacked" ? "flex-col" : "flex-col sm:flex-row",
        )}
      >
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            placeholder="your@email.com"
            aria-invalid={!!error}
            aria-describedby={error ? "newsletter-error" : undefined}
            className="h-13 w-full border-b border-ink/30 bg-transparent px-1 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-md bg-ink px-7 py-3 text-sm font-medium text-chalk transition-colors hover:bg-patina disabled:opacity-60"
        >
          {loading ? "Joining…" : "Subscribe"}
          {!loading && (
            <ArrowRight
              size={16}
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            />
          )}
        </button>
      </div>
      {error && (
        <p id="newsletter-error" role="alert" className="mt-2 text-xs text-error">
          {error}
        </p>
      )}
    </form>
  );
}

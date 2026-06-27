"use client";

import { useState } from "react";
import { Download, Clock, Star, MessageSquare } from "lucide-react";
import type { Product } from "@/types";
import { cn, formatPrice } from "@/lib/utils";
import { getMaterial } from "@/data/materials";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/overlay";
import { Input, Textarea } from "@/components/ui/field";
import { WishlistButton } from "@/components/product/wishlist-button";
import { useToast } from "@/components/providers/toast-provider";

function Swatch({
  hex,
  image,
  label,
  active,
  onClick,
}: {
  hex: string;
  image?: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={label}
      title={label}
      className={cn(
        "relative h-11 w-11 overflow-hidden rounded-full border-2 transition-all duration-200",
        active ? "border-ink scale-105" : "border-line hover:border-sage",
      )}
      style={image ? undefined : { background: hex }}
    >
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" className="h-full w-full object-cover" />
      )}
    </button>
  );
}

export function ProductConfigurator({ product }: { product: Product }) {
  const { toast } = useToast();
  const [finish, setFinish] = useState(product.finishes[0]?.id);
  const [fabric, setFabric] = useState(product.fabrics[0]?.id);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const materialSwatches = product.materials
    .map((id) => getMaterial(id))
    .filter(Boolean);

  function downloadSpec() {
    const lines = [
      `SOLERA - SPECIFICATION SHEET`,
      `========================================`,
      ``,
      `${product.name}`,
      `${product.category} · Designed by ${product.designer}, ${product.year}`,
      `Reference: SOL-${product.serial}`,
      ``,
      `Price (base): ${formatPrice(product.price, product.currency)}`,
      `Lead time: ${product.leadTimeWeeks} weeks, made to order`,
      ``,
      `DIMENSIONS`,
      ...product.dimensions.map((d) => `  - ${d.label}: ${d.value}`),
      ``,
      `CONSTRUCTION`,
      ...product.specs.map((s) => `  - ${s.label}: ${s.value}`),
      ``,
      `MATERIALS`,
      ...materialSwatches.map((m) => `  - ${m!.name} (${m!.origin})`),
      ``,
      `© ${new Date().getFullYear()} Solera Furniture Atelier - Hudson, New York`,
    ].join("\n");

    const blob = new Blob([lines], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `solera-${product.slug}-spec.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast({
      title: "Spec sheet downloaded",
      description: `${product.name} - full specification`,
      variant: "success",
    });
  }

  async function submitQuote(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "A valid email, please.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setQuoteOpen(false);
    setForm({ name: "", email: "", message: "" });
    toast({
      title: "Request received",
      description: "An atelier advisor will reply within one business day.",
      variant: "success",
    });
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        {product.isNew && <Badge variant="brass">New</Badge>}
        {product.isBestSeller && <Badge variant="patina">Best Seller</Badge>}
        <span className="eyebrow text-muted">
          {product.category} - Nº {product.serial}
        </span>
      </div>

      <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">
        {product.name}
      </h1>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        <span className="font-display text-2xl text-ink">
          {formatPrice(product.price, product.currency)}
        </span>
        <span className="flex items-center gap-1.5 text-sm text-muted">
          <Star size={14} className="fill-brass text-brass" aria-hidden />
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
        {product.shortDescription}
      </p>

      {/* Material */}
      {materialSwatches.length > 0 && (
        <div className="mt-8">
          <p className="eyebrow mb-3 text-ink-soft">Materials</p>
          <div className="flex flex-wrap gap-2.5">
            {materialSwatches.map((m) => (
              <span
                key={m!.id}
                title={`${m!.name} - ${m!.origin}`}
                className="flex items-center gap-2 rounded-full border border-line py-1.5 pl-1.5 pr-3 text-xs text-ink-soft"
              >
                <span
                  className="h-6 w-6 rounded-full border border-ink/10"
                  style={{ background: m!.hex }}
                  aria-hidden
                />
                {m!.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Finish */}
      {product.finishes.length > 0 && (
        <div className="mt-7">
          <div className="mb-3 flex items-baseline justify-between">
            <p className="eyebrow text-ink-soft">Finish</p>
            <span className="text-sm text-muted">
              {product.finishes.find((f) => f.id === finish)?.name}
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {product.finishes.map((f) => (
              <Swatch
                key={f.id}
                hex={f.hex}
                label={f.name}
                active={f.id === finish}
                onClick={() => setFinish(f.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Fabric */}
      {product.fabrics.length > 0 && (
        <div className="mt-7">
          <div className="mb-3 flex items-baseline justify-between">
            <p className="eyebrow text-ink-soft">Upholstery</p>
            <span className="text-sm text-muted">
              {product.fabrics.find((f) => f.id === fabric)?.name}
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {product.fabrics.map((f) => (
              <Swatch
                key={f.id}
                hex={f.hex}
                image={f.image}
                label={f.name}
                active={f.id === fabric}
                onClick={() => setFabric(f.id)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 flex items-center gap-2 rounded-md bg-chalk-deep px-4 py-3 text-sm text-ink-soft">
        <Clock size={16} className="text-brass" aria-hidden />
        Made to order - approx. {product.leadTimeWeeks} weeks
      </div>

      {/* Actions */}
      <div className="mt-7 flex flex-col gap-3">
        <div className="flex gap-3">
          <Button size="lg" className="flex-1" onClick={() => setQuoteOpen(true)}>
            <MessageSquare size={17} aria-hidden />
            Request a quote
          </Button>
          <WishlistButton slug={product.slug} name={product.name} variant="full" />
        </div>
        <button
          type="button"
          onClick={downloadSpec}
          className="inline-flex items-center justify-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
        >
          <Download size={15} aria-hidden />
          <span className="link-underline pb-0.5">Download spec sheet</span>
        </button>
      </div>

      {/* Quote modal */}
      <Modal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        title={`Enquire - ${product.name}`}
      >
        <p className="mb-6 text-sm text-ink-soft">
          Tell us a little about your space and we'll prepare a tailored quote,
          including finishes and delivery.
        </p>
        <form onSubmit={submitQuote} noValidate className="flex flex-col gap-4">
          <Input
            label="Name"
            required
            value={form.name}
            error={errors.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            label="Email"
            type="email"
            required
            value={form.email}
            error={errors.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Textarea
            label="Anything we should know?"
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <Button type="submit" size="lg" disabled={sending}>
            {sending ? "Sending…" : "Send enquiry"}
          </Button>
        </form>
      </Modal>
    </div>
  );
}

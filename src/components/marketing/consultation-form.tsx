"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Input, Textarea, Select, Checkbox } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/providers/toast-provider";

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budget: string;
  message: string;
  consent: boolean;
}

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "single-room",
  location: "",
  budget: "10-25k",
  message: "",
  consent: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ConsultationForm({
  compact = false,
}: {
  compact?: boolean;
}) {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.location.trim()) next.location = "Where is the project?";
    if (!form.consent) next.consent = "Please accept to continue.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1100));
    setSending(false);
    setDone(true);
    toast({
      title: "Consultation requested",
      description: "A Solera designer will be in touch within one business day.",
      variant: "success",
    });
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-5 rounded-xl border border-line bg-paper px-8 py-16 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-patina text-chalk">
          <Check size={28} aria-hidden />
        </span>
        <h3 className="font-display text-3xl text-ink">Thank you, {form.name.split(" ")[0]}.</h3>
        <p className="max-w-sm text-ink-soft">
          Your request is with our design team. Expect a personal reply within
          one business day — we read every one.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setForm(initial);
            setDone(false);
          }}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Full name"
          required
          autoComplete="name"
          value={form.name}
          error={errors.name}
          onChange={(e) => set("name", e.target.value)}
        />
        <Input
          label="Email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          error={errors.email}
          onChange={(e) => set("email", e.target.value)}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Phone (optional)"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
        />
        <Input
          label="Project location"
          required
          placeholder="City, country"
          value={form.location}
          error={errors.location}
          onChange={(e) => set("location", e.target.value)}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Select
          label="Project type"
          value={form.projectType}
          onChange={(e) => set("projectType", e.target.value)}
          options={[
            { value: "single-room", label: "A single room" },
            { value: "full-home", label: "A full home" },
            { value: "specific-piece", label: "A specific piece" },
            { value: "commercial", label: "Commercial / hospitality" },
          ]}
        />
        <Select
          label="Indicative budget"
          value={form.budget}
          onChange={(e) => set("budget", e.target.value)}
          options={[
            { value: "under-10k", label: "Under $10,000" },
            { value: "10-25k", label: "$10,000 – $25,000" },
            { value: "25-75k", label: "$25,000 – $75,000" },
            { value: "75k-plus", label: "$75,000+" },
          ]}
        />
      </div>
      {!compact && (
        <Textarea
          label="Tell us about the space"
          rows={4}
          placeholder="Rooms, style, timeline, anything you'd like us to know…"
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
        />
      )}
      <div className="flex flex-col gap-2">
        <Checkbox
          label="I'd like a Solera designer to contact me about this project."
          checked={form.consent}
          onChange={(e) => set("consent", e.target.checked)}
        />
        {errors.consent && (
          <p className="text-xs text-error" role="alert">
            {errors.consent}
          </p>
        )}
      </div>
      <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-fit">
        {sending ? "Sending…" : "Request consultation"}
        {!sending && <ArrowRight size={17} aria-hidden />}
      </Button>
    </form>
  );
}

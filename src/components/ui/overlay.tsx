"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/* ---- shared overlay behaviour --------------------------------------------*/

function useOverlay(open: boolean, onClose: () => void) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Move focus into the panel.
    const t = window.setTimeout(() => {
      const focusable = ref.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      focusable?.focus();
    }, 50);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      window.clearTimeout(t);
    };
  }, [open, onClose]);

  return { mounted, ref };
}

/* ---- Modal ----------------------------------------------------------------*/

export function Modal({
  open,
  onClose,
  title,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { mounted, ref } = useOverlay(open, onClose);
  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-ink/55 backdrop-blur-[2px] animate-[toast-in_0.3s_ease]"
        onClick={onClose}
        aria-hidden
      />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "relative z-10 w-full max-w-lg rounded-lg border border-line bg-paper p-7 shadow-lg",
          "animate-[toast-in_0.4s_cubic-bezier(0.22,1,0.36,1)]",
          className,
        )}
      >
        {title && (
          <h2 className="mb-4 font-display text-2xl text-ink">{title}</h2>
        )}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
        >
          <X size={18} aria-hidden />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

/* ---- Drawer ---------------------------------------------------------------*/

export function Drawer({
  open,
  onClose,
  side = "right",
  title,
  children,
  className,
  widthClass = "w-full max-w-md",
}: {
  open: boolean;
  onClose: () => void;
  side?: "right" | "left";
  title?: string;
  children: React.ReactNode;
  className?: string;
  widthClass?: string;
}) {
  const { mounted, ref } = useOverlay(open, onClose);
  if (!mounted) return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-[160]",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-ink/55 backdrop-blur-[2px] transition-opacity duration-500",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
        aria-hidden
      />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "absolute inset-y-0 flex flex-col border-line bg-chalk shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          widthClass,
          side === "right"
            ? cn("right-0 border-l", open ? "translate-x-0" : "translate-x-full")
            : cn("left-0 border-r", open ? "translate-x-0" : "-translate-x-full"),
          className,
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <span className="eyebrow text-muted">{title}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close panel"
            className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <X size={18} aria-hidden />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto overscroll-contain">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}

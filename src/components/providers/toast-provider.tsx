"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { Check, Info, X, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastVariant = "success" | "error" | "info";

interface ToastItem {
  id: number;
  title: string;
  description?: string;
  variant: ToastVariant;
}

interface ToastInput {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastContextValue {
  toast: (input: ToastInput) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const icons = {
  success: Check,
  error: TriangleAlert,
  info: Info,
} as const;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const idRef = useRef(0);

  // Defer portal until mounted (SSR-safe).
  useEffect(() => setMounted(true), []);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({ title, description, variant = "info", duration = 4200 }: ToastInput) => {
      const id = ++idRef.current;
      setToasts((prev) => [...prev, { id, title, description, variant }]);
      window.setTimeout(() => dismiss(id), duration);
    },
    [dismiss],
  );

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {mounted &&
        createPortal(
          <div
            className="pointer-events-none fixed bottom-6 right-6 z-[200] flex w-[min(92vw,22rem)] flex-col gap-3"
            role="region"
            aria-label="Notifications"
            aria-live="polite"
          >
            {toasts.map((t) => {
              const Icon = icons[t.variant];
              return (
                <div
                  key={t.id}
                  className={cn(
                    "pointer-events-auto flex items-start gap-3 rounded-md border bg-paper px-4 py-3.5 shadow-lg",
                    "animate-[toast-in_0.4s_cubic-bezier(0.22,1,0.36,1)]",
                    t.variant === "success" && "border-l-2 border-l-success",
                    t.variant === "error" && "border-l-2 border-l-error",
                    t.variant === "info" && "border-l-2 border-l-brass",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 shrink-0",
                      t.variant === "success" && "text-success",
                      t.variant === "error" && "text-error",
                      t.variant === "info" && "text-brass",
                    )}
                  >
                    <Icon size={17} strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-snug text-ink">
                      {t.title}
                    </p>
                    {t.description && (
                      <p className="mt-0.5 text-sm leading-snug text-muted">
                        {t.description}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => dismiss(t.id)}
                    className="-mr-1 -mt-1 shrink-0 rounded p-1 text-muted transition-colors hover:text-ink"
                    aria-label="Dismiss notification"
                  >
                    <X size={15} aria-hidden />
                  </button>
                </div>
              );
            })}
          </div>,
          document.body,
        )}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

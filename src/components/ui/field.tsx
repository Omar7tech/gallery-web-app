import { forwardRef, useId } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/* ---- Label + error scaffolding -------------------------------------------*/

function FieldShell({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
}: {
  label?: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={htmlFor}
          className="eyebrow text-ink-soft flex items-center gap-1.5"
        >
          {label}
          {required && <span className="text-brass">*</span>}
        </label>
      )}
      {children}
      {hint && !error && (
        <p className="text-xs text-muted" id={`${htmlFor}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p
          className="text-xs text-error"
          id={`${htmlFor}-error`}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

const fieldBase =
  "w-full bg-paper border border-line text-ink placeholder:text-muted/70 rounded-md px-4 py-3 text-base transition-colors duration-200 focus:outline-none focus:border-ink focus-visible:ring-2 focus-visible:ring-brass/40 aria-[invalid=true]:border-error";

/* ---- Input ----------------------------------------------------------------*/

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, id, className, required, ...props }, ref) => {
    const autoId = useId();
    const fieldId = id ?? autoId;
    return (
      <FieldShell
        label={label}
        htmlFor={fieldId}
        error={error}
        hint={hint}
        required={required}
      >
        <input
          ref={ref}
          id={fieldId}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined
          }
          required={required}
          className={cn(fieldBase, className)}
          {...props}
        />
      </FieldShell>
    );
  },
);
Input.displayName = "Input";

/* ---- Textarea -------------------------------------------------------------*/

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, id, className, required, ...props }, ref) => {
    const autoId = useId();
    const fieldId = id ?? autoId;
    return (
      <FieldShell
        label={label}
        htmlFor={fieldId}
        error={error}
        hint={hint}
        required={required}
      >
        <textarea
          ref={ref}
          id={fieldId}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined
          }
          required={required}
          className={cn(fieldBase, "min-h-32 resize-y", className)}
          {...props}
        />
      </FieldShell>
    );
  },
);
Textarea.displayName = "Textarea";

/* ---- Select ---------------------------------------------------------------*/

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, id, className, options, required, ...props }, ref) => {
    const autoId = useId();
    const fieldId = id ?? autoId;
    return (
      <FieldShell
        label={label}
        htmlFor={fieldId}
        error={error}
        hint={hint}
        required={required}
      >
        <div className="relative">
          <select
            ref={ref}
            id={fieldId}
            aria-invalid={!!error}
            required={required}
            className={cn(fieldBase, "appearance-none pr-11", className)}
            {...props}
          >
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            aria-hidden
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
          />
        </div>
      </FieldShell>
    );
  },
);
Select.displayName = "Select";

/* ---- Checkbox -------------------------------------------------------------*/

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, className, checked, ...props }, ref) => {
    const autoId = useId();
    const fieldId = id ?? autoId;
    return (
      <label
        htmlFor={fieldId}
        className="group flex cursor-pointer items-center gap-3 text-sm text-ink-soft"
      >
        <span className="relative grid h-5 w-5 place-items-center">
          <input
            ref={ref}
            id={fieldId}
            type="checkbox"
            checked={checked}
            className="peer sr-only"
            {...props}
          />
          <span
            aria-hidden
            className={cn(
              "h-5 w-5 rounded-[5px] border border-sage bg-paper transition-colors duration-200",
              "peer-checked:border-patina peer-checked:bg-patina",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-brass/50",
              className,
            )}
          />
          <Check
            size={13}
            strokeWidth={3}
            aria-hidden
            className="pointer-events-none absolute scale-0 text-chalk opacity-0 transition-all duration-200 peer-checked:scale-100 peer-checked:opacity-100"
          />
        </span>
        {label}
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";

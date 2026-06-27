import { cn } from "@/lib/utils";

/**
 * SOLERA wordmark — typographic, set in the display face with a brass horizon
 * node over the first letter (the signature mark). Scales cleanly via type.
 */
export function Logo({
  className,
  showMark = true,
}: {
  className?: string;
  showMark?: boolean;
}) {
  return (
    <span
      className={cn(
        "relative inline-flex select-none items-baseline font-display text-[1.65rem] font-medium leading-none tracking-[0.22em]",
        className,
      )}
      aria-label="Solera"
    >
      {showMark && (
        <span
          aria-hidden
          className="absolute -top-1 left-[0.08em] h-1 w-1 rounded-full bg-brass"
        />
      )}
      <span aria-hidden>SOLERA</span>
    </span>
  );
}

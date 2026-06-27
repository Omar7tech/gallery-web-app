import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.16em] text-2xs font-medium",
  {
    variants: {
      variant: {
        solid: "bg-ink text-chalk px-2.5 py-1 rounded-sm",
        brass: "bg-brass text-ink px-2.5 py-1 rounded-sm",
        patina: "bg-patina text-chalk px-2.5 py-1 rounded-sm",
        outline: "border border-current px-2.5 py-1 rounded-sm text-ink-soft",
        bare: "text-muted",
      },
    },
    defaultVariants: { variant: "bare" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background,color,border,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brass select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-chalk hover:bg-patina shadow-sm hover:shadow-md",
        secondary:
          "bg-paper text-ink border border-line hover:border-ink hover:bg-chalk-deep",
        outline:
          "border border-ink/40 text-ink hover:border-ink hover:bg-ink hover:text-chalk",
        ghost: "text-ink hover:bg-ink/5",
        brass: "bg-brass text-ink hover:bg-brass-soft shadow-sm",
      },
      size: {
        sm: "h-9 px-4 text-xs rounded-sm",
        md: "h-12 px-6 text-sm rounded-md",
        lg: "h-14 px-8 text-base rounded-md",
        icon: "h-11 w-11 rounded-full",
      },
      uppercase: {
        true: "uppercase tracking-[0.16em] text-2xs font-semibold",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      uppercase: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, uppercase, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, uppercase }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };

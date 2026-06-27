"use client";

import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWishlist } from "@/components/providers/wishlist-provider";
import { useToast } from "@/components/providers/toast-provider";

export function WishlistButton({
  slug,
  name,
  variant = "icon",
  className,
}: {
  slug: string;
  name: string;
  variant?: "icon" | "full";
  className?: string;
}) {
  const { has, toggle } = useWishlist();
  const { toast } = useToast();
  const active = has(slug);

  function onClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const added = toggle(slug);
    toast({
      title: added ? "Saved to wishlist" : "Removed from wishlist",
      description: name,
      variant: added ? "success" : "info",
    });
  }

  if (variant === "full") {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        className={cn(
          "group inline-flex h-12 items-center justify-center gap-2.5 rounded-md border px-6 text-sm font-medium transition-colors duration-300",
          active
            ? "border-patina bg-patina/5 text-patina"
            : "border-line text-ink hover:border-ink",
          className,
        )}
      >
        <Heart
          size={17}
          aria-hidden
          className={cn("transition-all", active && "fill-patina text-patina")}
        />
        {active ? "Saved" : "Save piece"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={active ? `Remove ${name} from wishlist` : `Save ${name} to wishlist`}
      className={cn(
        "grid h-10 w-10 place-items-center rounded-full border border-line/80 bg-paper/90 text-ink backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-ink",
        className,
      )}
    >
      <Heart
        size={16}
        aria-hidden
        className={cn(
          "transition-all duration-300",
          active && "fill-patina text-patina",
        )}
      />
    </button>
  );
}

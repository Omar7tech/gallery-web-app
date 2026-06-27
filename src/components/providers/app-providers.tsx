"use client";

import { ToastProvider } from "@/components/providers/toast-provider";
import { WishlistProvider } from "@/components/providers/wishlist-provider";

/** Single client boundary that hosts all global providers. */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <WishlistProvider>{children}</WishlistProvider>
    </ToastProvider>
  );
}

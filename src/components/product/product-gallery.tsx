"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

export function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(false);
      if (e.key === "ArrowRight") setActive((a) => (a + 1) % images.length);
      if (e.key === "ArrowLeft")
        setActive((a) => (a - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoom, images.length]);

  return (
    <div className="flex flex-col-reverse gap-4 lg:flex-row lg:gap-5">
      {/* Thumbnails */}
      <div className="flex gap-3 lg:flex-col">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            aria-current={i === active}
            className={cn(
              "img-frame relative aspect-square w-16 shrink-0 overflow-hidden rounded-md border transition-all lg:w-20",
              i === active
                ? "border-ink opacity-100"
                : "border-transparent opacity-60 hover:opacity-100",
            )}
          >
            <Image src={src} alt="" fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>

      {/* Main */}
      <div className="img-frame group relative aspect-[4/5] flex-1 overflow-hidden rounded-lg">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${name} — view ${i + 1}`}
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={cn(
              "object-cover transition-opacity duration-500",
              i === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        <button
          type="button"
          onClick={() => setZoom(true)}
          aria-label="View fullscreen"
          className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-paper/90 text-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-paper group-hover:opacity-100 focus-visible:opacity-100"
        >
          <Expand size={17} aria-hidden />
        </button>
      </div>

      {/* Fullscreen */}
      {mounted &&
        zoom &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${name} gallery`}
            className="fixed inset-0 z-[200] flex flex-col bg-ink/95 backdrop-blur-md animate-[toast-in_0.3s_ease]"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="serial text-sm text-chalk/70">
                {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => setZoom(false)}
                aria-label="Close fullscreen"
                className="grid h-11 w-11 place-items-center rounded-full text-chalk transition-colors hover:bg-chalk/10"
              >
                <X size={22} aria-hidden />
              </button>
            </div>
            <div className="relative flex-1">
              <Image
                key={images[active]}
                src={images[active]}
                alt={`${name} — view ${active + 1}`}
                fill
                sizes="100vw"
                className="object-contain p-4"
              />
            </div>
            <div className="flex items-center justify-center gap-4 py-6">
              <button
                type="button"
                onClick={() => setActive((a) => (a - 1 + images.length) % images.length)}
                aria-label="Previous"
                className="grid h-12 w-12 place-items-center rounded-full border border-chalk/30 text-chalk transition-colors hover:bg-chalk hover:text-ink"
              >
                <ChevronLeft size={20} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => setActive((a) => (a + 1) % images.length)}
                aria-label="Next"
                className="grid h-12 w-12 place-items-center rounded-full border border-chalk/30 text-chalk transition-colors hover:bg-chalk hover:text-ink"
              >
                <ChevronRight size={20} aria-hidden />
              </button>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

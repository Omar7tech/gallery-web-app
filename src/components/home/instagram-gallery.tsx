import Image from "next/image";
import { Instagram } from "lucide-react";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { Reveal } from "@/components/motion/reveal";

const shots = [
  IMG.interiorA,
  IMG.sofaB,
  IMG.bedroomB,
  IMG.diningA,
  IMG.interiorG,
  IMG.loungeChairC,
  IMG.outdoorA,
  IMG.interiorM,
];

export function InstagramGallery() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="eyebrow text-muted">Nº 12 — In the Wild</span>
          <h2 className="font-display text-4xl text-ink md:text-5xl">
            Lives lived around our work
          </h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <Instagram size={16} aria-hidden />
            <span className="link-underline pb-0.5">@solera.atelier</span>
          </a>
        </div>
      </div>

      <div className="container-page mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
        {shots.map((id, i) => (
          <Reveal key={id + i} variant="scale" delay={(i % 4) * 0.05}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="img-frame group relative block aspect-square overflow-hidden rounded-md"
            >
              <Image
                src={unsplash(id, { w: 700, h: 700, q: 75 })}
                alt="Solera furniture in a client's home"
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 z-10 grid place-items-center bg-ink/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Instagram size={22} className="text-chalk" aria-hidden />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

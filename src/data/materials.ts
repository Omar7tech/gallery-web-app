import type { MaterialSwatch } from "@/types";
import { IMG } from "@/lib/images";
import { unsplash } from "@/lib/utils";

export const materials: MaterialSwatch[] = [
  {
    id: "european-oak",
    name: "European Oak",
    type: "wood",
    hex: "#b89766",
    image: unsplash(IMG.materialWood, { w: 600, h: 600, q: 80 }),
    origin: "Loire Valley, France",
    note: "Slow-grown, quarter-sawn for stability. Finished with a hand-rubbed wax that warms with use.",
  },
  {
    id: "smoked-walnut",
    name: "Smoked Walnut",
    type: "wood",
    hex: "#4f3b2d",
    image: unsplash(IMG.craftB, { w: 600, h: 600, q: 80 }),
    origin: "Black Forest, Germany",
    note: "Fumed with ammonia to deepen the grain from the inside out — never stained.",
  },
  {
    id: "travertine",
    name: "Roman Travertine",
    type: "stone",
    hex: "#d8c9ad",
    image: unsplash(IMG.materialStone, { w: 600, h: 600, q: 80 }),
    origin: "Tivoli, Italy",
    note: "Honed, not polished. Open pores left unfilled to keep the stone's quiet, chalky hand.",
  },
  {
    id: "patina-brass",
    name: "Living Brass",
    type: "metal",
    hex: "#b4894e",
    image: unsplash(IMG.interiorN, { w: 600, h: 600, q: 80 }),
    origin: "Sheffield, England",
    note: "Solid, unlacquered brass. Left to develop a patina, or kept bright — the choice is yours.",
  },
  {
    id: "blackened-steel",
    name: "Blackened Steel",
    type: "metal",
    hex: "#23211e",
    image: unsplash(IMG.interiorO, { w: 600, h: 600, q: 80 }),
    origin: "Pittsburgh, USA",
    note: "Hand-blackened and waxed for a soft, graphite depth that resists fingerprints.",
  },
  {
    id: "belgian-linen",
    name: "Belgian Linen",
    type: "textile",
    hex: "#cabfa6",
    image: unsplash(IMG.materialTextile, { w: 600, h: 600, q: 80 }),
    origin: "Kortrijk, Belgium",
    note: "Heavyweight flax, garment-washed for a relaxed drape that softens with every year.",
  },
  {
    id: "boucle-wool",
    name: "Bouclé Wool",
    type: "textile",
    hex: "#e3dccb",
    image: unsplash(IMG.interiorP, { w: 600, h: 600, q: 80 }),
    origin: "Biella, Italy",
    note: "Looped virgin wool with a deep, sculptural texture and natural stain resistance.",
  },
  {
    id: "saddle-leather",
    name: "Saddle Leather",
    type: "leather",
    hex: "#7a4f33",
    image: unsplash(IMG.craftA, { w: 600, h: 600, q: 80 }),
    origin: "Tuscany, Italy",
    note: "Full-grain, vegetable-tanned over five weeks. Develops a personal patina within months.",
  },
];

export function getMaterial(id: string): MaterialSwatch | undefined {
  return materials.find((m) => m.id === id);
}

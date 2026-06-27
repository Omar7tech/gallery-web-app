import type { Project } from "@/types";
import { IMG } from "@/lib/images";
import { unsplash } from "@/lib/utils";

export const projects: Project[] = [
  {
    slug: "hudson-river-house",
    title: "Hudson River House",
    location: "Hudson, New York",
    year: 2025,
    type: "Full Residence",
    summary:
      "A restored 1890s farmhouse furnished end to end in white oak and linen, composed to hold the changing river light.",
    image: unsplash(IMG.interiorD, { w: 1600, h: 1100, q: 80 }),
    gallery: [IMG.livingHero, IMG.diningHero, IMG.bedroomHero, IMG.interiorE].map(
      (id) => unsplash(id, { w: 1400, h: 1000, q: 80 }),
    ),
    serial: "01",
  },
  {
    slug: "tribeca-loft",
    title: "Tribeca Loft",
    location: "New York, New York",
    year: 2024,
    type: "Apartment",
    summary:
      "A cast-iron loft grounded with blackened steel and travertine, softened by deep modular seating.",
    image: unsplash(IMG.interiorB, { w: 1600, h: 1100, q: 80 }),
    gallery: [IMG.livingB, IMG.interiorC, IMG.sofaA, IMG.interiorO].map((id) =>
      unsplash(id, { w: 1400, h: 1000, q: 80 }),
    ),
    serial: "02",
  },
  {
    slug: "coastal-retreat",
    title: "Coastal Retreat",
    location: "Montauk, New York",
    year: 2024,
    type: "Weekend House",
    summary:
      "Indoor and outdoor furnished as one continuous room in teak and quick-dry textile, built for salt air.",
    image: unsplash(IMG.outdoorHero, { w: 1600, h: 1100, q: 80 }),
    gallery: [IMG.outdoorA, IMG.interiorJ, IMG.interiorK, IMG.bedroomB].map((id) =>
      unsplash(id, { w: 1400, h: 1000, q: 80 }),
    ),
    serial: "03",
  },
  {
    slug: "scandi-townhouse",
    title: "Copenhagen Townhouse",
    location: "Copenhagen, Denmark",
    year: 2023,
    type: "Full Residence",
    summary:
      "Four floors furnished in a single muted palette - bleached oak, bone bouclé, living brass - for a collector couple.",
    image: unsplash(IMG.interiorF, { w: 1600, h: 1100, q: 80 }),
    gallery: [IMG.bedroomA, IMG.interiorG, IMG.diningB, IMG.interiorH].map((id) =>
      unsplash(id, { w: 1400, h: 1000, q: 80 }),
    ),
    serial: "04",
  },
  {
    slug: "atelier-studio",
    title: "Painter's Atelier",
    location: "Marfa, Texas",
    year: 2023,
    type: "Studio & Living",
    summary:
      "A working studio and living space kept deliberately spare - a few large pieces, a great deal of light.",
    image: unsplash(IMG.interiorL, { w: 1600, h: 1100, q: 80 }),
    gallery: [IMG.officeHero, IMG.interiorO, IMG.loungeChairA, IMG.interiorM].map(
      (id) => unsplash(id, { w: 1400, h: 1000, q: 80 }),
    ),
    serial: "05",
  },
  {
    slug: "alpine-chalet",
    title: "Alpine Chalet",
    location: "Verbier, Switzerland",
    year: 2022,
    type: "Holiday Home",
    summary:
      "Smoked walnut and saddle leather warmed against stone and snow, scaled for long winter evenings.",
    image: unsplash(IMG.interiorE, { w: 1600, h: 1100, q: 80 }),
    gallery: [IMG.craftB, IMG.bedroomC, IMG.loungeChairB, IMG.diningA].map((id) =>
      unsplash(id, { w: 1400, h: 1000, q: 80 }),
    ),
    serial: "06",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

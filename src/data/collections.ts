import type { Collection, CollectionSlug } from "@/types";
import { IMG } from "@/lib/images";
import { unsplash } from "@/lib/utils";

export const collections: Collection[] = [
  {
    slug: "living-room",
    name: "Living Room",
    tagline: "The room that holds the evening",
    description:
      "Low, generous seating and quiet tables built for long conversation and longer light. The living collection is where Solera begins.",
    story:
      "We design the living room as a single, slow gesture — a sofa that invites you to stay, a table worn smooth by years of hands. Each piece is scaled for the way people actually gather: knees close, voices low, the lamp left on a little too long.",
    image: unsplash(IMG.livingHero, { w: 1600, h: 1100, q: 80 }),
    accentImage: unsplash(IMG.sofaA, { w: 1200, h: 1500, q: 80 }),
    pieceCount: 42,
    serial: "01",
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    tagline: "Where the day is finally set down",
    description:
      "Beds, cases, and seating composed for rest. Soft architecture, honest materials, nothing that asks for attention.",
    story:
      "The bedroom is the most private room we make for. We keep its language calm — upholstered headboards that meet the wall like a horizon, oak cases with a hand-rubbed wax that warms over decades. Furniture you reach for half-asleep and never have to think about.",
    image: unsplash(IMG.bedroomHero, { w: 1600, h: 1100, q: 80 }),
    accentImage: unsplash(IMG.bedroomA, { w: 1200, h: 1500, q: 80 }),
    pieceCount: 31,
    serial: "02",
  },
  {
    slug: "dining",
    name: "Dining",
    tagline: "A table is an argument for staying",
    description:
      "Tables and chairs built around the long meal — solid timber, forgiving finishes, seating you don't want to leave.",
    story:
      "A dining table is the most used object we make, and the most demanding. Ours are built from single-origin timber with breadboard ends that let the wood move with the seasons. We finish them to be lived on, not protected from.",
    image: unsplash(IMG.diningHero, { w: 1600, h: 1100, q: 80 }),
    accentImage: unsplash(IMG.diningA, { w: 1200, h: 1500, q: 80 }),
    pieceCount: 26,
    serial: "03",
  },
  {
    slug: "office",
    name: "Office",
    tagline: "Work, dignified",
    description:
      "Desks, shelving, and chairs for the room you think in. Considered ergonomics under a calm, residential surface.",
    story:
      "The home office should not look like an office. We design desks with the proportions of a writing table and storage that reads as furniture, not infrastructure — so the room can be a study again when the laptop closes.",
    image: unsplash(IMG.officeHero, { w: 1600, h: 1100, q: 80 }),
    accentImage: unsplash(IMG.officeA, { w: 1200, h: 1500, q: 80 }),
    pieceCount: 18,
    serial: "04",
  },
  {
    slug: "outdoor",
    name: "Outdoor",
    tagline: "Built for weather and time",
    description:
      "Teak, powder-coated steel, and solution-dyed textiles made to live outside and age with grace.",
    story:
      "Outdoor furniture earns its patina. We use unfinished teak that silvers under the sun, marine-grade fixings, and textiles woven to shed water and resist fading. Left out through every season, it only looks more like itself.",
    image: unsplash(IMG.outdoorHero, { w: 1600, h: 1100, q: 80 }),
    accentImage: unsplash(IMG.outdoorA, { w: 1200, h: 1500, q: 80 }),
    pieceCount: 14,
    serial: "05",
  },
];

export function getCollection(slug: CollectionSlug): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

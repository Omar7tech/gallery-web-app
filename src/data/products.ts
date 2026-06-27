import type {
  FabricOption,
  FinishOption,
  Product,
  CollectionSlug,
} from "@/types";
import { IMG } from "@/lib/images";
import { unsplash } from "@/lib/utils";

/* ---- Shared option sets ---------------------------------------------------*/

const woodFinishes: FinishOption[] = [
  { id: "natural-oak", name: "Natural Oak", hex: "#c2a371" },
  { id: "smoked-walnut", name: "Smoked Walnut", hex: "#4f3b2d" },
  { id: "blackened", name: "Blackened Ash", hex: "#26231f" },
  { id: "bleached", name: "Bleached Oak", hex: "#ddd2bb" },
];

const metalFinishes: FinishOption[] = [
  { id: "living-brass", name: "Living Brass", hex: "#b4894e" },
  { id: "blackened-steel", name: "Blackened Steel", hex: "#23211e" },
  { id: "patina-bronze", name: "Patina Bronze", hex: "#6b5a3e" },
];

const fabrics: FabricOption[] = [
  {
    id: "linen-chalk",
    name: "Chalk Linen",
    composition: "100% Belgian linen",
    hex: "#cabfa6",
    image: unsplash(IMG.materialTextile, { w: 200, h: 200, q: 70 }),
  },
  {
    id: "boucle-bone",
    name: "Bone Bouclé",
    composition: "Virgin wool bouclé",
    hex: "#e3dccb",
    image: unsplash(IMG.interiorP, { w: 200, h: 200, q: 70 }),
  },
  {
    id: "patina-velvet",
    name: "Patina Velvet",
    composition: "Cotton-mohair velvet",
    hex: "#2c4138",
    image: unsplash(IMG.interiorI, { w: 200, h: 200, q: 70 }),
  },
  {
    id: "saddle-leather",
    name: "Saddle Leather",
    composition: "Full-grain vegetable-tanned",
    hex: "#7a4f33",
    image: unsplash(IMG.craftA, { w: 200, h: 200, q: 70 }),
  },
];

const careSpecs = [
  { label: "Frame", value: "Kiln-dried solid hardwood" },
  { label: "Joinery", value: "Mortise-and-tenon, hand-fitted" },
  { label: "Suspension", value: "8-way hand-tied springs" },
  { label: "Origin", value: "Made to order in Hudson, NY" },
  { label: "Warranty", value: "Lifetime structural guarantee" },
];

type Seed = {
  slug: string;
  name: string;
  collection: CollectionSlug;
  category: string;
  designer: string;
  year: number;
  price: number;
  short: string;
  story: string;
  images: string[];
  colorFamily: Product["colorFamily"];
  materials: string[];
  dims: [string, string][];
  lead: number;
  isNew?: boolean;
  best?: boolean;
  signature?: boolean;
  rating: number;
  reviews: number;
  tags: string[];
  finishes?: FinishOption[];
  fabrics?: FabricOption[];
};

const seeds: Seed[] = [
  {
    slug: "halden-modular-sofa",
    name: "Halden Modular Sofa",
    collection: "living-room",
    category: "Sofa",
    designer: "Marit Sælen",
    year: 2024,
    price: 7200,
    short:
      "A low, deep modular system built around the long evening. Down-wrapped cushions over an 8-way hand-tied frame.",
    story:
      "Halden began as a sketch of the way people actually sit at the end of a day - sideways, legs up, half-turned toward each other. We widened the seat, dropped the back, and tied every spring by hand so it holds that posture for thirty years.",
    images: [IMG.sofaA, IMG.livingHero, IMG.sofaC, IMG.livingB],
    colorFamily: "neutral",
    materials: ["european-oak", "belgian-linen", "boucle-wool"],
    dims: [
      ["Width", "248 cm"],
      ["Depth", "104 cm"],
      ["Height", "72 cm"],
      ["Seat height", "42 cm"],
    ],
    lead: 12,
    best: true,
    signature: true,
    rating: 4.9,
    reviews: 214,
    tags: ["modular", "down-wrapped", "made-to-order"],
    fabrics,
  },
  {
    slug: "verel-lounge-chair",
    name: "Verel Lounge Chair",
    collection: "living-room",
    category: "Lounge Chair",
    designer: "Atelier Solera",
    year: 2023,
    price: 2950,
    short:
      "A sculpted shell on a slim solid-oak frame. The chair you read in until the light is gone.",
    story:
      "Verel is an exercise in restraint: one curved shell, one frame, no visible fixings. The shell is cold-pressed in a single mould so the grain runs unbroken from seat to back.",
    images: [IMG.loungeChairA, IMG.loungeChairB, IMG.loungeChairC, IMG.interiorA],
    colorFamily: "warm",
    materials: ["european-oak", "boucle-wool"],
    dims: [
      ["Width", "74 cm"],
      ["Depth", "82 cm"],
      ["Height", "78 cm"],
      ["Seat height", "40 cm"],
    ],
    lead: 10,
    best: true,
    rating: 4.8,
    reviews: 168,
    tags: ["reading chair", "solid oak"],
    fabrics,
  },
  {
    slug: "cellar-coffee-table",
    name: "Cellar Coffee Table",
    collection: "living-room",
    category: "Coffee Table",
    designer: "Tomas Reyes",
    year: 2024,
    price: 2400,
    short:
      "Honed travertine on a blackened-steel cradle. Mass and shadow in equal measure.",
    story:
      "We wanted a table that felt quarried rather than made. A single honed slab of Roman travertine rests in a blackened-steel cradle that almost disappears beneath it.",
    images: [IMG.interiorB, IMG.materialStone, IMG.livingA, IMG.interiorC],
    colorFamily: "earth",
    materials: ["travertine", "blackened-steel"],
    dims: [
      ["Length", "130 cm"],
      ["Width", "70 cm"],
      ["Height", "32 cm"],
    ],
    lead: 9,
    isNew: true,
    rating: 4.7,
    reviews: 64,
    tags: ["stone", "statement"],
    finishes: metalFinishes,
  },
  {
    slug: "lumen-floor-lamp",
    name: "Lumen Floor Lamp",
    collection: "living-room",
    category: "Lighting",
    designer: "Atelier Solera",
    year: 2025,
    price: 1280,
    short:
      "A thin brass stem and a linen shade that turns a corner into an hour.",
    story:
      "Lumen is the light we kept reaching for in our own studio at dusk - warm, low, and aimed at the page. The stem is solid living brass, left unlacquered to patina with the room.",
    images: [IMG.interiorN, IMG.interiorD, IMG.interiorE, IMG.livingB],
    colorFamily: "warm",
    materials: ["patina-brass", "belgian-linen"],
    dims: [
      ["Height", "152 cm"],
      ["Shade Ø", "34 cm"],
      ["Base Ø", "26 cm"],
    ],
    lead: 6,
    isNew: true,
    rating: 4.9,
    reviews: 41,
    tags: ["lighting", "brass"],
    finishes: metalFinishes,
  },
  {
    slug: "maren-bed",
    name: "Maren Upholstered Bed",
    collection: "bedroom",
    category: "Bed",
    designer: "Marit Sælen",
    year: 2023,
    price: 4600,
    short:
      "A low platform and a headboard that meets the wall like a horizon. Belgian linen over a hardwood frame.",
    story:
      "Maren is built around the idea of a calm horizon line - the headboard is a single soft plane, upholstered in heavyweight linen and floated just above the floor.",
    images: [IMG.bedroomHero, IMG.bedroomA, IMG.bedroomB, IMG.bedroomC],
    colorFamily: "neutral",
    materials: ["european-oak", "belgian-linen"],
    dims: [
      ["Width", "176 cm (Queen)"],
      ["Length", "212 cm"],
      ["Height", "104 cm"],
      ["Clearance", "22 cm"],
    ],
    lead: 11,
    best: true,
    signature: true,
    rating: 4.9,
    reviews: 132,
    tags: ["platform bed", "linen"],
    fabrics,
  },
  {
    slug: "soren-nightstand",
    name: "Søren Nightstand",
    collection: "bedroom",
    category: "Storage",
    designer: "Tomas Reyes",
    year: 2024,
    price: 1150,
    short:
      "A single soft-close drawer over an open shelf, in solid smoked walnut.",
    story:
      "Søren is the quiet companion to the Maren bed - a small case piece with a hand-cut dovetail drawer and a recess sized for a book and a glass of water.",
    images: [IMG.bedroomB, IMG.craftB, IMG.interiorF, IMG.bedroomC],
    colorFamily: "earth",
    materials: ["smoked-walnut", "patina-brass"],
    dims: [
      ["Width", "52 cm"],
      ["Depth", "40 cm"],
      ["Height", "54 cm"],
    ],
    lead: 8,
    isNew: true,
    rating: 4.8,
    reviews: 58,
    tags: ["walnut", "dovetail"],
    finishes: woodFinishes,
  },
  {
    slug: "linnea-wardrobe",
    name: "Linnea Wardrobe",
    collection: "bedroom",
    category: "Storage",
    designer: "Atelier Solera",
    year: 2022,
    price: 5400,
    short:
      "A tall, fluted oak case with brass pulls and a hand-waxed interior of cedar.",
    story:
      "Linnea is a wardrobe in the old sense - built to be inherited. The fluted doors are milled from a single board so the rhythm continues across the front, and the interior is lined in aromatic cedar.",
    images: [IMG.interiorF, IMG.bedroomA, IMG.interiorG, IMG.bedroomHero],
    colorFamily: "warm",
    materials: ["european-oak", "patina-brass"],
    dims: [
      ["Width", "120 cm"],
      ["Depth", "62 cm"],
      ["Height", "204 cm"],
    ],
    lead: 14,
    rating: 4.9,
    reviews: 36,
    tags: ["wardrobe", "fluted"],
    finishes: woodFinishes,
  },
  {
    slug: "tivoli-dining-table",
    name: "Tivoli Dining Table",
    collection: "dining",
    category: "Dining Table",
    designer: "Tomas Reyes",
    year: 2023,
    price: 6800,
    short:
      "A single-origin oak top with breadboard ends, on a sculpted trestle base. Seats eight.",
    story:
      "Tivoli is built from one tree. The top carries breadboard ends that let the timber breathe through the seasons, and the trestle is shaped to keep the long sides clear for elbows and chairs.",
    images: [IMG.diningHero, IMG.diningA, IMG.diningB, IMG.interiorH],
    colorFamily: "warm",
    materials: ["european-oak", "blackened-steel"],
    dims: [
      ["Length", "260 cm"],
      ["Width", "100 cm"],
      ["Height", "74 cm"],
      ["Seats", "8-10"],
    ],
    lead: 13,
    best: true,
    signature: true,
    rating: 5.0,
    reviews: 97,
    tags: ["solid oak", "seats eight"],
    finishes: woodFinishes,
  },
  {
    slug: "halla-dining-chair",
    name: "Halla Dining Chair",
    collection: "dining",
    category: "Dining Chair",
    designer: "Marit Sælen",
    year: 2024,
    price: 690,
    short:
      "A steam-bent back and a saddle-leather seat. Light enough to move, solid enough to keep.",
    story:
      "Halla is the chair you don't notice until you've sat in it for three hours. The back is steam-bent in a single piece and the seat is slung in vegetable-tanned saddle leather that softens to your shape.",
    images: [IMG.diningA, IMG.loungeChairC, IMG.craftA, IMG.diningB],
    colorFamily: "earth",
    materials: ["european-oak", "saddle-leather"],
    dims: [
      ["Width", "50 cm"],
      ["Depth", "52 cm"],
      ["Height", "80 cm"],
      ["Seat height", "46 cm"],
    ],
    lead: 9,
    isNew: true,
    best: true,
    rating: 4.8,
    reviews: 142,
    tags: ["steam-bent", "leather"],
    finishes: woodFinishes,
  },
  {
    slug: "orto-sideboard",
    name: "Orto Sideboard",
    collection: "dining",
    category: "Storage",
    designer: "Atelier Solera",
    year: 2022,
    price: 4200,
    short:
      "A long, low case with sliding fronts in fluted oak and a honed travertine top.",
    story:
      "Orto stretches the length of a wall and keeps it quiet. Sliding fluted fronts hide everything; a honed travertine top takes the serving dishes and the years.",
    images: [IMG.interiorH, IMG.materialStone, IMG.interiorL, IMG.diningHero],
    colorFamily: "neutral",
    materials: ["european-oak", "travertine"],
    dims: [
      ["Width", "200 cm"],
      ["Depth", "48 cm"],
      ["Height", "78 cm"],
    ],
    lead: 12,
    rating: 4.7,
    reviews: 51,
    tags: ["sideboard", "fluted"],
    finishes: woodFinishes,
  },
  {
    slug: "edda-writing-desk",
    name: "Edda Writing Desk",
    collection: "office",
    category: "Desk",
    designer: "Marit Sælen",
    year: 2024,
    price: 3100,
    short:
      "The proportions of a writing table with a hidden cable channel and a leather-lined drawer.",
    story:
      "Edda hides its function. It reads as a writing table - slim legs, a thin top - but a routed channel carries cables out of sight and a single drawer is lined in saddle leather for the things you reach for.",
    images: [IMG.officeHero, IMG.officeA, IMG.officeB, IMG.interiorO],
    colorFamily: "warm",
    materials: ["european-oak", "saddle-leather"],
    dims: [
      ["Width", "140 cm"],
      ["Depth", "64 cm"],
      ["Height", "74 cm"],
    ],
    lead: 10,
    isNew: true,
    rating: 4.9,
    reviews: 73,
    tags: ["desk", "cable management"],
    finishes: woodFinishes,
  },
  {
    slug: "atlas-bookcase",
    name: "Atlas Bookcase",
    collection: "office",
    category: "Shelving",
    designer: "Tomas Reyes",
    year: 2023,
    price: 3800,
    short:
      "An open oak frame with adjustable brass-pinned shelves that reads as architecture.",
    story:
      "Atlas is shelving that behaves like a wall. The oak uprights carry brass pins so every shelf can move, and the whole frame is through-tenoned to stand without a back.",
    images: [IMG.officeA, IMG.interiorO, IMG.interiorG, IMG.officeHero],
    colorFamily: "warm",
    materials: ["european-oak", "patina-brass"],
    dims: [
      ["Width", "120 cm"],
      ["Depth", "36 cm"],
      ["Height", "210 cm"],
    ],
    lead: 11,
    best: true,
    rating: 4.8,
    reviews: 64,
    tags: ["shelving", "modular"],
    finishes: woodFinishes,
  },
  {
    slug: "nord-task-chair",
    name: "Nord Task Chair",
    collection: "office",
    category: "Office Chair",
    designer: "Atelier Solera",
    year: 2025,
    price: 1450,
    short:
      "Considered ergonomics under a calm, residential surface. Leather over a tilting steel mechanism.",
    story:
      "Nord proves a working chair need not look like one. A precise tilt mechanism lives beneath a hand-stitched leather shell so the room stays a study even with the chair in it.",
    images: [IMG.officeB, IMG.loungeChairB, IMG.officeA, IMG.interiorE],
    colorFamily: "black",
    materials: ["saddle-leather", "blackened-steel"],
    dims: [
      ["Width", "62 cm"],
      ["Depth", "60 cm"],
      ["Height", "92-102 cm"],
      ["Seat height", "44-54 cm"],
    ],
    lead: 8,
    isNew: true,
    rating: 4.7,
    reviews: 49,
    tags: ["ergonomic", "leather"],
    finishes: metalFinishes,
  },
  {
    slug: "isola-outdoor-sofa",
    name: "Isola Outdoor Sofa",
    collection: "outdoor",
    category: "Outdoor Sofa",
    designer: "Marit Sælen",
    year: 2024,
    price: 5200,
    short:
      "Unfinished teak and quick-dry cushions in solution-dyed acrylic. Built to silver in the sun.",
    story:
      "Isola is made to be left out. The teak is unfinished so it silvers evenly, the fixings are marine-grade, and the cushions are wrapped in solution-dyed acrylic that sheds rain and shrugs off the sun.",
    images: [IMG.outdoorHero, IMG.outdoorA, IMG.interiorJ, IMG.interiorK],
    colorFamily: "neutral",
    materials: ["european-oak", "belgian-linen"],
    dims: [
      ["Width", "212 cm"],
      ["Depth", "96 cm"],
      ["Height", "70 cm"],
      ["Seat height", "40 cm"],
    ],
    lead: 12,
    best: true,
    signature: true,
    rating: 4.8,
    reviews: 58,
    tags: ["teak", "all-weather"],
    fabrics,
  },
  {
    slug: "dune-lounger",
    name: "Dune Lounger",
    collection: "outdoor",
    category: "Lounger",
    designer: "Tomas Reyes",
    year: 2023,
    price: 2100,
    short:
      "A teak chaise with a woven cord deck that dries in minutes and lasts for decades.",
    story:
      "Dune is the long afternoon, distilled. A teak frame carries a hand-woven marine-cord deck that needs no cushion - it dries in minutes and only softens with use.",
    images: [IMG.outdoorA, IMG.interiorK, IMG.outdoorHero, IMG.interiorJ],
    colorFamily: "warm",
    materials: ["european-oak", "blackened-steel"],
    dims: [
      ["Length", "198 cm"],
      ["Width", "68 cm"],
      ["Height", "78 cm"],
    ],
    lead: 9,
    isNew: true,
    rating: 4.7,
    reviews: 33,
    tags: ["chaise", "teak"],
    finishes: woodFinishes,
  },
  {
    slug: "vista-dining-bench",
    name: "Vista Dining Bench",
    collection: "dining",
    category: "Bench",
    designer: "Atelier Solera",
    year: 2024,
    price: 1380,
    short:
      "A single plank of oak on a blackened-steel base. The democratic seat at the long table.",
    story:
      "Vista is one board, planed thick and softened at every edge, floating on a blackened-steel base. It seats three at a pinch and four when the night is good.",
    images: [IMG.diningB, IMG.interiorL, IMG.craftB, IMG.diningA],
    colorFamily: "warm",
    materials: ["european-oak", "blackened-steel"],
    dims: [
      ["Length", "180 cm"],
      ["Depth", "36 cm"],
      ["Height", "46 cm"],
    ],
    lead: 8,
    rating: 4.8,
    reviews: 47,
    tags: ["bench", "solid oak"],
    finishes: woodFinishes,
  },
];

/* ---- Build full Product records -------------------------------------------*/

function buildProduct(s: Seed): Product {
  return {
    slug: s.slug,
    name: s.name,
    collection: s.collection,
    category: s.category,
    designer: s.designer,
    year: s.year,
    serial: String(seeds.indexOf(s) + 1).padStart(2, "0"),
    price: s.price,
    currency: "USD",
    shortDescription: s.short,
    story: s.story,
    images: s.images.map((id) => unsplash(id, { w: 1400, h: 1600, q: 80 })),
    heroImage: unsplash(s.images[0], { w: 1600, h: 1200, q: 80 }),
    colorFamily: s.colorFamily,
    materials: s.materials,
    finishes: s.finishes ?? woodFinishes,
    fabrics: s.fabrics ?? [],
    dimensions: s.dims.map(([label, value]) => ({ label, value })),
    specs: careSpecs,
    leadTimeWeeks: s.lead,
    isNew: s.isNew ?? false,
    isBestSeller: s.best ?? false,
    isSignature: s.signature ?? false,
    rating: s.rating,
    reviewCount: s.reviews,
    tags: s.tags,
  };
}

export const products: Product[] = seeds.map(buildProduct);

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collection: CollectionSlug): Product[] {
  return products.filter((p) => p.collection === collection);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) => {
      const aScore = a.collection === product.collection ? 0 : 1;
      const bScore = b.collection === product.collection ? 0 : 1;
      return aScore - bScore;
    })
    .slice(0, limit);
}

export const newArrivals = products.filter((p) => p.isNew);
export const bestSellers = products.filter((p) => p.isBestSeller);
export const signaturePieces = products.filter((p) => p.isSignature);

export const PRICE_FLOOR = Math.min(...products.map((p) => p.price));
export const PRICE_CEILING = Math.max(...products.map((p) => p.price));

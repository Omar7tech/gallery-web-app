/* ============================================================================
   SOLERA - Domain types
   Frontend-only. All data is simulated and lives in src/data.
============================================================================ */

export type CollectionSlug =
  | "living-room"
  | "bedroom"
  | "dining"
  | "office"
  | "outdoor";

export interface Collection {
  slug: CollectionSlug;
  name: string;
  tagline: string;
  description: string;
  story: string;
  image: string;
  accentImage: string;
  pieceCount: number;
  serial: string;
}

export interface MaterialSwatch {
  id: string;
  name: string;
  type: "wood" | "stone" | "metal" | "textile" | "leather";
  hex: string;
  image: string;
  origin: string;
  note: string;
}

export interface FinishOption {
  id: string;
  name: string;
  hex: string;
}

export interface FabricOption {
  id: string;
  name: string;
  composition: string;
  hex: string;
  image: string;
}

export interface ProductDimension {
  label: string;
  value: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  collection: CollectionSlug;
  category: string;
  designer: string;
  year: number;
  serial: string;
  price: number;
  currency: string;
  shortDescription: string;
  story: string;
  images: string[];
  heroImage: string;
  colorFamily: ColorFamily;
  materials: string[]; // MaterialSwatch ids
  finishes: FinishOption[];
  fabrics: FabricOption[];
  dimensions: ProductDimension[];
  specs: ProductSpec[];
  leadTimeWeeks: number;
  isNew: boolean;
  isBestSeller: boolean;
  isSignature: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export type ColorFamily =
  | "neutral"
  | "warm"
  | "green"
  | "blue"
  | "earth"
  | "black";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  author: string;
  authorRole: string;
  date: string; // ISO
  readingMinutes: number;
  image: string;
  serial: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  year: number;
  type: string;
  summary: string;
  image: string;
  gallery: string[];
  serial: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  group: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  heading: string;
  links: NavLink[];
}

export interface MegaMenuPanel {
  label: string;
  href: string;
  columns: MegaMenuColumn[];
  feature: {
    eyebrow: string;
    title: string;
    href: string;
    image: string;
  };
}

export type SortOption =
  | "featured"
  | "newest"
  | "price-asc"
  | "price-desc"
  | "name";

export interface ProductFilters {
  collections: CollectionSlug[];
  materials: string[];
  colors: ColorFamily[];
  priceMax: number | null;
}

import type { MegaMenuPanel, NavLink } from "@/types";
import { IMG } from "@/lib/images";
import { unsplash } from "@/lib/utils";

export const SITE = {
  name: "SOLERA",
  legalName: "Solera Furniture Atelier",
  tagline: "Furniture, layered like light.",
  description:
    "Solera is a furniture atelier building heirloom pieces by the solera method — heritage craft blended with modern design, made to be added to across a lifetime and passed between generations.",
  url: "https://solera.example",
  email: "atelier@solera.example",
  phone: "+1 (212) 555-0142",
  address: "14 Cellar Row, Hudson, New York",
  founded: 1998,
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
} as const;

/** Primary navigation panels (drive the mega-menu). */
export const MEGA_MENU: MegaMenuPanel[] = [
  {
    label: "Collections",
    href: "/collections",
    columns: [
      {
        heading: "By Room",
        links: [
          { label: "Living Room", href: "/collections/living-room" },
          { label: "Bedroom", href: "/collections/bedroom" },
          { label: "Dining", href: "/collections/dining" },
          { label: "Office", href: "/collections/office" },
          { label: "Outdoor", href: "/collections/outdoor" },
        ],
      },
      {
        heading: "By Intent",
        links: [
          { label: "New Arrivals", href: "/new-arrivals" },
          { label: "Best Sellers", href: "/best-sellers" },
          { label: "The Lookbook", href: "/lookbook" },
          { label: "All Collections", href: "/collections" },
        ],
      },
    ],
    feature: {
      eyebrow: "Nº 01 — Featured",
      title: "The Hudson Edit",
      href: "/collections/living-room",
      image: unsplash(IMG.livingHero, { w: 900, h: 1100, q: 80 }),
    },
  },
  {
    label: "Craft",
    href: "/craftsmanship",
    columns: [
      {
        heading: "The Atelier",
        links: [
          { label: "Craftsmanship", href: "/craftsmanship" },
          { label: "Materials", href: "/materials" },
          { label: "Sustainability", href: "/sustainability" },
          { label: "Our Story", href: "/about" },
        ],
      },
      {
        heading: "Guidance",
        links: [
          { label: "Buying Guide", href: "/buying-guide" },
          { label: "Furniture Care", href: "/furniture-care-guide" },
          { label: "Journal", href: "/blog" },
          { label: "FAQ", href: "/faq" },
        ],
      },
    ],
    feature: {
      eyebrow: "Nº 02 — Inside",
      title: "Twelve hands, one chair",
      href: "/craftsmanship",
      image: unsplash(IMG.craftA, { w: 900, h: 1100, q: 80 }),
    },
  },
  {
    label: "Services",
    href: "/interior-design-service",
    columns: [
      {
        heading: "Work With Us",
        links: [
          { label: "Interior Design", href: "/interior-design-service" },
          { label: "Selected Projects", href: "/projects" },
          { label: "Book a Consultation", href: "/contact" },
          { label: "Testimonials", href: "/testimonials" },
        ],
      },
    ],
    feature: {
      eyebrow: "Nº 03 — Service",
      title: "Rooms composed with you",
      href: "/interior-design-service",
      image: unsplash(IMG.interiorD, { w: 900, h: 1100, q: 80 }),
    },
  },
];

export const PRIMARY_NAV: NavLink[] = [
  { label: "Collections", href: "/collections" },
  { label: "Craft", href: "/craftsmanship" },
  { label: "Services", href: "/interior-design-service" },
  { label: "Journal", href: "/blog" },
  { label: "About", href: "/about" },
];

export const FOOTER_NAV: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Collections",
    links: [
      { label: "Living Room", href: "/collections/living-room" },
      { label: "Bedroom", href: "/collections/bedroom" },
      { label: "Dining", href: "/collections/dining" },
      { label: "Office", href: "/collections/office" },
      { label: "Outdoor", href: "/collections/outdoor" },
      { label: "New Arrivals", href: "/new-arrivals" },
    ],
  },
  {
    heading: "The Atelier",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Craftsmanship", href: "/craftsmanship" },
      { label: "Materials", href: "/materials" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Projects", href: "/projects" },
      { label: "Lookbook", href: "/lookbook" },
    ],
  },
  {
    heading: "Guidance",
    links: [
      { label: "Buying Guide", href: "/buying-guide" },
      { label: "Furniture Care", href: "/furniture-care-guide" },
      { label: "Journal", href: "/blog" },
      { label: "Best Sellers", href: "/best-sellers" },
      { label: "FAQ", href: "/faq" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    heading: "Service",
    links: [
      { label: "Interior Design", href: "/interior-design-service" },
      { label: "Book a Consultation", href: "/contact" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

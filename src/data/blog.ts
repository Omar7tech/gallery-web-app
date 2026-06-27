import type { BlogPost } from "@/types";
import { IMG } from "@/lib/images";
import { unsplash } from "@/lib/utils";

export const blogPosts: BlogPost[] = [
  {
    slug: "the-solera-method",
    title: "The Solera Method: Why We Build Furniture Like Sherry",
    excerpt:
      "Our name comes from a centuries-old way of ageing wine, where each new vintage is blended with the old. Here is why that idea governs everything we make.",
    category: "Philosophy",
    author: "Marit Sælen",
    authorRole: "Head of Design",
    date: "2026-05-18",
    readingMinutes: 6,
    image: unsplash(IMG.craftA, { w: 1600, h: 1000, q: 80 }),
    serial: "01",
    body: [
      "In the bodegas of Andalusia there is a system of ageing called the solera. Barrels are stacked in tiers; wine is drawn only from the oldest, and what is taken is replaced from the tier above, and so on up to the youngest. No barrel is ever emptied. Every glass contains a fraction of every vintage that came before it.",
      "We took the name because it describes how we believe a home should be built — not bought all at once, but layered. A table this year, the chairs around it the next, a sideboard a decade on. Each piece blended with what is already there, none of it disposable, all of it ageing in the same direction.",
      "This is also why we make so few finishes and why we keep them for years. A Solera oak bought in 2018 should still match one bought today. Continuity is not nostalgia; it is a service to the people who live with our work.",
      "The furniture industry is built on replacement. We are built on accumulation. It is slower, and it is harder, and we think it is the only honest way to make objects meant to outlast us.",
    ],
  },
  {
    slug: "reading-the-grain",
    title: "Reading the Grain: How to Judge Solid Wood Furniture",
    excerpt:
      "Most 'solid wood' furniture isn't. A short field guide to the joints, grain matches, and finishes that separate heirloom pieces from veneered imitations.",
    category: "Guidance",
    author: "Tomas Reyes",
    authorRole: "Master Cabinetmaker",
    date: "2026-04-29",
    readingMinutes: 8,
    image: unsplash(IMG.materialWood, { w: 1600, h: 1000, q: 80 }),
    serial: "02",
    body: [
      "Turn a drawer over. The first thing to look for is the joint at the corner. A dovetail — those interlocking wedges — is cut, not glued and stapled. It is the single most reliable sign that someone cared.",
      "Now look at the top. On a real solid-wood panel the grain on the surface continues around the edge and onto the underside. On a veneer it stops at a seam. Run your thumb across the edge; you should feel one continuous board, not a wrapper.",
      "Finish matters as much as construction. A hand-rubbed oil or wax lets the wood breathe and can be repaired in place. A thick polyurethane shell looks flawless for five years and then cannot be mended at all.",
      "None of this requires expertise — only attention. Furniture tells you how it was made if you are willing to turn it over and look.",
    ],
  },
  {
    slug: "the-long-table",
    title: "In Praise of the Long Table",
    excerpt:
      "The dining table is the most-used and least-considered object in most homes. A case for treating it as the heart of the room.",
    category: "Living",
    author: "Eleanor Voss",
    authorRole: "Contributing Editor",
    date: "2026-04-02",
    readingMinutes: 5,
    image: unsplash(IMG.diningHero, { w: 1600, h: 1000, q: 80 }),
    serial: "03",
    body: [
      "A sofa is for an evening; a table is for a life. It is where homework is done and contracts are signed and arguments are had and made up again. And yet most people spend more on the sofa.",
      "The long table changes the room's gravity. It asks people to sit down, to face each other, to stay. A round table is sociable; a long table is ceremonial, and there is a place for ceremony in ordinary days.",
      "Buy it longer than you think you need. The empty seats are an invitation, and they fill faster than you expect.",
    ],
  },
  {
    slug: "patina-is-not-damage",
    title: "Patina Is Not Damage",
    excerpt:
      "Why the small marks a piece collects over years are the point, not the problem — and how we design for them deliberately.",
    category: "Craft",
    author: "Marit Sælen",
    authorRole: "Head of Design",
    date: "2026-03-15",
    readingMinutes: 4,
    image: unsplash(IMG.craftB, { w: 1600, h: 1000, q: 80 }),
    serial: "04",
    body: [
      "We use unlacquered brass and oiled wood and vegetable-tanned leather because they change. A lacquer is a promise to stay new; a patina is a record of being used. We are firmly on the side of the record.",
      "Design for patina and you stop fearing the first scratch. The ring left by a warm cup, the sheen worn into an armrest, the corner softened by a thousand passing hands — these are not flaws to be buffed out. They are the object becoming yours.",
      "The most beautiful pieces in our showroom are the oldest ones, and not by accident.",
    ],
  },
  {
    slug: "small-rooms-big-pieces",
    title: "Small Rooms, Big Pieces",
    excerpt:
      "The counterintuitive truth that a few large, well-chosen objects make a small room feel larger than many small ones.",
    category: "Living",
    author: "Eleanor Voss",
    authorRole: "Contributing Editor",
    date: "2026-02-20",
    readingMinutes: 5,
    image: unsplash(IMG.interiorD, { w: 1600, h: 1000, q: 80 }),
    serial: "05",
    body: [
      "The instinct in a small space is to scale everything down. It rarely works. A room full of small furniture reads as cluttered; a room with two or three generous pieces reads as composed.",
      "Give a small living room one proper sofa and one real table and let the walls breathe around them. The eye reads the calm, not the square footage.",
      "Restraint is the most space-efficient design decision you can make.",
    ],
  },
  {
    slug: "the-case-for-made-to-order",
    title: "The Case for Made-to-Order",
    excerpt:
      "Why we'll never hold a warehouse of finished stock — and what the wait actually buys you.",
    category: "Philosophy",
    author: "Tomas Reyes",
    authorRole: "Master Cabinetmaker",
    date: "2026-01-28",
    readingMinutes: 6,
    image: unsplash(IMG.interiorE, { w: 1600, h: 1000, q: 80 }),
    serial: "06",
    body: [
      "When you order a Solera piece, the timber for it is often still in the rack. We select the boards for your specific order, match the grain, and build it once. The eleven-week wait is the sound of that happening.",
      "Made-to-order means no overproduction, no clearance sales, no landfill of last season's colour. It means the piece is built to your finish, your fabric, your dimensions where it matters.",
      "Patience is part of the design. The things worth keeping are rarely the things available today.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

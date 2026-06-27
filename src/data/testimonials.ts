import type { Testimonial } from "@/types";
import { IMG } from "@/lib/images";
import { unsplash } from "@/lib/utils";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The Halden sofa arrived eleven weeks after we ordered it, and it has not moved since. It's the first piece of furniture I've owned that I expect to leave to my children.",
    author: "Eleanor Vance",
    role: "Art Director",
    location: "Brooklyn, NY",
    avatar: unsplash(IMG.personB, { w: 160, h: 160, q: 70 }),
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Solera's design team spent two hours in our apartment before recommending a single piece. The Tivoli table they specified fits the room as if the room were built around it.",
    author: "Marcus Hale",
    role: "Architect",
    location: "San Francisco, CA",
    avatar: unsplash(IMG.personH, { w: 160, h: 160, q: 70 }),
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "I've bought 'investment furniture' before and been disappointed. The difference here is honesty - you can feel the joinery, see the grain match. It's the real thing.",
    author: "Priya Raman",
    role: "Gallerist",
    location: "London, UK",
    avatar: unsplash(IMG.personC, { w: 160, h: 160, q: 70 }),
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "We furnished an entire weekend house through their interior service. One point of contact, one coherent vision, zero of the usual chaos. Extraordinary.",
    author: "Daniel & Sofia Brandt",
    role: "Collectors",
    location: "Copenhagen, DK",
    avatar: unsplash(IMG.personE, { w: 160, h: 160, q: 70 }),
    rating: 5,
  },
  {
    id: "t5",
    quote:
      "The brass on the Lumen lamp has started to patina exactly as they promised. It looks better now than the day it arrived. Nothing else in my home does that.",
    author: "Yuki Tanaka",
    role: "Photographer",
    location: "Kyoto, JP",
    avatar: unsplash(IMG.personD, { w: 160, h: 160, q: 70 }),
    rating: 5,
  },
  {
    id: "t6",
    quote:
      "Service that remembers you. They followed up a year later with a care kit and a note. That's not marketing - that's a relationship.",
    author: "Theo Maslin",
    role: "Restaurateur",
    location: "Melbourne, AU",
    avatar: unsplash(IMG.personF, { w: 160, h: 160, q: 70 }),
    rating: 5,
  },
];

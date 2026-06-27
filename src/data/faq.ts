import type { FaqItem } from "@/types";

export const faqItems: FaqItem[] = [
  {
    group: "Orders & Lead Times",
    question: "Why does an order take eleven weeks?",
    answer:
      "Every Solera piece is made to order. When you place an order, we select the specific boards or hides for it, match the grain, and build it once - to your finish and fabric. The wait is the work happening. Lead times are shown on each product and typically range from 6 to 14 weeks.",
  },
  {
    group: "Orders & Lead Times",
    question: "Can I change or cancel my order?",
    answer:
      "You can adjust finishes, fabrics, and dimensions free of charge within five days of ordering, before we begin selecting materials. After that, because each piece is built uniquely for you, changes may not be possible. Reach out to your atelier contact as early as you can.",
  },
  {
    group: "Materials & Care",
    question: "Will my piece match one I bought years ago?",
    answer:
      "That is the point of our restraint. We keep a small, stable palette of finishes for many years precisely so that a piece bought today blends with one bought a decade ago. If you are matching to an existing Solera piece, tell us its name and year and we will calibrate.",
  },
  {
    group: "Materials & Care",
    question: "Is unlacquered brass going to tarnish?",
    answer:
      "It will patina - and we consider that a feature, not a fault. Living brass develops a warm, mottled depth over months. If you prefer it bright, a soft cloth and a little brass polish returns it in minutes. We will never lacquer it shut.",
  },
  {
    group: "Materials & Care",
    question: "How do I care for solid wood furniture?",
    answer:
      "Keep it out of direct, prolonged sun and away from heat sources, wipe spills promptly, and refresh the oil or wax once or twice a year. Our Furniture Care Guide walks through it in detail, and every order ships with a care kit matched to its finish.",
  },
  {
    group: "Delivery & Returns",
    question: "How is delivery handled?",
    answer:
      "Larger pieces are delivered by our white-glove partners: placed in the room of your choice, unpacked, assembled, and all packaging removed. Smaller items ship via insured courier. Delivery timing is arranged with you once your piece completes production.",
  },
  {
    group: "Delivery & Returns",
    question: "What is your return policy?",
    answer:
      "Because pieces are made to order, we do not offer change-of-mind returns. If anything arrives not as specified or with a fault, we will repair or remake it without question. Our lifetime structural guarantee stands behind every joint we cut.",
  },
  {
    group: "Service",
    question: "What does the interior design service include?",
    answer:
      "A dedicated designer visits your space (or works from your plans), develops a furnishing scheme, specifies pieces and finishes, and manages the order through to installation. It is offered complimentary on projects above a threshold; smaller engagements are quoted hourly. Begin on our Interior Design page.",
  },
  {
    group: "Service",
    question: "Do you ship internationally?",
    answer:
      "Yes. We ship worldwide via insured freight, with white-glove delivery available in most major cities. Duties and import taxes are calculated at the time of your quote so there are no surprises on arrival.",
  },
];

export const faqGroups = Array.from(new Set(faqItems.map((f) => f.group)));

import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing orders, pricing, delivery, and guarantees with Solera Furniture Atelier.",
};

export default function TermsPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />
      <LegalPage
        title="Terms & Conditions"
        updated="June 2026"
        crumbLabel="Terms"
        crumbHref="/terms"
        intro="The agreement between you and Solera Furniture Atelier when you place an order or use this site. We've kept it as plain as we can."
        sections={[
          {
            heading: "Orders & made-to-order production",
            paras: [
              "Every piece is built to order. Your order is confirmed once we acknowledge it in writing. Because each item is made uniquely for you, production begins after a short confirmation window.",
              "You may adjust finishes, fabrics, and dimensions free of charge within five days of ordering, before we begin selecting materials. After that, changes may not be possible.",
            ],
          },
          {
            heading: "Pricing & payment",
            paras: [
              "Prices shown are indicative base prices and may vary with your chosen finish, fabric, and dimensions. A formal quote confirms the final price before any commitment.",
              "All prices are exclusive of delivery, duties, and taxes unless stated. These are itemised in your quote so there are no surprises.",
            ],
          },
          {
            heading: "Delivery",
            paras: [
              "Lead times are estimates given in good faith and typically range from six to fourteen weeks. We keep you informed and arrange delivery once your piece completes production.",
              "Risk passes to you on delivery. Please inspect your piece on arrival and note any concern with our delivery team.",
            ],
          },
          {
            heading: "Returns & guarantee",
            paras: [
              "As pieces are made to order, we do not offer change-of-mind returns. If an item arrives faulty or not as specified, we will repair or remake it at no cost.",
              "Every structural joint is covered by our lifetime guarantee for the original owner, subject to reasonable use and care as set out in our care guide.",
            ],
          },
          {
            heading: "Intellectual property",
            paras: [
              "All designs, text, and imagery on this site are the property of Solera Furniture Atelier and may not be reproduced without written permission.",
            ],
          },
          {
            heading: "Liability",
            paras: [
              "Nothing in these terms limits liability that cannot be limited by law. Otherwise, our liability is limited to the value of the order in question.",
            ],
          },
        ]}
      />
    </>
  );
}

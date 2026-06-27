import type { Metadata } from "next";
import { newArrivals } from "@/data/products";
import { PageHeader } from "@/components/layout/page-header";
import { ProductShop } from "@/components/shop/product-shop";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "New Arrivals",
  description:
    "The latest pieces from the Solera bench — newly released designs in solid timber, stone, and honest textiles.",
};

export default function NewArrivalsPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "New Arrivals", path: "/new-arrivals" },
        ])}
      />
      <PageHeader
        serial="—"
        eyebrow="Just Off the Bench"
        title="New arrivals."
        intro="The most recent additions to the collection. Each one made to order, each one built to outlast its season."
        crumbs={[{ label: "Home", href: "/" }, { label: "New Arrivals" }]}
        image={unsplash(IMG.interiorC, { w: 2000, h: 1100, q: 80 })}
      />
      <ProductShop products={newArrivals} />
    </>
  );
}

import type { Metadata } from "next";
import { bestSellers } from "@/data/products";
import { PageHeader } from "@/components/layout/page-header";
import { ProductShop } from "@/components/shop/product-shop";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Best Sellers",
  description:
    "The Solera pieces our clients return for — the most-requested sofas, tables, beds, and chairs in the collection.",
};

export default function BestSellersPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Best Sellers", path: "/best-sellers" },
        ])}
      />
      <PageHeader
        serial="—"
        eyebrow="Most Requested"
        title="Best sellers."
        intro="The pieces that have furnished the most homes — chosen again and again for the way they live, not just the way they look."
        crumbs={[{ label: "Home", href: "/" }, { label: "Best Sellers" }]}
        image={unsplash(IMG.sofaA, { w: 2000, h: 1100, q: 80 })}
      />
      <ProductShop products={bestSellers} />
    </>
  );
}

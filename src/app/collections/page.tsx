import type { Metadata } from "next";
import { collections } from "@/data/collections";
import { products } from "@/data/products";
import { PageHeader } from "@/components/layout/page-header";
import { CollectionCard } from "@/components/product/collection-card";
import { ProductShop } from "@/components/shop/product-shop";
import { SectionHeader } from "@/components/ui/section-header";
import { Horizon } from "@/components/ui/horizon";
import { Reveal } from "@/components/motion/reveal";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore Solera's five furniture collections - living room, bedroom, dining, office, and outdoor - each designed as a single, quiet language.",
};

export default function CollectionsPage() {
  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Collections", path: "/collections" },
        ])}
      />
      <PageHeader
        serial="02"
        eyebrow="The Collections"
        title="Five rooms, one quiet language."
        intro="Each collection is composed for the way a room is actually lived in - scaled, finished, and built to be added to over a lifetime."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Collections" },
        ]}
        image={unsplash(IMG.interiorB, { w: 2000, h: 1100, q: 80 })}
      />

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-5 md:grid-cols-12 md:gap-6">
          {collections.map((c, i) => (
            <Reveal
              key={c.slug}
              variant="clip"
              delay={(i % 2) * 0.08}
              className={i < 2 ? "md:col-span-6" : "md:col-span-4"}
            >
              <CollectionCard
                collection={c}
                size={i < 2 ? "wide" : "tall"}
                priority={i < 2}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <Horizon className="container-page" />

      <section className="container-page pt-16 md:pt-20">
        <SectionHeader
          serial="06"
          eyebrow="Everything, in one place"
          title="Browse the full catalogue."
          intro="Filter by room, material, colour, and price to find the pieces that fit your space."
        />
      </section>

      <ProductShop products={products} />
    </>
  );
}

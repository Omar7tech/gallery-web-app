import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collections, getCollection } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import type { CollectionSlug } from "@/types";
import { PageHeader } from "@/components/layout/page-header";
import { ProductShop } from "@/components/shop/product-shop";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { CollectionCard } from "@/components/product/collection-card";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug as CollectionSlug);
  if (!collection) return { title: "Collection not found" };
  return {
    title: `${collection.name} Collection`,
    description: collection.description,
    openGraph: {
      title: `${collection.name} - Solera Collection`,
      description: collection.description,
      images: [collection.image],
    },
  };
}

export default async function CollectionPage({ params }: Params) {
  const { slug } = await params;
  const collection = getCollection(slug as CollectionSlug);
  if (!collection) notFound();

  const products = getProductsByCollection(collection.slug);
  const others = collections.filter((c) => c.slug !== collection.slug).slice(0, 3);

  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Collections", path: "/collections" },
          { name: collection.name, path: `/collections/${collection.slug}` },
        ])}
      />
      <PageHeader
        serial={collection.serial}
        eyebrow={collection.tagline}
        title={collection.name}
        intro={collection.description}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Collections", href: "/collections" },
          { label: collection.name },
        ]}
        image={collection.image}
      />

      {/* Story */}
      <section className="container-page grid gap-10 py-20 md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-28">
        <Reveal variant="fade">
          <span className="eyebrow text-brass">The Idea</span>
        </Reveal>
        <Reveal variant="up" y={24}>
          <p className="prose-editorial font-display text-2xl leading-snug text-ink md:text-3xl">
            {collection.story}
          </p>
        </Reveal>
      </section>

      <section className="container-page">
        <SectionHeader
          serial={collection.serial}
          eyebrow={`${products.length} pieces`}
          title={`The ${collection.name} pieces.`}
        />
      </section>

      <ProductShop products={products} showCollectionFilter={false} />

      {/* Other collections */}
      <section className="container-page border-t border-line py-20 md:py-28">
        <SectionHeader serial="-" eyebrow="Keep exploring" title="Other rooms." />
        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {others.map((c) => (
            <CollectionCard key={c.slug} collection={c} size="tall" />
          ))}
        </div>
        <Link
          href="/collections"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink"
        >
          <span className="link-underline pb-1">All collections</span>
          <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </>
  );
}

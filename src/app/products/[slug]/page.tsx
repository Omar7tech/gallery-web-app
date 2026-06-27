import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProduct, getRelatedProducts } from "@/data/products";
import { getCollection } from "@/data/collections";
import { titleFromSlug } from "@/lib/utils";
import { JsonLdScript, breadcrumbSchema, productSchema } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductConfigurator } from "@/components/product/product-configurator";
import { DimensionDiagram } from "@/components/product/dimension-diagram";
import { RecentlyViewed } from "@/components/product/recently-viewed";
import { ProductRow } from "@/components/product/product-row";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { CTABlock } from "@/components/marketing/cta-block";
import { Reveal } from "@/components/motion/reveal";
import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Piece not found" };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} — Solera`,
      description: product.shortDescription,
      images: [product.heroImage],
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const collection = getCollection(product.collection);
  const related = getRelatedProducts(product, 8);

  const careItems = [
    {
      question: "Care & maintenance",
      answer:
        "Dust with a soft, dry cloth. Refresh oiled or waxed surfaces once or twice a year with the care kit included in your delivery. Keep out of direct, prolonged sunlight and away from heat sources. Wipe spills promptly — never let liquid stand on timber or stone.",
    },
    {
      question: "Shipping & delivery",
      answer:
        "Larger pieces are delivered by our white-glove partners: placed in the room of your choice, fully assembled, with all packaging removed. Smaller items ship via insured courier. Delivery is scheduled with you once production completes, approximately " +
        product.leadTimeWeeks +
        " weeks from order.",
    },
    {
      question: "Returns & guarantee",
      answer:
        "Because each piece is made to order, we do not offer change-of-mind returns. If anything arrives not as specified, we will remake it. Every joint we cut is backed by our lifetime structural guarantee.",
    },
  ];

  return (
    <>
      <JsonLdScript data={productSchema(product)} />
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Collections", path: "/collections" },
          {
            name: collection?.name ?? titleFromSlug(product.collection),
            path: `/collections/${product.collection}`,
          },
          { name: product.name, path: `/products/${product.slug}` },
        ])}
      />

      {/* Dark breadcrumb strip keeps the nav legible */}
      <div className="bg-ink pb-7 pt-32 text-chalk md:pt-36">
        <div className="container-page flex flex-wrap items-center justify-between gap-3">
          <Breadcrumb
            light
            items={[
              { label: "Home", href: "/" },
              { label: "Collections", href: "/collections" },
              {
                label: collection?.name ?? titleFromSlug(product.collection),
                href: `/collections/${product.collection}`,
              },
              { label: product.name },
            ]}
          />
          <span className="font-mono text-xs text-chalk/45">
            SOL-{product.serial} · {product.year}
          </span>
        </div>
      </div>

      {/* Main */}
      <section className="container-page grid gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <ProductGallery images={product.images} name={product.name} />
        <div className="lg:py-2">
          <div className="lg:sticky lg:top-28">
            <ProductConfigurator product={product} />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container-page grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal variant="fade">
            <span className="eyebrow text-brass">The Story</span>
          </Reveal>
          <Reveal variant="up" y={24}>
            <p className="prose-editorial font-display text-2xl leading-snug text-ink md:text-3xl">
              {product.story}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Specs + dimensions */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader serial="—" eyebrow="Specification" title="The details." as="h2" />
            <dl className="mt-10 divide-y divide-line border-t border-line">
              {[...product.dimensions, ...product.specs].map((row, i) => (
                <div key={i} className="flex justify-between gap-6 py-4">
                  <dt className="text-sm text-muted">{row.label}</dt>
                  <dd className="text-right text-sm font-medium text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <SectionHeader serial="—" eyebrow="Measured Drawing" title="Dimensions." as="h2" />
            <div className="mt-10 rounded-lg border border-line bg-paper p-8">
              <DimensionDiagram dimensions={product.dimensions} />
            </div>
            <div className="mt-10">
              <Accordion items={careItems} defaultOpen={0} />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="container-page border-t border-line py-20 md:py-28">
        <SectionHeader
          serial="—"
          eyebrow="You may also consider"
          title="Pieces that sit well together."
          link={{
            label: `All ${collection?.name ?? "pieces"}`,
            href: `/collections/${product.collection}`,
          }}
        />
        <div className="mt-12">
          <ProductRow products={related} />
        </div>
      </section>

      <RecentlyViewed currentSlug={product.slug} />

      <div className="container-page py-12 md:py-20">
        <CTABlock
          eyebrow="Not sure it's right for your room?"
          title="Talk it through with a designer."
          body="Send us your dimensions and a photo or two. We'll tell you honestly whether this is the right piece — and suggest alternatives if it isn't."
          primary={{ label: "Book a consultation", href: "/contact" }}
          secondary={{ label: "Our design service", href: "/interior-design-service" }}
          image={unsplash(IMG.interiorH, { w: 2000, h: 1100, q: 80 })}
        />
      </div>
    </>
  );
}

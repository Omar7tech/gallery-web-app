import { collections } from "@/data/collections";
import { SectionHeader } from "@/components/ui/section-header";
import { Horizon } from "@/components/ui/horizon";
import { CollectionCard } from "@/components/product/collection-card";
import { Reveal } from "@/components/motion/reveal";

export function FeaturedCollections() {
  const [living, bedroom, dining, office, outdoor] = collections;

  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeader
        serial="02"
        eyebrow="The Collections"
        title="Five rooms, one quiet language."
        intro="Each collection is designed as a single, slow gesture — scaled for the way people actually live, gather, work, and rest."
        link={{ label: "All collections", href: "/collections" }}
      />

      <Horizon className="my-12" />

      <div className="grid gap-5 md:grid-cols-12 md:gap-6">
        <Reveal variant="clip" className="md:col-span-7">
          <CollectionCard collection={living} size="wide" priority />
        </Reveal>
        <Reveal variant="clip" delay={0.1} className="md:col-span-5">
          <CollectionCard collection={bedroom} size="wide" priority />
        </Reveal>
        <Reveal variant="clip" className="md:col-span-4">
          <CollectionCard collection={dining} size="tall" />
        </Reveal>
        <Reveal variant="clip" delay={0.08} className="md:col-span-4">
          <CollectionCard collection={office} size="tall" />
        </Reveal>
        <Reveal variant="clip" delay={0.16} className="md:col-span-4">
          <CollectionCard collection={outdoor} size="tall" />
        </Reveal>
      </div>
    </section>
  );
}

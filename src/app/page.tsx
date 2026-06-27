import { unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { Hero } from "@/components/home/hero";
import { FeaturedCollections } from "@/components/home/featured-collections";
import { BestSellers } from "@/components/home/best-sellers";
import { SignaturePieces } from "@/components/home/signature-pieces";
import { CraftsmanshipStory } from "@/components/home/craftsmanship-story";
import { MaterialsSection } from "@/components/home/materials-section";
import { DesignPhilosophy } from "@/components/home/design-philosophy";
import { InteriorInspiration } from "@/components/home/interior-inspiration";
import { SustainabilitySection } from "@/components/home/sustainability-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { InstagramGallery } from "@/components/home/instagram-gallery";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { CTABlock } from "@/components/marketing/cta-block";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <BestSellers />
      <SignaturePieces />
      <CraftsmanshipStory />
      <MaterialsSection />
      <DesignPhilosophy />
      <InteriorInspiration />
      <SustainabilitySection />
      <TestimonialsSection />

      <div className="container-page py-12 md:py-20">
        <CTABlock
          eyebrow="Nº 11 - Design Service"
          title="Let's compose your rooms together."
          body="Work one-to-one with a Solera designer - from a single piece to a whole home. We visit, we listen, and we specify furniture made to fit your life."
          primary={{ label: "Book a consultation", href: "/contact" }}
          secondary={{ label: "See the service", href: "/interior-design-service" }}
          image={unsplash(IMG.interiorE, { w: 2000, h: 1100, q: 80 })}
        />
      </div>

      <InstagramGallery />
      <NewsletterSection />
    </>
  );
}

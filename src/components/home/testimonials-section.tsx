import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/ui/section-header";
import { Testimonials } from "@/components/marketing/testimonials";

export function TestimonialsSection() {
  return (
    <section className="container-page py-24 md:py-32">
      <SectionHeader
        serial="10"
        eyebrow="In Their Words"
        title="Trusted with the rooms that matter."
        link={{ label: "All testimonials", href: "/testimonials" }}
      />
      <div className="mt-16">
        <Testimonials items={testimonials} />
      </div>
    </section>
  );
}

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Service Ops AI."
        />
        <div className="mx-auto max-w-3xl">
          <Accordion items={FAQS} />
        </div>
      </Container>
    </section>
  );
}

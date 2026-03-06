import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Service Ops AI. Request your free audit or ask us anything about automating your service business.",
};

export default function ContactPage() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <ContactInfo />
          <div className="rounded-xl border border-border bg-white p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

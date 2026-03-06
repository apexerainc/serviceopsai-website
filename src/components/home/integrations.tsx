import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { INTEGRATIONS } from "@/lib/constants";

export function Integrations() {
  return (
    <section id="integrations" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Connects With Your Favorite Tools"
          subtitle="Seamlessly integrate with the business apps you already use."
        />
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {INTEGRATIONS.map((integration, i) => (
            <ScrollReveal key={integration.name} delay={i * 50}>
              <div className="feature-card flex flex-col items-center gap-3 rounded-xl border border-border bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface">
                  <integration.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-text-secondary">
                  {integration.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

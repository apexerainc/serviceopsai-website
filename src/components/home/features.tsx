import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <section id="features" className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Everything You Need to Run Smarter"
          subtitle="Powerful tools that automate the busywork so you can focus on delivering great service."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 100}>
              <div className="feature-card rounded-xl border border-border bg-white p-8 shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-text-secondary">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { VALUES } from "@/lib/constants";

export function Values() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Our Values"
          subtitle="The principles that guide everything we build."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {VALUES.map((value) => (
            <Card key={value.title} variant="elevated" padding="lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-text-secondary">{value.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

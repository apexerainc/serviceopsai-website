import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-primary-light py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Automate Your Operations?
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Join 500+ service businesses that have streamlined their operations
            with Service Ops AI. Start your free trial today.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="accent" href="/contact">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="secondary" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

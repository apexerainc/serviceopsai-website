import { Container } from "@/components/ui/container";

export function Mission() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Built for the Businesses That Built America
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Service businesses are the backbone of every community. The plumber
            who fixes your pipes at midnight. The HVAC tech who keeps your family
            comfortable. The landscaper who transforms your yard into a sanctuary.
          </p>
          <p className="mt-4 text-lg leading-8 text-text-secondary">
            These businesses deserve the same operational intelligence that
            Fortune 500 companies take for granted. That&apos;s why we built
            Service Ops AI — to give every service business the tools to run
            smarter, grow faster, and serve better.
          </p>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/container";

export function Founder() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Story
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Service Ops AI was founded by a team of engineers and operators who
            spent years working alongside service businesses. We saw firsthand
            how much time was wasted on scheduling conflicts, missed follow-ups,
            and manual invoicing.
          </p>
          <p className="mt-4 text-lg leading-8 text-text-secondary">
            We knew there had to be a better way. So we built one. Today,
            Service Ops AI powers operations for over 500 service businesses
            across the country, helping them save time, increase revenue, and
            deliver exceptional customer experiences.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="rounded-xl bg-surface px-8 py-6">
              <p className="text-sm font-medium text-text-secondary">
                Founded in 2024 &middot; Based in Austin, TX &middot; 30+ team
                members
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

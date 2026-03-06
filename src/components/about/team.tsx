import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TEAM_MEMBERS } from "@/lib/constants";

export function Team() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Meet the Team"
          subtitle="People who understand service businesses because they've lived it."
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM_MEMBERS.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 100}>
              <div className="group text-center">
                <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-accent">{member.role}</p>
                <p className="mt-2 text-sm text-text-secondary">{member.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

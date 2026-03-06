"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PricingCard } from "@/components/pricing/pricing-card";
import { Badge } from "@/components/ui/badge";
import { PRICING_TIERS } from "@/lib/constants";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="No hidden fees. No long-term contracts. Start free and upgrade when you're ready."
        />
        <div className="mb-10 flex items-center justify-center gap-3">
          <span
            className={cn(
              "text-sm font-medium",
              !isAnnual ? "text-foreground" : "text-text-secondary"
            )}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={cn(
              "relative inline-flex h-7 w-12 items-center rounded-full transition-colors",
              isAnnual ? "bg-accent" : "bg-border"
            )}
            aria-label="Toggle annual billing"
          >
            <span
              className={cn(
                "inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform",
                isAnnual ? "translate-x-6" : "translate-x-1"
              )}
            />
          </button>
          <span
            className={cn(
              "text-sm font-medium",
              isAnnual ? "text-foreground" : "text-text-secondary"
            )}
          >
            Annual
          </span>
          {isAnnual && (
            <Badge variant="highlight" className="bg-accent text-white">
              Save 20%
            </Badge>
          )}
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.name} tier={tier} isAnnual={isAnnual} />
          ))}
        </div>
      </Container>
    </section>
  );
}

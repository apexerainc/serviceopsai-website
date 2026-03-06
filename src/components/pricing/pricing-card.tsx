import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PricingTier } from "@/lib/types";

export function PricingCard({
  tier,
  isAnnual = false,
}: {
  tier: PricingTier;
  isAnnual?: boolean;
}) {
  const displayPrice =
    isAnnual && tier.annualPrice ? tier.annualPrice : tier.price;

  return (
    <Card
      variant={tier.highlighted ? "highlighted" : "elevated"}
      padding="lg"
      className="relative flex flex-col"
    >
      {tier.highlighted && (
        <Badge
          variant="highlight"
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent"
        >
          Most Popular
        </Badge>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold text-foreground">
            {displayPrice}
          </span>
          {tier.period && (
            <span className="ml-1 text-text-secondary">{tier.period}</span>
          )}
        </div>
        {isAnnual && tier.annualPrice && (
          <p className="mt-1 text-sm text-accent font-medium">
            Save ${(parseInt(tier.price.replace("$", "")) - parseInt(tier.annualPrice.replace("$", ""))) * 12}/year
          </p>
        )}
        <p className="mt-2 text-sm text-text-secondary">{tier.description}</p>
      </div>
      <ul className="mb-8 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={tier.highlighted ? "accent" : "secondary"}
        className="w-full"
        href="/contact"
      >
        {tier.cta}
      </Button>
    </Card>
  );
}

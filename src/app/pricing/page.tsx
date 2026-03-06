import type { Metadata } from "next";
import { PricingSection } from "@/components/pricing/pricing-toggle";
import { FeatureComparison } from "@/components/pricing/feature-comparison";
import { FAQ } from "@/components/home/faq";
import { CTABanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Service Ops AI. Choose the plan that fits your service business.",
};

export default function PricingPage() {
  return (
    <>
      <PricingSection />
      <FeatureComparison />
      <FAQ />
      <CTABanner />
    </>
  );
}

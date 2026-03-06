import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Integrations } from "@/components/home/integrations";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";
import { Stats } from "@/components/home/stats";
import { FAQ } from "@/components/home/faq";
import { CTABanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Integrations />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <FAQ />
      <CTABanner />
    </>
  );
}

import type { Metadata } from "next";
import { Mission } from "@/components/about/mission";
import { Values } from "@/components/about/values";
import { Team } from "@/components/about/team";
import { Founder } from "@/components/about/founder";
import { Stats } from "@/components/home/stats";
import { CTABanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Service Ops AI and our mission to automate service business operations with AI-powered tools.",
};

export default function AboutPage() {
  return (
    <>
      <Mission />
      <Values />
      <Team />
      <Stats />
      <Founder />
      <CTABanner />
    </>
  );
}

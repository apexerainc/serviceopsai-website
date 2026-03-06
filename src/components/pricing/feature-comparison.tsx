import { Check, Minus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const COMPARISON_FEATURES = [
  { name: "Users", starter: "5", pro: "25", enterprise: "Unlimited" },
  { name: "Jobs per month", starter: "100", pro: "Unlimited", enterprise: "Unlimited" },
  { name: "AI Scheduling", starter: false, pro: true, enterprise: true },
  { name: "Automated Invoicing", starter: true, pro: true, enterprise: true },
  { name: "SMS Communication", starter: false, pro: true, enterprise: true },
  { name: "Route Optimization", starter: false, pro: true, enterprise: true },
  { name: "Real-Time Reporting", starter: false, pro: true, enterprise: true },
  { name: "Workflow Automation", starter: false, pro: true, enterprise: true },
  { name: "Custom Integrations", starter: false, pro: false, enterprise: true },
  { name: "API Access", starter: false, pro: false, enterprise: true },
  { name: "Dedicated Account Manager", starter: false, pro: false, enterprise: true },
  { name: "SLA Guarantee", starter: false, pro: false, enterprise: true },
];

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-foreground">{value}</span>;
  }
  return value ? (
    <Check className="mx-auto h-5 w-5 text-primary" />
  ) : (
    <Minus className="mx-auto h-5 w-5 text-slate-300" />
  );
}

export function FeatureComparison() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Compare Plans"
          subtitle="Find the perfect plan for your business."
        />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 pr-4 text-left text-sm font-semibold text-foreground">
                  Feature
                </th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">
                  Starter
                </th>
                <th className="px-4 py-4 text-center text-sm font-semibold text-primary">
                  Professional
                </th>
                <th className="pl-4 py-4 text-center text-sm font-semibold text-foreground">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_FEATURES.map((feature) => (
                <tr key={feature.name} className="border-b border-border">
                  <td className="py-3 pr-4 text-sm text-foreground">
                    {feature.name}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <CellValue value={feature.starter} />
                  </td>
                  <td className="px-4 py-3 text-center bg-primary/[0.02]">
                    <CellValue value={feature.pro} />
                  </td>
                  <td className="pl-4 py-3 text-center">
                    <CellValue value={feature.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const HERO_POINTS = [
  "No credit card required",
  "14-day free trial",
  "Setup in under 1 hour",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge variant="default" className="mb-6">
              New: AI-Powered Route Optimization
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Automate Your Service Business.{" "}
              <span className="text-primary">Focus on What Matters.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Scheduling, invoicing, dispatching, and customer communication —
              all automated. Give your team superpowers and your customers an
              exceptional experience.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="accent" href="/contact">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" href="/#how-it-works">
                <Play className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {HERO_POINTS.map((point) => (
                <span
                  key={point}
                  className="flex items-center gap-2 text-sm text-text-secondary"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {point}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                alt="Service Ops AI dashboard showing scheduling and dispatching interface"
                width={800}
                height={600}
                className="h-auto w-full"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-white p-4 shadow-lg ring-1 ring-border">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-light">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">85% time saved</p>
                  <p className="text-xs text-text-secondary">on admin tasks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

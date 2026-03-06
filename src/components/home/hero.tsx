"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Clock,
  Users,
  Calendar,
  BarChart3,
  Zap,
} from "lucide-react";

const ROTATING_WORDS = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Landscaping",
  "Cleaning",
  "Roofing",
];

const HERO_POINTS = [
  "No credit card required",
  "Results in 48 hours",
  "Setup in under 1 hour",
];

function TypingEffect() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = ROTATING_WORDS[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < word.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setWordIndex((wordIndex + 1) % ROTATING_WORDS.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <span className="text-accent typing-cursor">
      {ROTATING_WORDS[wordIndex].slice(0, charIndex)}
    </span>
  );
}

function DashboardMockup() {
  return (
    <div className="dashboard-shadow rounded-2xl bg-white overflow-hidden animate-slide-in-right">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-5 py-3 bg-slate-50">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-amber-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-3 flex-1 rounded-md bg-slate-100 px-3 py-1 text-[10px] text-text-secondary font-mono">
          app.serviceopsai.com/dashboard
        </div>
      </div>
      {/* Dashboard content */}
      <div className="p-5 space-y-4">
        {/* Metric cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Active Jobs", value: "28", change: "+12%", icon: Calendar },
            { label: "Revenue", value: "$47.2K", change: "+23%", icon: TrendingUp },
            { label: "Efficiency", value: "94%", change: "+8%", icon: Zap },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-border p-3 bg-white"
            >
              <div className="flex items-center justify-between mb-2">
                <m.icon className="h-4 w-4 text-primary" />
                <span className="text-[10px] font-medium text-green-600">
                  {m.change}
                </span>
              </div>
              <p className="text-lg font-bold text-foreground leading-none">
                {m.value}
              </p>
              <p className="text-[10px] text-text-secondary mt-1">{m.label}</p>
            </div>
          ))}
        </div>
        {/* Schedule rows */}
        <div className="rounded-lg border border-border overflow-hidden">
          <div className="px-3 py-2 bg-slate-50 border-b border-border">
            <p className="text-[11px] font-semibold text-foreground">
              Today&apos;s Schedule
            </p>
          </div>
          {[
            { time: "9:00 AM", job: "AC Repair — Martinez", tech: "Mike T.", status: "In Progress" },
            { time: "11:30 AM", job: "Furnace Install — Chen", tech: "Sarah L.", status: "En Route" },
            { time: "2:00 PM", job: "Duct Cleaning — Park", tech: "James W.", status: "Scheduled" },
          ].map((row) => (
            <div
              key={row.time}
              className="flex items-center gap-3 px-3 py-2.5 border-b border-border last:border-b-0 text-[11px]"
            >
              <span className="text-text-secondary font-mono w-14 shrink-0">
                {row.time}
              </span>
              <span className="font-medium text-foreground flex-1 truncate">
                {row.job}
              </span>
              <span className="text-text-secondary hidden sm:block w-16 truncate">
                {row.tech}
              </span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                  row.status === "In Progress"
                    ? "bg-blue-50 text-blue-700"
                    : row.status === "En Route"
                    ? "bg-amber-50 text-amber-700"
                    : "bg-slate-50 text-slate-600"
                }`}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
        {/* Mini chart bar */}
        <div className="flex items-end gap-1 h-12">
          {[35, 52, 41, 68, 55, 72, 48, 80, 62, 75, 58, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-primary/20 hover:bg-primary/40 transition-colors"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-grid py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div className="relative z-10">
            <Badge variant="default" className="mb-6 border border-primary/20">
              <Zap className="mr-1.5 h-3 w-3 text-accent" />
              AI-Powered Operations Platform
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              The operating system for{" "}
              <TypingEffect /> businesses
            </h1>
            <p className="mt-6 text-lg leading-8 text-text-secondary max-w-lg">
              Scheduling, invoicing, dispatching, and customer communication —
              automated by AI. Run leaner. Grow faster. Outperform the competition.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" variant="accent" href="/contact">
                Get Free Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" href="/pricing">
                See Pricing
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {HERO_POINTS.map((point) => (
                <span
                  key={point}
                  className="flex items-center gap-1.5 text-sm text-text-secondary"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  {point}
                </span>
              ))}
            </div>
          </div>

          {/* Right — dashboard mockup + floating cards */}
          <div className="relative">
            <DashboardMockup />

            {/* Floating stat: time saved */}
            <div className="glass absolute -left-6 top-8 rounded-xl px-4 py-3 shadow-lg animate-float opacity-0 animate-fade-in stagger-1 animate-pulse-glow hidden lg:flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-light">
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">20 hrs/wk</p>
                <p className="text-[10px] text-text-secondary">Admin time saved</p>
              </div>
            </div>

            {/* Floating stat: team */}
            <div className="glass absolute -right-4 bottom-24 rounded-xl px-4 py-3 shadow-lg animate-float opacity-0 animate-fade-in stagger-2 hidden lg:flex items-center gap-3" style={{ animationDelay: "600ms" }}>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-light">
                <Users className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">500+</p>
                <p className="text-[10px] text-text-secondary">Teams automated</p>
              </div>
            </div>

            {/* Floating stat: revenue */}
            <div className="glass absolute -bottom-2 left-8 rounded-xl px-4 py-3 shadow-lg animate-float opacity-0 animate-fade-in stagger-3 hidden lg:flex items-center gap-3" style={{ animationDelay: "900ms" }}>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50">
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">+35%</p>
                <p className="text-[10px] text-text-secondary">Revenue increase</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-16 border-t border-border pt-8">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-text-secondary mb-6">
            Trusted by 500+ service businesses across the country
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              { icon: BarChart3, name: "Torres HVAC" },
              { icon: Zap, name: "Sparkle Clean Pro" },
              { icon: Calendar, name: "Whitfield Plumbing" },
              { icon: TrendingUp, name: "GreenScape" },
              { icon: Users, name: "ShieldPest" },
              { icon: Clock, name: "Thompson Electric" },
            ].map((company) => (
              <div
                key={company.name}
                className="flex items-center gap-2 text-slate-300 hover:text-primary transition-colors"
              >
                <company.icon className="h-5 w-5" />
                <span className="text-sm font-semibold tracking-tight">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface PricingTier {
  name: string;
  price: string;
  annualPrice?: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  readTime: string;
  image: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Integration {
  name: string;
  icon: LucideIcon;
}

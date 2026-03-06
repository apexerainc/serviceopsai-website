import {
  Calendar,
  Receipt,
  MessageSquare,
  Route,
  BarChart3,
  Zap,
  Shield,
  Target,
  Server,
  CreditCard,
  Cloud,
  Smartphone,
  Mail,
  Database,
  FileText,
  Users,
  Clock,
  Wrench,
} from "lucide-react";
import type {
  NavLink,
  Feature,
  Testimonial,
  Stat,
  PricingTier,
  BlogPost,
  Step,
  Value,
  FooterColumn,
  FAQ,
  TeamMember,
  Integration,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FEATURES: Feature[] = [
  {
    title: "Smart Scheduling",
    description:
      "AI-powered scheduling that considers drive time, technician skills, and customer preferences to optimize your calendar.",
    icon: Calendar,
  },
  {
    title: "Automated Invoicing",
    description:
      "Generate and send professional invoices automatically upon job completion. Get paid faster with online payments.",
    icon: Receipt,
  },
  {
    title: "Customer Communication",
    description:
      "Automated SMS and email reminders, follow-ups, and review requests that keep customers informed and happy.",
    icon: MessageSquare,
  },
  {
    title: "Intelligent Dispatching",
    description:
      "Route optimization and real-time tracking that reduces drive time and gets your team to more jobs per day.",
    icon: Route,
  },
  {
    title: "Real-Time Reporting",
    description:
      "Live dashboards showing revenue, job completion rates, technician performance, and customer satisfaction scores.",
    icon: BarChart3,
  },
  {
    title: "Workflow Automation",
    description:
      "Build custom automation rules without coding. Trigger actions based on job status, time, or customer behavior.",
    icon: Zap,
  },
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Connect",
    description:
      "Integrate your existing tools and import your customer data in minutes. We support 50+ popular service business apps.",
  },
  {
    number: "02",
    title: "Configure",
    description:
      "Set up your workflows, automation rules, and preferences. Our setup wizard guides you through every step.",
  },
  {
    number: "03",
    title: "Automate",
    description:
      "Sit back and let Service Ops AI handle scheduling, invoicing, dispatching, and communication automatically.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mike Torres",
    role: "Owner",
    company: "Torres HVAC Solutions",
    quote:
      "We went from 15 jobs a week to 28 without hiring a single new person. Service Ops AI completely transformed how we run our business.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Sarah Chen",
    role: "Operations Manager",
    company: "Sparkle Clean Pro",
    quote:
      "The automated scheduling alone saved us 20 hours a week. Our customers love the text reminders and our no-show rate dropped to nearly zero.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "James Whitfield",
    role: "CEO",
    company: "Whitfield Plumbing Co.",
    quote:
      "I can finally see exactly where my business stands in real-time. Revenue is up 35% and my team is happier because they spend less time on paperwork.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Maria Rodriguez",
    role: "Founder",
    company: "GreenScape Landscaping",
    quote:
      "Before Service Ops AI, I was spending my evenings doing invoices and scheduling. Now the system handles it all and I actually get to enjoy my weekends.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "David Park",
    role: "Operations Director",
    company: "ShieldPest Solutions",
    quote:
      "Route optimization cut our fuel costs by 22% in the first month. The dispatching AI is like having a logistics expert on staff 24/7.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Lisa Thompson",
    role: "Owner",
    company: "Thompson Electric",
    quote:
      "Our customer satisfaction scores jumped from 4.1 to 4.8 stars after we started using the automated follow-up system. It practically runs itself.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
];

export const STATS: Stat[] = [
  { value: 10000, suffix: "+", label: "Jobs Managed Monthly" },
  { value: 85, suffix: "%", label: "Time Saved on Admin" },
  { value: 35, suffix: "%", label: "Average Revenue Increase" },
  { value: 500, suffix: "+", label: "Businesses Automated" },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: "$49",
    annualPrice: "$39",
    period: "/mo",
    description:
      "Perfect for solo operators and small teams getting started with automation.",
    features: [
      "Up to 5 users",
      "100 jobs per month",
      "Basic scheduling",
      "Invoice generation",
      "Email notifications",
      "Standard support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: "$149",
    annualPrice: "$119",
    period: "/mo",
    description:
      "For growing companies that need the full power of automation.",
    features: [
      "Up to 25 users",
      "Unlimited jobs",
      "AI-powered scheduling",
      "Automated invoicing & payments",
      "SMS & email communication",
      "Route optimization",
      "Real-time reporting",
      "Workflow automation",
      "Priority support",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "For multi-location businesses with complex operational needs.",
    features: [
      "Unlimited users",
      "Unlimited jobs",
      "Everything in Professional",
      "Custom integrations",
      "API access",
      "Dedicated account manager",
      "Custom reporting",
      "SLA guarantee",
      "On-site training",
    ],
    cta: "Contact Sales",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "5 Signs Your Service Business Is Ready for Automation",
    excerpt:
      "Still managing schedules on whiteboards and sending invoices manually? Here are the telltale signs it's time to automate your operations.",
    date: "Mar 1, 2026",
    category: "Operations",
    slug: "signs-ready-for-automation",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
  },
  {
    title: "How AI Dispatching Saved One HVAC Company $200K/Year",
    excerpt:
      "Torres HVAC Solutions was losing money on inefficient routes and missed appointments. See how intelligent dispatching turned things around.",
    date: "Feb 15, 2026",
    category: "Case Study",
    slug: "ai-dispatching-case-study",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
  },
  {
    title: "The Complete Guide to Service Business Invoicing",
    excerpt:
      "From quote to payment, learn the best practices for invoicing that gets you paid faster and keeps your cash flow healthy.",
    date: "Feb 1, 2026",
    category: "Finance",
    slug: "service-business-invoicing-guide",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    title: "Why 2026 Is the Year of AI for Field Service",
    excerpt:
      "AI is no longer just for tech giants. Discover how affordable AI tools are revolutionizing field service management for businesses of all sizes.",
    date: "Jan 20, 2026",
    category: "Industry",
    slug: "ai-field-service-2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  },
  {
    title: "Reducing No-Shows: The Automated Reminder Playbook",
    excerpt:
      "No-shows cost service businesses thousands each year. Learn how automated SMS and email reminders can cut your no-show rate by up to 90%.",
    date: "Jan 10, 2026",
    category: "Growth",
    slug: "reducing-no-shows-automated-reminders",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "From Spreadsheets to Smart Ops: A Migration Guide",
    excerpt:
      "Ready to ditch the spreadsheets? This step-by-step guide walks you through migrating your service business operations to a modern platform.",
    date: "Jan 5, 2026",
    category: "Guides",
    slug: "spreadsheets-to-smart-ops",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
];

export const VALUES: Value[] = [
  {
    title: "Simplicity First",
    description:
      "Technology should make your life easier, not harder. Every feature we build starts with the question: is this simple enough for a technician in the field?",
    icon: Target,
  },
  {
    title: "Built for the Field",
    description:
      "We design for real-world conditions: spotty cell service, dirty hands on screens, and the chaos of a busy workday.",
    icon: Shield,
  },
  {
    title: "Measurable Impact",
    description:
      "We obsess over metrics that matter to your bottom line. If a feature doesn't save you time or make you money, we don't ship it.",
    icon: BarChart3,
  },
  {
    title: "Relentless Reliability",
    description:
      "Your business runs 24/7, and so does our platform. We maintain 99.9% uptime because your customers are counting on you.",
    icon: Server,
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/#integrations" },
      { label: "API", href: "/#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/#" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/#" },
      { label: "Help Center", href: "/#" },
      { label: "Community", href: "/#" },
      { label: "Status", href: "/#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/#" },
      { label: "Terms of Service", href: "/#" },
      { label: "Cookie Policy", href: "/#" },
    ],
  },
];

export const SERVICE_TYPES = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Landscaping",
  "Cleaning",
  "Pest Control",
  "Roofing",
  "Other",
] as const;

export const FAQS: FAQ[] = [
  {
    question: "How long does it take to set up Service Ops AI?",
    answer:
      "Most businesses are up and running within 24 hours. Our setup wizard walks you through connecting your tools, importing customer data, and configuring your first workflows. We also offer free onboarding assistance for Professional and Enterprise plans.",
  },
  {
    question: "Do I need any technical knowledge to use it?",
    answer:
      "Not at all. Service Ops AI is designed for service professionals, not engineers. Our drag-and-drop workflow builder and pre-built templates mean you can automate complex processes without writing a single line of code.",
  },
  {
    question: "Can I integrate with my existing tools?",
    answer:
      "Yes! We integrate with 50+ popular business tools including QuickBooks, Google Calendar, Stripe, Mailchimp, and many more. Our API is also available on the Enterprise plan for custom integrations.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your data belongs to you. If you decide to cancel, you can export all your data at any time. We retain your data for 30 days after cancellation in case you change your mind, then permanently delete it.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! Every plan comes with a 14-day free trial with no credit card required. You get full access to all features in your chosen plan so you can see exactly how Service Ops AI will work for your business.",
  },
  {
    question: "How does the AI scheduling actually work?",
    answer:
      "Our AI analyzes multiple factors including technician skills and certifications, geographic location and drive times, customer preferences, job priority, and historical data to create the most efficient schedule possible. It continuously learns and improves based on your business patterns.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Starter plans include email support with 24-hour response times. Professional plans get priority support via email and chat with 4-hour response times. Enterprise plans include a dedicated account manager and phone support.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. When upgrading, you get immediate access to new features. When downgrading, changes take effect at the start of your next billing cycle.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alex Rivera",
    role: "CEO & Co-Founder",
    bio: "Former operations VP at a national HVAC franchise. Spent 10 years watching great technicians drown in paperwork.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer who built logistics optimization systems. Passionate about bringing enterprise-grade tech to small businesses.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marcus Johnson",
    role: "VP of Engineering",
    bio: "15 years building scalable SaaS platforms. Previously led engineering at two successful field service startups.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Emily Nakamura",
    role: "Head of Customer Success",
    bio: "Former cleaning business owner who knows the pain points firsthand. Ensures every customer gets real, measurable results.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
];

export const INTEGRATIONS: Integration[] = [
  { name: "QuickBooks", icon: CreditCard },
  { name: "Google Calendar", icon: Calendar },
  { name: "Stripe", icon: CreditCard },
  { name: "Mailchimp", icon: Mail },
  { name: "Salesforce", icon: Cloud },
  { name: "Slack", icon: MessageSquare },
  { name: "Zapier", icon: Zap },
  { name: "HubSpot", icon: Users },
  { name: "Xero", icon: FileText },
  { name: "Square", icon: Smartphone },
  { name: "Twilio", icon: MessageSquare },
  { name: "PostgreSQL", icon: Database },
];

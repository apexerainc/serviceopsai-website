import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Service Ops AI | Automate Your Service Business",
    template: "%s | Service Ops AI",
  },
  description:
    "Automate scheduling, invoicing, dispatching, and customer communication for your service business. AI-powered operations for HVAC, plumbing, landscaping, and more.",
  openGraph: {
    title: "Service Ops AI | Automate Your Service Business",
    description:
      "AI-powered operations for service businesses. Scheduling, invoicing, dispatching, and communication — all automated.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-foreground">
            Service Ops<span className="text-primary"> AI</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-primary"
                    : "text-text-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" variant="accent" href="/contact">
              Get Free Audit
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border pb-4 md:hidden">
            <div className="flex flex-col gap-2 pt-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-surface",
                    pathname === link.href
                      ? "text-primary bg-primary-light"
                      : "text-text-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button size="sm" variant="accent" href="/contact" className="w-full">
                  Get Free Audit
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

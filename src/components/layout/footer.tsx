import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FOOTER_COLUMNS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm font-bold text-white">
            Service Ops<span className="text-blue-400"> AI</span>
          </p>
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Service Ops AI. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

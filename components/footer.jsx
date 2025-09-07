"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, Award, Phone, Mail, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/config";

function SmallLink({ href, children }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
  return (
    <Link
      href={href}
      className={[
        "text-xs md:text-sm leading-none transition underline-offset-4 whitespace-nowrap",
        active ? "text-emerald-700 underline decoration-2"
               : "text-slate-500 hover:text-slate-800 hover:underline",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default function Footer({ compact = true }) {
  const phone = SITE?.phone || "+17206908765";
  const phoneDisplay = SITE?.phoneDisplay || "(720) 690-8765";
  const email = SITE?.email || "hello@robinstouch.com";

  return (
    <footer className={["border-t bg-white", compact ? "py-5 md:py-6" : "py-8"].join(" ")}>
      <div className="wrap">
        {/* Single row on md+: left (brand+badges) | center (nav) | right (actions) */}
        <div className="flex flex-col gap-3 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
          {/* Left: brand + badges inline */}
          <div className="flex items-center gap-3">
            <p className="text-sm font-semibold text-slate-900 leading-none">
              Robin’s Touch Senior Care
            </p>
            <div className="hidden md:flex items-center gap-2">
              <span className="inline-flex h-7 items-center gap-1.5 rounded-full border bg-emerald-50 px-3 text-[11px] font-medium text-emerald-800 leading-none">
                <ShieldCheck className="h-3.5 w-3.5" /> CPR Certified
              </span>
              <span className="inline-flex h-7 items-center gap-1.5 rounded-full border bg-emerald-50 px-3 text-[11px] font-medium text-emerald-800 leading-none">
                <Award className="h-3.5 w-3.5" /> 25+ Years
              </span>
            </div>
          </div>

          {/* Center: menu (same baseline) */}
          <nav className="flex items-center justify-center gap-3 md:gap-4 whitespace-nowrap leading-none">
            <SmallLink href="/">Home</SmallLink>
            <SmallLink href="/services">Services</SmallLink>
            <SmallLink href="/pricing">Pricing</SmallLink>
            <SmallLink href="/request-care">Request Care</SmallLink>
            <SmallLink href="/contact">Contact</SmallLink>
          </nav>

          {/* Right: phone/email/CTA inline */}
          <div className="flex items-center justify-start md:justify-end gap-3 md:gap-4 leading-none">
            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900"
            >
              <Phone className="h-4 w-4" /> {phoneDisplay}
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900"
            >
              <Mail className="h-4 w-4" /> {email}
            </a>
            <Link
              href="/request-care"
              className="inline-flex h-9 md:h-10 items-center gap-1.5 rounded-xl bg-emerald-600 px-4 text-white text-sm font-medium hover:bg-emerald-700"
            >
              Request Care <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Tiny copyright below, no extra nav */}
        <p className="mt-3 text-center md:text-left text-xs text-slate-500">
          © {new Date().getFullYear()} Robin’s Touch Senior Care
        </p>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, Award, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/config";

function SmallLink({ href, children }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
  return (
    <Link
      href={href}
      className={[
        "text-xs md:text-sm leading-none underline-offset-4 whitespace-nowrap transition",
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
    <footer className={`border-t bg-white ${compact ? "py-5 md:py-6" : "py-8"}`}>
      <div className="wrap">
        {/* md+: left (brand + badges under) | center (2 links) | right (email over phone) */}
        <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-start">
          {/* LEFT: brand with badges beneath */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-900 leading-none">
              Robin's Touch Senior Care
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex h-7 items-center gap-1.5 rounded-full border bg-emerald-50 px-3 text-[11px] font-medium text-emerald-800 leading-none">
                <ShieldCheck className="h-3.5 w-3.5" /> CPR Certified
              </span>
              <span className="inline-flex h-7 items-center gap-1.5 rounded-full border bg-emerald-50 px-3 text-[11px] font-medium text-emerald-800 leading-none">
                <Award className="h-3.5 w-3.5" /> 25+ Years
              </span>
            </div>
          </div>

          {/* CENTER: exactly two links, aligned to top */}
          <nav className="flex items-start justify-center gap-4 leading-none">
            <SmallLink href="/">Home</SmallLink>
            <SmallLink href="/request">Request Care</SmallLink>
          </nav>

          {/* RIGHT: email on top, phone under */}
          <div className="flex flex-col items-start md:items-end gap-2 leading-none">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900"
            >
              <Mail className="h-4 w-4" /> {email}
            </a>
            <a
              href={`tel:${phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900"
            >
              <Phone className="h-4 w-4" /> {phoneDisplay}
            </a>
          </div>
        </div>

        <p className="mt-3 text-center md:text-left text-xs text-slate-500">
          © {new Date().getFullYear()} Robin's Touch Senior Care
        </p>
      </div>
    </footer>
  );
}

import { ShieldCheck, ClipboardCheck, Sparkles, MapPin, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-emerald-50/60 border-t mt-16">
      <div className="container-max">
        <div className="py-12 grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-extrabold text-slate-900">{SITE.brandName}</h4>
            <p className="p-muted mt-2 max-w-sm">
              Compassionate Senior Care across Denver Metro.
            </p>
            <div className="mt-3 text-sm text-slate-700">
              <p className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> CPR‑Certified</p>
              <p className="flex items-center gap-2"><ClipboardCheck className="w-4 h-4" /> Background Check</p>
              <p className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> 25+ years experience</p>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-slate-900">Contact</h5>
            <ul className="mt-3 space-y-1 text-slate-700 text-sm">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {SITE.city}</li>
              <li>
                <a className="inline-flex items-center gap-2 hover:text-teal-700" href={`tel:${SITE.phone}`}>
                  <Phone className="w-4 h-4" /> {SITE.phoneDisplay}
                </a>
              </li>
              <li>
  <a className="inline-flex items-center gap-2 hover:text-teal-700" href={`mailto:${SITE.email}`}>
    <Mail className="w-4 h-4" /> {SITE.email}
  </a>
</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-slate-900">Quick Links</h5>
            <ul className="mt-3 space-y-1 text-slate-700 text-sm">
              <li><Link className="hover:text-teal-700" href="/services">Services</Link></li>
              <li><Link className="hover:text-teal-700" href="/pricing">Pricing</Link></li>
              <li><Link className="hover:text-teal-700" href="/request">Request Care</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t py-6 text-center text-xs text-slate-500">
          © 2025 Robin’s Touch Senior Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

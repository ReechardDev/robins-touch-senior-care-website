// components/CarePlansAndAreas.jsx
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    title: "Standard",
    subtitle: "Companionship & light help",
    features: [
      "Conversation & light activities",
      "Light housekeeping & meals",
      "Daily check-ins",
    ],
  },
  {
    title: "Essentials",
    subtitle: "Appointments & coordination",
    features: ["Everything in Standard", "Appointments & errands", "Care coordination"],
  },
  {
    title: "Premium",
    subtitle: "Expanded hours & respite",
    features: ["Expanded weekly hours", "Respite care block", "Priority scheduling"],
  },
];

export default function CarePlansAndAreas() {
  return (
    <section id="care-plans" className="py-20 bg-[#fff9f0]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <p className="text-center text-[11px] font-semibold tracking-widest text-emerald-700">
          PRICING
        </p>
        <h2 className="mt-2 text-center text-3xl md:text-4xl font-semibold">Care Plan</h2>
        <p className="mt-2 text-center text-slate-600">Simple rates. No long contracts.</p>

        {/* Plan cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.title} className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.subtitle}</p>

              <ul className="mt-4 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 aria-hidden className="h-5 w-5 mt-0.5" />
                    <span className="text-slate-800">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Funnel to full pricing */}
              <Link
                href="/pricing"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-2.5 text-white font-semibold shadow hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                See all clear plan
              </Link>
            </div>
          ))}
        </div>

        {/* Areas Served + CTA (also funnels to /pricing) */}
        <div className="mt-16 rounded-3xl border border-emerald-200 bg-[#fff9f0] p-10 text-center">
          <p className="text-[11px] font-semibold tracking-widest text-emerald-700">AREAS SERVED</p>
          <h3 className="mx-auto mt-2 max-w-4xl text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">
            Denver · Aurora · Lakewood · Littleton · Arvada · Englewood · Westminster
          </h3>
          <p className="mt-2 text-slate-600">More areas by request</p>

          <Link
            href="/pricing"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-white font-semibold shadow hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Request Care
          </Link>
        </div>
      </div>
    </section>
  );
}

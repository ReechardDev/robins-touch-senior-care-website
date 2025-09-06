// app/pricing/page.js

export const metadata = {
  title: "Pricing | Senior Care Website",
  description:
    "Simple, transparent care options. Choose a plan and customize with add-ons.",
};

const plans = [
  {
    name: "Hourly Companion Care",
    note: "Flexible daytime support",
    price: "$30",
    features: [
      "Conversation & light activities",
      "Light housekeeping & meals",
      "Medication reminders",
    ],
    popular: false,
  },
  {
    name: "Daily Support",
    note: "Most families choose this",
    price: "$150",
    features: [
      "Personal care & mobility help",
      "Meal prep & routine support",
      "Caregiver check-ins",
    ],
    popular: true,
  },
  {
    name: "Overnight / 24-hr Care",
    note: "Continuous safety & reassurance",
    price: "$80",
    features: [
      "Bedtime & morning routines",
      "Nighttime assistance",
      "Frequent safety checks",
    ],
    popular: false,
  },
];

const addons = [
  {
    title: "Transportation & Appointments",
    bullets: ["Clinic visits", "Errands & pharmacy runs", "Post-visit notes"],
  },
  {
    title: "Post-Hospital Support",
    bullets: ["Follow discharge plan", "Meal prep", "Vitals & wellness logs"],
  },
  {
    title: "Memory Care Enhancements",
    bullets: ["Calming routines", "Wandering awareness", "Family updates"],
  },
];

function PlanCard({ plan }) {
  return (
    <div className="relative flex flex-col rounded-3xl border border-emerald-200/40 bg-white p-6 md:p-7 shadow-sm hover:shadow transition">
      {plan.popular && (
        <div className="absolute -top-2 left-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
          Most popular
        </div>
      )}
      <h3 className="text-lg md:text-xl font-semibold text-slate-900">{plan.name}</h3>
      <p className="mt-1 text-sm text-gray-600">{plan.note}</p>

      <div className="mt-4 rounded-xl border border-emerald-200/60 bg-emerald-50/40 px-4 py-2 inline-block text-sm font-medium text-emerald-700">
        {plan.price}
      </div>

      <ul className="mt-5 space-y-2.5">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">✓</span>
            <span className="text-gray-700 leading-snug">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 md:mt-auto pt-1 border-t border-transparent">
        <a
          href="/contact"
          className="inline-flex rounded-xl border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50 hover:shadow-sm transition"
        >
          Request Care
        </a>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="bg-[#f7faf9]">
      {/* PRICING + ADD-ONS (one page before footer) */}
      <section className="bg-[#b8f2e3]/25 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-[11px] font-medium tracking-wider text-emerald-700">PRICING</span>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">Simple options, personalized care</h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Pick the support that fits today. We’ll tailor hours and tasks after a free assessment.
          </p>

          {/* Plans */}
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>

          {/* Add-ons grid with CTA inline (Billing removed) */}
          <div className="mt-12 grid gap-7 md:grid-cols-3 items-stretch">
            {addons.map((a) => (
              <div
                key={a.title}
                className="rounded-3xl border border-emerald-200/40 bg-white p-6 md:p-7 shadow-sm hover:shadow transition"
              >
                <h3 className="text-base md:text-lg font-semibold text-slate-900">{a.title}</h3>
                <ul className="mt-3 space-y-2.5">
                  {a.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">
                        ✓
                      </span>
                      <span className="text-gray-700 leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* CTA inline under add-ons (spans all columns) */}
            <div className="md:col-span-3 text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Book a free assessment
                </a>
                <a
                  href="/services"
                  className="inline-flex rounded-2xl border border-emerald-600 px-5 py-3 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
                >
                  See services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer is pinned globally in layout */}
    </main>
  );
}

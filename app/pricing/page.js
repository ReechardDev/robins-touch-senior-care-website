// app/pricing/page.js

export const metadata = {
  title: "Pricing | Robin’s Touch Senior Care (Denver, CO)",
  description:
    "Simple, transparent care pricing in the Denver Metro. Hourly companion care, daily support, and overnight options. Book a free assessment.",
};

const plans = [
  {
    name: "Hourly Companion Care",
    note: "Flexible daytime support",
    price: "$30",
    unit: "hr",
    features: ["Conversation & light activities", "Light housekeeping & meals", "Medication reminders"],
    popular: false,
  },
  {
    name: "Daily Support",
    note: "Most families choose this",
    price: "$100",
    unit: "day",
    features: ["Personal care & mobility help", "Meal prep & routine support", "Caregiver check-ins"],
    popular: true,
  },
  {
    name: "Overnight / 24-hr Care",
    note: "Continuous safety & reassurance",
    price: "$150",
    unit: "hr*",
    features: ["Bedtime & morning routines", "Nighttime assistance", "Frequent safety checks"],
    popular: false,
    footnote: "*Adjusts for live-in or 24-hr blocks.",
  },
];

const addons = [
  { title: "Transportation & Appointments", bullets: ["Clinic visits", "Errands & pharmacy runs", "Post-visit notes"] },
  { title: "Post-Hospital Support", bullets: ["Follow discharge plan", "Meal prep", "Vitals & wellness logs"] },
  { title: "Memory Care Enhancements", bullets: ["Calming routines", "Wandering awareness", "Family updates"] },
];

function PlanCard({ plan }) {
  const link = `/request?plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(
    plan.price
  )}&unit=${encodeURIComponent(plan.unit)}`;

  return (
    <article
      className={`relative h-full flex flex-col rounded-3xl border bg-cream p-5 md:p-6 shadow-sm hover:shadow transition
        ${plan.popular ? "border-emerald-300 ring-1 ring-emerald-600/10" : "border-emerald-200/40"}`}
    >
      {plan.popular && (
        <span className="absolute -top-2 left-4 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-semibold text-white shadow">
          Most popular
        </span>
      )}

      <h3 className="text-base md:text-lg font-semibold text-slate-900">{plan.name}</h3>
      <p className="mt-1 text-xs md:text-sm text-gray-600">{plan.note}</p>

      <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
        {plan.price}
        <span className="text-sm md:text-base font-medium text-slate-500">/{plan.unit}</span>
      </p>

      <ul className="mt-4 space-y-2">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">✓</span>
            <span className="text-[13px] md:text-sm text-gray-700 leading-snug">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 md:mt-auto pt-1">
        <a
          href={link}
          className="inline-flex rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Quick request
        </a>
      </div>

      {plan.footnote && <p className="mt-3 text-[11px] text-slate-500">{plan.footnote}</p>}
    </article>
  );
}

export default function PricingPage() {
  return (
    <main className="bg-[#f7faf9]">
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[11px] font-medium tracking-wider text-emerald-700">PRICING</span>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">Simple options, personalized care</h1>
            <p className="mt-3 mx-auto max-w-2xl text-gray-600">
              Pick the support that fits today. We’ll tailor hours and tasks after a free assessment.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {plans.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 items-stretch">
            {addons.map((a) => (
              <div key={a.title} className="rounded-3xl border border-emerald-200/40 bg-cream p-5 md:p-6 shadow-sm hover:shadow transition">
                <h3 className="text-sm md:text-base font-semibold text-slate-900">{a.title}</h3>
                <ul className="mt-2.5 space-y-2">
                  {a.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">✓</span>
                      <span className="text-[13px] md:text-sm text-gray-700 leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="md:col-span-3 text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-3">
                <a href="/request" className="inline-flex rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                  Book a free assessment
                </a>
                <a href="/services" className="inline-flex rounded-2xl border border-emerald-600 px-5 py-3 text-sm font-medium text-emerald-700 hover:bg-emerald-50">
                  See services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// components/plan-card.jsx
export default function PlanCard({ plan }) {
  return (
    <div className="relative flex flex-col rounded-3xl border border-emerald-200/40 bg-white p-6 md:p-7 shadow-sm hover:shadow transition">
      {plan.popular && (
        <div className="absolute -top-2 left-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
          Most popular
        </div>
      )}

      <h3 className="text-lg md:text-xl font-semibold text-slate-900">{plan.name}</h3>
      <p className="mt-1 text-sm text-gray-600">{plan.note}</p>

      {/* Price pill */}
      <div className="mt-4 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 ring-1 ring-emerald-200/60 text-emerald-700 font-semibold tabular-nums">
        {plan.price}
      </div>

      {/* Features */}
      <ul className="mt-5 space-y-3">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">✓</span>
            <span className="text-gray-700 leading-snug">{f}</span>
          </li>
        ))}
      </ul>

      {/* Breathing room before CTA */}
      <div className="mt-8 pt-4 border-t border-emerald-100/60">
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

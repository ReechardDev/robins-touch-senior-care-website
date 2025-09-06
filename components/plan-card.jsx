// components/plan-card.jsx
export default function PlanCard({ plan }) {
  const link = `/request?plan=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(
    plan.price || ""
  )}&unit=${encodeURIComponent(plan.unit || "")}`;

  return (
    <article
      className={`relative h-full flex flex-col rounded-3xl border bg-white p-5 md:p-6 shadow-sm hover:shadow transition ${
        plan.highlight ? "border-emerald-300 ring-1 ring-emerald-600/10" : "border-emerald-200/40"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-2 left-4 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-semibold text-white shadow">
          Most popular
        </span>
      )}

      <h3 className="text-base md:text-lg font-semibold text-slate-900">{plan.name}</h3>
      {plan.note ? <p className="mt-1 text-xs md:text-sm text-gray-600">{plan.note}</p> : null}

      {(plan.price || plan.unit) && (
        <p className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          {plan.price}
          {plan.unit ? <span className="text-sm md:text-base font-medium text-slate-500">/{plan.unit}</span> : null}
        </p>
      )}

      {Array.isArray(plan.features) && plan.features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">✓</span>
              <span className="text-[13px] md:text-sm text-gray-700 leading-snug">{f}</span>
            </li>
          ))}
        </ul>
      )}

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

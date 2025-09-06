// app/request/page.js
export const metadata = {
  title: "Request Care | Robin’s Touch Senior Care (Denver, CO)",
  description:
    "Book a free assessment or request care. Tell us a few details and we’ll confirm schedule and next steps.",
};

import FormClient from "./form-client";

export default function RequestPage({ searchParams }) {
  const selected = {
    plan: searchParams?.plan || "",
    price: searchParams?.price || "",
    unit: searchParams?.unit || "",
  };
  const hasSelected = Boolean(selected.plan);

  return (
    <main className="bg-[#f7faf9]">
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <span className="text-[11px] font-medium tracking-wider text-emerald-700">BOOK ONLINE</span>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-center text-slate-900">Request Care</h1>
          <p className="mt-3 text-center text-gray-600">
            We’ll get back to you to confirm details and schedule.
          </p>

          {hasSelected && (
            <div className="mt-6 flex items-center justify-center">
              <div className="rounded-2xl border border-emerald-300/60 bg-emerald-50/60 px-4 py-2 text-sm text-emerald-800">
                Selected plan: <strong>{selected.plan}</strong>
                {selected.price && selected.unit ? (
                  <> — {selected.price}/<span className="uppercase">{selected.unit}</span></>
                ) : null}
              </div>
            </div>
          )}

          {/* Client-side form that builds an email from the inputs */}
          <FormClient initialSelected={selected} />

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="tel:+17206908765" className="inline-flex rounded-xl border px-5 py-3 font-medium hover:bg-slate-50">
              Call (720) 690-8765
            </a>
            <a href="mailto:miller.76.robin@gmail.com" className="inline-flex rounded-xl border px-5 py-3 font-medium hover:bg-slate-50">
              Email us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

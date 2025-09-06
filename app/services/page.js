// app/services/page.js

export const metadata = {
  title: "Services | Senior Care Website",
  description:
    "In-home senior care services: companion care, personal care, overnight, respite, post-hospital support, and dementia care.",
};

const services = [
  { title: "Companion Care", blurb: "Friendly visits that reduce isolation and help with day-to-day tasks.", features: ["Conversation & activities","Light housekeeping & meals","Safety checks & reminders"] },
  { title: "Personal Care", blurb: "Respectful help with hygiene and mobility to stay comfortable at home.", features: ["Bathing, grooming, dressing","Toileting & incontinence care","Transfers & mobility support"] },
  { title: "Overnight Care", blurb: "Attentive support through the night for peace of mind and safety.", features: ["Bedtime & morning routines","Nighttime assistance","Medication reminders"] },
  { title: "Respite Care", blurb: "Short-term coverage so family caregivers can rest and recharge.", features: ["Flexible schedules","Hourly or daily options","Seamless handoffs"] },
  { title: "Post-Hospital Support", blurb: "Safe transitions home after surgery or a hospital stay.", features: ["Follow discharge plans","Transport & appointments","Meal prep & monitoring"] },
  { title: "Dementia Care", blurb: "Trained caregivers who support memory, routine, and dignity.", features: ["Calming, structured days","Safety & wandering awareness","Family check-ins"] },
];

function ServiceCard({ item }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-cream p-6 md:p-7 shadow-sm hover:shadow transition-shadow">
      <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed">{item.blurb}</p>
      <ul className="mt-5 space-y-2.5">
        {item.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px]">✓</span>
            <span className="text-gray-700 leading-snug">{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        className="mt-6 inline-flex rounded-xl border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50 hover:shadow-sm transition"
      >
        Request Care
      </a>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-[#f7faf9]">
      {/* Services → How it works */}
      <section className="bg-[#b8f2e3]/25 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-[11px] font-medium tracking-wider text-emerald-700">SERVICES</span>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold">Kind, reliable care, tailored to your needs</h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Choose the support that fits today. We’ll personalize your care plan after a free assessment and adjust as needs change.
          </p>

          {/* Services grid */}
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <ServiceCard key={s.title} item={s} />)}
          </div>

          {/* How it works */}
          <div className="mt-14">
            <h2 className="text-lg md:text-xl font-semibold">How it works</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                { step: "1", title: "Free assessment", text: "Tell us about your loved one. We review needs, routines, and preferences." },
                { step: "2", title: "Custom care plan", text: "We propose hours, tasks, and scheduling that fit your family." },
                { step: "3", title: "Care begins", text: "Matched caregiver starts. We check in and adjust as needs evolve." },
              ].map((b) => (
                <div key={b.step} className="rounded-3xl border border-gray-200 bg-cream p-5 shadow-sm">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-medium">{b.step}</div>
                  <h3 className="mt-3 font-semibold">{b.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width CTA */}
      <section className="bg-[#b8f2e3]/25 py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">Not sure where to start?</h3>
          <p className="mt-2 text-gray-600">We’ll help you choose the right level of support in minutes.</p>
          <div className="mt-5 flex justify-center gap-4">
            <a href="/contact" className="inline-flex rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-700">Book a free assessment</a>
            <a href="/pricing" className="inline-flex rounded-2xl border border-emerald-600 px-5 py-3 text-sm font-medium text-emerald-700 hover:bg-emerald-50">See pricing</a>
          </div>
        </div>
      </section>
      {/* Footer is pinned globally in layout */}
    </main>
  );
}

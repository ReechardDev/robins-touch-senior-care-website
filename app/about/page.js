// app/about/page.js

export const metadata = {
  title: "About | Senior Care Website",
  description:
    "Who we are, our mission, and why families trust our caregivers.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Intro */}
      <section className="py-12 md:py-16 bg-[#b8f2e3]/25">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-xs font-semibold tracking-wider text-emerald-700">
            ABOUT US
          </span>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold">
            Compassionate, reliable in-home care
          </h1>
          <p className="mt-3 max-w-2xl text-gray-700">
            We help seniors live safely and comfortably at home with respectful
            support tailored to their routine, preferences, and goals.
          </p>
        </div>
      </section>

      {/* Mission + Why choose us */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl md:text-2xl font-semibold">Our Mission</h2>
              <p className="mt-3 text-gray-700">
                Provide dignified, person-centered care that keeps families
                confident and loved ones independent at home.
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                <li>Respect, kindness, and safety in every visit</li>
                <li>Care plans personalized after a free assessment</li>
                <li>Transparent communication with family</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl md:text-2xl font-semibold">
                Why families choose us
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Licensed & background-checked caregivers",
                  "Professionally trained for mobility & dementia support",
                  "Flexible scheduling (hourly, overnight, live-in)",
                  "Reliable updates and check-ins for family",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white text-xs">
                      ✓
                    </span>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className="mt-6 inline-flex rounded-2xl border border-emerald-600 px-4 py-2 font-medium text-emerald-700 hover:bg-emerald-50 hover:shadow-sm transition"
              >
                Book a free assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip with brand tint */}
      <section className="py-12 md:py-16 bg-[#b8f2e3]/25">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Ready to talk?
          </h3>
          <p className="mt-2 text-gray-700">
            Tell us about your loved one. We’ll suggest a simple plan in minutes.
          </p>
          <div className="mt-5 flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex rounded-2xl bg-emerald-600 px-5 py-3 font-medium text-white hover:bg-emerald-700"
            >
              Contact us
            </a>
            <a
              href="/pricing"
              className="inline-flex rounded-2xl border border-emerald-600 px-5 py-3 font-medium text-emerald-700 hover:bg-emerald-50"
            >
              See pricing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

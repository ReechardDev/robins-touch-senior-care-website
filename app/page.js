import Image from "next/image";
import { SITE } from "@/lib/config";
import SectionTitle from "@/components/section-title";
import Button from "@/components/button";
import {
  Phone,
  ShieldCheck,
  ClipboardCheck,
  Sparkles,
  CalendarClock,
  Users,
  HeartHandshake,
  Clock,
} from "lucide-react";
import PlanCard from '@/components/plan-card';
import TestimonialList from "@/components/testimonial-list";
import BookingForm from "@/components/booking-form";

const BADGE_ICON = { ShieldCheck, ClipboardCheck, Sparkles };

const services = [
  {
    title: "Transportation & Appointments",
    desc: "On-time rides to medical visits, errands, and activities.",
    icon: CalendarClock,
  },
  {
    title: "Companionship",
    desc: "Friendly visits, conversation, gentle walks, and games.",
    icon: Users,
  },
  {
    title: "Light Home Help",
    desc: "Tidy-ups, simple meals, laundry, and light organization.",
    icon: HeartHandshake,
  },
  {
    title: "Daily Check-ins",
    desc: "Quick wellness check calls or in-person drop-ins.",
    icon: Phone,
  },
  {
    title: "Respite Care",
    desc: "Short-term support so family caregivers can rest.",
    icon: Clock,
  },
  {
    title: "Care Coordination",
    desc: "Scheduling, reminders, and helpful follow-ups.",
    icon: ClipboardCheck,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section id="home" className="relative">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${SITE.hero.bgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(20%)",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-cream-50/60" />

        <div className="container-max">
          <div className="py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
                {SITE.headline}
              </h1>
              <p className="text-slate-100/90 mt-4 max-w-xl">{SITE.subcopy}</p>

              <div className="flex flex-wrap items-center gap-3 mt-6">
                <Button href="/request">Request Care</Button>
                <Button href={`tel:${SITE.phone}`} variant="secondary">
                  <Phone className="w-4 h-4 mr-2" /> Call {SITE.phoneDisplay}
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {SITE.trust.map(({ label, icon }) => {
                  const Icon = BADGE_ICON[icon] || ShieldCheck;
                  return (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full bg-white-800/60 text-slate-800 border border-white/70 px-4 py-2 text-xs font-semibold shadow-sm"
                    >
                      <Icon aria-hidden className="w-4 h-4" /> {label}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="relative h-80 md:h-[420px] rounded-3xl border shadow-xl bg-#f7faf9-250/60 backdrop-blur overflow-hidden">
              <Image
                src={SITE.hero.portraitUrl}
                alt="Caregiver portrait"
                fill
                sizes="(min-width: 768px) 420px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-24 bg-#f7faf9">
        <div className="container-max">
          <SectionTitle
            kicker="Services"
            title="Support that meets your family where you are"
            subtitle="Simple, flexible, trust-worthy care"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="card p-6 hover:bg-grey-50/60 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-2xl p-3 bg-white-50 border">
                    <Icon aria-hidden className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900">
                      {title}
                    </h3>
                    <p className="p-muted mt-1">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="py-12 md:py-16 bg-teal-50/60 border-y" id="request-cta">
        <div className="container-max">
          <div className="card bg-cream p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">
                Ready to get started?
              </h3>
              <p className="p-muted mt-1 max-w-xl">
                Tell us what you need and we’ll build a simple care plan together.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button href="/request">Request Care</Button>
              <Button href={`tel:${SITE.phone}`} variant="secondary">
                <Phone className="w-4 h-4 mr-2" /> Call {SITE.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 md:py-24 bg-teal-250">
        <div className="container-max">
          <SectionTitle
            kicker="Pricing"
            title="Care Plan"
            subtitle={SITE.pricingNote}
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SITE.plans.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/request" className="btn btn-primary">
              Request Care
            </a>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section id="areas" className="py-16 md:py-24 bg-cream 300 border-y">
        <div className="container-max">
          <div className="max-w-5xl mx-auto text-center">
            <SectionTitle
              kicker="Areas Served"
              title={SITE.areas.join(" · ")}
              subtitle="More areas by request"
            />
            <Button href="/request">Request Care</Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialList />

     {/* CONTACT PREVIEW + BOOKING */}
<section id="contact" className="bg-[cream]/25 py-12 md:py-16">
  <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
    <div className="text-center md:text-left">
      <SectionTitle
        kicker="Contact"
        title="Request a quote or book a visit"
        subtitle="Transparent pricing, flexible scheduling, and friendly support."
      />
    </div>
    <BookingForm />
  </div>
</section>
    </div>
  );
}

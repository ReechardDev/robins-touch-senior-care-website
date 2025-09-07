// app/pricing/page.js
import { SITE } from "@/lib/config";
import PlanCard from "@/components/plan-card";

export default function PricingPage() {
  return (
    <main>
      <section className="py-12 md:py-16" style={{ backgroundColor: "#f7faf9" }}>
        <div className="container-max px-4 grid gap-6 md:grid-cols-3">
          {SITE.plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </section>
    </main>
  );
}

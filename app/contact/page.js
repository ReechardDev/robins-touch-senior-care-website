import SectionTitle from "@/components/section-title";
import BookingForm from "@/components/booking-form";
import { SITE } from "@/lib/config";

export default function ContactPage() {
  return (
    <div className="container-max">
      <div className="py-16 md:py-24">
        <div className="card bg-emerald-50/60 p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <SectionTitle
                kicker="Contact"
                title="Request a quote or book a visit"
                subtitle="Transparent pricing, flexible scheduling, and friendly support."
              />
              <div className="p-muted space-y-2">
                <p><strong>Phone:</strong> {SITE.phoneDisplay}</p>
                <p><strong>Email:</strong> {SITE.email}</p>
                <p><strong>City:</strong> {SITE.city}</p>
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}

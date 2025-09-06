import SectionTitle from "@/components/section-title";
import BookingForm from "@/components/booking-form";

export default function RequestPage() {
  return (
    <div className="container-max">
      <div className="py-16 md:py-24">
        <div className="card bg-emerald-50/60 p-6 md:p-10">
          <SectionTitle
            kicker="Book Online"
            title="Request Care"
            subtitle="We’ll get back to you to confirm details and schedule."
          />
          <div className="max-w-5xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}

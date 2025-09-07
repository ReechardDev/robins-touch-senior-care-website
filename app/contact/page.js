// app/contact/page.js
import SectionTitle from "@/components/section-title";
import BookingForm from "@/components/booking-form";

export const metadata = {
  title: "Contact | Robin’s Touch Senior Care (Denver, CO)",
  description:
    "Request a quote or book a visit. Transparent pricing, flexible scheduling, and friendly support.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#f7faf9]">
      <section className="py-12 md:py-16">
        <div className="container-max">
          <div className="card bg-#white-50/60 p-6 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Centered heading + subheading */}
              <div className="md:self-center">
                <div className="text-center max-w-md mx-auto mt-2 md:mt-4">
                  <SectionTitle
                    kicker="Contact"
                    title="Request a quote or book a visit"
                    subtitle="Transparent pricing, flexible scheduling, and friendly support."
                  />
                </div>
              </div>

              {/* Booking form (unchanged layout) */}
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

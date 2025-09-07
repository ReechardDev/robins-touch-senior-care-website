// components/booking-form.jsx
"use client";
import { useState } from "react";
import Button from "@/components/button";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/config";

export default function BookingForm({ compact = false }) {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setMessage(data.message || "Thanks! We’ll reach out shortly.");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err.message);
    }
  }

  return (
    <section className="section-tight">
      <div className="wrap-narrow hflow">
        {/* Heading */}
        <div className="text-center space-y-2">
          <span className="kicker">Book Online</span>
          <h2 className="h2">Request Care</h2>
          <p className="p-muted">
            We’ll get back to you to confirm details and schedule.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card bg-white card-pad">
          <div className={`grid gap-4 ${compact ? "grid-cols-1" : "md:grid-cols-2"}`}>
            <input
              required name="name" placeholder="Your name"
              className="h-11 rounded-xl border bg-white px-3"
            />
            <input
              required name="phone" placeholder="Phone number"
              className="h-11 rounded-xl border bg-white px-3"
            />
            <input
              name="email" placeholder="Email (optional)"
              className="h-11 rounded-xl border bg-white px-3 md:col-span-2"
            />
            <input
              name="city" placeholder="City/Neighborhood"
              className="h-11 rounded-xl border bg-white px-3"
            />
            <select
              name="service"
              className="h-11 rounded-xl border bg-white px-3"
              defaultValue="Companionship"
            >
              <option>Transportation & Appointments</option>
              <option>Companionship</option>
              <option>Light Home Help</option>
              <option>Daily Check-ins</option>
              <option>Respite Care</option>
              <option>Care Coordination</option>
            </select>
            <textarea
              name="notes"
              placeholder="Notes / preferred time"
              rows={4}
              className="min-h-[120px] rounded-xl border bg-white p-3 md:col-span-2"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <Button type="submit">Request Care</Button>
            <Button href={`tel:${SITE.phone}`} variant="secondary">
              <Phone className="w-4 h-4 mr-2" /> Call {SITE.phoneDisplay}
            </Button>
          </div>

          {status !== "idle" && (
            <p
              className={`mt-3 text-sm ${
                status === "success"
                  ? "text-teal-700"
                  : status === "error"
                  ? "text-red-600"
                  : "text-slate-600"
              }`}
            >
              {status === "loading" ? "Sending..." : message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

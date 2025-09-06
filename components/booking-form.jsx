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
    <form onSubmit={handleSubmit} className="card p-6 bg-white">
      <div className={`grid ${compact ? "grid-cols-1" : "md:grid-cols-2"} gap-4`}>
        <input required name="name" placeholder="Your name" className="rounded-xl border p-3" />
        <input required name="phone" placeholder="Phone number" className="rounded-xl border p-3" />
        <input name="email" placeholder="Email (optional)" className="rounded-xl border p-3 md:col-span-2" />
        <input name="city" placeholder="City" className="rounded-xl border p-3" />
        <select name="service" className="rounded-xl border p-3">
          <option>Transportation & Appointments</option>
          <option>Companionship</option>
          <option>Light Home Help</option>
          <option>Daily Check-ins</option>
          <option>Respite Care</option>
          <option>Care Coordination</option>
        </select>
        <textarea name="notes" placeholder="Notes / preferred time" className="rounded-xl border p-3 md:col-span-2" rows={3} />
      </div>

      <div className="flex flex-wrap items-center gap-3 mt-4">
        <Button>Request Care</Button>
        <Button href={`tel:${SITE.phone}`} variant="secondary">
          <Phone className="w-4 h-4 mr-2" /> Call {SITE.phoneDisplay}
        </Button>
      </div>

      {status !== "idle" && (
        <p className={`mt-3 text-sm ${status === "success" ? "text-teal-700" : status === "error" ? "text-red-600" : "text-slate-600"}`}>
          {status === "loading" ? "Sending..." : message}
        </p>
      )}
    </form>
  );
}

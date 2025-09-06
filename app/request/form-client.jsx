// app/request/form-client.jsx
"use client";

import { useMemo } from "react";

export default function FormClient({ initialSelected }) {
  const selected = useMemo(
    () => ({
      plan: initialSelected?.plan || "",
      price: initialSelected?.price || "",
      unit: initialSelected?.unit || "",
    }),
    [initialSelected]
  );

  const subject = `Care Request — ${selected.plan || "General Inquiry"}`;

  function handleEmailSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = [
      `Name: ${form.get("name") || "-"}`,
      `Phone: ${form.get("phone") || "-"}`,
      `City/Area: ${form.get("area") || "-"}`,
      `Service: ${form.get("service") || "-"}`,
      `Hours/Week: ${form.get("hours") || "-"}`,
      `Preferred Times: ${form.get("times") || "-"}`,
      selected.plan ? `Selected Plan: ${selected.plan} — ${selected.price}/${(selected.unit || "").toUpperCase()}` : "",
      "",
      "Notes:",
      `${form.get("notes") || "-"}`,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:miller.76.robin@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleEmailSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
      <input required name="name" placeholder="Your name" className="rounded-xl border px-3 py-2" />
      <input required name="phone" type="tel" placeholder="Phone number" className="rounded-xl border px-3 py-2" />
      <input name="area" placeholder="City/Neighborhood" className="rounded-xl border px-3 py-2 sm:col-span-2" />

      <select name="service" className="rounded-xl border px-3 py-2">
        <option>Companionship</option>
        <option>Personal Care</option>
        <option>Overnight</option>
        <option>Post-Hospital</option>
        <option>Transportation</option>
        <option>Dementia Care</option>
      </select>

      <input name="hours" placeholder="Hours per week (approx.)" className="rounded-xl border px-3 py-2" />
      <input name="times" placeholder="Preferred times (e.g., weekdays 10–2)" className="rounded-xl border px-3 py-2 sm:col-span-2" />

      <textarea name="notes" rows={4} placeholder="Anything we should know?" className="rounded-xl border px-3 py-2 sm:col-span-2" />

      <button className="sm:col-span-2 rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700">
        Send Request by Email
      </button>
    </form>
  );
}

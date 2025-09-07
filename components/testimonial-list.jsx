"use client";

import { useCallback, useEffect, useState } from "react";

export default function TestimonialList({ page = 1, pageSize = 6 }) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("idle");

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const res = await fetch(`/api/testimonials?page=${page}&pageSize=${pageSize}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Failed to load testimonials");
      const data = await res.json();
      setItems(Array.isArray(data?.items) ? data.items : []);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }, [page, pageSize]);

  useEffect(() => {
    load();
  }, [load]); // eslint-satisfied; load is memoized

  if (status === "error") {
    return (
      <section className="section-tight">
        <div className="wrap">
          <p className="p-muted">Testimonials are unavailable right now.</p>
        </div>
      </section>
    );
  }

  const skeletons = Array.from({ length: pageSize }, (_, i) => ({ id: `s-${i}` }));

  return (
    <section className="section-tight">
      <div className="wrap">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(status === "loading" ? skeletons : items).map((t, idx) => (
            <article key={t.id ?? idx} className="card card-pad">
              {status === "loading" ? (
                <div className="animate-pulse space-y-3">
                  <div className="h-3 w-28 bg-emerald-100 rounded" />
                  <div className="h-3 w-full bg-emerald-100 rounded" />
                  <div className="h-3 w-3/4 bg-emerald-100 rounded" />
                </div>
              ) : (
                <>
                  <p className="text-sm leading-relaxed text-slate-700">
                    “{t.quote ?? t.text ?? ""}”
                  </p>
                  <div className="mt-3 text-xs text-slate-500">
                    — {t.author ?? t.name ?? "Client"}
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

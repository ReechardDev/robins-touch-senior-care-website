"use client";
import { useEffect, useState } from "react";
import SectionTitle from "@/components/section-title";
import Button from "@/components/button";

export default function TestimonialList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 6;

  async function load(p = 1) {
    const res = await fetch(`/api/testimonials?page=${p}&pageSize=${pageSize}`);
    const data = await res.json();
    setItems(p === 1 ? data.items : [...items, ...data.items]);
    setHasMore(data.hasMore);
  }

  useEffect(() => { load(1); }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container-max">
        <SectionTitle
          kicker="Testimonials"
          title="Families trust Robin’s Touch"
          subtitle="Real experiences from clients across Denver Metro"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure key={i} className="card p-6 bg-emerald-50/60">
              <blockquote className="text-slate-800">“{t.quote}”</blockquote>
              <figcaption className="p-muted mt-3">— {t.name}, {t.city}</figcaption>
            </figure>
          ))}
        </div>
        <div className="text-center mt-8">
          {hasMore ? (
            <Button variant="secondary" onClick={() => { const np = page + 1; setPage(np); load(np); }}>
              Load more testimonials
            </Button>
          ) : (
            <p className="p-muted text-sm">No more testimonials.</p>
          )}
        </div>
      </div>
    </section>
  );
}

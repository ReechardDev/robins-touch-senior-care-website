// components/button.jsx
"use client";
export default function Button({ href, children, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold transition " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const variants = {
    primary:  "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-600",
    secondary:"bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50 focus-visible:ring-emerald-600",
    ghost:    "text-emerald-700 hover:bg-emerald-50"
  };
  const cls = [base, variants[variant] || variants.primary, className].join(" ");
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}

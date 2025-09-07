export default function CTA({ children, href = "#", size = "md" }) {
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-12 px-7 text-base",
  };
  return (
    <a
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-xl",
        "bg-emerald-600 text-white font-medium hover:bg-emerald-700",
        sizes[size],
      ].join(" ")}
    >
      {children}
    </a>
  );
}

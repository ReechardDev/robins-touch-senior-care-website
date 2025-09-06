export default function Button({ children, href, variant = "primary", className = "" }) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`;
  const Comp = href ? "a" : "button";
  return <Comp href={href} className={cls}>{children}</Comp>;
}

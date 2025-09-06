export default function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="h2 mt-2">{title}</h2>
      {subtitle && <p className="p-muted mt-3 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

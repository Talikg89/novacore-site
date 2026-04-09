type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 style={{ marginTop: 18 }}>{title}</h2>
      <p className="lede" style={{ marginTop: 14 }}>{description}</p>
    </div>
  );
}

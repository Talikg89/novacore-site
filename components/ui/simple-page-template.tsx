import Link from "next/link";
import { Container } from "@/components/ui/container";

type SimplePageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SimplePageTemplate({
  eyebrow,
  title,
  description,
}: SimplePageTemplateProps) {
  return (
    <main className="page-shell simple-page">
      <Container>
        <section className="panel simple-page-card">
          <span className="eyebrow">{eyebrow}</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}>{title}</h1>
          <p className="lede" style={{ maxWidth: 700 }}>
            {description}
          </p>
          <div className="simple-page-actions">
            <Link href="/" className="button button-primary">
              Back to Home
            </Link>
            <Link href="/contact" className="button button-secondary">
              Contact Support
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}

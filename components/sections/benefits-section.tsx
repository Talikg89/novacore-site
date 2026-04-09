import { benefitCards } from "@/lib/site-content";
import { Container } from "@/components/ui/container";

export function BenefitsSection() {
  return (
    <Container id="benefits" className="stack-section">
      <div className="section-copy section-copy-centered">
        <h2>
          Why <span>Choose NovaCore</span>
        </h2>
        <p>
          Experience a sharper gaming setup with focused desktop optimization for
          smoother frames, lower delay, and cleaner system behavior.
        </p>
      </div>
      <div className="benefits-grid">
        {benefitCards.map((card) => (
          <article key={card.title} className="benefit-card">
            <div className="benefit-icon" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}

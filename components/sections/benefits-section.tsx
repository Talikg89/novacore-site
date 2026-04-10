import { benefitCards } from "@/lib/site-content";
import { Container } from "@/components/ui/container";
import Link from "next/link";

export function BenefitsSection() {
  return (
    <Container id="benefits" className="stack-section">
      <div className="section-copy section-copy-centered">
        <h2>
          Why <span>Choose NovaCore</span>
        </h2>
        <p>
          NovaCore Tweaks focuses on Windows optimization for gamers who want a
          steady FPS boost, reduced input lag, and cleaner system tweaks that
          improve overall gaming performance.
        </p>
        <Link href="/tweaks" className="inline-action-link">
          Learn how NovaCore Tweaks work
        </Link>
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

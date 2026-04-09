import { featureCards } from "@/lib/site-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturesSection() {
  return (
    <Container id="features">
      <SectionHeading
        eyebrow="Features"
        title="Built around gamer outcomes: cleaner frame pacing, lower latency, and harder system control."
        description="NovaCore now reads like a performance toolkit for people chasing a sharper competitive edge, not a bland maintenance app. Every section is tuned to sell responsiveness, stability, and enthusiast-grade Windows control."
      />
      <div className="card-grid">
        {featureCards.map((feature) => (
          <article key={feature.title} className="panel feature-card">
            <span className="feature-tag">{feature.tag}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}

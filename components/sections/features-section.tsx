import { featureCards } from "@/lib/site-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FeaturesSection() {
  return (
    <Container id="features">
      <SectionHeading
        eyebrow="Features"
        title="Built for frame stability, latency-aware tuning, and system control."
        description="NovaCore focuses on tuning the parts of Windows that influence gameplay responsiveness, startup behavior, and background overhead."
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

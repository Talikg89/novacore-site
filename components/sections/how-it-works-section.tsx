import { howItWorksSteps } from "@/lib/site-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function HowItWorksSection() {
  return (
    <Container id="how-it-works">
      <SectionHeading
        eyebrow="How It Works"
        title="From purchase to tuned system in a straight, gamer-friendly flow."
        description="The product journey stays simple: buy NovaCore through Gumroad, receive the installer and key, activate the desktop app, and start applying gaming-focused optimizations."
      />
      <div className="timeline-grid">
        {howItWorksSteps.map((step, index) => (
          <article key={step.title} className="panel timeline-card">
            <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}

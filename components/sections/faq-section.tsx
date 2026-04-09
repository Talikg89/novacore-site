import { faqItems } from "@/lib/site-content";
import { Container } from "@/components/ui/container";

export function FaqSection() {
  return (
    <Container id="faq" className="stack-section">
      <div className="section-copy section-copy-centered">
        <h2>
          Frequently Asked <span>Questions</span>
        </h2>
        <p>Everything users need to know about NovaCore.</p>
      </div>
      <div className="faq-stack">
        {faqItems.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
      <div className="faq-support-card">
        <div className="faq-support-icon">N</div>
        <h3>More questions?</h3>
        <p>
          Reach out to NovaCore support for help with licenses, activation,
          billing questions, and optimization guidance.
        </p>
        <a href="/contact" className="hero-button hero-button-primary">
          Contact Support
        </a>
      </div>
    </Container>
  );
}

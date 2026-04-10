import { gumroadLink } from "@/lib/site-content";
import { Container } from "@/components/ui/container";

export function PurchaseCtaSection() {
  return (
    <Container className="stack-section">
      <article className="content-card cta-band purchase-cta">
        <div>
          <span className="content-kicker">One-Time Purchase</span>
          <h2>NovaCore Personal - $4.99</h2>
          <p>
            Secure checkout via Gumroad with instant access after purchase. Buy
            once and keep NovaCore on your machine with no recurring fees.
          </p>
        </div>
        <div className="cta-band-actions">
          <a
            href={gumroadLink}
            className="hero-button hero-button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now
          </a>
          <a href="/pricing" className="hero-button hero-button-secondary">
            View Pricing
          </a>
        </div>
      </article>
    </Container>
  );
}

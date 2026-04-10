import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { gumroadLink } from "@/lib/site-content";

export function PricingSection() {
  return (
    <Container id="pricing">
      <SectionHeading
        eyebrow="Pricing"
        title="Buy the optimizer once and keep the tuning stack on your machine."
        description="NovaCore is a one-time purchase. Pay once, receive the app, get your personal license key, and download the desktop tool."
      />
      <div className="pricing-wrap">
        <article className="panel pricing-card">
          <div>
            <span className="pricing-label">NovaCore Personal</span>
            <h3 className="pricing-title">Premium gaming and Windows performance tuner</h3>
            <p>
              A one-time purchase for gamers and power users who want performance-focused
              optimization, lower overhead, cleaner startup behavior, tuning
              control, and license-protected activation.
            </p>
          </div>
          <div className="pricing-price-block">
            <span className="pricing-price">$4.99</span>
            <span className="pricing-note">One-time purchase</span>
          </div>
          <div className="pricing-includes">
            <strong>Includes</strong>
            <ul>
              <li>Full app access</li>
              <li>Personal license key</li>
              <li>Download access after purchase</li>
            </ul>
          </div>
          <p className="pricing-trust-text">Secure checkout via Gumroad - Instant access after purchase.</p>
          <div className="cta-row">
            <a
              href={gumroadLink}
              className="button button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy NovaCore
            </a>
            <a href="#faq" className="button button-secondary">
              View License FAQ
            </a>
          </div>
        </article>
      </div>
    </Container>
  );
}

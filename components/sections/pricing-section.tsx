import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PricingSection() {
  return (
    <Container id="pricing">
      <SectionHeading
        eyebrow="Pricing"
        title="Buy the optimizer once and keep the tuning stack on your machine."
        description="NovaCore is positioned like enthusiast software, not a service plan. The purchase language stays direct: pay once, receive the app, get your personal license key, and download the desktop tool."
      />
      <div className="pricing-wrap">
        <article className="panel pricing-card">
          <div>
            <span className="pricing-label">NovaCore Personal</span>
            <h3 className="pricing-title">Premium gaming and Windows performance tuner</h3>
            <p>
              A one-time purchase for gamers and power users who want FPS-focused
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
          <div className="cta-row">
            <Link href="/download" className="button button-primary">
              Buy NovaCore
            </Link>
            <Link href="#faq" className="button button-secondary">
              View License FAQ
            </Link>
          </div>
        </article>
      </div>
    </Container>
  );
}

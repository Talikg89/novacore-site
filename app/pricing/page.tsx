import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage, buildMetadata } from "@/components/ui/content-page";
import { Container } from "@/components/ui/container";
import { gumroadLink } from "@/lib/site-content";

export const metadata: Metadata = buildMetadata(
  "Pricing",
  "NovaCore Personal is a one-time purchase built for gamers who want a cleaner, more responsive Windows setup.",
  "/pricing",
);

export default function PricingPage() {
  return (
    <ContentPage
      eyebrow="Pricing"
      title={
        <>
          Simple, <span>One-Time Pricing</span>
        </>
      }
      description="NovaCore is sold as a one-time purchase so you can keep the performance tools on your machine without recurring fees."
      actions={[
        { href: gumroadLink, label: "Buy NovaCore" },
        { href: "/contact", label: "Talk to Support", variant: "secondary" },
      ]}
    >
      <Container className="content-page-section">
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
              <Link href="/faq" className="button button-secondary">
                View FAQ
              </Link>
            </div>
          </article>
        </div>
      </Container>

      <Container className="content-page-section">
        <article className="content-card cta-band">
          <div>
            <span className="content-kicker">Need help before checkout?</span>
            <h2>Support and activation guidance are ready</h2>
            <p>
              If you have purchase questions, want to confirm compatibility, or
              need help with activation, our support and FAQ pages cover the full
              flow.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link href="/contact" className="hero-button hero-button-primary">
              Contact Support
            </Link>
            <Link href="/activate" className="hero-button hero-button-secondary">
              License Help
            </Link>
          </div>
        </article>
      </Container>
    </ContentPage>
  );
}

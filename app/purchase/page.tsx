import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage, buildMetadata } from "@/components/ui/content-page";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata(
  "Purchase Information",
  "Review the NovaCore purchase flow, checkout expectations, license delivery, and what customers receive after payment.",
  "/purchase",
);

export default function PurchasePage() {
  return (
    <ContentPage
      eyebrow="Purchase"
      title={
        <>
          Checkout & <span>Purchase Info</span>
        </>
      }
      description="This page gives customers confidence before they buy by explaining what they receive, how billing works, and what the post-purchase experience looks like."
      actions={[
        { href: "/download", label: "View Download Page" },
        { href: "/contact", label: "Ask A Question", variant: "secondary" },
      ]}
    >
      <Container className="content-page-section">
        <div className="content-page-grid content-page-grid-3">
          <article className="content-card content-card-highlight">
            <span className="content-kicker">What Customers Buy</span>
            <h2>NovaCore premium access</h2>
            <p>
              Present NovaCore here as a premium Windows optimization product with
              a clean commercial flow, clear delivery expectations, and a defined
              activation experience.
            </p>
          </article>
          <article className="content-card">
            <span className="content-kicker">Billing Model</span>
            <h3>One-time purchase ready</h3>
            <p>
              The current site is written around a one-time purchase model, while
              still leaving room to support premium or recurring billing later if
              your commercial structure changes.
            </p>
          </article>
          <article className="content-card">
            <span className="content-kicker">Secure Checkout</span>
            <h3>Payment handled by your provider</h3>
            <p>
              Replace this with your final checkout provider, accepted payment
              methods, tax wording, invoice behavior, and fraud review rules.
            </p>
          </article>
        </div>
      </Container>

      <Container className="content-page-section">
        <div className="content-page-grid content-page-grid-2">
          <article className="content-card">
            <span className="content-kicker">What Happens After Payment</span>
            <h2>Delivery flow</h2>
            <ol className="content-number-list">
              <li>The order is processed and confirmed through the checkout provider.</li>
              <li>The customer receives purchase confirmation and installer access.</li>
              <li>NovaCore is downloaded and installed on the target Windows system.</li>
              <li>The product is activated through the final license or account flow.</li>
              <li>Premium access unlocks and the customer can begin using the app.</li>
            </ol>
          </article>
          <article className="content-card">
            <span className="content-kicker">Helpful Notes</span>
            <h2>Before customers buy</h2>
            <div className="content-list-block">
              <div>
                <strong>Support contact</strong>
                <p>Use `support@novacore.app` for order questions, delivery problems, or pre-sale clarification.</p>
              </div>
              <div>
                <strong>Refund route</strong>
                <p>Link customers to the Refund Policy so the purchase flow feels transparent and trustworthy.</p>
              </div>
              <div>
                <strong>Activation guidance</strong>
                <p>Point customers to the activation help page if they want to understand license delivery before checkout.</p>
              </div>
            </div>
          </article>
        </div>
      </Container>

      <Container className="content-page-section">
        <article className="content-card cta-band">
          <div>
            <span className="content-kicker">Questions before checkout?</span>
            <h2>Customers should never have to guess what happens after payment</h2>
            <p>
              The purchase, support, and activation pages now work together so the
              buying flow feels commercially polished and ready for launch.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link href="/contact" className="hero-button hero-button-primary">
              Contact Sales & Support
            </Link>
            <Link href="/refund-policy" className="hero-button hero-button-secondary">
              Refund Policy
            </Link>
          </div>
        </article>
      </Container>
    </ContentPage>
  );
}

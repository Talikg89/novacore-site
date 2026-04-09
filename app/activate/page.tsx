import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage, buildMetadata } from "@/components/ui/content-page";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata(
  "License & Activation Help",
  "Get help with NovaCore license delivery, activation steps, premium unlocks, failed activations, and purchase recovery.",
  "/activate",
);

export default function ActivatePage() {
  return (
    <ContentPage
      eyebrow="Activation"
      title={
        <>
          License & <span>Activation Help</span>
        </>
      }
      description="This page explains what happens after purchase, where customers enter their license, how premium unlock works, and what to do if activation fails."
      actions={[
        { href: "/purchase", label: "View Purchase Flow" },
        { href: "/contact", label: "Contact Support", variant: "secondary" },
      ]}
    >
      <Container className="content-page-section">
        <div className="content-page-grid content-page-grid-2">
          <article className="content-card">
            <span className="content-kicker">After Purchase</span>
            <h2>What customers should expect</h2>
            <ol className="content-number-list">
              <li>Checkout completes and the order is confirmed.</li>
              <li>The customer receives download access and the final licensing details.</li>
              <li>NovaCore is downloaded and installed on the target Windows system.</li>
              <li>The customer signs in or enters the license depending on the final launch flow.</li>
              <li>Activation validates the purchase and unlocks premium access.</li>
            </ol>
          </article>
          <article className="content-card content-card-highlight">
            <span className="content-kicker">Where To Enter A License</span>
            <h2>Inside the NovaCore desktop app</h2>
            <p>
              The live product flow should direct users to an activation screen,
              account prompt, or settings area where license validation happens.
              Use this page to explain your final in-app entry point with
              screenshots later if desired.
            </p>
          </article>
        </div>
      </Container>

      <Container className="content-page-section">
        <div className="content-page-grid content-page-grid-3">
          <article className="content-card">
            <span className="content-kicker">Premium Unlock</span>
            <h3>Access begins after validation</h3>
            <p>
              Once the purchase is verified, NovaCore can unlock premium
              functionality, updates, and any product features tied to the
              customer’s plan or license type.
            </p>
          </article>
          <article className="content-card">
            <span className="content-kicker">If Activation Fails</span>
            <h3>Check the usual blockers first</h3>
            <p>
              Confirm the correct purchase email, copy the license carefully,
              verify internet access, make sure the app is up to date, and review
              whether the license is already bound to another machine.
            </p>
          </article>
          <article className="content-card">
            <span className="content-kicker">Recover A Purchase</span>
            <h3>Use support with the order email</h3>
            <p>
              If the license email never arrived or the account can no longer be
              accessed, contact support with the purchase email, order ID, and
              any invoice details available.
            </p>
          </article>
        </div>
      </Container>

      <Container className="content-page-section">
        <article className="content-card cta-band">
          <div>
            <span className="content-kicker">Need a recovery path?</span>
            <h2>Support can help with missing keys, device changes, and failed unlocks</h2>
            <p>
              Activation issues should be routed through support with an order ID,
              purchase email, and a short summary of the error message if one was
              shown inside the app.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link href="/contact" className="hero-button hero-button-primary">
              Contact Support
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

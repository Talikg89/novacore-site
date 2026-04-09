import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage, buildMetadata } from "@/components/ui/content-page";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata(
  "Refund Policy",
  "Review NovaCore refund timing, eligibility, exclusions, and the process for contacting support.",
  "/refund-policy",
);

export default function RefundPolicyPage() {
  return (
    <ContentPage
      eyebrow="Refunds"
      title={
        <>
          Refund <span>Policy</span>
        </>
      }
      description="NovaCore uses a dedicated refund page so customers understand what qualifies, how timing works, and where to submit a request."
      actions={[
        { href: "/contact", label: "Request Support" },
        { href: "/purchase", label: "Purchase Info", variant: "secondary" },
      ]}
    >
      <Container className="content-page-section">
        <div className="content-page-grid content-page-grid-3">
          <article className="content-card content-card-highlight">
            <span className="content-kicker">Standard Window</span>
            <h2>Replace with your real eligibility period</h2>
            <p>
              This page is ready for a one-time purchase or premium billing model.
              Replace the timing below with your final live policy before launch.
            </p>
          </article>
          <article className="content-card">
            <span className="content-kicker">Eligibility</span>
            <h3>Refunds may be reviewed when</h3>
            <p>
              A request is submitted within the stated policy window, the order is
              verifiable, and the request meets your published billing and usage conditions.
            </p>
          </article>
          <article className="content-card">
            <span className="content-kicker">Exclusions</span>
            <h3>Refunds may be denied when</h3>
            <p>
              Requests fall outside the policy window, abuse or fraud is suspected,
              or the order cannot be matched to a valid purchase record.
            </p>
          </article>
        </div>
      </Container>

      <Container className="content-page-section">
        <div className="legal-section-stack">
          <article className="content-card legal-section-card">
            <h2>Eligibility and timing</h2>
            <p>
              NovaCore should define a clear review period for one-time purchases
              and any future recurring billing products. Replace this section with
              your exact live window, such as a 7-day or 14-day request period
              from the date of purchase.
            </p>
            <p>
              If you later introduce subscriptions, add separate rules for renewal
              timing, cancellation cutoffs, and proration expectations.
            </p>
          </article>
          <article className="content-card legal-section-card">
            <h2>How to request a refund</h2>
            <p>
              Refund requests should be sent to `support@novacore.app` with the
              customer name, purchase email, order ID, and a brief summary of the
              issue or reason for the request.
            </p>
            <p>
              Support may ask for additional details to verify the order and
              confirm eligibility under the active billing policy.
            </p>
          </article>
          <article className="content-card legal-section-card">
            <h2>Processing and communication</h2>
            <p>
              If a refund is approved, processing times depend on the payment
              provider and bank. Customers should receive confirmation once the
              request is reviewed and again when the refund is submitted.
            </p>
          </article>
        </div>
      </Container>

      <Container className="content-page-section">
        <article className="content-card cta-band">
          <div>
            <span className="content-kicker">Need help before requesting a refund?</span>
            <h2>Support can often resolve activation or install issues first</h2>
            <p>
              If the problem is related to license delivery, activation, or setup,
              support may be able to restore access quickly without needing a
              billing reversal.
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

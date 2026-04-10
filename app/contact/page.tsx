import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage, buildMetadata } from "@/components/ui/content-page";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata(
  "Contact & Support",
  "Reach NovaCore support for purchase help, activation recovery, troubleshooting, refund requests, and general product questions.",
  "/contact",
);

const supportCards = [
  {
    title: "General Support",
    description:
      "Product questions, setup guidance, account changes, and everyday help for NovaCore customers.",
  },
  {
    title: "Purchase Help",
    description:
      "Order lookup, billing questions, duplicate charges, and pre-purchase clarification for new customers.",
  },
  {
    title: "License & Activation",
    description:
      "Activation recovery, license delivery issues, device changes, and upgrade verification support.",
  },
  {
    title: "Technical Troubleshooting",
    description:
      "Installation issues, launch failures, update questions, and compatibility checks for supported Windows systems.",
  },
  {
    title: "Refund Requests",
    description:
      "Refund eligibility questions, request intake, and purchase review based on the published policy.",
  },
] as const;

export default function ContactPage() {
  return (
    <ContentPage
      eyebrow="Support"
      title={
        <>
          Contact <span>NovaCore Support</span>
        </>
      }
      description="Reach the NovaCore team for setup help, purchase questions, activation recovery, technical troubleshooting, and refund requests."
      actions={[
        { href: "/download", label: "Go to Download" },
        { href: "/", label: "Back to Home", variant: "secondary" },
      ]}
    >
      <Container className="content-page-section">
        <div className="content-page-grid content-page-grid-2">
          <article className="content-card content-card-highlight">
            <span className="content-kicker">Expected Response Time</span>
            <h2>Typical replies within 1 business day</h2>
            <p>
              Most support tickets receive a reply within 24 hours on business
              days. Activation and purchase issues are prioritized so customers
              can get back into the product quickly.
            </p>
            <div className="inline-meta-list">
              <span>`support@novacore.app`</span>
              <span>`legal@novacore.app`</span>
            </div>
          </article>
          <article className="content-card">
            <span className="content-kicker">Best Way To Get Help</span>
            <h2>Include order and device details</h2>
            <p>
              To speed things up, include your Gumroad receipt ID or license ID,
              Windows version, a short description of the issue, and any
              screenshots or error text that help us reproduce the problem.
            </p>
            <div className="content-link-list">
              <Link href="/activate">License & Activation Help</Link>
              <Link href="/refund-policy">Refund Policy</Link>
              <Link href="/faq">Browse FAQ</Link>
            </div>
          </article>
        </div>
      </Container>

      <Container className="content-page-section">
        <div className="section-copy section-copy-centered">
          <h2>
            Support <span>Categories</span>
          </h2>
          <p>Choose the category that best matches your request so it reaches the right support path faster.</p>
        </div>
        <div className="content-page-grid content-page-grid-5">
          {supportCards.map((card) => (
            <article key={card.title} className="content-card support-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </Container>

      <Container className="content-page-section">
        <div className="content-page-grid content-page-grid-support">
          <article className="content-card">
            <span className="content-kicker">Contact Form</span>
            <h2>Send a detailed support request</h2>
            <p>
              Use the form below or email `support@novacore.app`. Include order
              details and device notes so support can respond quickly.
            </p>
            <form
              className="support-form"
              action="mailto:support@novacore.app"
              method="post"
              encType="text/plain"
            >
              <div className="support-form-grid">
                <label className="field">
                  <span>Name</span>
                  <input type="text" name="name" placeholder="Your name" />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input type="email" name="email" placeholder="you@example.com" />
                </label>
              </div>
              <div className="support-form-grid">
                <label className="field">
                  <span>Subject</span>
                  <input type="text" name="subject" placeholder="How can we help?" />
                </label>
                <label className="field">
                  <span>Order / License ID</span>
                  <input type="text" name="orderId" placeholder="Optional" />
                </label>
              </div>
              <label className="field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={8}
                  placeholder="Describe the issue, what you expected, and any errors you saw."
                />
              </label>
              <div className="form-footer">
                <p>
                  Support replies are sent by email. For fastest help, include
                  your Gumroad receipt ID or license ID in the message.
                </p>
                <button type="submit" className="hero-button hero-button-primary">
                  Send Email
                </button>
              </div>
            </form>
          </article>

          <div className="content-side-stack">
            <article className="content-card">
              <span className="content-kicker">Purchase Help</span>
              <h3>Before or after checkout</h3>
              <p>
                Need help with an order, invoice, checkout issue, or missing
                confirmation? Start with `support@novacore.app` and include the
                purchase email used at checkout and your Gumroad receipt ID.
              </p>
            </article>
            <article className="content-card">
              <span className="content-kicker">Activation Help</span>
              <h3>Recover access quickly</h3>
              <p>
                If your key is missing, your device changed, or activation failed,
                the activation help page covers the fastest next steps.
              </p>
              <Link href="/activate" className="inline-action-link">
                Open Activation Guide
              </Link>
            </article>
            <article className="content-card">
              <span className="content-kicker">Refunds</span>
              <h3>Policy and request path</h3>
              <p>
                Refund timing, eligibility, and the request process are outlined
                clearly in the dedicated refund policy.
              </p>
              <Link href="/refund-policy" className="inline-action-link">
                View Refund Policy
              </Link>
            </article>
          </div>
        </div>
      </Container>
    </ContentPage>
  );
}

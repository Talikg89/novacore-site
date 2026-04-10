"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/container";

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

export function ContactClient() {
  const recipientEmail = "gurevich.tal@gmail.com";
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    orderId: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) {
        return prev;
      }
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }

    const nextErrors: Record<string, string> = {};
    if (!formValues.name.trim()) {
      nextErrors.name = "Name is required.";
    }
    if (!formValues.email.trim()) {
      nextErrors.email = "Email is required.";
    }
    if (!formValues.subject.trim()) {
      nextErrors.subject = "Subject is required.";
    }
    if (!formValues.message.trim()) {
      nextErrors.message = "Message is required.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const subject = formValues.subject.trim() || "NovaCore Support";
    const body = [
      `Name: ${formValues.name.trim()}`,
      `Email: ${formValues.email.trim()}`,
      `License ID: ${formValues.orderId.trim()}`,
      "",
      "Message:",
      formValues.message.trim(),
    ].join("\n");

    const mailto = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    const anchor = document.createElement("a");
    anchor.href = mailto;
    anchor.rel = "noreferrer";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.location.href = mailto;
  };

  return (
    <>
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
              Use the form below or email `gurevich.tal@gmail.com`. Include order
              details and device notes so support can respond quickly.
            </p>
            <form
              className="support-form"
              onSubmit={handleSubmit}
              aria-label="Contact support"
            >
              <div className="support-form-grid">
                <label className="field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                  {errors.name ? (
                    <span style={{ color: "#ff9aa9", fontSize: "0.85rem" }}>
                      {errors.name}
                    </span>
                  ) : null}
                </label>
                <label className="field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  {errors.email ? (
                    <span style={{ color: "#ff9aa9", fontSize: "0.85rem" }}>
                      {errors.email}
                    </span>
                  ) : null}
                </label>
              </div>
              <div className="support-form-grid">
                <label className="field">
                  <span>Subject</span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    value={formValues.subject}
                    onChange={handleChange}
                  />
                  {errors.subject ? (
                    <span style={{ color: "#ff9aa9", fontSize: "0.85rem" }}>
                      {errors.subject}
                    </span>
                  ) : null}
                </label>
                <label className="field">
                  <span>Order / License ID</span>
                  <input
                    type="text"
                    name="orderId"
                    placeholder="Optional"
                    value={formValues.orderId}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <label className="field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={8}
                  placeholder="Describe the issue, what you expected, and any errors you saw."
                  value={formValues.message}
                  onChange={handleChange}
                />
                {errors.message ? (
                  <span style={{ color: "#ff9aa9", fontSize: "0.85rem" }}>
                    {errors.message}
                  </span>
                ) : null}
              </label>
              <div className="form-footer">
                <p>
                  Support replies are sent by email. For fastest help, include
                  your Gumroad receipt ID or license ID in the message.
                </p>
                <button
                  type="button"
                  className="hero-button hero-button-primary"
                  onClick={() => handleSubmit()}
                >
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
    </>
  );
}

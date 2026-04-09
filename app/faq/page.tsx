import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage, buildMetadata } from "@/components/ui/content-page";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata(
  "FAQ",
  "Find answers about what NovaCore does, system requirements, safety, activation, refunds, and support.",
  "/faq",
);

const faqItems = [
  {
    question: "What does NovaCore do?",
    answer:
      "NovaCore is a Windows optimization product built for gamers and performance-focused users. It is positioned around reducing overhead, improving responsiveness, cleaning startup behavior, and helping users tune their systems for smoother play.",
  },
  {
    question: "Who is NovaCore for?",
    answer:
      "NovaCore is aimed at gamers, competitive players, power users, and anyone who wants a cleaner, faster-feeling Windows setup with more control over performance behavior.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "NovaCore is intended for modern Windows gaming systems, with support focused on Windows 10 22H2 or later and Windows 11. Administrator access may be required for parts of the setup and optimization flow.",
  },
  {
    question: "How does purchase work?",
    answer:
      "Customers purchase NovaCore through the checkout flow, receive access to the installer, and then activate the product using the standard NovaCore license delivery and validation process.",
  },
  {
    question: "How does license activation work?",
    answer:
      "After purchase, the customer opens NovaCore, signs in if needed, and enters or validates the license through the activation flow. The activation help page explains recovery steps if anything fails.",
  },
  {
    question: "Will NovaCore boost FPS?",
    answer:
      "NovaCore is marketed around improving system conditions that can help frame stability, responsiveness, startup load, and background overhead. Actual results depend on hardware, Windows state, installed software, and the game being played.",
  },
  {
    question: "Are the tweaks safe?",
    answer:
      "NovaCore is presented as a guided commercial product, not a random tweak pack. Customers should still review guidance, understand compatibility, and contact support if they are unsure about a change on their machine.",
  },
  {
    question: "How do refunds work?",
    answer:
      "Refunds are handled according to the dedicated Refund Policy, which should define timing, eligibility, and how to submit a request through support.",
  },
  {
    question: "How does support work?",
    answer:
      "Support requests can be submitted through the contact page or by email. Customers should include order details, license identifiers, and device information when relevant so the team can help faster.",
  },
] as const;

export default function FaqPage() {
  return (
    <ContentPage
      eyebrow="FAQ"
      title={
        <>
          Frequently Asked <span>Questions</span>
        </>
      }
      description="This standalone FAQ page gives NovaCore a proper knowledge base entry point for buyers, customers, and users evaluating activation, safety, support, and system fit."
      actions={[
        { href: "/contact", label: "Contact Support" },
        { href: "/download", label: "Go to Download", variant: "secondary" },
      ]}
    >
      <Container className="content-page-section">
        <div className="faq-stack">
          {faqItems.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
      <Container className="content-page-section">
        <article className="content-card cta-band">
          <div>
            <span className="content-kicker">Still need help?</span>
            <h2>Support, purchase, and activation guidance are one click away</h2>
            <p>
              If your question is not answered here, use the support center or
              the activation guide for faster issue-specific help.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link href="/contact" className="hero-button hero-button-primary">
              Open Support
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

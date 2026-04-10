import type { Metadata } from "next";
import { ContentPage, buildMetadata } from "@/components/ui/content-page";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata(
  "Terms of Service",
  "Read the NovaCore terms covering software use, licenses, payments, acceptable use, disclaimers, and support responsibilities.",
  "/terms",
);

const sections = [
  {
    title: "1. Agreement to the terms",
    body: [
      "These Terms of Service govern use of the NovaCore website, software, downloads, licensing systems, support channels, and related services provided by NovaCore. By accessing NovaCore, you agree to these terms.",
    ],
  },
  {
    title: "2. Use of the software",
    body: [
      "NovaCore is provided as a Windows optimization product intended for legitimate performance tuning, workflow improvement, and system management. You agree to use the software only in compliance with applicable law and platform rules.",
      "You are responsible for reviewing documentation, checking compatibility, and using the product in a way that fits your own device and environment.",
    ],
  },
  {
    title: "3. Accounts and user responsibilities",
    body: [
      "If NovaCore uses an account system, you are responsible for keeping login credentials, purchase emails, and device access secure. You are also responsible for the accuracy of the information you provide during purchase, support, or account recovery.",
    ],
  },
  {
    title: "4. License terms",
    body: [
      "NovaCore is licensed, not sold. Your purchase grants a limited, revocable, non-transferable license to use the software according to the plan or license type you purchased.",
      "License scope may include device-based activation, account-linked access, version entitlement rules, or feature unlock conditions. Unauthorized sharing, resale, or misuse of keys or accounts may result in suspension or termination.",
    ],
  },
  {
    title: "5. Acceptable use",
    body: [
      "You may not reverse engineer, redistribute, sublicense, abuse activation systems, interfere with service integrity, attempt to bypass licensing controls, use NovaCore in connection with unlawful activity, or misuse support channels.",
    ],
  },
  {
    title: "6. Payments and access",
    body: [
      "NovaCore is currently sold as a one-time purchase. Prices, taxes, and purchase terms displayed in the Gumroad checkout control the transaction.",
      "Access begins after successful payment verification and may depend on activation, account status, and device validation.",
    ],
  },
  {
    title: "7. Termination and suspension",
    body: [
      "We may suspend or terminate access to NovaCore if we reasonably believe a customer has violated these terms, abused the licensing system, engaged in fraud, or materially interfered with the product or service.",
      "Customers may stop using the product at any time. Refunds, if any, are governed by the Refund Policy.",
    ],
  },
  {
    title: "8. Disclaimer of warranties",
    body: [
      "NovaCore is provided on an as-is and as-available basis unless otherwise required by law. We do not guarantee uninterrupted availability, error-free operation, compatibility with every hardware configuration, or specific performance outcomes on every system.",
    ],
  },
  {
    title: "9. Limitation of liability",
    body: [
      "To the maximum extent permitted by law, NovaCore will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, revenue, data, goodwill, or business interruption arising from use of NovaCore.",
      "Where legally permitted, total liability is limited to the amount paid by the customer for the applicable product or service during the relevant claim period.",
    ],
  },
  {
    title: "10. Contact information",
    body: [
      "Questions about these terms can be sent to `legal@novacore.app` or mailed to NovaCore, Tel Aviv, Israel. Product and billing support requests should go to `support@novacore.app`.",
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Terms"
      title={
        <>
          Terms of <span>Service</span>
        </>
      }
      description="These terms cover software use, licensing, payments, product access, and service limitations."
      actions={[
        { href: "/pricing", label: "Pricing" },
        { href: "/privacy", label: "Privacy Policy", variant: "secondary" },
      ]}
    >
      <Container className="content-page-section">
        <article className="content-card legal-callout">
          <div>
            <span className="content-kicker">Last Updated</span>
            <h2>April 9, 2026</h2>
          </div>
          <p>
            These terms apply to the NovaCore website, software downloads,
            licensing systems, Gumroad checkout flow, and customer support services.
          </p>
        </article>
      </Container>
      <Container className="content-page-section">
        <div className="legal-section-stack">
          {sections.map((section) => (
            <article key={section.title} className="content-card legal-section-card">
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </Container>
    </ContentPage>
  );
}

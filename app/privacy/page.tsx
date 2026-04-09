import type { Metadata } from "next";
import { ContentPage, buildMetadata } from "@/components/ui/content-page";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata(
  "Privacy Policy",
  "Read how NovaCore handles account information, billing records, device data, analytics, and privacy requests.",
  "/privacy",
);

const sections = [
  {
    title: "1. Who this policy applies to",
    body: [
      "This Privacy Policy explains how [Company Name] collects, uses, stores, and protects personal information in connection with the NovaCore website, desktop application, purchase flow, and customer support channels.",
      "It applies to visitors, customers, license holders, and anyone who contacts NovaCore support or interacts with our download and activation experience.",
    ],
  },
  {
    title: "2. Information we collect",
    body: [
      "We may collect contact information such as your name, email address, and support communications when you submit forms, contact support, or manage a purchase.",
      "We may collect account and authentication data used to verify ownership, restore purchases, secure access, and validate software activation.",
      "We may collect payment and billing records provided by checkout partners, such as purchase confirmation details, transaction identifiers, invoice data, and subscription or one-time purchase status. NovaCore should not store full payment card data directly unless your payment provider specifically supports it and your compliance process allows it.",
      "We may collect analytics and usage information such as page visits, download events, referral sources, support interactions, feature usage trends, and general product engagement metrics.",
      "We may collect device and app data needed to deliver the software and support the product, including app version, Windows version, hardware identifiers used for activation, installation status, crash details, diagnostic logs, and high-level device environment details relevant to troubleshooting.",
    ],
  },
  {
    title: "3. How we use data",
    body: [
      "NovaCore may use collected information to process purchases, deliver download access, verify licenses, activate premium access, support account recovery, respond to support requests, improve product stability, prevent abuse, and maintain service security.",
      "We may also use information to understand how customers interact with the software and website, measure product quality, improve documentation, reduce friction in activation and onboarding, and communicate important service updates.",
    ],
  },
  {
    title: "4. Third-party services",
    body: [
      "NovaCore may rely on third-party providers for payment processing, hosting, email delivery, analytics, crash reporting, support tooling, or licensing infrastructure. Those providers may process information on our behalf under their own terms and privacy practices.",
      "Common examples may include a payment processor, analytics provider, transactional email service, hosting platform, and customer support platform. Replace this section with your exact vendors before launch.",
    ],
  },
  {
    title: "5. Data retention",
    body: [
      "We retain information for as long as needed to provide the product, comply with legal or accounting obligations, resolve disputes, enforce agreements, maintain fraud prevention records, and support valid license recovery and customer history.",
      "Retention periods should be adjusted based on your real billing, support, analytics, and legal requirements.",
    ],
  },
  {
    title: "6. User rights and choices",
    body: [
      "Depending on where you live, you may have rights to request access to your information, correction of inaccurate records, deletion where applicable, restriction of certain processing, or a copy of data associated with your account or purchase history.",
      "Privacy requests can be directed to `legal@novacore.app`. Identity verification may be required before we fulfill sensitive requests.",
    ],
  },
  {
    title: "7. Security",
    body: [
      "NovaCore should use reasonable administrative, technical, and organizational measures to protect customer information against unauthorized access, misuse, disclosure, alteration, and loss.",
      "No system can guarantee absolute security, so users should also protect their email account, purchase records, and device access credentials.",
    ],
  },
  {
    title: "8. Contact information",
    body: [
      "For privacy questions, requests, or complaints, contact `legal@novacore.app` or write to [Company Name], [Business Address].",
      "If you also need account, billing, or license help, contact `support@novacore.app`.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Privacy"
      title={
        <>
          Privacy <span>Policy</span>
        </>
      }
      description="This policy is written for a commercial software launch and covers the kinds of customer, billing, app, and support data NovaCore may process."
      actions={[
        { href: "/contact", label: "Privacy Questions" },
        { href: "/terms", label: "View Terms", variant: "secondary" },
      ]}
    >
      <Container className="content-page-section">
        <article className="content-card legal-callout">
          <div>
            <span className="content-kicker">Last Updated</span>
            <h2>April 9, 2026</h2>
          </div>
          <p>
            Replace bracketed business details and vendor names before launch so
            the page reflects your actual legal entity, address, and service
            providers.
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

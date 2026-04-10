import type { Metadata } from "next";
import { ContentPage, buildMetadata } from "@/components/ui/content-page";
import { ContactClient } from "@/app/contact/ContactClient";

export const metadata: Metadata = buildMetadata(
  "Contact & Support",
  "Reach NovaCore support for purchase help, activation recovery, troubleshooting, refund requests, and general product questions.",
  "/contact",
);

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
      <ContactClient />
    </ContentPage>
  );
}

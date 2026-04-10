import Link from "next/link";
import { ContentPage } from "@/components/ui/content-page";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <ContentPage
      eyebrow="404"
      title={
        <>
          Page <span>Not Found</span>
        </>
      }
      description="The page you were looking for is not available. Use the links below to get back to NovaCore downloads, support, or the main product overview."
      actions={[
        { href: "/", label: "Back to Home" },
        { href: "/download", label: "Go to Download", variant: "secondary" },
      ]}
    >
      <Container className="content-page-section">
        <div className="content-page-grid content-page-grid-3">
          <article className="content-card">
            <span className="content-kicker">Popular Destination</span>
            <h3>Download</h3>
            <p>Open the NovaCore download page for installer details, compatibility notes, and next steps.</p>
            <Link href="/download" className="inline-action-link">
              Open Download
            </Link>
          </article>
          <article className="content-card">
            <span className="content-kicker">Need Help?</span>
            <h3>Support Center</h3>
            <p>Reach support for order recovery, activation guidance, or troubleshooting help.</p>
            <Link href="/contact" className="inline-action-link">
              Contact Support
            </Link>
          </article>
          <article className="content-card">
            <span className="content-kicker">License Questions</span>
            <h3>Activation Help</h3>
            <p>Use the activation page for purchase recovery, unlock help, and failed activation steps.</p>
            <Link href="/activate" className="inline-action-link">
              Open Activation Help
            </Link>
          </article>
        </div>
      </Container>
    </ContentPage>
  );
}

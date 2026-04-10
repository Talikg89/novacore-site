import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage, buildMetadata } from "@/components/ui/content-page";
import { Container } from "@/components/ui/container";
import { gumroadLink } from "@/lib/site-content";

export const metadata: Metadata = buildMetadata(
  "Download",
  "Download NovaCore, review install guidance, confirm Windows compatibility, and prepare for activation.",
  "/download",
);

export default function DownloadPage() {
  return (
    <ContentPage
      eyebrow="Download"
      title={
        <>
          Download <span>NovaCore</span>
        </>
      }
      description="Everything customers need before installation: version details, compatibility, setup guidance, release notes, and activation next steps."
      actions={[
        { href: gumroadLink, label: "Purchase NovaCore" },
        { href: "/activate", label: "Activation Help", variant: "secondary" },
      ]}
    >
      <Container className="content-page-section">
        <div className="content-page-grid content-page-grid-3">
          <article className="content-card content-card-highlight">
            <span className="content-kicker">Latest Version</span>
            <h2>NovaCore Desktop 1.0.0</h2>
            <p>
              The current public build includes the latest launcher, activation
              flow, and onboarding improvements for supported Windows systems.
            </p>
            <a
              href={gumroadLink}
              className="inline-action-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unlock Download Access
            </a>
          </article>
          <article className="content-card">
            <span className="content-kicker">Windows Compatibility</span>
            <h3>Built for modern Windows gaming rigs</h3>
            <p>Windows 10 22H2 or newer, Windows 11, administrator access for certain tuning flows, and a stable internet connection for activation.</p>
          </article>
          <article className="content-card">
            <span className="content-kicker">Security</span>
            <h3>Installer trust and signature status</h3>
            <p>
              Download only from official NovaCore links and confirm the version
              matches the release notes on this page. Installer properties should
              show the publisher and version details.
            </p>
          </article>
        </div>
      </Container>

      <Container className="content-page-section">
        <div className="content-page-grid content-page-grid-2">
          <article className="content-card">
            <span className="content-kicker">Install Steps</span>
            <h2>Ready in a few minutes</h2>
            <ol className="content-number-list">
              <li>Download the latest NovaCore installer after purchase or account verification.</li>
              <li>Run the installer and approve any standard Windows permissions required for setup.</li>
              <li>Launch NovaCore, sign in if required, and enter your license if prompted.</li>
              <li>Complete activation and review the first-run guidance before applying performance profiles or tweaks.</li>
            </ol>
          </article>
          <article className="content-card">
            <span className="content-kicker">Release Notes</span>
            <h2>Recent update highlights</h2>
            <div className="content-list-block">
              <div>
                <strong>Installer and delivery improvements</strong>
                <p>Improved first-run flow, clearer delivery messaging, and a smoother setup experience for new customers.</p>
              </div>
              <div>
                <strong>Compatibility guidance</strong>
                <p>Best results are expected on supported Windows 10 and Windows 11 builds with current system updates installed.</p>
              </div>
              <div>
                <strong>Activation and licensing</strong>
                <p>Licenses continue through the normal activation flow after install, with support available for account or device recovery.</p>
              </div>
            </div>
          </article>
        </div>
      </Container>

      <Container className="content-page-section">
        <article className="content-card cta-band">
          <div>
            <span className="content-kicker">Need help before installing?</span>
            <h2>Use the activation and support guides first</h2>
            <p>
              If you are waiting on a license, replacing hardware, or recovering
              a purchase, the help pages below will get you to the right next step
              faster than retrying blindly.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link href="/activate" className="hero-button hero-button-primary">
              Open License Help
            </Link>
            <Link href="/contact" className="hero-button hero-button-secondary">
              Contact Support
            </Link>
          </div>
        </article>
      </Container>
    </ContentPage>
  );
}

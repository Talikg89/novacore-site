import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage, buildMetadata } from "@/components/ui/content-page";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata(
  "NovaCore Tweaks",
  "Learn how NovaCore Tweaks deliver Windows optimization, FPS boost guidance, and system tweaks for gamers.",
  "/tweaks",
);

export default function TweaksPage() {
  return (
    <ContentPage
      eyebrow="NovaCore Tweaks"
      title={
        <>
          NovaCore <span>Tweaks</span>
        </>
      }
      description="NovaCore Tweaks are performance-focused Windows optimizations built for gamers who want steadier frame pacing, reduced input lag, and cleaner system behavior."
      actions={[
        { href: "/pricing", label: "View Pricing" },
        { href: "/contact", label: "Talk to Support", variant: "secondary" },
      ]}
    >
      <Container className="content-page-section">
        <div className="content-page-grid content-page-grid-2">
          <article className="content-card content-card-highlight">
            <span className="content-kicker">What NovaCore Tweaks Are</span>
            <h2>Real system tweaks for gaming performance</h2>
            <p>
              NovaCore Tweaks focus on Windows optimization, background behavior,
              startup cleanup, and input responsiveness so games feel smoother and
              more consistent under load.
            </p>
          </article>
          <article className="content-card">
            <span className="content-kicker">What They Do</span>
            <h3>FPS boost guidance and latency tuning</h3>
            <p>
              The tweaks target unnecessary overhead, prioritize performance
              profiles, and reduce input lag so players can maintain stable
              frame pacing and better responsiveness.
            </p>
          </article>
        </div>
      </Container>

      <Container className="content-page-section">
        <div className="content-page-grid content-page-grid-3">
          <article className="content-card">
            <span className="content-kicker">Who It Is For</span>
            <h3>Competitive gamers and power users</h3>
            <p>
              NovaCore Tweaks are designed for players who care about gaming
              performance, stable FPS, and a lean Windows setup that stays focused
              during long sessions.
            </p>
          </article>
          <article className="content-card">
            <span className="content-kicker">What You Get</span>
            <h3>Structured tuning paths</h3>
            <p>
              Clear guidance, performance-first profiles, and system tweaks that
              are organized by impact so you can optimize without guessing.
            </p>
          </article>
          <article className="content-card">
            <span className="content-kicker">Results</span>
            <h3>Steadier performance, not hype</h3>
            <p>
              Results vary by hardware and game, but NovaCore Tweaks aim to keep
              your Windows environment stable so performance feels more reliable.
            </p>
          </article>
        </div>
      </Container>

      <Container className="content-page-section">
        <article className="content-card cta-band">
          <div>
            <span className="content-kicker">Explore the full stack</span>
            <h2>Ready to apply NovaCore Tweaks?</h2>
            <p>
              Review pricing, download details, and the activation flow before
              purchasing. If you have questions, the support team can help.
            </p>
          </div>
          <div className="cta-band-actions">
            <Link href="/pricing" className="hero-button hero-button-primary">
              Get NovaCore Tweaks
            </Link>
            <Link href="/download" className="hero-button hero-button-secondary">
              View Download Info
            </Link>
          </div>
        </article>
      </Container>
    </ContentPage>
  );
}

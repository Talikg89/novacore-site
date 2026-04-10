import Image from "next/image";
import Link from "next/link";
import { gumroadLink, heroStats } from "@/lib/site-content";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <Container id="home" className="hero-section-clean">
      <div className="hero-bg-gallery" aria-hidden="true">
        <div className="hero-bg-card hero-bg-card-left">
          <Image
            src="/images/hero-bg-1.png"
            alt=""
            width={1200}
            height={800}
            className="hero-bg-image"
          />
        </div>
        <div className="hero-bg-card hero-bg-card-right">
          <Image
            src="/images/hero-bg-2.png"
            alt=""
            width={1200}
            height={800}
            className="hero-bg-image"
          />
        </div>
      </div>
      <div className="hero-badge">Faster, smoother, sharper</div>
      <div className="hero-content-centered">
        <h1>
          <span>NovaCore Tweaks</span> for
          <br />
          Gaming Performance
        </h1>
        <p>
          NovaCore Tweaks delivers premium Windows optimization and system tweaks
          that help boost FPS, reduce input lag, and keep gaming performance
          steady for competitive play.
        </p>
        <div className="hero-buttons">
          <a
            href={gumroadLink}
            className="hero-button hero-button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy NovaCore
          </a>
          <Link href="/tweaks" className="hero-button hero-button-secondary">
            Explore NovaCore Tweaks
          </Link>
        </div>
        <div className="hero-meta">
          <span>One-time purchase</span>
          <span>Performance-focused tuning</span>
        </div>
        <div className="hero-stats">
          {heroStats.map((stat) => (
            <article key={stat.label} className="hero-stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
      <div className="hero-preview-clean">
        <div className="hero-preview-frame-clean">
          <Image
            src="/images/hero-preview.png"
            alt="NovaCore Tweaks dashboard showing Windows optimization interface for gaming performance."
            width={1200}
            height={800}
            className="hero-preview-image-clean"
            priority
          />
        </div>
        <p className="hero-preview-note">
          Example visualization. Results vary by system and game.
        </p>
      </div>
    </Container>
  );
}

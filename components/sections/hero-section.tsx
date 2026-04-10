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
          Optimize <span>your PC</span> for
          <br />
          Gaming
        </h1>
        <p>
          NovaCore removes bloat, reduces background overhead, and tunes Windows
          for steadier frame pacing, cleaner background behavior, and a more
          responsive competitive setup.
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
          <Link href="#benefits" className="hero-button hero-button-secondary">
            Explore Features
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
            alt="NovaCore FPS comparison preview."
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

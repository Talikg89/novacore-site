import { trustedCreators } from "@/lib/site-content";
import { Container } from "@/components/ui/container";

export function TrustedSection() {
  return (
    <Container id="proof" className="stack-section">
      <div className="section-copy section-copy-centered">
        <h2>
          Trusted By <span>The Best</span>
        </h2>
        <p>Chosen by elite players and creators for peak performance.</p>
      </div>
      <div className="trusted-grid">
        {trustedCreators.map((creator) => (
          <article key={creator.name} className="trusted-card">
            <div className={`trusted-avatar trusted-avatar-${creator.accent}`}>
              <span>{creator.name.slice(0, 1)}</span>
            </div>
            <h3>{creator.name}</h3>
            <p>{creator.role}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}

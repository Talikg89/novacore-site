import { gameBenchmarks } from "@/lib/site-content";
import { Container } from "@/components/ui/container";

export function BenchmarksSection() {
  return (
    <Container className="stack-section">
      <div className="section-copy section-copy-centered">
        <h2>
          Optimization Focus By <span>Game</span>
        </h2>
        <p>Examples of tuning priorities and system focus areas across popular titles.</p>
      </div>
      <div className="benchmark-grid">
        {gameBenchmarks.map((benchmark) => (
          <article key={benchmark.game} className="benchmark-card">
            <div className="benchmark-top">
              <h3>{benchmark.game}</h3>
              <span className="benchmark-badge">{benchmark.increase}</span>
            </div>
            <div className="benchmark-row">
              <span>NovaCore focus</span>
              <strong>{benchmark.withTweaks}</strong>
            </div>
            <div className="benchmark-row">
              <span>Baseline</span>
              <strong className="benchmark-muted">{benchmark.withoutTweaks}</strong>
            </div>
          </article>
        ))}
      </div>
      <div className="benchmark-note">
        Example profiles shown for context. Actual results vary by system and game.
      </div>
    </Container>
  );
}

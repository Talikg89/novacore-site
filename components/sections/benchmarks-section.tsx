import { gameBenchmarks } from "@/lib/site-content";
import { Container } from "@/components/ui/container";

export function BenchmarksSection() {
  return (
    <Container className="stack-section">
      <div className="section-copy section-copy-centered">
        <h2>
          Tests In Your <span>Favorite Games</span>
        </h2>
        <p>See the real performance gains we frame around our optimization story.</p>
      </div>
      <div className="benchmark-grid">
        {gameBenchmarks.map((benchmark) => (
          <article key={benchmark.game} className="benchmark-card">
            <div className="benchmark-top">
              <h3>{benchmark.game}</h3>
              <span className="benchmark-badge">{benchmark.increase}</span>
            </div>
            <div className="benchmark-row">
              <span>With NovaCore</span>
              <strong>{benchmark.withTweaks}</strong>
            </div>
            <div className="benchmark-row">
              <span>Without</span>
              <strong className="benchmark-muted">{benchmark.withoutTweaks}</strong>
            </div>
          </article>
        ))}
      </div>
      <div className="benchmark-note">Tested on high-performance Windows gaming hardware.</div>
    </Container>
  );
}

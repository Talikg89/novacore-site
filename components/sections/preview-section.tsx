import { previewPanels } from "@/lib/site-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PreviewSection() {
  return (
    <Container id="preview">
      <SectionHeading
        eyebrow="Product Preview"
        title="A serious performance dashboard identity, designed to feel fast before the first benchmark."
        description="These preview panels now lean into telemetry, tuning visibility, and competitive-readiness metrics so the product feels credible to gamers and low-latency enthusiasts even before real screenshots are added."
      />
      <div className="preview-grid">
        {previewPanels.map((panel) => (
          <article key={panel.title} className="panel showcase-card">
            <div className="showcase-surface">
              <div className="showcase-header">
                <span>{panel.badge}</span>
                <strong>{panel.title}</strong>
              </div>
              <div className="showcase-content">
                {panel.rows.map((row) => (
                  <div key={row.label} className="showcase-row">
                    <span>{row.label}</span>
                    <strong>{row.value}</strong>
                  </div>
                ))}
              </div>
            </div>
            <p>{panel.description}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}

import { previewPanels } from "@/lib/site-content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PreviewSection() {
  return (
    <Container id="preview">
      <SectionHeading
        eyebrow="Product Preview"
        title="Performance dashboards built for visibility and control."
        description="Preview how NovaCore organizes frame pacing, latency focus, and activation status in a single desktop view."
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

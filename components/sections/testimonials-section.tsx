import { testimonials } from "@/lib/site-content";
import { Container } from "@/components/ui/container";

export function TestimonialsSection() {
  return (
    <Container id="reviews" className="stack-section">
      <div className="section-copy section-copy-centered">
        <h2>
          What Our <span>Customers Say</span>
        </h2>
        <p>Feedback highlights from players who want a cleaner, more responsive setup.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article key={item.title} className="testimonial-card">
            <div className="testimonial-top">
              <span className="stars">★★★★★</span>
              <span className="testimonial-tag">{item.tag}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <div className="testimonial-author">{item.author}</div>
          </article>
        ))}
      </div>
    </Container>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <Container className="footer-clean-shell">
      <footer className="footer-clean">
        <div>
          <div className="brand-mark brand-mark-footer">
            <span className="brand-glyph" />
            <span className="brand-name">NovaCore</span>
          </div>
          <p>
            Premium Windows optimization for gamers, competitive players, and
            power users who care about responsiveness, stability, and system tuning.
          </p>
        </div>
        <div className="footer-clean-columns">
          <nav className="footer-clean-links" aria-label="Product">
            <Link href="/download">Download</Link>
            <Link href="/pricing">Pricing</Link>
            <a href="https://talverse.gumroad.com/l/bidpof" target="_blank" rel="noopener noreferrer">
              Buy
            </a>
            <Link href="/activate">License Help</Link>
            <Link href="/faq">FAQ</Link>
          </nav>
          <nav className="footer-clean-links" aria-label="Support">
            <Link href="/contact">Support</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/refund-policy">Refund Policy</Link>
          </nav>
          <nav className="footer-clean-links" aria-label="Legal">
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </nav>
        </div>
      </footer>
    </Container>
  );
}

import Link from "next/link";
import { navLinks } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand-mark" aria-label="NovaCore home">
          <span className="brand-glyph" />
          <span className="brand-name">NovaCore</span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-actions">
          <Link href="/download" className="nav-action">
            Download
          </Link>
          <Link href="/purchase" className="nav-action nav-action-primary">
            Buy
          </Link>
        </div>
      </div>
    </header>
  );
}

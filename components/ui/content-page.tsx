import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/sections/footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Container } from "@/components/ui/container";

type PageAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type ContentPageProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  actions?: PageAction[];
  children: ReactNode;
};

export function buildMetadata(
  title: string,
  description: string,
  pathname: string,
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
  };
}

export function ContentPage({
  eyebrow,
  title,
  description,
  actions = [],
  children,
}: ContentPageProps) {
  return (
    <main className="page-shell">
      <SiteHeader />
      <Container className="content-page-hero">
        <div className="content-page-hero-card">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="content-page-title">{title}</h1>
          <p className="content-page-description">{description}</p>
          {actions.length > 0 ? (
            <div className="content-page-actions">
              {actions.map((action) => (
                <Link
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  className={
                    action.variant === "secondary"
                      ? "hero-button hero-button-secondary"
                      : "hero-button hero-button-primary"
                  }
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
      {children}
      <Footer />
    </main>
  );
}

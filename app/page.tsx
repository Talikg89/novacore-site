import type { Metadata } from "next";
import { BenchmarksSection } from "@/components/sections/benchmarks-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { PurchaseCtaSection } from "@/components/sections/purchase-cta-section";
import { SiteHeader } from "@/components/sections/site-header";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustedSection } from "@/components/sections/trusted-section";

export const metadata: Metadata = {
  title: "NovaCore Tweaks \u2013 Premium Windows Optimization for Gamers",
  description:
    "NovaCore Tweaks helps gamers boost FPS, reduce input lag, and optimize Windows performance with real system tweaks.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NovaCore Tweaks \u2013 Premium Windows Optimization for Gamers",
    description:
      "NovaCore Tweaks delivers Windows optimization, FPS boost guidance, and performance-focused system tweaks for competitive gamers.",
    url: "/",
    siteName: "NovaCore",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <HeroSection />
      <BenefitsSection />
      <TrustedSection />
      <BenchmarksSection />
      <PricingSection />
      <PurchaseCtaSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}

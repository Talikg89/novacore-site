import { BenchmarksSection } from "@/components/sections/benchmarks-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { FaqSection } from "@/components/sections/faq-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { SiteHeader } from "@/components/sections/site-header";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustedSection } from "@/components/sections/trusted-section";

export default function HomePage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <HeroSection />
      <BenefitsSection />
      <TrustedSection />
      <BenchmarksSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}

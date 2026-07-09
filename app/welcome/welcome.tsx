import { Navbar } from "~/components/landing/navbar";
import { Hero } from "~/components/landing/hero";
import { PainSection } from "~/components/landing/pain-section";
import { Features } from "~/components/landing/features";
import { HowItWorks } from "~/components/landing/how-it-works";
import { Cta } from "~/components/landing/cta";
import { Footer } from "~/components/landing/footer";

const APP_URL = "https://app.applywithiris.com";

export function Welcome() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <Navbar appUrl={APP_URL} />
      <Hero appUrl={APP_URL} />
      <PainSection />
      <Features />
      <HowItWorks />
      <Cta appUrl={APP_URL} />
      <Footer appUrl={APP_URL} />
    </div>
  );
}

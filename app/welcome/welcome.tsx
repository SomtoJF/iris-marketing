import { Navbar } from "~/components/landing/navbar";
import { Hero } from "~/components/landing/hero";
import { PainSection } from "~/components/landing/pain-section";
import { Features } from "~/components/landing/features";
import { HowItWorks } from "~/components/landing/how-it-works";
import { Extension } from "~/components/landing/extension";
import { Cta } from "~/components/landing/cta";
import { Footer } from "~/components/landing/footer";

const APP_URL = "https://app.applywithiris.com";
const EXTENSION_URL =
  "https://chromewebstore.google.com/detail/iris/gkafmplebnbdnnbdafgfcnejfmaehhoj?utm_source=marketing";

export function Welcome() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <Navbar appUrl={APP_URL} />
      <Hero appUrl={APP_URL} extensionUrl={EXTENSION_URL} />
      <PainSection />
      <Features />
      <HowItWorks />
      <Extension appUrl={APP_URL} extensionUrl={EXTENSION_URL} />
      <Cta appUrl={APP_URL} />
      <Footer appUrl={APP_URL} extensionUrl={EXTENSION_URL} />
    </div>
  );
}

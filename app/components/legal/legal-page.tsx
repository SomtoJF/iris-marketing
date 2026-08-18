import type { ReactNode } from "react";
import { Footer } from "~/components/landing/footer";
import { Navbar } from "~/components/landing/navbar";

const APP_URL = "https://app.applywithiris.com";
const EXTENSION_URL =
  "https://chromewebstore.google.com/detail/iris/gkafmplebnbdnnbdafgfcnejfmaehhoj?utm_source=marketing";

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <Navbar appUrl={APP_URL} />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <h1 className="font-display text-4xl text-purple-700 md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-ink/40">Last updated {lastUpdated}</p>
        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-ink/70">
          {children}
        </div>
      </main>
      <Footer appUrl={APP_URL} extensionUrl={EXTENSION_URL} />
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      {children}
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

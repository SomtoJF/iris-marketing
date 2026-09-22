import { Children, isValidElement, type ReactNode } from "react";
import { Footer, Header, Mark } from "~/components/landing/editorial-home";

function sectionId(title: string) {
  return `section-${title.match(/^\d+/)?.[0] ?? title.toLowerCase().replace(/\W+/g, "-")}`;
}

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  const sections = Children.toArray(children).flatMap((child) =>
    isValidElement<{ title: string }>(child) && typeof child.props.title === "string"
      ? [{ title: child.props.title, id: sectionId(child.props.title) }]
      : [],
  );

  return (
    <div className="min-h-screen bg-[#f3efe6] font-sans text-ink">
      <Header />
      <main id="top">
        <div className="border-b border-ink bg-purple-700 text-white">
          <div className="mx-auto max-w-[1440px] px-5 pb-14 pt-14 md:px-8 md:pb-20 md:pt-20">
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.16em] text-purple-200">
              <Mark className="w-6" /> Iris / The details
            </div>
            <h1 className="mt-8 max-w-5xl text-[clamp(3.3rem,9vw,8rem)] font-black uppercase leading-[1.08] tracking-[-0.025em] [word-spacing:0.06em]">
              {title}
            </h1>
            <div className="mt-10 border-t border-white/35 pt-5 text-xs font-semibold uppercase tracking-[0.12em] text-purple-100">
              Last updated / {lastUpdated}
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1440px] md:grid-cols-[minmax(220px,0.65fr)_minmax(0,1.35fr)]">
          <aside className="border-b border-ink px-5 py-10 md:border-b-0 md:border-r md:px-8 md:py-16">
            <div className="md:sticky md:top-24">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-purple-700">On this page</p>
              <nav aria-label={`${title} sections`} className="mt-5 grid grid-cols-2 gap-x-4 border-t border-ink/20 sm:grid-cols-3 md:grid-cols-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="border-b border-ink/20 py-3 text-xs font-semibold leading-5 text-ink/65 transition-colors hover:text-purple-700 focus-visible:text-purple-700"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="min-w-0 px-5 pb-24 pt-3 md:px-12 md:pb-32 md:pt-8 lg:px-20">
            <div className="max-w-[760px] text-[15px] leading-[1.8] text-ink/75 md:text-base">
              {children}
            </div>
            <a href="#top" className="mt-16 inline-block border-b border-ink pb-1 text-xs font-black uppercase tracking-[0.1em] hover:text-purple-700">
              Back to top ↑
            </a>
          </div>
        </div>
      </main>
      <Footer />
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
    <section id={sectionId(title)} className="border-b border-ink/25 py-9 last:border-b-0 md:py-12">
      <div className="mb-5 flex items-start gap-4 md:gap-7">
        {/^\d+\./.test(title) && <span className="pt-1 font-mono text-xs font-bold text-purple-700">{title.match(/^\d+/)?.[0].padStart(2, "0")}</span>}
        <h2 className="text-xl font-black uppercase leading-[1.2] tracking-[-0.015em] text-ink md:text-2xl">
          {title.replace(/^\d+\.\s*/, "")}
        </h2>
      </div>
      <div className="space-y-5 [&_a]:underline [&_a]:decoration-purple-700/50 [&_a]:underline-offset-4 [&_a:hover]:decoration-purple-700">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-3 pl-5 marker:text-purple-700">
      {items.map((item, index) => (
        <li key={index} className="pl-1">{item}</li>
      ))}
    </ul>
  );
}

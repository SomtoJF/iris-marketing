import { ActionArrow, APP_URL, Footer, Header, Logo } from "./editorial-home";

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f3efe6] font-sans text-ink">
      <title>Page not found — Iris Apply</title>
      <Header />
      <main className="flex flex-1 flex-col" id="top">
        <section className="flex flex-1 flex-col justify-center overflow-hidden border-b border-ink">
          <div className="mx-auto w-full max-w-[1440px] px-5 py-14 md:px-8 md:py-20">
            <div className="flex items-center justify-between border-b border-ink pb-4 text-[10px] font-black uppercase tracking-[0.16em] text-purple-700">
              <span>Wrong turn / 404</span>
              <Logo className="h-8 w-auto" />
            </div>
            <div className="relative mt-6 md:grid md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-10">
              <p aria-hidden="true" className="select-none text-[clamp(9rem,28vw,27rem)] font-black leading-[0.9] tracking-[-0.09em] text-ink md:text-[clamp(10rem,18vw,18rem)]">
                404<span className="text-purple-700">.</span>
              </p>
              <div className="mt-10 max-w-3xl md:mt-0">
                <h1 className="text-[clamp(2.2rem,5vw,5rem)] font-black uppercase leading-[1.1] tracking-[-0.025em]">
                  This page didn’t make it.
                </h1>
                <p className="mt-5 max-w-lg text-base leading-7 text-ink/65">
                  The link may have moved, or it might never have existed. No forms to fill here—let’s get you back on track.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a href="/" className="inline-flex min-h-13 items-center border border-ink bg-ink py-3 pl-6 pr-3 text-xs font-black uppercase tracking-[0.08em] text-white transition-colors hover:bg-purple-700">
                    Back to Iris <ActionArrow />
                  </a>
                  <a href={APP_URL} className="inline-flex min-h-13 items-center border border-ink px-5 text-xs font-black uppercase tracking-[0.08em] transition-colors hover:bg-white">
                    Go to the app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { Cover } from "~/components/ui/cover";
import { MagicCard } from "~/components/ui/magic-card";
import Dither from "~/components/Dither";
import { Button } from "~/components/ui/button";

const APP_URL = "https://iris.somtochukwu.com";

const features = [
  {
    label: "Search",
    title: "Job Search",
    description:
      "Integrated job discovery — find open roles without ever leaving the app.",
  },
  {
    label: "Apply",
    title: "Custom Jobs",
    description:
      "Found a role online? Paste the link and Iris will apply on your behalf.",
  },
  {
    label: "Letters",
    title: "Cover Letters, handled",
    description:
      "Personalised cover letters based on your CV and company research.",
  },
  {
    label: "Track",
    title: "Application Tracker",
    description:
      "Real-time status across every application — all in one place.",
  },
  {
    label: "Profile",
    title: "Your profile, once",
    description:
      "Fill in your CV and details once. Iris pulls from them for every single application.",
  },
];

export function Welcome() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <img
            src="/logo-transparent.png"
            alt="Iris Apply"
            className="h-14 w-auto"
          />
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a
              href="#benefits"
              className="hover:text-purple-600 transition-colors"
            >
              Benefits
            </a>
            <a
              href="#features"
              className="hover:text-purple-600 transition-colors"
            >
              Features
            </a>
          </nav>
          <a href={APP_URL}>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-5 text-sm">
              Get Started
            </Button>
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center justify-center">
        {/* background bloom */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-200/40 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-medium px-3 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
            Automated job applications — now open
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
            Find your next role at{" "}
            <Cover className="text-purple-600">hyperspeed</Cover>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Automated job applications. No more repetitive forms.
            <br className="hidden md:block" />
            Let Iris Apply handle the grind while you focus on what matters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={APP_URL}>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-purple-200">
                Start applying free →
              </Button>
            </a>
            <a href="#features">
              <Button
                variant="ghost"
                className="rounded-full px-8 h-12 text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50"
              >
                See how it works
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section id="benefits" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apply smarter, not harder
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Iris Apply removes the friction from job hunting so you can spend
              your energy on interviews — not paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                ),
                title: "Save hours every week",
                body: "No more copy-pasting your details into dozens of forms. Fill your profile once and let Iris do the rest.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                    />
                  </svg>
                ),
                title: "One-click apply",
                body: "Paste a job URL and let Iris submit the full application on your behalf — in seconds.",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                ),
                title: "Built-in job search",
                body: "Find and apply to roles without ever leaving the platform. Your entire job hunt in one place.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {benefit.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to land the role
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Purpose-built features that take you from search to offer letter.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Row 1 — 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.slice(0, 3).map((f) => (
                <MagicCard
                  key={f.title}
                  className="p-6 h-44 flex flex-col justify-between cursor-default rounded-2xl"
                  gradientFrom="#9E7AFF"
                  gradientTo="#7c3aed"
                  gradientColor="#f3f0ff"
                >
                  <span className="text-xs font-semibold text-purple-500 uppercase tracking-widest">
                    {f.label}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </MagicCard>
              ))}
            </div>

            {/* Row 2 — 2 cards centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-2/3 mx-auto">
              {features.slice(3).map((f) => (
                <MagicCard
                  key={f.title}
                  className="p-6 h-44 flex flex-col justify-between cursor-default rounded-2xl"
                  gradientFrom="#9E7AFF"
                  gradientTo="#7c3aed"
                  gradientColor="#f3f0ff"
                >
                  <span className="text-xs font-semibold text-purple-500 uppercase tracking-widest">
                    {f.label}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </MagicCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Card with Dither ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden min-h-[420px] flex items-center justify-center">
            <div className="absolute inset-0">
              <Dither
                waveColor={[0.4, 0.2, 0.8]}
                waveSpeed={0.04}
                waveFrequency={3}
                colorNum={5}
                pixelSize={3}
                enableMouseInteraction
              />
            </div>
            <div className="relative z-10 text-center px-8 py-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Ready to supercharge
                <br />
                your job search?
              </h2>
              <p className="text-white/70 text-lg mb-10 max-w-md mx-auto">
                Join applicants who are landing roles faster with Iris Apply.
              </p>
              <a href={APP_URL}>
                <Button className="bg-white text-purple-700 hover:bg-purple-50 rounded-full px-10 h-12 text-base font-semibold shadow-xl">
                  Get started free
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <span className="text-lg font-bold text-purple-600 tracking-tight block mb-2">
                Iris Apply
              </span>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Automated job applications so you can focus on the things that
                actually matter.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Product
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a
                    href={APP_URL}
                    className="hover:text-purple-600 transition-colors"
                  >
                    App
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Benefits
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Legal
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-600 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
            <span>
              © {new Date().getFullYear()} Iris Apply. All rights reserved.
            </span>
            <a
              href={APP_URL}
              className="hover:text-purple-600 transition-colors"
            >
              iris.somtochukwu.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

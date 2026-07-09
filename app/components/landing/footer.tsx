export function Footer({ appUrl }: { appUrl: string }) {
  return (
    <footer className="border-t border-ink/5 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <span className="mb-2 block font-display text-2xl text-purple-700">
              Iris
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-ink/50">
              Automated job applications so you can focus on the things that
              actually matter.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/35">
              Product
            </p>
            <ul className="space-y-3 text-sm text-ink/60">
              <li>
                <a href={appUrl} className="transition-colors hover:text-purple-700">
                  App
                </a>
              </li>
              <li>
                <a href="#features" className="transition-colors hover:text-purple-700">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="transition-colors hover:text-purple-700">
                  How it works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink/35">
              Legal
            </p>
            <ul className="space-y-3 text-sm text-ink/60">
              <li>
                <a href="#" className="transition-colors hover:text-purple-700">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-purple-700">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-ink/5 pt-6 text-sm text-ink/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Iris. All rights reserved.</span>
          <a href={appUrl} className="transition-colors hover:text-purple-700">
            applywithiris.com
          </a>
        </div>
      </div>
    </footer>
  );
}

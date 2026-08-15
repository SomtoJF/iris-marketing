import { Button } from "~/components/ui/button";

export function Navbar({ appUrl }: { appUrl: string }) {
  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="/">
            <img
              src="/logo-transparent.png"
              alt="Iris Apply"
              className="h-12 w-auto"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-ink/60">
            <a href="/#pain" className="hover:text-purple-700 transition-colors">
              Why Iris
            </a>
            <a
              href="/#features"
              className="hover:text-purple-700 transition-colors"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="hover:text-purple-700 transition-colors"
            >
              How it works
            </a>
          </nav>
        </div>
        <a href={appUrl}>
          <Button className="bg-purple-700 hover:bg-purple-800 text-white rounded-full px-5 text-sm">
            Get Started
          </Button>
        </a>
      </div>
    </header>
  );
}

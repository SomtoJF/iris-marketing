import Dither from "~/components/Dither";
import { Button } from "~/components/ui/button";

export function Cta({ appUrl }: { appUrl: string }) {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-3xl">
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
          <div className="relative z-10 px-8 py-16 text-center">
            <h2 className="mb-4 font-display text-4xl font-normal leading-tight text-white md:text-6xl">
              Ready to <em className="text-purple-200">supercharge</em>
              <br />
              your job search?
            </h2>
            <p className="mx-auto mb-10 max-w-md text-lg text-white/70">
              Join applicants who are landing roles faster with Iris.
            </p>
            <a href={appUrl}>
              <Button className="h-12 rounded-full bg-white px-10 text-base font-semibold text-purple-700 shadow-xl hover:bg-purple-50">
                Get started free
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

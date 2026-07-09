import { motion } from "motion/react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { HeroMock } from "./hero-mock";

const NOISE_URI =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E";

const leftChips = [
  { label: "Job search", top: "8%" },
  { label: "Auto-filled forms", top: "38%" },
  { label: "Cover letters", top: "70%" },
];

const rightChips = [
  { label: "Application tracker", top: "12%" },
  { label: "Paste any job URL", top: "44%" },
  { label: "One profile", top: "74%" },
];

function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* base night-violet gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#100722] via-[#2a1157] to-[#7c3aed]" />

      {/* glowing horizon */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(216,180,254,0.55),rgba(168,85,247,0.25)_45%,transparent_75%)]" />

      {/* drifting aurora blobs */}
      <motion.div
        animate={{ x: [0, 80, -40, 0], y: [0, 30, -20, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -70, 50, 0], y: [0, -25, 30, 0], scale: [1, 0.9, 1.2, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-indigo-500/30 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 60, -60, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/3 bottom-0 h-80 w-[36rem] rounded-full bg-amber-300/15 blur-3xl"
      />

      {/* stars */}
      <div className="absolute inset-x-0 top-0 h-1/2">
        {[
          [12, 18], [28, 8], [45, 22], [63, 12], [78, 26], [90, 9],
          [20, 38], [55, 34], [85, 42], [38, 45], [70, 48], [8, 52],
        ].map(([x, y], i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0.15, 0.7, 0.15] }}
            transition={{ duration: 3 + (i % 5), repeat: Infinity, delay: i * 0.4 }}
            style={{ left: `${x}%`, top: `${y}%` }}
            className="absolute size-[3px] rounded-full bg-white"
          />
        ))}
      </div>

      {/* grain */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{ backgroundImage: `url("${NOISE_URI}")` }}
      />
    </div>
  );
}

function FloatingChip({
  label,
  top,
  side,
  index,
}: {
  label: string;
  top: string;
  side: "left" | "right";
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -16 : 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
      style={{ top }}
      className={cn(
        "absolute hidden lg:block",
        side === "left" ? "left-0" : "right-0"
      )}
    >
      <motion.span
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4 + index,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="inline-block rounded-full border border-white/40 bg-white/90 px-4 py-2 text-sm text-ink/70 shadow-lg backdrop-blur"
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

export function Hero({ appUrl }: { appUrl: string }) {
  return (
    <section className="px-3 pt-3 md:px-5 md:pt-5">
      {/* aurora panel */}
      <div className="relative overflow-hidden rounded-3xl pb-56 md:pb-64">
        <AuroraBackground />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 text-center md:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-purple-100 backdrop-blur"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-fuchsia-300" />
            Automated job applications — now open
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-6 max-w-3xl font-display text-5xl font-normal leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Find your <em className="text-purple-200">next role</em> at{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 via-purple-200 to-amber-200 bg-clip-text italic text-transparent">
              hyperspeed
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-purple-100/70 md:text-xl"
          >
            Iris searches, fills the forms, writes the cover letters and tracks
            every application — so your job hunt runs itself.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href={appUrl}>
              <Button className="h-12 rounded-full bg-white px-8 text-base font-medium text-purple-800 shadow-xl shadow-purple-950/30 hover:bg-purple-50">
                Start applying free →
              </Button>
            </a>
            <a href="#how-it-works">
              <Button
                variant="ghost"
                className="h-12 rounded-full border border-white/25 px-8 text-base font-medium text-white hover:bg-white/10 hover:text-white"
              >
                See how it works
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* mock dashboard overlapping the panel edge */}
      <div className="relative z-10 mx-auto -mt-48 max-w-6xl px-6 md:-mt-52">
        <div className="relative">
          {leftChips.map((chip, i) => (
            <FloatingChip key={chip.label} {...chip} side="left" index={i} />
          ))}
          {rightChips.map((chip, i) => (
            <FloatingChip key={chip.label} {...chip} side="right" index={i} />
          ))}
          <HeroMock />
        </div>
      </div>
    </section>
  );
}

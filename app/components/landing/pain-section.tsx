import { motion } from "motion/react";
import { cn } from "~/lib/utils";

const scatteredTools = [
  { label: "Job board", rotate: "-8deg", tint: "bg-sky-50 border-sky-200 text-sky-700" },
  { label: "Tracker.xlsx", rotate: "5deg", tint: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { label: "cover-letter-v7.doc", rotate: "-4deg", tint: "bg-amber-50 border-amber-200 text-amber-700" },
  { label: "Another job board", rotate: "7deg", tint: "bg-rose-50 border-rose-200 text-rose-700" },
  { label: "Notes app", rotate: "-6deg", tint: "bg-purple-50 border-purple-200 text-purple-700" },
];

const pains = [
  {
    title: "You're stuck in repetitive forms",
    body: "The same name, CV and work history typed into a slightly different form, dozens of times a week.",
  },
  {
    title: "Your tracking lives in a spreadsheet",
    body: "Statuses go stale the moment you update them, and follow-ups slip through the cracks.",
  },
  {
    title: "Every role wants a fresh cover letter",
    body: "You're rewriting the same three paragraphs and renaming the file, for every single application.",
  },
];

function ScatteredTools() {
  return (
    <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
      {scatteredTools.map((tool, i) => (
        <motion.span
          key={tool.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          style={{ rotate: tool.rotate }}
          className={cn(
            "inline-block rounded-lg border px-3 py-1.5 text-xs font-medium shadow-sm",
            tool.tint
          )}
        >
          {tool.label}
        </motion.span>
      ))}
    </div>
  );
}

function PainCards() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
      {pains.map((pain, i) => (
        <motion.div
          key={pain.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.45 }}
          className="rounded-2xl border border-ink/8 bg-white p-6 text-left shadow-sm"
        >
          <h3 className="mb-2 text-[15px] font-semibold text-ink">
            {pain.title}
          </h3>
          <p className="text-sm leading-relaxed text-ink/55">{pain.body}</p>
        </motion.div>
      ))}
    </div>
  );
}

function ConvergingCurves() {
  const strands = [
    { d: "M 60 0 C 60 90, 300 100, 300 190", stroke: "url(#strand-blue)" },
    { d: "M 180 0 C 180 80, 300 90, 300 190", stroke: "url(#strand-cyan)" },
    { d: "M 300 0 C 300 80, 300 90, 300 190", stroke: "url(#strand-amber)" },
    { d: "M 420 0 C 420 80, 300 90, 300 190", stroke: "url(#strand-orange)" },
    { d: "M 540 0 C 540 90, 300 100, 300 190", stroke: "url(#strand-purple)" },
  ];
  return (
    <svg
      viewBox="0 0 600 200"
      fill="none"
      aria-hidden="true"
      className="mx-auto -my-2 h-40 w-full max-w-xl md:h-48"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="strand-blue" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0" />
          <stop offset="35%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="strand-cyan" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0" />
          <stop offset="35%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="strand-amber" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fcd34d" stopOpacity="0" />
          <stop offset="35%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="strand-orange" x1="1" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#fdba74" stopOpacity="0" />
          <stop offset="35%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="strand-purple" x1="1" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#d8b4fe" stopOpacity="0" />
          <stop offset="35%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      {strands.map((strand) => (
        <motion.path
          key={strand.d}
          d={strand.d}
          stroke={strand.stroke}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
      ))}
      <circle cx="300" cy="190" r="4" fill="#7c3aed" />
    </svg>
  );
}

export function PainSection() {
  return (
    <section id="pain" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <ScatteredTools />

        <h2 className="mx-auto mb-4 max-w-2xl font-display text-4xl font-normal leading-tight tracking-tight text-ink md:text-5xl">
          Job hunting is a <em className="text-purple-700">full-time job</em>
          <br className="hidden md:block" /> you didn't apply for
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-lg text-ink/55">
          Boards, spreadsheets, documents, reminders — your search is scattered
          across tools that don't talk to each other.
        </p>

        <PainCards />

        <ConvergingCurves />

        <h2 className="mb-3 font-display text-4xl font-normal tracking-tight text-ink md:text-5xl">
          Meet <em className="text-purple-700">Iris</em>.
          <br />
          Your complete job-search stack
        </h2>
        <p className="mx-auto max-w-xl text-lg text-ink/55">
          Search, apply, write and track in one place. Fill your profile once —
          Iris handles everything downstream.
        </p>
      </div>
    </section>
  );
}

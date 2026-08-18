import { motion } from "motion/react";
import { AddToChromeButton } from "./add-to-chrome-button";

const bullets = [
  "Scan the page to detect fields",
  "Fill with AI from your resume and profile",
  "Review everything before you send",
  "Sync edits so later pages stay consistent",
];

function ExtensionMock() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-xl shadow-purple-950/10 ring-1 ring-purple-950/5">
        <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50/60 px-4 py-3">
          <span className="size-2.5 rounded-full bg-gray-200" />
          <span className="size-2.5 rounded-full bg-gray-200" />
          <span className="size-2.5 rounded-full bg-gray-200" />
          <span className="ml-3 truncate rounded-md border border-gray-100 bg-white px-3 py-0.5 text-[11px] text-gray-400">
            jobs.example.com/senior-engineer
          </span>
        </div>

        <div className="flex">
          <div className="min-w-0 flex-1 p-4 text-left sm:p-5">
            <p className="text-sm font-semibold text-gray-900">
              Senior Frontend Engineer
            </p>
            <p className="mb-4 text-xs text-gray-400">Northwind Labs</p>

            <div className="mb-3">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[11px] font-medium text-gray-500">
                  Full name
                </span>
                <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[10px] font-medium text-purple-700">
                  Fill with iris
                </span>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-800">
                Jane Applicant
              </div>
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[11px] font-medium text-gray-500">
                  Why this role?
                </span>
                <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[10px] font-medium text-purple-700">
                  Fill with iris
                </span>
              </div>
              <div className="space-y-1.5 rounded-lg border border-purple-100 bg-purple-50/40 px-3 py-2">
                <div className="h-1.5 w-full rounded bg-purple-100/80" />
                <div className="h-1.5 w-5/6 rounded bg-purple-100/80" />
                <div className="h-1.5 w-2/3 rounded bg-purple-100/80" />
              </div>
            </div>
          </div>

          <div className="hidden w-38 shrink-0 flex-col border-l border-gray-100 bg-gray-50/50 p-3 sm:flex">
            <p className="mb-3 font-display text-sm text-purple-700">Iris</p>
            <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-gray-400">
              Resume
            </p>
            <div className="mb-4 rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-[11px] text-gray-600">
              CV.pdf
            </div>
            <div className="mt-auto rounded-lg bg-purple-700 px-2 py-2 text-center text-[10px] font-medium text-white">
              Complete application
            </div>
            <p className="mt-2 text-center text-[10px] text-gray-400">
              You submit — Iris doesn’t
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Extension({
  appUrl,
  extensionUrl,
}: {
  appUrl: string;
  extensionUrl: string;
}) {
  return (
    <section id="extension" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-500">
              Chrome extension
            </span>
            <h2 className="mb-4 mt-3 font-display text-4xl font-normal leading-tight tracking-tight text-ink md:text-5xl">
              Already on the application page? Stay in{" "}
              <em className="text-purple-700">your browser</em>.
            </h2>
            <p className="mb-6 text-[15px] leading-relaxed text-ink/55 md:text-base">
              Iris reads the form in front of you, drafts answers from your
              resume and profile, and lets you review everything before you
              submit. It never hits send. Useful on sites that are picky about
              automation.
            </p>
            <ul className="mb-8 space-y-2.5">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-ink/70"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-[11px] font-semibold text-purple-700">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <AddToChromeButton href={extensionUrl} />
              <a
                href={appUrl}
                className="text-sm font-medium text-ink/50 transition-colors hover:text-purple-700"
              >
                or start in the app →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ExtensionMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

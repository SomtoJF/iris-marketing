import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

function AccountVignette() {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <p className="mb-3 text-xs font-medium text-gray-500">Create account</p>
      <div className="space-y-2">
        <div className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-400">
          you@email.com
        </div>
        <div className="rounded-lg bg-purple-700 px-3 py-2 text-center text-xs font-medium text-white">
          Sign up free
        </div>
      </div>
    </div>
  );
}

function ProfileVignette() {
  const fields = [
    { label: "CV uploaded", done: true },
    { label: "Work history", done: true },
    { label: "Preferences", done: false },
  ];
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <p className="mb-3 text-xs font-medium text-gray-500">
        Application profile
      </p>
      <div className="space-y-2">
        {fields.map((field) => (
          <div
            key={field.label}
            className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-2 text-xs text-gray-600"
          >
            {field.label}
            <span
              className={
                field.done
                  ? "text-emerald-600"
                  : "size-3 animate-pulse rounded-full bg-purple-200"
              }
            >
              {field.done ? "✓" : ""}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ApplyVignette() {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <p className="mb-3 text-xs font-medium text-gray-500">Applying</p>
      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-2 text-xs text-gray-600">
          Senior Frontend Engineer
          <span className="flex items-center gap-1.5 text-purple-700">
            <span className="size-1.5 animate-pulse rounded-full bg-purple-500" />
            Applying…
          </span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-2 text-xs text-gray-600">
          Product Designer
          <span className="text-sky-600">Applied ✓</span>
        </div>
      </div>
    </div>
  );
}

const steps: { title: string; body: string; vignette: ReactNode }[] = [
  {
    title: "Create your account",
    body: "Sign up in seconds — no CV gymnastics, no setup wizard marathon.",
    vignette: <AccountVignette />,
  },
  {
    title: "Fill your application profile",
    body: "Add your CV, work history and preferences once. This becomes the source of truth Iris uses for every application.",
    vignette: <ProfileVignette />,
  },
  {
    title: "Start applying",
    body: "Search roles inside Iris or paste any job URL. Iris fills the forms, writes the letters and tracks every status for you.",
    vignette: <ApplyVignette />,
  },
];

export function HowItWorks() {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 70%", "end 60%"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-normal tracking-tight text-ink md:text-5xl">
            Up and running in <em className="text-purple-700">minutes</em>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-ink/55">
            Three steps between you and your last manual job application.
          </p>
        </div>

        <div ref={railRef} className="relative">
          {/* rail */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-2 bottom-2 w-px bg-ink/10 md:left-1/2"
          >
            <motion.div
              style={{ height: fill }}
              className="w-full bg-gradient-to-b from-purple-400 to-purple-700"
            />
          </div>

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="relative grid grid-cols-[2.5rem_1fr] items-center gap-x-4 gap-y-4 md:grid-cols-2 md:gap-x-16"
              >
                {/* node */}
                <div
                  aria-hidden="true"
                  className="absolute left-5 top-1 z-10 flex -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                >
                  <span className="flex size-9 items-center justify-center rounded-full border border-purple-200 bg-white text-sm font-semibold text-purple-700 shadow-sm">
                    {i + 1}
                  </span>
                </div>

                <div
                  className={
                    "col-start-2 md:col-start-auto " +
                    (i % 2 === 0
                      ? "md:pr-4 md:text-right"
                      : "md:order-2 md:pl-4 md:text-left")
                  }
                >
                  <h3 className="mb-2 font-display text-2xl text-ink md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink/55">
                    {step.body}
                  </p>
                </div>

                <div
                  className={
                    "col-start-2 md:col-start-auto " +
                    (i % 2 === 0 ? "md:order-2 md:pl-4" : "md:pr-4")
                  }
                >
                  {step.vignette}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

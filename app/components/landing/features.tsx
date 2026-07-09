import type { ReactNode } from "react";
import { MagicCard } from "~/components/ui/magic-card";
import { cn } from "~/lib/utils";

function SearchVignette() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-400">
        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        frontend engineer, remote
      </div>
      {["Senior Frontend Engineer · Remote", "React Engineer · Hybrid"].map(
        (job) => (
          <div
            key={job}
            className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-3 py-2 text-xs text-gray-600"
          >
            {job}
            <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[10px] font-medium text-purple-700">
              Apply
            </span>
          </div>
        )
      )}
    </div>
  );
}

function TrackerVignette() {
  const rows = [
    { role: "Product Designer", status: "Interview", tint: "bg-emerald-50 text-emerald-700" },
    { role: "ML Engineer", status: "Applied", tint: "bg-sky-50 text-sky-700" },
    { role: "Backend Engineer", status: "Offer", tint: "bg-amber-50 text-amber-700" },
  ];
  return (
    <div className="flex flex-col gap-2">
      {rows.map((row) => (
        <div
          key={row.role}
          className="flex items-center justify-between rounded-lg border border-gray-100 bg-white px-3 py-2 text-xs text-gray-600"
        >
          {row.role}
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[10px] font-medium",
              row.tint
            )}
          >
            {row.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function UrlVignette() {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs">
      <span className="truncate text-gray-400">
        jobs.example.com/senior-engineer
      </span>
      <span className="ml-auto shrink-0 rounded-full bg-purple-700 px-2.5 py-1 text-[10px] font-medium text-white">
        Apply →
      </span>
    </div>
  );
}

function LetterVignette() {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-3">
      <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-purple-500">
        Drafting…
      </p>
      <div className="space-y-1.5">
        <div className="h-1.5 w-full rounded bg-gray-100" />
        <div className="h-1.5 w-5/6 rounded bg-gray-100" />
        <div className="h-1.5 w-2/3 rounded bg-purple-100" />
      </div>
    </div>
  );
}

function ProfileVignette() {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-3">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex size-6 items-center justify-center rounded-full bg-purple-100 text-[10px] font-semibold text-purple-700">
          You
        </span>
        <div className="h-1.5 w-20 rounded bg-gray-100" />
      </div>
      <div className="flex gap-1.5">
        {["CV", "Work history", "Links"].map((chip) => (
          <span
            key={chip}
            className="rounded-full bg-gray-50 px-2 py-0.5 text-[10px] text-gray-500"
          >
            {chip} ✓
          </span>
        ))}
      </div>
    </div>
  );
}

type Feature = {
  label: string;
  title: string;
  description: string;
  vignette: ReactNode;
  className?: string;
};

const features: Feature[] = [
  {
    label: "Search",
    title: "Job search, built in",
    description:
      "Integrated job discovery. Find open roles without ever leaving the app.",
    vignette: <SearchVignette />,
    className: "md:col-span-3",
  },
  {
    label: "Track",
    title: "Application tracker",
    description:
      "Real-time status across every application, all in one place.",
    vignette: <TrackerVignette />,
    className: "md:col-span-3",
  },
  {
    label: "Apply",
    title: "Any job, any site",
    description:
      "Found a role online? Paste the link and Iris applies on your behalf.",
    vignette: <UrlVignette />,
    className: "md:col-span-2",
  },
  {
    label: "Letters",
    title: "Cover letters, handled",
    description:
      "Personalised letters based on your CV and company research.",
    vignette: <LetterVignette />,
    className: "md:col-span-2",
  },
  {
    label: "Profile",
    title: "Your profile, once",
    description:
      "Fill in your details once. Iris pulls from them for every application.",
    vignette: <ProfileVignette />,
    className: "md:col-span-2",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <h2 className="mb-4 font-display text-4xl font-normal tracking-tight text-ink md:text-5xl">
            Everything you need to <em className="text-purple-700">land the role</em>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-ink/55">
            Purpose-built features that take you from search to offer letter.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {features.map((feature) => (
            <MagicCard
              key={feature.title}
              className={cn(
                "flex cursor-default flex-col justify-between gap-5 rounded-2xl p-6",
                feature.className
              )}
              gradientFrom="#9E7AFF"
              gradientTo="#7c3aed"
              gradientColor="#f3f0ff"
            >
              <div className="pointer-events-none">{feature.vignette}</div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-purple-500">
                  {feature.label}
                </span>
                <h3 className="mb-1 mt-1 text-base font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/55">
                  {feature.description}
                </p>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
}

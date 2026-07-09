import { motion } from "motion/react";
import { cn } from "~/lib/utils";

const applications = [
  {
    company: "Northwind Labs",
    role: "Senior Frontend Engineer",
    status: "Interview",
    initial: "N",
    tint: "bg-sky-100 text-sky-700",
  },
  {
    company: "Verdant Health",
    role: "Product Designer",
    status: "Applied",
    initial: "V",
    tint: "bg-emerald-100 text-emerald-700",
  },
  {
    company: "Halcyon AI",
    role: "Machine Learning Engineer",
    status: "Applying",
    initial: "H",
    tint: "bg-purple-100 text-purple-700",
  },
  {
    company: "Copperline",
    role: "Backend Engineer",
    status: "Offer",
    initial: "C",
    tint: "bg-amber-100 text-amber-700",
  },
  {
    company: "Bluenote",
    role: "Fullstack Engineer",
    status: "Applied",
    initial: "B",
    tint: "bg-rose-100 text-rose-700",
  },
];

const statusStyles: Record<string, string> = {
  Applied: "bg-sky-50 text-sky-700 border-sky-200",
  Interview: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Offer: "bg-amber-50 text-amber-700 border-amber-200",
  Applying: "bg-purple-50 text-purple-700 border-purple-200",
};

function SidebarItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg px-3 py-2 text-xs",
        active
          ? "bg-purple-50 text-purple-700 font-medium"
          : "text-gray-400"
      )}
    >
      <span
        className={cn(
          "size-3 rounded-sm",
          active ? "bg-purple-300" : "bg-gray-200"
        )}
      />
      {label}
    </div>
  );
}

function ApplicationRow({
  app,
  index,
}: {
  app: (typeof applications)[number];
  index: number;
}) {
  const applying = app.status === "Applying";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.12, duration: 0.4 }}
      className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 text-left"
    >
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold",
          app.tint
        )}
      >
        {app.initial}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-medium text-gray-900">
          {app.role}
        </p>
        <p className="truncate text-xs text-gray-400">{app.company}</p>
      </div>
      {applying ? (
        <span className="flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50 px-2.5 py-1 text-[11px] font-medium text-purple-700">
          <span className="size-1.5 animate-pulse rounded-full bg-purple-500" />
          Applying…
        </span>
      ) : (
        <span
          className={cn(
            "rounded-full border px-2.5 py-1 text-[11px] font-medium",
            statusStyles[app.status]
          )}
        >
          {app.status}
        </span>
      )}
    </motion.div>
  );
}

export function HeroMock() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl border border-white/60 bg-white shadow-2xl shadow-purple-950/30 ring-1 ring-purple-950/10"
      >
        {/* window chrome */}
        <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50/60 px-4 py-3">
          <span className="size-2.5 rounded-full bg-gray-200" />
          <span className="size-2.5 rounded-full bg-gray-200" />
          <span className="size-2.5 rounded-full bg-gray-200" />
          <span className="ml-4 rounded-md bg-white border border-gray-100 px-3 py-0.5 text-[11px] text-gray-400">
            app.applywithiris.com
          </span>
        </div>

        <div className="flex">
          {/* sidebar */}
          <div className="hidden w-40 shrink-0 flex-col gap-1 border-r border-gray-100 bg-gray-50/40 p-3 sm:flex">
            <SidebarItem label="Job Search" />
            <SidebarItem label="Applications" active />
            <SidebarItem label="Cover Letters" />
            <SidebarItem label="Profile" />
          </div>

          {/* main panel */}
          <div className="flex-1 p-4 text-left sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Applications
                </p>
                <p className="text-xs text-gray-400">
                  12 active · 3 interviews this week
                </p>
              </div>
              <span className="rounded-full bg-purple-700 px-3 py-1.5 text-[11px] font-medium text-white">
                + New application
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {applications.map((app, i) => (
                <ApplicationRow key={app.company} app={app} index={i} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

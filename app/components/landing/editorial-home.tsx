import { motion } from "motion/react";

export const APP_URL = "https://app.applywithiris.com";
const EXTENSION_URL =
  "https://chromewebstore.google.com/detail/iris/gkafmplebnbdnnbdafgfcnejfmaehhoj?utm_source=marketing";

export function Mark({ className = "" }: { className?: string }) {
  const dots = Array.from({ length: 37 });
  return (
    <div className={`grid grid-cols-7 gap-[3px] ${className}`} aria-hidden="true">
      {dots.map((_, index) => {
        const hidden = [0, 1, 5, 6, 7, 13, 21, 27, 28, 29, 33, 34, 35, 36].includes(index);
        return <span key={index} className={`aspect-square rounded-full bg-current ${hidden ? "opacity-0" : "opacity-100"}`} />;
      })}
    </div>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 100 20" className="h-5 w-full overflow-visible" fill="none" aria-hidden="true">
      <circle cx="4" cy="10" r="3" fill="currentColor" />
      <path d="M8 10H92" stroke="currentColor" strokeWidth="1.5" />
      <path d="M84 3L92 10L84 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

export function ActionArrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span className="ml-5 flex h-7 w-9 items-center justify-center border-l border-current/35 pl-3" aria-hidden="true">
      <svg viewBox="0 0 18 18" className="size-4 fill-none stroke-current" strokeWidth="1.6">
        {diagonal ? (
          <><path d="M4 14 14 4" /><path d="M7 4h7v7" /></>
        ) : (
          <><path d="M2 9h13" /><path d="m10 4 5 5-5 5" /></>
        )}
      </svg>
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-[#f3efe6]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-8">
        <a href="/#top" className="flex items-center gap-3 font-black tracking-[-0.04em] text-ink">
          <Mark className="w-7 text-purple-700" />
          IRIS
        </a>
        <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.12em] md:flex">
          <a href="/#routes" className="hover:text-purple-700">How it works</a>
          <a href="/#process" className="hover:text-purple-700">What Iris does</a>
          <a href="/#extension" className="hover:text-purple-700">Extension</a>
        </nav>
        <a href={APP_URL} className="inline-flex items-center border border-ink bg-ink py-2 pl-4 pr-2 text-xs font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-purple-700">
          Start applying <ActionArrow diagonal />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="overflow-hidden border-b border-ink bg-[#f3efe6] text-ink">
      <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-8 md:px-8 md:pb-16">
        <div className="relative pb-10 pt-4 md:pb-14 md:pt-8">
          <Mark className="absolute right-0 top-10 hidden w-20 text-purple-700 md:grid" />
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-[1200px] text-[clamp(2.65rem,9vw,8rem)] font-black uppercase leading-[1.08] tracking-[-0.025em] [word-spacing:0.08em]"
          >
            I hate job
            <br />
            applications.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-5 max-w-full bg-purple-700 px-3 py-2 text-[clamp(2.25rem,7vw,6.4rem)] font-black uppercase leading-[1.1] tracking-[-0.02em] text-white [word-spacing:0.08em] md:w-fit md:px-5"
          >
            So Iris does them.
          </motion.div>
        </div>

        <div className="grid gap-8 border-t border-ink pt-7 md:grid-cols-[1fr_1fr] md:items-end">
          <p className="max-w-xl text-xl font-semibold leading-snug tracking-[-0.025em] md:text-2xl">
            One-click apply to jobs in Iris, or paste the link to a job you
            found online. We’ll handle the rest.
          </p>
          <div className="md:justify-self-end">
            <p className="mb-5 max-w-sm text-sm leading-6 text-ink/60">
              Iris uses your profile to complete forms, prepare tailored
              answers and cover letters, and keep every application tracked.
            </p>
            <a href={APP_URL} className="inline-flex min-h-13 items-center border border-ink bg-ink py-3 pl-6 pr-3 text-sm font-black uppercase tracking-[0.08em] text-white transition-all hover:-translate-y-1 hover:bg-purple-700">
              Give Iris a job <ActionArrow />
            </a>
          </div>
        </div>

        <div className="mt-14 grid items-stretch border border-ink bg-white md:grid-cols-[1fr_90px_0.65fr_90px_0.9fr]">
          <div className="p-5 md:p-7">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-purple-700">Input / Job URL</p>
            <div className="mt-5 break-all border border-ink p-4 font-mono text-xs text-ink/55">jobs.company.com/product-designer</div>
            <p className="mt-4 text-xs text-ink/45">Paste a role from anywhere on the web.</p>
          </div>
          <div className="hidden items-center px-5 text-purple-700 md:flex"><Arrow /></div>
          <div className="flex flex-col items-center justify-center border-y border-ink bg-purple-700 p-6 text-center text-white md:border-x md:border-y-0">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}>
              <Mark className="w-16" />
            </motion.div>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.18em]">Iris is working</p>
          </div>
          <div className="hidden items-center px-5 text-purple-700 md:flex"><Arrow /></div>
          <div className="relative overflow-hidden p-5 md:p-7">
            <div className="absolute right-4 top-4 rotate-6 border-2 border-purple-700 px-2 py-1 text-sm font-black uppercase text-purple-700 opacity-80 md:text-base">Applied</div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-purple-700">Output / Application</p>
            <p className="mt-5 text-xl font-black uppercase tracking-tight">Product Designer</p>
            <p className="mt-1 text-sm text-ink/50">Application prepared and tracked</p>
            <div className="mt-5 flex items-center gap-2 text-xs font-bold text-emerald-700"><span className="size-2 rounded-full bg-emerald-600" /> COMPLETE</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Routes() {
  return (
    <section id="routes" className="border-b border-white/20 bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-8 border-b border-white/30 pb-8 md:grid-cols-[0.6fr_1.4fr]">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-purple-300">01 / Two ways in</p>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase leading-[1.12] tracking-[-0.02em] [word-spacing:0.06em]">Same result.<br /><span className="text-purple-400">Less applying.</span></h2>
        </div>

        <div className="grid md:grid-cols-2">
          <article className="border-b border-white/20 py-10 md:border-b-0 md:border-r md:pr-10">
            <div className="flex items-start justify-between"><span className="text-sm font-black text-purple-400">01</span><span className="border border-white/30 px-2 py-1 text-[9px] font-bold uppercase tracking-widest">Inside Iris</span></div>
            <h3 className="mt-20 text-3xl font-black uppercase leading-[1.12] tracking-[-0.02em] [word-spacing:0.06em] md:text-4xl">Find a job.<br />Click apply.</h3>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/55">Search for open roles in Iris and start an application without rebuilding your information from scratch.</p>
          </article>
          <article className="py-10 md:pl-10">
            <div className="flex items-start justify-between"><span className="text-sm font-black text-purple-400">02</span><span className="border border-white/30 px-2 py-1 text-[9px] font-bold uppercase tracking-widest">Anywhere else</span></div>
            <h3 className="mt-20 text-3xl font-black uppercase leading-[1.12] tracking-[-0.02em] [word-spacing:0.06em] md:text-4xl">Found one online?<br />Paste the link.</h3>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/55">Bring a job URL from another site. Iris reads the role and starts the same application process.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

const process = [
  ["01", "Reads the job", "Iris pulls in the role, company, and application requirements."],
  ["02", "Matches your profile", "Your resume, work history, links, and preferences become the source of truth."],
  ["03", "Completes the application", "Forms are filled and role-specific questions are prepared from your information."],
  ["04", "Writes the cover letter", "A tailored letter is generated for the role instead of recycling a generic template."],
  ["05", "Tracks what happened", "The role and its application status are stored in your tracker automatically."],
];

function Process() {
  return (
    <section id="process" className="border-b border-ink bg-[#f3efe6] text-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-8 md:grid-cols-[0.6fr_1.4fr]">
          <div><p className="text-[10px] font-black uppercase tracking-[0.16em] text-purple-700">02 / After you click apply</p></div>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase leading-[1.12] tracking-[-0.02em] [word-spacing:0.06em]">The boring part<br />becomes a process.</h2>
        </div>

        <div className="mt-16 border-t border-ink">
          {process.map(([number, title, body], index) => (
            <div key={number} className="grid gap-4 border-b border-ink py-6 md:grid-cols-[0.2fr_0.7fr_1.1fr] md:items-center md:py-8">
              <span className="font-mono text-xs font-bold text-purple-700">{number}</span>
              <h3 className="text-xl font-black uppercase leading-[1.15] tracking-[-0.01em] md:text-2xl">{title}</h3>
              <div className="flex items-center gap-5"><p className="max-w-xl text-sm leading-6 text-ink/55">{body}</p><span className="ml-auto hidden border border-ink bg-white px-2 py-1 text-[9px] font-black uppercase tracking-wider md:block">{index < 2 ? "Ready" : index === 2 ? "Working" : "Queued"}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Receipt() {
  const rows = [
    ["Profile", "Matched"],
    ["Resume", "Attached"],
    ["Questions", "Completed"],
    ["Cover letter", "Generated"],
    ["Tracker", "Updated"],
  ];
  return (
    <section className="border-b border-ink bg-purple-700 text-white">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
        <div className="flex flex-col justify-between border-b border-white/30 p-5 py-16 md:min-h-[620px] md:border-b-0 md:border-r md:p-8 md:py-20">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-purple-200">03 / The receipt</p>
          <div>
            <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-black uppercase leading-[1.12] tracking-[-0.02em] [word-spacing:0.06em]">You click once.<br />Iris keeps count.</h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-purple-100/65">Every application lands in the tracker with a visible status, so automation never means losing track of what happened.</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#ece7dc] p-5 py-16 text-ink md:p-12">
          <div className="w-full max-w-md border border-ink bg-white p-6 shadow-[8px_8px_0_#15131a]">
            <div className="flex items-start justify-between border-b border-dashed border-ink pb-5"><div><p className="text-[10px] font-black uppercase tracking-widest text-purple-700">Application receipt</p><p className="mt-2 font-mono text-xs text-ink/45">IRIS / #000842</p></div><Mark className="w-10 text-purple-700" /></div>
            <div className="border-b border-dashed border-ink py-6"><p className="text-2xl font-black uppercase">Product Designer</p><p className="mt-1 text-sm text-ink/45">Example Company · Remote</p></div>
            <dl className="py-4">
              {rows.map(([label, value]) => <div key={label} className="flex justify-between border-b border-ink/10 py-3 text-xs"><dt className="text-ink/45">{label}</dt><dd className="font-bold uppercase">{value} ✓</dd></div>)}
            </dl>
            <div className="mt-4 border-2 border-purple-700 px-3 py-3 text-center text-xl font-black uppercase tracking-[0.18em] text-purple-700">Application filed</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Extension() {
  return (
    <section id="extension" className="border-b border-ink bg-white text-ink">
      <div className="mx-auto grid max-w-[1440px] md:grid-cols-[0.8fr_1.2fr]">
        <div className="border-b border-ink p-5 py-16 md:border-b-0 md:border-r md:p-8 md:py-24">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-purple-700">04 / Chrome extension</p>
          <h2 className="mt-8 text-[clamp(2.2rem,4.5vw,3.75rem)] font-black uppercase leading-[1.12] tracking-[-0.02em] [word-spacing:0.06em]">When the application needs you.</h2>
        </div>
        <div className="p-5 py-16 md:p-12 md:py-24">
          <p className="max-w-xl text-xl font-semibold leading-snug tracking-[-0.02em]">Already on the job page? Iris can meet you there.</p>
          <p className="mt-5 max-w-xl text-sm leading-6 text-ink/55">The extension scans the form, fills supported fields from your profile, prepares tailored answers, and lets you review everything before you submit.</p>
          <ul className="mt-8 grid gap-px border border-ink bg-ink sm:grid-cols-2">
            {["Detect application fields", "Fill from your profile", "Draft tailored answers", "Review before submitting"].map((item, index) => <li key={item} className="flex min-h-20 items-center gap-3 bg-white p-4 text-xs font-bold uppercase"><span className="font-mono text-purple-700">0{index + 1}</span>{item}</li>)}
          </ul>
          <a href={EXTENSION_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center border border-ink bg-purple-700 py-2.5 pl-5 pr-2 text-xs font-black uppercase tracking-[0.08em] text-white hover:bg-ink">Add Iris to Chrome <ActionArrow diagonal /></a>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-[#f3efe6] px-5 py-20 text-ink md:px-8 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-purple-700">05 / Enough forms</p>
        <h2 className="mt-8 max-w-6xl text-[clamp(2.6rem,8vw,7.5rem)] font-black uppercase leading-[1.08] tracking-[-0.025em] [word-spacing:0.06em]">You have better things to do than apply for jobs.</h2>
        <div className="mt-12 flex flex-col items-start justify-between gap-8 border-t border-ink pt-7 md:flex-row md:items-center">
          <p className="max-w-md text-sm leading-6 text-ink/55">Build your profile once. Give Iris a job. Let the application take care of itself.</p>
          <a href={APP_URL} className="inline-flex min-h-14 items-center border border-ink bg-ink py-3 pl-7 pr-3 text-sm font-black uppercase tracking-[0.08em] text-white hover:bg-purple-700">Start applying <ActionArrow /></a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/20 bg-ink text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-10 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3 text-2xl font-black"><Mark className="w-9 text-purple-400" />IRIS</div>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/55"><a href={APP_URL} className="hover:text-white">App</a><a href={EXTENSION_URL} className="hover:text-white">Chrome extension</a><a href="/privacy" className="hover:text-white">Privacy</a><a href="/terms" className="hover:text-white">Terms</a></div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-2 border-t border-white/20 pt-5 text-[10px] uppercase tracking-[0.12em] text-white/35 sm:flex-row"><span>Automated job applications</span><span>© {new Date().getFullYear()} Iris</span></div>
      </div>
    </footer>
  );
}

export function EditorialHome() {
  return (
    <div className="min-h-screen bg-[#f3efe6] font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <Routes />
        <Process />
        <Receipt />
        <Extension />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

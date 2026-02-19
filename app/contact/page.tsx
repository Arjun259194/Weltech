"use client";

// app/contact/page.tsx

import dynamic from "next/dynamic";

/* ── Leaflet is 100% client-side — never SSR ── */
const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-secondary/10">
      <p className="animate-pulse text-sm text-foreground/40">Loading map…</p>
    </div>
  ),
});

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */

type TeamMember = {
  initials: string;
  color: string;
  name: string;
  role: string;
  department: string;
  phone: string;
  email: string;
};

type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: string;
  bg: string;
  fg: string;
};

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */

const TEAM: TeamMember[] = [
  {
    initials: "RP",
    color: "oklch(0.52 0.20 270)",
    name: "Riya Patel",
    role: "Director",
    department: "Leadership",
    phone: "+91 98765 43210",
    email: "riya@weltech.in",
  },
  {
    initials: "KS",
    color: "oklch(0.52 0.18 150)",
    name: "Karan Shah",
    role: "Head of Academics",
    department: "Academics",
    phone: "+91 98765 43211",
    email: "karan@weltech.in",
  },
  {
    initials: "MS",
    color: "oklch(0.52 0.18 30)",
    name: "Meera Soni",
    role: "Lead Trainer",
    department: "Academics",
    phone: "+91 98765 43212",
    email: "meera@weltech.in",
  },
  {
    initials: "AR",
    color: "oklch(0.52 0.18 340)",
    name: "Arjun Rao",
    role: "Tech Lead",
    department: "Technology",
    phone: "+91 98765 43213",
    email: "arjun@weltech.in",
  },
  {
    initials: "PD",
    color: "oklch(0.52 0.18 200)",
    name: "Priya Desai",
    role: "Admissions Head",
    department: "Operations",
    phone: "+91 98765 43214",
    email: "admissions@weltech.in",
  },
  {
    initials: "VB",
    color: "oklch(0.52 0.18 60)",
    name: "Vivek Bhatt",
    role: "Student Support",
    department: "Operations",
    phone: "+91 98765 43215",
    email: "support@weltech.in",
  },
];

const SOCIALS: SocialLink[] = [
  {
    label: "Instagram",
    handle: "@weltech.english",
    href: "#",
    icon: "IG",
    bg: "oklch(0.62 0.22 340)",
    fg: "#fff",
  },
  {
    label: "Facebook",
    handle: "Weltech English Institute",
    href: "#",
    icon: "FB",
    bg: "oklch(0.42 0.18 265)",
    fg: "#fff",
  },
  {
    label: "YouTube",
    handle: "@WeltechEnglish",
    href: "#",
    icon: "YT",
    bg: "oklch(0.52 0.22 25)",
    fg: "#fff",
  },
  {
    label: "WhatsApp",
    handle: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    icon: "WA",
    bg: "oklch(0.55 0.18 145)",
    fg: "#fff",
  },
];

const DEPT_COLORS: Record<string, string> = {
  Leadership: "bg-primary/10 text-primary",
  Academics: "bg-emerald-100 text-emerald-700",
  Technology: "bg-violet-100 text-violet-700",
  Operations: "bg-amber-100 text-amber-700",
};

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function SocialCard({ s }: { s: SocialLink }) {
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-foreground/8 bg-white px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-black tracking-tight shadow-sm"
        style={{ background: s.bg, color: s.fg }}
      >
        {s.icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-foreground/40">
          {s.label}
        </p>
        <p className="truncate text-sm font-bold text-foreground">{s.handle}</p>
      </div>
      <span className="ml-auto shrink-0 text-foreground/20 transition-transform group-hover:translate-x-1 group-hover:text-primary">
        →
      </span>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.04]"
        style={{ background: s.bg }}
      />
    </a>
  );
}

function TeamContactCard({ m }: { m: TeamMember }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-foreground/8 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-black text-white shadow-sm"
          style={{ background: m.color }}
        >
          {m.initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-[PT_Serif] text-base font-bold leading-tight text-foreground">
            {m.name}
          </p>
          <p className="text-xs text-foreground/50">{m.role}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${DEPT_COLORS[m.department]}`}
        >
          {m.department}
        </span>
      </div>

      <div className="space-y-1.5 border-t border-foreground/6 pt-3">
        <a
          href={`tel:${m.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-3 rounded-xl p-2 text-sm text-foreground/60 transition-colors hover:bg-primary/5 hover:text-primary"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-xs">
            📞
          </span>
          <span className="font-medium tracking-wide">{m.phone}</span>
        </a>
        <a
          href={`mailto:${m.email}`}
          className="flex items-center gap-3 rounded-xl p-2 text-sm text-foreground/60 transition-colors hover:bg-primary/5 hover:text-primary"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-xs">
            ✉️
          </span>
          <span className="truncate font-medium">{m.email}</span>
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">

      {/* ── PAGE HEADER ──────────────────────── */}
      <section className="border-b border-foreground/8 px-6 pb-10 pt-20">
        <div className="mx-auto max-w-5xl">
          <p className="font-[Caveat] text-base tracking-wide text-foreground/40">
            Weltech English Institute &nbsp;/&nbsp; Contact Us
          </p>
          <h1 className="mt-3 font-[PT_Serif] text-5xl font-bold leading-[1.1] text-foreground sm:text-6xl">
            Let's Talk
          </h1>
          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_2fr] md:items-start">
            <div className="flex flex-col gap-3 pt-1">
              <div className="h-px w-full bg-foreground/10" />
              <span className="font-[Caveat] text-sm text-foreground/40">
                Mon – Sat · 8 AM – 8 PM
              </span>
            </div>
            <p className="text-base leading-relaxed text-foreground/60 md:text-lg">
              Have a question about our batches, IELTS prep, or admission? Reach
              out to any team member directly — or come visit us on Ring Road.
              We love walk-ins.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAP ──────────────────────────────── */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* Section heading */}
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 font-[Caveat] text-base text-primary">
                Find Us
              </span>
              <h2 className="mt-2 font-[PT_Serif] text-3xl font-bold text-foreground">
                We're on the Ring Road
              </h2>
            </div>
            <p className="text-right text-sm text-foreground/40">
              Harmony Complex, Ring Road
              <br />
              Surat – 395 002, Gujarat
            </p>
          </div>

          {/* Map container */}
          <div className="overflow-hidden rounded-2xl border border-foreground/8 shadow-md" style={{ height: "420px" }}>
            <LeafletMap />
          </div>

          {/* Info chips */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: "🕐", text: "Mon–Sat, 8 AM–8 PM" },
              { icon: "🚌", text: "5 min from Udhna Darwaja Bus Stop" },
              { icon: "🅿️", text: "Free parking available" },
              { icon: "🏢", text: "2nd Floor, Harmony Complex" },
            ].map((c) => (
              <div
                key={c.text}
                className="flex items-center gap-2 rounded-full border border-foreground/10 bg-white px-4 py-2 text-xs font-medium text-foreground/60 shadow-sm"
              >
                <span>{c.icon}</span>
                {c.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL LINKS ─────────────────────── */}
      <section className="bg-gradient-to-b from-secondary/5 to-background px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 font-[Caveat] text-base text-primary">
              Stay Connected
            </span>
            <h2 className="mt-2 font-[PT_Serif] text-3xl font-bold text-foreground">
              Follow Our Journey
            </h2>
            <p className="mt-1 text-sm text-foreground/50">
              Student wins, batch highlights, IELTS tips — all on our channels.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {SOCIALS.map((s) => (
              <SocialCard key={s.label} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM DIRECTORY ───────────────────── */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 font-[Caveat] text-base text-primary">
              Team Directory
            </span>
            <h2 className="mt-2 font-[PT_Serif] text-3xl font-bold text-foreground">
              Talk to the Right Person
            </h2>
            <p className="mt-1 text-sm text-foreground/50">
              Skip the runaround — reach our team members directly.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <TeamContactCard key={m.email} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────── */}
      <section className="border-t border-foreground/8 bg-gradient-to-r from-secondary/5 to-primary/5 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-[PT_Serif] text-xl font-bold text-foreground">
              Ready to start your journey?
            </p>
            <p className="text-sm text-foreground/50">
              Admissions open year-round — no entrance test required.
            </p>
          </div>
          <a
            href="/admission"
            className="inline-flex h-11 shrink-0 items-center rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground shadow transition-transform hover:scale-105 hover:shadow-md"
          >
            Get Admitted Today →
          </a>
        </div>
      </section>
    </main>
  );
}

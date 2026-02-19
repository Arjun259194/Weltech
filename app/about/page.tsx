// app/about/page.tsx
// Server component — no "use client" needed at top level

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Weltech English Institute",
  description:
    "Learn about Weltech English Institute — Surat's trusted spoken English & IELTS coaching centre since 2015.",
};

/* ─────────────────────────────────────────────
   Tiny inline helpers (all server-safe)
───────────────────────────────────────────── */

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 font-[Caveat] text-base text-primary">
      {children}
    </span>
  );
}

function Divider() {
  return (
    <div className="mx-auto my-2 h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
  );
}

function StatCard({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* decorative blob */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
      <p className="font-[PT_Serif] text-4xl font-bold text-primary">{value}</p>
      <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-foreground/60">
        {label}
      </p>
      {note && <p className="mt-1 text-xs text-foreground/40">{note}</p>}
    </div>
  );
}

function PillarCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-secondary/20 bg-secondary/5 p-6 transition-colors hover:bg-secondary/10">
      <span className="text-3xl">{icon}</span>
      <h3 className="font-[PT_Serif] text-lg font-bold text-foreground">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-foreground/60">{body}</p>
    </div>
  );
}

function TeamCard({
  name,
  role,
  bio,
  initials,
  color,
}: {
  name: string;
  role: string;
  bio: string;
  initials: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/10 bg-white p-8 text-center shadow-sm">
      {/* avatar placeholder */}
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold text-white"
        style={{ background: color }}
      >
        {initials}
      </div>
      <div>
        <p className="font-[PT_Serif] text-xl font-bold text-foreground">
          {name}
        </p>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          {role}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-foreground/60">{bio}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* ── PAGE HEADER ──────────────────────── */}
      <section className="border-b border-foreground/8 px-6 pb-10 pt-20">
        <div className="mx-auto max-w-5xl">
          {/* breadcrumb-style label */}
          <p className="font-[Caveat] text-base text-foreground/40 tracking-wide">
            Weltech English Institute &nbsp;/&nbsp; About Us
          </p>

          {/* page title — left-aligned, editorial weight */}
          <h1 className="mt-3 font-[PT_Serif] text-5xl font-bold leading-[1.1] text-foreground sm:text-6xl">
            Who We Are
          </h1>

          {/* thin rule + standfirst in a two-col editorial layout */}
          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_2fr] md:items-start">
            {/* left: decorative rule + est. tag */}
            <div className="flex flex-col gap-3 pt-1">
              <div className="h-px w-full bg-foreground/10" />
              <span className="font-[Caveat] text-sm text-foreground/40">Est. 2015 · Surat, Gujarat</span>
            </div>

            {/* right: standfirst copy */}
            <p className="text-base leading-relaxed text-foreground/60 md:text-lg">
              Weltech English Institute has spent nearly a decade turning
              hesitant speakers into confident global communicators. From
              morning batches to evening drills, our spoken-English and IELTS
              programmes have helped{" "}
              <strong className="font-semibold text-foreground">4,000+ students</strong>{" "}
              across Surat find their voice — and their band score.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────── */}
      <section className="bg-gradient-to-b from-background to-secondary/5 px-6 py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard value="9+" label="Years Active" note="Est. 2015" />
          <StatCard value="4 000+" label="Students Trained" />
          <StatCard value="7.5" label="Avg. IELTS Band" note="across graduates" />
          <StatCard value="3" label="Daily Batches" note="Morning · Afternoon · Evening" />
        </div>
      </section>

      {/* ── MISSION / VISION ─────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* text */}
            <div className="space-y-6">
              <Tag>Mission &amp; Vision</Tag>
              <h2 className="font-[PT_Serif] text-4xl font-bold leading-tight text-foreground">
                Why We Exist
              </h2>
              <p className="leading-relaxed text-foreground/60">
                Millions of brilliant people in India are held back not by lack
                of ideas, but by the language barrier. Weltech was born to tear
                that barrier down — through structured speaking practice,
                real-world scenarios, and a nurturing classroom culture where
                making mistakes is celebrated, not penalised.
              </p>
              <p className="leading-relaxed text-foreground/60">
                Our vision: every Weltech graduate confidently represents
                themselves, their family, and India on the global stage — in
                boardrooms, universities, and airports around the world.
              </p>
            </div>

            {/* decorative editorial block */}
            <div className="relative">
              <div className="relative z-10 rounded-2xl border border-primary/10 bg-white p-8 shadow-lg">
                <p className="font-[Caveat] text-3xl leading-snug text-foreground/80">
                  Stop translating.
                  <br />
                  <span className="text-primary">Start speaking.</span>
                </p>
                <Divider />
                <ul className="mt-4 space-y-2 text-sm text-foreground/60">
                  {[
                    "Fluency through immersive conversation drills",
                    "IELTS-specific strategies proven at 7+ bands",
                    "Flexible batches to fit every schedule",
                    "Study materials designed for Indian learners",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* shadow card behind */}
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl bg-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PILLARS ──────────────────────── */}
      <section className="bg-gradient-to-b from-secondary/5 to-background px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="text-center">
            <Tag>What We Stand For</Tag>
            <h2 className="mx-auto mt-4 max-w-xl font-[PT_Serif] text-4xl font-bold text-foreground">
              The Weltech Way
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-foreground/60">
              Six core pillars guide every lesson, every batch, and every
              interaction at our institute.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PillarCard
              icon="🎯"
              title="Goal-First Curriculum"
              body="Every lesson is mapped to a real outcome — a job interview, a visa interview, or an IELTS band score — so students always know why they're learning."
            />
            <PillarCard
              icon="🗣️"
              title="Speaking-First Approach"
              body="Grammar is scaffolding, not the house. We prioritise live speaking practice from Day 1, minimising translation habits from the very first class."
            />
            <PillarCard
              icon="🧠"
              title="Mindset Coaching"
              body="Confidence is a skill. We use role-plays, peer feedback, and reflection loops to build the mental muscle for fearless communication."
            />
            <PillarCard
              icon="📖"
              title="In-House Study Material"
              body="Our proprietary workbooks and IELTS prep books are crafted by our faculty — concise, exam-focused, and free of irrelevant filler."
            />
            <PillarCard
              icon="⏰"
              title="Flexible Schedules"
              body="Morning, afternoon, and evening batches mean you don't have to choose between your routine and your future. We fit around your life."
            />
            <PillarCard
              icon="📊"
              title="Progress Tracking"
              body="Regular mock tests, band-score assessments, and personalised feedback sessions keep every student on an upward trajectory."
            />
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="text-center">
            <Tag>The People Behind Weltech</Tag>
            <h2 className="mx-auto mt-4 max-w-xl font-[PT_Serif] text-4xl font-bold text-foreground">
              Meet Our Faculty
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-foreground/60">
              Our instructors are practitioners first — every trainer holds an
              IELTS 8+ band and brings years of corporate English experience to
              the classroom.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TeamCard
              initials="RP"
              color="oklch(0.55 0.18 270)"
              name="Riya Patel"
              role="Founder &amp; Head Trainer"
              bio="IELTS 8.5 | Ex-corporate communications lead | 9+ years transforming Surat students into global speakers."
            />
            <TeamCard
              initials="KS"
              color="oklch(0.55 0.18 150)"
              name="Karan Shah"
              role="IELTS Specialist"
              bio="Scored 8.0 on first attempt | Dedicated IELTS Writing &amp; Speaking coach | 500+ students mentored to their target bands."
            />
            <TeamCard
              initials="MS"
              color="oklch(0.55 0.18 30)"
              name="Meera Soni"
              role="Spoken English &amp; Phonetics"
              bio="British Council certified | Pronunciation &amp; accent reduction expert | Makes even the shyest speakers comfortable on stage."
            />
          </div>
        </div>
      </section>

      {/* ── LOCATION CTA ─────────────────────── */}
      <section className="px-6 pb-28 pt-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-12 text-center text-white shadow-xl">
          <p className="font-[Caveat] text-xl opacity-80">
            📍 Located in Surat, Gujarat
          </p>
          <h2 className="mx-auto mt-3 max-w-lg font-[PT_Serif] text-4xl font-bold leading-tight">
            Your Journey to Fluency Starts Here
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/75">
            Join one of our flexible batches and experience the Weltech
            difference in just the first week.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/admission"
              className="inline-flex h-12 items-center rounded-full bg-white px-8 text-sm font-bold text-primary shadow transition-transform hover:scale-105 hover:shadow-lg"
            >
              Get Admitted Today
            </a>
            <a
              href="/contact"
              className="inline-flex h-12 items-center rounded-full border border-white/40 bg-white/10 px-8 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

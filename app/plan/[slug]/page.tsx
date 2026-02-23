import { notFound } from "next/navigation";

const courses = {
  "grammar": {
    title: "Grammar & Syntax",
    tag: "The Scaffolding",
    description: "Master the structure of English without the struggle. We focus on natural patterns used by native speakers in Surat and beyond.",
    modules: ["Narrative Tenses", "Active vs. Passive Voice", "Perfecting Conditionals"]
  },
  "vocab": {
    title: "Vocabulary Builder",
    tag: "Word Power",
    description: "Expand your lexicon with high-frequency words and idioms that make you sound like a native speaker.",
    modules: ["Collocations", "Contextual Synonyms", "Idiomatic Expressions"]
  },
  "speaking": {
    title: "Speaking Drills",
    tag: "Fluency First",
    description: "Our signature 'Stop Translating' approach. Immersive drills to build immediate oral response and confidence.",
    modules: ["Spontaneous Response", "Phonetics & Accent", "Public Speaking Basics"]
  },
  "writing": {
    title: "Writing Task 1 & 2",
    tag: "Academic Precision",
    description: "Master the art of structured writing, from complex data analysis to persuasive argumentative essays.",
    modules: ["Data Interpretation", "Essay Structuring", "Cohesion & Coherence"]
  },
  "listening": {
    title: "Listening Mock",
    tag: "Auditory Mastery",
    description: "Train your ears to catch different accents and identify key information under exam pressure.",
    modules: ["Predicting Answers", "Accent Recognition", "Note-taking Strategies"]
  },
  "business": {
    title: "Business English",
    tag: "Corporate Edge",
    description: "The language of the global boardroom. Professional communication for career growth in the 21st century.",
    modules: ["Professional Emails", "Leading Meetings", "Corporate Vocabulary"]
  },
  "interview": {
    title: "Interview Prep",
    tag: "Career Ready",
    description: "Strategic coaching for job and visa interviews. Turn your nervousness into professional charisma.",
    modules: ["The 'Tell Me About Yourself' Hook", "Handling Tough Questions", "Body Language & Tone"]
  }
};

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const data = courses[slug as keyof typeof courses];

  // If the slug doesn't match our 7 courses, show 404
  if (!data) notFound();

  return (
    <main className="min-h-screen bg-background p-8 lg:p-16">
      <div className="mx-auto max-w-5xl">

        {/* Editorial Header - Matches About Page Style */}
        <section className="mb-16">
          <p className="font-[Caveat] text-lg text-primary tracking-wide mb-3">
            Weltech Curriculum &nbsp;/&nbsp; {data.tag}
          </p>
          <h1 className="font-[PT_Serif] text-5xl font-bold leading-tight text-foreground sm:text-6xl">
            {data.title}
          </h1>

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_2fr] items-start">
            <div className="flex flex-col gap-3 pt-1">
              <div className="h-px w-full bg-foreground/10" />
              <span className="font-[Caveat] text-sm text-foreground/40 italic">
                Focus: {data.tag}
              </span>
            </div>
            <p className="text-lg leading-relaxed text-foreground/60">
              {data.description}
            </p>
          </div>
        </section>

        {/* Modules Grid - Uses the StatCard/PillarCard logic */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.modules.map((module, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-8 shadow-sm transition-all hover:shadow-md">
              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />

              <p className="font-[PT_Serif] text-4xl font-bold text-primary/20 mb-4 italic">0{i + 1}</p>

              <h3 className="font-[PT_Serif] text-xl font-bold text-foreground mb-2">
                {module}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Core Module
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action - The Weltech "Journey" Block */}
        <section className="mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary to-accent p-12 text-center text-white shadow-xl">
            <p className="font-[Caveat] text-2xl opacity-80 italic">Stop translating.</p>
            <h2 className="mt-2 font-[PT_Serif] text-4xl font-bold">Start Speaking.</h2>
            <div className="mt-8 flex justify-center">
              <button className="h-12 items-center rounded-full bg-white px-10 text-sm font-bold text-primary shadow transition-transform hover:scale-105">
                Launch Lesson Player
              </button>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

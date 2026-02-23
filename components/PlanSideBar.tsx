import Link from "next/link";

const curriculum = [
  {
    category: "Core Skills",
    tag: "The Basics",
    items: [
      { name: "Grammar & Syntax", href: "/plan/grammar", icon: "✍️" },
      { name: "Vocabulary Builder", href: "/plan/vocab", icon: "📚" },
    ],
  },
  {
    category: "Examination",
    tag: "IELTS Focus",
    items: [
      { name: "Speaking Drills", href: "/plan/speaking", icon: "🗣️" },
      { name: "Writing Task 1 & 2", href: "/plan/writing", icon: "📝" },
      { name: "Listening Mock", href: "/plan/listening", icon: "🎧" },
    ],
  },
  {
    category: "Professional",
    tag: "Career Ready",
    items: [
      { name: "Business English", href: "/plan/business", icon: "💼" },
      { name: "Interview Prep", href: "/plan/interview", icon: "🎯" },
    ],
  },
];

export const PlanSideBar = () => {
  return (
    <aside className="max-h-screen overflow-y-auto bg-background px-6 py-10 border-r border-accent">
      <header className="mb-10">
        <p className="font-[Caveat] text-lg text-primary tracking-wide">
          Study Plan
        </p>
        <h2 className="mt-1 font-[PT_Serif] text-3xl font-bold leading-tight text-foreground">
          Course <br /> Curriculum
        </h2>
        <div className="mt-4 h-px w-16 bg-linear-to-r from-primary/50 to-transparent" />
      </header>

      <nav className="space-y-10">
        {curriculum.map((section, idx) => (
          <div key={idx} className="group flex flex-col gap-4">
            {/* Category Label */}
            <div className="flex items-center justify-between border-b border-foreground/5 pb-2">
              <h3 className="font-[PT_Serif] text-sm font-bold uppercase tracking-widest text-foreground/80">
                {section.category}
              </h3>
              <span className="font-[Caveat] text-xs text-foreground/40 italic">
                {section.tag}
              </span>
            </div>

            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block group/link">
                    <div className="relative flex items-center gap-3 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-primary/10 hover:bg-white hover:shadow-sm">
                      <div className="h-1 w-1 rounded-full bg-primary opacity-0 transition-opacity group-hover/link:opacity-100" />

                      <span className="text-sm font-medium text-foreground/60 transition-colors group-hover/link:text-primary">
                        {item.name}
                      </span>

                      <span className="ml-auto text-xs opacity-40 group-hover/link:opacity-100 transition-opacity">
                        {item.icon}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="mt-12 rounded-2xl border border-secondary/20 bg-secondary/5 p-6 text-center">
        <p className="font-[Caveat] text-xl text-foreground/70">
          "Stop translating."
        </p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
          Start Speaking
        </p>
      </div>
    </aside>
  );
};

import { TEAM } from "@/types/contact";
import { TeamContactCard } from "@/components/TeamContactCard";

export function ContactTeamSection() {
  return (
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
  );
}


import { SOCIALS } from "@/types/contact";
import { SocialCard } from "@/components/SocialCard";

export function ContactSocialSection() {
  return (
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
  );
}

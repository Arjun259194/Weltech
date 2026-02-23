export function ContactBottomCtaSection() {
  return (
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
  );
}

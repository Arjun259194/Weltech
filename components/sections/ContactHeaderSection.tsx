export function ContactHeaderSection() {
  return (
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
            out to any team member directly — or come visit us on Ring Road. We
            love walk-ins.
          </p>
        </div>
      </div>
    </section>
  );
}

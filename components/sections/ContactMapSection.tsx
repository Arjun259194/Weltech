"use client"
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-secondary/10">
      <p className="animate-pulse text-sm text-foreground/40">Loading map…</p>
    </div>
  ),
});

export function ContactMapSection() {
  return (
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
        <div
          className="overflow-hidden rounded-2xl border border-foreground/8 shadow-md"
          style={{ height: "420px" }}
        >
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
  );
}


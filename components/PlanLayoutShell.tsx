"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type PlanLayoutShellProps = {
  sidebar: React.ReactNode;
  children: React.ReactNode;
};

export function PlanLayoutShell({ sidebar, children }: PlanLayoutShellProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <div className="mx-auto flex h-full max-w-6xl flex-col lg:flex-row">
        {/* Mobile header with toggle */}
        <div className="flex items-center justify-between border-b border-accent/20 px-4 py-4 lg:hidden">
          <div className="flex flex-col">
            <span className="font-[Caveat] text-xs uppercase tracking-[0.25em] text-primary">
              Study Plan
            </span>
            <span className="font-[PT_Serif] text-lg font-bold leading-tight">
              Course Curriculum
            </span>
          </div>
          <button
            type="button"
            aria-label={isOpen ? "Close curriculum sidebar" : "Open curriculum sidebar"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-background/80 shadow-sm backdrop-blur-sm transition hover:border-primary/40"
          >
            <span className="sr-only">
              {isOpen ? "Close curriculum sidebar" : "Open curriculum sidebar"}
            </span>
            <div className="relative flex h-4 w-4 flex-col items-center justify-between">
              <span
                className={`h-[2px] w-full rounded bg-foreground transition-transform ${
                  isOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full rounded bg-foreground transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[2px] w-full rounded bg-foreground transition-transform ${
                  isOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Desktop layout */}
        <aside className="hidden h-screen max-h-screen shrink-0 overflow-y-auto border-r border-accent/30 lg:block lg:w-72">
          {sidebar}
        </aside>

        <section className="flex-1 overflow-y-auto">
          {children}
        </section>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close curriculum sidebar"
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <div
          className={`absolute inset-y-0 left-0 flex max-w-xs w-full transform bg-background shadow-xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <aside className="max-h-full w-full overflow-y-auto border-r border-accent/30">
            {sidebar}
          </aside>
        </div>
      </div>
    </main>
  );
}


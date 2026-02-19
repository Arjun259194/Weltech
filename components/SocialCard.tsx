import type { SocialLink } from "@/types/contact";

type SocialCardProps = {
  s: SocialLink;
};

export function SocialCard({ s }: SocialCardProps) {
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


import type { TeamMember } from "@/types/contact";
import { DEPT_COLORS } from "@/types/contact";

type TeamContactCardProps = {
  m: TeamMember;
};

export function TeamContactCard({ m }: TeamContactCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-foreground/8 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-black text-white shadow-sm"
          style={{ background: m.color }}
        >
          {m.initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-[PT_Serif] text-base font-bold leading-tight text-foreground">
            {m.name}
          </p>
          <p className="text-xs text-foreground/50">{m.role}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${DEPT_COLORS[m.department]}`}
        >
          {m.department}
        </span>
      </div>

      <div className="space-y-1.5 border-t border-foreground/6 pt-3">
        <a
          href={`tel:${m.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-3 rounded-xl p-2 text-sm text-foreground/60 transition-colors hover:bg-primary/5 hover:text-primary"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-xs">
            📞
          </span>
          <span className="font-medium tracking-wide">{m.phone}</span>
        </a>
        <a
          href={`mailto:${m.email}`}
          className="flex items-center gap-3 rounded-xl p-2 text-sm text-foreground/60 transition-colors hover:bg-primary/5 hover:text-primary"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-xs">
            ✉️
          </span>
          <span className="truncate font-medium">{m.email}</span>
        </a>
      </div>
    </div>
  );
}


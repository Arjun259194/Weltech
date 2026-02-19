export type TeamMember = {
  initials: string;
  color: string;
  name: string;
  role: string;
  department: string;
  phone: string;
  email: string;
};

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: string;
  bg: string;
  fg: string;
};

export const TEAM: TeamMember[] = [
  {
    initials: "RP",
    color: "oklch(0.52 0.20 270)",
    name: "Riya Patel",
    role: "Director",
    department: "Leadership",
    phone: "+91 98765 43210",
    email: "riya@weltech.in",
  },
  {
    initials: "KS",
    color: "oklch(0.52 0.18 150)",
    name: "Karan Shah",
    role: "Head of Academics",
    department: "Academics",
    phone: "+91 98765 43211",
    email: "karan@weltech.in",
  },
  {
    initials: "MS",
    color: "oklch(0.52 0.18 30)",
    name: "Meera Soni",
    role: "Lead Trainer",
    department: "Academics",
    phone: "+91 98765 43212",
    email: "meera@weltech.in",
  },
  {
    initials: "AR",
    color: "oklch(0.52 0.18 340)",
    name: "Arjun Rao",
    role: "Tech Lead",
    department: "Technology",
    phone: "+91 98765 43213",
    email: "arjun@weltech.in",
  },
  {
    initials: "PD",
    color: "oklch(0.52 0.18 200)",
    name: "Priya Desai",
    role: "Admissions Head",
    department: "Operations",
    phone: "+91 98765 43214",
    email: "admissions@weltech.in",
  },
  {
    initials: "VB",
    color: "oklch(0.52 0.18 60)",
    name: "Vivek Bhatt",
    role: "Student Support",
    department: "Operations",
    phone: "+91 98765 43215",
    email: "support@weltech.in",
  },
];

export const SOCIALS: SocialLink[] = [
  {
    label: "Instagram",
    handle: "@weltech.english",
    href: "#",
    icon: "IG",
    bg: "oklch(0.62 0.22 340)",
    fg: "#fff",
  },
  {
    label: "Facebook",
    handle: "Weltech English Institute",
    href: "#",
    icon: "FB",
    bg: "oklch(0.42 0.18 265)",
    fg: "#fff",
  },
  {
    label: "YouTube",
    handle: "@WeltechEnglish",
    href: "#",
    icon: "YT",
    bg: "oklch(0.52 0.22 25)",
    fg: "#fff",
  },
  {
    label: "WhatsApp",
    handle: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    icon: "WA",
    bg: "oklch(0.55 0.18 145)",
    fg: "#fff",
  },
];

export const DEPT_COLORS: Record<string, string> = {
  Leadership: "bg-primary/10 text-primary",
  Academics: "bg-emerald-100 text-emerald-700",
  Technology: "bg-violet-100 text-violet-700",
  Operations: "bg-amber-100 text-amber-700",
};


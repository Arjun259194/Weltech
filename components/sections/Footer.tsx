"use client"

import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from "lucide-react"

const footerLinks = {
  Company: ["About Us", "Our Trainers", "Admission", "Materials", "Contact"],
}

const contacts = [
  { Icon: MapPin, primary: "C-Arcade, Adajan", secondary: "Surat, Gujarat — 395009" },
  { Icon: Phone, primary: "+91 98765 43210", secondary: "Mon – Sat, 9am – 7pm" },
  { Icon: Mail, primary: "hello@weltech.in", secondary: "We reply within 24hrs" },
]

const socials = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background text-foreground font-serif">

      {/* Top Accent Line */}
      <div className="h-0.75 bg-linear-to-r from-transparent via-primary to-transparent opacity-70" />

      {/* CTA Section */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-wrap items-center justify-between gap-8">
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">
              Begin your journey
            </p>
            <h2 className="text-4xl md:text-5xl font-bold italic leading-tight">
              Stop Translating.
              <br />
              <span className="text-muted-foreground">
                Start Speaking.
              </span>
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-4 bg-primary text-primary-foreground
                       px-8 py-4 rounded-full font-sans text-sm font-semibold
                       hover:opacity-90 transition"
          >
            Get Admitted Today
            <span className="w-7 h-7 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <ArrowRight size={14} />
            </span>
          </a>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="text-2xl font-bold tracking-tight mb-1">
              Weltech
            </div>
            <div className="w-9 h-0.5 bg-primary rounded mb-5" />
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Surat's most trusted spoken English institute since 1981 —
              helping students master IELTS, TOEFL, and fluent communication.
            </p>

            <div className="flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border
                             flex items-center justify-center
                             text-muted-foreground hover:text-foreground
                             hover:border-primary/40 hover:bg-primary/10
                             transition"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs tracking-[0.22em] uppercase
                             text-muted-foreground font-semibold mb-6">
                {title}
              </h4>
              <ul className="flex flex-col gap-4">
                {links.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-sans text-sm text-muted-foreground
                                 hover:text-foreground flex items-center gap-2 transition"
                    >
                      <span className="w-3 h-px bg-primary/60 rounded" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.22em] uppercase
                           text-muted-foreground font-semibold mb-6">
              Find Us
            </h4>
            <ul className="flex flex-col gap-6">
              {contacts.map(({ Icon, primary, secondary }) => (
                <li key={primary} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-primary/10
                                  border border-primary/20
                                  flex items-center justify-center mt-1">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-foreground">
                      {primary}
                    </p>
                    <p className="font-sans text-xs text-muted-foreground">
                      {secondary}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} Weltech English Institute · Est. 1981 · Surat, India
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-sans text-xs text-muted-foreground hover:text-foreground transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}

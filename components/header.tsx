"use client";
import Link from "next/link";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/plan", label: "Plan" },
  { href: "/admission", label: "Admission" },
  { href: "/materiels", label: "Materiels" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 16px",
        maxWidth: "91.666%",
        margin: "0 auto",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          textDecoration: "none",
          color: "inherit",
          position: "relative",
          zIndex: 50,
        }}
        onClick={() => setIsOpen(false)}
      >
        Weltech
      </Link>

      {/* Desktop Nav */}
      <nav style={{ display: "flex" }} className="desktop-nav">
        <style>{`
          @media (max-width: 767px) { .desktop-nav { display: none !important; } }
          @media (min-width: 768px) { .hamburger-btn { display: none !important; } .mobile-overlay { display: none !important; } }
          .nav-link { text-decoration: none; color: inherit; }
          .nav-link:hover { text-decoration: underline; text-underline-offset: 2px; }
        `}</style>
        <ul
          style={{
            display: "flex",
            gap: "40px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger Button */}
      <button
        className="hamburger-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        style={{
          position: "relative",
          zIndex: 50,
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          width: 32,
          height: 32,
          padding: 0,
        }}
      >
        {[
          isOpen ? { transform: "rotate(45deg) translate(3.5px, 3.5px)" } : {},
          isOpen ? { opacity: 0, transform: "scaleX(0)" } : {},
          isOpen
            ? { transform: "rotate(-45deg) translate(3.5px, -3.5px)" }
            : {},
        ].map((extraStyle, i) => (
          <span
            key={i}
            style={{
              display: "block",
              height: 2,
              width: 24,
              backgroundColor: "#111",
              transition: "all 0.3s ease",
              transformOrigin: "center",
              ...extraStyle,
            }}
          />
        ))}
      </button>

      {/* Mobile Overlay */}
      <div
        className="mobile-overlay"
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "white",
          zIndex: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
          }}
        >
          {navLinks.map(({ href, label }, i) => (
            <li
              key={href}
              style={{
                fontSize: "1.5rem",
                fontWeight: 500,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isOpen ? 1 : 0,
                transition: `transform 0.3s ease ${i * 60}ms, opacity 0.3s ease ${i * 60}ms`,
              }}
            >
              <a
                href={href}
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

// async function Header() {
//   return (
//     <header className="flex justify-between px-1 py-5 md:md:md:w-11/12 w-full w-full w-full mx-auto">
//       <span className="text-2xl font-semibold"><Link href="/">Weltech</Link></span>
//       <nav>
//         <ul className="flex space-x-10">
//           <li className="hover:underline hover:underline-offset-2">
//             <a href="/">Home</a>
//           </li>
//           <li className="hover:underline hover:underline-offset-2">
//             <a href="/about">About</a>
//           </li>
//           <li className="hover:underline hover:underline-offset-2">
//             <a href="/plan">Plan</a>
//           </li>
//           <li className="hover:underline hover:underline-offset-2">
//             <a href="/admission">Admission</a>
//           </li>
//           <li className="hover:underline hover:underline-offset-2">
//             <a href="/materiels">Materiels</a>
//           </li>
//           <li className="hover:underline hover:underline-offset-2">
//             <a href="/contact">Contact</a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
//
// export default Header;

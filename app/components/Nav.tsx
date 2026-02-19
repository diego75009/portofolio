"use client";

import { useEffect, useState, useRef } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#about" },
];

const sectionIds = ["hero", "work", "skills", "experience", "about"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* Scroll backdrop */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section via IntersectionObserver */
  useEffect(() => {
    const entries = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (observed) => {
        observed.forEach((entry) => {
          entries.set(entry.target.id, entry.intersectionRatio);
        });
        let maxRatio = 0;
        let active = activeSection;
        entries.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            active = id;
          }
        });
        setActiveSection(active);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (href: string) =>
    activeSection === href.replace("#", "");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-bg/80 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-8 md:px-16 lg:px-24 h-[72px]">
          {/* Monogram */}

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-body text-sm tracking-wider uppercase transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-accent"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden font-display font-[700] text-sm tracking-widest uppercase text-text-muted hover:text-accent transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col justify-center px-8 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block font-display font-[700] text-text hover:text-accent transition-colors duration-200"
                style={{
                  fontSize: "var(--text-display)",
                  lineHeight: 1.05,
                  transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

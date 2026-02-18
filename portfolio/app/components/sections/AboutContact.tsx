"use client";

import dynamic from "next/dynamic";
import AnimatedContent from "@/app/components/ui/AnimatedContent";
import SectionLabel from "@/app/components/ui/SectionLabel";
import CountUp from "@/app/components/ui/CountUp";

const FranceMap = dynamic(() => import("@/app/components/ui/FranceMap"), {
  ssr: false,
});

const links = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:diego@example.com",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function AboutContact() {
  return (
    <section id="about" className="py-24 md:py-32 px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — About */}
        <AnimatedContent delay={0} duration={0.6}>
          <div>
            <SectionLabel className="mb-6 block">About</SectionLabel>
            <p className="font-body text-text leading-relaxed text-lg mb-3">
              I&apos;m a frontend developer passionate about building interfaces
              that are as enjoyable to use as they are to look at. I care deeply
              about performance, accessibility and the craft of UI.
            </p>
            <p className="font-body text-text-muted leading-relaxed mb-3">
              I work primarily with React and Next.js, and I love exploring
              animation and interaction design to bring products to life.
            </p>
            <p className="font-body text-text-muted leading-relaxed mb-12">
              Open to new opportunities — freelance or full-time.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <div
                  className="font-display font-[800] text-text leading-none"
                  style={{ fontSize: "var(--text-xl)" }}
                >
                  <CountUp to={3} duration={2} />+
                </div>
                <span className="text-text-muted text-xs tracking-widest uppercase font-body mt-1 block">
                  Years exp.
                </span>
              </div>
              <div>
                <div
                  className="font-display font-[800] text-text leading-none"
                  style={{ fontSize: "var(--text-xl)" }}
                >
                  <CountUp to={12} duration={2} />+
                </div>
                <span className="text-text-muted text-xs tracking-widest uppercase font-body mt-1 block">
                  Projects
                </span>
              </div>
              <div>
                <div
                  className="font-display font-[800] text-text leading-none"
                  style={{ fontSize: "var(--text-xl)" }}
                >
                  <CountUp to={100} duration={2} />%
                </div>
                <span className="text-text-muted text-xs tracking-widest uppercase font-body mt-1 block">
                  Remote-ready
                </span>
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* Right — Contact */}
        <AnimatedContent delay={0.15} duration={0.6}>
          <div>
            <SectionLabel className="mb-6 block">Contact</SectionLabel>

            <div className="flex flex-col gap-1 mb-12">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center justify-between py-4 border-b border-border hover:border-l-2 hover:border-l-accent hover:pl-3 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 text-text group-hover:text-accent transition-colors">
                    <span className="text-text-muted group-hover:text-accent transition-colors">
                      {link.icon}
                    </span>
                    <span className="font-display font-[700] tracking-wider text-lg">
                      {link.label}
                    </span>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="text-text-muted group-hover:text-accent transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200"
                  >
                    <path
                      d="M1 13L13 1M13 1H5M13 1v8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>

            <p className="font-display italic text-text-muted text-lg">
              &ldquo;Let&apos;s build something great.&rdquo;
            </p>
          </div>
        </AnimatedContent>
      </div>

      {/* Location + Map */}
      <AnimatedContent delay={0.1} duration={0.6}>
        <div className="mt-24 border-t border-border pt-16 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text left */}
          <div>
            <SectionLabel className="mb-4 block">Location</SectionLabel>
            <p
              className="font-display font-[800] leading-none text-text mb-4"
              style={{ fontSize: "var(--text-display)" }}
            >
              Paris,
              <br />
              France
            </p>
            <p className="text-text-muted font-body text-sm">
              UTC+1 · Available for remote work worldwide
            </p>
          </div>

          {/* Map right */}
          <div className="relative h-[280px] bg-surface border border-border overflow-hidden">
            <FranceMap />
          </div>
        </div>
      </AnimatedContent>

      {/* Footer */}
      <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <span className="text-text-muted text-sm font-body">
          &copy; 2025 Diego Lacroix
        </span>
        <span className="text-text-muted text-sm font-body">
          Built with Next.js + React Bits
        </span>
      </div>
    </section>
  );
}

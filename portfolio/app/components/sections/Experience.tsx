"use client";

import AnimatedContent from "@/app/components/ui/AnimatedContent";
import SectionLabel from "@/app/components/ui/SectionLabel";

const experiences = [
  {
    company: "AnalogWay",
    url: "https://www.analogway.com/",
    role: "Software Engineer Intern — Fullstack",
    period: "Sept 2024 – Dec 2024",
    bullets: [
      "Built a Tailwind CSS Design System deployed across multiple 4K/8K industrial video products.",
      "Migrated a legacy JavaScript codebase to a modular TypeScript architecture.",
      "Refactored the UI of a real-time Web RCS app used for critical video system control.",
      "Worked on low-latency streams alongside firmware, hardware and product teams.",
    ],
    tech: ["TypeScript", "React", "Tailwind CSS", "Figma"],
  },
  {
    company: "Docaposte",
    url: "https://www.docaposte.com/",
    role: "Backend & Frontend Developer Intern",
    period: "Sept 2022 – Dec 2022",
    bullets: [
      "Developed Spring Boot and Node.js microservices for critical client workflows.",
      "Implemented Redis cache mechanisms, significantly reducing database load.",
      "Integrated responsive React interfaces ensuring consistent UX across mobile and desktop.",
      "Participated in full cycles: design, development, testing and deployment.",
    ],
    tech: ["Java", "Spring Boot", "Node.js", "React", "Redis"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24 md:py-32 px-8 md:px-16 lg:px-24">
      <AnimatedContent delay={0} duration={0.5}>
        <SectionLabel className="mb-4 block">Experience</SectionLabel>
        <div className="flex items-end gap-6 mb-16">
          <h2
            className="font-display font-[800] leading-normal text-text pb-2"
            style={{ fontSize: "var(--text-display)" }}
          >
            WORK
          </h2>
          <div className="flex-1 h-[3px] bg-accent mb-3 hidden md:block" />
        </div>
      </AnimatedContent>

      <div className="flex flex-col divide-y divide-border">
        {experiences.map((exp, i) => (
          <AnimatedContent key={exp.company} delay={i * 0.1} duration={0.6}>
            <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
              {/* Left — company + meta */}
              <div>
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2"
                >
                  <h3
                    className="font-display font-[800] leading-normal text-text mb-3 pb-2 group-hover:text-accent transition-colors"
                    style={{ fontSize: "var(--text-xl)" }}
                  >
                    {exp.company}
                  </h3>
                  <span className="text-text-muted group-hover:text-accent transition-colors mb-3 opacity-0 group-hover:opacity-100">↗</span>
                </a>
                <p className="font-body text-text-muted text-sm mb-1">
                  {exp.role}
                </p>
                <p className="font-body text-accent text-xs tracking-widest uppercase">
                  {exp.period}
                </p>
              </div>

              {/* Right — bullets + tech */}
              <div>
                <ul className="flex flex-col gap-3 mb-8">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 font-body text-text-muted leading-relaxed"
                    >
                      <span className="text-accent mt-1 shrink-0">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 border border-border text-text-muted font-body tracking-wider uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>

    </section>
  );
}

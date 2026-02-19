"use client";

import AnimatedContent from "@/app/components/ui/AnimatedContent";
import SectionLabel from "@/app/components/ui/SectionLabel";

const stack = [
  {
    category: "Language",
    tools: "TypeScript / JavaScript / HTML / CSS",
  },
  {
    category: "Framework",
    tools: "React / Next.js / React Native",
  },
  {
    category: "Styling",
    tools: "Tailwind CSS / CSS Modules / Framer Motion",
  },
  {
    category: "Build",
    tools: "Vite / Webpack / Turbopack",
  },
  {
    category: "Tooling",
    tools: "Git / Figma / Storybook / Vitest",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-surface"
    >
      {/* Header */}
      <AnimatedContent delay={0} duration={0.5}>
        <SectionLabel className="mb-4 block">Expertise</SectionLabel>
        <div className="flex items-end gap-6 mb-16">
          <h2
            className="font-display font-[800] leading-none text-text"
            style={{ fontSize: "var(--text-display)" }}
          >
            STACK
          </h2>
          <div className="flex-1 h-[3px] bg-accent mb-3 hidden md:block" />
        </div>
      </AnimatedContent>

      {/* Skills rows — slide in from left */}
      <div className="divide-y divide-border">
        {stack.map((row, i) => (
          <AnimatedContent
            key={row.category}
            direction="horizontal"
            distance={60}
            reverse={true}
            delay={i * 0.08}
            duration={0.6}
            ease="power2.out"
          >
            <div className="flex flex-col gap-1 py-6 md:py-8 md:grid md:grid-cols-[200px_1fr] md:items-baseline md:gap-6">
              {/* Category */}
              <span className="text-text-muted text-xs font-body tracking-[0.2em] uppercase">
                {row.category}
              </span>
              {/* Tools */}
              <span
                className="font-display font-[400] text-text"
                style={{ fontSize: "var(--text-xl)" }}
              >
                {row.tools}
              </span>
            </div>
          </AnimatedContent>
        ))}
      </div>

      {/* Bottom lime accent strip */}
      <div className="w-full h-1 bg-accent mt-16" />

    </section>
  );
}

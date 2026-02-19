"use client";

import Link from "next/link";
import SpotlightCard from "@/app/components/ui/SpotlightCard";
import AnimatedContent from "@/app/components/ui/AnimatedContent";
import SectionLabel from "@/app/components/ui/SectionLabel";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="work" className="relative overflow-hidden py-24 md:py-32 px-8 md:px-16 lg:px-24">
      {/* Section header */}
      <AnimatedContent delay={0} duration={0.5}>
        <SectionLabel className="mb-4 block">Selected Work</SectionLabel>
        <div className="flex items-end gap-6 mb-16">
          <h2
            className="font-display font-[800] leading-none text-text"
            style={{ fontSize: "var(--text-display)" }}
          >
            WORK
          </h2>
          {/* Lime rule */}
          <div className="flex-1 h-[3px] bg-accent mb-3 hidden md:block" />
        </div>
      </AnimatedContent>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {projects.map((project, i) => (
          <AnimatedContent
            key={project.id}
            delay={i * 0.1}
            duration={0.7}
            className={project.featured ? "md:col-span-2" : ""}
          >
            <Link href={`/projects/${project.id}`} className="block h-full group/card cursor-pointer">
              {/* Override SpotlightCard default rounded/bg/padding styles */}
              <SpotlightCard
                spotlightColor="rgba(232, 255, 71, 0.07)"
                className="!rounded-none !bg-surface !border-border !p-0 h-full"
              >
                <div className="p-8 md:p-10 flex flex-col gap-4 h-full min-h-[280px]">
                  {/* Year */}
                  <span className="text-text-muted text-sm font-body self-end">
                    {project.year}
                  </span>

                  {/* Title */}
                  <h3
                    className="font-display font-[700] text-text leading-tight group-hover/card:text-accent transition-colors"
                    style={{ fontSize: "var(--text-xl)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted font-body leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 border border-border text-text-muted font-body tracking-wider uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <span className="inline-flex items-center gap-2 text-accent font-display text-sm font-[700] tracking-wider uppercase mt-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                    View Case Study →
                  </span>
                </div>
              </SpotlightCard>
            </Link>
          </AnimatedContent>
        ))}
      </div>

    </section>
  );
}

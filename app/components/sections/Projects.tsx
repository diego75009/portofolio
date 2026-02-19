"use client";

import { useRouter } from "next/navigation";
import SpotlightCard from "@/app/components/ui/SpotlightCard";
import AnimatedContent from "@/app/components/ui/AnimatedContent";
import SectionLabel from "@/app/components/ui/SectionLabel";
import { projects } from "@/lib/projects";

export default function Projects() {
  const router = useRouter();

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
            <div
              className="block h-full group/card cursor-pointer"
              onClick={() => router.push(`/projects/${project.id}`)}
            >
              {/* Override SpotlightCard default rounded/bg/padding styles */}
              <SpotlightCard
                spotlightColor="rgba(232, 255, 71, 0.07)"
                className="!rounded-none !bg-surface !border-border !p-0 h-full"
              >
                <div className="p-8 md:p-10 flex flex-col gap-4 h-full min-h-[280px]">
                  {/* Year + GitHub */}
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted text-sm font-body">
                      {project.year}
                    </span>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="GitHub"
                        className="text-text-muted hover:text-accent transition-colors"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                      </a>
                    )}
                  </div>

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
            </div>
          </AnimatedContent>
        ))}
      </div>

    </section>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import Nav from "@/app/components/Nav";
import SectionLabel from "@/app/components/ui/SectionLabel";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <>
      <Nav />

      <main className="min-h-screen bg-bg pt-28 pb-24 px-8 md:px-16 lg:px-24">
        {/* Back link */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-text-muted font-body text-sm tracking-wider uppercase hover:text-accent transition-colors mb-12"
        >
          ← Back
        </Link>

        {/* Header */}
        <div className="mb-12">
          <SectionLabel className="mb-4 block">{project.year}</SectionLabel>
          <div className="flex items-end gap-6 mb-8">
            <h1
              className="font-display font-[800] leading-tight text-text"
              style={{ fontSize: "clamp(1.75rem, 6vw, 6rem)" }}
            >
              {project.title.toUpperCase()}
            </h1>
            <div className="flex-1 h-[3px] bg-accent mb-3 hidden md:block" />
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 border border-border text-text-muted font-body tracking-wider uppercase"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-12">
            {project.images.map((src, i) => (
              <div key={i} className="relative aspect-video bg-surface overflow-hidden">
                <Image
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Long description */}
        <div className="max-w-3xl mb-16">
          {project.longDescription.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-text-muted font-body leading-relaxed text-base mb-6 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text font-display font-[700] text-sm tracking-wider uppercase hover:border-accent hover:text-accent transition-colors"
            >
              GitHub →
            </a>
          )}
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-display font-[700] text-sm tracking-wider uppercase hover:bg-accent/90 transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>
      </main>
    </>
  );
}

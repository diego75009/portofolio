import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Nav from "@/app/components/Nav";
import SectionLabel from "@/app/components/ui/SectionLabel";
import ImageSlider from "@/app/components/ui/ImageSlider";

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

  const hasImages = project.images && project.images.length > 0;

  return (
    <>
      <Nav />

      <main className="bg-bg min-h-screen">
        <div className={`flex flex-col ${hasImages ? "lg:flex-row lg:min-h-screen" : ""}`}>

          {/* LEFT — text panel */}
          <div
            className={`flex flex-col justify-between pt-28 pb-12 px-8 md:px-12 lg:px-16 ${
              hasImages
                ? "lg:w-1/2 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto"
                : "max-w-4xl"
            }`}
          >
            <div className="flex flex-col gap-10">
              {/* Back */}
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-text-muted font-body text-sm tracking-wider uppercase hover:text-accent transition-colors self-start"
              >
                ← Back
              </Link>

              {/* Title */}
              <div>
                <SectionLabel className="mb-3 block">{project.year}</SectionLabel>
                <h1
                  className="font-display font-[800] leading-tight text-text"
                  style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
                >
                  {project.title.toUpperCase()}
                </h1>
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

              {/* Long description */}
              <div>
                {project.longDescription.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-text-muted font-body leading-relaxed text-base mb-5 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
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
          </div>

          {/* RIGHT — sticky image slider */}
          {hasImages && (
            <div className="h-72 sm:h-96 lg:w-1/2 lg:sticky lg:top-0 lg:h-screen border-t border-border lg:border-t-0 lg:border-l">
              <ImageSlider images={project.images!} title={project.title} />
            </div>
          )}
        </div>
      </main>
    </>
  );
}

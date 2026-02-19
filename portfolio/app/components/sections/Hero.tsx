"use client";

import dynamic from "next/dynamic";
import BlurText from "@/app/components/ui/BlurText";
import DecryptedText from "@/app/components/ui/DecryptedText";
import MagnetButton from "@/app/components/ui/MagnetButton";
import SectionLabel from "@/app/components/ui/SectionLabel";

const Aurora = dynamic(() => import("@/app/components/ui/Aurora"), {
  ssr: false,
});

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-svh flex items-center overflow-hidden"
    >
      {/* Aurora background — real OGL WebGL, very subtle */}
      <div className="absolute inset-0 opacity-20">
        <Aurora
          colorStops={["#E8FF47", "#2a2a0a", "#0A0A0A"]}
          amplitude={1.0}
          blend={0.5}
          speed={0.5}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
        {/* Label */}
        <SectionLabel className="mb-6 md:mb-8 block">
          Available for freelance work
        </SectionLabel>

        {/* Name — two lines, Syne 800, hero size */}
        <div
          className="font-display font-[800] leading-[0.9] tracking-tight mb-4"
          style={{ fontSize: "var(--text-hero)" }}
        >
          <BlurText
            text="DIEGO"
            animateBy="words"
            direction="top"
            delay={200}
            stepDuration={0.5}
            className="font-display font-[800]"
          />
          <BlurText
            text="LACROIX"
            animateBy="words"
            direction="top"
            delay={200}
            stepDuration={0.5}
            className="font-display font-[800]"
          />
        </div>

        {/* Decrypted subtitle — scramble effect then reveal */}
        <div className="mb-10 md:mb-12">
          <DecryptedText
            text="FRONTEND DEVELOPER"
            animateOn="view"
            sequential={true}
            revealDirection="start"
            speed={40}
            maxIterations={8}
            className="text-accent font-display font-[700] tracking-[0.2em] text-xl md:text-2xl"
            encryptedClassName="text-text-muted font-display font-[700] tracking-[0.2em] text-xl md:text-2xl"
          />
        </div>

        {/* CTAs */}
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <MagnetButton variant="solid" onClick={() => scrollTo("work")}>
            View Work
          </MagnetButton>
          <MagnetButton variant="outline" onClick={() => scrollTo("about")}>
            Get in Touch
          </MagnetButton>
          <MagnetButton variant="outline" href="/Diego_Lacroix_CV.pdf" download>
            Download CV ↓
          </MagnetButton>
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-arrow z-[1001]">
        <span className="text-text-muted text-xs tracking-widest uppercase font-body">
          Scroll
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          className="text-text-muted"
        >
          <path
            d="M8 0v20M1 13l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

    </section>
  );
}

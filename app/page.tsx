"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";

import Nav from "@/app/components/Nav";
import Hero from "@/app/components/sections/Hero";
import Projects from "@/app/components/sections/Projects";
import Skills from "@/app/components/sections/Skills";
import Experience from "@/app/components/sections/Experience";
import AboutContact from "@/app/components/sections/AboutContact";

import LenisProvider from "@/app/components/ui/LenisProvider";
import ScrollProgress from "@/app/components/ui/ScrollProgress";
import LoadingScreen from "@/app/components/ui/LoadingScreen";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Loading screen */}
      <AnimatePresence>
        {!loaded && (
          <LoadingScreen onComplete={() => setLoaded(true)} />
        )}
      </AnimatePresence>

      {/* Main app */}
      <LenisProvider>
        <Nav />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <AboutContact />
        </main>
      </LenisProvider>
    </>
  );
}

"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { AnimatePresence } from "motion/react";

// useLayoutEffect on client (before paint), useEffect on server (no-op)
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

import Nav from "@/app/components/Nav";
import Hero from "@/app/components/sections/Hero";
import Projects from "@/app/components/sections/Projects";
import Skills from "@/app/components/sections/Skills";
import Experience from "@/app/components/sections/Experience";
import AboutContact from "@/app/components/sections/AboutContact";

import LenisProvider from "@/app/components/ui/LenisProvider";
import ScrollProgress from "@/app/components/ui/ScrollProgress";
import LoadingScreen from "@/app/components/ui/LoadingScreen";

// Persists across client-side navigations, resets on full page refresh
let hasShownLoading = false;

export default function Home() {
  const [loaded, setLoaded] = useState(hasShownLoading);

  // Before first paint: check sessionStorage to skip loading on return visits
  // (handles hard navigations where the module-level var was reset)
  useIsomorphicLayoutEffect(() => {
    if (!loaded && sessionStorage.getItem("portfolio_loaded")) {
      hasShownLoading = true;
      setLoaded(true);
    }
  }, []);

  const handleLoadComplete = () => {
    hasShownLoading = true;
    sessionStorage.setItem("portfolio_loaded", "1");
    setLoaded(true);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Loading screen — only on first visit */}
      <AnimatePresence>
        {!loaded && (
          <LoadingScreen onComplete={handleLoadComplete} />
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

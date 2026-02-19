"use client";

import Nav from "@/app/components/Nav";
import Hero from "@/app/components/sections/Hero";
import Projects from "@/app/components/sections/Projects";
import Skills from "@/app/components/sections/Skills";
import Experience from "@/app/components/sections/Experience";
import AboutContact from "@/app/components/sections/AboutContact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <AboutContact />
      </main>
    </>
  );
}

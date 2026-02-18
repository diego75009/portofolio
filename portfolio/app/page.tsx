"use client";

import Nav from "@/app/components/Nav";
import Hero from "@/app/components/sections/Hero";
import Projects from "@/app/components/sections/Projects";
import Skills from "@/app/components/sections/Skills";
import AboutContact from "@/app/components/sections/AboutContact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <AboutContact />
      </main>
    </>
  );
}

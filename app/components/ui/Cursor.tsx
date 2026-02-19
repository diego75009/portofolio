"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows instantly
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    };

    // Hover detection
    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    const addListeners = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);
    addListeners();

    // Re-add listeners when DOM changes (e.g. mobile menu opens)
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Dot — follows instantly */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-accent transition-opacity duration-200"
        style={{
          width: 6,
          height: 6,
          opacity: hovered ? 0 : 1,
          willChange: "transform",
        }}
      />
      {/* Ring — follows with inertia */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border border-accent transition-all duration-200"
        style={{
          width: hovered ? 56 : 36,
          height: hovered ? 56 : 36,
          willChange: "transform",
        }}
      />
    </>
  );
}

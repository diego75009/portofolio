"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

interface ImageSliderProps {
  images: string[];
  title: string;
}

export default function ImageSlider({ images, title }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  const prev = () => go((current - 1 + images.length) % images.length);
  const next = () => go((current + 1) % images.length);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%" }),
    center: { x: 0 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%" }),
  };

  if (images.length === 0) return null;

  return (
    <div className="relative h-full flex flex-col">
      {/* Image area */}
      <div className="relative flex-1 overflow-hidden bg-surface">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.42, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`${title} — ${current + 1}`}
              fill
              sizes="50vw"
              className="object-contain p-6 lg:p-10"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls bar */}
      <div className="flex items-center justify-between gap-6 px-8 py-5 border-t border-border shrink-0">
        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Précédent"
          className="text-text-muted hover:text-accent transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M12 2L5 9l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Image ${i + 1}`}
              className={`h-[2px] rounded-none transition-all duration-300 ${
                i === current ? "w-8 bg-accent" : "w-3 bg-border hover:bg-text-muted"
              }`}
            />
          ))}
        </div>

        {/* Counter + Next */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-body text-text-muted tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
          <button
            onClick={next}
            aria-label="Suivant"
            className="text-text-muted hover:text-accent transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6 2l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

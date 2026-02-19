"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const EASE = [0.76, 0, 0.24, 1] as const;

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    // Animate counter 0 → 100 over 1.8s
    const controls = animate(0, 100, {
      duration: 1.8,
      ease: "easeInOut",
      onUpdate: (v) => {
        setCount(Math.round(v));
        setBarWidth(v);
      },
    });

    // Trigger exit after 2.2s
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2200);

    return () => {
      controls.stop();
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <div className="fixed inset-0 z-[9998] overflow-hidden">
          {/* Top panel */}
          <motion.div
            className="absolute inset-x-0 top-0 bottom-1/2 bg-bg flex flex-col items-center justify-end pb-8"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {/* Name */}
            <p
              className="font-display font-[800] text-text tracking-[0.15em] uppercase"
              style={{ fontSize: "clamp(1.5rem, 5vw, 4rem)" }}
            >
              DIEGO LACROIX
            </p>
          </motion.div>

          {/* Bottom panel */}
          <motion.div
            className="absolute inset-x-0 top-1/2 bottom-0 bg-bg flex flex-col items-center justify-start pt-8 gap-6"
            exit={{ y: "100%" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {/* Counter */}
            <span
              className="font-display font-[800] text-accent tabular-nums"
              style={{ fontSize: "clamp(1rem, 3vw, 2rem)" }}
            >
              {String(count).padStart(3, "0")}
            </span>

            {/* Progress bar */}
            <div className="w-64 h-[2px] bg-border relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-accent transition-none"
                style={{ width: `${barWidth}%` }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

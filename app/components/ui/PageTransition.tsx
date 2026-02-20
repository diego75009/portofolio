"use client";

import {
  createContext,
  useContext,
  useRef,
  useCallback,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { animate } from "motion/react";

type PageTransitionCtx = {
  navigate: (href: string) => void;
};

const PageTransitionContext = createContext<PageTransitionCtx>({
  navigate: () => {},
});

export function usePageTransition() {
  return useContext(PageTransitionContext);
}

const EASE = [0.76, 0, 0.24, 1] as const;
const DURATION = 0.42;

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);
  const busy = useRef(false);

  const navigate = useCallback(
    async (href: string) => {
      if (busy.current) return;
      const el = overlayRef.current;
      if (!el) {
        router.push(href);
        return;
      }

      busy.current = true;

      // Reset position to bottom (hidden)
      el.style.transform = "translateY(100%)";

      // Slide in from bottom → cover screen
      await new Promise<void>((resolve) => {
        animate(el, { y: ["100%", "0%"] }, { duration: DURATION, ease: EASE, onComplete: resolve });
      });

      // Navigate while overlay is covering everything
      router.push(href);

      // Hold briefly so the new page can render behind the overlay
      await new Promise<void>((r) => setTimeout(r, 80));

      // Slide out to top → reveal new page
      await new Promise<void>((resolve) => {
        animate(el, { y: ["0%", "-100%"] }, { duration: DURATION, ease: EASE, onComplete: resolve });
      });

      // Reset to bottom for next use
      el.style.transform = "translateY(100%)";
      busy.current = false;
    },
    [router]
  );

  return (
    <PageTransitionContext.Provider value={{ navigate }}>
      {children}
      <div
        ref={overlayRef}
        style={{ transform: "translateY(100%)" }}
        className="fixed inset-0 z-[9999] bg-bg pointer-events-none"
      />
    </PageTransitionContext.Provider>
  );
}

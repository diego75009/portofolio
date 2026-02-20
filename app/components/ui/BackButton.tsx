"use client";

import { usePageTransition } from "@/app/components/ui/PageTransition";

export default function BackButton() {
  const { navigate } = usePageTransition();

  return (
    <button
      onClick={() => navigate("/#work")}
      className="inline-flex items-center gap-2 text-text-muted font-body text-sm tracking-wider uppercase hover:text-accent transition-colors self-start"
    >
      ← Back
    </button>
  );
}

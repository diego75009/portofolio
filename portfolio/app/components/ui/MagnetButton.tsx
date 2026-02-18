"use client";

import Magnet from "./Magnet";

interface MagnetButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "solid" | "outline";
  className?: string;
}

export default function MagnetButton({
  children,
  onClick,
  href,
  variant = "solid",
  className = "",
}: MagnetButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-8 py-4 font-display font-[700] text-sm tracking-widest uppercase transition-colors duration-200 cursor-pointer";

  const variantClasses =
    variant === "solid"
      ? "bg-accent text-bg hover:bg-accent/90"
      : "border border-accent text-accent hover:bg-accent hover:text-bg";

  const combined = `${baseClasses} ${variantClasses} ${className}`;

  const inner = href ? (
    <a href={href} className={combined}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={combined}>
      {children}
    </button>
  );

  return (
    <Magnet padding={60} magnetStrength={2.5}>
      {inner}
    </Magnet>
  );
}

"use client";

interface MagnetButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  variant?: "solid" | "outline";
  className?: string;
}

export default function MagnetButton({
  children,
  onClick,
  href,
  download,
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

  if (href) {
    return (
      <a href={href} download={download} className={combined}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combined}>
      {children}
    </button>
  );
}

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`font-display text-xs font-bold tracking-[0.3em] uppercase text-accent ${className}`}
    >
      {children}
    </span>
  );
}

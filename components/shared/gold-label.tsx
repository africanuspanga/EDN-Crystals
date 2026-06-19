import { cn } from "@/lib/utils";

interface GoldLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function GoldLabel({ children, className }: GoldLabelProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold uppercase tracking-[0.14em] text-[#ce9f3d]",
        className
      )}
    >
      {children}
    </span>
  );
}

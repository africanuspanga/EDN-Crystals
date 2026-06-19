import { cn } from "@/lib/utils";

interface StatBlockProps {
  title: string;
  description: string;
  className?: string;
}

export function StatBlock({ title, description, className }: StatBlockProps) {
  return (
    <div className={cn("relative", className)}>
      <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-white/80">{description}</p>
    </div>
  );
}

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureItem({
  icon: Icon,
  title,
  description,
  className,
}: FeatureItemProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      <div className="shrink-0">
        <Icon className="h-6 w-6 text-[#d2a456]" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="text-base font-semibold text-[#002a8a]">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-[#667085]">
          {description}
        </p>
      </div>
    </div>
  );
}

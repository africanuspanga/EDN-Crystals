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
        <Icon className="h-6 w-6 text-[#ce9f3d]" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="text-base font-semibold text-[#07132f]">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-[#667085]">
          {description}
        </p>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
import { GoldLabel } from "./gold-label";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <GoldLabel className="mb-4">{eyebrow}</GoldLabel>}
      <h2
        className={cn(
          "text-3xl font-medium tracking-tight text-[#07132f] sm:text-4xl lg:text-5xl",
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-[#667085] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

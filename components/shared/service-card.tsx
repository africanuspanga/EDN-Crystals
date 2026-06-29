import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
  image: string;
  className?: string;
  size?: "large" | "medium" | "compact" | "wide";
}

export function ServiceCard({
  number,
  title,
  description,
  href,
  image,
  className,
  size = "medium",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex overflow-hidden rounded-2xl bg-[#f8fafc] transition-shadow duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#d2a456]",
        size === "wide" ? "flex-col sm:flex-row" : "flex-col",
        size === "large" && "row-span-2",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          size === "large"
            ? "aspect-[4/5] w-full"
            : size === "wide"
            ? "aspect-[16/10] w-full sm:aspect-square sm:w-2/5"
            : "aspect-[16/10] w-full"
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b294c]/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 text-5xl font-semibold text-[#d2a456]/90 sm:text-6xl">
          {number}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-[#1b294c] group-hover:text-[#1b294c] sm:text-xl">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#667085]">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#d2a456]">
          Explore service
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

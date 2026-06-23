import Image from "next/image";
import { cn } from "@/lib/utils";
import { GoldLabel } from "./gold-label";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[45vh] items-center bg-[#002a8a] pb-24 pt-32 sm:min-h-[50vh] sm:pb-32 sm:pt-40",
        className
      )}
    >
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002a8a]/90 via-[#002a8a]/70 to-[#002a8a]/50" />
        </>
      )}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {eyebrow && <GoldLabel className="mb-4">{eyebrow}</GoldLabel>}
        <h1 className="max-w-4xl text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

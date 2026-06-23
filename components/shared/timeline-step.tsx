"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
}

export function TimelineStep({
  number,
  title,
  description,
  isLast = false,
  className,
}: TimelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("relative pl-8 sm:pl-0", className)}
    >
      {/* Desktop connector */}
      <div
        className={cn(
          "absolute left-0 top-3 hidden h-[2px] bg-[#d2a456]/40 sm:left-8 sm:top-8 sm:block sm:h-auto sm:w-[2px]",
          isLast ? "sm:bottom-auto sm:h-0" : "sm:bottom-0"
        )}
      />
      {/* Mobile connector */}
      <div
        className={cn(
          "absolute left-3 top-8 w-[2px] bg-[#d2a456]/40 sm:hidden",
          isLast ? "h-0" : "h-full"
        )}
      />
      <div className="relative flex flex-col gap-2 sm:items-center sm:text-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d2a456] bg-[#f5efe1] text-sm font-semibold text-[#0038b8]">
          {number}
        </span>
        <h3 className="mt-2 text-base font-semibold text-[#002a8a]">{title}</h3>
        <p className="max-w-xs text-sm leading-relaxed text-[#667085]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

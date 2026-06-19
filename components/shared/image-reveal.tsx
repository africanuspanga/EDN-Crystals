"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  aspectClass?: string;
}

export function ImageReveal({
  src,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  aspectClass,
}: ImageRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn("overflow-hidden", aspectClass, className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
        sizes={sizes}
        priority={priority}
      />
    </motion.div>
  );
}

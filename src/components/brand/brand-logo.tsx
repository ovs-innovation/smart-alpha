"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  href?: string | null;
  size?: "nav" | "md" | "lg" | "hero";
  animated?: boolean;
};

const sizes = {
  nav: { width: 148, height: 49, className: "h-10 w-auto sm:h-11" },
  md: { width: 200, height: 66, className: "h-14 w-auto" },
  lg: { width: 280, height: 92, className: "h-20 w-auto md:h-24" },
  hero: { width: 420, height: 139, className: "h-[4.5rem] w-auto sm:h-24 md:h-28 lg:h-[7.5rem]" },
};

export function BrandLogo({
  className,
  priority,
  href = "/",
  size = "nav",
  animated = false,
}: BrandLogoProps) {
  const s = sizes[size];

  const image = (
    <Image
      src="/brand/smart-alpha-logo.png"
      alt="Smart Alpha"
      width={s.width}
      height={s.height}
      priority={priority}
      className={cn(s.className, "object-contain object-left")}
    />
  );

  const mark = animated ? (
    <motion.span
      className={cn("inline-flex", className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {image}
    </motion.span>
  ) : (
    <span className={cn("inline-flex", className)}>{image}</span>
  );

  if (!href) return mark;

  return (
    <Link href={href} aria-label="Smart Alpha home" className="inline-flex transition-opacity hover:opacity-90">
      {mark}
    </Link>
  );
}

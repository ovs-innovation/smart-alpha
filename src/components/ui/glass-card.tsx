"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  id?: string;
};

export function GlassCard({ children, className, hover = true, id }: GlassCardProps) {
  return (
    <motion.div
      id={id}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className={cn(
        "rounded-2xl border border-border bg-white/90 p-6 backdrop-blur-sm",
        hover && "hover:border-primary/30",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

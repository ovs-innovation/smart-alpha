"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 140, damping: 24 });
  const springY = useSpring(y, { stiffness: 140, damping: 24 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    setEnabled(mq.matches && !reduce.matches);

    function onMove(e: MouseEvent) {
      x.set(e.clientX - 180);
      y.set(e.clientY - 180);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(60,198,107,0.14),transparent_65%)] mix-blend-screen md:block"
      style={{ x: springX, y: springY }}
    />
  );
}

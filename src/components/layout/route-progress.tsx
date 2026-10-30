"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function RouteProgress() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    const t = window.setTimeout(() => setActive(false), 500);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-[70] h-[2px] bg-primary transition-all duration-500 ${
        active ? "w-full opacity-100" : "w-0 opacity-0"
      }`}
    />
  );
}

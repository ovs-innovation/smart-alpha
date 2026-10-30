"use client";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-surface pt-28 pb-14 md:pt-32 md:pb-16", className)}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(45,184,90,0.1),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mb-5 h-px w-10 bg-primary" />
          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.85rem]">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted md:text-[17px]">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

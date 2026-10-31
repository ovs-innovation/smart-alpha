"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  title,
  description,
  className,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description?: string;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-surface pt-[76px] pb-7 sm:pt-24 sm:pb-9 md:pt-28 md:pb-11",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_0%,rgba(45,184,90,0.1),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div
          className={cn(
            "grid gap-6 sm:gap-8",
            imageSrc ? "lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12" : ""
          )}
        >
          <Reveal>
            <div className="mb-3 h-px w-10 bg-primary sm:mb-4" />
            <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-[1.75rem] font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.85rem]">
              {title}
            </h1>
            {description ? (
              <p className="mt-2.5 max-w-2xl text-[14px] leading-relaxed text-muted sm:mt-3.5 sm:text-[16px] md:text-[17px]">
                {description}
              </p>
            ) : null}
          </Reveal>

          {imageSrc ? (
            <Reveal delay={0.06}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[22px] border border-[#d7e6dd] bg-[#e8f0eb] sm:aspect-[5/3]">
                <Image
                  src={imageSrc}
                  alt={imageAlt || ""}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-[center_28%]"
                />
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}

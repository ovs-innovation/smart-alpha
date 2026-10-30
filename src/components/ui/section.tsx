"use client";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
};

export function Section({ id, className, children, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-10 md:py-20 lg:py-24", className)}>
      <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  title,
  description,
  eyebrow,
  align = "center",
}: {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal soft className={cn("mb-8 md:mb-12 lg:mb-14 max-w-2xl", align === "center" ? "mx-auto text-center" : "")}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary md:mb-3",
            align === "center" && "justify-center"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-[family-name:var(--font-display)] text-[1.7rem] font-semibold tracking-tight text-foreground sm:text-3xl md:text-[2.35rem] lg:text-[2.55rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-[15px] leading-relaxed text-muted md:mt-4 md:text-[17px]">{description}</p>
      ) : null}
      <div
        className={cn(
          "mt-4 h-px w-12 bg-primary/70 md:mt-6",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </Reveal>
  );
}

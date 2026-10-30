"use client";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/content/site";

const trustItems = [
  { label: "AMFI Registration", value: siteConfig.arn },
  { label: "Focus", value: "Education first" },
  { label: "Workshops", value: "Corporate & teams" },
  { label: "Based in", value: "Moradabad, UP" },
];

export function Stats() {
  return (
    <Section className="border-y border-border bg-surface py-7 md:py-12">
      <Reveal soft>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-0">
          {trustItems.map((item, index) => (
            <div
              key={item.label}
              className={`px-2 text-center lg:px-6 ${
                index > 0 ? "lg:border-l lg:border-border" : ""
              }`}
            >
              <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                {item.label}
              </p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-foreground md:text-xl">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

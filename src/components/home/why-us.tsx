"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { whyChoose } from "@/content/services";

export function WhyUs() {
  return (
    <Section className="bg-white">
      <SectionHeader
        eyebrow="Our focus"
        title="Education, transparency and clear options"
        description="Helping people understand financial concepts and their options before making decisions."
      />
      <Stagger className="grid gap-x-10 gap-y-12 md:grid-cols-2" stagger={0.09}>
        {whyChoose.map((item, index) => (
          <StaggerItem key={item.id}>
            <article className="group relative h-full">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-border transition group-hover:bg-primary/40" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.description}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

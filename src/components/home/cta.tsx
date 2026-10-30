"use client";

import { Reveal } from "@/components/motion/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Section } from "@/components/ui/section";
import { homeCopy } from "@/content/site";

export function CTA() {
  return (
    <Section className="pb-14 md:pb-24 lg:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[24px] border border-primary/15 bg-gradient-to-br from-[#e8f6ee] via-white to-[#f3f8f5] px-5 py-10 text-center sm:rounded-[28px] md:px-16 md:py-16">
          <div className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-12 bottom-0 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {homeCopy.contact.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-muted">
              {homeCopy.contact.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href="/contact?topic=workshop" size="xl" className="rounded-xl">
                Request a Workshop
              </MagneticButton>
              <MagneticButton href="/contact" variant="outline" size="xl" className="rounded-xl">
                Individual Enquiry
              </MagneticButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

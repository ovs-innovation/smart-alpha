"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

const steps = [
  {
    step: 1,
    title: "Share your enquiry",
    description:
      "Tell us whether you need a corporate workshop or information about Smart Alpha’s services.",
  },
  {
    step: 2,
    title: "Share key details",
    description:
      "For workshops: company name, contact person, email, employee count, format, date and topics.",
  },
  {
    step: 3,
    title: "We respond clearly",
    description:
      "We guide next steps within the services Smart Alpha is authorised and equipped to provide.",
  },
] as const;

export function Process() {
  return (
    <Section id="process">
      <SectionHeader
        eyebrow="Enquiry"
        title="A simple way to get in touch"
        description="Corporate workshops and individual service enquiries—kept straightforward."
      />
      <Stagger className="grid gap-5 md:grid-cols-3" stagger={0.08}>
        {steps.map((step) => (
          <StaggerItem key={step.step}>
            <article className="h-full rounded-[22px] border border-border bg-white p-6">
              <p className="text-xs font-medium text-primary">
                {String(step.step).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

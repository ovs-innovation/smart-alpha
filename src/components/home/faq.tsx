"use client";

import { Reveal } from "@/components/motion/reveal";
import { Accordion } from "@/components/ui/accordion";
import { Section, SectionHeader } from "@/components/ui/section";
import { homeFaqs } from "@/content/faqs";
import Link from "next/link";

export function FAQ() {
  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions people ask first"
        description="Clear answers on workshops, services, and how Smart Alpha works."
      />
      <Reveal soft className="mx-auto max-w-3xl">
        <Accordion items={homeFaqs} />
        <p className="mt-7 text-center text-sm text-muted">
          Need more detail?{" "}
          <Link href="/faqs" className="font-semibold text-primary hover:underline">
            Browse all FAQs
          </Link>
        </p>
      </Reveal>
    </Section>
  );
}

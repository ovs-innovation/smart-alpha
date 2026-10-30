import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { PageTransition } from "@/components/motion/page-transition";
import { Accordion } from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";
import { CTA } from "@/components/home/cta";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about Smart Alpha services, workshops and enquiries.",
};

export default function FaqsPage() {
  return (
    <PageTransition>
      <PageHero
        title="Questions, answered clearly"
        description="Common questions about Smart Alpha services, corporate workshops and how to get in touch."
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Section>
      <CTA />
    </PageTransition>
  );
}

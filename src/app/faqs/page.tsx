import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { PageTransition } from "@/components/motion/page-transition";
import { Accordion } from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";
import { faqs } from "@/content/faqs";
import { CTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about Smart Alpha investment advisory and process.",
};

export default function FaqsPage() {
  return (
    <PageTransition>
      <PageHero
        title="Investment questions, answered clearly"
        description="Everything from onboarding and fees to risk, reviews, and how we work with existing portfolios."
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

import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { PageTransition } from "@/components/motion/page-transition";
import { InsightsFilter } from "@/components/insights/insights-filter";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Educational explainers on market insights, mutual fund basics, SIPs, investment risks and financial awareness from Smart Alpha.",
};

export default function MarketInsightsPage() {
  return (
    <PageTransition>
      <PageHero
        title="Insights"
        description="Educational videos, market explainers and financial concepts—organised by topic so they are easy to browse."
      />
      <Section>
        <InsightsFilter />
      </Section>
    </PageTransition>
  );
}

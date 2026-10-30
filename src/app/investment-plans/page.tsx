import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { PageTransition } from "@/components/motion/page-transition";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Section, SectionHeader } from "@/components/ui/section";
import { investmentPlans } from "@/content/plans";
import { CTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Investment Plans",
  description:
    "Explore Smart Alpha investment plans—from capital preservation to long-horizon growth portfolios.",
};

export default function InvestmentPlansPage() {
  return (
    <PageTransition>
      <PageHero
        title="Portfolios designed around goals—not products"
        description="Choose a starting framework. We personalize allocation, instruments, and monitoring to your risk profile."
      />
      <Section>
        <SectionHeader
          title="Select a plan architecture"
          description="Starting frameworks. Final recommendations follow suitability assessment."
        />
        <Stagger className="grid gap-6 lg:grid-cols-2">
          {investmentPlans.map((plan) => (
            <StaggerItem key={plan.id}>
              <GlassCard
                className={`relative h-full ${plan.featured ? "ring-1 ring-primary/40" : ""}`}
              >
                {plan.featured ? (
                  <span className="absolute right-5 top-5 text-xs font-semibold text-primary">
                    Recommended
                  </span>
                ) : null}
                <p className="text-xs text-primary">
                  {plan.risk} · {plan.horizon}
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold">
                  {plan.name}
                </h2>
                <p className="mt-2 text-sm text-muted">{plan.tagline}</p>
                <p className="mt-4 text-sm font-semibold">Min SIP: {plan.minSip}</p>
                <ul className="mt-5 space-y-2">
                  {plan.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-2">
                  {plan.allocation.map((slice) => (
                    <div key={slice.label}>
                      <div className="mb-1 flex justify-between text-xs">
                        <span>{slice.label}</span>
                        <span className="font-semibold">{slice.percent}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-foreground/10">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${slice.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <MagneticButton href="/contact" size="md">
                    Discuss this plan
                  </MagneticButton>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
      <CTA />
    </PageTransition>
  );
}

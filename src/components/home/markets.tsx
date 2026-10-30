"use client";

import { MarketCard } from "@/components/charts/market-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { useMarkets } from "@/hooks/use-markets";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

export function Markets() {
  const { data = [], isLoading } = useMarkets();

  return (
    <Section id="markets">
      <SectionHeader
        eyebrow="Live pulse"
        title="Markets today"
        description="Track key instruments with live-ready charts. Demo data for now."
      />
      <Stagger className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4" stagger={0.05}>
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <StaggerItem key={i}>
                <div className="h-[160px] rounded-2xl border border-border bg-white shimmer" />
              </StaggerItem>
            ))
          : data.map((instrument) => (
              <StaggerItem key={instrument.id}>
                <MarketCard instrument={instrument} />
              </StaggerItem>
            ))}
      </Stagger>
    </Section>
  );
}

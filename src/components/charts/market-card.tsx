"use client";

import { MiniSparkline } from "@/components/charts/mini-sparkline";
import type { MarketInstrument } from "@/content/markets";
import { formatPercent } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function MarketCard({ instrument }: { instrument: MarketInstrument }) {
  const [loading, setLoading] = useState(true);
  const positive = instrument.changePercent >= 0;

  useEffect(() => {
    const delay = 500 + (instrument.id.length % 5) * 100;
    const t = window.setTimeout(() => setLoading(false), delay);
    return () => window.clearTimeout(t);
  }, [instrument.id]);

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 360, damping: 28 }}
      className="rounded-2xl border border-border bg-white/90 p-4 backdrop-blur-sm transition hover:border-primary/30"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-muted">{instrument.symbol}</p>
          <h3 className="mt-0.5 text-sm font-semibold text-foreground">{instrument.name}</h3>
        </div>
        <span
          className={`text-xs font-semibold tabular-nums ${
            positive ? "text-primary" : "text-rose-500"
          }`}
        >
          {formatPercent(instrument.changePercent)}
        </span>
      </div>

      {loading ? (
        <div className="mt-4 space-y-3">
          <div className="h-7 w-24 rounded-lg shimmer bg-[var(--surface)]" />
          <div className="h-10 rounded-xl shimmer bg-[var(--surface)]" />
        </div>
      ) : (
        <>
          <p className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold tabular-nums tracking-tight">
            {instrument.currency === "USD" ||
            instrument.symbol === "BTC" ||
            instrument.symbol === "ETH"
              ? `$${instrument.price.toLocaleString("en-US")}`
              : instrument.price.toLocaleString("en-IN")}
          </p>
          {instrument.currency && instrument.currency !== "USD" ? (
            <p className="text-[11px] text-muted">{instrument.currency}</p>
          ) : null}
          <div className="mt-2">
            <MiniSparkline data={instrument.sparkline} positive={positive} />
          </div>
        </>
      )}
    </motion.article>
  );
}

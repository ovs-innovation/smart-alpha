export type InvestmentPlan = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  risk: "Conservative" | "Moderate" | "Growth" | "Aggressive";
  horizon: string;
  minSip: string;
  highlights: string[];
  allocation: { label: string; percent: number }[];
  featured?: boolean;
};

export const investmentPlans: InvestmentPlan[] = [
  {
    id: "1",
    slug: "capital-preserve",
    name: "Capital Preserve",
    tagline: "Stability first for near-term goals and cautious investors.",
    risk: "Conservative",
    horizon: "1–3 years",
    minSip: "₹5,000 / mo",
    highlights: [
      "High-quality debt focus",
      "Limited equity sleeve",
      "Liquidity-conscious design",
    ],
    allocation: [
      { label: "Debt", percent: 75 },
      { label: "Equity", percent: 15 },
      { label: "Gold / Cash", percent: 10 },
    ],
  },
  {
    id: "2",
    slug: "balanced-growth",
    name: "Balanced Growth",
    tagline: "The core plan for most long-term wealth builders.",
    risk: "Moderate",
    horizon: "5–7 years",
    minSip: "₹10,000 / mo",
    featured: true,
    highlights: [
      "Diversified equity + debt",
      "Quarterly rebalancing",
      "Goal-linked tracking",
    ],
    allocation: [
      { label: "Equity", percent: 60 },
      { label: "Debt", percent: 30 },
      { label: "Gold / Alts", percent: 10 },
    ],
  },
  {
    id: "3",
    slug: "alpha-compounder",
    name: "Alpha Compounder",
    tagline: "Growth-oriented allocation for long horizons and higher risk capacity.",
    risk: "Growth",
    horizon: "7–10+ years",
    minSip: "₹15,000 / mo",
    highlights: [
      "Quality equity bias",
      "Active satellite sleeve",
      "Drawdown-aware sizing",
    ],
    allocation: [
      { label: "Equity", percent: 80 },
      { label: "Debt", percent: 12 },
      { label: "Gold / Alts", percent: 8 },
    ],
  },
  {
    id: "4",
    slug: "retirement-income",
    name: "Retirement Income",
    tagline: "Designed for corpus longevity and calibrated withdrawals.",
    risk: "Moderate",
    horizon: "10+ years",
    minSip: "Custom",
    highlights: [
      "Income sequencing",
      "Inflation buffers",
      "Healthcare contingency sleeve",
    ],
    allocation: [
      { label: "Equity", percent: 45 },
      { label: "Debt", percent: 40 },
      { label: "Gold / Cash", percent: 15 },
    ],
  },
];

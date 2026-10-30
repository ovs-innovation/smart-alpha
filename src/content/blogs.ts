export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Market Insights"
    | "Mutual Fund Basics"
    | "SIP and Long-Term Investing"
    | "Investment Risks"
    | "Financial Awareness"
    | "Corporate Workshop Highlights";
  author: string;
  publishedAt: string;
  readTime: string;
  coverGradient: string;
  coverImage?: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "understanding-market-movements",
    title: "Understanding Market Movements in Simple Terms",
    excerpt:
      "A plain-language explainer of why markets move and what investors should focus on instead of daily noise.",
    category: "Market Insights",
    author: "Smart Alpha",
    publishedAt: "2026-03-01",
    readTime: "4 min",
    coverGradient: "from-emerald-500/30 via-slate-900 to-slate-950",
    coverImage: "/images/sa-insight-1.jpg",
    content: [
      "Markets rise and fall for many reasons—earnings, interest rates, global events and investor sentiment. Understanding the basics helps people stay calm when headlines feel loud.",
      "Smart Alpha’s educational content focuses on concepts first: what is moving, why it may matter, and how that differs from day-to-day speculation.",
      "Market commentary should always be read with a date in mind and checked against reliable information before any decision is made.",
    ],
  },
  {
    id: "2",
    slug: "mutual-fund-basics",
    title: "Mutual Fund Basics: Categories, Risk and Suitability",
    excerpt:
      "An accessible introduction to mutual fund types and what to understand before exploring scheme information.",
    category: "Mutual Fund Basics",
    author: "Smart Alpha",
    publishedAt: "2026-02-18",
    readTime: "5 min",
    coverGradient: "from-sky-500/25 via-slate-900 to-slate-950",
    coverImage: "/images/sa-insight-3.jpg",
    content: [
      "Mutual funds pool money from many investors and invest across instruments based on the scheme’s stated objective.",
      "Knowing the difference between equity, debt and hybrid categories—and how risk and return typically relate—helps people ask better questions.",
      "Scheme information should always be reviewed carefully. Smart Alpha can help explore options subject to authorised services.",
    ],
  },
  {
    id: "3",
    slug: "sip-and-long-term-investing",
    title: "SIP and Long-Term Investing: Building Discipline",
    excerpt:
      "How systematic investing supports long-term financial planning when goals and horizons are clear.",
    category: "SIP and Long-Term Investing",
    author: "Smart Alpha",
    publishedAt: "2026-02-05",
    readTime: "4 min",
    coverGradient: "from-amber-500/25 via-slate-900 to-slate-950",
    coverImage: "/images/sa-insight-2.jpg",
    content: [
      "A Systematic Investment Plan (SIP) helps people invest regularly instead of trying to time every market move.",
      "Long-term investing works best when linked to clear goals—education, retirement or other milestones—and a horizon that matches those goals.",
      "Education around SIPs is meant to build awareness, not to guarantee outcomes. Markets involve risk.",
    ],
  },
  {
    id: "4",
    slug: "understanding-investment-risks",
    title: "Understanding Investment Risks Before You Decide",
    excerpt:
      "A practical look at common investment risks and why understanding them comes before any decision.",
    category: "Investment Risks",
    author: "Smart Alpha",
    publishedAt: "2026-01-22",
    readTime: "5 min",
    coverGradient: "from-violet-500/25 via-slate-900 to-slate-950",
    coverImage: "/images/sa-insight-4.jpg",
    content: [
      "Every investment carries risk—market risk, interest-rate risk, liquidity risk and the risk of not meeting a goal on time.",
      "Understanding risk does not remove it, but it helps people choose options that better match their comfort and time horizon.",
      "Smart Alpha emphasises education and transparency so people understand their options before making financial decisions.",
    ],
  },
  {
    id: "5",
    slug: "financial-awareness-everyday-money",
    title: "Financial Awareness: Everyday Money Habits That Matter",
    excerpt:
      "Budgeting, saving and goal-setting—simple habits that make investment conversations more meaningful.",
    category: "Financial Awareness",
    author: "Smart Alpha",
    publishedAt: "2026-01-10",
    readTime: "4 min",
    coverGradient: "from-rose-500/20 via-slate-900 to-slate-950",
    coverImage: "/images/sa-insight-5.jpg",
    content: [
      "Financial awareness starts with everyday habits: knowing where money goes, building an emergency buffer and setting clear goals.",
      "When people understand budgeting and saving first, conversations about mutual funds and long-term planning become clearer.",
      "These topics are also core themes in Smart Alpha’s corporate financial-awareness workshops.",
    ],
  },
  {
    id: "6",
    slug: "corporate-workshop-highlights",
    title: "Corporate Workshop Highlights: What Teams Learn",
    excerpt:
      "A quick look at the financial-awareness themes covered in Smart Alpha workshops for companies and employees.",
    category: "Corporate Workshop Highlights",
    author: "Smart Alpha",
    publishedAt: "2025-12-15",
    readTime: "3 min",
    coverGradient: "from-teal-500/25 via-slate-900 to-slate-950",
    coverImage: "/images/sa-insight-6.jpg",
    content: [
      "Corporate workshops help employees understand money management, investment fundamentals and long-term financial planning in a practical format.",
      "Typical themes include budgeting and saving, mutual funds and SIPs, risk and return, goal-setting, investor behaviour and market volatility.",
      "Sessions can be online or in person and tailored to the organisation. Organisations can request a workshop through the contact form.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export const insightCategories = [
  "All",
  "Market Insights",
  "Mutual Fund Basics",
  "SIP and Long-Term Investing",
  "Investment Risks",
  "Financial Awareness",
  "Corporate Workshop Highlights",
] as const;

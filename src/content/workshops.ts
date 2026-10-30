export const workshopCopy = {
  hero: {
    title: "Empower Your Employees With Financial Knowledge",
    description:
      "Practical financial education designed to help employees understand money management, investment fundamentals and long-term financial planning.",
    cta: { label: "Request a Corporate Workshop", href: "/contact?topic=workshop" },
  },
  why: {
    title: "Why organise a workshop?",
    points: [
      "Make financial concepts easier to understand",
      "Encourage informed decision-making",
      "Provide employees with an opportunity to ask questions",
      "Offer an engaging learning experience tailored to the organisation",
    ],
  },
} as const;

export const workshopTopics = [
  {
    id: "1",
    title: "Personal budgeting and saving habits",
    description: "Help employees build clearer everyday money habits.",
  },
  {
    id: "2",
    title: "Understanding mutual funds and SIPs",
    description: "Explain mutual funds and SIPs in practical terms.",
  },
  {
    id: "3",
    title: "Basics of risk and return",
    description: "Cover the relationship between risk and return.",
  },
  {
    id: "4",
    title: "Financial goal-setting and investment horizons",
    description: "Connect goals with suitable planning horizons.",
  },
  {
    id: "5",
    title: "Investor behaviour and common financial mistakes",
    description: "Highlight common behavioural mistakes investors make.",
  },
  {
    id: "6",
    title: "Understanding market volatility",
    description: "Explain market volatility in simple, practical language.",
  },
] as const;

export const workshopFormFields = [
  "Company name",
  "Contact person's name",
  "Official email",
  "Number of employees",
  "Online or in-person format",
  "Preferred date",
  "Topics of interest",
] as const;

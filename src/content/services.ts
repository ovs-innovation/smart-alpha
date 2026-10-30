export type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  cta: { label: string; href: string };
  icon: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: "1",
    slug: "mutual-fund-solutions",
    title: "Mutual Fund Solutions",
    description:
      "Explore mutual fund options and relevant scheme information, subject to authorised services.",
    longDescription:
      "Explore mutual fund options and relevant scheme information, subject to authorised services.",
    cta: { label: "Enquire", href: "/contact?topic=mutual-funds" },
    icon: "PieChart",
    image: "/images/mutual-funds.jpg",
    imageAlt: "Person reviewing mutual fund and investment charts",
  },
  {
    id: "2",
    slug: "corporate-workshops",
    title: "Corporate Workshops",
    description:
      "Educational sessions covering budgeting, saving, investment fundamentals, risk awareness and financial goals.",
    longDescription:
      "Educational sessions covering budgeting, saving, investment fundamentals, risk awareness and financial goals.",
    cta: { label: "Organise a Workshop", href: "/workshops" },
    icon: "Users",
    image: "/images/workshop.jpg",
    imageAlt: "Team collaborating in a corporate workshop meeting",
  },
  {
    id: "3",
    slug: "financial-education",
    title: "Financial Education & Market Insights",
    description:
      "Accessible explanations of market movements, investment terminology and investing concepts.",
    longDescription:
      "Accessible explanations of market movements, investment terminology and investing concepts.",
    cta: { label: "Explore Insights", href: "/market-insights" },
    icon: "BookOpen",
    image: "/images/education.jpg",
    imageAlt: "Professionals discussing ideas in a bright office",
  },
  {
    id: "4",
    slug: "investment-support",
    title: "Investment Support & Portfolio Review",
    description:
      "Discuss review, monitoring or distribution services—including scope, fees and authorisations.",
    longDescription:
      "Discuss actual review, monitoring or distribution services, including scope, fees and authorisations.",
    cta: { label: "Discuss Requirements", href: "/contact?topic=portfolio-review" },
    icon: "Briefcase",
    image: "/images/portfolio.jpg",
    imageAlt: "Laptop showing portfolio analytics and market charts",
  },
];

export const whyChoose = [
  {
    id: "1",
    title: "Education",
    description:
      "Make financial concepts easier to understand and investment decisions more informed.",
    icon: "BookOpen",
  },
  {
    id: "2",
    title: "Transparency",
    description:
      "Help people understand their options before making financial decisions.",
    icon: "Eye",
  },
  {
    id: "3",
    title: "Corporate workshops",
    description:
      "Practical financial-awareness sessions for companies and employees.",
    icon: "Users",
  },
  {
    id: "4",
    title: "Investment-related services",
    description:
      "Mutual fund solutions and investment support, subject to authorised services.",
    icon: "Briefcase",
  },
] as const;

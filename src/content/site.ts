export const siteConfig = {
  name: "Smart Alpha",
  legalName: "Smart Alpha",
  founder: "Sachin Gupta",
  arn: "ARN-142487",
  tagline: "Mutual fund investments are subject to SENTIMENT risk",
  description:
    "Smart Alpha helps individuals and organisations understand investment concepts, explore mutual fund solutions, and build financial awareness through education and workshops.",
  url: "https://smartalpha.in",
  email: "hello@smartalpha.in",
  phone: "+91-7500551110",
  phoneHref: "tel:+917500551110",
  phoneAlt: "+91-9258603363",
  phoneAltHref: "tel:+919258603363",
  address: {
    line1: "Moradabad",
    line2: "",
    city: "Moradabad",
    state: "Uttar Pradesh",
    pincode: "",
    country: "India",
  },
  social: {
    linkedin: "",
    twitter: "",
    youtube: "https://www.youtube.com/@thesmart_alpha",
    instagram: "https://www.instagram.com/smart_alpha_",
  },
} as const;

/** Sachin profile — use these exact details everywhere */
export const sachinProfile = {
  name: "Sachin Gupta",
  title: "Founder, Smart Alpha",
  journeySince: "2006",
  education: "MBA Finance, Jaipuria Institute of Management",
  currentRole: "Independent Director of Lattey Industries (NSE Listed Company)",
  lastJob: "Globe Capital Delhi as Team Head",
  basedIn: "Moradabad, UP",
  facts: [
    { label: "Education", value: "MBA Finance, Jaipuria Institute of Management" },
    { label: "Journey since", value: "2006" },
    {
      label: "Current role",
      value: "Independent Director of Lattey Industries (NSE Listed Company)",
    },
    { label: "Last job", value: "Globe Capital Delhi as Team Head" },
    { label: "AMFI", value: "ARN-142487" },
    { label: "Based in", value: "Moradabad, UP" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", mega: true },
  { label: "Workshops", href: "/workshops" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Meet Sachin Gupta", href: "/about#sachin" },
    { label: "Contact", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
  ],
  services: [
    { label: "Mutual Fund Solutions", href: "/services#mutual-fund-solutions" },
    { label: "Corporate Workshops", href: "/workshops" },
    { label: "Financial Education", href: "/services#financial-education" },
    { label: "Portfolio Review", href: "/services#investment-support" },
  ],
  resources: [
    { label: "Workshops", href: "/workshops" },
    { label: "FAQs", href: "/faqs" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;

/** About page — achievement highlights (fact-based, no invented AUM/clients) */
export const aboutAchievements = {
  eyebrow: "The journey so far",
  title: "Built on experience, guided by clarity",
  stats: [
    { value: "2006", label: "Journey began" },
    { value: "20+", label: "Years in finance" },
    { value: "NSE", label: "Listed board role" },
    { value: "AMFI", label: "ARN-142487" },
  ],
  milestones: [
    {
      year: "2006",
      title: "Finance journey begins",
      text: "Stepped into markets with a long-term view on learning and investor education.",
    },
    {
      year: "Career",
      title: "Team Head, Globe Capital Delhi",
      text: "Led teams in one of India’s known broking houses—discipline, process and client focus.",
    },
    {
      year: "Education",
      title: "MBA Finance, Jaipuria",
      text: "Formal grounding in finance to sharpen how markets and money decisions are taught.",
    },
    {
      year: "Today",
      title: "Independent Director, Lattey Industries",
      text: "Board role at an NSE-listed company—governance experience that informs Smart Alpha’s approach.",
    },
    {
      year: "Smart Alpha",
      title: "Education-first investing",
      text: "Mutual fund guidance and corporate workshops for Indian families and teams—clarity before action.",
    },
  ],
} as const;

export const homeCopy = {
  hero: {
    eyebrow: "भारत के लिए साफ़ समझ",
    title: "Money clarity, without the jargon.",
    description:
      "Mutual funds, SIPs and simple market education—explained clearly for Indian families.",
    primaryCta: { label: "Get started", href: "/contact" },
    secondaryCta: { label: "Book a workshop", href: "/workshops" },
  },
  about: {
    eyebrow: "About Smart Alpha",
    title: "About Smart Alpha",
    body: [
      "Smart Alpha aims to make financial concepts easier to understand and investment decisions more informed. We help individuals develop a better understanding of financial markets, mutual funds and long-term financial planning through educational initiatives and relevant investment-related services.",
      "Led by Sachin Gupta, Smart Alpha brings together financial education, research-led content and corporate investment-awareness workshops to help people approach their financial goals with greater clarity. Our focus is on education, transparency and helping people understand their options before making financial decisions.",
    ],
  },
  founder: {
    eyebrow: "Leadership · Moradabad",
    title: "Meet Sachin Gupta",
    body: "Educational qualification—MBA Finance, Jaipuria Institute of Management. Journey since 2006. Currently working as Independent Director of Lattey Industries (NSE Listed Company). Last job—Globe Capital Delhi as Team Head.",
  },
  contact: {
    title: "Talk to Smart Alpha",
    description:
      "Workshops for teams, or a clear conversation on mutual funds and SIPs.",
  },
} as const;

export const siteConfig = {
  name: "Smart Alpha",
  legalName: "Smart Alpha",
  founder: "Sachin Gupta",
  arn: "ARN-142487",
  tagline: "Make Informed Financial Decisions With Greater Clarity.",
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

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", mega: true },
  { label: "Workshops", href: "/workshops" },
  { label: "Insights", href: "/market-insights" },
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
    { label: "Insights", href: "/market-insights" },
    { label: "Workshops", href: "/workshops" },
    { label: "FAQs", href: "/faqs" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
} as const;

export const homeCopy = {
  hero: {
    eyebrow: "Smart Alpha",
    title: "Make Informed Financial Decisions With Greater Clarity.",
    description:
      "Understand investment concepts, explore mutual fund solutions and help your employees build financial awareness with Smart Alpha.",
    primaryCta: { label: "Explore Our Services", href: "/services" },
    secondaryCta: { label: "Book a Workshop", href: "/workshops" },
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
    eyebrow: "Leadership",
    title: "Meet Sachin Gupta",
    body: "Sachin Gupta is the face behind Smart Alpha, sharing financial education and helping people better understand investment concepts. Through educational content and corporate workshops, he aims to make financial topics more accessible and practical.",
  },
  contact: {
    title: "Let's Start a Conversation",
    description:
      "Whether you represent a company looking to organise a financial-awareness workshop or an individual seeking information about Smart Alpha's services, we'd be happy to hear from you.",
  },
} as const;

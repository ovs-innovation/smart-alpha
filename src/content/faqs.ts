export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Investing" | "Fees" | "Process";
};

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What does Smart Alpha do?",
    answer:
      "Smart Alpha is a destination for financial education, investment-related services and corporate investment-awareness workshops. We help people understand concepts clearly before making financial decisions.",
    category: "General",
  },
  {
    id: "2",
    question: "Who leads Smart Alpha?",
    answer:
      "Smart Alpha is led by Sachin Gupta. Through educational content and corporate workshops, he aims to make financial topics more accessible and practical. AMFI registration: ARN-142487.",
    category: "General",
  },
  {
    id: "3",
    question: "What services do you offer?",
    answer:
      "Mutual Fund Solutions, Corporate Workshops, Financial Education, and Investment Support & Portfolio Review—subject to authorised services.",
    category: "General",
  },
  {
    id: "4",
    question: "What topics do corporate workshops cover?",
    answer:
      "Personal budgeting and saving habits; understanding mutual funds and SIPs; basics of risk and return; financial goal-setting and investment horizons; investor behaviour and common financial mistakes; and understanding market volatility.",
    category: "Process",
  },
  {
    id: "5",
    question: "How do I request a corporate workshop?",
    answer:
      "Use the contact form with your company name, contact person’s name, official email, number of employees, online or in-person format, preferred date and topics of interest.",
    category: "Process",
  },
  {
    id: "6",
    question: "How can individuals enquire?",
    answer:
      "Share what you would like to learn about our services through the contact form or phone, and our team can guide you on the next steps.",
    category: "Process",
  },
  {
    id: "7",
    question: "Where is Smart Alpha based?",
    answer:
      "Office address: Moradabad, Uttar Pradesh. Phone: +91-7500551110 / +91-9258603363. Contact person: Sachin Gupta · Smart Alpha (ARN-142487).",
    category: "General",
  },
];

export const homeFaqs = faqs.slice(0, 5);

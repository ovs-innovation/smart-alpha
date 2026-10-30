export type Testimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ananya Mehta",
    role: "HR Lead",
    location: "Delhi NCR",
    quote:
      "The workshop made mutual funds and SIPs finally click for our team. Practical, clear, and easy to ask questions.",
    rating: 5,
    initials: "AM",
  },
  {
    id: "2",
    name: "Rohan Kapoor",
    role: "First-time Investor",
    location: "Moradabad",
    quote:
      "Smart Alpha explained options without pressure. I understood risk and goals before deciding anything.",
    rating: 5,
    initials: "RK",
  },
  {
    id: "3",
    name: "Priya Nair",
    role: "People Ops",
    location: "Bengaluru",
    quote:
      "Our employees left more confident about budgeting and long-term planning. Exactly the awareness session we needed.",
    rating: 5,
    initials: "PN",
  },
];

export const team = [
  {
    id: "1",
    name: "Sachin Gupta",
    role: "Founder, Smart Alpha",
    bio: "Shares financial education and corporate workshops to make investing concepts more accessible and practical. AMFI ARN-142487.",
    initials: "SG",
  },
] as const;

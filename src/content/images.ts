/**
 * Unique stock photos — context only (desks, charts, INR, planning).
 * No single-person portraits. Each asset used in ONE place.
 */
export const stockImages = {
  /** Market indices / Sensex-style trading screen — home hero */
  hero: {
    src: "/images/sa-hero-sensex.jpg",
    alt: "Sensex-style stock market indices and chart on a trading screen",
    credit: "Photo by Kindel Media on Pexels",
  },
  /** Tablet with stock chart on desk — home about */
  aboutHome: {
    src: "/images/sa-about-market.jpg",
    alt: "Tablet showing a stock market chart on a professional desk",
    credit: "Photo by AlphaTradeZone on Pexels",
  },
  /** Tablet growth chart — workshops teaser */
  workshopHome: {
    src: "/images/sa-workshop-home.jpg",
    alt: "Tablet showing a growth bar chart on a planning desk",
    credit: "Photo on Pexels",
  },
  /** Candlestick trading chart — mutual funds */
  serviceFunds: {
    src: "/images/sa-svc-funds-chart.jpg",
    alt: "Stock market candlestick chart on a trading monitor",
    credit: "Photo on Pexels",
  },
  /** Checklist notebook — corporate workshops */
  serviceWorkshop: {
    src: "/images/sa-svc-workshop.jpg",
    alt: "Hand ticking items on a planning checklist notebook",
    credit: "Photo on Unsplash",
  },
  /** Bookshelf — financial education */
  serviceEducation: {
    src: "/images/sa-svc-education.jpg",
    alt: "Bookshelf representing learning and financial education",
    credit: "Photo on Pexels",
  },
  /** Analytics report on desk — portfolio support */
  servicePortfolio: {
    src: "/images/sa-svc-portfolio.jpg",
    alt: "Laptop and printed analytics charts on a review desk",
    credit: "Photo on Pexels",
  },
  /** Trading charts phone + paper — market insights */
  insight1: {
    src: "/images/sa-insight-1.jpg",
    alt: "Stock charts on a phone and printed market analysis sheets",
    credit: "Photo on Pexels",
  },
  /** ₹500 notes — SIP / long-term */
  insight2: {
    src: "/images/sa-insight-2.jpg",
    alt: "Indian 500-rupee notes representing SIPs and long-term saving",
    credit: "Photo by Pranav Choubey on Pexels",
  },
  /** ₹100 notes — mutual fund basics */
  insight3: {
    src: "/images/sa-insight-3.jpg",
    alt: "Indian 100-rupee notes representing mutual fund investing",
    credit: "Photo by DEV ROY on Pexels",
  },
  /** ₹20 coin — investment risks */
  insight4: {
    src: "/images/sa-insight-4.jpg",
    alt: "Indian currency coin and notes representing careful money decisions",
    credit: "Photo on Pexels",
  },
  /** Mixed INR notes — financial awareness */
  insight5: {
    src: "/images/sa-insight-5.jpg",
    alt: "Indian rupee notes of different denominations for everyday money habits",
    credit: "Photo by Mayur Freelancer on Pexels",
  },
  /** Clean desk tools — workshop highlights */
  insight6: {
    src: "/images/sa-insight-6.jpg",
    alt: "Laptop, notebook and phone on a desk prepared for a learning session",
    credit: "Photo on Pexels",
  },
  /** Market ticker board — CTA */
  cta: {
    src: "/images/sa-cta-market.jpg",
    alt: "Electronic stock market ticker board with live price data",
    credit: "Photo on Pexels",
  },
  /** Ahmedabad business district — about page */
  aboutPage: {
    src: "/images/sa-about-page.jpg",
    alt: "Modern office buildings in an Indian business district",
    credit: "Photo by Ranjeet Chauhan on Pexels",
  },
  /** Laptop analytics dashboard — workshops page */
  workshopPage: {
    src: "/images/sa-workshop-page.jpg",
    alt: "Laptop showing charts and analytics during a planning session",
    credit: "Photo on Pexels",
  },
  /** Candlestick research desk — investment plans */
  plans: {
    src: "/images/sa-plans.jpg",
    alt: "Printed stock charts, glasses and laptop on a research desk",
    credit: "Photo on Pexels",
  },
} as const;

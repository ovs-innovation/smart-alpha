import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { AboutIntro } from "@/components/home/about-intro";
import { Services } from "@/components/home/services";
import { Founder } from "@/components/home/founder";
import { WorkshopsTeaser } from "@/components/home/workshops-teaser";
import { WhyUs } from "@/components/home/why-us";
import { Insights } from "@/components/home/insights";
import { FAQ } from "@/components/home/faq";
import { CTA } from "@/components/home/cta";
import { PageTransition } from "@/components/motion/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <AboutIntro />
      <Services />
      <Founder />
      <WorkshopsTeaser />
      <WhyUs />
      <Insights />
      <FAQ />
      <CTA />
    </PageTransition>
  );
}

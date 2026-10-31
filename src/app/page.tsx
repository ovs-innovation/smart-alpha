import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { WhyChooseHome } from "@/components/home/why-choose";
import { Services } from "@/components/home/services";
import { Founder } from "@/components/home/founder";
import { CTA } from "@/components/home/cta";
import { PageTransition } from "@/components/motion/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <WhyChooseHome />
      <Services />
      <Founder />
      <CTA />
    </PageTransition>
  );
}

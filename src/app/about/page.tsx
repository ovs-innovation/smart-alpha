import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AboutGallery } from "@/components/about/gallery";
import { PageHero } from "@/components/layout/page-hero";
import { PageTransition } from "@/components/motion/page-transition";
import { Reveal } from "@/components/motion/reveal";
import { MgmtGrid } from "@/components/ui/mgmt-grid";
import { CTA } from "@/components/home/cta";
import { aboutAchievements, homeCopy, sachinProfile } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Smart Alpha, Sachin Gupta, and our education-first approach to financial clarity.",
};

const focusPoints = [
  {
    title: "Education first",
    text: "We explain mutual funds, SIPs and markets in simple language.",
  },
  {
    title: "Transparency",
    text: "Understand your options clearly before you decide.",
  },
  {
    title: "Workshops",
    text: "Practical financial awareness sessions for companies and teams.",
  },
] as const;

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        title="About Smart Alpha"
        description="Financial education and mutual fund guidance—led by Sachin Gupta since 2006."
      />

      {/* Achievements — light */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-[1000px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <Reveal>
            <p className="text-center text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
              {aboutAchievements.eyebrow}
            </p>
            <h2 className="mx-auto mt-2 max-w-lg text-center font-[family-name:var(--font-display)] text-[1.45rem] font-semibold tracking-tight text-foreground sm:text-[1.75rem]">
              {aboutAchievements.title}
            </h2>
          </Reveal>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:grid-cols-4 sm:gap-4">
            {aboutAchievements.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.04}>
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-[#d7e6dd] bg-[linear-gradient(180deg,#f7faf7_0%,#eef5f0_100%)] px-3 py-5 text-center sm:py-6">
                  <p className="font-[family-name:var(--font-display)] text-[1.7rem] font-semibold tracking-tight text-foreground sm:text-[2rem]">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[11px] leading-snug font-medium tracking-wide text-muted sm:text-[12px]">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-surface py-8 sm:py-12 md:py-16">
        <div className="mx-auto grid w-full max-w-[1000px] items-center gap-6 px-5 sm:gap-8 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10">
          <Reveal>
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-border bg-white">
              <Image
                src="/p2.jpeg"
                alt="Smart Alpha workshop"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
              Who we are
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[1.6rem] font-semibold tracking-tight text-foreground sm:text-[1.9rem]">
              Clear money decisions for Indian families and teams
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Smart Alpha helps people understand investing with clarity—through education,
              mutual fund solutions and corporate workshops. No jargon. Practical next steps.
            </p>

            <ul className="mt-6 space-y-4">
              {focusPoints.map((item) => (
                <li key={item.title} className="border-t border-border pt-3">
                  <p className="text-[14px] font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Milestones */}
      <section className="border-t border-border bg-white py-10 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1000px] px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
              Milestones
            </p>
            <h2 className="mt-2 max-w-xl font-[family-name:var(--font-display)] text-[1.55rem] font-semibold tracking-tight text-foreground sm:text-[1.9rem]">
              From markets to mentoring
            </h2>
          </Reveal>

          <ol className="relative mt-8 space-y-0 border-l-2 border-[#cfe3d6] pl-5 sm:mt-10 sm:pl-7">
            {aboutAchievements.milestones.map((item, i) => (
              <li key={item.title} className="relative pb-8 last:pb-0 sm:pb-10">
                <span
                  aria-hidden
                  className="absolute top-1.5 -left-[1.45rem] h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-white sm:-left-[1.95rem] sm:h-3 sm:w-3"
                />
                <Reveal delay={i * 0.05}>
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-[1.05rem] font-semibold text-foreground sm:text-[1.2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-[13px] leading-relaxed text-muted sm:text-[14px]">
                    {item.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Sachin */}
      <section id="sachin" className="scroll-mt-28 border-t border-border bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1000px] px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-5 sm:p-7">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-border bg-white sm:h-28 sm:w-28">
                  <Image
                    src="/sachin.png"
                    alt="Sachin Gupta, Founder of Smart Alpha"
                    fill
                    sizes="112px"
                    className="object-cover object-[center_18%]"
                  />
                </div>
                <div className="min-w-0 text-center sm:text-left">
                  <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                    Leadership
                  </p>
                  <h2 className="mt-1 font-[family-name:var(--font-display)] text-[1.45rem] font-semibold text-foreground sm:text-[1.7rem]">
                    Meet {sachinProfile.name}
                  </h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    {homeCopy.founder.body}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-1 text-[11px] font-semibold tracking-[0.14em] text-foreground uppercase">
                  Profile
                </p>
                <MgmtGrid compact items={[...sachinProfile.facts]} />
              </div>

              <div className="mt-6 flex justify-center sm:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
                >
                  Connect with Smart Alpha
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AboutGallery />

      <CTA />
    </PageTransition>
  );
}

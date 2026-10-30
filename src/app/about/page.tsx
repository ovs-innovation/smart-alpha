import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { PageTransition } from "@/components/motion/page-transition";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { CTA } from "@/components/home/cta";
import { stockImages } from "@/content/images";
import { whyChoose } from "@/content/services";
import { homeCopy, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Smart Alpha, Sachin Gupta, and our education-first approach to financial clarity.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        title="About Smart Alpha"
        description="Professional background, approach and verified credentials—so you know who is behind the education and services."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-[#d7e6dd] sm:aspect-[5/6]">
              <Image
                src={stockImages.education.src}
                alt={stockImages.education.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
                priority
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
              />
              <p className="absolute bottom-3 left-4 text-[10px] text-white/85">
                {stockImages.education.credit}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
              About Smart Alpha
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-[1.7rem] font-semibold tracking-tight text-foreground sm:text-3xl">
              Professional financial education with greater clarity
            </h2>
            <div className="mt-4 h-px w-12 bg-primary/70" />
            <div className="mt-5 space-y-4 text-[15px] leading-[1.7] text-muted sm:text-[16px]">
              {homeCopy.about.body.map((paragraph) => (
                <p key={paragraph.slice(0, 28)}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {[
                ["Education", "Make financial concepts easier to understand and act on."],
                ["Transparency", "Help people understand options before making decisions."],
                ["Workshops", "Bring practical awareness sessions to companies and teams."],
                ["Support", "Discuss mutual fund and portfolio needs within authorised scope."],
              ].map(([title, copy]) => (
                <li key={title} className="border-t border-border pt-4">
                  <p className="font-[family-name:var(--font-display)] text-[0.95rem] font-semibold text-foreground">
                    {title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{copy}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section id="sachin" className="scroll-mt-28 bg-surface">
        <Reveal>
          <div className="overflow-hidden rounded-[24px] border border-[#d7e6dd] bg-white">
            <div className="grid grid-cols-1 items-start gap-5 p-6 sm:p-7 md:grid-cols-[152px_minmax(0,1fr)] md:gap-7 md:p-8 lg:grid-cols-[168px_minmax(0,1fr)] lg:gap-8 lg:p-9">
              <div className="mx-auto w-[140px] md:mx-0 md:w-full">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px] bg-[#0b1210] shadow-[0_10px_28px_rgba(14,21,18,0.12)]">
                  <Image
                    src="/sachin.png"
                    alt="Sachin Gupta, Founder of Smart Alpha"
                    fill
                    sizes="168px"
                    className="object-cover object-[center_18%]"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
                  Leadership
                </p>
                <h2 className="mt-1.5 font-[family-name:var(--font-display)] text-[1.65rem] font-semibold leading-[1.15] tracking-tight text-[#111814] sm:text-[1.9rem]">
                  Meet Sachin Gupta
                </h2>
                <div className="mt-3 h-px w-9 bg-primary/70" />
                <p className="mt-3.5 text-[15px] leading-[1.65] text-muted">
                  {homeCopy.founder.body}
                </p>
                <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-2.5">
                  {[
                    ["Registration", siteConfig.arn],
                    ["Focus", "Education & workshops"],
                    ["Location", "Moradabad, UP"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[12px] border border-border bg-[#f7faf8] px-3 py-2.5"
                    >
                      <p className="text-[10px] font-semibold tracking-[0.12em] text-primary uppercase">
                        {label}
                      </p>
                      <p className="mt-1 text-[13px] font-semibold leading-snug text-foreground">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted">
                  Verified qualifications and additional professional registrations can be added
                  here once confirmed for publication.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex h-10 w-fit items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground"
                >
                  Connect with Smart Alpha
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="bg-surface">
        <SectionHeader
          title="Our approach"
          description="Our focus is on education, transparency and helping people understand their options before making financial decisions."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {whyChoose.map((item, index) => (
            <article key={item.id} className="rounded-[18px] border border-border bg-white p-6">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTA />
    </PageTransition>
  );
}

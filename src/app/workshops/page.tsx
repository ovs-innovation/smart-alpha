import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { PageTransition } from "@/components/motion/page-transition";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { CTA } from "@/components/home/cta";
import { stockImages } from "@/content/images";
import { workshopCopy, workshopFormFields, workshopTopics } from "@/content/workshops";

export const metadata: Metadata = {
  title: "Corporate Workshops",
  description:
    "Practical financial education for employees—budgeting, mutual funds, SIPs, risk awareness and long-term planning.",
};

export default function WorkshopsPage() {
  return (
    <PageTransition>
      <PageHero
        title={workshopCopy.hero.title}
        description={workshopCopy.hero.description}
      />

      <Section className="pt-0 md:pt-4">
        <Reveal>
          <div className="relative mb-10 overflow-hidden rounded-[24px] border border-[#d7e6dd]">
            <div className="relative aspect-[21/9] min-h-[180px] w-full sm:min-h-[220px]">
              <Image
                src={stockImages.workshop.src}
                alt={stockImages.workshop.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
              />
            </div>
            <p className="absolute bottom-3 left-4 text-[10px] text-white/85">
              {stockImages.workshop.credit}
            </p>
          </div>
        </Reveal>
      </Section>

      <Section>
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Workshop topics"
            title="What your team can learn"
            description="Sessions tailored to your organisation—online or in person."
          />
          <Link
            href={workshopCopy.hero.cta.href}
            className="inline-flex h-12 shrink-0 items-center rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground"
          >
            {workshopCopy.hero.cta.label}
          </Link>
        </div>

        <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" stagger={0.06}>
          {workshopTopics.map((topic, index) => (
            <StaggerItem key={topic.id}>
              <article className="h-full rounded-[22px] border border-border bg-white p-6">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{topic.description}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-surface">
        <div className="overflow-hidden rounded-[24px] border border-border bg-white lg:grid lg:grid-cols-2">
          <Reveal className="flex flex-col justify-start border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-9">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
              Why workshops
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-[1.65rem] font-semibold tracking-tight text-foreground sm:text-[1.9rem]">
              {workshopCopy.why.title}
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
              Make financial concepts easier to understand and encourage informed decision-making.
            </p>
            <ul className="mt-8 space-y-0">
              {workshopCopy.why.points.map((point, index) => (
                <li
                  key={point}
                  className="flex gap-4 border-t border-border py-4 text-[15px] leading-snug text-foreground"
                >
                  <span className="shrink-0 font-[family-name:var(--font-display)] text-sm font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06} className="bg-[#f7faf8] p-6 sm:p-8 lg:p-9">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
              Workshop enquiry
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-[1.65rem] font-semibold tracking-tight text-foreground sm:text-[1.9rem]">
              What to share with us
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              When you request a workshop, include these details so we can respond quickly.
            </p>
            <ul className="mt-7 space-y-2">
              {workshopFormFields.map((field) => (
                <li
                  key={field}
                  className="rounded-xl border border-[#d7e6dd] bg-white px-4 py-3 text-sm font-medium text-foreground"
                >
                  {field}
                </li>
              ))}
            </ul>
            <Link
              href="/contact?topic=workshop"
              className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground sm:w-auto"
            >
              Request a Corporate Workshop
            </Link>
          </Reveal>
        </div>
      </Section>

      <CTA />
    </PageTransition>
  );
}

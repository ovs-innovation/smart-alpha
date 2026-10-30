import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { PageTransition } from "@/components/motion/page-transition";
import { Section } from "@/components/ui/section";
import { services } from "@/content/services";
import { CTA } from "@/components/home/cta";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Mutual fund solutions, corporate workshops, financial education and investment support from Smart Alpha.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHero
        title="Our Services"
        description="Services Smart Alpha is authorised and equipped to provide—explained clearly."
      />
      <Section>
        <div className="space-y-5">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.04}>
              <article
                id={service.slug}
                className="scroll-mt-28 grid overflow-hidden rounded-[24px] border border-border bg-white shadow-[0_6px_18px_rgba(17,24,39,0.04)] md:grid-cols-[240px_1fr]"
              >
                <div className="relative min-h-[180px] bg-[#e8f0eb] md:min-h-full">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-5 px-6 py-7 md:flex-row md:items-start md:gap-8 md:px-8 md:py-8">
                  <p className="shrink-0 font-[family-name:var(--font-display)] text-sm font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight md:text-2xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted md:text-base">{service.description}</p>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#444]">
                      {service.longDescription}
                    </p>
                  </div>
                  <Link
                    href={service.cta.href}
                    className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:brightness-105 md:mt-1"
                  >
                    {service.cta.label}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTA />
    </PageTransition>
  );
}

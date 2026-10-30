"use client";

import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { services } from "@/content/services";

export function Services() {
  return (
    <Section id="services" className="bg-surface">
      <SectionHeader
        eyebrow="Our Services"
        title="What Smart Alpha offers"
        description="Clear services for education, mutual funds, workshops and investment support—explained simply."
      />
      <Stagger className="grid gap-5 sm:grid-cols-2" stagger={0.08}>
        {services.map((service, index) => (
          <StaggerItem key={service.id}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-border bg-white transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_18px_40px_rgba(14,21,18,0.06)]">
              <div className="relative h-40 overflow-hidden bg-[#e8f0eb] sm:h-44">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-border transition group-hover:bg-primary/30" />
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-[1.25rem] font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                  {service.description}
                </p>
                <Link
                  href={service.cta.href}
                  className="mt-7 inline-flex text-sm font-semibold text-primary transition group-hover:translate-x-0.5"
                >
                  {service.cta.label} →
                </Link>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { services } from "@/content/services";

export function Services() {
  return (
    <section id="services" className="py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 lg:px-10">
        <Reveal soft className="mx-auto max-w-xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
            Services
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-[1.65rem] font-semibold tracking-tight text-foreground sm:text-[1.9rem]">
            Start with what you need
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-muted">
            Pick a path—personal investing, team workshops, or portfolio support.
          </p>
        </Reveal>

        <Stagger
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3.5"
          stagger={0.05}
        >
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <Link
                href={service.cta.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition hover:border-primary/25 hover:shadow-[0_10px_28px_rgba(14,21,18,0.06)]"
              >
                <div className="relative aspect-[16/10] w-full bg-surface">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                    className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-3.5">
                  <h3 className="font-[family-name:var(--font-display)] text-[0.95rem] font-semibold leading-snug text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span className="mt-3 text-[12px] font-semibold text-primary transition group-hover:translate-x-0.5">
                    {service.cta.label} →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

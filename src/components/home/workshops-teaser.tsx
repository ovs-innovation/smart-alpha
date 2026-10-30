"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { stockImages } from "@/content/images";
import { workshopCopy, workshopTopics } from "@/content/workshops";

export function WorkshopsTeaser() {
  const photo = stockImages.workshop;

  return (
    <Section className="bg-surface">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[24px] border border-[#d7e6dd]">
            <div className="relative aspect-[16/11] w-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#04140a]/45 via-transparent to-transparent"
              />
            </div>
            <p className="absolute bottom-3 left-4 text-[10px] text-white/80">{photo.credit}</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
              Corporate Workshops
            </p>
            <h2 className="mt-3 max-w-[16ch] font-[family-name:var(--font-display)] text-[1.7rem] font-semibold tracking-tight text-foreground sm:text-3xl md:text-[2.35rem]">
              {workshopCopy.hero.title}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[16px]">
              {workshopCopy.hero.description}
            </p>
            <Link
              href={workshopCopy.hero.cta.href}
              className="mt-6 inline-flex h-11 items-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_10px_28px_rgba(45,184,90,0.22)] transition hover:brightness-105"
            >
              {workshopCopy.hero.cta.label}
            </Link>
          </Reveal>

          <Stagger className="mt-6 grid gap-2.5 sm:grid-cols-2" stagger={0.05}>
            {workshopTopics.slice(0, 4).map((topic, index) => (
              <StaggerItem key={topic.id}>
                <article className="h-full rounded-xl border border-border bg-white px-4 py-3.5">
                  <p className="text-[10px] font-semibold tracking-[0.14em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-[0.92rem] font-semibold leading-snug text-foreground">
                    {topic.title}
                  </h3>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}

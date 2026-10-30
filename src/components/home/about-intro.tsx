"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { stockImages } from "@/content/images";
import { homeCopy } from "@/content/site";

export function AboutIntro() {
  const { about } = homeCopy;
  const photo = stockImages.education;

  return (
    <Section className="bg-white">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12">
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
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
            />
            <p className="absolute bottom-3 left-4 text-[10px] text-white/85 drop-shadow">
              {photo.credit}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
            {about.eyebrow}
          </p>
          <h2 className="mt-3 max-w-[14ch] font-[family-name:var(--font-display)] text-[1.7rem] font-semibold tracking-tight text-foreground sm:text-3xl md:text-[2.4rem]">
            {about.title}
          </h2>
          <div className="mt-4 h-px w-12 bg-primary/70" />
          <div className="mt-5 space-y-4 text-[15px] leading-[1.7] text-muted sm:text-[16px]">
            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-6 inline-flex text-sm font-semibold text-primary transition hover:brightness-90"
          >
            About Smart Alpha →
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}

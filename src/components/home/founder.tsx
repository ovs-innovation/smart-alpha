"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { homeCopy, siteConfig } from "@/content/site";

export function Founder() {
  const { founder } = homeCopy;

  return (
    <Section className="bg-white py-10 md:py-16">
      <Reveal>
        <div className="overflow-hidden rounded-[24px] border border-[#d7e6dd] bg-[#f6faf7]">
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
                {founder.eyebrow}
              </p>
              <h2 className="mt-1.5 font-[family-name:var(--font-display)] text-[1.65rem] font-semibold leading-[1.15] tracking-tight text-[#111814] sm:text-[1.9rem]">
                {founder.title}
              </h2>
              <div className="mt-3 h-px w-9 bg-primary/70" />

              <p className="mt-3.5 text-[15px] leading-[1.65] text-[#5d6b64]">
                {founder.body}
              </p>

              <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-2.5">
                {[
                  ["Registration", siteConfig.arn],
                  ["Focus", "Education & workshops"],
                  ["Location", "Moradabad, UP"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[12px] border border-[#d7e6dd] bg-white px-3 py-2.5"
                  >
                    <p className="text-[10px] font-semibold tracking-[0.12em] text-primary uppercase">
                      {label}
                    </p>
                    <p className="mt-1 text-[13px] font-semibold leading-snug text-[#111814]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2.5">
                <Link
                  href="/about#sachin"
                  className="inline-flex h-10 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
                >
                  Learn more
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center rounded-xl border border-[#cfdad3] bg-white px-5 text-sm font-semibold text-[#111814] transition hover:bg-white/70"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

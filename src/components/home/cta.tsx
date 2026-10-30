"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Section } from "@/components/ui/section";
import { stockImages } from "@/content/images";
import { homeCopy } from "@/content/site";

export function CTA() {
  const photo = stockImages.cta;

  return (
    <Section className="pb-14 md:pb-24 lg:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[24px] border border-primary/15 sm:rounded-[28px]">
          <div className="absolute inset-0">
            <Image
              src={photo.src}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[center_40%]"
            />
            <div aria-hidden className="absolute inset-0 bg-[#04140a]/72" />
          </div>
          <div className="relative px-5 py-12 text-center sm:px-16 md:py-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {homeCopy.contact.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-white/80">
              {homeCopy.contact.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href="/contact?topic=workshop" size="xl" className="rounded-xl">
                Request a Workshop
              </MagneticButton>
              <MagneticButton href="/contact" variant="outline" size="xl" className="rounded-xl bg-white">
                Individual Enquiry
              </MagneticButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

"use client";

import Link from "next/link";
import { TaglineNote } from "@/components/brand/tagline-bar";
import { Reveal } from "@/components/motion/reveal";

export function CTA() {
  return (
    <section className="bg-white pb-14 pt-2 md:pb-16">
      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="rounded-2xl border border-border bg-surface px-6 py-9 text-center sm:px-10 sm:py-11">
            <p className="font-[family-name:var(--font-hindi)] text-[13px] font-medium text-gold">
              संपर्क करें
            </p>
            <h2 className="mx-auto mt-2 max-w-md font-[family-name:var(--font-display)] text-[1.55rem] font-semibold tracking-tight text-foreground sm:text-[1.85rem]">
              Ready to take the next step?
            </h2>
            <p className="mx-auto mt-2.5 max-w-md text-[14px] leading-relaxed text-muted">
              Book a workshop for your team, or enquire about mutual funds and SIPs.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              <Link
                href="/contact?topic=workshop"
                className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
              >
                Book a workshop
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center rounded-full border border-border bg-white px-5 text-sm font-semibold text-foreground transition hover:border-primary/30"
              >
                Get in touch
              </Link>
            </div>
            <div className="mx-auto mt-5 max-w-lg border-t border-border pt-4">
              <TaglineNote />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

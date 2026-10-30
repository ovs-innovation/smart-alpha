"use client";

import Link from "next/link";
import { HeroVisual } from "@/components/home/hero-visual";
import { homeCopy, siteConfig } from "@/content/site";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { hero } = homeCopy;

  return (
    <section className="relative overflow-hidden bg-white pt-[68px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,rgba(45,184,90,0.10),transparent_55%),radial-gradient(ellipse_50%_40%_at_0%_20%,rgba(45,184,90,0.06),transparent_50%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-6 px-5 py-8 sm:gap-8 sm:px-8 sm:py-10 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-14">
        {/* Mobile: card first */}
        <div className="order-1 lg:order-2">
          <HeroVisual />
        </div>

        {/* Mobile: content below card */}
        <div className="order-2 lg:order-1">
          <motion.p
            className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-primary uppercase sm:mb-4 sm:text-[12px]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            className="max-w-[16ch] font-[family-name:var(--font-display)] text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.04em] text-[#111814] sm:text-[2.6rem] lg:text-[3.2rem]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease }}
          >
            {hero.title}
          </motion.h1>

          <motion.p
            className="mt-3.5 max-w-[40ch] text-[14px] leading-[1.6] text-[#617069] sm:mt-5 sm:text-[16px] sm:leading-[1.7]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            className="mt-5 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16, ease }}
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-10 items-center rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_rgba(45,184,90,0.25)] transition hover:brightness-105 sm:h-11 sm:px-6"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex h-10 items-center rounded-xl border border-[#d5ded8] bg-white px-5 text-sm font-semibold text-[#111814] transition hover:border-primary/35 hover:bg-[#f5f8f6] sm:h-11 sm:px-6"
            >
              {hero.secondaryCta.label}
            </Link>
          </motion.div>

          <motion.p
            className="mt-4 text-[12px] leading-relaxed text-[#6b7871] sm:mt-7 sm:text-[13px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            Led by{" "}
            <span className="font-semibold text-[#111814]">{siteConfig.founder}</span>
            <span className="mx-1.5 text-[#c5d0c9]">·</span>
            <span className="font-semibold text-[#111814]">{siteConfig.arn}</span>
            <span className="mx-1.5 text-[#c5d0c9]">·</span>
            Moradabad, UP
          </motion.p>
        </div>
      </div>
    </section>
  );
}

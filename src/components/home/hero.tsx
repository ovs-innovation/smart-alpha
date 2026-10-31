"use client";

import Image from "next/image";
import Link from "next/link";
import { homeCopy, siteConfig } from "@/content/site";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { hero } = homeCopy;

  return (
    <section className="relative overflow-hidden bg-white pt-[68px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_0%,rgba(26,154,72,0.07),transparent_55%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1120px] items-center gap-8 px-5 py-10 sm:gap-10 sm:px-8 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-14">
        <div className="order-2 lg:order-1">
          <motion.p
            className="font-[family-name:var(--font-hindi)] text-[13px] font-medium text-gold"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            className="mt-3 max-w-[16ch] font-[family-name:var(--font-display)] text-[1.9rem] font-semibold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-[2.35rem] lg:text-[2.6rem]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.04, ease }}
          >
            Grow your money with clarity—not confusion.
          </motion.h1>

          <motion.p
            className="mt-3.5 max-w-[42ch] text-[14px] leading-relaxed text-muted sm:text-[15px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease }}
          >
            Mutual funds, SIPs and corporate workshops for Indian families and teams.
            Simple language. Practical next steps.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-2.5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.16, ease }}
          >
            <Link
              href={hero.primaryCta.href}
              className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex h-10 items-center rounded-full border border-border bg-white px-5 text-sm font-semibold text-foreground transition hover:border-primary/30 hover:bg-surface"
            >
              {hero.secondaryCta.label}
            </Link>
          </motion.div>

          <motion.p
            className="mt-5 text-[12px] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.3 }}
          >
            {siteConfig.founder}
            <span className="mx-1.5 text-border">·</span>
            {siteConfig.arn}
            <span className="mx-1.5 text-border">·</span>
            Moradabad
          </motion.p>
        </div>

        <motion.div
          className="order-1 grid grid-cols-2 gap-3 sm:gap-3.5 lg:order-2"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease }}
        >
          <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_12px_32px_rgba(14,21,18,0.06)]">
            <Image
              src="/p2.jpeg"
              alt="Smart Alpha workshop session"
              fill
              priority
              quality={95}
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover object-center"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface">
            <Image
              src="/p3.jpeg"
              alt="Smart Alpha at a conference"
              fill
              quality={90}
              sizes="(max-width: 1024px) 50vw, 250px"
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface">
            <Image
              src="/p1.jpeg"
              alt="Smart Alpha team and peers"
              fill
              quality={90}
              sizes="(max-width: 1024px) 50vw, 250px"
              className="object-cover object-[center_25%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

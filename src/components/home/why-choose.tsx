"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";

const points = [
  {
    title: "For working professionals",
    text: "Clear SIP and mutual fund guidance without confusing jargon.",
  },
  {
    title: "For companies & teams",
    text: "Practical financial-awareness workshops your employees can use.",
  },
  {
    title: "Trusted since 2006",
    text: "Led by Sachin Gupta—AMFI registered, education-first approach.",
  },
] as const;

export function WhyChooseHome() {
  return (
    <section className="border-y border-border bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 lg:px-10">
        <Reveal soft className="mx-auto max-w-xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
            Why Smart Alpha
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-[1.55rem] font-semibold tracking-tight text-foreground sm:text-[1.8rem]">
            Built for real Indian money goals
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-muted">
            Simple education first—then the right next step for you or your team.
          </p>
        </Reveal>

        <Stagger className="mt-8 grid gap-3 sm:grid-cols-3" stagger={0.06}>
          {points.map((point, index) => (
            <StaggerItem key={point.title}>
              <article className="h-full rounded-xl border border-border bg-surface/60 p-4 sm:p-5">
                <p className="text-[11px] font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-[1rem] font-semibold text-foreground">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{point.text}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
          >
            Talk to us
          </Link>
          <Link
            href="/workshops"
            className="inline-flex h-10 items-center rounded-full border border-border bg-white px-5 text-sm font-semibold text-foreground transition hover:border-primary/30"
          >
            Book a workshop
          </Link>
        </div>
      </div>
    </section>
  );
}

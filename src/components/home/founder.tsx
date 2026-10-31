"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { MgmtGrid } from "@/components/ui/mgmt-grid";
import { sachinProfile } from "@/content/site";

export function Founder() {
  return (
    <section className="bg-surface py-8 md:py-14">
      <div className="mx-auto w-full max-w-[1100px] px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-border bg-white p-4 sm:p-6 md:p-7">
            <div className="flex items-center gap-3.5 sm:gap-5">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border bg-surface sm:h-20 sm:w-20 md:h-[88px] md:w-[88px]">
                <Image
                  src="/sachin.png"
                  alt={`${sachinProfile.name}, Founder of Smart Alpha`}
                  fill
                  sizes="88px"
                  className="object-cover object-[center_18%]"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold tracking-[0.14em] text-primary uppercase">
                  Leadership
                </p>
                <h2 className="mt-0.5 font-[family-name:var(--font-display)] text-[1.15rem] font-semibold tracking-tight text-foreground sm:text-[1.35rem]">
                  Meet {sachinProfile.name}
                </h2>
                <p className="mt-1 text-[12.5px] leading-snug text-muted sm:text-[13.5px]">
                  {sachinProfile.title} · Journey since {sachinProfile.journeySince}
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-5">
              <MgmtGrid items={[...sachinProfile.facts]} compact />
            </div>

            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
              <Link
                href="/about#sachin"
                className="inline-flex h-9 items-center rounded-full bg-primary px-4 text-[13px] font-semibold text-primary-foreground transition hover:brightness-105"
              >
                Full profile
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-9 items-center rounded-full border border-border px-4 text-[13px] font-semibold text-foreground transition hover:bg-surface"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

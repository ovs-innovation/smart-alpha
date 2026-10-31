"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { stockImages } from "@/content/images";

export function HeroVisual() {
  const photo = stockImages.hero;

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden rounded-[22px] border border-[#d4e6db] bg-[#eaf7ef] shadow-[0_22px_50px_rgba(14,21,18,0.10)] sm:rounded-[28px]">
        <div className="relative aspect-[5/4] w-full sm:aspect-[4/3] lg:aspect-[5/4]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#04140a]/70 via-[#04140a]/15 to-transparent"
          />

          <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
            <div className="rounded-xl border border-white/40 bg-white/95 p-3.5 shadow-[0_12px_30px_rgba(14,21,18,0.18)] backdrop-blur-md sm:rounded-2xl sm:p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold tracking-[0.14em] text-primary uppercase sm:text-[11px]">
                    Smart Alpha
                  </p>
                  <p className="mt-1 truncate font-[family-name:var(--font-display)] text-[0.98rem] font-semibold text-[#111814] sm:text-[1.1rem]">
                    Education · Funds · Workshops
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[#e8f6ee] px-2.5 py-1 text-[10px] font-semibold text-primary sm:text-[11px]">
                  ARN-142487
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 border-t border-[#eef2ef] pt-3">
                {[
                  ["Mutual Funds", "SIPs"],
                  ["Workshops", "Teams"],
                  ["Education", "Clarity"],
                ].map(([title, desc]) => (
                  <div key={title} className="min-w-0">
                    <p className="truncate text-[11px] font-semibold text-[#111814] sm:text-[12px]">
                      {title}
                    </p>
                    <p className="truncate text-[10px] text-[#7a8780]">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-2 text-center text-[10px] text-[#9aa59e] lg:text-left">{photo.credit}</p>
    </motion.div>
  );
}

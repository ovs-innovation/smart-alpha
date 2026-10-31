"use client";

import { siteConfig } from "@/content/site";

const trustItems = [
  siteConfig.arn,
  "SIPs & education",
  "Indian families",
  "Moradabad, UP",
];

export function Stats() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto flex w-full max-w-[1100px] flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-4 sm:justify-between sm:px-8 lg:px-10">
        {trustItems.map((item) => (
          <p
            key={item}
            className="text-[12px] font-medium tracking-wide text-muted sm:text-[13px]"
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

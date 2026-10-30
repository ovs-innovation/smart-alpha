"use client";

import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { testimonials } from "@/content/testimonials";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => window.clearInterval(t);
  }, []);

  return (
    <Section className="bg-surface">
      <SectionHeader
        eyebrow="Clients"
        title="Trusted by investors"
        description="Clear process. Honest conversations. Long-term partnership."
      />
      <Reveal soft>
        <div className="relative mx-auto max-w-3xl">
          <div className="relative overflow-hidden border-y border-border py-2 md:py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="py-6 md:py-8"
              >
                <p className="text-sm tracking-widest text-primary">
                  {"★".repeat(item.rating)}
                </p>
                <blockquote className="mt-5 font-[family-name:var(--font-display)] text-2xl font-medium leading-snug tracking-tight text-foreground md:text-[1.85rem]">
                  “{item.quote}”
                </blockquote>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted">
                      {item.role} · {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-primary" : "w-2.5 bg-[#c5cfc9] hover:bg-[#a8b5ae]"
                }`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

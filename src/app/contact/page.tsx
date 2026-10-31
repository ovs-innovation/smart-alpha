import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact/contact-form";
import { PageTransition } from "@/components/motion/page-transition";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Enquire about Smart Alpha services or request a corporate financial-awareness workshop.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-surface">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_0%_0%,rgba(45,184,90,0.12),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 india-tricolor opacity-70" />

        <div className="relative mx-auto grid max-w-[1180px] lg:grid-cols-[0.95fr_1.05fr]">
          {/* Brand / reach panel */}
          <div className="flex flex-col justify-between px-5 pt-[76px] pb-8 sm:px-8 sm:pt-24 sm:pb-10 lg:px-10 lg:pb-14">
            <Reveal>
              <p className="font-[family-name:var(--font-hindi)] text-[14px] font-medium text-gold">
                संपर्क करें
              </p>
              <h1 className="mt-2 max-w-md font-[family-name:var(--font-display)] text-[2.15rem] font-semibold tracking-tight text-foreground sm:text-[2.6rem] lg:text-[2.85rem]">
                Talk to Smart Alpha
              </h1>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted sm:text-[16px]">
                Workshops for teams, or a clear conversation on mutual funds and SIPs—whatever you
                need next.
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl border border-[#d7e6dd]">
                <div className="relative aspect-[16/9] sm:aspect-[5/3]">
                  <Image
                    src="/p6.jpeg"
                    alt="Smart Alpha conversation and guidance"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1610]/55 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <p className="text-[12px] font-semibold text-white/90">
                      {siteConfig.founder}
                      <span className="mx-1.5 text-white/45">·</span>
                      {siteConfig.arn}
                    </p>
                    <p className="mt-0.5 text-[11px] text-white/70">
                      Moradabad, Uttar Pradesh
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 space-y-5">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
                    Call
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="mt-1 block font-[family-name:var(--font-display)] text-[1.35rem] font-semibold tracking-tight text-foreground transition hover:text-primary sm:text-[1.5rem]"
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={siteConfig.phoneAltHref}
                    className="mt-0.5 block font-[family-name:var(--font-display)] text-[1.2rem] font-semibold tracking-tight text-foreground/85 transition hover:text-primary sm:text-[1.35rem]"
                  >
                    {siteConfig.phoneAlt}
                  </a>
                </div>

                <div className="h-px w-full bg-border" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-1 block text-[14px] font-semibold text-foreground transition hover:text-primary"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
                      Follow
                    </p>
                    <div className="mt-1.5 flex gap-3">
                      {siteConfig.social.instagram ? (
                        <a
                          href={siteConfig.social.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[14px] font-semibold text-foreground transition hover:text-primary"
                        >
                          Instagram
                        </a>
                      ) : null}
                      {siteConfig.social.youtube ? (
                        <a
                          href={siteConfig.social.youtube}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[14px] font-semibold text-foreground transition hover:text-primary"
                        >
                          YouTube
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form panel */}
          <div className="bg-white px-5 py-8 sm:px-8 sm:py-10 lg:border-l lg:border-border lg:px-10 lg:pt-24 lg:pb-14">
            <Reveal delay={0.05}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

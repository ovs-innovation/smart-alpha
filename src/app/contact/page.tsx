import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/layout/page-hero";
import { PageTransition } from "@/components/motion/page-transition";
import { Section } from "@/components/ui/section";
import { homeCopy, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Enquire about Smart Alpha services or request a corporate financial-awareness workshop.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHero
        title={homeCopy.contact.title}
        description={homeCopy.contact.description}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="rounded-[18px] border border-border bg-card p-6">
              <p className="text-xs text-primary">Contact person</p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {siteConfig.founder} · {siteConfig.name}
              </p>
              <p className="mt-1 text-sm text-muted">{siteConfig.arn}</p>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block rounded-[18px] border border-border bg-card p-6 transition hover:border-primary/40"
            >
              <p className="text-xs text-primary">Email</p>
              <p className="mt-2 text-sm font-medium">{siteConfig.email}</p>
            </a>
            <div className="rounded-[18px] border border-border bg-card p-6">
              <p className="text-xs text-primary">Phone</p>
              <div className="mt-2 space-y-1.5">
                <a
                  href={siteConfig.phoneHref}
                  className="block text-sm font-medium transition hover:text-primary"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.phoneAltHref}
                  className="block text-sm font-medium transition hover:text-primary"
                >
                  {siteConfig.phoneAlt}
                </a>
              </div>
            </div>
            <div className="rounded-[18px] border border-border bg-card p-6">
              <p className="text-xs text-primary">Office</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {siteConfig.address.city}, {siteConfig.address.state}
                <br />
                {siteConfig.address.country}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[18px] border border-border bg-surface p-5">
                <p className="text-xs font-semibold text-primary">Corporate Workshops</p>
                <p className="mt-2 text-sm text-muted">
                  Tell us about your organisation, audience and preferred workshop topics.
                </p>
              </div>
              <div className="rounded-[18px] border border-border bg-surface p-5">
                <p className="text-xs font-semibold text-primary">Individual Enquiries</p>
                <p className="mt-2 text-sm text-muted">
                  Share what you would like to learn about our services—we will guide next steps.
                </p>
              </div>
            </div>
            <div className="rounded-[18px] border border-border bg-card p-6">
              <p className="text-xs text-primary">Social</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center rounded-xl border border-border bg-white px-4 text-sm font-medium transition hover:border-primary/40 hover:text-primary"
                >
                  Instagram
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 items-center rounded-xl border border-border bg-white px-4 text-sm font-medium transition hover:border-primary/40 hover:text-primary"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </PageTransition>
  );
}

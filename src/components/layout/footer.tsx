"use client";

import { BrandLogo } from "@/components/brand/brand-logo";
import { TaglineNote } from "@/components/brand/tagline-bar";
import { siteConfig } from "@/content/site";
import Link from "next/link";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Workshops", href: "/workshops" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy-policy" },
] as const;

function SocialIcon({ name }: { name: "youtube" | "instagram" }) {
  if (name === "youtube") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 8.2a2.5 2.5 0 0 0-1.8-1.8C17.5 6 12 6 12 6s-5.5 0-7.2.4A2.5 2.5 0 0 0 3 8.2 26 26 0 0 0 3 12a26 26 0 0 0 .8 3.8 2.5 2.5 0 0 0 1.8 1.8C6.5 18 12 18 12 18s5.5 0 7.2-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 21 12a26 26 0 0 0 0-3.8Z" />
        <path d="m10 9.5 5 2.5-5 2.5v-5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-foreground">
      <div className="mx-auto grid max-w-[1100px] gap-6 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.2fr_1fr_auto] lg:gap-8 lg:px-10">
        <div>
          <BrandLogo href="/" size="nav" />
          <p className="mt-2 text-[13px] font-medium text-foreground">
            {siteConfig.founder}
          </p>
          <p className="mt-1 text-[12px] text-muted">
            {siteConfig.arn}
            <span className="mx-1.5 text-border">·</span>
            {siteConfig.address.city}, {siteConfig.address.state}
          </p>
          <div className="mt-3 flex gap-2">
            {(
              [
                [siteConfig.social.instagram, "instagram"],
                [siteConfig.social.youtube, "youtube"],
              ] as const
            )
              .filter(([href]) => Boolean(href))
              .map(([href, name]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-white text-muted transition hover:border-primary/40 hover:text-primary"
                >
                  <SocialIcon name={name} />
                </a>
              ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
            Contact
          </p>
          <ul className="mt-2 space-y-1.5 text-[13px] text-muted">
            <li>
              <a href={siteConfig.phoneHref} className="transition hover:text-primary">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={siteConfig.phoneAltHref} className="transition hover:text-primary">
                {siteConfig.phoneAlt}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-primary">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
            Quick links
          </p>
          <ul className="mt-2 space-y-1.5 text-[13px]">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted transition hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border bg-primary/[0.05]">
        <div className="mx-auto max-w-[1100px] px-5 py-3 sm:px-8 lg:px-10">
          <TaglineNote />
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto px-5 py-3 text-[11px] text-muted sm:px-8 lg:px-10">
          <p>© 2026 {siteConfig.legalName}</p>
        </div>
      </div>
    </footer>
  );
}

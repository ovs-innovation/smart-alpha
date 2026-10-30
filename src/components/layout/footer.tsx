"use client";

import { BrandLogo } from "@/components/brand/brand-logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { footerLinks, siteConfig } from "@/content/site";
import Link from "next/link";
import { useState } from "react";

function SocialIcon({ name }: { name: "linkedin" | "twitter" | "youtube" | "instagram" }) {
  const paths: Record<typeof name, React.ReactNode> = {
    linkedin: (
      <path d="M6.5 9.5v8M4 9.5v8M4 6.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM10 17.5v-4.6c0-1.6.8-2.4 2.1-2.4 1.1 0 1.9.7 1.9 2.3v4.7M10 9.5v8" />
    ),
    twitter: <path d="M4 4.5 10.5 12 4 19.5h2.2L12 13.4l4.7 6.1H20L13.3 11.7 19.5 4.5H17.3L12 10.3 7.5 4.5H4Z" />,
    youtube: (
      <>
        <path d="M21 8.2a2.5 2.5 0 0 0-1.8-1.8C17.5 6 12 6 12 6s-5.5 0-7.2.4A2.5 2.5 0 0 0 3 8.2 26 26 0 0 0 3 12a26 26 0 0 0 .8 3.8 2.5 2.5 0 0 0 1.8 1.8C6.5 18 12 18 12 18s5.5 0 7.2-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 21 12a26 26 0 0 0 0-3.8Z" />
        <path d="m10 9.5 5 2.5-5 2.5v-5Z" />
      </>
    ),
    instagram: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      {paths[name]}
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const { address } = siteConfig;

  return (
    <footer className="border-t border-border bg-[var(--surface)] text-foreground">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <BrandLogo href="/" size="md" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Financial education, mutual fund solutions and corporate investment-awareness workshops—led by{" "}
            {siteConfig.founder}.
          </p>
          <div className="mt-5 space-y-2 text-sm text-muted">
            <p className="font-medium text-foreground">{siteConfig.arn}</p>
            <p>
              {address.city}, {address.state}
            </p>
            <a href={`mailto:${siteConfig.email}`} className="block transition hover:text-primary">
              {siteConfig.email}
            </a>
            <a href={siteConfig.phoneHref} className="block transition hover:text-primary">
              {siteConfig.phone}
            </a>
            <a href={siteConfig.phoneAltHref} className="block transition hover:text-primary">
              {siteConfig.phoneAlt}
            </a>
          </div>
          <div className="mt-6 flex gap-2">
            {(
              [
                [siteConfig.social.instagram, "instagram"],
                [siteConfig.social.youtube, "youtube"],
                [siteConfig.social.linkedin, "linkedin"],
                [siteConfig.social.twitter, "twitter"],
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-[var(--ink-soft)] transition hover:border-primary/40 hover:text-primary"
              >
                <SocialIcon name={name} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Company" links={footerLinks.company} />
        <FooterCol title="Services" links={footerLinks.services} />
        <div>
          <FooterCol title="Resources" links={footerLinks.resources} />
          <div className="mt-7">
            <p className="text-sm font-semibold tracking-tight">Legal</p>
            <ul className="mt-3 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-white/70">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-sm font-semibold">Newsletter</p>
            <p className="mt-1 text-sm text-muted">Market notes—no spam.</p>
          </div>
          <form
            className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email) return;
              setDone(true);
              setEmail("");
            }}
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              aria-label="Email for newsletter"
              className="bg-white"
            />
            <Button type="submit" className="shrink-0 rounded-xl">
              {done ? "Subscribed" : "Subscribe"}
            </Button>
          </form>
        </div>
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 pb-9 text-xs text-muted sm:px-8 lg:flex-row lg:justify-between lg:px-10">
          <p>© 2026 {siteConfig.legalName}. All rights reserved.</p>
          <p>Investments are subject to market risks.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold tracking-tight">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link href={link.href} className="text-sm text-muted transition hover:text-primary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { PageTransition } from "@/components/motion/page-transition";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing use of the Smart Alpha website and informational content.",
};

const sections = [
  {
    title: "Acceptance of terms",
    body: `By accessing ${siteConfig.url}, you agree to these Terms & Conditions. If you do not agree, please do not use the site.`,
  },
  {
    title: "Informational content",
    body: "Content on this website is for general information and education. It does not constitute personalized investment advice, an offer, or a solicitation to buy or sell securities unless expressly stated in a formal engagement.",
  },
  {
    title: "Market risk disclaimer",
    body: "Investments are subject to market risks. Past performance is not indicative of future results. Please read all scheme and related documents carefully before investing.",
  },
  {
    title: "No warranties",
    body: "We strive for accuracy but do not warrant that content is complete, current, or error-free. Market data shown may be delayed or illustrative.",
  },
  {
    title: "Limitation of liability",
    body: "To the fullest extent permitted by law, Smart Alpha is not liable for any indirect, incidental, or consequential damages arising from use of this website.",
  },
  {
    title: "Engagements",
    body: "Formal advisory relationships are governed by separate agreements, disclosures, and applicable regulations. Website terms do not replace those documents.",
  },
  {
    title: "Contact",
    body: `Questions about these terms: ${siteConfig.email}`,
  },
];

export default function TermsPage() {
  return (
    <PageTransition>
      <PageHero
        title="Terms & Conditions"
        description="The rules that govern use of the Smart Alpha website and published materials."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
                {section.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">{section.body}</p>
            </div>
          ))}
          <p className="text-xs text-muted">Last updated: March 2026</p>
        </div>
      </Section>
    </PageTransition>
  );
}

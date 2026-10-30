import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { PageTransition } from "@/components/motion/page-transition";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Smart Alpha privacy policy covering data collection, usage, and investor rights.",
};

const sections = [
  {
    title: "Information we collect",
    body: "We collect information you provide through consultation forms, email, and phone—such as name, contact details, financial goals, and messages. Analytics may collect anonymized usage data to improve site performance.",
  },
  {
    title: "How we use information",
    body: "Information is used to respond to inquiries, schedule consultations, tailor advisory conversations, and improve our services. We do not sell personal data.",
  },
  {
    title: "Data security",
    body: "We apply reasonable administrative and technical safeguards. No method of transmission over the internet is fully secure; we continuously improve our practices.",
  },
  {
    title: "Third parties",
    body: "We may use trusted service providers for hosting, analytics, and communications. These parties process data only as needed to perform services for us.",
  },
  {
    title: "Your rights",
    body: "You may request access, correction, or deletion of personal information by contacting us. We will respond within a reasonable timeframe subject to applicable law.",
  },
  {
    title: "Contact",
    body: `For privacy questions, email ${siteConfig.email} or contact us using the details on the Contact page.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageTransition>
      <PageHero
        title="Privacy Policy"
        description="How Smart Alpha collects, uses, and protects your information."
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

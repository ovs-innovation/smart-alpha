"use client";

import { BrandLogo } from "@/components/brand/brand-logo";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const resourceLinks = [
  { label: "Market Insights", href: "/market-insights", desc: "Explainers and market concepts" },
  { label: "Blogs", href: "/blogs", desc: "Guides and financial awareness" },
  { label: "Corporate Workshops", href: "/workshops", desc: "Employee financial education" },
  { label: "FAQs", href: "/faqs", desc: "Common questions answered" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<"services" | "resources" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMega(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || openMega || mobileOpen
          ? "border-b border-border bg-white/95 shadow-[0_8px_30px_rgba(14,21,18,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-white"
      )}
      onMouseLeave={() => setOpenMega(null)}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <BrandLogo priority />

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          <NavItem href="/" active={pathname === "/"}>
            Home
          </NavItem>
          <NavItem href="/about" active={pathname.startsWith("/about")}>
            About
          </NavItem>
          <button
            type="button"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition duration-200",
              openMega === "services" || pathname.startsWith("/services")
                ? "bg-primary/10 text-primary"
                : "text-[var(--ink-soft)] hover:bg-white/60 hover:text-foreground"
            )}
            onMouseEnter={() => setOpenMega("services")}
            onFocus={() => setOpenMega("services")}
          >
            Services
          </button>
          <NavItem href="/workshops" active={pathname.startsWith("/workshops")}>
            Workshops
          </NavItem>
          <button
            type="button"
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition duration-200",
              openMega === "resources" ||
                pathname.startsWith("/market-insights") ||
                pathname.startsWith("/blogs") ||
                pathname.startsWith("/faqs")
                ? "bg-primary/10 text-primary"
                : "text-[var(--ink-soft)] hover:bg-white/60 hover:text-foreground"
            )}
            onMouseEnter={() => setOpenMega("resources")}
            onFocus={() => setOpenMega("resources")}
          >
            Insights
          </button>
          <NavItem href="/contact" active={pathname.startsWith("/contact")}>
            Contact
          </NavItem>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <MagneticButton href="/contact" size="md" className="rounded-xl">
              Enquire Now
            </MagneticButton>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/70 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {openMega ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-[68px] hidden border-b border-border bg-white/95 backdrop-blur-xl lg:block"
          >
            <div className="mx-auto grid max-w-[1200px] gap-6 px-8 py-8 lg:grid-cols-[1.4fr_0.6fr] lg:px-10">
              {openMega === "services" ? (
                <>
                  <div className="grid gap-1 sm:grid-cols-2">
                    {services.map((service, i) => (
                      <Link
                        key={service.id}
                        href={`/services#${service.slug}`}
                        className="rounded-xl px-4 py-3 transition hover:bg-[var(--surface)]"
                      >
                        <span className="text-[11px] font-semibold tracking-wider text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="mt-1 block text-sm font-semibold">{service.title}</span>
                        <span className="mt-1 block text-xs text-muted line-clamp-2">
                          {service.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="rounded-2xl bg-[var(--surface)] p-6">
                    <BrandLogo size="md" href={null} />
                    <h3 className="mt-4 font-[family-name:var(--font-display)] text-base font-semibold">
                      Explore all services
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      Mutual funds, workshops, education and investment support.
                    </p>
                    <Link
                      href="/services"
                      className="mt-4 inline-flex text-sm font-semibold text-primary"
                    >
                      View all →
                    </Link>
                  </div>
                </>
              ) : (
                <div className="grid gap-1 sm:grid-cols-2 lg:col-span-2">
                  {resourceLinks.map((item, i) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-4 py-3 transition hover:bg-[var(--surface)]"
                    >
                      <span className="text-[11px] font-semibold tracking-wider text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-1 block text-sm font-semibold">{item.label}</span>
                      <span className="mt-1 block text-xs text-muted">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-white lg:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Workshops", "/workshops"],
                ["Insights", "/market-insights"],
                ["Blogs", "/blogs"],
                ["FAQs", "/faqs"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-xl px-3 py-3 text-sm font-medium hover:bg-[var(--surface)]"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 flex h-11 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground"
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function NavItem({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-lg px-3 py-2 text-sm font-medium transition duration-200",
        active
          ? "bg-primary/10 text-primary"
          : "text-[var(--ink-soft)] hover:bg-white/60 hover:text-foreground"
      )}
    >
      {children}
    </Link>
  );
}

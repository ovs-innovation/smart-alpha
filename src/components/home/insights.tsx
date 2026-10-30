"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { blogPosts } from "@/content/blogs";

export function Insights() {
  const posts = blogPosts.slice(0, 4);

  return (
    <Section id="insights">
      <div className="mb-2 flex flex-col items-start justify-between gap-4 md:mb-4 md:flex-row md:items-end">
        <SectionHeader
          align="left"
          eyebrow="Insights"
          title="Educational videos, market explainers and financial concepts"
          description="Browse topics such as mutual fund basics, SIPs, investment risks and financial awareness."
        />
        <Reveal className="md:mb-14">
          <Link
            href="/market-insights"
            className="group inline-flex items-center gap-1 text-sm font-semibold text-primary"
          >
            Explore Insights
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </Reveal>
      </div>
      <Stagger className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4" stagger={0.08}>
        {posts.map((post) => (
          <StaggerItem key={post.id}>
            <Link href={`/blogs/${post.slug}`} className="group flex h-full flex-col">
              <div className="relative h-36 overflow-hidden rounded-2xl bg-[#e8f0eb]">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.coverGradient}`} />
                )}
              </div>
              <div className="flex flex-1 flex-col pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {post.category}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-[1.02rem] font-semibold leading-snug tracking-tight text-foreground transition group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
                <p className="mt-auto pt-4 text-xs text-muted">{post.readTime}</p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

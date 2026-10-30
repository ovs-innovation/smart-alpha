import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { PageTransition } from "@/components/motion/page-transition";
import { Section } from "@/components/ui/section";
import { blogPosts } from "@/content/blogs";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Educational explainers on markets, mutual funds, SIPs and financial awareness from Smart Alpha.",
};

export default function BlogsPage() {
  return (
    <PageTransition>
      <PageHero
        title="Insights"
        description="Educational explainers and financial concepts from Smart Alpha."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="group glass grid overflow-hidden rounded-[18px] transition hover:-translate-y-1 sm:grid-cols-[200px_1fr]"
            >
              <div className="relative min-h-[160px] bg-[#e8f0eb]">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt=""
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.coverGradient}`} />
                )}
              </div>
              <div className="p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {post.category}
                </p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-muted line-clamp-3">{post.excerpt}</p>
                <p className="mt-4 text-xs text-muted">
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  · {post.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </PageTransition>
  );
}

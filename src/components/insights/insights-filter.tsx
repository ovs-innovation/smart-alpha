"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { blogPosts, insightCategories } from "@/content/blogs";

export function InsightsFilter() {
  const [category, setCategory] = useState<(typeof insightCategories)[number]>("All");
  const filtered = useMemo(
    () => (category === "All" ? blogPosts : blogPosts.filter((p) => p.category === category)),
    [category]
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-x-6 gap-y-3 border-b border-border">
        {insightCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`relative pb-3 text-sm font-medium transition ${
              category === cat ? "text-foreground" : "text-muted hover:text-foreground"
            }`}
          >
            {cat}
            {category === cat ? (
              <span className="absolute inset-x-0 -bottom-px h-[2px] bg-primary" />
            ) : null}
          </button>
        ))}
      </div>
      <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((post, index) => (
          <StaggerItem key={post.id}>
            <Link
              href={`/blogs/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-border bg-card transition hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="relative aspect-[16/10] w-full bg-[#e8f0eb]">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-[center_30%] transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.coverGradient}`} />
                )}
                <span className="absolute bottom-3 left-4 font-[family-name:var(--font-display)] text-4xl font-semibold text-white/55 drop-shadow">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs text-primary">{post.category}</p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm text-muted">{post.excerpt}</p>
                <p className="mt-auto pt-4 text-xs text-muted">
                  {post.author} · {post.readTime}
                </p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </>
  );
}

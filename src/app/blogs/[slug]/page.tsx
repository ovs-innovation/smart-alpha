import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageTransition } from "@/components/motion/page-transition";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { blogPosts, getPostBySlug } from "@/content/blogs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <PageTransition>
      <article className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link href="/blogs" className="text-sm font-semibold text-primary hover:underline">
            ← Back to blogs
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {post.category}
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            {post.author} ·{" "}
            {new Date(post.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readTime}
          </p>
          <div className="relative mt-8 h-56 overflow-hidden rounded-[22px] bg-[#e8f0eb]">
            {post.coverImage ? (
              <Image
                src={post.coverImage}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-cover"
                priority
              />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${post.coverGradient}`} />
            )}
          </div>
          <div className="prose-invert mt-10 space-y-5 text-base leading-relaxed text-foreground/85">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 rounded-[22px] border border-border bg-foreground/[0.02] p-8 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold">
              Want this applied to your portfolio?
            </h2>
            <p className="mt-2 text-sm text-muted">
              Book a consultation and we will translate research into a personal plan.
            </p>
            <div className="mt-5 flex justify-center">
              <MagneticButton href="/contact">Book Consultation</MagneticButton>
            </div>
          </div>
        </div>
      </article>
    </PageTransition>
  );
}

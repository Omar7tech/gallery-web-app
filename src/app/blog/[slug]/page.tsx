import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { blogPosts, getPost } from "@/data/blog";
import { SITE } from "@/lib/site";
import { formatDate } from "@/lib/utils";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Newsletter } from "@/components/marketing/newsletter";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Essay not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: SITE.name },
  };

  return (
    <>
      <JsonLdScript data={articleSchema} />
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      {/* Dark header strip */}
      <div className="bg-ink pb-10 pt-32 text-chalk md:pt-40">
        <div className="container-page mx-auto max-w-3xl">
          <Breadcrumb
            light
            items={[
              { label: "Home", href: "/" },
              { label: "Journal", href: "/blog" },
              { label: post.category },
            ]}
          />
          <div className="mt-7 flex items-center gap-3">
            <span className="serial text-sm text-brass-soft">Nº {post.serial}</span>
            <span className="eyebrow text-chalk/55">{post.category}</span>
          </div>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl leading-tight md:text-6xl">
            <TextReveal text={post.title} trigger="load" />
          </h1>
          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-chalk/60">
            <span className="text-chalk">{post.author}</span>
            <span>{post.authorRole}</span>
            <span aria-hidden>·</span>
            <span>{formatDate(post.date)}</span>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <Reveal variant="clip" className="container-page mx-auto -mt-0 max-w-5xl py-12">
        <div className="img-frame aspect-[16/9] overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </Reveal>

      {/* Body */}
      <article className="container-page mx-auto max-w-2xl pb-16">
        <div className="prose-editorial flex flex-col gap-7">
          {post.body.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-xl leading-relaxed text-ink first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-patina"
                  : "text-lg leading-relaxed text-ink-soft"
              }
            >
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
          >
            <ArrowLeft size={16} aria-hidden className="transition-transform group-hover:-translate-x-1" />
            <span className="link-underline pb-1">Back to the journal</span>
          </Link>
        </div>
      </article>

      {/* More */}
      <section className="bg-paper py-20 md:py-24">
        <div className="container-page">
          <h2 className="font-display text-3xl text-ink md:text-4xl">Keep reading</h2>
          <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {more.map((p) => (
              <article key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <div className="img-frame aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <span className="eyebrow mt-4 block text-muted">{p.category}</span>
                  <h3 className="mt-2 inline-flex items-start gap-1 font-display text-xl text-ink transition-colors group-hover:text-patina">
                    {p.title}
                    <ArrowUpRight size={14} aria-hidden className="mt-1 opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                </Link>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-xl text-center">
            <Newsletter className="mx-auto" />
          </div>
        </div>
      </section>
    </>
  );
}

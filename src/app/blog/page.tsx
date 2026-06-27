import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { formatDate, unsplash } from "@/lib/utils";
import { IMG } from "@/lib/images";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { Newsletter } from "@/components/marketing/newsletter";
import { JsonLdScript, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "The Solera journal — essays on craft, materials, and living well with furniture meant to last.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <JsonLdScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/blog" },
        ])}
      />
      <PageHeader
        serial="—"
        eyebrow="The Journal"
        title="Notes from the bench."
        intro="Essays on craft, materials, and the slow art of furnishing a home you'll keep — written by the people who make the work."
        crumbs={[{ label: "Home", href: "/" }, { label: "Journal" }]}
        image={unsplash(IMG.craftB, { w: 2000, h: 1100, q: 80 })}
      />

      {/* Featured */}
      <section className="container-page py-16 md:py-20">
        <Reveal variant="clip">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            <div className="img-frame aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="serial text-sm text-brass">Nº {featured.serial}</span>
                <span className="eyebrow text-muted">{featured.category}</span>
              </div>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink transition-colors group-hover:text-patina md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted">
                <span>{featured.author}</span>
                <span aria-hidden>·</span>
                <span>{formatDate(featured.date)}</span>
                <span aria-hidden>·</span>
                <span>{featured.readingMinutes} min</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
                <span className="link-underline pb-1">Read the essay</span>
                <ArrowUpRight size={16} aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="container-page border-t border-line py-16 md:py-20">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} variant="up" y={28} delay={(i % 3) * 0.06}>
              <article>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="img-frame aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="eyebrow text-muted">{post.category}</span>
                    <span className="text-xs text-sage">·</span>
                    <span className="text-xs text-muted">{post.readingMinutes} min</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl leading-snug text-ink transition-colors group-hover:text-patina">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-ink-soft">{post.excerpt}</p>
                  <p className="mt-4 text-sm text-muted">
                    {post.author} · {formatDate(post.date)}
                  </p>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper py-20 md:py-24">
        <div className="container-page mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="eyebrow text-brass">The Ledger</span>
          <h2 className="mt-5 font-display text-3xl text-ink md:text-4xl">
            New essays, a few times a year.
          </h2>
          <div className="mt-8 w-full">
            <Newsletter className="mx-auto" />
          </div>
        </div>
      </section>
    </>
  );
}

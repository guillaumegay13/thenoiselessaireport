import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsletterBySlug, getAllSlugs } from "@/lib/newsletters";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const newsletter = getNewsletterBySlug(slug);
  if (!newsletter) return {};

  return {
    title: `${newsletter.title} — The Noiseless AI Report`,
    description: newsletter.summary,
  };
}

export default async function NewsletterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const newsletter = getNewsletterBySlug(slug);

  if (!newsletter) notFound();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <main className="relative z-10 mx-auto max-w-2xl px-6 py-24">
        {/* Back link */}
        <Link
          href="/newsletters"
          className="inline-flex items-center gap-1 font-mono text-xs text-zinc-500 transition-colors hover:text-zinc-300"
        >
          &larr; All issues
        </Link>

        {/* Header */}
        <header className="mt-8 mb-10 border-b border-white/5 pb-8">
          <div className="mb-3 font-mono text-xs text-zinc-500">
            {new Date(newsletter.date + "T00:00:00").toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {newsletter.title}
          </h1>
        </header>

        {/* Newsletter content */}
        <article
          className="newsletter-content"
          dangerouslySetInnerHTML={{ __html: newsletter.content }}
        />

        {/* Footer */}
        <div className="mt-16 border-t border-white/5 pt-8">
          <Link
            href="/newsletters"
            className="font-mono text-xs text-indigo-400 transition-colors hover:text-indigo-300"
          >
            &larr; Back to all issues
          </Link>
        </div>
      </main>
    </div>
  );
}

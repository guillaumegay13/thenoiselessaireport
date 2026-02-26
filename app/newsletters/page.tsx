import Link from "next/link";
import { getAllNewsletters } from "@/lib/newsletters";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Past Issues — The Noiseless AI Report",
  description:
    "Browse past issues of The Noiseless AI Report. High-signal, no-hype coverage of what actually matters in AI.",
};

export default function NewslettersPage() {
  const newsletters = getAllNewsletters();

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

      <div className="animate-pulse-glow pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)]" />

      <main className="relative z-10 mx-auto max-w-2xl px-6 py-24">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 font-mono text-xs text-zinc-500 transition-colors hover:text-zinc-300"
        >
          &larr; Home
        </Link>

        {/* Header */}
        <div className="mt-8 mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-wider text-zinc-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400" />
            PAST ISSUES
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            the noiseless{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              archive
            </span>
          </h1>
          <p className="mt-3 text-zinc-400">
            Every issue, from newest to oldest.
          </p>
        </div>

        {/* Newsletter list */}
        <div className="flex flex-col gap-4">
          {newsletters.map((newsletter) => (
            <Link
              key={newsletter.slug}
              href={`/newsletters/${newsletter.slug}`}
              className="group rounded-lg border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div className="mb-2 font-mono text-xs text-zinc-500">
                {new Date(newsletter.date + "T00:00:00").toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <h2 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                {newsletter.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {newsletter.summary}
              </p>
              <span className="mt-3 inline-block font-mono text-xs text-indigo-400 transition-transform group-hover:translate-x-1">
                Read &rarr;
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Contribute — The Noiseless AI Report",
  description:
    "Have a topic, insight, or story worth sharing? Contribute to The Noiseless AI Report.",
};

export default function Contribute() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div className="animate-pulse-glow pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_70%)]" />

      <main className="relative z-10 mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
        {/* Back link */}
        <Link
          href="/"
          className="mb-12 font-mono text-xs text-zinc-500 transition-colors hover:text-indigo-400"
        >
          &larr; Back to home
        </Link>

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-wider text-zinc-400">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400" />
          CONTRIBUTE
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Share a{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            topic
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-400">
          Have an insight, a tool, or a story worth covering? We&rsquo;re always
          looking for high-signal topics to feature in the newsletter.
        </p>

        {/* How to contribute */}
        <div className="mt-12 w-full rounded-lg border border-white/5 bg-white/5 p-8">
          <p className="text-sm leading-relaxed text-zinc-400">
            Send us an email with your topic idea, a brief description of why it
            matters, and any relevant links or context.
          </p>

          <a
            href="mailto:contact@noiselessreport.ai"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-500/10 px-6 py-3 font-mono text-sm font-medium text-indigo-400 transition-colors hover:bg-indigo-500/20"
          >
            contact@noiselessreport.ai
          </a>

          <p className="mt-6 font-mono text-xs text-zinc-600">
            We read every email &middot; Response within 48h
          </p>
        </div>
      </main>
    </div>
  );
}

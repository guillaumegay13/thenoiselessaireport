import Link from "next/link";
import SubscribeForm from "./subscribe-form";

export default function Home() {
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

      <main className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-wider text-zinc-400">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400" />
          WEEKLY AI NEWSLETTER
        </div>

        {/* Heading */}
        <h1 className="animate-fade-in-up-delay text-4xl leading-[1.15] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          the noiseless
          <br />
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            AI report
          </span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up-delay-2 mt-6 max-w-md text-lg leading-relaxed text-zinc-400">
          Cut through the hype. One concise, high-signal report on what actually
          matters in AI.
        </p>

        {/* Email form */}
        <div className="animate-fade-in-up-delay-2 w-full flex justify-center">
          <SubscribeForm />
        </div>

        <p className="animate-fade-in-up-delay-2 mt-4 font-mono text-xs text-zinc-600">
          Free &middot; No spam &middot; Unsubscribe anytime
        </p>

        <div className="animate-fade-in-up-delay-2 mt-3 flex items-center gap-4">
          <Link
            href="/newsletters"
            className="font-mono text-xs text-zinc-500 transition-colors hover:text-indigo-400"
          >
            Read past issues &rarr;
          </Link>
          <span className="text-zinc-700">&middot;</span>
          <Link
            href="/contribute"
            className="font-mono text-xs text-zinc-500 transition-colors hover:text-indigo-400"
          >
            Contribute &rarr;
          </Link>
        </div>

        {/* Features */}
        <div className="animate-fade-in-up-delay-2 mt-16 grid w-full grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/5 bg-white/5 sm:grid-cols-3">
          {[
            { label: "Signal only", desc: "No fluff, no hype" },
            { label: "5 min read", desc: "Respect your time" },
            { label: "Every Thursday", desc: "Consistently delivered" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#050505] px-6 py-5 text-center"
            >
              <div className="font-mono text-sm font-medium text-white">
                {item.label}
              </div>
              <div className="mt-1 text-xs text-zinc-500">{item.desc}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

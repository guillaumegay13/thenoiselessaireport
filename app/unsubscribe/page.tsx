"use client";

import { useState } from "react";

export default function UnsubscribePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleResubscribe(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

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
        <h1 className="animate-fade-in-up text-3xl font-bold tracking-tight text-white sm:text-4xl">
          You&apos;ve been unsubscribed
        </h1>
        <p className="animate-fade-in-up-delay mt-4 text-lg text-zinc-400">
          You won&apos;t receive any more emails from us.
        </p>

        {status === "success" ? (
          <p className="animate-fade-in-up mt-8 font-mono text-sm text-indigo-400">
            Welcome back! You&apos;re resubscribed.
          </p>
        ) : (
          <form
            onSubmit={handleResubscribe}
            className="animate-fade-in-up-delay-2 mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="you@domain.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 font-mono text-sm text-white placeholder:text-zinc-600 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="h-12 cursor-pointer rounded-lg bg-indigo-500 px-6 font-medium text-white transition-colors hover:bg-indigo-400 disabled:opacity-50"
            >
              {status === "loading" ? "Resubscribing..." : "Resubscribe"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-sm text-red-400">
            Something went wrong. Please try again.
          </p>
        )}

        <a
          href="/"
          className="animate-fade-in-up-delay-2 mt-6 inline-flex items-center gap-2 font-mono text-sm text-zinc-500 transition-colors hover:text-zinc-300"
        >
          &larr; Back to home
        </a>
      </main>
    </div>
  );
}

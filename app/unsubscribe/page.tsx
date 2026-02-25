"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    if (!email) {
      setStatus("error");
      return;
    }

    fetch("/api/unsubscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => {
        if (res.ok) setStatus("success");
        else setStatus("error");
      })
      .catch(() => setStatus("error"));
  }, [email]);

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
        {status === "loading" && (
          <p className="animate-fade-in-up text-lg text-zinc-400">
            Unsubscribing&hellip;
          </p>
        )}

        {status === "success" && (
          <>
            <h1 className="animate-fade-in-up text-3xl font-bold tracking-tight text-white sm:text-4xl">
              You&apos;ve been unsubscribed
            </h1>
            <p className="animate-fade-in-up-delay mt-4 text-lg text-zinc-400">
              You won&apos;t receive any more emails from us.
            </p>
            <a
              href="/"
              className="animate-fade-in-up-delay-2 mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 font-mono text-sm text-zinc-300 transition-colors hover:bg-white/10"
            >
              &larr; Back to home
            </a>
          </>
        )}

        {status === "error" && (
          <>
            <h1 className="animate-fade-in-up text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Something went wrong
            </h1>
            <p className="animate-fade-in-up-delay mt-4 text-lg text-zinc-400">
              We couldn&apos;t process your request. Please try again later.
            </p>
            <a
              href="/"
              className="animate-fade-in-up-delay-2 mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 font-mono text-sm text-zinc-300 transition-colors hover:bg-white/10"
            >
              &larr; Back to home
            </a>
          </>
        )}
      </main>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-lg text-zinc-400">Loading&hellip;</p>
        </div>
      }
    >
      <UnsubscribeContent />
    </Suspense>
  );
}

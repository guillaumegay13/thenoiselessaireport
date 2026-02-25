"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error);
        return;
      }

      setStatus("success");
      setMessage("You're in! We'll be in touch.");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p className="mt-10 font-mono text-sm text-indigo-400">{message}</p>
    );
  }

  return (
    <form
      className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
      onSubmit={handleSubmit}
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
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="w-full text-sm text-red-400">{message}</p>
      )}
    </form>
  );
}

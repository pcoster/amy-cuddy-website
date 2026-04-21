"use client";

import { useState } from "react";

interface NewsletterFormProps {
  dark?: boolean;
}

export default function NewsletterForm({ dark = false }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call — wire to Mailchimp, ConvertKit, etc.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <div
        className={`text-center py-4 ${dark ? "text-white/80" : "text-text-secondary"}`}
      >
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
            dark ? "bg-gold/20" : "bg-gold/10"
          }`}
        >
          <svg className="w-6 h-6 text-gold" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <p className="font-semibold">You&apos;re subscribed.</p>
        <p className={`text-sm mt-1 ${dark ? "text-white/50" : "text-text-secondary"}`}>
          Thank you for joining — look out for updates in your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className={`flex-1 px-4 py-3 rounded-md text-sm border focus:outline-none focus:ring-2 transition-colors ${
            dark
              ? "bg-white/10 border-white/20 text-white placeholder-white/40 focus:ring-gold/40 focus:border-gold/40"
              : "bg-white border-gray-200 text-text-primary placeholder-text-secondary focus:ring-navy/20 focus:border-navy/40"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 bg-gold text-[#0D0D0D] font-semibold text-sm rounded-md hover:bg-gold-light transition-colors disabled:opacity-70 whitespace-nowrap"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      <p
        className={`text-xs mt-3 text-center ${
          dark ? "text-white/30" : "text-text-secondary/60"
        }`}
      >
        No spam, ever. Unsubscribe at any time. Your privacy is respected.
      </p>
    </form>
  );
}

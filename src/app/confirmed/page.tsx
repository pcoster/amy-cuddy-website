import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're subscribed",
  description: "Thanks for subscribing to Amy Cuddy's newsletter.",
};

export default function ConfirmedPage() {
  return (
    <section className="min-h-screen bg-background-alt flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center py-24">
        <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-8">
          <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
          You&apos;re in
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-5">
          Thanks for subscribing
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-md mx-auto">
          You&apos;ll receive updates on Amy&apos;s research, speaking engagements, and new work — straight to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-navy text-white font-semibold rounded-md hover:bg-navy/90 transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/books"
            className="px-8 py-4 border border-gray-200 text-text-primary font-semibold rounded-md hover:bg-white transition-colors"
          >
            Explore the books
          </Link>
        </div>
      </div>
    </section>
  );
}

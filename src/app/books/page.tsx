import type { Metadata } from "next";
import Link from "next/link";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Explore Amy Cuddy's books — including Presence, the New York Times bestseller translated into 30+ languages, and her forthcoming book Bullied (2027).",
};

export default function BooksPage() {
  const publishedBooks = books.filter((b) => b.status === "published");
  const forthcomingBooks = books.filter((b) => b.status === "forthcoming");

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-gold border border-gold/30 px-4 py-1.5 rounded-full mb-6">
            Published Works
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Books by Amy Cuddy
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Rigorous science. Human stories. Practical tools for the moments that matter most.
          </p>
        </div>
      </section>

      {/* Published books */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-14">
            Published
          </p>
          <div className="space-y-24">
            {publishedBooks.map((book, i) => (
              <div key={book.id}>
                <BookCard book={book} variant="featured" reversed={i % 2 !== 0} />
                {i < publishedBooks.length - 1 && (
                  <div className="mt-24 border-t border-gray-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forthcoming books */}
      {forthcomingBooks.length > 0 && (
        <section className="py-24 bg-background-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-14">
              Forthcoming
            </p>
            <div className="space-y-24">
              {forthcomingBooks.map((book, i) => (
                <BookCard
                  key={book.id}
                  book={book}
                  variant="featured"
                  reversed={i % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quotes about the books */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gold text-6xl font-serif leading-none mb-6">&ldquo;</div>
          <blockquote className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-8">
            Amy Cuddy has a rare gift: she takes complex science and makes it immediately useful. I&apos;ve recommended it to every leader I coach.
          </blockquote>
          <div>
            <p className="font-semibold text-white/90">Dr. Marshall Goldsmith</p>
            <p className="text-white/50 text-sm mt-1">Author of <em>What Got You Here Won&apos;t Get You There</em></p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
            Stay Updated
          </p>
          <h2 className="font-serif text-4xl font-bold text-text-primary mb-4">
            Be the first to hear about new work
          </h2>
          <p className="text-text-secondary text-lg mb-10">
            Sign up to get updates on Amy&apos;s forthcoming book and other news.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md border border-gray-200 text-text-primary placeholder-text-secondary/60 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/40 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-[#0D0D0D] font-semibold text-sm rounded-md hover:bg-gold-light transition-colors whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
          <p className="text-xs text-text-secondary/60 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Speaking CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Bring these ideas to life for your audience
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Amy delivers powerful keynotes based on the research and principles in her books.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/speaking"
              className="px-8 py-4 bg-navy text-white font-semibold rounded-md hover:bg-navy-dark transition-colors"
            >
              View Speaking Topics
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-gray-200 text-text-secondary font-semibold rounded-md hover:border-gray-300 transition-colors"
            >
              Book Amy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { books } from "@/data/books";
import { presenceEditions } from "@/data/editions";
import BookCard from "@/components/BookCard";
import NewsletterForm from "@/components/NewsletterForm";

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
      <section className="relative pt-16 pb-20 md:pt-20 md:pb-28 bg-navy overflow-hidden">
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

      {/* Stage photo — Presence translations */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/stage-presence-books.jpeg"
          alt="Amy Cuddy on stage with Presence book translations"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <p className="font-serif text-white text-2xl md:text-3xl font-bold max-w-xl">
            Published in 35 languages. More than 500,000 copies sold.
          </p>
        </div>
      </section>

      {/* International editions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">Global Reach</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
              Presence Around the World
            </h2>
            <p className="text-text-secondary mt-4 max-w-xl mx-auto">
              Published in 35 languages — find your edition below.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {presenceEditions.map((edition) => (
              <a
                key={edition.language}
                href={edition.buyUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-background-alt border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:border-navy/20 transition-all duration-200"
              >
                {/* Cover or styled placeholder */}
                <div className="relative aspect-[2/3] bg-navy overflow-hidden">
                  {edition.cover ? (
                    <Image src={edition.cover} alt={edition.localTitle} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-navy to-[#0d2347]">
                      <span className="text-3xl mb-3">{edition.flag}</span>
                      <p className="font-serif text-white text-sm font-bold leading-tight">{edition.localTitle}</p>
                      <div className="w-6 h-px bg-gold/60 my-2" />
                      <p className="text-white/50 text-xs">Amy Cuddy</p>
                    </div>
                  )}
                </div>
                {/* Language label */}
                <div className="px-3 py-2.5 flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold text-text-primary leading-tight">{edition.language}</p>
                    {edition.cover && <p className="text-xs text-text-secondary truncate mt-0.5">{edition.localTitle}</p>}
                  </div>
                  {edition.buyUrl && (
                    <span className="flex-shrink-0 text-xs text-navy font-semibold group-hover:underline">Buy →</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

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
          <NewsletterForm />
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
          </div>
        </div>
      </section>
    </>
  );
}

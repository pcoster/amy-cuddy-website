import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books } from "@/data/books";
import { presenceEditions } from "@/data/editions";
import { testimonials } from "@/data/testimonials";
import NewsletterForm from "@/components/NewsletterForm";

export function generateStaticParams() {
  return books.map((b) => ({ id: b.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const book = books.find((b) => b.id === id);
  if (!book) return {};
  return {
    title: `${book.title} — Amy Cuddy`,
    description: book.description,
  };
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const book = books.find((b) => b.id === id);
  if (!book) notFound();

  const isPresence = book.id === "presence";
  const isBullied = book.id === "bullied";

  // Pull real book testimonials (Presence only)
  const bookTestimonials = testimonials
    .filter((t) => t.context === "book")
    .slice(0, 5);

  // Parse long description into paragraphs, stripping markdown asterisks
  const descParagraphs = book.longDescription
    .split("\n\n")
    .map((p) => p.replace(/\*/g, ""));

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-10 pb-0 bg-[#0D0D0D] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/books"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-xs font-medium tracking-wide transition-colors mb-12 mt-8"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 010 1.06L8.06 10l3.72 3.72a.75.75 0 11-1.06 1.06l-4.25-4.25a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
            All Books
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end pb-0">
            {/* Text side */}
            <div className="pb-16 lg:pb-24">
              {book.status === "forthcoming" && (
                <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-gold border border-gold/40 px-3 py-1 rounded-full mb-6">
                  Forthcoming {book.expectedDate}
                </span>
              )}
              {book.awards && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {book.awards.slice(0, 2).map((a) => (
                    <span key={a} className="text-xs font-medium text-white/60 bg-white/10 px-3 py-1 rounded-full">
                      {a}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-4">
                {book.title}
              </h1>
              <p className="text-white/60 text-xl mb-8 leading-relaxed">{book.subtitle}</p>

              {/* Buy buttons */}
              <div className="flex flex-wrap gap-3">
                {book.buyLinks.amazon && (
                  <a
                    href={book.buyLinks.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 bg-gold text-[#0D0D0D] font-semibold rounded-md hover:bg-gold-light transition-colors"
                  >
                    {book.status === "forthcoming" ? "Pre-order on Amazon" : "Buy on Amazon"}
                  </a>
                )}
                {book.buyLinks.bookshop && (
                  <a
                    href={book.buyLinks.bookshop}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
                  >
                    Buy on Bookshop
                  </a>
                )}
                {book.buyLinks.barnesAndNoble && (
                  <a
                    href={book.buyLinks.barnesAndNoble}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 border border-white/20 text-white/70 font-semibold rounded-md hover:bg-white/10 transition-colors"
                  >
                    Barnes &amp; Noble
                  </a>
                )}
              </div>

              {/* Meta */}
              <p className="mt-8 text-white/30 text-sm">
                {book.publisher} · {book.publishYear}
                {book.pages && ` · ${book.pages} pages`}
              </p>
            </div>

            {/* Cover side */}
            <div className="flex justify-center lg:justify-end items-end">
              <div className="w-56 md:w-64 lg:w-72 relative">
                <div className="relative aspect-[2/3] rounded-lg shadow-2xl overflow-hidden">
                  {book.cover ? (
                    <Image
                      src={book.cover}
                      alt={book.coverAlt}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center p-8 text-center"
                      style={{ background: book.coverGradient ?? "linear-gradient(135deg, #1B3A6B, #0f2548)" }}
                    >
                      <p className="font-serif text-white font-bold text-2xl leading-tight mb-2">{book.title}</p>
                      <div className="w-8 h-0.5 bg-white/40 my-3" />
                      <p className="text-white/50 text-sm">Amy Cuddy</p>
                    </div>
                  )}
                </div>
                {/* Shadow beneath cover */}
                <div className="h-8 mx-6 bg-black/40 blur-xl rounded-full -mt-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT THE BOOK ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
            About the Book
          </p>
          <div className="space-y-6">
            {descParagraphs.map((para, i) => (
              <p
                key={i}
                className={`leading-relaxed text-text-secondary ${
                  i === 0 ? "text-xl font-medium text-text-primary" : "text-lg"
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEY THEMES ── */}
      <section className="py-20 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6">
              Key Themes
            </p>
            <div className="flex flex-wrap gap-3">
              {book.keyThemes.map((theme) => (
                <span
                  key={theme}
                  className="px-4 py-2 bg-white border border-gray-200 text-text-secondary text-sm font-medium rounded-full shadow-sm"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AWARDS (Presence only) ── */}
      {book.awards && book.awards.length > 0 && (
        <section className="py-16 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {book.awards.map((award) => (
                <div key={award} className="text-center">
                  <p className="text-white font-semibold text-sm">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TESTIMONIALS (Presence only) ── */}
      {isPresence && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Praise
            </p>
            <h2 className="font-serif text-4xl font-bold text-text-primary mb-14">
              What readers and critics say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookTestimonials.map((t) => (
                <div key={t.id} className="bg-background-alt rounded-xl p-7 border border-gray-100">
                  <div className="text-gold text-3xl font-serif leading-none mb-4">&ldquo;</div>
                  <p className="text-text-secondary leading-relaxed mb-6 text-sm">{t.quote}</p>
                  <div>
                    <p className="font-semibold text-text-primary text-sm">{t.author}</p>
                    <p className="text-text-secondary text-xs mt-0.5">{t.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── INTERNATIONAL EDITIONS (Presence only) ── */}
      {isPresence && (
        <section className="py-24 bg-background-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                Global Reach
              </p>
              <h2 className="font-serif text-4xl font-bold text-text-primary">
                Presence Around the World
              </h2>
              <p className="text-text-secondary mt-3 max-w-xl">
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
                  className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:border-navy/20 transition-all duration-200"
                >
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
      )}

      {/* ── RELATED TOPICS ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-8">
            Related Topics
          </p>
          <div className="flex flex-wrap gap-3">
            {(isPresence
              ? [
                  { href: "/topics/presence-body-language", label: "Presence & Body Language" },
                  { href: "/topics/confidence-under-pressure", label: "Confidence Under Pressure" },
                  { href: "/topics/leadership-trust", label: "Leadership & Trust" },
                ]
              : [
                  { href: "/topics/bullying-social-bravery", label: "Bullying & Social Bravery" },
                  { href: "/topics/leadership-trust", label: "Leadership & Trust" },
                  { href: "/topics/confidence-under-pressure", label: "Confidence Under Pressure" },
                ]
            ).map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="px-5 py-2.5 bg-background-alt border border-gray-200 text-text-secondary font-medium text-sm rounded-full hover:border-navy hover:text-navy transition-colors"
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER BOOK (cross-sell) ── */}
      <section className="py-20 bg-background-alt border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-text-secondary mb-8">
            Also by Amy Cuddy
          </p>
          <div className="flex flex-wrap gap-4">
            {books
              .filter((b) => b.id !== book.id)
              .map((b) => (
                <Link
                  key={b.id}
                  href={`/books/${b.id}`}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md hover:border-gray-200 transition-all group max-w-sm"
                >
                  <div className="flex-shrink-0 w-14 h-20 rounded overflow-hidden relative shadow">
                    {b.cover ? (
                      <Image src={b.cover} alt={b.title} fill className="object-cover" />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ background: b.coverGradient ?? "linear-gradient(135deg,#1B3A6B,#0f2548)" }}
                      >
                        <span className="font-serif text-white text-xs font-bold text-center px-1">{b.title}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    {b.status === "forthcoming" && (
                      <span className="text-xs text-gold font-semibold">Forthcoming</span>
                    )}
                    <p className="font-serif font-bold text-text-primary group-hover:text-navy transition-colors">{b.title}</p>
                    <p className="text-text-secondary text-xs mt-0.5 line-clamp-2">{b.subtitle}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            {isBullied
              ? "Be first to hear about Bullied"
              : "Get Amy's latest research and writing"}
          </h2>
          <p className="text-white/60 mb-10">
            {isBullied
              ? "Sign up for updates on Amy's forthcoming book, including publication news, excerpts, and events."
              : "New insights on presence, power, and what the science actually says — delivered directly to your inbox."}
          </p>
          <NewsletterForm dark />
        </div>
      </section>
    </>
  );
}

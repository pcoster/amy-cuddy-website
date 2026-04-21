import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
  variant?: "card" | "featured";
  reversed?: boolean;
}

export default function BookCard({ book, variant = "card", reversed = false }: BookCardProps) {
  if (variant === "featured") {
    return (
      <div
        className={`flex flex-col ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-12 lg:gap-16 items-center`}
      >
        {/* Book cover */}
        <div className="flex-shrink-0 w-48 md:w-56 lg:w-64">
          <div className="relative w-full aspect-[2/3] rounded-lg shadow-2xl overflow-hidden">
            {book.cover ? (
              <Image src={book.cover} alt={book.title} fill className="object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-navy to-navy-dark flex items-end justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <div className="relative p-6 text-center">
                  <p className="font-serif text-white font-bold text-xl leading-tight mb-1">{book.title}</p>
                  <p className="text-white/60 text-xs">{book.subtitle}</p>
                  <div className="mt-4 w-8 h-0.5 bg-gold mx-auto" />
                  <p className="mt-2 text-white/40 text-xs">Amy Cuddy</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-xl">
          {book.status === "forthcoming" && (
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-gold border border-gold/40 px-3 py-1 rounded-full mb-4">
              Forthcoming {book.expectedDate}
            </span>
          )}
          {book.awards && book.awards.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {book.awards.slice(0, 2).map((award) => (
                <span
                  key={award}
                  className="text-xs font-medium text-navy bg-blue-50 border border-navy/10 px-3 py-1 rounded-full"
                >
                  {award}
                </span>
              ))}
            </div>
          )}
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-2">
            {book.title}
          </h2>
          <p className="text-text-secondary text-lg mb-6">{book.subtitle}</p>
          <p className="text-text-secondary leading-relaxed mb-8">{book.description}</p>

          {/* Key themes */}
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-text-secondary mb-3">
              Key Themes
            </p>
            <div className="flex flex-wrap gap-2">
              {book.keyThemes.map((theme) => (
                <span
                  key={theme}
                  className="text-sm text-text-secondary bg-background-alt px-3 py-1 rounded-full border border-gray-200"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>

          {/* Buy links */}
          <div className="flex flex-wrap gap-3">
            {book.buyLinks.amazon && (
              <a
                href={book.buyLinks.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gold text-[#0D0D0D] font-semibold text-sm rounded-md hover:bg-gold-dark transition-colors"
              >
                Buy on Amazon
              </a>
            )}
            {book.buyLinks.bookshop && (
              <a
                href={book.buyLinks.bookshop}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-navy text-navy font-semibold text-sm rounded-md hover:bg-navy hover:text-white transition-colors"
              >
                Buy on Bookshop
              </a>
            )}
            {book.buyLinks.barnesAndNoble && (
              <a
                href={book.buyLinks.barnesAndNoble}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 text-text-secondary font-semibold text-sm rounded-md hover:border-gray-400 transition-colors"
              >
                Barnes &amp; Noble
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Card variant
  return (
    <div className="group flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="relative h-56 bg-gradient-to-br from-navy to-navy-dark flex items-end justify-center p-6 overflow-hidden">
        {book.cover && <Image src={book.cover} alt={book.title} fill className="object-cover" />}
        {!book.cover && (
          <div className="text-center">
            <p className="font-serif text-white font-bold text-xl leading-tight mb-1">{book.title}</p>
            <div className="w-6 h-0.5 bg-gold mx-auto mt-3" />
          </div>
        )}
        {book.status === "forthcoming" && (
          <div className="absolute top-4 right-4">
            <span className="text-xs font-semibold tracking-wide uppercase text-gold bg-[#0D0D0D]/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
              Coming {book.expectedDate}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-text-secondary mb-2">
          {book.publishYear} · {book.publisher}
        </p>
        <h3 className="font-serif text-xl font-bold text-text-primary mb-1 group-hover:text-navy transition-colors">
          {book.title}
        </h3>
        <p className="text-text-secondary text-sm mb-4">{book.subtitle}</p>
        <p className="text-text-secondary text-sm leading-relaxed flex-1">{book.description}</p>

        <div className="mt-6 flex gap-3">
          {book.buyLinks.amazon && (
            <a
              href={book.buyLinks.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 bg-navy text-white font-semibold text-sm text-center rounded-md hover:bg-navy-dark transition-colors"
            >
              {book.status === "forthcoming" ? "Pre-order" : "Buy Now"}
            </a>
          )}
          <Link
            href="/books"
            className="px-4 py-2.5 border border-gray-200 text-text-secondary font-medium text-sm rounded-md hover:border-gray-300 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

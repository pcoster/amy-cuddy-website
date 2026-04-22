import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.seo.defaultDescription,
};

const topics = [
  {
    label: "Presence & Body Language",
    description:
      "How the way we hold ourselves — literally — shapes our psychology, our performance, and how others perceive us. The science behind small physical changes that produce real results.",
    href: "/media",
    linkLabel: "Watch the TED Talk",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    label: "Confidence Under Pressure",
    description:
      "Why high-stakes moments make us feel like impostors — and what the research says about showing up as your fullest self when it matters most.",
    href: "/books",
    linkLabel: "Read Presence",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    label: "Leadership & Trust",
    description:
      "Two decades of research on warmth, competence, and power in the workplace — why trust must come before authority, and how the best leaders earn both.",
    href: "/research",
    linkLabel: "Explore the research",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    label: "Bullying & Social Bravery",
    description:
      "Bullying doesn't stay in the schoolyard. It follows us into workplaces, relationships, and our sense of self. Amy's forthcoming book confronts the full scope of this force in American life.",
    href: "/books",
    linkLabel: "Pre-order Bullied",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold border border-gold/30 px-4 py-1.5 rounded-full mb-8">
                Social Psychologist · Author · TED Speaker
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
                {siteConfig.tagline}
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                {siteConfig.taglineSub}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/books"
                  className="px-8 py-4 bg-gold text-[#0D0D0D] font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg text-center"
                >
                  Get the Books
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-center"
                >
                  About Amy
                </Link>
              </div>
              <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
                {[
                  { value: "70M+", label: "TED Talk views" },
                  { value: "3rd", label: "most-watched TED Talk" },
                  { value: "30+", label: "languages" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl font-bold text-gold">{stat.value}</p>
                    <p className="text-white/50 text-sm mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[520px]">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/20 rounded-2xl" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/headshot.jpeg"
                    alt="Amy Cuddy"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy/60 to-transparent" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-4 max-w-[180px]">
                  <p className="font-serif text-navy font-bold text-sm">
                    &ldquo;{siteConfig.tagline}&rdquo;
                  </p>
                  <p className="text-text-secondary text-xs mt-1">— from Presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TED TALK ── */}
      <section className="bg-[#0D0D0D] py-0">
        <a
          href="https://www.youtube.com/watch?v=Ks-_Mh1QhMc"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative overflow-hidden"
        >
          {/* YouTube thumbnail as background */}
          <div className="relative h-[420px] md:h-[560px] lg:h-[640px]">
            <Image
              src="https://img.youtube.com/vi/Ks-_Mh1QhMc/maxresdefault.jpg"
              alt="Amy Cuddy TED Talk — Your Body Language May Shape Who You Are"
              fill
              className="object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-500"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/60 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                TED · 70M+ Views · 3rd Most-Watched TED Talk of All Time
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight">
                Your Body Language May Shape Who You Are
              </h2>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-white/15 border border-white/30 flex items-center justify-center group-hover:bg-white/25 transition-colors backdrop-blur-sm flex-shrink-0">
                  <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-white/70 text-lg max-w-xl leading-relaxed">
                  The talk that sparked a global conversation about body language, power, and confidence.
                </p>
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-background-alt rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/keynote-wobi-smiling.jpeg"
                  alt="Amy Cuddy"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                About Amy
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-6">
                The scientist who taught the world to stand tall.
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                {siteConfig.bio.medium}
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Her research explores the connections between body language, power, and presence —
                and how small physical changes can have profound psychological effects.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all group"
              >
                Read Amy&apos;s full story
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Areas of Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
              What Amy thinks about.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <Link
                key={topic.label}
                href={topic.href}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-navy/20 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-colors">
                  {topic.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-text-primary mb-3 group-hover:text-navy transition-colors">
                  {topic.label}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {topic.description}
                </p>
                <span className="text-xs font-semibold text-navy group-hover:underline">
                  {topic.linkLabel} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Published Works
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Books by Amy Cuddy
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Grounding groundbreaking science in deeply human stories.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/books"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all group"
            >
              Explore all books
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
            Stay in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Join Amy&apos;s Community
          </h2>
          <p className="text-text-secondary text-lg mb-10">
            Get updates on research, events, and new work — directly to your inbox.
            No noise, just substance.
          </p>
          <NewsletterForm />
        </div>
      </section>

    </>
  );
}

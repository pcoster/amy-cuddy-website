import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { books } from "@/data/books";
import { speakingTopics } from "@/data/speaking";
import { testimonials } from "@/data/testimonials";
import { pressItems, videoAppearances } from "@/data/media";
import BookCard from "@/components/BookCard";
import SpeakingTopic from "@/components/SpeakingTopic";
import TestimonialCard from "@/components/TestimonialCard";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.seo.defaultDescription,
};

export default function HomePage() {
  const featuredTopics = speakingTopics.filter((t) => t.featured).slice(0, 3);
  const featuredTestimonials = testimonials.filter((t) => t.featured).slice(0, 3);
  const featuredPress = pressItems.filter((p) => p.featured).slice(0, 4);
  const featuredVideo = videoAppearances.find((v) => v.featured);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        {/* Glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
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
                  href="/speaking"
                  className="px-8 py-4 bg-gold text-[#0D0D0D] font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg text-center"
                >
                  Book Amy to Speak
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
              {/* Stats */}
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

            {/* Headshot placeholder */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[520px]">
                {/* Decorative frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/20 rounded-2xl" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/headshot.jpeg"
                    alt="Amy Cuddy"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Decorative corner accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy/60 to-transparent" />
                </div>
                {/* Floating badge */}
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

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* About photo */}
            <div className="relative">
              <div className="aspect-[4/5] bg-background-alt rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/keynote-wobi-smiling.jpeg"
                  alt="Amy Cuddy"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-navy rounded-xl p-6 shadow-xl max-w-[200px]">
                <p className="text-white font-semibold text-sm">Harvard Business School</p>
                <p className="text-white/60 text-xs mt-1">Professor (on leave)</p>
              </div>
            </div>

            {/* Text */}
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
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKS ── */}
      <section className="py-24 bg-background-alt">
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

      {/* ── SPEAKING TOPICS PREVIEW ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                Keynotes & Workshops
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
                Speaking Topics
              </h2>
            </div>
            <Link
              href="/speaking"
              className="flex-shrink-0 inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all group"
            >
              See all topics
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTopics.map((topic) => (
              <SpeakingTopic key={topic.id} topic={topic} variant="card" />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              What People Are Saying
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
              Testimonials
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED MEDIA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                In the Media
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
                Press & Appearances
              </h2>
            </div>
            <Link
              href="/media"
              className="flex-shrink-0 inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all group"
            >
              View all media
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Featured TED video */}
            {featuredVideo && (
              <div className="lg:col-span-2">
                <a
                  href={featuredVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div className="relative h-52 bg-gradient-to-br from-navy to-navy-dark flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <svg className="w-7 h-7 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-semibold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        TED · {featuredVideo.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 bg-white">
                    <h3 className="font-serif font-bold text-text-primary mb-2 group-hover:text-navy transition-colors">
                      {featuredVideo.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{featuredVideo.description}</p>
                  </div>
                </a>
              </div>
            )}

            {/* Press grid */}
            <div className="lg:col-span-3 space-y-4">
              {featuredPress.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-background-alt rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center font-serif font-bold text-navy text-sm">
                    {item.publication.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                      {item.publication}
                    </p>
                    <p className="text-sm font-medium text-text-primary group-hover:text-navy transition-colors leading-snug mt-0.5">
                      {item.headline}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-text-secondary/40 flex-shrink-0 group-hover:text-navy transition-colors" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
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

      {/* ── BOOKING CTA ── */}
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
            Speaker Inquiries
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Bring Amy to Your Organization
          </h2>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Amy delivers transformative keynotes and workshops for corporations, universities,
            nonprofits, and conferences worldwide. Tailored to your audience. Grounded in science.
            Built to inspire lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gold text-[#0D0D0D] font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg"
            >
              Submit a Booking Inquiry
            </Link>
            <Link
              href="/speaking"
              className="px-10 py-4 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              View Speaking Topics
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { topics, getTopicBySlug } from "@/data/topics";
import NewsletterForm from "@/components/NewsletterForm";

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) return {};
  return {
    title: topic.label,
    description: topic.tagline,
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 pb-24 md:pt-20 md:pb-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/3" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-xs font-medium tracking-wide transition-colors mb-8"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 010 1.06L8.06 10l3.72 3.72a.75.75 0 11-1.06 1.06l-4.25-4.25a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>
            All Topics
          </Link>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-5">
            Topic
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {topic.label}
          </h1>
          <p className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-2xl">
            {topic.tagline}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {topic.intro.map((paragraph, i) => (
              <p
                key={i}
                className={`leading-relaxed text-text-secondary ${
                  i === 0 ? "text-xl font-medium text-text-primary" : "text-lg"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Key insights */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              What the research shows
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
              Key insights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {topic.insights.map((insight, i) => (
              <div
                key={insight.heading}
                className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center mb-5 text-white text-xs font-bold">
                  {i + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-text-primary mb-3">
                  {insight.heading}
                </h3>
                <p className="text-text-secondary leading-relaxed">{insight.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related content */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            Go deeper
          </p>
          <h2 className="font-serif text-4xl font-bold text-text-primary mb-10">
            Related resources
          </h2>
          <div className="flex flex-col divide-y divide-gray-100">
            {topic.relatedLinks.map((link) => (
              <div key={link.label} className="flex items-center justify-between py-4 group">
                <div className="flex items-center gap-3">
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-text-primary group-hover:text-navy transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="font-medium text-text-primary hover:text-navy transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                  {link.badge && (
                    <span className="text-xs font-semibold text-gold border border-gold/40 px-2.5 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </div>
                <svg className="w-4 h-4 text-text-secondary group-hover:text-navy group-hover:translate-x-0.5 transition-all" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other topics */}
      <section className="py-20 bg-background-alt border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-text-secondary mb-8">
            Explore other topics
          </p>
          <div className="flex flex-wrap gap-3">
            {topics
              .filter((t) => t.slug !== topic.slug)
              .map((t) => (
                <Link
                  key={t.slug}
                  href={`/topics/${t.slug}`}
                  className="px-5 py-2.5 bg-white border border-gray-200 text-text-secondary font-medium text-sm rounded-full hover:border-navy hover:text-navy transition-colors"
                >
                  {t.label}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            Stay Connected
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Get Amy&apos;s latest research and writing
          </h2>
          <p className="text-white/60 mb-10">
            New insights on presence, power, and what the science actually says — delivered directly to your inbox.
          </p>
          <NewsletterForm dark />
        </div>
      </section>
    </>
  );
}

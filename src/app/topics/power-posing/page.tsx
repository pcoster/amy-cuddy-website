import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { topics } from "@/data/topics";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Power Posing — Amy Cuddy",
  description:
    "The original research, the replication debate, and what the evidence actually shows — Amy Cuddy's complete account of power posing.",
};

const keyFindings = [
  {
    number: "01",
    heading: "The original paper",
    body: "In 2010, Carney, Cuddy & Yap published research in Psychological Science showing that two minutes of expansive, high-power poses increased testosterone by ~19% and decreased the stress hormone cortisol by ~25%. Risk tolerance also increased. The paper became one of the most-read in social psychology.",
  },
  {
    number: "02",
    heading: "The replication debate",
    body: "In the years following publication, several labs attempted to replicate the hormonal findings. Results were mixed. Some studies found the effect; others, including a larger pre-registered study, did not. In 2016, original co-author Dana Carney publicly distanced herself from the work. The story became a flashpoint in a wider conversation about reproducibility in social science.",
  },
  {
    number: "03",
    heading: "What actually replicated",
    body: "While the hormonal effects proved inconsistent, the psychological and behavioural effects showed greater resilience. People who adopted expansive postures consistently reported feeling more powerful. And independent observers, blind to condition, rated them as more confident, more persuasive, and more hireable. These effects replicated more reliably than the endocrine findings.",
  },
  {
    number: "04",
    heading: "The 2018 meta-analysis",
    body: "Cuddy, Schultz & Fosse conducted a meta-analysis of 55 studies on body posture and power. The conclusion: expansive posture produces a small but statistically robust effect on feelings of power. The effect is real. It is not as large — and probably not as hormonal — as the original paper suggested. But the core insight holds.",
  },
  {
    number: "05",
    heading: "Amy's honest account",
    body: "From the beginning, Amy has been clear that the primary goal of power posing is not to change your hormones — it's to change how you feel in the moments before high-stakes situations. Presence, not performance. That goal, and the evidence supporting it, has remained consistent throughout the debate.",
  },
  {
    number: "06",
    heading: "The practical principle",
    body: "Your body and your mind are in constant conversation. Decades of research across multiple disciplines confirm that physical state affects psychological state. You don't need a large hormonal shift to benefit from deliberate physical preparation. The connection between posture and felt power is real, useful, and supported by the evidence we have.",
  },
];

const papers = [
  {
    title: "Power Posing: Brief Nonverbal Displays Affect Neuroendocrine Levels and Risk Tolerance",
    authors: "Carney, Cuddy & Yap",
    journal: "Psychological Science",
    year: "2010",
    description: "The original study. Two minutes of high-power poses shifted testosterone, cortisol, and risk tolerance in 42 participants.",
    url: "https://scholar.google.com/citations?user=1kdjewoAAAAJ&hl=en&oi=ao",
  },
  {
    title: "Preparatory Power Posing Affects Nonverbal Presence and Job Interview Outcomes",
    authors: "Cuddy, Wilmuth, Yap & Carney",
    journal: "Journal of Applied Psychology",
    year: "2015",
    description: "Participants who power posed before a mock job interview were rated as significantly more hireable by blind evaluators — independently of content.",
    url: "https://scholar.google.com/citations?user=1kdjewoAAAAJ&hl=en&oi=ao",
  },
  {
    title: "P-Curving a More Comprehensive Body of Research on Postural Feedback Reveals Clear Evidential Value for Power-Posing Effects",
    authors: "Cuddy, Schultz & Fosse",
    journal: "Psychological Science",
    year: "2018",
    description: "A meta-analysis of 55 studies. P-curve analysis found clear evidential value for the effect of expansive posture on feelings of power — small but robust.",
    url: "https://scholar.google.com/citations?user=1kdjewoAAAAJ&hl=en&oi=ao",
  },
];

const otherTopics = topics.filter((t) => t.slug !== "power-posing");

export default function PowerPosingPage() {
  return (
    <>
      {/* ── HERO ── */}
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
            Power Posing
          </h1>
          <p className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-2xl">
            The most debated finding in social psychology. What the research actually says — from the original paper to the controversy to the evidence that remains.
          </p>
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <p className="text-xl font-medium text-text-primary leading-relaxed">
              In 2010, a paper changed how millions of people thought about their own bodies. It said that standing in a confident posture for two minutes — before a job interview, a difficult conversation, a performance — could meaningfully shift how you felt and how you performed. The idea resonated instantly. Then came years of scientific debate that made most of the headlines, and very little of the nuance.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Amy Cuddy has spent over a decade living inside that debate — defending what was right, acknowledging what wasn't, and continuing to follow the evidence wherever it led. This page is the full story: what the original research found, what the replication crisis revealed, what the science now supports, and what it means for you.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              The short version: the hormonal effects in the original paper proved harder to replicate than hoped. The psychological effects — feeling more powerful, being perceived as more confident — have been consistently supported. And the core principle underlying all of it, that the body and mind are in constant conversation, is one of the most robust findings in all of psychology.
            </p>
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
          <div className="relative h-[400px] md:h-[520px] lg:h-[600px]">
            <Image
              src="/images/ted-talk-stage.jpg"
              alt="Amy Cuddy TED Talk — Your Body Language May Shape Who You Are"
              fill
              className="object-cover opacity-55 group-hover:opacity-45 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/60 via-transparent to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                TED Edinburgh · 2012 · 70M+ Views · 3rd Most-Watched TED Talk of All Time
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
                  The talk that introduced power posing to the world — and sparked a decade of scientific debate.
                </p>
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* ── THE RESEARCH TIMELINE ── */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              The Full Picture
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
              What the research shows
            </h2>
            <p className="text-text-secondary text-lg mt-4 max-w-2xl">
              The story of power posing is a story about how science is supposed to work: a finding, scrutiny, replication attempts, debate, and a more nuanced understanding that emerges on the other side.
            </p>
          </div>

          <div className="space-y-6">
            {keyFindings.map((finding) => (
              <div key={finding.number} className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm flex gap-6">
                <div className="flex-shrink-0">
                  <span className="font-serif text-3xl font-bold text-gold/40">{finding.number}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-text-primary mb-3">{finding.heading}</h3>
                  <p className="text-text-secondary leading-relaxed">{finding.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE CONTROVERSY: AMY'S WORDS ── */}
      <section className="py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6">
            In Her Own Words
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-8">
            &ldquo;I think the most important thing I can do is be honest about what the science shows and doesn&apos;t show — and to keep following the evidence, even when it complicates the story I first told.&rdquo;
          </blockquote>
          <p className="text-white/60 text-lg leading-relaxed mb-6">
            When the replication debate emerged, Amy didn&apos;t retreat from it. She engaged with the criticism directly, acknowledged where the original paper had overstated its findings, and continued publishing. She has been transparent about the distinction between what the hormonal evidence showed and what the psychological and behavioural evidence — which proved more durable — showed.
          </p>
          <p className="text-white/60 text-lg leading-relaxed">
            Her position has always been that the mechanism matters less than the effect: if holding an expansive posture for two minutes before a high-stakes moment makes you feel more capable and show up more authentically, then the precise hormonal pathway is a secondary question. The evidence for that outcome — the felt sense of power, and its effect on behaviour — has held.
          </p>
        </div>
      </section>

      {/* ── KEY PAPERS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            Peer-Reviewed Research
          </p>
          <h2 className="font-serif text-4xl font-bold text-text-primary mb-12">
            Key papers
          </h2>
          <div className="divide-y divide-gray-100 border-t border-gray-100">
            {papers.map((paper) => (
              <div key={paper.title} className="py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group">
                <div className="flex-shrink-0 md:w-28">
                  <span className="text-xs font-semibold text-text-secondary bg-background-alt px-3 py-1.5 rounded-full">
                    {paper.year}
                  </span>
                </div>
                <div className="flex-1">
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg font-bold text-text-primary group-hover:text-navy transition-colors leading-snug block mb-1"
                  >
                    {paper.title}
                  </a>
                  <p className="text-text-secondary text-sm mb-3">
                    {paper.authors} · <span className="italic">{paper.journal}</span>
                  </p>
                  <p className="text-text-secondary leading-relaxed text-sm">{paper.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="https://scholar.google.com/citations?user=1kdjewoAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all group text-sm"
            >
              View all publications on Google Scholar
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── THE BOOK ── */}
      <section className="py-20 bg-background-alt border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-8">
            Go Deeper
          </p>
          <Link
            href="/books/presence"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-md hover:border-gray-200 transition-all group max-w-2xl"
          >
            <div className="flex-shrink-0 w-20 h-28 rounded-lg overflow-hidden relative shadow-md">
              <Image src="/images/presence-cover.jpg" alt="Presence by Amy Cuddy" fill className="object-cover" />
            </div>
            <div>
              <span className="text-xs font-semibold text-gold">New York Times Bestseller</span>
              <p className="font-serif text-2xl font-bold text-text-primary group-hover:text-navy transition-colors mt-1 mb-2">Presence</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                The full science of power posing, presence, and what it means to show up as your boldest self — written for a general audience and grounded in two decades of research.
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-navy font-semibold text-sm group-hover:gap-2 transition-all">
                Read more
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ── OTHER TOPICS ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-text-secondary mb-8">
            Explore other topics
          </p>
          <div className="flex flex-wrap gap-3">
            {otherTopics.map((t) => (
              <Link
                key={t.slug}
                href={`/topics/${t.slug}`}
                className="px-5 py-2.5 bg-background-alt border border-gray-200 text-text-secondary font-medium text-sm rounded-full hover:border-navy hover:text-navy transition-colors"
              >
                {t.label}
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

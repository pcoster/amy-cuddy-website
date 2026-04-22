import type { Metadata } from "next";
import Link from "next/link";
import { papers, researchThemes, type ResearchTheme } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore Amy Cuddy's published academic research — spanning power posing, the Stereotype Content Model, intergroup relations, gender in the workplace, and leadership.",
};

const themeOrder: ResearchTheme[] = [
  "power-posing",
  "stereotype-content",
  "leadership",
  "gender-work",
  "intergroup",
];

export default function ResearchPage() {
  const featuredPapers = papers.filter((p) => p.featured);
  const papersByTheme = themeOrder.map((theme) => ({
    theme,
    meta: researchThemes[theme],
    papers: papers.filter((p) => p.theme === theme),
  }));

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
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-gold border border-gold/30 px-4 py-1.5 rounded-full mb-6">
            Academic Research
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            The Science Behind the Work
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Amy's ideas are grounded in two decades of peer-reviewed research. Below is a
            plain-English guide to her published work — what she studied, what she found,
            and why it matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://scholar.google.com/citations?user=P3jHKCMAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-[#0D0D0D] font-semibold rounded-md hover:bg-gold-light transition-colors"
            >
              View on Google Scholar
            </a>
            <Link
              href="#themes"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              Browse by Theme
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "57+", label: "Published papers" },
              { value: "5", label: "Research themes" },
              { value: "40", label: "H-index" },
              { value: "66K+", label: "Citations (Google Scholar)" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 rounded-xl p-5 border border-white/10">
                <p className="font-serif text-3xl font-bold text-gold">{s.value}</p>
                <p className="text-white/60 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured papers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            Landmark Studies
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-12">
            Most Influential Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPapers.map((paper) => {
              const theme = researchThemes[paper.theme];
              return (
                <div
                  key={paper.id}
                  className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${theme.color}`}>
                      {theme.label}
                    </span>
                    <span className="text-text-secondary text-sm flex-shrink-0">{paper.year}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-text-primary mb-1 leading-snug">
                    {paper.title}
                  </h3>
                  <p className="text-text-secondary text-xs mb-4">{paper.journal} · {paper.authors}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
                    {paper.summary}
                  </p>
                  <div className="border-l-2 border-gold pl-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary mb-1">Key Finding</p>
                    <p className="text-sm text-text-primary font-medium leading-snug">{paper.keyFinding}</p>
                  </div>
                  {paper.doi && (
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 text-xs text-navy hover:underline self-start"
                    >
                      Read paper →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research themes */}
      <section id="themes" className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            Browse by Theme
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Five Research Areas
          </h2>
          <p className="text-text-secondary max-w-xl mb-16">
            Amy's research spans two decades and five interconnected themes. Each paper
            summary is written in plain English — no academic jargon required.
          </p>

          <div className="space-y-20">
            {papersByTheme.map(({ theme, meta, papers: themePapers }) => (
              <div key={theme}>
                {/* Theme header */}
                <div className="flex items-start gap-4 mb-8 pb-6 border-b border-gray-200">
                  <div className="flex-1">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-2 ${meta.color}`}>
                      {meta.label}
                    </span>
                    <p className="text-text-secondary text-sm">{meta.description}</p>
                  </div>
                  <p className="text-text-secondary/50 text-sm flex-shrink-0">
                    {themePapers.length} paper{themePapers.length !== 1 ? "s" : ""}
                  </p>
                </div>

                {/* Papers in this theme */}
                <div className="space-y-6">
                  {themePapers.map((paper) => (
                    <div
                      key={paper.id}
                      className="bg-white rounded-xl border border-gray-100 p-6 hover:border-navy/20 hover:shadow-sm transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-background-alt flex items-center justify-center">
                          <span className="font-serif text-navy font-bold text-sm">{paper.year}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-serif text-base font-bold text-text-primary mb-0.5 leading-snug">
                            {paper.title}
                          </h4>
                          <p className="text-text-secondary text-xs mb-3">
                            {paper.journal} · {paper.authors}
                          </p>
                          <p className="text-text-secondary text-sm leading-relaxed mb-4">
                            {paper.summary}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <div className="flex-1 border-l-2 border-gold/60 pl-3">
                              <p className="text-xs text-text-primary font-medium leading-snug">
                                {paper.keyFinding}
                              </p>
                            </div>
                            {paper.doi && (
                              <a
                                href={`https://doi.org/${paper.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 text-xs text-navy hover:underline font-medium"
                              >
                                Read paper →
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">Go Deeper</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Read the Full Research
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            All papers are available via Google Scholar. For reprint requests or research
            collaborations, please get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://scholar.google.com/citations?user=P3jHKCMAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-[#0D0D0D] font-semibold rounded-md hover:bg-gold-light transition-colors"
            >
              Google Scholar Profile
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

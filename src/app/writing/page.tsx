import type { Metadata } from "next";
import { writingPieces, publications } from "@/data/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Articles and essays by Amy Cuddy — published in The Athletic, The New York Times, The Washington Post, Harvard Business Review, and more.",
};

const publicationColors: Record<string, string> = {
  "The Athletic": "bg-black text-white",
  "The New York Times": "bg-[#121212] text-white",
  "The Washington Post": "bg-[#1a1a2e] text-white",
  "Harvard Business Review": "bg-[#7b2027] text-white",
  "The Boston Globe": "bg-[#0a4c8b] text-white",
  "New York Magazine": "bg-[#c8102e] text-white",
  "Salon": "bg-[#1a3a5c] text-white",
  "CNN": "bg-[#cc0000] text-white",
  "World Economic Forum": "bg-[#2a4a7f] text-white",
};

function PublicationBadge({ publication }: { publication: string }) {
  const cls = publicationColors[publication] ?? "bg-gray-700 text-white";
  return (
    <span className={`inline-block text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded ${cls}`}>
      {publication}
    </span>
  );
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function WritingPage() {
  const featured = writingPieces.filter((p) => p.featured);
  const rest = writingPieces.filter((p) => !p.featured);

  const byPublication = publications.map((pub) => ({
    pub,
    pieces: writingPieces.filter((p) => p.publication === pub),
  })).filter((g) => g.pieces.length > 0);

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
            Published Writing
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Articles & Essays
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Amy writes for general audiences on psychology, body language, leadership, and the science of human behaviour — in publications from The Athletic to The New York Times.
          </p>
        </div>

        {/* Publication count */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="flex flex-wrap justify-center gap-3">
            {publications.map((pub) => (
              <span
                key={pub}
                className="text-xs font-medium text-white/50 border border-white/10 px-4 py-2 rounded-full"
              >
                {pub}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured pieces */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            Selected Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-12">
            Featured Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featured.map((piece) => (
              <a
                key={piece.id}
                href={piece.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-8"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <PublicationBadge publication={piece.publication} />
                  <span className="text-text-secondary text-xs flex-shrink-0 pt-1">
                    {formatDate(piece.date)}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-text-primary mb-3 leading-snug group-hover:text-navy transition-colors">
                  {piece.title}
                </h3>
                {piece.coAuthors && (
                  <p className="text-text-secondary text-xs mb-3">
                    With {piece.coAuthors.join(", ")}
                  </p>
                )}
                {piece.description && (
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    {piece.description}
                  </p>
                )}
                <p className="mt-5 text-xs font-semibold text-navy group-hover:underline self-start">
                  Read article →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All writing by publication */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            Full Archive
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-16">
            All Published Writing
          </h2>

          <div className="space-y-16">
            {byPublication.map(({ pub, pieces }) => (
              <div key={pub}>
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
                  <PublicationBadge publication={pub} />
                  <span className="text-text-secondary/50 text-sm">
                    {pieces.length} {pieces.length === 1 ? "piece" : "pieces"}
                  </span>
                </div>
                <div className="space-y-4">
                  {pieces
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((piece) => (
                      <a
                        key={piece.id}
                        href={piece.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col sm:flex-row sm:items-start gap-4 bg-white rounded-xl border border-gray-100 p-6 hover:border-navy/20 hover:shadow-sm transition-all"
                      >
                        <div className="flex-shrink-0 text-right sm:w-24">
                          <span className="text-text-secondary/60 text-xs">
                            {formatDate(piece.date).split(",")[1]?.trim() ?? formatDate(piece.date)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-serif text-base font-bold text-text-primary group-hover:text-navy transition-colors mb-1 leading-snug">
                            {piece.title}
                          </h4>
                          {piece.coAuthors && (
                            <p className="text-text-secondary text-xs mb-2">
                              With {piece.coAuthors.join(", ")}
                            </p>
                          )}
                          {piece.description && (
                            <p className="text-text-secondary text-sm leading-relaxed">
                              {piece.description}
                            </p>
                          )}
                        </div>
                        <span className="flex-shrink-0 text-xs font-semibold text-navy group-hover:underline self-start sm:self-center">
                          Read →
                        </span>
                      </a>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

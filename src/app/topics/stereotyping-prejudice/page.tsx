import type { Metadata } from "next";
import Link from "next/link";
import { topics } from "@/data/topics";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Stereotyping & Prejudice — Amy Cuddy",
  description:
    "Amy Cuddy's research on the Stereotype Content Model, the maternal wall, antisemitism, and the psychology of prejudice — how we sort people into categories, and what that costs us.",
};

const researchAreas = [
  {
    heading: "The Stereotype Content Model",
    label: "SCM",
    body: "The central contribution of Amy's work on prejudice. Developed with Susan Fiske and Peter Glick and first published in 2002, the Stereotype Content Model proposes that social groups are not judged along a single axis of liking and disliking. Instead, social perception organises itself around two fundamental dimensions: warmth (is this group friendly, trustworthy, well-intentioned?) and competence (is this group capable, skilled, intelligent?). Where a group lands on those two dimensions determines not just the stereotype applied to it, but the specific emotions it elicits and the specific behaviours directed toward it. The model has been replicated across more than 26 countries and is one of the most widely cited frameworks in social psychology.",
  },
  {
    heading: "Four clusters, four emotional responses",
    label: "The Map",
    body: "The warmth-competence framework produces four distinct social clusters, each with a characteristic emotional signature. Groups seen as high-warmth and high-competence — typically in-group members — elicit pride and admiration. Groups seen as high-warmth but low-competence — the elderly, people with disabilities — elicit pity and paternalistic treatment: superficially kind but practically limiting. Groups seen as low-warmth but high-competence — Jewish people, Asian Americans, wealthy professionals — elicit envy: respect for achievement combined with resentment of it. And groups seen as low on both dimensions — the homeless, welfare recipients, undocumented immigrants — elicit contempt: the only quadrant associated with purely hostile treatment from all directions.",
  },
  {
    heading: "Envious prejudice and antisemitism",
    label: "Envy",
    body: "One of the most important and least understood forms of prejudice operates through envy rather than contempt. Groups stereotyped as highly competent but insufficiently warm — including Jewish people, Asian Americans, and other groups framed as 'model minorities' — occupy the envy quadrant of the SCM. They are admired for their achievements while simultaneously resented for them. This produces a distinctive and dangerous pattern: passive admiration in stable times, and active hostility in times of social stress, economic threat, or political instability. The historical pattern of scapegoating highly envied groups — associating their success with malign intent — maps directly onto this framework. Envy-based prejudice is the emotional precondition for some of the most extreme forms of intergroup violence in human history.",
  },
  {
    heading: "The maternal wall",
    label: "Motherhood",
    body: "When women become mothers, something specific happens to how they are perceived in professional contexts: their warmth ratings rise, and their competence ratings fall. This is not a general devaluation — it is a precise shift within the warmth-competence space, and it has precise consequences. Research by Cuddy, Fiske & Glick found that this shift triggers pity rather than respect — and pity, in workplace contexts, translates into discriminatory behaviour. Mothers are less likely to be hired, less likely to be promoted, more likely to be offered part-time roles framed as accommodations but functioning as career limiters, and earn measurably less than childless women with equivalent qualifications. The maternal wall is one of the most robustly documented forms of workplace gender discrimination — and it operates not through overt hostility but through ostensibly warm, helpful treatment that nonetheless forecloses opportunity.",
  },
  {
    heading: "Men as cultural ideals",
    label: "Gender",
    body: "Amy's research on gender stereotyping examines not just how women are perceived and treated, but how masculinity functions as a social construct that shapes expectations, constraints, and consequences for men. Gender stereotypes are bidirectional: they limit women's access to competence-associated roles, and they limit men's access to warmth-associated roles and behaviours. Research on stereotype content and gender shows that men who violate warmth norms — by showing vulnerability, care, or emotional openness — face a distinct form of backlash, different in kind from the competence-based backlash faced by assertive women. Understanding gender prejudice requires understanding both directions of this constraint.",
  },
  {
    heading: "Prejudice against older adults",
    label: "Age",
    body: "Research by Cuddy and colleagues on the stereotyping of elderly people reveals a particularly instructive pattern. Older adults are reliably placed in the high-warmth, low-competence quadrant — viewed as warm and likeable but treated as incapable, irrelevant, or invisible in professional contexts. This combination — pity-based prejudice — produces a specific form of discrimination that masquerades as care: speaking more slowly to older people, excluding them from decisions 'for their own good,' and systematically underestimating their capabilities. The pervasiveness and persistence of age-based stereotyping, even among people who explicitly reject prejudice, illustrates how deeply embedded warmth-competence judgments are in social cognition.",
  },
  {
    heading: "The BIAS Map",
    label: "Behaviour",
    body: "The Stereotype Content Model describes how groups are perceived and what emotions they elicit. The BIAS Map (Behaviors from Intergroup Affect and Stereotypes), developed by Cuddy, Fiske & Glick, extends this framework to predict specific behaviours. Different stereotype combinations predict different behavioural tendencies: active harm versus passive neglect, active facilitation versus passive acceptance. The BIAS Map shows that the relationship between prejudice and discrimination is not random — it follows a predictable logic determined by where a group sits in warmth-competence space. This has practical implications for designing interventions: understanding the type of prejudice a group faces helps predict which forms of discrimination to expect and where to direct change efforts.",
  },
];

const papers = [
  {
    title: "A Model of (Often Mixed) Stereotype Content: Competence and Warmth Respectively Follow from Perceived Status and Competition",
    authors: "Fiske, Cuddy, Glick & Xu",
    journal: "Journal of Personality and Social Psychology",
    year: "2002",
    description: "The foundational paper introducing the Stereotype Content Model. Proposes that warmth and competence are the two primary axes of social perception, and maps twenty-five social groups across this space. One of the most cited papers in social psychology.",
    url: "https://scholar.google.com/citations?user=1kdjewoAAAAJ&hl=en&oi=ao",
  },
  {
    title: "When Professionals Become Mothers, Warmth Doesn't Cut the Ice",
    authors: "Cuddy, Fiske & Glick",
    journal: "Journal of Social Issues",
    year: "2004",
    description: "Documents the maternal wall: motherhood raises perceived warmth but lowers perceived competence, producing pity-based discrimination in hiring, salary, and promotion decisions. One of the most influential papers on the motherhood penalty.",
    url: "https://scholar.google.com/citations?user=1kdjewoAAAAJ&hl=en&oi=ao",
  },
  {
    title: "The BIAS Map: Behaviors from Intergroup Affect and Stereotypes",
    authors: "Cuddy, Fiske & Glick",
    journal: "Journal of Personality and Social Psychology",
    year: "2007",
    description: "Extends the SCM to predict specific discriminatory behaviours — active versus passive, harmful versus facilitative — based on the warmth-competence profile of the target group. Provides a behavioural map of prejudice consequences.",
    url: "https://scholar.google.com/citations?user=1kdjewoAAAAJ&hl=en&oi=ao",
  },
  {
    title: "Universal Dimensions of Social Cognition: Warmth and Competence",
    authors: "Fiske, Cuddy & Glick",
    journal: "Trends in Cognitive Sciences",
    year: "2007",
    description: "Reviews the cross-cultural and evolutionary evidence for warmth and competence as the primary dimensions of social perception, arguing they reflect fundamental adaptive priorities: detecting intent (warmth) and capability (competence).",
    url: "https://scholar.google.com/citations?user=1kdjewoAAAAJ&hl=en&oi=ao",
  },
  {
    title: "This Old Stereotype: The Pervasiveness and Persistence of the Elderly Stereotype",
    authors: "Cuddy, Norton & Fiske",
    journal: "Journal of Social Issues",
    year: "2005",
    description: "Examines how older adults are stereotyped as warm but incompetent across contexts, and how this pity-based stereotype persists even among people who explicitly reject prejudice — with real consequences for how older adults are treated.",
    url: "https://scholar.google.com/citations?user=1kdjewoAAAAJ&hl=en&oi=ao",
  },
  {
    title: "Stereotype Content Model Across Cultures: Towards Universal Similarities and Some Differences",
    authors: "Cuddy, Fiske, Kwan, Glick, Demoulin, Leyens et al.",
    journal: "British Journal of Social Psychology",
    year: "2009",
    description: "Cross-national validation of the SCM across ten countries spanning multiple cultural and economic contexts. Finds the warmth-competence structure and its emotional consequences to be broadly universal, with variation in which groups occupy which positions.",
    url: "https://scholar.google.com/citations?user=1kdjewoAAAAJ&hl=en&oi=ao",
  },
];

const otherTopics = topics.filter((t) => t.slug !== "stereotyping-prejudice");

export default function StereotypingPrejudicePage() {
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
            Stereotyping & Prejudice
          </h1>
          <p className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-2xl">
            How the mind sorts people into categories — and what those categories cost us, individually and collectively.
          </p>
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <p className="text-xl font-medium text-text-primary leading-relaxed">
              Before Amy Cuddy became known for power posing, she spent years studying something more fundamental: how human beings perceive one another, and how those perceptions — formed in milliseconds and rarely updated — shape the opportunities, treatment, and lives of entire groups of people.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              That work, developed in close collaboration with Susan Fiske and Peter Glick at Princeton and Harvard, produced the Stereotype Content Model — a framework for understanding not just that stereotypes exist, but why they take the specific forms they do, what emotions they produce, and what behaviours they predict. It is one of the most widely replicated and cited models in all of social psychology.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              The research spans workplaces and courtrooms, history and neuroscience. It explains why mothers face a specific form of professional discrimination distinct from general gender bias. It illuminates the emotional mechanics of antisemitism and other forms of envy-based prejudice. It maps how societies treat their elderly, their poor, and those they have decided to distrust. And it shows that these patterns, across cultures and centuries, follow a logic — one that can be understood, anticipated, and interrupted.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE SCM EXPLAINER ── */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            The Framework
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Warmth &times; Competence
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-2xl">
            The Stereotype Content Model holds that all social perception reduces, at its core, to two questions: is this person or group warm? and are they competent? The answers to those two questions determine almost everything else.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                warmth: "High warmth",
                competence: "High competence",
                emotion: "Admiration",
                example: "In-group members, close allies",
                behaviour: "Active helping and facilitation",
                border: "border-gold/40",
                emotionColor: "text-gold",
              },
              {
                warmth: "High warmth",
                competence: "Low competence",
                emotion: "Pity",
                example: "Elderly people, people with disabilities",
                behaviour: "Paternalistic help — kind but limiting",
                border: "border-white/20",
                emotionColor: "text-white/80",
              },
              {
                warmth: "Low warmth",
                competence: "High competence",
                emotion: "Envy",
                example: "Jewish people, Asian Americans, the wealthy",
                behaviour: "Passive admiration, active hostility under threat",
                border: "border-white/20",
                emotionColor: "text-white/80",
              },
              {
                warmth: "Low warmth",
                competence: "Low competence",
                emotion: "Contempt",
                example: "The homeless, welfare recipients",
                behaviour: "Active and passive harm",
                border: "border-white/10",
                emotionColor: "text-white/60",
              },
            ].map((cell) => (
              <div key={cell.emotion} className={`border ${cell.border} rounded-xl p-6`}>
                <div className="flex gap-2 mb-4">
                  <span className="text-xs font-semibold text-white/40 bg-white/10 px-2.5 py-1 rounded-full">{cell.warmth}</span>
                  <span className="text-xs font-semibold text-white/40 bg-white/10 px-2.5 py-1 rounded-full">{cell.competence}</span>
                </div>
                <p className={`font-serif text-2xl font-bold mb-2 ${cell.emotionColor}`}>{cell.emotion}</p>
                <p className="text-white/50 text-sm mb-3 italic">{cell.example}</p>
                <p className="text-white/40 text-sm leading-relaxed">{cell.behaviour}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH AREAS ── */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Research Areas
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
              What the research covers
            </h2>
          </div>
          <div className="space-y-6">
            {researchAreas.map((area) => (
              <div key={area.heading} className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm flex gap-6">
                <div className="flex-shrink-0">
                  <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold/60 bg-gold/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {area.label}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-text-primary mb-3">{area.heading}</h3>
                  <p className="text-text-secondary leading-relaxed">{area.body}</p>
                </div>
              </div>
            ))}
          </div>
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

      {/* ── OTHER TOPICS ── */}
      <section className="py-20 bg-background-alt border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-text-secondary mb-8">
            Explore other topics
          </p>
          <div className="flex flex-wrap gap-3">
            {otherTopics.map((t) => (
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

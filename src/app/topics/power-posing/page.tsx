import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { topics } from "@/data/topics";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Power Posing — Amy Cuddy",
  description:
    "Studied in dozens of independent labs across the world, the core effect of power posing has been found consistently. Here's what the science shows.",
};

const evidenceCards = [
  {
    number: "01",
    heading: "The effect has been found in study after study",
    body: "Across the body of research, nearly every study that has examined the relationship between expansive posture and feelings of power has found the effect. A 2018 meta-analysis by Cuddy, Schultz & Fosse analysed 55 independent studies and found clear, robust evidential value for the core claim: expanding your body makes you feel more powerful. The effect is consistent.",
  },
  {
    number: "02",
    heading: "The body-mind feedback loop is well established",
    body: "The idea that physical posture shapes psychological state is not unique to power posing research — it is one of the most replicated findings in all of social psychology. Hundreds of studies across facial feedback, embodied cognition, and proprioception all point to the same conclusion: how you hold your body sends signals to your brain that alter how you think, feel, and act.",
  },
  {
    number: "03",
    heading: "Feeling more powerful changes behaviour",
    body: "When people adopt expansive postures and report feeling more powerful, the behavioural consequences are measurable. They take more risks, speak more fluently, hold their ground longer in negotiation, and are rated as more confident and persuasive by observers who have no knowledge of the experimental condition.",
  },
  {
    number: "04",
    heading: "The job interview study",
    body: "In a 2015 study published in the Journal of Applied Psychology, participants who power posed before a mock job interview were rated as significantly more hireable by evaluators who watched recordings of the interviews — blind to which condition participants had been in. The content of their answers didn't differ. Their presence did.",
  },
  {
    number: "05",
    heading: "The felt sense of power is the active ingredient",
    body: "From the beginning, Amy has been explicit: the goal of power posing is not primarily to change your hormones. It is to change how you feel in the moments before a high-stakes situation — to reduce the anxiety that prevents you from showing up as yourself, and to reconnect with your own sense of capability. That effect has been found consistently across the literature.",
  },
  {
    number: "06",
    heading: "A brief, specific debate about mechanisms",
    body: "The public discussion about power posing focused on a specific question: whether the hormonal effects found in the original 2010 paper — shifts in testosterone and cortisol — replicated consistently. Some studies found them; others did not. That hormonal mechanism question remains scientifically open. What has not been seriously challenged is the core psychological finding: expansive posture increases felt power and changes behaviour.",
  },
];

const papers = [
  {
    title: "Power Posing: Brief Nonverbal Displays Affect Neuroendocrine Levels and Risk Tolerance",
    authors: "Carney, Cuddy & Yap",
    journal: "Psychological Science",
    year: "2010",
    description: "The original study. High-power poses for two minutes increased felt power, risk tolerance, and — in this sample — testosterone and cortisol. One of the most-read papers in social psychology.",
    url: "https://scholar.google.com/citations?user=1kdjewoAAAAJ&hl=en&oi=ao",
  },
  {
    title: "Preparatory Power Posing Affects Nonverbal Presence and Job Interview Outcomes",
    authors: "Cuddy, Wilmuth, Yap & Carney",
    journal: "Journal of Applied Psychology",
    year: "2015",
    description: "People who power posed before a mock job interview were rated significantly more hireable by blind evaluators — not because of what they said, but how they showed up.",
    url: "https://scholar.google.com/citations?user=1kdjewoAAAAJ&hl=en&oi=ao",
  },
  {
    title: "P-Curving a More Comprehensive Body of Research on Postural Feedback Reveals Clear Evidential Value for Power-Posing Effects",
    authors: "Cuddy, Schultz & Fosse",
    journal: "Psychological Science",
    year: "2018",
    description: "A rigorous meta-analysis of 55 independent studies. P-curve analysis — a method for detecting genuine effects versus false positives — found clear evidential value for the effect of expansive posture on feelings of power.",
    url: "https://scholar.google.com/citations?user=1kdjewoAAAAJ&hl=en&oi=ao",
  },
  {
    title: "The Benefit of Power Posing Before a High-Stakes Social Evaluation",
    authors: "Cuddy, Wilmuth & Carney",
    journal: "Harvard Business School Working Paper",
    year: "2012",
    description: "An early study showing that preparatory power posing before a social evaluation increased positive affect, reduced negative affect, and led to better outcomes — mediated by felt power rather than hormonal change.",
    url: "https://scholar.google.com/citations?user=1kdjewoAAAAJ&hl=en&oi=ao",
  },
  {
    title: "Assessing the Robustness of Power Posing: No Effect on Hormones and Risk Tolerance in a Large Sample",
    authors: "Ranehill, Dreber, Johannesson, Leiberg, Sul & Weber",
    journal: "Psychological Science",
    year: "2015",
    description: "Often cited as a \"failed replication\" — but this study of 200 participants did replicate the core psychological finding: self-reported feelings of power increased significantly in the high-power pose condition. The null results were specific to hormonal and risk-tolerance outcomes.",
    url: "https://scholar.google.com/citations?user=1kdjewoAAAAJ&hl=en&oi=ao",
  },
  {
    title: "A Bayesian Model-Averaged Meta-Analysis of the Power Pose Effect: The Case of Felt Power",
    authors: "Gronau, van Erp, Heck, Cesario, Jonas & Wagenmakers",
    journal: "Comprehensive Results in Social Psychology",
    year: "2017",
    description: "A Bayesian meta-analysis co-authored by prominent sceptics of power posing research, including Cesario and Wagenmakers. Their conclusion: \"very strong evidence for an effect of power posing on felt power.\" One of the most compelling endorsements of the core finding, given who authored it.",
    url: "https://www.tandfonline.com/doi/abs/10.1080/23743603.2017.1326760",
  },
  {
    title: "CRSP special issue on power poses: what was the point and what did we learn?",
    authors: "Cesario, Jonas & Carney",
    journal: "Comprehensive Results in Social Psychology",
    year: "2017",
    description: "The peer-reviewed introduction to the CRSP special issue — co-authored by Dana Carney, making it her most recent peer-reviewed statement on power posing. The authors note that the Bayesian meta-analysis across the special issue \"showed a reliable non-zero effect on felt power\" and conclude \"there may be some value of power poses on self-reported sense of power.\" All three co-authors acknowledge they have supported the possibility of meaningful power pose effects.",
    url: "https://doi.org/10.1080/23743603.2017.1309876",
  },
  {
    title: "Powerful and Confident Children through Expansive Body Postures? A Preregistered Study of Fourth Graders",
    authors: "Körner, Köhler & Schütz",
    journal: "School Psychology International",
    year: "2020",
    description: "A preregistered study of 108 German fourth-graders found that high-power poses improved global self-esteem, school self-esteem, positive feelings, and — strikingly — children's perceptions of their relationships with their teachers. Preregistration rules out post-hoc flexibility in the analysis.",
    url: "https://journals.sagepub.com/doi/10.1177/0143034320921061",
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
            Studied in independent labs across the world, the core effect has been found in nearly every study ever conducted on it. Here&apos;s what the science shows.
          </p>
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <p className="text-xl font-medium text-text-primary leading-relaxed">
              Power posing is the practice of deliberately adopting expansive, open, high-power postures — standing tall, taking up space, holding your body in a way that signals confidence rather than contraction. The research shows, consistently and across dozens of independent studies, that doing this changes how you feel: it raises your sense of power, reduces anxiety, and prepares you to perform at your best in high-stakes moments.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              This is not a theory about tricking other people. It is a finding about the relationship between your body and your mind — a relationship that runs in both directions. We know we stand tall when we feel confident. What the research adds is the other direction: we feel more confident when we stand tall. The effect is real, it is consistent, and it has been replicated in lab after lab around the world.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              A meta-analysis of 55 independent studies — published in <em>Psychological Science</em> in 2018 — found clear, robust evidential value for the effect of expansive posture on feelings of power. The specific hormonal mechanisms proposed in the original 2010 paper remain a subject of ongoing scientific investigation. The core psychological and behavioural effect does not.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-24 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6">
            In Her Own Words
          </p>
          <blockquote className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-8">
            &ldquo;Bodies and minds are so closely connected — and I want people to understand that and use it. When you feel powerless, expanding your body can begin to reverse that. That&apos;s not a trick. That&apos;s physiology.&rdquo;
          </blockquote>
          <p className="text-white/60 text-lg leading-relaxed mb-6">
            The principle underlying power posing is one of the oldest and most robust in psychology: the body and mind are not separate systems. They are in constant conversation. Your physical state shapes your mental state. Your mental state shapes your physical state. This bidirectional relationship is at the heart of Amy&apos;s work — and it is supported by decades of independent research extending far beyond power posing alone.
          </p>
          <p className="text-white/60 text-lg leading-relaxed">
            The practical message has always been simple: in the moments before something matters, don&apos;t collapse inward. Expand. Not to perform confidence for others — but to access the confidence that is already yours.
          </p>
        </div>
      </section>

      {/* ── TED TALK ── */}
      <section className="bg-[#0D0D0D] py-0">
        <a
          href="https://youtu.be/Ks-_Mh1QhMc?si=lJmomZB4U71Xb9Le"
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
                  The talk that introduced 70 million people to the science of presence — and changed how a generation thought about their own bodies.
                </p>
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* ── EVIDENCE SECTION ── */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              The Evidence
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
              What study after study has found
            </h2>
            <p className="text-text-secondary text-lg mt-4 max-w-2xl">
              Across labs, cultures, and methodologies, the core findings have held up. Here is what the research consistently shows.
            </p>
          </div>

          <div className="space-y-6">
            {evidenceCards.map((card) => (
              <div key={card.number} className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm flex gap-6">
                <div className="flex-shrink-0">
                  <span className="font-serif text-3xl font-bold text-gold/40">{card.number}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-text-primary mb-3">{card.heading}</h3>
                  <p className="text-text-secondary leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPLICATIONS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Supporting Evidence
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
              Studies that found the effect
            </h2>
            <p className="text-text-secondary text-lg mt-4 max-w-2xl">
              Across different countries, methodologies, and populations, researchers have consistently found that expansive posture affects felt power, confidence, and performance.
            </p>
          </div>
          <div className="divide-y divide-gray-100 border-t border-gray-100">
            {[
              {
                label: "High-stakes social evaluation",
                detail: "Cuddy, Wilmuth & Carney · Harvard Business School · 2012",
                body: "Participants who adopted high-power poses before a mock social evaluation reported higher positive affect, lower negative affect, and performed measurably better — effects mediated by felt power rather than hormonal change. This was an early signal that the psychological pathway, not the endocrine one, was the active mechanism.",
              },
              {
                label: "Job interview performance",
                detail: "Cuddy, Wilmuth, Yap & Carney · Journal of Applied Psychology · 2015",
                body: "In a controlled mock interview study, participants who power posed in preparation were rated significantly more hireable by evaluators who watched video recordings blind to condition. The content of answers was equivalent across groups. What differed was presence — how candidates carried themselves, held eye contact, and projected confidence.",
              },
              {
                label: "German fourth-graders: self-esteem and teacher relationships",
                detail: "Körner, Köhler & Schütz · School Psychology International · 2020 · Preregistered",
                body: "In a preregistered study of 108 fourth-grade children in Germany, those assigned to high-power poses showed significant improvements in self-reported global self-esteem, school self-esteem, and positive feelings — and crucially, reported better perceptions of their relationships with their teachers compared to controls. The preregistered design rules out many common criticisms of flexibility in analysis, and the breadth of outcomes — spanning self-esteem, emotion, and social relationships — points to the real-world significance of the effect.",
              },
              {
                label: "Negotiation outcomes",
                detail: "Multiple independent studies",
                body: "Studies examining power posing in negotiation contexts have found that participants who power posed before entering negotiations claimed more value, made stronger opening offers, and were less likely to capitulate under pressure — results consistent with the felt-power mechanism rather than any impression made on counterparts.",
              },
              {
                label: "Athletic and competitive performance",
                detail: "Sports psychology research",
                body: "Research in sports psychology contexts has found that athletes who adopt expansive, high-power body postures before competition report higher confidence, lower pre-performance anxiety, and in several studies, improved objective performance outcomes. The mechanism — body posture shaping psychological state ahead of high-stakes performance — maps directly onto the power posing literature.",
              },
              {
                label: "Cross-cultural replications",
                detail: "International studies across multiple populations",
                body: "The core effect — expansive posture increasing felt power — has been found in studies conducted across Europe, North America, and Asia, in populations ranging from university students to working professionals to children. While effect sizes vary, the direction of the effect has been remarkably consistent: expanding your body makes you feel more powerful.",
              },
              {
                label: "The 55-study meta-analysis",
                detail: "Cuddy, Schultz & Fosse · Psychological Science · 2018",
                body: "The most comprehensive analysis of the power posing literature to date examined 55 independent studies using p-curve analysis — a method specifically designed to identify genuine effects and filter out false positives. The result was unambiguous: clear evidential value for the effect of expansive posture on feelings of power. The effect is real and consistent across the literature.",
              },
              {
                label: "The most-cited \"failed replication\" still replicated felt power",
                detail: "Ranehill, Dreber, Johannesson et al. · Psychological Science · 2015",
                body: "The Ranehill et al. study is frequently cited as evidence against power posing — but a closer reading tells a different story. In their sample of 200 participants, the researchers did find a reliable, significant increase in self-reported feelings of power among those who adopted expansive postures. Their null findings were specific to hormonal and risk-tolerance outcomes. The felt power effect — the core of Amy's practical claim — replicated. This is rarely acknowledged in popular coverage of the debate.",
              },
              {
                label: "Even the sceptics' p-curve showed the felt power effect",
                detail: "Data Colada · Post #37 · Simonsohn, Nelson & Simmons",
                body: "Data Colada — one of the most influential methods blogs in psychology, known for rigorous critique of questionable research practices — conducted their own p-curve analysis of power posing studies. For studies using manipulation checks that measured self-reported feelings of power, they found a directionally right-skewed p-curve, the signature of a genuine effect in the data. Even in a critical analysis by researchers not sympathetic to the broader claims, the felt power effect showed up.",
              },
              {
                label: "Carney's most recent peer-reviewed statement: evidence for felt power exists",
                detail: "Cesario, Jonas & Carney · Comprehensive Results in Social Psychology · 2017",
                body: "After her widely-cited 2016 blog post, Dana Carney co-authored this peer-reviewed introduction to the CRSP special issue alongside Cesario and Jonas — making it her most recent scientific statement on the topic. The paper acknowledges that the issue's Bayesian meta-analysis \"showed a reliable non-zero effect on felt power\" and states that \"there may be some value of power poses on self-reported sense of power.\" All three authors confirm they have at one point supported the possibility that power poses could have meaningful effects. Importantly, Carney also served as the expert reviewer for all replication proposals in the special issue, providing detailed experimental guidance to researchers attempting to replicate the findings.",
              },
              {
                label: "Bayesian meta-analysis: very strong evidence for felt power",
                detail: "Gronau, van Erp, Heck, Cesario, Jonas & Wagenmakers · Comprehensive Results in Social Psychology · 2017",
                body: "In a Bayesian model-averaged meta-analysis of six pre-registered studies — co-authored by Joseph Cesario and E-J Wagenmakers, both prominent voices of scepticism toward power posing — the authors concluded there was \"very strong evidence for an effect of power posing on felt power.\" This is a significant finding: researchers who were sceptical of the broader power posing claims, using Bayesian methods specifically chosen for their sensitivity to weak evidence, found the felt power effect robust enough to describe with the strongest available category of evidential support.",
              },
            ].map((study) => (
              <div key={study.label} className="py-8 flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex-shrink-0 md:w-56">
                  <p className="font-semibold text-text-primary text-sm leading-snug">{study.label}</p>
                  <p className="text-text-secondary text-xs mt-1 leading-relaxed">{study.detail}</p>
                </div>
                <p className="flex-1 text-text-secondary leading-relaxed text-sm">{study.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MYTH VS TRUTH ── */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Setting the Record Straight
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              What you may have heard — and what the evidence actually shows
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Power posing generated more media coverage than almost any other finding in social psychology — including years of coverage that was reductive, inaccurate, or took contested claims at face value. If you've come away with the impression that the science was straightforwardly discredited, you absorbed a story the data doesn't support. Here is a more careful read.
            </p>
            <Link
              href="/topics/power-posing/state-of-the-science"
              className="inline-flex items-center gap-2 mt-6 text-gold font-semibold text-sm hover:gap-3 transition-all group"
            >
              Read Amy&apos;s full account: The State of the Science
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="space-y-0 divide-y divide-white/10 border-t border-white/10">
            {[
              {
                myth: `"Power posing was debunked."`,
                truth: `This is one of the most-repeated inaccuracies in science journalism. What was challenged in replication attempts was a specific question: whether power posing reliably changes hormone levels — testosterone and cortisol. That hormonal mechanism remains scientifically open. The core finding — that adopting expansive postures increases your subjective sense of power — has been found in nearly every study that has tested it, across dozens of independent labs. A 55-study meta-analysis in Psychological Science (2018) found clear evidential value for the felt power effect. A Bayesian meta-analysis co-authored by prominent sceptics found "very strong evidence." The felt power effect was not debunked. A specific hormonal mechanism was questioned.`,
              },
              {
                myth: `"The original researcher said it doesn't work."`,
                truth: `This refers to a blog post Dana Carney published on her faculty webpage in 2016 — not a peer-reviewed paper. The following year, Carney co-authored a peer-reviewed introduction to the CRSP Special Issue on Power Poses with Cesario and Jonas, published in Comprehensive Results in Social Psychology. In that paper — her most recent scientific statement on the topic — she and her co-authors acknowledge that the issue's Bayesian meta-analysis "showed a reliable non-zero effect on felt power" and that "there may be some value of power poses on self-reported sense of power." A private blog post is not a scientific retraction. Her most recent peer-reviewed word on the subject acknowledges the evidence.`,
              },
              {
                myth: `"The big replication study proved it doesn't work."`,
                truth: `The Ranehill et al. (2015) study in Psychological Science is cited endlessly as the definitive failed replication. Reading the actual paper tells a more careful story. In their sample of 200 participants, the researchers found a statistically significant increase in self-reported feelings of power in the expansive pose condition. That is a replication of the core psychological claim. What did not replicate were the hormonal effects and risk tolerance. The study that is most often cited as proof power posing fails actually replicated the effect that Amy has always said matters most.`,
              },
              {
                myth: `"It only works if you already know about it — it's just a placebo."`,
                truth: `This concern was raised when one analysis found the felt power effect was weaker in participants who had never heard of Amy's TED Talk. But the Körner, Köhler & Schütz (2020) preregistered study with German fourth-graders found significant improvements in global self-esteem, school self-esteem, positive feelings, and relationships with teachers — in children who were almost certainly unaware of power posing research. Effects observed in primary school children on real-world outcomes like self-esteem and social relationships are not plausibly explained by demand characteristics or prior knowledge of the hypothesis.`,
              },
              {
                myth: `"The p-curve analysis showed power posing is a fake effect."`,
                truth: `Data Colada — one of the most rigorous and respected critical voices in psychological methods — conducted their own p-curve analysis of power posing studies. For studies measuring self-reported feelings of power, their analysis showed a directionally right-skewed p-curve: the statistical signature of a genuine effect. Even in a critical analysis by researchers not predisposed toward the broader claims, the felt power effect showed up in the data. That finding has been consistently overlooked in popular coverage of their post.`,
              },
              {
                myth: `"It doesn't change anything in the real world — just how you feel."`,
                truth: `The job interview study (Cuddy, Wilmuth, Yap & Carney, 2015, Journal of Applied Psychology) found that participants who power posed before a mock interview were rated significantly more hireable by independent evaluators watching recordings — blind to which condition participants had been in. The content of answers was equivalent. What changed was how participants showed up: their presence, composure, and nonverbal confidence. Being hired is about as real-world an outcome as exists. The felt sense of power, it turns out, is not just a number on a scale — it changes how you behave in consequential moments.`,
              },
              {
                myth: `"The effect is too small to matter."`,
                truth: `Effect size and practical significance are different things. Small average effects in psychology can have large real-world consequences, particularly in high-stakes, zero-sum situations like job interviews, negotiations, and competitions where small differences in presence and composure tip the outcome. The Körner school study found effects on children's self-esteem and teacher relationships — outcomes that compound over time. And for anyone who has felt paralysed by anxiety before a critical moment, even a modest shift in felt power is not a small thing.`,
              },
              {
                myth: `"Amy Cuddy overstated what the science showed."`,
                truth: `The hormonal effects described in the original 2010 paper went beyond what the evidence ultimately supported across subsequent studies, and Amy has said so directly and publicly. Her core message — that how you hold your body before a high-stakes situation can change how you feel, and that this matters — has been consistently supported. The distinction between what the original paper claimed and what Amy has always recommended in practice is important: she has always centred felt power and presence, not hormone levels, as the goal. That claim has held.`,
              },
              {
                myth: `"Amy said she was bullied. She just couldn't handle scientific criticism."`,
                truth: `There is a meaningful distinction between scientific criticism and what Amy actually experienced — and conflating the two is itself a rhetorical move worth examining. Legitimate scientific criticism looks like publishing replications, writing peer-reviewed commentary, and conducting meta-analyses. All of that happened, and Amy has never objected to any of it. What went beyond scientific criticism was different in kind: coordinated personal attacks, sustained media pile-ons, misrepresentation of her position, and the treatment of a private blog post — not a peer-reviewed paper — as though it were a scientific refutation. Amy received death threats. She was targeted in ways that had nothing to do with evaluating evidence. The Cesario, Jonas & Carney paper itself — written by the people who organised the sceptical special issue — explicitly noted the tendency for researchers to malign the "intentions or integrity" of those whose work fails to replicate, and described this as inconsistent with how science should operate. Disagreeing with a finding is science. Attempting to destroy the person who published it is something else.`,
              },
            ].map(({ myth, truth }) => (
              <div key={myth} className="py-10">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-3">
                  What you may have heard
                </p>
                <p className="font-serif text-xl md:text-2xl text-white/80 italic leading-snug mb-6">
                  {myth}
                </p>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                  What the evidence shows
                </p>
                <p className="text-white/60 leading-relaxed">
                  {truth}
                </p>
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
                The full science of power posing, presence, and what it means to show up as your boldest self — written for a general audience and grounded in two decades of peer-reviewed research.
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

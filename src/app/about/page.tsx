import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Amy Cuddy — Harvard professor, social psychologist, bestselling author of Presence, and TED speaker whose work has reached over 70 million people worldwide.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy overflow-hidden">
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
            Social Psychologist · Harvard Professor · Author
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Amy Cuddy
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            {siteConfig.bio.short}
          </p>
        </div>
      </section>

      {/* Bio section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="aspect-[3/4] bg-background-alt rounded-2xl mb-8 relative overflow-hidden">
                <Image
                  src="/images/headshot.jpeg"
                  alt="Amy Cuddy"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Credentials */}
              <div className="bg-background-alt rounded-xl p-6 mb-6">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-text-secondary mb-4">
                  Credentials
                </p>
                <ul className="space-y-3">
                  {siteConfig.credentials.map((cred) => (
                    <li key={cred} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Research areas */}
              <div className="bg-navy rounded-xl p-6">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-4">
                  Research Areas
                </p>
                <ul className="space-y-2">
                  {siteConfig.researchAreas.map((area) => (
                    <li key={area} className="text-sm text-white/70">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main bio */}
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
                Biography
              </p>
              <div className="prose-amy space-y-5">
                {siteConfig.bio.long.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-text-secondary leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/speaking"
                  className="px-8 py-4 bg-navy text-white font-semibold rounded-md hover:bg-navy-dark transition-colors"
                >
                  Book Amy to Speak
                </Link>
                <Link
                  href="/books"
                  className="px-8 py-4 border border-gray-200 text-text-secondary font-semibold rounded-md hover:border-gray-300 transition-colors"
                >
                  Explore Her Books
                </Link>
                <a
                  href={siteConfig.social.tedTalk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-gold/50 text-gold font-semibold rounded-md hover:bg-gold/5 transition-colors"
                >
                  Watch the TED Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Academic Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Research Highlights
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Amy&apos;s academic work has appeared in top peer-reviewed journals and influenced
              fields from organizational behavior to clinical psychology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Power & Nonverbal Behavior",
                description:
                  "Seminal research showing that expansive, high-power body postures increase testosterone, decrease cortisol, and shape behavior in both humans and animals — with profound implications for leadership and stress management.",
                icon: "◈",
              },
              {
                title: "Warmth & Competence",
                description:
                  "Research on the two universal dimensions of social judgment — warmth and competence — and how they interact to determine trust, liking, and employment discrimination across cultures.",
                icon: "◎",
              },
              {
                title: "Belonging Uncertainty",
                description:
                  "Groundbreaking work on how uncertainty about one's belonging in high-stakes environments affects motivation, performance, and wellbeing, particularly among underrepresented groups.",
                icon: "◇",
              },
              {
                title: "Embodied Cognition",
                description:
                  "Research demonstrating that the body doesn't merely express psychological states — it creates them. Physical experiences shape abstract thought, emotion, and social judgment in predictable, systematic ways.",
                icon: "✦",
              },
              {
                title: "Stereotype Threat",
                description:
                  "Studies on how awareness of negative stereotypes about one's social group undermines cognitive performance and long-term achievement, and the interventions that most effectively interrupt this cycle.",
                icon: "○",
              },
              {
                title: "Presence & Authenticity",
                description:
                  "Empirical investigation of the psychological experience of 'presence' — the alignment of values, feelings, and behavior — and its relationship to both individual performance and authentic leadership.",
                icon: "❧",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-4">
                  <span className="text-navy text-lg">{item.icon}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-10 text-center">
            Photo Gallery
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/keynote-wobi-arms.jpeg", span: "col-span-2 row-span-2 aspect-square" },
              { src: "/images/panel-conversation.jpeg", span: "aspect-square" },
              { src: "/images/keynote-podium.jpeg", span: "aspect-square" },
              { src: "/images/panel-smiling.jpeg", span: "aspect-square" },
              { src: "/images/group-workshop.jpeg", span: "aspect-square" },
              { src: "/images/keynote-pointing.jpeg", span: "aspect-square" },
            ].map(({ src, span }) => (
              <div key={src} className={`relative bg-background-alt rounded-xl overflow-hidden ${span}`}>
                <Image
                  src={src}
                  alt="Amy Cuddy"
                  fill
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Work with Amy
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Bring Amy&apos;s research and insights to your organization, conference, or event.
          </p>
          <Link
            href="/contact"
            className="px-10 py-4 bg-gold text-[#0D0D0D] font-semibold rounded-md hover:bg-gold-light transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Amy",
  description:
    "Amy Cuddy's story — from a traumatic brain injury at 19 to Harvard, a TED Talk with 70M+ views, and a life's work helping people show up as their boldest selves.",
};

export default function AboutPage() {
  return (
    <>
      {/* Opening: photo + first-person statement */}
      <section className="pt-24 md:pt-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-start">
            {/* Photo */}
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[700px] rounded-2xl overflow-hidden bg-background-alt">
              <Image
                src="/images/headshot.jpeg"
                alt="Amy Cuddy"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Opening copy */}
            <div className="py-10 lg:py-16 flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6">
                About Amy
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-8">
                I know what it feels like to be told you&apos;re not enough.
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                When I was nineteen, a car accident left me with a traumatic brain injury severe enough
                that doctors told my family I would likely never finish college. I had always been
                identified as gifted — it was central to my identity — and suddenly that identity was gone.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                It took me four extra years, but I finished. Then I went to Princeton for my PhD.
                And then impostor syndrome nearly derailed me there, too.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                In my first year at Princeton, I called my advisor in tears, ready to drop out.
                She wouldn&apos;t hear it. &ldquo;You are going to give that talk,&rdquo; she told me,
                &ldquo;and you are going to fake it until you become it.&rdquo;
                I didn&apos;t drop out. And that moment became the seed of everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The story */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <p className="font-serif text-2xl md:text-3xl font-bold text-text-primary leading-snug">
              That question — what allows some people to walk into a high-stakes room and feel completely
              at home, while others shrink — became my life&apos;s work.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed">
              For more than two decades I&apos;ve studied the science of presence: the nonverbal signals
              we send, the postures we hold, the stories we tell ourselves in the moments before everything
              matters. My research has taken me from the boardroom to the battlefield, from Fortune 500
              executives to college students walking into their first job interview.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed">
              In 2012, I gave a TED Talk about what my research had found. I didn&apos;t expect much —
              I was terrified, honestly. But something in that talk landed. People wrote to me from
              every corner of the world. They sent me videos of themselves practicing in bathroom stalls
              before presentations. They told me the research had changed how they saw themselves.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed">
              One letter in particular stopped me cold. A young woman wrote that she had been about to
              take her own life — and then she watched the talk. She said it reminded her that she had
              the power to change her own story.
            </p>

            <p className="font-serif text-xl md:text-2xl font-bold text-navy leading-snug">
              That is why I do this. Not for the data. For the person in the bathroom stall. For the
              student who thinks they don&apos;t belong. For the version of yourself that you haven&apos;t
              met yet.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed">
              My book <em>Presence</em> spent 26 weeks on the New York Times bestseller list and has
              been translated into more than 30 languages. My next book, <em>Bullied</em>, comes from
              the same place — a deep belief that understanding power and belonging can change lives.
              And my research, published in leading academic journals, keeps asking the same question
              I&apos;ve been asking since that moment at Princeton: what does it take to show up as your
              fullest self, even when you feel least capable of doing so?
            </p>

            <p className="text-text-secondary text-lg leading-relaxed">
              I&apos;m a social psychologist and professor. I speak to organizations around the world.
              I write for publications like the New York Times, Harvard Business Review, and The Athletic.
              But before any of that, I&apos;m someone who had to learn — slowly, painfully — that
              presence isn&apos;t something you either have or you don&apos;t. It&apos;s something
              you practice.
            </p>

            <p className="font-serif text-xl font-bold text-text-primary">
              And I&apos;m here to help you practice it.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/books"
              className="px-8 py-4 bg-navy text-white font-semibold rounded-md hover:bg-navy-dark transition-colors"
            >
              Get the Books
            </Link>
            <a
              href={siteConfig.social.tedTalk}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-200 text-text-secondary font-semibold rounded-md hover:border-gray-300 transition-colors"
            >
              Watch the TED Talk
            </a>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "70M+", label: "TED Talk views" },
              { value: "#3", label: "Most-watched TED Talk ever" },
              { value: "30+", label: "Languages — Presence" },
              { value: "26 weeks", label: "New York Times bestseller" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/50 text-sm tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Amy believes */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              What I believe
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
              The convictions behind the work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                belief: "Your body shapes your mind as much as your mind shapes your body.",
                detail:
                  "The science is clear: the postures we hold, the way we breathe, the physical space we occupy — these don't just express our psychology. They create it.",
              },
              {
                belief: "Presence isn't a personality trait. It's a practice.",
                detail:
                  "You don't need to be born confident. You need to learn how to get out of your own way — especially in the moments that matter most.",
              },
              {
                belief: "Belonging is a human right, not a privilege.",
                detail:
                  "Too many people spend their lives feeling like they're on the outside looking in. Understanding the social forces that create that feeling is the first step to dismantling them.",
              },
              {
                belief: "Vulnerability is not weakness. It is the source of connection.",
                detail:
                  "The research is consistent: the leaders and speakers who move us most are the ones willing to be honest about what they don't know, what scared them, and how they got through it.",
              },
              {
                belief: "Small tweaks produce real change.",
                detail:
                  "Two minutes. A different posture. A reframed story. I've spent my career studying the smallest possible interventions that create the most durable shifts in how people feel and perform.",
              },
              {
                belief: "Science should be accessible to everyone.",
                detail:
                  "Academic research changes lives only when it reaches the people who need it. Writing, speaking, and translating complex findings into plain language is not a lesser calling — it is the calling.",
              },
            ].map((item) => (
              <div key={item.belief} className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm">
                <p className="font-serif text-lg font-bold text-navy leading-snug mb-4">
                  &ldquo;{item.belief}&rdquo;
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              The Books
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
              Read the research. Change your story.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Presence",
                subtitle: "Bringing Your Boldest Self to Your Biggest Challenges",
                year: "2015",
                description:
                  "The New York Times bestseller that has helped millions of people stop worrying about the impression they're making — and start showing up as their fullest selves in the moments that matter.",
                href: "/books",
                cta: "Learn More",
                cover: "/images/presence-cover.jpg",
                badge: "NYT Bestseller · 30+ languages",
              },
              {
                title: "Bullied",
                subtitle: "The Untold Story of How Bullying Shaped America — and How We Can Reclaim Our Power",
                year: "Forthcoming 2027",
                description:
                  "A groundbreaking examination of the pervasive, often invisible impact of bullying — and a guide to reclaiming the dignity, safety, and self-belief that cruelty tries to take from us.",
                href: "/books",
                cta: "Pre-order Now",
                coverGradient: "linear-gradient(135deg, #990000, #CC0000)",
                badge: "Forthcoming · Spring 2027",
              },
            ].map((book) => (
              <div
                key={book.title}
                className="flex flex-col sm:flex-row gap-6 bg-background-alt rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex-shrink-0">
                  <div className="w-28 h-40 rounded-lg overflow-hidden shadow-md relative">
                    {book.cover ? (
                      <Image src={book.cover} alt={book.title} fill className="object-cover" />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center p-3"
                        style={{ background: book.coverGradient }}
                      >
                        <p className="font-serif text-white font-bold text-sm text-center leading-tight">
                          {book.title}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-xs font-semibold text-gold tracking-wider uppercase mb-1">
                    {book.badge}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-text-primary mb-1">{book.title}</h3>
                  <p className="text-text-secondary text-sm mb-3">{book.subtitle}</p>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">{book.description}</p>
                  <Link
                    href={book.href}
                    className="mt-4 inline-block text-navy font-semibold text-sm hover:text-navy-dark transition-colors"
                  >
                    {book.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo grid */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-10 text-center">
            In the Room
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
              <div key={src} className={`relative bg-gray-200 rounded-xl overflow-hidden ${span}`}>
                <Image src={src} alt="Amy Cuddy" fill className="object-cover object-top" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            You already have what you need. Let&apos;s help you access it.
          </p>
          <p className="text-white/60 text-lg mb-10">
            Whether you&apos;re looking for a keynote that moves a room, a book that reframes how you
            see yourself, or research that backs up what you already know to be true — Amy&apos;s work
            is for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/books"
              className="px-8 py-4 bg-gold text-[#0D0D0D] font-semibold rounded-md hover:bg-gold-light transition-colors"
            >
              Get the Books
            </Link>
            <a
              href={siteConfig.social.tedTalk}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              Watch the TED Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

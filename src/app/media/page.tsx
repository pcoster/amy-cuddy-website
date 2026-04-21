import type { Metadata } from "next";
import Link from "next/link";
import { pressItems, videoAppearances, podcastAppearances } from "@/data/media";
import { siteConfig } from "@/data/site";
import MediaSection from "@/components/MediaSection";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Amy Cuddy in the press, on video, and on podcasts. Includes her iconic TED Talk with 70M+ views, media appearances, and podcast interviews.",
};

export default function MediaPage() {
  const featuredVideo = videoAppearances.find((v) => v.id === "video-1");
  const featuredPress = pressItems.filter((p) => p.featured).slice(0, 6);

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
            Press & Appearances
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Media
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Amy&apos;s work has been featured in leading publications and she has appeared
            on some of the most listened-to podcasts and watched videos in the world.
          </p>
        </div>
      </section>

      {/* Featured TED Talk */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Most-Watched Talk
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
              The TED Talk That Changed Everything
            </h2>
          </div>

          {featuredVideo && (
            <div className="max-w-4xl mx-auto">
              <a
                href={featuredVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="relative h-72 md:h-96 bg-gradient-to-br from-navy via-navy-dark to-[#0a1e3d] flex items-center justify-center overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                  </div>

                  <div className="relative text-center px-8">
                    {/* Play button */}
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 shadow-xl">
                      <svg className="w-9 h-9 text-white ml-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <p className="text-white/80 text-sm font-medium mb-2">Watch on TED.com</p>
                    <p className="font-serif text-white text-2xl md:text-3xl font-bold">
                      {featuredVideo.title}
                    </p>
                    <p className="text-white/60 text-sm mt-2">{featuredVideo.duration} · TED Global 2012</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 bg-background-alt">
                  <div className="flex flex-wrap gap-4 mb-4">
                    {[
                      { value: "70M+", label: "Views" },
                      { value: "#2", label: "Most-watched TED Talk" },
                      { value: "30+", label: "Languages subtitled" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white rounded-lg px-4 py-2 border border-gray-100 shadow-sm">
                        <p className="font-serif font-bold text-navy text-lg">{stat.value}</p>
                        <p className="text-text-secondary text-xs">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-text-secondary leading-relaxed">{featuredVideo.description}</p>
                </div>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Press logos */}
      <section className="py-20 bg-background-alt border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-text-secondary mb-10">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {["The New York Times", "The Atlantic", "Forbes", "Harvard Business Review", "TIME", "The Wall Street Journal", "NPR", "The Guardian"].map(
              (pub) => (
                <span
                  key={pub}
                  className="text-text-secondary/50 font-semibold text-sm md:text-base tracking-wide hover:text-text-secondary transition-colors cursor-default"
                >
                  {pub}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* All media tabs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              All Appearances
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
              Press, Video & Podcasts
            </h2>
          </div>
          <MediaSection
            pressItems={pressItems}
            videoAppearances={videoAppearances}
            podcastAppearances={podcastAppearances}
          />
        </div>
      </section>

      {/* Press inquiry CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">
            Press & Media Inquiries
          </h2>
          <p className="text-white/70 text-lg mb-8">
            For interview requests, feature articles, or press inquiries, please get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gold text-[#0D0D0D] font-semibold rounded-md hover:bg-gold-light transition-colors"
            >
              Media Inquiry
            </Link>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

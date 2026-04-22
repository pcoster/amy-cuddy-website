import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { speakingTopics, audienceTypes } from "@/data/speaking";
import { testimonials } from "@/data/testimonials";
import SpeakingTopic from "@/components/SpeakingTopic";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Book Amy Cuddy for your next keynote, conference, or corporate event. Topics include presence, body language, leadership, imposter syndrome, and building inclusive cultures.",
};

export default function SpeakingPage() {
  const speakingTestimonials = testimonials
    .filter((t) => t.context === "speaking")
    .slice(0, 3);

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
            Keynotes & Workshops
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Transform Your Audience
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Amy delivers keynotes and workshops grounded in rigorous science, elevated by
            personal storytelling, and designed to produce lasting change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.utaspeakers.com/speaker/amy-cuddy"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-[#0D0D0D] font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg"
            >
              Submit a Booking Inquiry
            </a>
            <a
              href="#topics"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              Explore Topics
            </a>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="h-72 md:h-96 grid grid-cols-3 overflow-hidden">
        {["/images/keynote-wobi-gesturing.jpeg", "/images/speaking-stage.jpeg", "/images/panel-speaking-2.jpeg"].map((src) => (
          <div key={src} className="relative overflow-hidden">
            <Image src={src} alt="Amy Cuddy speaking" fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-navy/20" />
          </div>
        ))}
      </section>

      {/* Stats band */}
      <section className="bg-background-alt border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Events delivered" },
              { value: "50+", label: "Countries reached" },
              { value: "Fortune 500", label: "Corporate clients" },
              { value: "100%", label: "Tailored to your audience" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl font-bold text-navy">{stat.value}</p>
                <p className="text-text-secondary text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking topics */}
      <section id="topics" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Keynotes & Workshops
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Speaking Topics
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Each talk is carefully tailored to your audience, industry, and goals.
              All topics are available as keynotes, workshops, or half/full-day intensives.
            </p>
          </div>

          <div className="space-y-6">
            {speakingTopics.map((topic) => (
              <SpeakingTopic key={topic.id} topic={topic} variant="full" />
            ))}
          </div>
        </div>
      </section>

      {/* Audience types */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Who Amy Speaks For
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
              Audience Types
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audienceTypes.map((audience) => (
              <div
                key={audience.type}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4">
                  <span className="text-navy text-xl">{audience.icon}</span>
                </div>
                <h3 className="font-serif font-bold text-text-primary mb-3">{audience.type}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Testimonials
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
              What Event Organizers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {speakingTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Book Amy?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Submit an inquiry and our team will respond within 2–3 business days.
          </p>
          <a
            href="https://www.utaspeakers.com/speaker/amy-cuddy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-gold text-[#0D0D0D] font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg inline-block"
          >
            Submit a Booking Inquiry
          </a>
        </div>
      </section>
    </>
  );
}

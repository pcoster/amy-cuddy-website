import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Find upcoming speaking engagements and public events featuring Amy Cuddy — keynotes, workshops, conferences, and more.",
};

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const pastEvents = events.filter((e) => e.status === "past");

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
            Where to Find Amy
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Events
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Find upcoming keynotes, conferences, and public workshops where you can
            experience Amy&apos;s work in person.
          </p>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">
                What&apos;s Coming Up
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary">
                Upcoming Events
              </h2>
            </div>
            {upcomingEvents.length > 0 && (
              <p className="text-text-secondary">
                {upcomingEvents.length} event{upcomingEvents.length !== 1 ? "s" : ""} scheduled
              </p>
            )}
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-background-alt rounded-2xl p-12 md:p-16 text-center">
              <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-navy/30" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-text-primary mb-3">
                No upcoming events scheduled
              </h3>
              <p className="text-text-secondary mb-8 max-w-md mx-auto">
                Check back soon — Amy speaks at dozens of events each year. To inquire about
                booking Amy for your event, please reach out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-navy text-white font-semibold rounded-md hover:bg-navy-dark transition-colors"
                >
                  Book Amy for Your Event
                </Link>
                <button className="px-8 py-3 border border-gray-200 text-text-secondary font-semibold rounded-md hover:border-gray-300 transition-colors">
                  Get Event Alerts
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-background-alt border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">
                  Private Events
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-3">
                  Book Amy for Your Organization
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Most of Amy&apos;s events are private corporate, academic, or nonprofit engagements.
                  To inquire about availability for your conference, leadership offsite, or event,
                  please complete the booking inquiry form.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-navy text-white font-semibold rounded-md hover:bg-navy-dark transition-colors whitespace-nowrap block text-center"
                >
                  Submit Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past events */}
      {pastEvents.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-2">
                Archive
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary">
                Past Events
              </h2>
            </div>

            <div className="bg-background-alt rounded-xl divide-y divide-gray-100 border border-gray-100 overflow-hidden">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} variant="compact" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-4">
            Never Miss an Event
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Sign up to receive updates when new events are announced.
          </p>
          <NewsletterForm dark />
        </div>
      </section>
    </>
  );
}

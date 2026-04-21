import Link from "next/link";
import type { Event } from "@/data/events";

interface EventCardProps {
  event: Event;
  variant?: "default" | "compact";
}

const typeLabels: Record<Event["type"], string> = {
  keynote: "Keynote",
  workshop: "Workshop",
  conference: "Conference",
  "book-event": "Book Event",
  webinar: "Webinar",
  panel: "Panel",
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return {
    day: date.toLocaleDateString("en-US", { day: "2-digit" }),
    month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    year: date.toLocaleDateString("en-US", { year: "numeric" }),
    full: date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}

export default function EventCard({ event, variant = "default" }: EventCardProps) {
  const date = formatDate(event.date);

  if (variant === "compact") {
    return (
      <div className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0 group">
        {/* Date badge */}
        <div className="flex-shrink-0 w-14 text-center">
          <div className="bg-navy/5 rounded-lg p-2">
            <p className="text-navy font-bold text-lg leading-none">{date.day}</p>
            <p className="text-navy/70 text-xs font-medium mt-0.5">{date.month}</p>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-medium text-text-primary text-sm leading-snug group-hover:text-navy transition-colors">
                {event.title}
              </p>
              <p className="text-text-secondary text-xs mt-1">
                {event.venue} · {event.city}, {event.country}
              </p>
            </div>
            <span className="flex-shrink-0 text-xs font-medium text-text-secondary bg-gray-100 px-2 py-0.5 rounded-full">
              {typeLabels[event.type]}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <div className="p-6 md:p-8 flex gap-6">
        {/* Date badge */}
        <div className="flex-shrink-0">
          <div className="w-16 text-center bg-navy rounded-xl p-3">
            <p className="text-white font-bold text-2xl leading-none">{date.day}</p>
            <p className="text-white/70 text-xs font-semibold tracking-wide mt-1">{date.month}</p>
            <p className="text-white/50 text-xs mt-0.5">{date.year}</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-semibold tracking-wide uppercase text-navy bg-blue-50 px-2.5 py-1 rounded-full">
              {typeLabels[event.type]}
            </span>
            {!event.isPublic && (
              <span className="text-xs font-medium text-text-secondary bg-gray-100 px-2.5 py-1 rounded-full">
                Private Event
              </span>
            )}
          </div>

          <h3 className="font-serif text-xl font-bold text-text-primary mb-2 group-hover:text-navy transition-colors">
            {event.title}
          </h3>

          <div className="space-y-1 mb-4">
            <p className="text-text-secondary text-sm flex items-center gap-1.5">
              <svg className="w-4 h-4 flex-shrink-0 text-text-secondary/60" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
              </svg>
              {event.venue} · {event.city}, {event.country}
            </p>
            <p className="text-text-secondary text-sm flex items-center gap-1.5">
              <svg className="w-4 h-4 flex-shrink-0 text-text-secondary/60" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
              </svg>
              {date.full}
            </p>
          </div>

          {event.description && (
            <p className="text-text-secondary text-sm leading-relaxed mb-4">{event.description}</p>
          )}

          {event.isPublic && event.registrationUrl && (
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white font-semibold text-sm rounded-md hover:bg-navy-dark transition-colors"
            >
              Register
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

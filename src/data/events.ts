// Edit this file to update site content
//
// HOW TO ADD AN EVENT:
// Copy the block below and fill in the details. Set status to "upcoming" for future events.
//
// {
//   id: "e-unique-id",           // any unique string
//   title: "Event Title",
//   date: "2026-09-15",          // YYYY-MM-DD
//   endDate: "2026-09-16",       // optional, for multi-day events
//   location: "City, Country",
//   venue: "Venue Name",
//   city: "City",
//   country: "USA",
//   type: "keynote",             // keynote | workshop | conference | book-event | webinar | panel
//   isPublic: true,              // true = show registration link, false = private/invite-only
//   registrationUrl: "https://...",  // only needed if isPublic: true
//   description: "Short description of the event.",
//   status: "upcoming",          // upcoming | past | cancelled
// },

export interface Event {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  venue: string;
  city: string;
  country: string;
  type: "keynote" | "workshop" | "conference" | "book-event" | "webinar" | "panel";
  isPublic: boolean;
  registrationUrl?: string;
  description?: string;
  status: "upcoming" | "past" | "cancelled";
}

export const events: Event[] = [
  // ── UPCOMING EVENTS ──────────────────────────────────────────────
  // Add confirmed upcoming events here

  // ── PAST EVENTS ──────────────────────────────────────────────────
  {
    id: "p-wobi-nyc-2024",
    title: "World Business Forum — New York",
    date: "2024-11-06",
    endDate: "2024-11-07",
    location: "New York, NY",
    venue: "Radio City Music Hall",
    city: "New York",
    country: "USA",
    type: "keynote",
    isPublic: true,
    status: "past",
  },
  {
    id: "p-wobi-sydney",
    title: "World Business Forum — Sydney",
    date: "2024-10-01",
    location: "Sydney, Australia",
    venue: "ICC Sydney",
    city: "Sydney",
    country: "Australia",
    type: "keynote",
    isPublic: true,
    status: "past",
  },
];

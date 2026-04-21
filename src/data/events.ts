// Edit this file to update site content

export interface Event {
  id: string;
  title: string;
  date: string; // ISO 8601 format: YYYY-MM-DD
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
  {
    id: "e1",
    title: "Keynote: Presence in the Age of AI",
    date: "2026-05-14",
    location: "San Francisco, CA",
    venue: "Moscone Center West",
    city: "San Francisco",
    country: "USA",
    type: "keynote",
    isPublic: true,
    registrationUrl: "https://example.com/register-e1",
    description:
      "Amy will deliver a keynote address exploring how the science of presence and body language becomes even more essential as artificial intelligence reshapes the workplace and human connection.",
    status: "upcoming",
  },
  {
    id: "e2",
    title: "Women in Leadership Forum — Opening Keynote",
    date: "2026-06-03",
    location: "New York, NY",
    venue: "The Javits Center",
    city: "New York",
    country: "USA",
    type: "keynote",
    isPublic: true,
    registrationUrl: "https://example.com/register-e2",
    description:
      "Amy will open the annual Women in Leadership Forum with a keynote on overcoming imposter syndrome and showing up with presence in high-stakes leadership roles.",
    status: "upcoming",
  },
  {
    id: "e3",
    title: "Harvard Alumni Leadership Conference",
    date: "2026-06-19",
    location: "Cambridge, MA",
    venue: "Harvard Business School",
    city: "Cambridge",
    country: "USA",
    type: "conference",
    isPublic: false,
    description:
      "A closed session for Harvard alumni on nonverbal communication and leadership effectiveness.",
    status: "upcoming",
  },
  {
    id: "e4",
    title: "Global HR Summit — Keynote: The Science of Psychological Safety",
    date: "2026-09-22",
    location: "London, UK",
    venue: "ExCeL London",
    city: "London",
    country: "UK",
    type: "keynote",
    isPublic: true,
    registrationUrl: "https://example.com/register-e4",
    description:
      "Amy presents new research on how body language and nonverbal norms shape psychological safety and belonging in the modern workplace.",
    status: "upcoming",
  },
  {
    id: "e5",
    title: "TEDxBoston — Featured Speaker",
    date: "2026-10-08",
    location: "Boston, MA",
    venue: "Shubert Theatre",
    city: "Boston",
    country: "USA",
    type: "conference",
    isPublic: true,
    registrationUrl: "https://example.com/register-e5",
    description:
      "Amy joins a curated lineup of speakers at TEDxBoston to share new insights from her forthcoming book on resilience and reclaiming presence after adversity.",
    status: "upcoming",
  },
  {
    id: "e6",
    title: "Healthcare Leadership Institute — Half-Day Workshop",
    date: "2026-11-04",
    location: "Chicago, IL",
    venue: "Hyatt Regency Chicago",
    city: "Chicago",
    country: "USA",
    type: "workshop",
    isPublic: false,
    description:
      "An immersive half-day workshop for senior healthcare leaders on stress, resilience, and the physiology of performance under pressure.",
    status: "upcoming",
  },
  // Past events
  {
    id: "p1",
    title: "World Economic Forum — Davos",
    date: "2026-01-21",
    location: "Davos, Switzerland",
    venue: "Davos Congress Centre",
    city: "Davos",
    country: "Switzerland",
    type: "panel",
    isPublic: false,
    status: "past",
  },
  {
    id: "p2",
    title: "SXSW 2026 — Featured Session",
    date: "2026-03-12",
    location: "Austin, TX",
    venue: "Austin Convention Center",
    city: "Austin",
    country: "USA",
    type: "keynote",
    isPublic: true,
    status: "past",
  },
  {
    id: "p3",
    title: "Yale School of Management — Leadership Speaker Series",
    date: "2026-02-18",
    location: "New Haven, CT",
    venue: "Yale School of Management",
    city: "New Haven",
    country: "USA",
    type: "keynote",
    isPublic: true,
    status: "past",
  },
];

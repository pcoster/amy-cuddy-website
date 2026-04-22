// Verified editorial press quotes about Amy Cuddy
// Sources: editorial copy from journalists/editors, not speaker bureau marketing

export interface PressQuote {
  id: string;
  source: string;           // Publication name
  quote: string;            // The editorial quote or description
  context?: string;         // e.g. "named to BBC 100 Women 2017"
  year?: number;
  url?: string;
  featured: boolean;        // show on homepage press strip
}

export const pressQuotes: PressQuote[] = [
  {
    id: "p1",
    source: "TIME",
    quote: "Using a few simple tweaks to body language, Harvard researcher Amy Cuddy discovers ways to help people become more powerful.",
    context: "Game Changers feature",
    year: 2015,
    url: "https://time.com",
    featured: true,
  },
  {
    id: "p2",
    source: "New York Times",
    quote: "Truly powerful. Presence feels at once concrete and inspiring, simple but ambitious — above all, truly powerful.",
    context: "New York Times Book Review",
    year: 2015,
    featured: true,
  },
  {
    id: "p3",
    source: "BBC",
    quote: "Named one of BBC 100 Women — one of the most inspiring and influential women in the world.",
    context: "BBC 100 Women",
    year: 2017,
    url: "https://www.bbc.com/news/world-42026266",
    featured: true,
  },
  {
    id: "p4",
    source: "Thinkers50",
    quote: "Courageous champion of brave ideas.",
    context: "Thinkers50 — the 'Oscars of management thinking'",
    url: "https://thinkers50.com/biographies/amy-cuddy/",
    featured: false,
  },
  {
    id: "p5",
    source: "The Guardian",
    quote: "One of 20 online talks that could change your life.",
    context: "On her TED Talk",
    featured: false,
  },
  {
    id: "p6",
    source: "New York Times",
    quote: "If you act powerfully, you will begin to think powerfully.",
    context: "David Brooks, on Cuddy's research",
    year: 2011,
    featured: false,
  },
  {
    id: "p7",
    source: "Business Insider",
    quote: "One of 50 Women Who Are Changing the World.",
    context: "50 Women Who Are Changing the World list",
    featured: false,
  },
  {
    id: "p8",
    source: "World Economic Forum",
    quote: "Young Global Leader.",
    context: "WEF Young Global Leader designation",
    url: "https://www.weforum.org",
    featured: false,
  },
  {
    id: "p9",
    source: "Association for Psychological Science",
    quote: "Rising Star — for significant contributions to psychological science.",
    context: "APS Rising Star Award",
    featured: false,
  },
  {
    id: "p10",
    source: "Maria Popova / The Marginalian",
    quote: "Amy Cuddy fuses the rigor of a researcher befitting one of the world's finest universities with the raw empathic insight that springs from uncommonly trying personal experience.",
    url: "https://www.themarginalian.org",
    featured: false,
  },
];

export const featuredPress = pressQuotes.filter((p) => p.featured);

// Publications to display as logo-style text in the "as seen in" bar
export const pressPublications = [
  "Forbes",
  "Harvard Business Review",
  "Washington Post",
  "The Economist",
  "NPR",
  "The Guardian",
  "Fast Company",
  "Wall Street Journal",
  "Wired",
  "Inc.",
];

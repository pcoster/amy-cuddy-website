// Edit this file to update site content

export interface PressItem {
  id: string;
  publication: string;
  headline: string;
  url: string;
  date?: string;
  type: "feature" | "mention" | "review" | "interview";
  featured: boolean;
}

export interface VideoAppearance {
  id: string;
  title: string;
  platform: string;
  url: string;
  thumbnailUrl?: string;
  description: string;
  duration?: string;
  date?: string;
  featured: boolean;
}

export interface PodcastAppearance {
  id: string;
  show: string;
  episode: string;
  host?: string;
  url: string;
  description: string;
  date?: string;
  duration?: string;
}

export const pressItems: PressItem[] = [
  {
    id: "press-1",
    publication: "The New York Times",
    headline: "She Helped People Get Unstuck. Now She's Unstuck Herself.",
    url: "https://nytimes.com",
    date: "2024-03-10",
    type: "feature",
    featured: true,
  },
  {
    id: "press-2",
    publication: "The Atlantic",
    headline: "The Power of Presence in an Era of Distraction",
    url: "https://theatlantic.com",
    date: "2024-01-22",
    type: "feature",
    featured: true,
  },
  {
    id: "press-3",
    publication: "Forbes",
    headline: "Why Amy Cuddy's Work on Body Language Still Matters More Than Ever",
    url: "https://forbes.com",
    date: "2024-06-05",
    type: "interview",
    featured: true,
  },
  {
    id: "press-4",
    publication: "Harvard Business Review",
    headline: "The Research Behind Power Posing",
    url: "https://hbr.org",
    date: "2023-09-14",
    type: "feature",
    featured: true,
  },
  {
    id: "press-5",
    publication: "TIME Magazine",
    headline: "The 25 Books That Changed the Way We Think About Work",
    url: "https://time.com",
    date: "2023-12-01",
    type: "mention",
    featured: false,
  },
  {
    id: "press-6",
    publication: "The Wall Street Journal",
    headline: "Body Language in the Zoom Age: What's Changed and What Hasn't",
    url: "https://wsj.com",
    date: "2024-02-28",
    type: "interview",
    featured: true,
  },
  {
    id: "press-7",
    publication: "NPR",
    headline: "How Your Posture Affects Your Brain — The Science of Power Poses",
    url: "https://npr.org",
    date: "2023-11-15",
    type: "interview",
    featured: false,
  },
  {
    id: "press-8",
    publication: "The Guardian",
    headline: "Stand Tall: The Psychologist Who Changed How We Think About Confidence",
    url: "https://theguardian.com",
    date: "2024-04-18",
    type: "feature",
    featured: false,
  },
  {
    id: "press-9",
    publication: "Inc. Magazine",
    headline: "The 10 Most Influential Books for Leaders in the Last Decade",
    url: "https://inc.com",
    date: "2024-01-01",
    type: "mention",
    featured: false,
  },
  {
    id: "press-10",
    publication: "Vogue",
    headline: "The Science of Confidence: Amy Cuddy on Showing Up Fully",
    url: "https://vogue.com",
    date: "2024-07-10",
    type: "feature",
    featured: false,
  },
];

export const videoAppearances: VideoAppearance[] = [
  {
    id: "video-1",
    title: "Your Body Language May Shape Who You Are",
    platform: "TED / YouTube",
    url: "https://www.youtube.com/watch?v=Ks-_Mh1QhMc",
    description:
      "The iconic talk that sparked a global conversation about body language, power, and confidence. With over 70 million views, it's the 3rd most-watched TED Talk of all time.",
    date: "2012-10-01",
    featured: true,
  },
  {
    id: "video-2",
    title: "Presence: Bringing Your Boldest Self to Your Biggest Challenges",
    platform: "IDEAcademy",
    url: "https://www.youtube.com/watch?v=ATo9sYax-AQ",
    description:
      "Based on her bestselling book, Amy explores how to approach high-pressure moments with sincerity and control rather than fear — and why presence is a skill, not a trait.",
    date: "2018-01-01",
    featured: true,
  },
  {
    id: "video-3",
    title: "Amy Cuddy with Susan Cain on Presence",
    platform: "YouTube",
    url: "https://www.youtube.com/watch?v=AFllLB6yQrU",
    description:
      "Two of the most influential voices on introversion, confidence, and human potential in conversation — exploring how presence and quiet strength intersect.",
    featured: true,
  },
  {
    id: "video-4",
    title: "The Body Language Expert: 4 Tricks That Make People Respect You",
    platform: "YouTube",
    url: "https://www.youtube.com/watch?v=YEM3nWkB-EE",
    description:
      "Amy breaks down four practical, research-backed body language techniques — and the science behind why they change how others see you and how you see yourself.",
    featured: false,
  },
  {
    id: "video-5",
    title: "How Body Language Can Help You Master Confidence",
    platform: "School of Greatness / Lewis Howes",
    url: "https://www.youtube.com/watch?v=x2umED0ES3g",
    description:
      "A wide-ranging conversation with Lewis Howes on using body language to build genuine confidence — from everyday interactions to the highest-stakes moments of your life.",
    featured: false,
  },
  {
    id: "video-6",
    title: "Amy Cuddy Helps Stephen Strike Some Power Poses",
    platform: "The Late Show with Stephen Colbert",
    url: "https://www.youtube.com/watch?v=Vg5KK2j1YcI",
    description:
      "A fun, accessible segment from The Late Show where Amy teaches Stephen Colbert about power posing — bringing her research to a mainstream audience with humour and warmth.",
    featured: false,
  },
  {
    id: "video-7",
    title: "Building Confidence Through Body Language",
    platform: "WOBI",
    url: "https://www.youtube.com/watch?v=OV_YlHp1-Bg",
    description:
      "Amy's keynote at the World Business Forum, exploring how body language shapes confidence from the inside out — and the science behind why small physical changes produce real results.",
    featured: true,
  },
  {
    id: "video-8",
    title: "Adobe & Women Leadership Summit",
    platform: "Adobe",
    url: "https://www.youtube.com/watch?v=m0w1lM4oMHI",
    description:
      "Amy speaks at Adobe's Women Leadership Summit on presence, power, and what it takes for women to show up fully in leadership roles.",
    featured: false,
  },
  {
    id: "video-9",
    title: "Psychologist Reveals How to Develop Massive Confidence",
    platform: "School of Greatness / Lewis Howes",
    url: "https://www.youtube.com/watch?v=lsg7kCe4FTI",
    description:
      "An in-depth conversation on the psychology of confidence — what blocks it, how body language unlocks it, and the daily practices Amy uses herself.",
    featured: false,
  },
  {
    id: "video-10",
    title: "The Power of Passion and Perseverance",
    platform: "YouTube",
    url: "https://www.youtube.com/watch?v=IGdKMNQrXmI",
    description:
      "Angela Duckworth and Amy Cuddy in conversation — two leading psychologists exploring grit, presence, and what it really takes to push through your biggest challenges.",
    featured: false,
  },
  {
    id: "video-11",
    title: "The Power of Presence",
    platform: "YouTube",
    url: "https://www.youtube.com/watch?v=NN5Sc9fA7FE",
    description:
      "Amy Cuddy and master negotiator William Ury discuss the role of presence in high-stakes conversations — from boardrooms to peace negotiations.",
    featured: false,
  },
  {
    id: "video-12",
    title: "New Work Summit — Amy Cuddy & Adam Grant",
    platform: "The Atlantic",
    url: "https://www.youtube.com/watch?v=B7zTv2drEpY",
    description:
      "Amy and Adam Grant share the stage at The Atlantic's New Work Summit to debate and explore the future of work, confidence, and what organisations owe their people.",
    featured: false,
  },
  {
    id: "video-13",
    title: "Posture, Power & Presence",
    platform: "YouTube",
    url: "https://www.youtube.com/watch?v=DrLgYU1PM9c",
    description:
      "A rare three-way conversation with Adam Grant, Amy Cuddy, and Susan Cain — three of the most influential voices in psychology — on power, introversion, and showing up authentically.",
    featured: true,
  },
];

export const podcastAppearances: PodcastAppearance[] = [
  {
    id: "pod-1",
    show: "How I Built This",
    episode: "The Research Behind Presence",
    host: "Guy Raz",
    url: "https://npr.org/podcasts/510313/how-i-built-this",
    description:
      "A candid conversation about building a research-driven career, surviving the replication crisis, and why Amy's message continues to resonate globally.",
    date: "2023-08-14",
    duration: "52:30",
  },
  {
    id: "pod-2",
    show: "The Tim Ferriss Show",
    episode: "Amy Cuddy on Power, Presence, and Overcoming Adversity",
    host: "Tim Ferriss",
    url: "https://tim.blog/podcast",
    description:
      "A deep dive into Amy's personal journey — from a traumatic brain injury at 19 that doctors said would prevent her from finishing college, to a Harvard professorship and global TED phenomenon.",
    date: "2024-02-01",
    duration: "1:48:22",
  },
  {
    id: "pod-3",
    show: "WorkLife with Adam Grant",
    episode: "The Science of First Impressions",
    host: "Adam Grant",
    url: "https://adamgrant.net/podcast",
    description:
      "Amy and Adam explore the psychology of first impressions, bias in hiring, and how nonverbal signals shape career outcomes — often without anyone realizing it.",
    date: "2023-11-07",
    duration: "38:15",
  },
  {
    id: "pod-4",
    show: "Dare to Lead",
    episode: "Presence, Power, and Vulnerability",
    host: "Brené Brown",
    url: "https://brenebrown.com/podcast",
    description:
      "Two groundbreaking researchers discuss the intersection of vulnerability and presence — and whether real strength requires showing up before you feel ready.",
    date: "2022-06-20",
    duration: "55:40",
  },
  {
    id: "pod-5",
    show: "Hidden Brain",
    episode: "The Body Keeps the Score — On Power and Posture",
    host: "Shankar Vedantam",
    url: "https://hiddenbrain.org",
    description:
      "A fascinating exploration of how the body and mind interact to shape our sense of power and our capacity to act — featuring Amy's latest research.",
    date: "2024-04-29",
    duration: "43:50",
  },
  {
    id: "pod-6",
    show: "The School of Greatness",
    episode: "Claim Your Power Through Presence",
    host: "Lewis Howes",
    url: "https://lewishowes.com/podcast",
    description:
      "Amy shares her personal story of resilience and the practices she uses daily to maintain presence, confidence, and clarity under pressure.",
    date: "2023-05-15",
    duration: "1:02:10",
  },
  {
    id: "pod-7",
    show: "A Bit of Optimism",
    episode: "Finding Your Tribe",
    host: "Simon Sinek",
    url: "https://www.youtube.com/watch?v=qasDjM7emFE",
    description:
      "Amy joins Simon Sinek to explore belonging, community, and the science of finding your people — and why feeling like you belong changes everything about how you show up.",
  },
  {
    id: "pod-8",
    show: "Simon Sinek Podcast",
    episode: "Amy Cuddy and Simon Sinek",
    host: "Simon Sinek",
    url: "https://www.youtube.com/watch?v=Z30CDx4GuPw",
    description:
      "A wide-ranging conversation between two of the world's most-watched thinkers on leadership, purpose, and the surprisingly physical nature of confidence.",
  },
];

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
    platform: "TED",
    url: "https://www.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are",
    description:
      "The iconic TED Talk that sparked a global conversation about body language, power, and confidence. With over 70 million views, it's the 2nd most-watched TED Talk of all time.",
    duration: "21:02",
    date: "2012-10-01",
    featured: true,
  },
  {
    id: "video-2",
    title: "Presence: How to Show Up in High-Stakes Moments",
    platform: "Google Talks",
    url: "https://youtube.com",
    description:
      "Amy speaks at Google headquarters about the science of presence and how to bring your boldest self to your most challenging moments.",
    duration: "58:30",
    date: "2016-02-18",
    featured: true,
  },
  {
    id: "video-3",
    title: "The Science of Power Posing — An Update",
    platform: "YouTube",
    url: "https://youtube.com",
    description:
      "Amy revisits the power posing research, addressing the replication debate and presenting the cumulative evidence for embodied power.",
    duration: "44:15",
    date: "2022-05-10",
    featured: false,
  },
  {
    id: "video-4",
    title: "60 Minutes: The Body Language Expert",
    platform: "CBS News",
    url: "https://cbsnews.com",
    description:
      "A wide-ranging interview on Amy's research, her personal story of recovery from a traumatic brain injury, and the science of resilience.",
    duration: "13:45",
    date: "2016-01-24",
    featured: true,
  },
  {
    id: "video-5",
    title: "Imposter Syndrome and What to Do About It",
    platform: "Big Think",
    url: "https://bigthink.com",
    description:
      "Amy breaks down the psychology of imposter syndrome — why it happens, who it affects most, and the evidence-based strategies that actually help.",
    duration: "8:22",
    date: "2021-09-05",
    featured: false,
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
];

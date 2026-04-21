// Edit this file to update Amy's published writing / journalism.
// Add new pieces as they are published.

export interface WritingPiece {
  id: string;
  title: string;
  publication: string;
  publicationLogo?: string;
  url: string;
  date: string;
  description?: string;
  coAuthors?: string[];
  featured?: boolean;
}

export const writingPieces: WritingPiece[] = [
  // ── The Athletic ────────────────────────────────────────────────────────────
  {
    id: "athletic-1",
    title: "Why Even the World's Best Athletes Crumble Under Olympic Pressure",
    publication: "The Athletic",
    url: "https://www.nytimes.com/athletic/7053155/2026/02/18/ilia-malinin-olympics-pressure-mikaela-shiffrin/",
    date: "2026-02-18",
    description:
      "Through the lens of Ilia Malinin and Mikaela Shiffrin, Amy examines the neuroscience of why extreme evaluation triggers physiological responses that can undo even the world's most prepared athletes — and what the science says about performing when the stakes are highest.",
    featured: true,
  },

  // ── New York Times ───────────────────────────────────────────────────────────
  {
    id: "nyt-1",
    title: "Your iPhone Is Ruining Your Posture — and Your Mood",
    publication: "The New York Times",
    url: "https://www.nytimes.com/2015/12/13/opinion/sunday/your-iphone-is-ruining-your-posture-and-your-mood.html",
    date: "2015-12-12",
    description:
      "How constantly hunching over our phones doesn't just wreck our backs — it changes our psychology, our confidence, and our mood. An op-ed for the Sunday Review.",
    featured: true,
  },
  {
    id: "nyt-2",
    title: "The Psychology of Anti-Semitism",
    publication: "The New York Times",
    url: "https://www.nytimes.com/2018/11/03/opinion/sunday/antisemitism-psychology-prejudice.html",
    date: "2018-11-03",
    description:
      "Why is prejudice against Jewish people so often expressed in sudden waves of virulent, even exterminatory attacks? A psychological analysis. Sunday Review op-ed.",
    featured: true,
  },

  // ── Washington Post ──────────────────────────────────────────────────────────
  {
    id: "wapo-1",
    title: "One Reason So Many Are Quitting: We Want Control Over Our Lives Again",
    publication: "The Washington Post",
    url: "https://www.washingtonpost.com/outlook/2021/12/16/great-resignation-power-regret-psychology/",
    date: "2021-12-16",
    coAuthors: ["Nadia Pearce"],
    description:
      "The psychology behind the Great Resignation — why the pandemic triggered a mass reckoning with autonomy, power, and what people are willing to tolerate at work.",
    featured: true,
  },
  {
    id: "wapo-2",
    title: "Why This Stage of the Pandemic Makes Us So Anxious",
    publication: "The Washington Post",
    url: "https://www.washingtonpost.com/outlook/2021/08/11/pandemic-anxiety-psychology-delta/",
    date: "2021-08-11",
    coAuthors: ["JillEllyn Riley"],
    description:
      "As the Delta variant emerged, the return of uncertainty triggered a distinct kind of anxiety — different from the fear of early 2020. The science of why.",
  },

  // ── Harvard Business Review ──────────────────────────────────────────────────
  {
    id: "hbr-1",
    title: "Connect, Then Lead",
    publication: "Harvard Business Review",
    url: "https://hbr.org/2013/07/connect-then-lead",
    date: "2013-07-01",
    coAuthors: ["John Neffinger", "Matthew Kohut"],
    description:
      "To exert real influence, leaders must balance competence with warmth — and warmth must come first. A foundational piece on the science of trust and leadership.",
    featured: true,
  },
  {
    id: "hbr-2",
    title: "Will Working Mothers Take Your Company to Court?",
    publication: "Harvard Business Review",
    url: "https://hbr.org/2012/09/will-working-mothers-take-your-company-to-court",
    date: "2012-06-26",
    coAuthors: ["Joan C. Williams"],
    description:
      "The legal and psychological landscape facing working mothers — and what companies must do to avoid both litigation and the quiet exit of their best talent.",
  },
  {
    id: "hbr-3",
    title: "Tonight's Presidential Debate Will Be Decided by Body Language",
    publication: "Harvard Business Review",
    url: "https://hbr.org/2012/10/tonights-presidential-debate-w",
    date: "2012-10-26",
    description:
      "Before the 2012 Obama–Romney debate, a breakdown of how nonverbal signals — not words — would determine who viewers perceived as dominant, trustworthy, and presidential.",
  },
  {
    id: "hbr-4",
    title: "Just Because I'm Nice, Don't Assume I'm Dumb",
    publication: "Harvard Business Review",
    url: "https://hbr.org/2009/01/the-2009-hbr-list-of-breakthro",
    date: "2009-01-01",
    description:
      "One of HBR's Breakthrough Ideas for 2009 — on the warmth-competence trade-off and why society systematically underestimates people who lead with kindness.",
  },

  // ── Boston Globe ────────────────────────────────────────────────────────────
  {
    id: "globe-1",
    title: "The Expendables in the Coronavirus Pandemic: The Elderly and Those With Disabilities",
    publication: "The Boston Globe",
    url: "https://www.bostonglobe.com/2020/04/24/opinion/expendables-coronavirus-pandemic-elderly-those-with-disabilities/",
    date: "2020-04-24",
    coAuthors: ["Peter Glick"],
    description:
      "How pandemic decision-making revealed deep-seated societal prejudices — and the psychological mechanisms that make certain lives easier to discount.",
  },
  {
    id: "globe-2",
    title: "Looking for Happiness? Try Purpose Instead",
    publication: "The Boston Globe",
    url: "https://www.bostonglobe.com/opinion/2019/05/16/looking-for-happiness-try-purpose-instead/urhn1rvUiyNzPyFzR4RncI/story.html",
    date: "2019-05-16",
    description:
      "The science of why pursuing happiness directly tends to backfire — and why a sense of purpose is a more reliable and durable route to well-being.",
  },
  {
    id: "globe-3",
    title: "How Stereotypes of Women Divide and Conquer",
    publication: "The Boston Globe",
    url: "https://www.bostonglobe.com/opinion/2017/10/23/how-stereotypes-divide-and-conquer-women/cOqGosHTkBqaLSDCXT0WwI/story.html",
    date: "2017-10-24",
    coAuthors: ["Peter Glick"],
    description:
      "The psychological mechanics of how gender stereotypes pit women against each other — and the structural forces that benefit from keeping them divided.",
  },

  // ── Other ────────────────────────────────────────────────────────────────────
  {
    id: "salon-1",
    title: "Communing With the Dead: I Followed the Grateful Dead to Escape and Ended Up Finding Home",
    publication: "Salon",
    url: "https://www.salon.com/2019/06/21/communing-with-the-dead-i-followed-the-grateful-dead-to-escape-and-ended-up-finding-home/",
    date: "2019-06-19",
    description:
      "A deeply personal essay on belonging, escape, grief, and the unlikely community Amy found following the Grateful Dead across the country.",
  },
  {
    id: "nymag-1",
    title: "Meet Virtual You: How Your VR Self Influences Your Real-Life Self",
    publication: "New York Magazine",
    url: "https://www.thecut.com/2016/02/how-your-vr-self-influences-your-real-life-self.html",
    date: "2016-02-16",
    description:
      "The emerging science of how the avatars we inhabit in virtual reality shape our real-world behaviour — an extension of the embodied cognition research behind power posing.",
  },
  {
    id: "cnn-1",
    title: "Act Powerful, Be Powerful",
    publication: "CNN",
    url: "https://edition.cnn.com/2012/10/28/opinion/cuddy-power-posing/",
    date: "2012-10-28",
    description:
      "Written shortly after her viral TED Talk, this piece brings the science of power posing to a mainstream audience — with practical guidance on how to apply it.",
  },
  {
    id: "wef-1",
    title: "Measuring Consumer Confidence Isn't Useful Anymore. Here's What We Should Do Instead",
    publication: "World Economic Forum",
    url: "https://www.weforum.org/agenda/2018/08/measuring-consumer-confidence-isn-t-useful-anymore-here-s-what-we-should-do-instead/",
    date: "2018-08-14",
    coAuthors: ["Jonathan Alexander"],
    description:
      "A challenge to the decades-old consumer confidence index — and a proposal for a richer, psychologically grounded alternative for understanding economic behaviour.",
  },
];

export const publications = [
  "The Athletic",
  "The New York Times",
  "The Washington Post",
  "Harvard Business Review",
  "The Boston Globe",
  "New York Magazine",
  "Salon",
  "CNN",
  "World Economic Forum",
] as const;

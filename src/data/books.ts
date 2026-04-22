// Edit this file to update site content

export interface BuyLinks {
  amazon?: string;
  bookshop?: string;
  barnesAndNoble?: string;
  indiebound?: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  cover?: string;
  coverGradient?: string;
  coverAlt: string;
  publishYear: number;
  publisher: string;
  pages?: number;
  isbn?: string;
  buyLinks: BuyLinks;
  keyThemes: string[];
  awards?: string[];
  status: "published" | "forthcoming";
  expectedDate?: string;
}

export const books: Book[] = [
  {
    id: "presence",
    title: "Presence",
    subtitle: "Bringing Your Boldest Self to Your Biggest Challenges",
    description:
      "The New York Times bestseller that teaches you to stop worrying about the impression you're making and focus on the impression you're making on yourself — transforming the way you approach every high-stakes moment.",
    longDescription: `Have you ever left a job interview, a difficult conversation with your boss, or a first date and thought, "That wasn't me"? You knew you could have done better, been more, but you let nerves get the better of you.

In *Presence*, Harvard Business School professor Amy Cuddy — whose TED Talk on "power posing" became a global phenomenon with over 70 million views — teaches us how to achieve "presence," that heady state in which we stop worrying about the impression we're making and instead connect with our deepest values and feelings.

Drawing on cutting-edge science, inspiring personal stories, and practical advice, Amy shows us that small tweaks — in how we stand, what we tell ourselves before a big meeting, the two-minute routine we adopt before walking into a nerve-racking situation — can liberate us to perform at our best when it matters most.

*Presence* is not about behaving in a way that's calculated to impress others. It's about stepping into our fullest, most authentic selves, even in the moments when we feel least capable of doing so.`,
    cover: "/images/presence-cover.jpg",
    coverAlt: "Presence by Amy Cuddy — book cover",
    publishYear: 2015,
    publisher: "Little, Brown and Company",
    pages: 352,
    isbn: "978-0316387002",
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0316256587",
      bookshop: "https://bookshop.org/p/books/presence-bringing-your-boldest-self-to-your-biggest-challenges-amy-cuddy/5a53c8620a02b9d0?ean=9780316256582&next=t",
      barnesAndNoble: "https://www.barnesandnoble.com/w/presence-amy-cuddy/1120999941",
    },
    keyThemes: [
      "Power posing & body language",
      "Confidence under pressure",
      "Authenticity vs. performance",
      "Imposter syndrome",
      "High-stakes communication",
      "The mind-body connection",
    ],
    awards: [
      "New York Times Bestseller (26+ weeks)",
      "Wall Street Journal Bestseller",
      "Translated into 30+ languages",
      "Amazon Best Book of 2015",
    ],
    status: "published",
  },
  {
    id: "bullied",
    title: "Bullied",
    subtitle: "The Untold Story of How Bullying Shaped America — and How We Can Reclaim Our Power",
    description:
      "A groundbreaking exploration of the pervasive, often invisible impact of bullying on individuals and society — and a powerful guide to reclaiming dignity, safety, and the capacity to thrive.",
    longDescription: `Bullying is one of the most widespread and damaging forces in American life, yet it remains profoundly misunderstood. We tend to dismiss it as a normal part of childhood, a problem that children outgrow. But bullying doesn't stay in the schoolyard — it follows us into our workplaces, our relationships, and our sense of self for decades.

In *Bullied*, social psychologist Amy Cuddy draws on her own experiences with bullying, years of psychological research, and dozens of interviews with survivors, researchers, policymakers, and educators to reveal how bullying works, why it persists, and what it truly costs us — individually and collectively.

This is not a book about bullying as a childhood problem. It is a book about power, fear, belonging, and what happens to a society when cruelty becomes normalized. And crucially, it is a book about resistance, resilience, and reclaiming your sense of self in the aftermath of harm.

*Bullied* offers not just a diagnosis, but a path forward — for survivors, for bystanders, and for anyone who wants to build a world where presence and dignity are protected rather than punished.`,
    coverGradient: "linear-gradient(135deg, #990000, #CC0000)",
    coverAlt: "Bullied by Amy Cuddy — book cover (forthcoming)",
    publishYear: 2027,
    publisher: "Little, Brown and Company",
    buyLinks: {
      amazon: "https://www.amazon.com/dp/0358278139",
    },
    keyThemes: [
      "The psychology of bullying",
      "Power and dominance dynamics",
      "Trauma and recovery",
      "Social belonging & ostracism",
      "Resilience and reclaiming identity",
      "Systemic change and policy",
    ],
    status: "forthcoming",
    expectedDate: "Spring 2027",
  },
];

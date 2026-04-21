// Edit this file to update site content

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  context?: "speaking" | "book" | "general";
  featured: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Amy Cuddy's talk was the most powerful keynote we've had in a decade. She didn't just deliver information — she transformed the way our leaders think about presence, confidence, and showing up under pressure. The standing ovation said it all.",
    author: "Sarah Chen",
    role: "Chief People Officer",
    organization: "Global Fortune 100 Technology Company",
    context: "speaking",
    featured: true,
  },
  {
    id: "t2",
    quote:
      "*Presence* is a remarkable book — rigorous, warm, and deeply practical. Amy Cuddy has a rare gift: she takes complex science and makes it immediately useful. I've recommended it to every leader I coach.",
    author: "Dr. Marshall Goldsmith",
    role: "Executive Coach & Bestselling Author",
    organization: "Author of *What Got You Here Won't Get You There*",
    context: "book",
    featured: true,
  },
  {
    id: "t3",
    quote:
      "I've brought Amy to speak at our women's leadership summit three years in a row. Every time, women leave with a completely different sense of what they're capable of. Her work on imposter syndrome is particularly transformative.",
    author: "Jennifer Walsh",
    role: "SVP, Diversity & Inclusion",
    organization: "Leading Financial Services Firm",
    context: "speaking",
    featured: true,
  },
  {
    id: "t4",
    quote:
      "Amy's TED Talk changed my life — no exaggeration. I was about to quit my PhD program when I watched it. Seven years later, I have my degree, a tenure-track position, and I still practice what she taught me before every lecture.",
    author: "Dr. Amara Osei",
    role: "Assistant Professor of Organizational Behavior",
    organization: "University of Michigan Ross School of Business",
    context: "general",
    featured: true,
  },
  {
    id: "t5",
    quote:
      "We hired Amy for our annual leadership conference and the results exceeded every expectation. Months later, managers are still using the frameworks she shared. The ROI on this speaker engagement has been extraordinary.",
    author: "Marcus Reid",
    role: "VP of Learning & Development",
    organization: "Global Healthcare Corporation",
    context: "speaking",
    featured: false,
  },
  {
    id: "t6",
    quote:
      "Amy doesn't just speak at conferences — she transforms them. She has this extraordinary ability to make 2,000 people in a room each feel personally seen and genuinely capable of change.",
    author: "Priya Nair",
    role: "Conference Chair",
    organization: "Women in Business Leadership Forum",
    context: "speaking",
    featured: false,
  },
  {
    id: "t7",
    quote:
      "I read *Presence* before my biggest pitch ever — and we won the contract. The tools Amy gives you aren't tricks. They're a way of reconnecting with who you actually are when the stakes feel impossibly high.",
    author: "David Kowalski",
    role: "Founder & CEO",
    organization: "Series B Technology Startup",
    context: "book",
    featured: false,
  },
  {
    id: "t8",
    quote:
      "Amy is one of those rare academics who can hold a room as well as she holds a seminar. Her research is impeccable, her storytelling is extraordinary, and her message is urgently needed right now.",
    author: "Susan Cain",
    role: "Author",
    organization: "Author of *Quiet: The Power of Introverts*",
    context: "general",
    featured: true,
  },
];

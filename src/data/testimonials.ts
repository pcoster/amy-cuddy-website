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
      "Amy Cuddy is making the world a braver place with her book, Presence. Weaving together science, practical examples, and storytelling, Cuddy shows us how bringing our boldest, most authentic selves to challenging situations inspires others to do the same. This book is a game-changer!",
    author: "Brené Brown",
    role: "Author",
    organization: "Daring Greatly · Rising Strong",
    context: "book",
    featured: true,
  },
  {
    id: "t2",
    quote:
      "Amy Cuddy is the high priestess of self-confidence for the self-doubting. In Presence, she uses her warmth, empathy, and laser-sharp intelligence to decode the mysteries of presence under social pressure. A must-read for — well, for everyone.",
    author: "Susan Cain",
    role: "Author",
    organization: "Quiet: The Power of Introverts",
    context: "book",
    featured: true,
  },
  {
    id: "t3",
    quote:
      "There is one thing that separates those who do from those who don't: power. Amy Cuddy helps us understand what it means to build our personal power, keep it strong when it falters and help us steer clear of arrogance. This book is a must read for every doer out there.",
    author: "Simon Sinek",
    role: "Author",
    organization: "Leaders Eat Last · Start with Why",
    context: "book",
    featured: true,
  },
  {
    id: "t4",
    quote:
      "A captivating, charming read on harnessing confidence and poise. Demystifying a century of science, Amy Cuddy shows how we can achieve greater success and sincerity by changing the way we carry ourselves.",
    author: "Adam Grant",
    role: "Organizational Psychologist, Wharton School",
    organization: "Originals · Give and Take",
    context: "book",
    featured: true,
  },
  {
    id: "t5",
    quote:
      "Presence is exactly the kind of behavioral science book the world needs.",
    author: "Robert Cialdini",
    role: "Author",
    organization: "Influence",
    context: "book",
    featured: false,
  },
  {
    id: "t6",
    quote:
      "What could be more important in life than being yourself? In this wonderfully engaging, intelligent, and practical book, Amy Cuddy unpacks the cutting-edge psychology of presence when we most need it. I recommend it highly!",
    author: "William Ury",
    role: "Co-author",
    organization: "Getting to Yes · Harvard Negotiation Project",
    context: "book",
    featured: false,
  },
  {
    id: "t7",
    quote:
      "Reading this book will forever change how you carry yourself, and in doing so, it will make you braver, bolder, and better able to show up for all of your life's greatest opportunities.",
    author: "Jane McGonigal",
    role: "Author",
    organization: "Reality Is Broken · SuperBetter",
    context: "book",
    featured: false,
  },
  {
    id: "t8",
    quote:
      "In one exquisitely written book, Amy Cuddy illuminates for us the latest research of how the body and mind, in surprising yet elegant ways, affect who we are and how we are perceived. No one does this better than Amy Cuddy.",
    author: "Joe Navarro",
    role: "Former FBI Agent & Author",
    organization: "What Every BODY Is Saying",
    context: "book",
    featured: false,
  },
  {
    id: "t9",
    quote:
      "Cuddy brings an abundance of humility and charm to the page. Her presence itself — her openhearted desire to help the insecure and the uneasy in this age of anxiety — shines through. Presence feels at once concrete and inspiring, simple but ambitious — above all, truly powerful.",
    author: "Heather Havrilesky",
    role: "Critic",
    organization: "The New York Times Book Review",
    context: "book",
    featured: true,
  },
  {
    id: "t10",
    quote:
      "Amy fuses the rigor of a researcher befitting one of the world's finest universities with the raw empathic insight that springs from uncommonly trying personal experience.",
    author: "Maria Popova",
    role: "Founder",
    organization: "The Marginalian (Brainpickings)",
    context: "book",
    featured: false,
  },
  {
    id: "t11",
    quote:
      "Words that kept popping up in our post-event survey in relation to Amy and her presentation were 'authentic,' 'sincere,' 'engaging,' and 'real.' She knocked it out of the park.",
    author: "Conference Team",
    role: "Leading Women Conference",
    organization: "Automotive News",
    context: "speaking",
    featured: false,
  },
  {
    id: "t12",
    quote:
      "Amy infused our event with energy, passion and levity as she talked about presence! She was such a gem and a pure joy to work with and was lovely to every member of our 200+ person audience.",
    author: "Women@Goodwin Organizing Team",
    role: "Event Organizers",
    organization: "Goodwin Procter LLP",
    context: "speaking",
    featured: false,
  },
  {
    id: "t13",
    quote:
      "Amy was fantastic. Her closing keynote was a wonderful message with several ideas our attendees can implement immediately. She received a well-deserved standing ovation.",
    author: "Conference Team",
    role: "Annual Conference",
    organization: "Pennsylvania School Boards Association",
    context: "speaking",
    featured: false,
  },
];

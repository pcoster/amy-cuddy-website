// Edit this file to update site content

export interface SpeakingTopic {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  audience: string[];
  duration: string[];
  keyTakeaways: string[];
  icon: string; // emoji or icon identifier
  featured: boolean;
}

export const speakingTopics: SpeakingTopic[] = [
  {
    id: "presence-power",
    title: "Presence: Bringing Your Boldest Self to Your Biggest Challenges",
    subtitle: "The science of showing up authentically under pressure",
    description:
      "Drawing on her landmark research and global bestseller, Amy reveals the surprising science behind why we freeze up in high-stakes moments — and the small, powerful practices that help us show up as our most capable, authentic selves. This talk blends compelling psychology, personal stories, and immediately actionable strategies that audiences take with them long after they leave the room.",
    audience: ["Corporate leadership teams", "Sales & business development teams", "Academic institutions", "Women's leadership conferences", "General audiences"],
    duration: ["45 minutes", "60 minutes", "90 minutes (with Q&A)"],
    keyTakeaways: [
      "Understand the psychological and physiological roots of confidence and self-doubt",
      "Learn the science behind body language and how posture affects mindset",
      "Practice the two-minute technique for high-stakes situations",
      "Discover how to reconnect with your core values in moments of pressure",
      "Build a personalized toolkit for showing up at your best",
    ],
    icon: "✦",
    featured: true,
  },
  {
    id: "body-language-leadership",
    title: "The Language of Power: Nonverbal Communication for Leaders",
    subtitle: "How body language shapes authority, trust, and influence",
    description:
      "Most leadership development ignores one of the most powerful tools available: nonverbal communication. In this talk, Amy unpacks decades of research on how body language signals — in both leaders and those they lead — shape trust, authority, psychological safety, and performance. Audiences learn to read the room, project confidence without arrogance, and create environments where people feel seen and empowered.",
    audience: ["Senior executives & C-suite", "Managers & team leads", "HR & people operations leaders", "MBA programs", "Leadership development programs"],
    duration: ["45 minutes", "60 minutes", "Half-day workshop"],
    keyTakeaways: [
      "Decode the nonverbal signals that communicate power, warmth, and authority",
      "Understand how microexpressions and posture affect others' perceptions",
      "Learn to create psychological safety through body language",
      "Practice strategies for high-stakes leadership moments",
      "Develop a nonverbal communication style that is authentic and effective",
    ],
    icon: "◈",
    featured: true,
  },
  {
    id: "imposter-syndrome",
    title: "Overcoming Imposter Syndrome: Owning Your Expertise",
    subtitle: "Why accomplished people doubt themselves — and what to do about it",
    description:
      "Imposter syndrome — the persistent feeling that you don't deserve your success and will eventually be 'found out' — affects an estimated 70% of people at some point in their careers. Amy explores the psychological roots of this phenomenon, why it disproportionately affects high achievers and marginalized groups, and the research-backed strategies that help people own their competence and contributions fully.",
    audience: ["Women in leadership programs", "Minority professional networks", "Graduate and professional students", "High-achieving individuals in transition", "Corporate ERGs"],
    duration: ["45 minutes", "60 minutes", "90 minutes (with workshop)"],
    keyTakeaways: [
      "Understand the psychological mechanisms behind imposter syndrome",
      "Recognize how it shows up differently across identities and industries",
      "Learn evidence-based techniques for countering self-doubt",
      "Build practices for internalizing your achievements",
      "Create cultures that reduce rather than amplify imposter feelings",
    ],
    icon: "◇",
    featured: true,
  },
  {
    id: "prejudice-bias",
    title: "Bias, Belonging & the Workplace: Building Truly Inclusive Cultures",
    subtitle: "The science of prejudice — and what actually changes behavior",
    description:
      "Amy's research on stereotyping, prejudice, and social judgment offers a rigorous, evidence-based lens for understanding why bias persists in organizations — and what interventions actually work. This talk goes beyond awareness to deliver science-backed strategies for leaders and organizations committed to building environments where all people feel they belong and can perform at their best.",
    audience: ["DEI leadership", "HR professionals", "Executive teams", "University administrators", "Government & nonprofit organizations"],
    duration: ["60 minutes", "90 minutes", "Full-day workshop"],
    keyTakeaways: [
      "Understand the cognitive and social psychology of bias and stereotyping",
      "Identify where bias most powerfully affects talent acquisition and retention",
      "Learn which diversity interventions have strong evidence of effectiveness",
      "Design structural changes that reduce the impact of implicit bias",
      "Build accountability systems that sustain culture change",
    ],
    icon: "○",
    featured: false,
  },
  {
    id: "wellbeing-resilience",
    title: "Stress, Power & Resilience: The Body as a Resource",
    subtitle: "How our physiology shapes our psychology — and what we can do about it",
    description:
      "Chronic stress depletes performance, health, and creativity. But not all stress responses are equal — and our ability to shape our own physiological and psychological state is far greater than most people realize. Drawing on research in social neuroendocrinology, embodied cognition, and resilience science, Amy presents a compelling case for why tending to the body is one of the most powerful leadership practices available.",
    audience: ["Healthcare organizations", "High-performance teams", "Academic institutions", "Wellness & HR programs", "General audiences"],
    duration: ["45 minutes", "60 minutes", "90 minutes"],
    keyTakeaways: [
      "Understand the physiology of stress, power, and resilience",
      "Learn how posture and movement regulate cortisol and testosterone",
      "Build practices for managing acute stress in high-stakes moments",
      "Develop longer-term habits that build physiological resilience",
      "Support teams in creating healthier, more sustainable cultures",
    ],
    icon: "❧",
    featured: false,
  },
];

export const audienceTypes = [
  {
    type: "Corporate & Business",
    description: "Fortune 500 companies, startups, sales organizations, leadership offsites, and industry conferences.",
    icon: "◉",
  },
  {
    type: "Academic & Educational",
    description: "Universities, business schools, graduate programs, and student leadership conferences.",
    icon: "◎",
  },
  {
    type: "Nonprofit & Government",
    description: "Mission-driven organizations, public sector agencies, and advocacy groups.",
    icon: "◌",
  },
  {
    type: "Healthcare",
    description: "Hospital systems, medical schools, and healthcare leadership programs.",
    icon: "◍",
  },
];

export const bookingProcess = [
  {
    step: 1,
    title: "Submit an Inquiry",
    description: "Complete the booking inquiry form with details about your event — date, audience size, objectives, and any special requirements.",
  },
  {
    step: 2,
    title: "Consultation Call",
    description: "Amy's team will schedule a brief call to discuss your organization's needs and how to tailor the presentation for maximum impact.",
  },
  {
    step: 3,
    title: "Proposal & Agreement",
    description: "You'll receive a customized proposal outlining the talk format, logistics, and speaker agreement terms.",
  },
  {
    step: 4,
    title: "Event Preparation",
    description: "Amy's team will work closely with yours in the weeks before the event to ensure everything is perfectly prepared.",
  },
];

export interface TopicLink {
  label: string;
  href: string;
  external?: boolean;
  badge?: string;
}

export interface TopicInsight {
  heading: string;
  body: string;
}

export interface Topic {
  slug: string;
  label: string;
  tagline: string;
  intro: string[];
  insights: TopicInsight[];
  relatedLinks: TopicLink[];
  color: string; // tailwind bg class for accent
}

export const topics: Topic[] = [
  {
    slug: "power-posing",
    label: "Power Posing",
    tagline: "The most contested — and most misunderstood — finding in social psychology. Here's what the science actually says.",
    intro: [
      "In 2010, Amy Cuddy and colleagues published a paper suggesting that adopting expansive, open postures for just two minutes could shift hormone levels and increase feelings of power. The idea went global. Then came the controversy.",
      "Power posing became the flashpoint of a much larger debate about replication in social science. Some effects proved harder to reproduce than others. Critics were loud. Coverage was often reductive. The nuanced version of the story — what actually replicated, what didn't, and why the core insight still holds — rarely made the headlines.",
      "This page is the full account. The original research, the replication debate, what the evidence now shows, and what it means practically for anyone who wants to show up more powerfully under pressure.",
    ],
    insights: [
      {
        heading: "The original finding",
        body: "The 2010 paper by Carney, Cuddy & Yap found that two minutes of high-power poses increased testosterone by ~19% and decreased cortisol by ~25%, and also increased risk tolerance. These were striking results.",
      },
      {
        heading: "What the replication debate showed",
        body: "Subsequent studies found the hormonal effects inconsistent — they didn't always replicate at scale. The psychological and behavioural effects — feeling more powerful, being rated as more confident — showed more consistent support across studies.",
      },
      {
        heading: "What the meta-analysis found",
        body: "A 2018 meta-analysis of 55 studies by Cuddy, Schultz & Fosse found a small but robust effect of expansive posture on feelings of power. The effect is real — it is not as large, or as hormonal, as the original paper suggested.",
      },
      {
        heading: "The practical takeaway",
        body: "You don't need a hormonal shift to benefit from physical preparation. The consistent finding is that how you hold your body affects how you feel, and how you feel affects how you show up. That connection is well-supported and practically meaningful.",
      },
    ],
    relatedLinks: [
      { label: "Watch the TED Talk", href: "https://www.youtube.com/watch?v=Ks-_Mh1QhMc", external: true, badge: "70M+ views" },
      { label: "Read Presence", href: "/books/presence", badge: "NYT Bestseller" },
      { label: "Research Overview", href: "/research" },
    ],
    color: "navy",
  },
  {
    slug: "presence-body-language",
    label: "Presence & Body Language",
    tagline: "Your body shapes your mind. The science is unambiguous — and the implications are profound.",
    intro: [
      "Most of us think about communication as something we do with our words. But decades of research tell a different story: the most powerful signals we send — to others and to ourselves — come from the way we hold our bodies.",
      "Amy Cuddy's research on nonverbal behavior shows that expansive, open postures don't just make us look more confident. They actually change our internal chemistry — raising testosterone, lowering cortisol — and alter how we think, feel, and perform under pressure.",
      "Her 2012 TED Talk, now one of the most-watched in history, introduced millions of people to the idea that small physical adjustments can produce real psychological shifts. Not as a trick to fool others, but as a way of reconnecting with your own sense of power when you need it most.",
    ],
    insights: [
      {
        heading: "The body-mind feedback loop",
        body: "We assume our emotions drive our posture — we feel confident, so we stand tall. But Amy's research shows the causal arrow runs both ways. When we adopt expansive postures, our brains receive signals that shift hormone levels and alter our sense of self before a single word is spoken.",
      },
      {
        heading: "Two minutes can matter",
        body: "In high-stakes situations — before a job interview, a difficult conversation, a performance — a brief period of deliberate physical preparation can meaningfully affect how we feel and how we present ourselves. Not because of some trick, but because of genuine physiological change.",
      },
      {
        heading: "Power is expressed nonverbally first",
        body: "In every culture studied, dominant individuals take up more space. They spread out. They occupy the room. And those who feel powerless do the opposite — they contract, cross their arms, make themselves smaller. These patterns are universal, and they're deeply tied to our sense of status and belonging.",
      },
      {
        heading: "Authenticity, not performance",
        body: "This isn't about faking confidence for an audience. It's about using your body as a tool to access psychological states that are already available to you. The goal is presence — showing up as your actual self — not a polished performance of someone you're not.",
      },
    ],
    relatedLinks: [
      { label: "Watch the TED Talk", href: "https://www.youtube.com/watch?v=Ks-_Mh1QhMc", external: true, badge: "70M+ views" },
      { label: "Read Presence", href: "/books", badge: "NYT Bestseller" },
      { label: "Research Overview", href: "/research" },
      { label: "Book a Keynote", href: "/speaking" },
    ],
    color: "navy",
  },
  {
    slug: "confidence-under-pressure",
    label: "Confidence Under Pressure",
    tagline: "Impostor syndrome doesn't mean you don't belong. It means the stakes feel real — and that you care.",
    intro: [
      "Have you ever left a job interview, a difficult conversation, or a presentation and thought: that wasn't me. You knew you could have done better, been more — but nerves, self-doubt, or the feeling that you simply didn't belong there got in the way.",
      "Impostor syndrome — the persistent sense that you're less capable than others believe, and that you'll eventually be found out — is one of the most widespread and least-talked-about forces shaping how people show up in the world. It affects high-achievers disproportionately. It affects women and underrepresented groups at particularly high rates. And it tends to surface most strongly in exactly the moments when everything is on the line.",
      "Amy Cuddy's work on presence offers a different framework. The goal isn't to feel fearless. It isn't to fake confidence until it feels real. It's to stop fighting yourself long enough to actually show up — to be in the room, connected to what you value and who you are, even when you feel least capable of it.",
    ],
    insights: [
      {
        heading: "Presence is not confidence",
        body: "Confidence is about certainty — knowing you'll succeed. Presence is something different. It's about being psychologically available: not distracted by fear, not preoccupied with how you're being perceived. It's the condition under which you perform at your actual best.",
      },
      {
        heading: "The impostor cycle",
        body: "Impostor syndrome creates a self-reinforcing loop: you doubt yourself, so you under-prepare or over-prepare, so you feel more anxious, so you perform below your ability, which confirms your worst fears. Understanding the mechanism is the first step to interrupting it.",
      },
      {
        heading: "Fake it till you become it",
        body: "The original power posing insight wasn't a trick for fooling others — it was about using physical posture to access a psychological state that allows authentic performance. Do it enough times in enough high-stakes situations and the behavior becomes habitual. The performance becomes the identity.",
      },
      {
        heading: "High stakes are the hardest moment to be yourself",
        body: "The cruel irony of impostor syndrome is that it shows up most intensely in exactly the situations where being yourself matters most — where a genuine, grounded version of you would outperform any performance. The research consistently shows that authentic presence is what moves rooms, wins trust, and earns opportunities.",
      },
    ],
    relatedLinks: [
      { label: "Read Presence", href: "/books", badge: "NYT Bestseller" },
      { label: "Watch the TED Talk", href: "https://www.youtube.com/watch?v=Ks-_Mh1QhMc", external: true },
      { label: "Read Her Writing", href: "/writing" },
      { label: "Book a Keynote", href: "/speaking" },
    ],
    color: "navy",
  },
  {
    slug: "leadership-trust",
    label: "Leadership & Trust",
    tagline: "The most effective leaders don't start with authority. They start with warmth.",
    intro: [
      "Across cultures and contexts, people use two dimensions to judge others almost instantly: are you warm? and are you competent? These aren't soft assessments — they are the fundamental axes of social perception, and they determine whether someone is trusted, followed, liked, and believed.",
      "Amy Cuddy's research — developed with colleagues at Harvard Business School and published in journals including the Journal of Personality and Social Psychology — shows that when these two dimensions conflict, warmth almost always wins. A leader who projects high competence but low warmth triggers suspicion and resistance. A leader who projects high warmth and moderate competence earns trust that creates the foundation for everything else.",
      "The implications for leadership are practical and counterintuitive. Many high-achieving professionals lead with their credentials, their track record, their authority. The research says this is a mistake. The best leaders earn trust first — through genuine curiosity, attentiveness, and the willingness to be human — and build their authority on that foundation.",
    ],
    insights: [
      {
        heading: "Warmth before strength",
        body: "Leaders who try to establish dominance before building trust trigger psychological defensiveness in those around them. Leaders who establish warmth and genuine interest first create a foundation of trust on which competence becomes amplifying rather than threatening.",
      },
      {
        heading: "The warmth-competence trade-off",
        body: "We often assume that projecting competence requires appearing strong, certain, and unemotional. But Amy's research shows that competence signals are most effective when they follow warmth — and that the perception of warmth actually raises the perceived value of competence signals.",
      },
      {
        heading: "Power changes how we see people",
        body: "Research on power and status shows that gaining power shifts our perception of others: we become less attuned to their emotions, less likely to consider their perspectives, and more likely to act on our own impulses. Understanding this effect is the starting point for leading against it.",
      },
      {
        heading: "Psychological safety is the precondition for everything",
        body: "Teams perform best — and individuals contribute most authentically — when they believe it's safe to speak up, take risks, and admit what they don't know. Psychological safety is created first through interpersonal warmth, before it can be secured through any structural or organizational mechanism.",
      },
    ],
    relatedLinks: [
      { label: "Research Overview", href: "/research" },
      { label: "Speaking Topics", href: "/speaking" },
      { label: "Read Her Writing", href: "/writing" },
      { label: "Read Presence", href: "/books" },
    ],
    color: "navy",
  },
  {
    slug: "bullying-social-bravery",
    label: "Bullying & Social Bravery",
    tagline: "Bullying doesn't stay in the schoolyard. Understanding it — fully — is how we begin to dismantle it.",
    intro: [
      "We tend to think of bullying as a childhood problem. Something kids go through, and then outgrow. But the research tells a different story — and so do the lives of millions of adults who carry the invisible weight of what happened to them at school, at work, and at home.",
      "Bullying is one of the most pervasive and least understood forces in American life. It isn't just about mean kids. It's about power — who has it, who is denied it, how it gets enforced through cruelty, exclusion, and fear. It follows people into their careers, their relationships, and their sense of self for decades. And because we've collectively decided it's a normal part of growing up, we've never fully reckoned with what it actually costs us.",
      "Amy Cuddy's forthcoming book, Bullied, is the result of years of research, personal experience, and interviews with survivors, educators, policymakers, and scientists. It is not a book about bullying as a problem to be managed. It is a book about power, belonging, and what it means to reclaim both — for individuals and for a society that has normalized cruelty for too long.",
    ],
    insights: [
      {
        heading: "Bullying is about power, not personality",
        body: "The research consistently shows that bullying is not primarily driven by individuals with bad character. It is driven by social environments that enable, reward, and normalize the exercise of power through cruelty. Address the environment, and the behavior changes.",
      },
      {
        heading: "The workplace is the schoolyard",
        body: "Studies on adult bullying in workplace settings show remarkably similar dynamics to childhood bullying: the same power asymmetries, the same bystander effects, the same psychological damage to targets. Bullying grows up with us — it just changes costume.",
      },
      {
        heading: "Exclusion is a form of violence",
        body: "Social ostracism — being excluded, ignored, and treated as invisible — activates the same neural pathways as physical pain. The experience of being left out is not a soft harm. It is a profound threat to our sense of self, our belonging, and our capacity to function.",
      },
      {
        heading: "Resilience is not the solution",
        body: "Telling targets of bullying to be more resilient places the burden of a systemic problem on the people harmed by it. Resilience matters — but it is the outcome of recovery, not a strategy for prevention. What actually stops bullying is changing the social conditions that allow it to flourish.",
      },
    ],
    relatedLinks: [
      { label: "Pre-order Bullied", href: "/books", badge: "Spring 2027" },
      { label: "Read Her Writing", href: "/writing" },
      { label: "Research Overview", href: "/research" },
      { label: "Book a Keynote", href: "/speaking" },
    ],
    color: "navy",
  },
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

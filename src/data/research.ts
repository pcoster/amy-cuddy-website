// Edit this file to update site content

export type ResearchTheme =
  | "power-posing"
  | "stereotype-content"
  | "intergroup"
  | "gender-work"
  | "leadership";

export interface Paper {
  id: string;
  title: string;
  year: number;
  journal: string;
  authors: string; // formatted author string
  summary: string; // plain English, 2-3 sentences
  keyFinding: string; // one sentence
  theme: ResearchTheme;
  featured?: boolean;
  doi?: string;
  url?: string;
}

export const researchThemes: Record<ResearchTheme, { label: string; description: string; color: string }> = {
  "power-posing": {
    label: "Nonverbal Behavior & Power",
    description: "How body posture and expansive displays affect hormones, psychology, and performance.",
    color: "bg-blue-50 text-blue-800 border-blue-200",
  },
  "stereotype-content": {
    label: "Stereotype Content Model",
    description: "Warmth and competence as universal dimensions of how people perceive social groups.",
    color: "bg-amber-50 text-amber-800 border-amber-200",
  },
  "intergroup": {
    label: "Intergroup Relations",
    description: "How stereotypes predict helping, harming, and discrimination across groups.",
    color: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  "gender-work": {
    label: "Gender & Work",
    description: "How gender stereotypes affect professional women, especially in leadership.",
    color: "bg-purple-50 text-purple-800 border-purple-200",
  },
  "leadership": {
    label: "Leadership & Stress",
    description: "The physiological and psychological dynamics of power and leadership.",
    color: "bg-rose-50 text-rose-800 border-rose-200",
  },
};

export const papers: Paper[] = [
  {
    id: "power-posing-2010",
    title: "Power Posing: Brief Nonverbal Displays Affect Neuroendocrine Levels and Risk Tolerance",
    year: 2010,
    journal: "Psychological Science",
    authors: "Carney, D.R., Cuddy, A.J.C., & Yap, A.J.",
    summary:
      "This landmark study demonstrated that adopting expansive 'high-power' body postures for just two minutes significantly increases testosterone, decreases cortisol (the stress hormone), and increases willingness to take risks. The research showed that nonverbal displays can physically alter brain chemistry — your body shapes your mind.",
    keyFinding:
      "Two minutes of power posing increases testosterone and decreases cortisol, leading to greater confidence and risk tolerance.",
    theme: "power-posing",
    featured: true,
    doi: "10.1177/0956797610383437",
  },
  {
    id: "preparatory-power-posing-2015",
    title: "Preparatory Power Posing Affects Nonverbal Presence and Job Interview Performance",
    year: 2015,
    journal: "Journal of Applied Psychology",
    authors: "Cuddy, A.J.C., Wilmuth, C.A., Yap, A.J., & Carney, D.R.",
    summary:
      "Candidates who adopted a power pose before a job interview were rated significantly more hireable and competent by evaluators — not because they changed what they said, but because they carried themselves differently. The effect was driven by the nonverbal presence that posing created, not by content.",
    keyFinding:
      "Preparatory power posing improves interview performance by enhancing nonverbal presence, not verbal content.",
    theme: "power-posing",
    featured: true,
    doi: "10.1037/a0038543",
  },
  {
    id: "p-curving-2018",
    title: "P-Curving a More Comprehensive Body of Research on Postural Feedback Reveals Clear Evidential Value for Power-Posing Effects",
    year: 2018,
    journal: "Psychological Science",
    authors: "Cuddy, A.J.C., Schultz, S.J., & Fosse, N.E.",
    summary:
      "In response to high-profile replication concerns, this paper applied p-curve analysis to the full body of postural feedback research — far broader than just the original power posing study. The analysis revealed genuine evidential value for posture-affecting psychological states, distinguishing robust effects from noise.",
    keyFinding:
      "Comprehensive p-curve analysis of postural feedback research confirms genuine, evidential effects of expansive poses on psychological states.",
    theme: "power-posing",
    doi: "10.1177/0956797617746749",
  },
  {
    id: "ergonomics-dishonesty-2013",
    title: "The Ergonomics of Dishonesty: The Effect of Incidental Expansive Posture on Stealing, Cheating, and Traffic Violations",
    year: 2013,
    journal: "Psychological Science",
    authors: "Yap, A.J., Wazlawek, A.S., Lucas, B.J., Cuddy, A.J.C., & Carney, D.R.",
    summary:
      "Expansive postures don't just boost confidence — they can also increase unethical behavior. People sitting in expansive poses were more likely to steal money, cheat on a test, and commit traffic violations. The research suggests that feeling powerful can reduce adherence to rules, with implications for workplace and environmental design.",
    keyFinding:
      "Expansive postures increase dishonest and unethical behavior, suggesting environmental design can inadvertently encourage rule-breaking.",
    theme: "power-posing",
    doi: "10.1177/0956797613492425",
  },
  {
    id: "visual-attention-postures-2017",
    title: "Visual Attention to Powerful Postures: People Avert Their Gaze From Nonverbal Dominance Displays",
    year: 2017,
    journal: "Journal of Experimental Social Psychology",
    authors: "Holland, E., Wolf, E.B., Looser, C., & Cuddy, A.J.C.",
    summary:
      "People instinctively look away from dominant, expansive postures — a subtle signal of submission and respect that mirrors what's seen in primates. Eye-tracking studies showed this gaze aversion happens automatically and rapidly, connecting evolutionary biology to modern dynamics of power and hierarchy.",
    keyFinding:
      "People automatically avert their gaze from dominance displays, reflecting an evolved submissive response to power.",
    theme: "power-posing",
  },
  {
    id: "scm-2002",
    title: "A Model of (Often Mixed) Stereotype Content: Competence and Warmth Respectively Follow From Status and Competition",
    year: 2002,
    journal: "Journal of Personality and Social Psychology",
    authors: "Fiske, S.T., Cuddy, A.J.C., Glick, P., & Xu, J.",
    summary:
      "This foundational paper introduced the Stereotype Content Model (SCM), showing that all social groups are evaluated on two fundamental dimensions: warmth and competence. Warmth is driven by perceived cooperation; competence by perceived status. The model explains why stereotypes are often ambivalent — groups can be seen as warm-but-incompetent or competent-but-cold.",
    keyFinding:
      "All social groups are stereotyped along two universal dimensions — warmth and competence — driven by perceived cooperation and status.",
    theme: "stereotype-content",
    featured: true,
    doi: "10.1037/0022-3514.82.6.878",
  },
  {
    id: "scm-advances-2008",
    title: "Warmth and Competence as Universal Dimensions of Social Perception: The Stereotype Content Model and the BIAS Map",
    year: 2008,
    journal: "Advances in Experimental Social Psychology",
    authors: "Cuddy, A.J.C., Fiske, S.T., & Glick, P.",
    summary:
      "An expanded treatment of the SCM introducing the BIAS Map (Behaviors from Intergroup Affect and Stereotypes), linking warmth and competence judgments to four concrete behavioral outcomes: active facilitation, passive facilitation, active harm, and passive harm. High warmth/high competence groups receive active help; low on both receive active harm.",
    keyFinding:
      "Warmth and competence judgments predict four specific behavioral outcomes toward groups, from active help to active harm.",
    theme: "stereotype-content",
    featured: true,
    doi: "10.1016/S0065-2601(07)00002-0",
  },
  {
    id: "bias-map-2007",
    title: "The BIAS Map: Behaviors From Intergroup Affect and Stereotypes",
    year: 2007,
    journal: "Journal of Personality and Social Psychology",
    authors: "Cuddy, A.J.C., Fiske, S.T., & Glick, P.",
    summary:
      "Stereotypes don't just describe groups — they predict how people will act toward them. This paper demonstrated that the warmth and competence dimensions generate distinct emotional responses (pity, envy, admiration, contempt) which in turn predict specific discriminatory behaviors ranging from patronizing help to active hostility.",
    keyFinding:
      "Stereotype content generates distinct emotions that predict concrete discriminatory behaviors toward different social groups.",
    theme: "stereotype-content",
    doi: "10.1037/0022-3514.92.4.631",
  },
  {
    id: "universal-dimensions-2007",
    title: "Universal Dimensions of Social Cognition: Warmth, Then Competence",
    year: 2007,
    journal: "Trends in Cognitive Sciences",
    authors: "Fiske, S.T., Cuddy, A.J.C., & Glick, P.",
    summary:
      "A concise synthesis showing that warmth and competence emerge as universal organizing principles for how people judge both individuals and groups — across cultures, contexts, and types of social evaluation. Crucially, warmth is evaluated first and often matters more than competence in social outcomes.",
    keyFinding:
      "Warmth is judged before competence and often outweighs it — being seen as trustworthy matters more than being seen as capable.",
    theme: "stereotype-content",
  },
  {
    id: "scm-cross-cultural-2009",
    title: "Stereotype Content Model Across Cultures: Universal Similarities and Some Differences",
    year: 2009,
    journal: "British Journal of Social Psychology",
    authors: "Cuddy, A.J.C., Fiske, S.T., Kwan, V.S.Y., Glick, P., Demoulin, S., et al.",
    summary:
      "A 33-country study testing whether the SCM's warmth-competence framework applies universally. While specific groups stereotyped as warm or competent vary by culture, the two-dimensional structure itself was consistent across all countries, establishing the SCM as a genuinely cross-cultural model of social perception.",
    keyFinding:
      "The warmth-competence framework of stereotyping is universal across 33 countries, even when specific stereotyped groups differ.",
    theme: "stereotype-content",
    doi: "10.1348/014466608X314935",
  },
  {
    id: "income-inequality-stereotypes-2013",
    title: "Nations' Income Inequality Predicts Ambivalence in Stereotype Content",
    year: 2013,
    journal: "British Journal of Social Psychology",
    authors: "Durante, F., Fiske, S.T., Kervyn, N., Cuddy, A.J.C., et al.",
    summary:
      "Countries with wider income gaps between rich and poor show more ambivalent stereotypes — more mixed warmth-competence judgments — than egalitarian societies. This research demonstrates that economics and social structure directly shape the content of cultural stereotypes, not just individual attitudes.",
    keyFinding:
      "National income inequality correlates with more ambivalent group stereotypes, showing that social structure shapes cultural perception.",
    theme: "stereotype-content",
    doi: "10.1111/bjso.12005",
  },
  {
    id: "leadership-stress-2012",
    title: "Leadership Is Associated With Lower Levels of Stress",
    year: 2012,
    journal: "Proceedings of the National Academy of Sciences",
    authors: "Sherman, G.D., Lee, J.J., Cuddy, A.J.C., Renshon, J., Oveis, C., Gross, J.J., & Lerner, J.S.",
    summary:
      "Leaders have significantly lower cortisol levels than non-leaders, and this effect is mediated by the sense of control that comes with power — not merely by external demands. The finding challenges the assumption that leadership is inherently more stressful, suggesting that having agency and control is physiologically protective.",
    keyFinding:
      "Leaders have lower cortisol (stress) levels than non-leaders, driven by the sense of control that accompanies power.",
    theme: "leadership",
    featured: true,
    doi: "10.1073/pnas.1207042109",
  },
  {
    id: "org-warmth-competence-2011",
    title: "The Dynamics of Warmth and Competence Judgments, and Their Outcomes in Organizations",
    year: 2011,
    journal: "Research in Organizational Behavior",
    authors: "Cuddy, A.J.C., Glick, P., & Beninger, A.",
    summary:
      "Applied the warmth-competence framework directly to workplace settings, showing that these two dimensions predict hiring decisions, performance evaluations, mentorship, and promotion. Critically, warmth judgments are made rapidly and are hard to revise — making first impressions in organizations especially consequential.",
    keyFinding:
      "In organizations, warmth judgments are made first and persistently shape hiring, mentoring, and career advancement.",
    theme: "leadership",
    doi: "10.1016/j.riob.2011.10.004",
  },
  {
    id: "working-mothers-2004",
    title: "When Professionals Become Mothers, Warmth Doesn't Cut the Ice",
    year: 2004,
    journal: "Journal of Social Issues",
    authors: "Cuddy, A.J.C., Fiske, S.T., & Glick, P.",
    summary:
      "Working mothers face an impossible double bind: they are expected to be warm (as mothers) but are penalized if this comes at the cost of competence, while also being penalized if they prioritize career competence over communal warmth. This research quantifies the competing demands placed on professional women with children.",
    keyFinding:
      "Working mothers face incompatible expectations for warmth and competence, creating a documented no-win scenario in professional settings.",
    theme: "gender-work",
    featured: true,
    doi: "10.1111/j.0022-4537.2004.00381.x",
  },
  {
    id: "men-cultural-ideals-2015",
    title: "Men as Cultural Ideals: Cultural Values Moderate Gender Stereotype Content",
    year: 2015,
    journal: "Journal of Personality and Social Psychology",
    authors: "Wolf, E.B., Glick, P., Crotty, S., Chong, J., Norton, M.I., & Cuddy, A.J.C.",
    summary:
      "Men are stereotyped as embodying cultural ideals more than women, but the nature of this advantage depends on whether the culture values individualism or communalism. The research shows that gender stereotypes are not fixed but shaped by the specific values a society holds most dear.",
    keyFinding:
      "Cultural values determine how strongly men are stereotyped as cultural ideals — the male advantage varies across individualistic and communal societies.",
    theme: "gender-work",
    doi: "10.1037/pspi0000027",
  },
  {
    id: "torture-2004",
    title: "Why Ordinary People Torture Enemy Prisoners",
    year: 2004,
    journal: "Science",
    authors: "Fiske, S.T., Harris, L.T., & Cuddy, A.J.C.",
    summary:
      "This widely-discussed brief communication in Science applied the SCM's dehumanization framework to explain Abu Ghraib-style abuses. Groups perceived as low in both warmth and competence are psychologically dehumanized, and the SCM predicts they will be targets of active contempt and harm — explaining how ordinary people commit atrocities.",
    keyFinding:
      "Groups stereotyped as both incompetent and hostile are dehumanized and become targets of active harm, explaining situational torture.",
    theme: "intergroup",
    doi: "10.1126/science.1103788",
  },
  {
    id: "elderly-stereotype-2005",
    title: "This Old Stereotype: The Stubbornness and Pervasiveness of the Elderly Stereotype",
    year: 2005,
    journal: "Journal of Social Issues",
    authors: "Cuddy, A.J.C., Norton, M.I., & Fiske, S.T.",
    summary:
      "Elderly people are reliably stereotyped as warm but incompetent — a pattern that is remarkably consistent across studies and highly resistant to change. Despite positive warmth ratings, this stereotype still produces patronizing and exclusionary behaviors, showing that even 'positive' stereotypes carry costs.",
    keyFinding:
      "The warm-but-incompetent elderly stereotype is unusually persistent and resistant to change, with real discriminatory consequences.",
    theme: "intergroup",
    doi: "10.1111/j.1540-4560.2005.00405.x",
  },
  {
    id: "asian-americans-2008",
    title: "When Being a Model Minority Is Good… and Bad: Realistic Threat Explains Negativity Toward Asian Americans",
    year: 2008,
    journal: "Personality and Social Psychology Bulletin",
    authors: "Cuddy, A.J.C., Norton, M.I., & Fiske, S.T.",
    summary:
      "Asian Americans are stereotyped as high-competence but low-warmth — and this already-ambivalent stereotype becomes more hostile when Asian Americans are perceived as economic competitors. The 'model minority' label is revealed as a double-edged sword: positive surface framing that activates envy and resentment when stakes feel high.",
    keyFinding:
      "Model minority stereotypes intensify into hostility when the group is perceived as a competitive economic threat.",
    theme: "intergroup",
    doi: "10.1177/0146167207309195",
  },
  {
    id: "social-structure-stereotypes-2009",
    title: "Social Structure Shapes Cultural Stereotypes and Emotions: A Causal Test of the Stereotype Content Model",
    year: 2009,
    journal: "Group Processes and Intergroup Relations",
    authors: "Caprariello, P., Cuddy, A.J.C., & Fiske, S.T.",
    summary:
      "By experimentally manipulating the perceived status and competitiveness between groups, this study provided causal evidence that social structure directly shapes stereotype content. When a group's status rises, warmth ratings drop and competence ratings rise — showing stereotypes aren't fixed beliefs but dynamic responses to social conditions.",
    keyFinding:
      "Changes in group status and competition causally change warmth and competence stereotypes, confirming the SCM's structural predictions.",
    theme: "intergroup",
    doi: "10.1177/1368430208101053",
  },
  {
    id: "future-women-psych-2021",
    title: "The Future of Women in Psychological Science",
    year: 2021,
    journal: "Perspectives on Psychological Science",
    authors: "Gruber, J., Mendle, J., Lindquist, K.A., Schmader, T., Clark, L.A., Bliss-Moreau, E., Cuddy, A.J.C., et al.",
    summary:
      "A forward-looking perspective piece examining the structural barriers that limit women's advancement in psychological science and offering concrete recommendations for systemic change. The paper draws on both research and lived experience to chart a more equitable future for the field.",
    keyFinding:
      "Structural — not individual — barriers are the primary obstacle to women's advancement in psychological science.",
    theme: "gender-work",
  },
];

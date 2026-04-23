import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The State of the Science — Power Posing",
  description:
    "Amy Cuddy on what the peer-reviewed record actually shows about power posing — and how the 'debunked' narrative took hold.",
};

export default function StateOfTheSciencePage() {
  return (
    <article className="bg-white">
      {/* Nav */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <Link
          href="/topics/power-posing"
          className="inline-flex items-center gap-1.5 text-text-secondary hover:text-navy text-xs font-medium tracking-wide transition-colors"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 010 1.06L8.06 10l3.72 3.72a.75.75 0 11-1.06 1.06l-4.25-4.25a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0z" clipRule="evenodd" />
          </svg>
          Power Posing
        </Link>
      </div>

      {/* Title */}
      <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 border-b border-gray-100">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
          Amy Cuddy
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
          The State of the Science
        </h1>
      </header>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-text-secondary text-lg leading-relaxed">

        <p>
          At some point over the last decade, you may have come across the claim that &ldquo;power posing has been debunked&rdquo; &mdash; usually stated with great confidence and very little evidence.
        </p>

        <p>
          It&apos;s a clean story. Easy to repeat. Salacious, even. Has the twisted appeal of the rise-and-fall narrative. And it has almost nothing to do with what the research actually shows.
        </p>

        <p>
          From here, I wish I could say TL;DR. But please, do read.
        </p>

        <p>
          I want to tell you what actually happened. Not the narrative, but the evidence. Because in the decade since that story took hold, the science didn&apos;t stop. It grew. And what it found is not what you&apos;ve been told.
        </p>

        {/* ── WHAT WE'VE LEARNED ── */}
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary pt-8">
          WHAT WE&apos;VE LEARNED
        </h2>

        <p>
          The original study &mdash; Carney, Cuddy, and Yap, 2010 &mdash; was small. Forty-two participants. It used the standard methods of its era. It reported that adopting expansive postures for one minute each increased feelings of power, elevated testosterone, decreased cortisol, and led to greater risk-taking in a gambling task. That was one study &mdash; though originally there were two. A separate study measuring feelings of power was dropped at the editor&apos;s instruction because it was, in the editor&apos;s judgment, &ldquo;just another replication&rdquo; of an effect already so clearly established. The irony of that decision, given what followed, is painful.
        </p>

        <p>
          In the decade since, this line of research has been the subject of six major meta-analyses and reviews, dozens of independent experiments using preregistered designs and larger samples, conducted across multiple countries, cultures, and age groups, involving nearly ten thousand participants, and published in journals including <em>Psychological Bulletin</em>, <em>Perspectives on Psychological Science</em>, <em>Psychological Science</em>, and <em>Comprehensive Results in Social Psychology</em>. Several of these were conducted by skeptics who expected to find null results. I am an author on only one &mdash; a preregistered p-curve analysis of 55 studies published in <em>Psychological Science</em> (Cuddy, Schultz, &amp; Fosse, 2018). The others include a Bayesian meta-analysis of six preregistered studies (Gronau et al., 2017), a systematic review and meta-analysis of 73 studies (Elkj&aelig;r et al., 2022), a field-wide review of 128 studies with over 10,000 participants (K&ouml;rner &amp; Sch&uuml;tz, 2020), and a preregistered <em>Psychological Bulletin</em> meta-analysis of 88 studies with 9,779 participants (K&ouml;rner et al., 2022). The other five were conducted independently, by researchers with no connection to me.
        </p>

        <p>
          These are not claims I am making. They are what the field has produced.
        </p>

        <p>
          What follows is comprehensive but not exhaustive &mdash; to be exhaustive would require a hundred-page dissertation, and even that would be out of date by the time it was finished. This is a living body of research. It is still being refined, still being extended, still producing new findings. But I want to be honest about something: the fact that this research continued at all is not a sign that the system worked. It is a testament to the courage of the individual scientists who kept going despite enormous pressure not to. Some were advised by colleagues and department heads not to publish their findings. Some were told not to study it at all. Some left academia rather than face the professional consequences of being associated with this work. I know of at least one large, well-powered study &mdash; with a sample more than four times the size of the original &mdash; that replicated three of the four original hormone findings and was never submitted for publication because the principal investigator was warned against it. He later left the field.
        </p>

        <p>
          I was effectively silenced. That is a loss &mdash; not just for me, but for the science. And I was not the only one. The attempt to shut down this line of research did real damage, and the full extent of that damage &mdash; the studies never published, the questions never asked, the scientists who walked away &mdash; may never be fully known.
        </p>

        <p>
          Here is what the evidence now shows.
        </p>

        {/* ── PSYCHOLOGICAL AND EMOTIONAL EFFECTS ── */}
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary pt-8">
          THE PSYCHOLOGICAL AND EMOTIONAL EFFECTS ARE REAL AND CONSISTENT
        </h2>

        <p>
          Independent researchers &mdash; none affiliated with me &mdash; have used preregistered designs and larger samples to test the effects of expansive and contractive postures on psychological, emotional, and cognitive outcomes. They have found reliable effects on feelings of power, positive and negative affect, self-esteem, mood, emotional resilience, confidence, sense of control, self-efficacy, body satisfaction, creativity, and interoceptive accuracy.
        </p>

        <p>
          The most foundational of these &mdash; feelings of power &mdash; was confirmed even by researchers who expected to disconfirm it. Gronau et al. (2017, <em>Comprehensive Results in Social Psychology</em>) conducted a Bayesian meta-analysis of six preregistered studies &mdash; studies designed by skeptics, with larger samples, using methods that met every standard the critics had demanded &mdash; and found a reliable effect. Latu, Duffy, Pardal, and Alger (2017) sought to replicate the felt-power finding and did. The K&ouml;rner et al. (2022) <em>Psychological Bulletin</em> meta-analysis &mdash; 88 studies, 9,779 participants &mdash; confirmed it across the full body of evidence. This is not a contested finding. It is one of the more thoroughly tested effects in social psychology.
        </p>

        <p>
          But felt power is only the beginning. Across independent studies and multiple meta-analyses, expansive postures have been shown to increase positive affect and decrease negative affect, improve self-esteem, elevate mood, strengthen emotional resilience, and enhance people&apos;s sense of control over their own lives. These effects have been found in different countries, across age groups, using different methodologies, by researchers with no stake in the outcome.
        </p>

        <p>
          These are not minor variables. They are not &ldquo;just self-report.&rdquo; They are the outcomes that clinical psychologists, emotions researchers, and cognitive scientists spend entire careers studying &mdash; because they are central to how people function. Self-esteem predicts academic achievement, mental health, and relationship quality. Emotional resilience buffers against depression and anxiety. Sense of control is one of the most robust predictors of wellbeing across the lifespan. Mood and affect shape decision-making, social connection, and physical health. When a simple, cost-free, two-minute intervention reliably shifts these outcomes &mdash; even modestly &mdash; that is worth understanding. It is worth studying. And it is worth telling people about.
        </p>

        <p>
          Think about what it means if this research is right &mdash; even partially. It means that a person preparing for a job interview, a difficult conversation, or a medical appointment can do something with their body, for two minutes, that changes how they feel walking in. It means that a child who stands tall before a test might approach it with slightly more confidence. It means that people who feel small &mdash; who have been made to feel small &mdash; have access to a tool that is free, private, and immediate. That is not trivial. And when someone says &ldquo;that was debunked,&rdquo; they are taking it away.
        </p>

        <p>
          When you hear &ldquo;power posing was debunked,&rdquo; these findings are what gets erased. They shouldn&apos;t be. They are the heart of the research.
        </p>

        {/* ── BEHAVIORAL EFFECTS ── */}
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary pt-8">
          THE BEHAVIORAL EFFECTS: REFINEMENT, NOT FAILURE
        </h2>

        <p>
          The original study measured risk-taking using a single gambling task. That specific measure has not replicated consistently &mdash; K&ouml;rner et al. (2022) counted nine separate experiments that failed to find the same effect. I am not disputing those results.
        </p>

        <p>
          But here is what&apos;s interesting &mdash; and what rarely gets mentioned. Risk-taking in a gambling task was one narrow operationalization of a broader behavioral construct: approach orientation &mdash; the tendency to move toward rather than away from challenge and opportunity. As other researchers began testing that broader construct, using different measures in different populations, they found effects consistently: action orientation (Huang et al., 2011, <em>Psychological Science</em>), decision-making and information processing (Fischer et al., 2011, JESP), pain tolerance across two experiments (Bohns &amp; Wiltermuth, 2012, JESP), action orientation across cultures (Park et al., 2013, JESP), approach and avoidance decisions in response to social threat (Metzler et al., 2023, PLOS ONE), approach action tendencies in personally relevant tasks (Elkj&aelig;r et al., 2023, <em>Frontiers in Psychology</em>), and risk-taking itself, partially (Barel et al., 2024, <em>BMC Psychology</em>). These are behavioral outcomes, not self-reports.
        </p>

        <p>
          Creativity is another approach-related outcome &mdash; and one with a growing body of well-designed research. Andolfi, Di Nuzzo, and Antonietti (2017, <em>Thinking Skills and Creativity</em>) found that expansive postures increased creative performance on divergent thinking tasks, and critically, the effect was specific to creativity, not logic, ruling out general arousal or comfort. Michinov and Michinov (2020, <em>Psychology of Aesthetics, Creativity, and the Arts</em>) extended this across five experiments, finding that expansive postures boosted divergent thinking while contractive postures facilitated convergent thinking. Andolfi and Antonietti (2020, <em>Journal of Creative Behavior</em>) provided further evidence that contractive postures specifically benefited convergent-integrative thinking tasks. That level of specificity &mdash; where the direction of the effect depends on the type of cognitive task &mdash; is exactly the kind of finding that emerges when a field matures.
        </p>

        <p>
          It is also worth noting that in the Elkj&aelig;r et al. (2022) meta-analysis, the effect appeared to be driven more by the difference between neutral postures (e.g., sitting up straight) and contractive postures than between expansive and neutral. This is not a problem for the research &mdash; it is a refinement, and exactly the kind of nuance that further study can address.
        </p>

        <p>
          Both major meta-analyses confirm the broader picture. Elkj&aelig;r et al. (2022, <em>Perspectives on Psychological Science</em>) found &ldquo;robust differences&rdquo; for both affective and behavioral responses across 73 studies. K&ouml;rner et al. (2022, <em>Psychological Bulletin</em>) found a significant overall effect on both self-report and behavioral outcomes across 88 studies and 9,779 participants.
        </p>

        {/* ── HORMONES ── */}
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary pt-8">
          THE HORMONES? THEY DIDN&apos;T REPLICATE. HERE&apos;S WHAT WE&apos;VE LEARNED SINCE.
        </h2>

        <p>
          Four studies failed to replicate the original testosterone and cortisol findings. I have never disputed those results. But there are far fewer hormonal replication studies than you might expect &mdash; and for a reason that matters.
        </p>

        <p>
          Around the same time as these replication attempts, researchers discovered that the independent labs analyzing everyone&apos;s saliva samples were producing wildly different hormone concentrations from the same samples. This is important to understand: very few researchers in this area analyze their own saliva samples. The equipment required for hormonal assays is prohibitively expensive, so virtually every lab in social neuroendocrinology sends its samples to one of a small number of commercial assay companies for analysis. We all trusted that the numbers coming back were reliable.
        </p>

        <p>
          They were not. Mehta and colleagues documented this across multiple papers. Welker, Lassetter, Brandes, Prasad, Koop, and Mehta (2016, <em>Psychoneuroendocrinology</em>) compared testosterone concentrations produced by three commonly used commercial assay kits and found that they yielded substantially different estimates &mdash; particularly for women, where the discrepancies were largest. Prasad, Lassetter, Geniole, and Mehta (2019, <em>Psychoneuroendocrinology</em>) &mdash; a paper they titled &ldquo;Unstable correspondence between salivary testosterone measured with enzyme immunoassays and tandem mass spectrometry&rdquo; &mdash; extended these findings and confirmed that the correspondence between assay methods was unreliable. A 2025 multicenter study confirmed the problem at a larger scale: different labs, different methods, same samples, different results.
        </p>

        <p>
          These measurement problems do not just affect research on posture. They affect the entire field of social neuroendocrinology &mdash; every study that relied on salivary hormone assays to draw conclusions about testosterone and cortisol. Both the original findings from our 2010 study and the failures to replicate them were produced using tools that the field now recognizes as unreliable. Given the small number of replication attempts, conducted by an even smaller number of research groups, all using these now-questionable methods, the hormonal question is essentially starting from scratch.
        </p>

        <p>
          I want to be clear about where I stand: I do not believe we have sufficient evidence to make any hormonal claims related to this research. The original findings, the replication failures, and all other salivary hormone findings in social neuroendocrinology were produced with tools we now know are unreliable. We are essentially back at the beginning &mdash; with theory but no trustworthy data. As I prepare an update to my book <em>Presence</em>, which was published in 2015 and mentions the hormonal findings, all of this will be reflected in it.
        </p>

        {/* ── RESEARCH KEEPS EXPANDING ── */}
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary pt-8">
          THE RESEARCH KEEPS EXPANDING
        </h2>

        <p>
          One of the most striking things about this field is that it keeps growing &mdash; in directions that would not have been possible had researchers followed the advice to stop.
        </p>

        <p>
          K&ouml;rner, K&ouml;hler, and Sch&uuml;tz (2020, <em>School Psychology International</em>) conducted a preregistered study of 108 German fourth graders &mdash; children &mdash; and found that expansive postures increased self-esteem, positive feelings, feelings of power, and even children&apos;s perceptions of their relationship with their teacher. The strongest effects were on school-related self-esteem. This is exactly the kind of applied, developmentally informed research that matters &mdash; taking findings from the lab and asking whether they help real children in real classrooms.
        </p>

        <p>
          Wainio-Theberge and colleagues (2025, <em>Social Cognitive and Affective Neuroscience</em>) published the first EEG study of power posing, finding significant effects on arousal and valence, with suggestive differences in frontal brain activity between expansive and contractive postures. A new neural methodology for a question people said was already answered.
        </p>

        <p>
          These studies exist only because scientists kept asking questions.
        </p>

        {/* ── INDEPENDENT ASSESSMENT ── */}
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary pt-8">
          AN INDEPENDENT ASSESSMENT
        </h2>

        <p>
          Eli Finkel &mdash; a professor of psychology at Northwestern University and the Kellogg School of Management, former editor of the <em>Journal of Personality and Social Psychology</em>, editor of the <em>Handbook of Social Psychology</em>, and one of the most widely cited social psychologists in the world &mdash; assessed the state of the evidence in a 2020 Forbes article. He has no involvement in the power posing research and no stake in the outcome. His conclusion:
        </p>

        <blockquote className="border-l-4 border-gold pl-6 py-2 my-8">
          <p className="font-serif text-xl md:text-2xl text-text-primary leading-relaxed italic">
            &ldquo;Many people were skeptical that power posing had the sorts of positive effects that Cuddy said they did. And, indeed, replication efforts haven&apos;t shown the same level of support for the hormonal effects that the initial study showed. But what is weird is that the results &mdash; preregistered, rigorous replications from scholars who were deeply skeptical of the effect &mdash; kept showing that the core effect is robust. Postural expansiveness versus contractiveness does indeed make people feel more powerful.&rdquo;
          </p>
        </blockquote>

        {/* ── HOW SCIENCE WORKS ── */}
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary pt-8">
          THIS IS HOW SCIENCE WORKS
        </h2>

        <p>
          I want to step back for a moment and name what this process actually is, because I think it gets lost in the noise.
        </p>

        <p>
          We &mdash; and others before us &mdash; published a theoretically driven experiment showing that adopting expansive postures affects variables related to the psychology of power. As a general finding, that is correct. The continued work on this, by many labs and researchers across methods and populations, has refined which power-related variables are most reliably affected, identified new ones &mdash; especially when they relate to possible interventions &mdash; and deepened our understanding of when and how these effects emerge. That is what science looks like when it is working.
        </p>

        <p>
          The failure of a specific result to replicate in another lab with other researchers is common &mdash; sometimes even inevitable &mdash; especially during periods of rapid methodological change. No finding in experimental psychology replicates perfectly every time it is tested. That is not a crisis. It is how science works. When a replication attempt fails, scientists refine their understanding of the phenomenon by building on one another&apos;s work, deepening collective knowledge, and improving tools along the way. That is the constructive ideal.
        </p>

        <p>
          Science does not advance by tearing down what came before &mdash; it builds on it. Early astronomers made extraordinary discoveries using rudimentary telescopes; later instruments only sharpened their view. Radiocarbon dating did not discredit archaeology before the 1940s &mdash; it helped calibrate and expand it. The same is true in experimental psychology. Methods evolve. Standards improve. And if we are genuinely interested in strengthening our methods, we also pay attention to how we pursue that progress &mdash; and how we treat each other along the way. That is integral to good science.
        </p>

        <p>
          In a healthy scientific environment, that is exactly what would have happened here. It is not what happened.
        </p>

        {/* ── HOW THE NARRATIVE TOOK HOLD ── */}
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary pt-8">
          HOW THE &ldquo;DEBUNKED&rdquo; NARRATIVE TOOK HOLD
        </h2>

        <p>
          In 2015, a replication study was published (Ranehill et al., 2015). It was what we call a &ldquo;partial replication&rdquo;: it replicated the effect on feelings of power &mdash; the central psychological finding &mdash; but did not replicate the hormonal or risk-taking effects. That is a meaningful and legitimate scientific result. It tells us something. It is exactly the kind of outcome that should prompt refinement, discussion, and further testing.
        </p>

        <p>
          That is not what happened. A small number of methodological critics &mdash; who referred to themselves as &ldquo;methods revolutionaries&rdquo; &mdash; seized on the partial non-replication and constructed a narrative of total failure. They did not note that feelings of power had replicated. They were not interested in nuance. And their attacks were not directed at the research team broadly. They were directed, with remarkable specificity and intensity, at me.
        </p>

        <p>
          In September 2016, in the middle of this campaign, the lead author of the original study posted a statement on her personal website saying she did not believe &ldquo;power pose effects are real.&rdquo; It was not a peer-reviewed publication. It contained no new data or analyses. It was a personal statement, posted at a particular moment in time.
        </p>

        <p>
          The statement was sweeping. It did not distinguish between the hormonal effects (which had not replicated), the felt-power effects (which had), or any of the myriad emotional and behavioral effects. It rejected all of it. And it advised researchers to stop studying power poses altogether.
        </p>

        <p>
          That statement went viral. It became the single most cited piece of evidence that the research was fake. It is still posted today.
        </p>

        <p>
          But what happened next is the part that rarely gets told.
        </p>

        <p>
          In 2017 &mdash; less than a year later &mdash; the lead author co-authored a peer-reviewed paper (Jonas et al., 2017, <em>Comprehensive Results in Social Psychology</em>) in which the authors wrote: &ldquo;A surprise awaited us as the novel Bayesian meta-analysis conducted by Gronau (Gronau et al., this issue) in fact showed a reliable non-zero effect on felt power.&rdquo; Her name is on that paper. After posting a statement saying she does not believe the effects are real, she co-authored a peer-reviewed publication acknowledging that preregistered evidence, collected by researchers who expected null results, showed that the core effect is real.
        </p>

        <p>
          Her website statement says one thing. Her subsequent peer-reviewed work says another.
        </p>

        <p>
          I am choosing not to name her here &mdash; not because her statement isn&apos;t public, but because I believe none of this would have happened if the methods guys, and the journalists who trusted them without doing proper research, hadn&apos;t created the conditions that made it happen. She should not be the target. The people who manufactured the &ldquo;debunked&rdquo; narrative and aimed it, with great precision, at a single researcher &mdash; those are the people who should answer for what followed.
        </p>

        <p>
          Maybe this is what she truly believes. I&apos;m not here to litigate that. I&apos;m here to share the actual research evidence with you &mdash; the peer-reviewed record that has accumulated in the decade since that statement was posted &mdash; and let you decide for yourself.
        </p>

        <p>
          What I will say is this: our two other coauthors on the original and related studies made no such statements. And it did undeserved damage to them and to their careers.
        </p>

        <p>
          And I will ask a simple question: what would have been lost if everyone had taken the lead author&apos;s advice to stop studying power poses?
        </p>

        <p>
          We would not have the K&ouml;rner et al. <em>Psychological Bulletin</em> meta-analysis of 88 studies. We would not have the Elkj&aelig;r et al. meta-analysis in <em>Perspectives on Psychological Science</em>. We would not have the creativity research, the children&apos;s study, the clinical applications in eating disorders, the first neural evidence. We would not know what we now know &mdash; which is that these effects are real, that they matter, and that the story people were told was wrong.
        </p>

        {/* ── WHAT IT'S ACTUALLY LIKE ── */}
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary pt-8">
          WHAT IT&apos;S ACTUALLY LIKE
        </h2>

        <p>
          I want to say something about what it is like to live inside a false narrative, because I think it matters for understanding how these stories persist.
        </p>

        <p>
          Last week, a producer from BBC Radio 4 contacted me. He is working on a show called &ldquo;Everything Is Fake (And Nobody Cares).&rdquo; He wanted to discuss power posing as an example of something that had been, in his words, &ldquo;shown to be false.&rdquo; His primary evidence was the 2016 website statement. He had not read any of the meta-analyses. He did not know about the 88 studies, the nearly ten thousand participants, the preregistered replications by skeptics, the creativity research, the children&apos;s study, or the hormonal measurement crisis. He did not know that the co-author who said the effects aren&apos;t real subsequently co-authored a paper saying they are.
        </p>

        <p>
          I spent more than ten hours responding &mdash; reviewing the literature, pulling citations, writing carefully, anticipating distortions &mdash; across multiple emails. That is what it takes, every single time, to correct a story someone has already decided is true. And, probably inevitably, they will still choose a framing that trades accuracy and completeness for splashiness and drama.
        </p>

        <p>
          And this is not unusual. Every time a journalist contacts me about this topic &mdash; and it happens regularly, a decade later &mdash; the same thing happens. They arrive having already written the story in their heads. They have read the Wikipedia summary or a blog post. They know that power posing was debunked. They sometimes know that my co-author said so. They do not know what the research actually shows. And so I do this again &mdash; hours of work I would rather spend doing research, writing, or teaching. I do it because the record matters, and because if I don&apos;t, the lazy version of the story runs unchecked.
        </p>

        <p>
          Some arrive with assumptions about me that have nothing to do with my work. So let me be clear about who I am.
        </p>

        <p>
          I am a scientist. My career spans decades of peer-reviewed research on stereotyping, prejudice, and social cognition. In 2023, research I coauthored with Susan Fiske and Peter Glick received the Scientific Impact Award from the Society for Experimental Social Psychology, recognizing it as one of the highest-impact contributions to the field in twenty-five years. The postural feedback work is a small part of what I do.
        </p>

        <p>
          And because this has come up before: I was not denied tenure at Harvard. I did not leave in shame. My dean at the time was so concerned that this false claim would circulate &mdash; given the intensity of the bullying I was subjected to &mdash; that he wrote a letter specifically for me to share with anyone who tries to make that claim. I have it, and I will share it if needed.
        </p>

        <p>
          I mention these things not to appeal to authority but because the gap between who I actually am and who the &ldquo;debunked&rdquo; narrative suggests I am is vast. That gap is itself a consequence of what happens when a complex scientific record gets reduced to a single word.
        </p>

        {/* ── WHY THIS MATTERS ── */}
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary pt-8">
          WHY THIS MATTERS BEYOND ME
        </h2>

        <p>
          This is not just my story. It is a story about what happens when scientific discourse breaks down &mdash; when the mechanisms that are supposed to refine knowledge instead become tools for punishment, and when the public is left with a version of events that bears little resemblance to what the evidence actually shows.
        </p>

        <p>
          We are living through a time when public trust in science is fragile. When people are told that research is fake &mdash; without being given the tools to evaluate that claim &mdash; it doesn&apos;t just affect one researcher or one line of work. It feeds a broader cynicism: that science can&apos;t be trusted, that findings are arbitrary, that expertise is performance. From vaccine hesitancy to climate denial, the consequences of that cynicism are real.
        </p>

        <p>
          The irony of the &ldquo;power posing was debunked&rdquo; narrative is that the claim itself is the misinformation. The peer-reviewed record is clear. The effects on how people feel, think, and behave are real. The science is not settled on every question &mdash; that&apos;s how science works &mdash; but the blanket claim that it was &ldquo;debunked&rdquo; is not supported by the evidence. It never was.
        </p>

        <p>
          Getting this right matters. Not just for me, but for every scientist doing careful work in a world that increasingly rewards the loudest and simplest story over the most accurate one.
        </p>

        <p>
          The evidence is there. It has been there for years. All I am asking is that people look at it.
        </p>

        {/* Signature */}
        <p className="font-serif text-2xl font-bold text-text-primary pt-4">
          Amy Cuddy
        </p>

        {/* ── REFERENCES ── */}
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-text-primary pt-12 border-t border-gray-200">
          REFERENCES
        </h2>

        <div className="space-y-4 text-base text-text-secondary">
          <p>Andolfi, V. R., Di Nuzzo, C., &amp; Antonietti, A. (2017). Opening the mind through the body: The effects of posture on creative processes. <em>Thinking Skills and Creativity, 24</em>, 20&ndash;28.</p>
          <p>Andolfi, V. R., &amp; Antonietti, A. (2020). Contractive vs. expansive body posture effects on convergent-integrative thinking tasks. <em>Journal of Creative Behavior, 54</em>(4), 871&ndash;880.</p>
          <p>Barel, E., Shahrabani, S., Mahagna, L., et al. (2024). The effects of power posing on neuroendocrine levels and risk-taking. <em>BMC Psychology, 12</em>, 726.</p>
          <p>Bohns, V. K., &amp; Wiltermuth, S. S. (2012). It hurts when I do this (or you do that): Posture and pain tolerance. <em>Journal of Experimental Social Psychology, 48</em>(1), 341&ndash;345.</p>
          <p>Carney, D. R., Cuddy, A. J. C., &amp; Yap, A. J. (2010). Power posing: Brief nonverbal displays affect neuroendocrine levels and risk tolerance. <em>Psychological Science, 21</em>(10), 1363&ndash;1368.</p>
          <p>Cuddy, A. J. C., Schultz, S. J., &amp; Fosse, N. E. (2018). P-curving a more comprehensive body of research on postural feedback reveals clear evidential value for power-posing effects: Reply to Simmons and Simonsohn (2017). <em>Psychological Science, 29</em>(4), 656&ndash;666.</p>
          <p>Elkj&aelig;r, E., Mikkelsen, M. B., Michalak, J., Mennin, D. S., &amp; O&apos;Toole, M. S. (2022). Expansive and contractive postures and movement: A systematic review and meta-analysis of the effect of motor displays on affective and behavioral responses. <em>Perspectives on Psychological Science, 17</em>(1), 276&ndash;304.</p>
          <p>Elkj&aelig;r, E., Mikkelsen, M. B., Michalak, J., Mennin, D. S., &amp; O&apos;Toole, M. S. (2023). Using bodily displays to facilitate approach action outcomes within the context of a personally relevant task. <em>Frontiers in Psychology, 14</em>, 1147printing.</p>
          <p>Elsesser, K. (2020, October 2). The debate on power posing continues: Here&apos;s where we stand. <em>Forbes</em>.</p>
          <p>Fischer, J., Fischer, P., Englich, B., Aydin, N., &amp; Frey, D. (2011). Empower my decisions: The effects of power gestures on confirmatory information processing. <em>Journal of Experimental Social Psychology, 47</em>(6), 1146&ndash;1154.</p>
          <p>Gronau, Q. F., Van Erp, S., Heck, D. W., Cesario, J., Jonas, K. J., &amp; Wagenmakers, E.-J. (2017). A Bayesian model-averaged meta-analysis of the power pose effect with informed and default priors: The case of felt power. <em>Comprehensive Results in Social Psychology, 2</em>(1), 123&ndash;138.</p>
          <p>Huang, L., Galinsky, A. D., Gruenfeld, D. H., &amp; Guillory, L. E. (2011). Powerful postures versus powerful roles: Which is the proximate correlate of thought and behavior? <em>Psychological Science, 22</em>(1), 95&ndash;102.</p>
          <p>Jonas, K. J., Cesario, J., Alger, M., Bailey, A. H., Bombari, D., Carney, D., ... &amp; Tybur, J. M. (2017). Power poses &mdash; where do we stand? <em>Comprehensive Results in Social Psychology, 2</em>(1), 139&ndash;141.</p>
          <p>K&ouml;rner, R., K&ouml;hler, H., &amp; Sch&uuml;tz, A. (2020). Powerful and confident children through expansive body postures? A preregistered test of the effects of power posing on children. <em>School Psychology International, 41</em>(4), 315&ndash;330.</p>
          <p>K&ouml;rner, R., &amp; Sch&uuml;tz, A. (2020). Dominance or prestige: A review of the effects of power poses and other body postures. <em>Social and Personality Psychology Compass, 14</em>(8), e12559.</p>
          <p>K&ouml;rner, R., R&ouml;seler, L., Sch&uuml;tz, A., &amp; Bushman, B. J. (2022). Dominance and prestige: Meta-analytic review of experimentally induced body position effects on behavioral, self-report, and physiological dependent variables. <em>Psychological Bulletin, 148</em>(1&ndash;2), 67&ndash;85.</p>
          <p>Metzler, H., Vilarem, E., Petschen, A., &amp; Gr&egrave;zes, J. (2023). Power pose effects on approach and avoidance decisions in response to social threat. <em>PLOS ONE, 18</em>(4), e0283904.</p>
          <p>Michinov, E., &amp; Michinov, N. (2020). Creativity connected with body posture: The effects of expansive and contractive postures on creative performance. <em>Psychology of Aesthetics, Creativity, and the Arts, 14</em>(1), 116&ndash;127.</p>
          <p>Park, L. E., Streamer, L., Huang, L., &amp; Galinsky, A. D. (2013). Stand tall, but don&apos;t put your feet up: Universal and culturally-specific effects of expansive postures on power. <em>Journal of Experimental Social Psychology, 49</em>(6), 965&ndash;971.</p>
          <p>Prasad, S., Lassetter, B., Geniole, S. N., &amp; Mehta, P. H. (2019). Unstable correspondence between salivary testosterone measured with enzyme immunoassays and tandem mass spectrometry. <em>Psychoneuroendocrinology, 109</em>, 104373.</p>
          <p>Ranehill, E., Dreber, A., Johannesson, M., Leiberg, S., Sul, S., &amp; Weber, R. A. (2015). Assessing the robustness of power posing: No effect on hormones and risk tolerance in a large sample of men and women. <em>Psychological Science, 26</em>(5), 653&ndash;656.</p>
          <p>Wainio-Theberge, S., Bhatt, M., Bhattacharyya, K., et al. (2025). Neural correlates of power-related postures and their behavioural consequences: A preliminary electrophysiological investigation. <em>Social Cognitive and Affective Neuroscience, 20</em>(1), nsaf036.</p>
          <p>Welker, K. M., Lassetter, B., Brandes, C. M., Prasad, S., Koop, D. R., &amp; Mehta, P. H. (2016). A comparison of salivary testosterone measurement using immunoassays and tandem mass spectrometry. <em>Psychoneuroendocrinology, 71</em>, 180&ndash;188.</p>
        </div>

      </div>
    </article>
  );
}

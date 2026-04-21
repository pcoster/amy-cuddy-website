import type { SpeakingTopic as SpeakingTopicType } from "@/data/speaking";

interface SpeakingTopicProps {
  topic: SpeakingTopicType;
  variant?: "card" | "full";
}

export default function SpeakingTopic({ topic, variant = "card" }: SpeakingTopicProps) {
  if (variant === "full") {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 md:p-10">
          {/* Icon + title */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-navy/5 border border-navy/10 flex items-center justify-center flex-shrink-0">
              <span className="text-navy text-xl">{topic.icon}</span>
            </div>
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-text-primary leading-tight">
                {topic.title}
              </h3>
              <p className="text-navy font-medium text-sm mt-1">{topic.subtitle}</p>
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed mb-8">{topic.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key takeaways */}
            <div>
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-text-secondary mb-4">
                Key Takeaways
              </p>
              <ul className="space-y-2.5">
                {topic.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    </span>
                    {takeaway}
                  </li>
                ))}
              </ul>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-text-secondary mb-3">
                  Ideal For
                </p>
                <div className="flex flex-wrap gap-2">
                  {topic.audience.map((aud) => (
                    <span
                      key={aud}
                      className="text-xs text-navy bg-blue-50 border border-navy/10 px-3 py-1 rounded-full"
                    >
                      {aud}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-text-secondary mb-3">
                  Format Options
                </p>
                <div className="flex flex-wrap gap-2">
                  {topic.duration.map((dur) => (
                    <span
                      key={dur}
                      className="text-xs text-text-secondary bg-background-alt border border-gray-200 px-3 py-1 rounded-full"
                    >
                      {dur}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Card variant
  return (
    <div className="group bg-white rounded-xl border border-gray-100 p-6 md:p-8 hover:shadow-md hover:border-navy/10 transition-all duration-300 flex flex-col h-full">
      <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-5">
        <span className="text-navy text-lg">{topic.icon}</span>
      </div>
      <h3 className="font-serif text-lg font-bold text-text-primary mb-2 group-hover:text-navy transition-colors leading-snug">
        {topic.title}
      </h3>
      <p className="text-navy/80 font-medium text-sm mb-4">{topic.subtitle}</p>
      <p className="text-text-secondary text-sm leading-relaxed flex-1">{topic.description}</p>
      <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
        {topic.duration.map((dur) => (
          <span
            key={dur}
            className="text-xs text-text-secondary bg-background-alt px-2.5 py-1 rounded-full"
          >
            {dur}
          </span>
        ))}
      </div>
    </div>
  );
}

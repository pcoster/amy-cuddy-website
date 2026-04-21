import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: "default" | "large" | "minimal";
}

export default function TestimonialCard({
  testimonial,
  variant = "default",
}: TestimonialCardProps) {
  if (variant === "large") {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
        <div className="text-gold text-5xl font-serif leading-none mb-6">&ldquo;</div>
        <blockquote className="font-serif text-xl md:text-2xl text-text-primary leading-relaxed mb-8">
          {testimonial.quote}
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy/20 to-navy/10 flex items-center justify-center flex-shrink-0">
            <span className="font-serif font-bold text-navy text-lg">
              {testimonial.author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-text-primary">{testimonial.author}</p>
            <p className="text-sm text-text-secondary">
              {testimonial.role}
              {testimonial.organization && `, ${testimonial.organization}`}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className="py-8 border-b border-gray-100 last:border-0">
        <p className="text-gold text-2xl font-serif leading-none mb-3">&ldquo;</p>
        <blockquote className="text-text-secondary leading-relaxed mb-4 italic">
          {testimonial.quote}
        </blockquote>
        <div>
          <p className="font-semibold text-text-primary text-sm">{testimonial.author}</p>
          <p className="text-xs text-text-secondary">{testimonial.role}, {testimonial.organization}</p>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-background-alt rounded-xl p-6 md:p-8 flex flex-col h-full">
      <div className="text-gold text-4xl font-serif leading-none mb-4">&ldquo;</div>
      <blockquote className="text-text-secondary leading-relaxed flex-1 mb-6">
        {testimonial.quote}
      </blockquote>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy/20 to-navy/10 flex items-center justify-center flex-shrink-0">
          <span className="font-serif font-bold text-navy">
            {testimonial.author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-text-primary text-sm">{testimonial.author}</p>
          <p className="text-xs text-text-secondary leading-tight">
            {testimonial.role}
            {testimonial.organization && (
              <>
                <br />
                <span className="italic">{testimonial.organization}</span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

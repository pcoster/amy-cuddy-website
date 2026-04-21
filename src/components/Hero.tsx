import Link from "next/link";

interface HeroProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: "home" | "page";
  align?: "left" | "center";
}

export default function Hero({
  eyebrow,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  variant = "page",
  align = "center",
}: HeroProps) {
  const isHome = variant === "home";

  return (
    <section
      className={`relative overflow-hidden ${
        isHome
          ? "min-h-[92vh] flex items-center"
          : "pt-32 pb-20 md:pt-40 md:pb-28"
      } bg-navy`}
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className={`max-w-4xl ${
            align === "center" ? "mx-auto text-center" : "text-left"
          }`}
        >
          {eyebrow && (
            <p className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-6 border border-gold/30 px-4 py-1.5 rounded-full">
              {eyebrow}
            </p>
          )}

          <h1
            className={`font-serif font-bold text-white leading-tight ${
              isHome
                ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                : "text-3xl sm:text-4xl md:text-5xl"
            }`}
          >
            {heading}
          </h1>

          {subheading && (
            <p
              className={`mt-6 text-white/70 leading-relaxed ${
                isHome
                  ? "text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto"
                  : "text-base sm:text-lg max-w-2xl mx-auto"
              }`}
            >
              {subheading}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div
              className={`mt-10 flex flex-col sm:flex-row gap-4 ${
                align === "center" ? "justify-center" : ""
              }`}
            >
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="px-8 py-4 bg-gold text-[#0D0D0D] font-semibold rounded-md hover:bg-gold-light transition-colors shadow-lg text-sm md:text-base tracking-wide"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="px-8 py-4 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-sm md:text-base tracking-wide"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent" />
    </section>
  );
}

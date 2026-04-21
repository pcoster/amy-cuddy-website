import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book Amy Cuddy for your next keynote or event, or send a general inquiry. Amy's team responds to all inquiries within 2–3 business days.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-gold border border-gold/30 px-4 py-1.5 rounded-full mb-6">
            Get in Touch
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Contact & Booking
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re looking to book Amy for an event or have a media inquiry,
            we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Booking inquiries */}
              <div className="bg-background-alt rounded-2xl p-8 border border-gray-100">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-navy" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-text-primary mb-2">
                  Speaking & Booking
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  To book Amy for a keynote, workshop, conference, or other speaking engagement,
                  please complete the inquiry form or email our booking team directly.
                </p>
                <a
                  href={`mailto:${siteConfig.contact.bookingEmail}`}
                  className="text-navy font-semibold text-sm hover:text-navy-light transition-colors"
                >
                  {siteConfig.contact.bookingEmail}
                </a>
              </div>

              {/* General inquiries */}
              <div className="bg-background-alt rounded-2xl p-8 border border-gray-100">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-navy" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-text-primary mb-2">
                  General Inquiries
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  For press, media, research, or other inquiries, please reach out via email.
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-navy font-semibold text-sm hover:text-navy-light transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              {/* Response time */}
              <div className="bg-navy rounded-2xl p-8">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  Response Time
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {siteConfig.contact.responseTime}
                </p>
              </div>

              {/* Social */}
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-text-secondary mb-4">
                  Follow Amy
                </p>
                <div className="flex gap-3">
                  {[
                    { href: siteConfig.social.twitter, label: "Twitter / X" },
                    { href: siteConfig.social.linkedin, label: "LinkedIn" },
                    { href: siteConfig.social.instagram, label: "Instagram" },
                  ].map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 text-xs font-semibold text-center border border-gray-200 text-text-secondary rounded-lg hover:border-navy hover:text-navy transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                Booking Inquiry Form
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-3">
                Tell Us About Your Event
              </h2>
              <p className="text-text-secondary mb-10">
                Please share as much detail as you can — the more context we have, the better
                we can tailor Amy&apos;s response to your needs.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Common Questions
            </p>
            <h2 className="font-serif text-4xl font-bold text-text-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What types of events does Amy speak at?",
                a: "Amy speaks at corporate conferences, leadership offsites, women's leadership summits, academic institutions, nonprofit events, healthcare organizations, and government agencies. She also delivers workshops, webinars, and panel discussions.",
              },
              {
                q: "How far in advance should we book?",
                a: "Amy's calendar fills up quickly — we recommend reaching out at least 3–6 months in advance for most events, and 6–12 months for large conferences or international engagements.",
              },
              {
                q: "Can Amy's talk be customized for our audience?",
                a: "Yes — every talk is tailored to the specific audience, industry, and objectives of the event. Our team will work with yours in the weeks before the event to ensure the content is perfectly calibrated.",
              },
              {
                q: "Does Amy do virtual keynotes?",
                a: "Yes. Amy delivers both in-person and virtual keynotes. Virtual sessions can be live or pre-recorded, and our team will work with your technical team to ensure a seamless experience.",
              },
              {
                q: "How do I request a media interview?",
                a: "Please use the contact form above and select 'Media / Press Interview' as the event type, or email us directly at info@amycuddy.com.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="font-semibold text-text-primary mb-3">{faq.q}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

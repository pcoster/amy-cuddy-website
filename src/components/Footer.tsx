import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import { siteConfig } from "@/data/site";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/books", label: "Books" },
  { href: "/writing", label: "Writing" },
  { href: "/media", label: "Media" },
  { href: "/research", label: "Research" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Stay Connected
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
              Insights on Presence, Power & Leadership
            </h3>
            <p className="text-white/60 mb-8">
              Receive updates on Amy&apos;s research, speaking engagements, and new work.
            </p>
            <NewsletterForm dark />
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-2xl font-bold text-white tracking-wide">
              Amy Cuddy
            </Link>
            <p className="mt-3 text-white/50 text-sm leading-relaxed">
              Social Psychologist · Author · TED Speaker
            </p>
            <p className="mt-4 text-white/40 text-sm leading-relaxed italic">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-5">
              Connect
            </p>
            <div className="space-y-3">
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 group-hover:border-white/40 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </span>
                Twitter / X
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 group-hover:border-white/40 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                LinkedIn
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 group-hover:border-white/40 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </span>
                Instagram
              </a>
            </div>

            <div className="mt-8">
              <p className="text-white/40 text-xs mb-1">General inquiries</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </div>
            <div className="mt-3">
              <p className="text-white/40 text-xs mb-1">Speaking & booking</p>
              <a
                href={`mailto:${siteConfig.contact.bookingEmail}`}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                {siteConfig.contact.bookingEmail}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Amy Cuddy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-white/30 hover:text-white/60 text-sm transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

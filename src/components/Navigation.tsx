"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const aboutLinks = [
  { href: "/about", label: "About Amy", indent: false },
  { href: "/speaking", label: "Speaking", indent: false },
  { href: "/books", label: "Books", indent: false },
  { href: "/books/presence", label: "Presence", indent: true },
  { href: "/books/bullied", label: "Bullied", indent: true },
  { href: "/writing", label: "Writing", indent: false },
  { href: "/research", label: "Research", indent: false },
];

const topicLinks = [
  { href: "/topics/presence-body-language", label: "Presence & Body Language" },
  { href: "/topics/confidence-under-pressure", label: "Confidence Under Pressure" },
  { href: "/topics/leadership-trust", label: "Leadership & Trust" },
  { href: "/topics/bullying-social-bravery", label: "Bullying & Social Bravery" },
];

const topLinks = [{ href: "/media", label: "Media" }];

const aboutPaths = aboutLinks.map((l) => l.href);
const aboutTopLevelPaths = aboutLinks.filter((l) => !l.indent).map((l) => l.href);
const chevron = (
  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
);

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileTopicsOpen, setMobileTopicsOpen] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const topicsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setAboutOpen(false);
    setTopicsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false);
      if (topicsRef.current && !topicsRef.current.contains(e.target as Node)) setTopicsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isAboutActive = aboutPaths.includes(pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl md:text-2xl font-bold text-navy tracking-wide hover:text-navy-light transition-colors"
          >
            Amy Cuddy
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">

            {/* About dropdown */}
            <div className="relative" ref={aboutRef}>
              <button
                onClick={() => { setAboutOpen((o) => !o); setTopicsOpen(false); }}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-md ${
                  isAboutActive ? "text-navy" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                About
                <span className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}>{chevron}</span>
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 transition-all duration-200 origin-top ${
                  aboutOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-2 text-sm font-medium transition-colors ${
                      link.indent ? "pl-7 pr-4 text-xs text-text-secondary/80" : "px-4"
                    } ${
                      pathname === link.href ? "text-navy bg-blue-50" : "hover:text-text-primary hover:bg-gray-50 text-text-secondary"
                    }`}
                  >
                    {link.indent && <span className="mr-1.5 text-gray-300">↳</span>}
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Topics mega-menu */}
            <div className="relative" ref={topicsRef}>
              <button
                onClick={() => { setTopicsOpen((o) => !o); setAboutOpen(false); }}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-md ${
                  topicsOpen ? "text-navy" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Topics
                <span className={`transition-transform duration-200 ${topicsOpen ? "rotate-180" : ""}`}>{chevron}</span>
              </button>

              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 transition-all duration-200 origin-top ${
                  topicsOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {topicLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                      pathname === link.href ? "text-navy bg-blue-50" : "text-text-secondary hover:text-text-primary hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Top-level links */}
            {topLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-md ${
                  pathname === link.href ? "text-navy" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/books"
              className="ml-4 px-5 py-2.5 bg-navy text-white text-sm font-semibold tracking-wide rounded-md hover:bg-navy-dark transition-colors shadow-sm"
            >
              Get the Books
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[700px] pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-gray-100">

            {/* About accordion */}
            <button
              onClick={() => setMobileAboutOpen((o) => !o)}
              className={`flex items-center justify-between px-3 py-3 text-base font-medium transition-colors rounded-md w-full text-left ${
                isAboutActive ? "text-navy bg-blue-50" : "text-text-secondary hover:text-text-primary hover:bg-gray-50"
              }`}
            >
              About
              <span className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}>{chevron}</span>
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${mobileAboutOpen ? "max-h-64" : "max-h-0"}`}>
              {aboutLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block pr-3 rounded-md transition-colors ${
                    link.indent ? "pl-10 py-2 text-xs text-text-secondary/80" : "pl-6 py-2.5 text-sm font-medium"
                  } ${
                    pathname === link.href ? "text-navy bg-blue-50" : "text-text-secondary hover:text-text-primary hover:bg-gray-50"
                  }`}
                >
                  {link.indent && <span className="mr-1.5 text-gray-300">↳</span>}
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Topics accordion */}
            <button
              onClick={() => setMobileTopicsOpen((o) => !o)}
              className={`flex items-center justify-between px-3 py-3 text-base font-medium transition-colors rounded-md w-full text-left ${
                mobileTopicsOpen ? "text-navy" : "text-text-secondary hover:text-text-primary hover:bg-gray-50"
              }`}
            >
              Topics
              <span className={`transition-transform duration-200 ${mobileTopicsOpen ? "rotate-180" : ""}`}>{chevron}</span>
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${mobileTopicsOpen ? "max-h-64" : "max-h-0"}`}>
              {topicLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block pl-6 pr-3 py-2.5 text-sm font-medium transition-colors rounded-md ${
                    pathname === link.href ? "text-navy bg-blue-50" : "text-text-secondary hover:text-text-primary hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {topLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-3 text-base font-medium transition-colors rounded-md ${
                  pathname === link.href ? "text-navy bg-blue-50" : "text-text-secondary hover:text-text-primary hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/books"
              className="mt-3 px-5 py-3 bg-navy text-white text-base font-semibold text-center rounded-md hover:bg-navy-dark transition-colors"
            >
              Get the Books
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

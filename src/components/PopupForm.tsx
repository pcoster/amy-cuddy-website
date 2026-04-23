"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ac_popup_seen";
const DELAY_MS = 4000;
const KIT_FORM_UID = "8d3480defa";

type Status = "idle" | "submitting" | "success" | "error";

export default function PopupForm() {
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [optIn, setOptIn] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!optIn) return;
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(
        `https://app.convertkit.com/forms/${KIT_FORM_UID}/subscriptions`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: firstName.trim(),
            email_address: email.trim(),
          }),
        }
      );

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.message ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  function dismiss() {
    setVisible(false);
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 transition-opacity duration-500"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      role="dialog"
      aria-modal="true"
      aria-hidden={!visible}
      aria-label="Newsletter signup"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={dismiss}
      />

      {/* Panel */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transition-transform duration-500"
        style={{ transform: visible ? "scale(1)" : "scale(0.95)" }}
      >
        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>

        {status === "success" ? (
          /* ── Success state ── */
          <div className="px-8 py-12 text-center">
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-bold text-text-primary mb-3">
              You&apos;re in.
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Thanks for subscribing. Check your inbox for a confirmation email,
              then you&apos;re all set.
            </p>
            <button
              onClick={dismiss}
              className="px-6 py-2.5 bg-navy text-white text-sm font-semibold rounded-md hover:bg-navy-dark transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          /* ── Form state ── */
          <div>
            {/* Header band */}
            <div className="bg-navy px-8 pt-10 pb-8">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-3">
                Amy Cuddy
              </p>
              <h2 className="font-serif text-2xl font-bold text-white leading-snug">
                Research, insights, and updates — straight to your inbox.
              </h2>
            </div>

            {/* Form body */}
            <form onSubmit={handleSubmit} noValidate className="px-8 py-7 space-y-4">
              <p className="text-text-secondary text-sm leading-relaxed">
                Join thousands of readers who get Amy&apos;s latest thinking on
                presence, power, and what the science actually shows.
              </p>

              <div className="space-y-3">
                <div>
                  <label htmlFor="popup-first-name" className="block text-xs font-semibold text-text-primary mb-1.5">
                    First name
                  </label>
                  <input
                    id="popup-first-name"
                    type="text"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Your first name"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md text-sm text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="popup-email" className="block text-xs font-semibold text-text-primary mb-1.5">
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="popup-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md text-sm text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy transition-colors"
                  />
                </div>
              </div>

              {/* Explicit opt-in */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={optIn}
                    onChange={(e) => setOptIn(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      optIn
                        ? "bg-navy border-navy"
                        : "bg-white border-gray-300 group-hover:border-navy/50"
                    }`}
                  >
                    {optIn && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-xs text-text-secondary leading-relaxed">
                  Yes, I&apos;d like to subscribe to Amy&apos;s newsletter. I understand I
                  can unsubscribe at any time.
                </span>
              </label>

              {errorMsg && (
                <p className="text-red-600 text-xs leading-relaxed">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={!optIn || !email || status === "submitting"}
                className="w-full py-3 bg-navy text-white font-semibold text-sm rounded-md hover:bg-navy-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Subscribing…" : "Subscribe"}
              </button>

              <p className="text-center text-xs text-gray-400">
                No spam. Unsubscribe any time.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

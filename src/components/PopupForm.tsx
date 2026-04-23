"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "ac_popup_seen";
const DELAY_MS = 4000;

export default function PopupForm() {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const container = containerRef.current;
    if (!container || container.querySelector("script")) return;

    // Inject Kit branding-hide CSS (reuses the same id as NewsletterForm)
    if (!document.getElementById("kit-hide-branding")) {
      const style = document.createElement("style");
      style.id = "kit-hide-branding";
      style.textContent = `
        .formkit-powered-by-convertkit-container,
        .formkit-powered-by-convertkit,
        [data-element="powered-by"],
        .seva-powered-by { display: none !important; }
      `;
      document.head.appendChild(style);
    }

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", "8d3480defa");
    script.src = "https://amy-cuddy.kit.com/8d3480defa/index.js";
    container.appendChild(script);

    return () => { script.remove(); };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      />

      {/* Panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>

        {/* Kit form renders here */}
        <div ref={containerRef} className="p-2" />
      </div>
    </div>
  );
}

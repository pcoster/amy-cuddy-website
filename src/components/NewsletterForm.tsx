"use client";

import { useEffect, useRef } from "react";

// Kit.com (ConvertKit) embed — uid: 495315943b
export default function NewsletterForm({ dark: _dark }: { dark?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector("script")) return;

    // Inject CSS to remove Kit's "Built with Kit" branding badge
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
    script.setAttribute("data-uid", "495315943b");
    script.src = "https://amy-cuddy.kit.com/495315943b/index.js";
    container.appendChild(script);

    return () => { script.remove(); };
  }, []);

  return <div ref={containerRef} />;
}

"use client";

import { useEffect, useRef } from "react";

// Kit.com (ConvertKit) embed — uid: 495315943b
// The dark prop is kept for API compatibility but styling is controlled via Kit.com dashboard
export default function NewsletterForm({ dark: _dark }: { dark?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", "495315943b");
    script.src = "https://amy-cuddy.kit.com/495315943b/index.js";
    container.appendChild(script);

    return () => { script.remove(); };
  }, []);

  return <div ref={containerRef} />;
}

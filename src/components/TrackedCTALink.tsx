"use client";

import { trackCTAClick } from "@/lib/gtag";

export default function TrackedCTALink({
  location,
  className,
  children,
}: {
  location: string;
  className?: string;
  children: React.ReactNode;
}) {
  const CTA_LINK =
    "https://www.rajaa7.com/share/agent/AA6TEGU5?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0=";

  return (
    <a
      href={CTA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackCTAClick(location)}
    >
      {children}
    </a>
  );
}

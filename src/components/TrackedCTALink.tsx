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
    "https://share-rxapq9cajg.raja7.org/share/agent/AA0RWJKX?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0=";

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

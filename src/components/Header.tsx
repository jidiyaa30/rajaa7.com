"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { trackCTAClick, trackNavClick } from "@/lib/gtag";

const CTA_LINK = "https://share-rxapq9cajg.raja7.org/share/agent/AA0RWJKX?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0=";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Download", href: "/download" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Blog", href: "/blog" },
];

const allRoutes = [
  "/", "/download", "/about", "/features", "/blog",
  "/blog/raja7-game-complete-guide",
  "/blog/raja7-apk-download-android",
  "/blog/raja7-game-register-login",
  "/raja7", "/raja7-game", "/raja7-gaming", "/raja7-gamers",
  "/raja7-apk", "/raja7-game-apk", "/raja7-apk-download",
  "/raja7-game-download", "/raja7-game-login", "/raja7-game-register",
  "/raja7-game-app", "/raja7-game-2026", "/raja7-game-android",
  "/raja7-app-download", "/raja7-login", "/raja7-register",
  "/download-raja7", "/raja7-game-online", "/raja7-game-play",
  "/raja7-game-bonus", "/raja7-game-install", "/raja7-game-free",
  "/raja7-game-latest-version", "/raja7-game-update",
  "/raja7-download", "/raja7-game-apk-download", "/raja7-game-rewards",
  "/raja7-game-apk-2026", "/raja7-game-features", "/raja7-game-guide",
  "/raja7-game-review", "/raja7-game-signup",
  "/privacy-policy", "/disclaimer",
];

export default function Header() {
  const router = useRouter();

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const mainTimer = setTimeout(() => {
      allRoutes.forEach((route, index) => {
        const routeTimer = setTimeout(() => {
          router.prefetch(route);
        }, index * 100);
        timers.push(routeTimer);
      });
    }, 5000);

    return () => {
      clearTimeout(mainTimer);
      timers.forEach(clearTimeout);
    };
  }, [router]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-light shadow-sm relative">
      <div className="max-w-7xl max-w-7xl mx-auto px-2 sm:px-6 py-2 relative">
        <div className="flex items-center justify-between h-10">
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group"
            onClick={() => trackCTAClick("header_logo")}
          >
            <Image
              src="/logo.webp"
              alt="Raja7 Game Official Logo - Download Raja7 APK"
              width={36}
              height={36}
              className="w-9 h-9 rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              priority
            />
            <span className="text-lg font-bold text-text-primary tracking-tight">
              Raja7<span className="text-primary">Game</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary-50 transition-all duration-200"
                onClick={() => trackNavClick(link.name)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 btn-cta !py-2.5 !px-5 !text-sm !rounded-lg"
              onClick={() => trackCTAClick("header_download_btn")}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download APK
            </a>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import TrackedCTALink from "./TrackedCTALink";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Download", href: "/download" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Blog", href: "/blog" },
  { name: "Complete Guide", href: "/blog/raja7-game-complete-guide" },
  { name: "APK Download Guide", href: "/blog/raja7-apk-download-android" },
  { name: "Register & Login", href: "/blog/raja7-game-register-login" },
];

const brandLinks = [
  { name: "Raja7", href: "/raja7" },
  { name: "Raja7 Game", href: "/raja7-game" },
  { name: "Raja7 Gaming", href: "/raja7-gaming" },
  { name: "Raja7 Gamers", href: "/raja7-gamers" },
  { name: "Raja7 APK", href: "/raja7-apk" },
  { name: "Raja7 Game APK", href: "/raja7-game-apk" },
  { name: "Raja7 Game App", href: "/raja7-game-app" },
  { name: "Raja7 Game Features", href: "/raja7-game-features" },
];

const apkLinks = [
  { name: "Raja7 APK Download", href: "/raja7-apk-download" },
  { name: "Raja7 Game Download", href: "/raja7-game-download" },
  { name: "Raja7 App Download", href: "/raja7-app-download" },
  { name: "Download Raja7", href: "/download-raja7" },
  { name: "Raja7 Download", href: "/raja7-download" },
  { name: "Raja7 Game APK Download", href: "/raja7-game-apk-download" },
  { name: "Raja7 Game APK 2026", href: "/raja7-game-apk-2026" },
  { name: "Raja7 Game Install", href: "/raja7-game-install" },
  { name: "Raja7 Game Latest Version", href: "/raja7-game-latest-version" },
  { name: "Raja7 Game Update", href: "/raja7-game-update" },
  { name: "Raja7 Game Free", href: "/raja7-game-free" },
];

const moreLinks = [
  { name: "Raja7 Game Login", href: "/raja7-game-login" },
  { name: "Raja7 Login", href: "/raja7-login" },
  { name: "Raja7 Game Register", href: "/raja7-game-register" },
  { name: "Raja7 Register", href: "/raja7-register" },
  { name: "Raja7 Game Signup", href: "/raja7-game-signup" },
  { name: "Raja7 Game 2026", href: "/raja7-game-2026" },
  { name: "Raja7 Game Android", href: "/raja7-game-android" },
  { name: "Raja7 Game Online", href: "/raja7-game-online" },
  { name: "Raja7 Game Play", href: "/raja7-game-play" },
  { name: "Raja7 Game Bonus", href: "/raja7-game-bonus" },
  { name: "Raja7 Game Rewards", href: "/raja7-game-rewards" },
  { name: "Raja7 Game Guide", href: "/raja7-game-guide" },
  { name: "Raja7 Game Review", href: "/raja7-game-review" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      {/* CTA Banner */}
      <div className="hero-gradient footer">
        <div className="max-w-7xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-5  relative py-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Start Your Raja7 Gaming Journey Today
          </h3>
          <p className="text-[#b91c1c] mb-6 mx-auto">
            Download the Raja7 Game APK now and unlock 500+ premium games, daily rewards, and exclusive bonuses on your Android device.
          </p>
          <TrackedCTALink
            location="footer_cta_banner"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold py-3.5 px-8 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Raja7 APK Free
          </TrackedCTALink>
        </div>
      </div>

      {/* Related Gaming Platforms */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider text-center">Related Gaming Platforms & Apps</h4>
          <p className="text-xs text-gray-500 text-center mb-6">Discover popular gaming platforms trusted by players across India</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {[
              { name: "aasgame.co.in", url: "https://aasgame.co.in" },
              { name: "ddgamesapps.in", url: "https://ddgamesapps.in" },
              { name: "game3f.co.in", url: "https://game3f.co.in" },
              { name: "indwins.in", url: "https://indwins.in" },
              { name: "11gameapps.in", url: "https://11gameapps.in" },
              { name: "sonateenpatti.co.in", url: "https://sonateenpatti.co.in" },
              { name: "ddgame.cloud", url: "https://ddgame.cloud" },
              { name: "jeetwin.cloud", url: "https://jeetwin.cloud" },
              { name: "asgame.cloud", url: "https://asgame.cloud" },
              { name: "indrummy.life", url: "https://indrummy.life" },
              { name: "allrummy.cloud", url: "https://allrummy.cloud" },
              { name: "rummyludo.pro", url: "https://rummyludo.pro" },
            ].map((site) => (
              <a key={site.name} href={site.url} target="_blank" rel="nofollow noopener" className="text-xs text-gray-500 hover:text-red-400 transition-colors text-center py-2 px-1 rounded bg-gray-800/50 hover:bg-gray-800">
                {site.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-5  relative py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-1">
            <TrackedCTALink location="footer_logo" className="flex items-center gap-2.5 mb-4 group">
              <Image src="/logo.webp" alt="Raja7 Game Logo" width={36} height={36} className="w-9 h-9 rounded-lg shadow-md" />
              <span className="text-lg font-bold text-white tracking-tight">
                Raja7<span className="text-red-400">Game</span>
              </span>
            </TrackedCTALink>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Raja7 Game is a next-generation mobile gaming platform built for Android. Enjoy a seamless experience with fast performance, secure accounts, and exciting daily rewards.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Raja7 Game</h4>
            <ul className="space-y-2.5">
              {brandLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">APK Download</h4>
            <ul className="space-y-2.5">
              {apkLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">More</h4>
            <ul className="space-y-2.5">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-red-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-xl border border-gray-700">
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-400">Notice:</strong> This website provides informational content about Raja7 Game and is not affiliated with or operated by the official Raja7 Game platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-5  relative py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            Copyright &copy; 2026 rajaa7.com | All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link href="/disclaimer" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">Disclaimer</Link>
            <span className="text-gray-700">|</span>
            <Link href="/contact" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

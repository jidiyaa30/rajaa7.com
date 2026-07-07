import type { Metadata } from "next";
import Link from "next/link";
import TrackedCTALink from "@/components/TrackedCTALink";



export const metadata: Metadata = {
  title: "Raja7 Game Free – 100% Free Download, No Hidden Charges",
  description: "Raja7 Game is completely free to download and play. No subscription fees, no paywalls. Learn what you get for free, how the platform sustains itself, and how to maximize your free experience.",
  keywords: ["Raja7 Game free", "Raja7 free download", "Raja7 Game free play", "Raja7 free games", "Raja7 no cost", "Raja7 Game free 2026"],
  openGraph: {
    title: "Raja7 Game Free – 100% Free Download, No Hidden Charges",
    description: "Raja7 Game is completely free. No subscription fees, no paywalls.",
    url: "https://rajaa7.com/raja7-game-free",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Raja7 Game Free" }],
  },
  twitter: { card: "summary_large_image", title: "Raja7 Game Free – No Hidden Charges", description: "Raja7 Game is 100% free to download and play.", images: ["/og-image.png"] },
  alternates: { canonical: "https://rajaa7.com/raja7-game-free" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rajaa7.com" },
    { "@type": "ListItem", position: 2, name: "Raja7 Game Free", item: "https://rajaa7.com/raja7-game-free" },
  ],
};

export default function Raja7GameFreePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Raja7 Game Free</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Raja7 Game Free</span> – Zero Cost, Full Access
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Wondering if Raja7 Game really is free? The answer is a resounding yes. The download costs nothing, registration is free, and you receive bonus credits just for signing up. Here is the full breakdown of what you get without spending a single rupee.
          </p>
          <TrackedCTALink location="raja7_game_free_cta" className="btn-cta text-lg px-10 py-4">
            Get Raja7 Game Free
          </TrackedCTALink>
        </div>
      </section>

      {/* What's Free */}
      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Everything You Get for Free</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Free APK Download", desc: "The Raja7 Game APK is hosted on our servers and available for free download 24/7. No premium tier, no trial period, no credit card required. Just tap download and the file is yours." },
              { title: "Free Account Registration", desc: "Creating an Raja7 account takes 60 seconds and costs absolutely nothing. Enter your phone number or email, verify with OTP, and you are in. No subscription, no monthly fee." },
              { title: "Free Welcome Bonus", desc: "Every new player receives a welcome bonus package upon registration. This includes bonus credits you can use to explore games without making any deposit." },
              { title: "Free Daily Check-In Rewards", desc: "Log in every day and collect free rewards. The check-in system offers escalating bonuses — the longer your streak, the bigger the daily reward becomes." },
              { title: "Free Game Access", desc: "All 500+ games in the Raja7 library are accessible to every registered user. There are no paywalled game categories or premium-only titles." },
              { title: "Free Customer Support", desc: "24/7 live support via in-app chat and Telegram is included with every account. No premium support tier — everyone receives the same responsive assistance." },
            ].map((item, i) => (
              <div key={i} className="card p-4">
                <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Raja7 Stays Free */}
      <section className="bg-surface">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How Does Raja7 Game Stay Free?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 mb-4">
              Raja7 Game operates on a freemium model common in the gaming industry. The app itself, registration, and basic features are completely free. Revenue comes from optional in-game transactions — when players choose to deposit funds for real-money gameplay. There is zero obligation to spend money, and the free experience is fully featured.
            </p>
            <p className="text-gray-700 mb-4">
              Additionally, Raja7 earns revenue through its referral program (where active promoters receive commissions) and through partnerships with game providers who pay licensing fees to be featured on the platform. These multiple revenue streams ensure the platform remains sustainable without ever charging users for downloads or subscriptions.
            </p>
            <p className="text-gray-700">
              Importantly, Raja7 Game does not display third-party advertisements. Your gaming experience is completely ad-free — no pop-ups, no banners, no forced video ads between games. This is a deliberate choice by the Raja7 team to prioritize player experience over ad revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Free vs Premium comparison */}
      <section className="bg-primary-50">
        <div className="container section-padding mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Raja7 Free vs. Other Platforms</h2>
          <div className="max-w-3xl mx-auto">
            <table className="info-table w-full">
              <thead>
                <tr className="bg-primary-100">
                  <th className="text-left font-semibold p-3">Feature</th>
                  <th className="text-left font-semibold p-3">Raja7 Game</th>
                  <th className="text-left font-semibold p-3">Competitors</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Download Cost</td><td className="text-primary font-semibold">Free</td><td>Free / Varies</td></tr>
                <tr><td>Registration Fee</td><td className="text-primary font-semibold">Free</td><td>Free / Varies</td></tr>
                <tr><td>Welcome Bonus</td><td className="text-primary font-semibold">Yes (generous)</td><td>Sometimes</td></tr>
                <tr><td>Daily Free Rewards</td><td className="text-primary font-semibold">Yes</td><td>Rare</td></tr>
                <tr><td>Ads in App</td><td className="text-primary font-semibold">None</td><td>Common</td></tr>
                <tr><td>All Games Accessible</td><td className="text-primary font-semibold">Yes</td><td>Often paywalled</td></tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-10">
            <TrackedCTALink location="raja7_game_free_cta" className="btn-primary px-8 py-3">
              Start Playing Free
            </TrackedCTALink>
          </div>
        </div>
      </section>

      <section>
        <div className="container section-padding mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Explore</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/download" className="btn-outline">Download</Link>
            <Link href="/raja7-game-bonus" className="btn-outline">Bonuses</Link>
            <Link href="/raja7-game-rewards" className="btn-outline">Rewards</Link>
            <Link href="/raja7-game-register" className="btn-outline">Register Free</Link>
            <Link href="/raja7-game" className="btn-outline">Raja7 Game</Link>
          </div>
        </div>
      </section>
    </>
  );
}

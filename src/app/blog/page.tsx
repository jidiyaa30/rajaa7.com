import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Raja7 Game Blog – Guides, Tips & Latest News for Raja7 Gaming",
  description: "Stay up to date with Raja7 Game guides, APK download tutorials, registration walkthroughs, and platform news. Expert tips to get the most out of Raja7 Gaming in 2026.",
  keywords: ["Raja7 Game blog", "Raja7 guides", "Raja7 tips", "Raja7 Game news", "Raja7 APK guide", "Raja7 Game tutorials", "Raja7 Gaming blog"],
  openGraph: {
    title: "Raja7 Game Blog – Guides, Tips & News",
    description: "Expert guides, download tutorials, and the latest news from Raja7 Gaming.",
    url: "https://rajaa7.com/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Raja7 Game Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja7 Game Blog – Guides, Tips & News",
    description: "Expert guides, download tutorials, and the latest news from Raja7 Gaming.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajaa7.com/blog" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rajaa7.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://rajaa7.com/blog" },
  ],
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Raja7 Game Blog",
  description: "Guides, tutorials, tips, and news about Raja7 Game and Raja7 Gaming.",
  url: "https://rajaa7.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Raja7 Gaming",
    url: "https://rajaa7.com",
  },
  blogPost: [
    {
      "@type": "BlogPosting",
      headline: "Raja7 Game Complete Guide: Everything You Need to Know in 2026",
      url: "https://rajaa7.com/blog/raja7-game-complete-guide",
      datePublished: "2026-07-01",
      author: { "@type": "Organization", name: "Raja7 Gaming" },
    },
    {
      "@type": "BlogPosting",
      headline: "How to Download Raja7 APK on Android: Step-by-Step Tutorial",
      url: "https://rajaa7.com/blog/raja7-apk-download-android",
      datePublished: "2026-06-28",
      author: { "@type": "Organization", name: "Raja7 Gaming" },
    },
    {
      "@type": "BlogPosting",
      headline: "Raja7 Game Register & Login: Create Your Account in 60 Seconds",
      url: "https://rajaa7.com/blog/raja7-game-register-login",
      datePublished: "2026-06-25",
      author: { "@type": "Organization", name: "Raja7 Gaming" },
    },
    {
      "@type": "BlogPosting",
      headline: "How to Install Raja7 Game on Android – Complete Installation Guide 2026",
      url: "https://rajaa7.com/blog/how-to-install-raja7-on-android",
      datePublished: "2026-06-20",
      author: { "@type": "Organization", name: "Raja7 Gaming" },
    },
    {
      "@type": "BlogPosting",
      headline: "Raja7 Game Tips & Tricks – 15 Pro Strategies to Win More in 2026",
      url: "https://rajaa7.com/blog/raja7-game-tips-and-tricks",
      datePublished: "2026-06-15",
      author: { "@type": "Organization", name: "Raja7 Gaming" },
    },
    {
      "@type": "BlogPosting",
      headline: "Raja7 Game vs Other Gaming Platforms – Honest Comparison 2026",
      url: "https://rajaa7.com/blog/raja7-vs-other-gaming-platforms",
      datePublished: "2026-06-10",
      author: { "@type": "Organization", name: "Raja7 Gaming" },
    },
    {
      "@type": "BlogPosting",
      headline: "Raja7 Game Rewards & Bonuses – Maximize Your Earnings in 2026",
      url: "https://rajaa7.com/blog/raja7-game-rewards-and-bonuses",
      datePublished: "2026-06-05",
      author: { "@type": "Organization", name: "Raja7 Gaming" },
    },
    {
      "@type": "BlogPosting",
      headline: "Raja7 Game Security Guide – How Your Data Stays Safe in 2026",
      url: "https://rajaa7.com/blog/raja7-game-security-guide",
      datePublished: "2026-05-30",
      author: { "@type": "Organization", name: "Raja7 Gaming" },
    },
    {
      "@type": "BlogPosting",
      headline: "Raja7 Game for Beginners – Start Playing Like a Pro in 2026",
      url: "https://rajaa7.com/blog/raja7-game-for-beginners",
      datePublished: "2026-05-25",
      author: { "@type": "Organization", name: "Raja7 Gaming" },
    },
    {
      "@type": "BlogPosting",
      headline: "Raja7 Game Latest Update – What's New in Version 2026",
      url: "https://rajaa7.com/blog/raja7-game-update-whats-new",
      datePublished: "2026-05-20",
      author: { "@type": "Organization", name: "Raja7 Gaming" },
    },
  ],
};

const posts = [
  {
    slug: "raja7-game-complete-guide",
    category: "Guide",
    date: "July 1, 2026",
    readTime: "8 min read",
    title: "Raja7 Game Complete Guide: Everything You Need to Know in 2026",
    excerpt: "From downloading the APK to mastering the VIP program, this comprehensive guide covers every aspect of the Raja7 Game platform. Perfect for new and returning players alike.",
  },
  {
    slug: "raja7-apk-download-android",
    category: "Tutorial",
    date: "June 28, 2026",
    readTime: "5 min read",
    title: "How to Download Raja7 APK on Android: Step-by-Step Tutorial",
    excerpt: "A beginner-friendly walkthrough for downloading and installing the latest Raja7 Game APK on any Android device. Includes troubleshooting tips for common installation issues.",
  },
  {
    slug: "raja7-game-register-login",
    category: "Tutorial",
    date: "June 25, 2026",
    readTime: "6 min read",
    title: "Raja7 Game Register & Login: Create Your Account in 60 Seconds",
    excerpt: "Learn how to register a new Raja7 Game account, verify your identity, and log in securely. We also cover password recovery and enabling two-factor authentication.",
  },
  {
    slug: "how-to-install-raja7-on-android",
    category: "Tutorial",
    date: "June 20, 2026",
    readTime: "6 min read",
    title: "How to Install Raja7 Game on Android – Complete Installation Guide 2026",
    excerpt: "A complete guide to installing Raja7 Game on any Android device. Covers pre-installation checklist, step-by-step setup, post-install configuration, and troubleshooting common errors.",
  },
  {
    slug: "raja7-game-tips-and-tricks",
    category: "Guide",
    date: "June 15, 2026",
    readTime: "10 min read",
    title: "Raja7 Game Tips & Tricks – 15 Pro Strategies to Win More in 2026",
    excerpt: "Master Raja7 Game with 15 proven strategies covering beginner tips, advanced tactics, bankroll management, daily rewards optimization, and VIP program secrets.",
  },
  {
    slug: "raja7-vs-other-gaming-platforms",
    category: "Comparison",
    date: "June 10, 2026",
    readTime: "7 min read",
    title: "Raja7 Game vs Other Gaming Platforms – Honest Comparison 2026",
    excerpt: "An honest, side-by-side comparison of Raja7 Game against competing Android gaming platforms across game library, security, performance, and rewards.",
  },
  {
    slug: "raja7-game-rewards-and-bonuses",
    category: "Guide",
    date: "June 5, 2026",
    readTime: "7 min read",
    title: "Raja7 Game Rewards & Bonuses – Maximize Your Earnings in 2026",
    excerpt: "Discover every bonus and reward available on Raja7 Game — from daily login bonuses and VIP tiers to referral programs and tournament prizes.",
  },
  {
    slug: "raja7-game-security-guide",
    category: "Guide",
    date: "May 30, 2026",
    readTime: "6 min read",
    title: "Raja7 Game Security Guide – How Your Data Stays Safe in 2026",
    excerpt: "Learn how Raja7 Game protects your data with 256-bit encryption, two-factor authentication, and quarterly security audits. Plus, safe download practices.",
  },
  {
    slug: "raja7-game-for-beginners",
    category: "Guide",
    date: "May 25, 2026",
    readTime: "8 min read",
    title: "Raja7 Game for Beginners – Start Playing Like a Pro in 2026",
    excerpt: "New to Raja7 Game? This beginner-friendly guide covers account creation, app navigation, game selection, categories, and common mistakes to avoid.",
  },
  {
    slug: "raja7-game-update-whats-new",
    category: "News",
    date: "May 20, 2026",
    readTime: "5 min read",
    title: "Raja7 Game Latest Update – What's New in Version 2026",
    excerpt: "Everything new in the latest Raja7 Game update — new games, performance improvements, UI changes, bug fixes, and how to update your APK.",
  },
];

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />

      {/* Hero */}
      <section className="hero-gradient-soft relative overflow-hidden">
        <div className="container section-padding mx-auto text-center mx-auto">
          <nav className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Raja7 Game</span> Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guides, step-by-step tutorials, and the latest updates from the Raja7 Gaming platform. Level up your knowledge.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full"><path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="white" /></svg>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container max-w-4xl px-2 mx-auto">
          <div className="space-y-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                <article className="card p-6 md:p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-center gap-3 mb-3 text-sm">
                    <span className="bg-primary-50 text-primary px-3 py-1 rounded-full font-medium">{post.category}</span>
                    <span className="text-gray-400">{post.date}</span>
                    <span className="text-gray-400">&#8226;</span>
                    <span className="text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-primary font-medium text-sm">Read Article &rarr;</span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

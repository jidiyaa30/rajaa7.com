import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajaa7.com"),
  title: {
    default: "Raja7 Game – Download APK, Login, Register & Complete Guide 2026",
    template: "%s | Raja7 Game",
  },
  description:
    "Raja7 Game is a premium Android gaming platform with 500+ games. Download the latest Raja7 APK, register your account, login securely, and explore exclusive rewards. The ultimate Raja7 Gaming guide for 2026.",
  keywords: [
    "Raja7 Game",
    "Raja7",
    "Raja7 APK",
    "Raja7 App",
    "Raja7 Game Download",
    "Raja7 Game APK",
    "Download Raja7",
    "Raja7 Game Login",
    "Raja7 Game Register",
    "Raja7 Game Features",
    "Raja7 Game 2026",
    "Raja7 Android",
    "Raja7 Gaming",
    "Raja7 Download APK",
    "raja7game",
    "raja7gamess",
  ],
  authors: [{ name: "rajaa7.com" }],
  creator: "rajaa7.com",
  publisher: "rajaa7.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajaa7.com",
    siteName: "Raja7 Game",
    title: "Raja7 Game – Download APK, Login, Register & Complete Guide 2026",
    description:
      "Raja7 Game is a premium Android gaming platform. Download the latest Raja7 APK, register, login, and explore features & exclusive rewards.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raja7 Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja7 Game – Download APK, Login, Register & Complete Guide 2026",
    description:
      "Raja7 Game is a premium Android gaming platform. Download the latest Raja7 APK, register, login, and explore features & exclusive rewards.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "tkGjSFwQ7d_fU5V8vLiKvdsjeNB_JmW2bsU_PVZr578",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://rajaa7.com/#website",
      url: "https://rajaa7.com",
      name: "Raja7 Game",
      description:
        "Raja7 Game is a premium Android gaming platform. Download APK, register, login, and explore features.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://rajaa7.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://rajaa7.com/#organization",
      name: "Raja7 Game",
      url: "https://rajaa7.com",
      logo: "https://rajaa7.com/logo.webp",
      sameAs: [
        "https://www.facebook.com/raja7game",
        "https://t.me/raja7game"
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Raja7 Game",
      operatingSystem: "Android",
      applicationCategory: "GameApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "12547",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

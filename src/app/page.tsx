import HomePage from "@/components/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raja7 Game – Download APK, Register, Login & Play 500+ Games on Android 2026",
  description: "Raja7 Game is the ultimate Android gaming platform with 500+ premium games. Download the latest Raja7 APK for free, create your account in 60 seconds, and unlock daily rewards. Your complete Raja7 Gaming guide for 2026.",
  keywords: ["Raja7 Game", "Raja7", "raja7game", "raja7gamess", "Raja7 APK", "Raja7 App", "Raja7 Download", "Raja7 Game Download", "Raja7 Game APK", "Raja7 Game Login", "Raja7 Game Register", "Raja7 Game Android", "Raja7 Game 2026", "Raja7 Gaming"],
  openGraph: {
    title: "Raja7 Game – Download APK, Register & Play 500+ Games | Complete Guide 2026",
    description: "Your complete guide to Raja7 Game. Download the latest Raja7 APK for free, register in 60 seconds, and explore 500+ premium games on Android.",
    url: "https://rajaa7.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Raja7 Game – Premium Android Gaming Platform" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja7 Game – Download APK, Register & Play 500+ Games | Complete Guide 2026",
    description: "Your complete guide to Raja7 Game. Download the latest Raja7 APK for free, register in 60 seconds, and explore 500+ premium games on Android.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://rajaa7.com" },
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Raja7 Game",
  operatingSystem: "Android",
  applicationCategory: "GameApplication",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "12547",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    { "@type": "Review", author: { "@type": "Person", name: "Rahul K." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "The Raja7 Apk is small in size, easy to download, and runs smoothly on my device." },
    { "@type": "Review", author: { "@type": "Person", name: "Priya S." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "I loved the Raja7 Yono integration. The ₹500 sign-up bonus is amazing and really got me started." },
    { "@type": "Review", author: { "@type": "Person", name: "Amit R." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Referral program works really well. I invited 3 friends and started getting rewards immediately." },
    { "@type": "Review", author: { "@type": "Person", name: "Sneha M." }, reviewRating: { "@type": "Rating", ratingValue: "4", bestRating: "5" }, reviewBody: "The Raja7 Wheel keeps me engaged every day. Simple yet entertaining with real rewards." },
    { "@type": "Review", author: { "@type": "Person", name: "Vikram J." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Withdrawal process is super fast. I received my money within hours of requesting it." },
    { "@type": "Review", author: { "@type": "Person", name: "Neha T." }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "The variety of games is impressive. I never get bored as there's always something new to try." },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Raja7 Game and how does it work?", acceptedAnswer: { "@type": "Answer", text: "Raja7 Game is a premium Android gaming platform offering 500+ games across categories like slots, live tables, sports, and arcade. Download the APK, create a free account, and start playing instantly." } },
    { "@type": "Question", name: "Is Raja7 Game free to download and use?", acceptedAnswer: { "@type": "Answer", text: "Yes, the Raja7 Game APK is completely free to download and install. Creating an account costs nothing, and new players receive a welcome bonus to get started." } },
    { "@type": "Question", name: "How do I create an Raja7 Game account?", acceptedAnswer: { "@type": "Answer", text: "Open the Raja7 app, tap Register, enter your mobile number or email, set a password, verify via OTP, and your account is ready in under 60 seconds." } },
    { "@type": "Question", name: "Is my personal information safe on Raja7 Game?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Raja7 Game uses 256-bit SSL encryption, secure servers, and multi-factor authentication to protect all user data and transactions." } },
    { "@type": "Question", name: "What devices are compatible with Raja7 Game?", acceptedAnswer: { "@type": "Answer", text: "Raja7 Game runs on any Android device with Android 5.0 or higher, at least 2GB RAM, and 71 MB of free storage." } },
    { "@type": "Question", name: "How do I login to Raja7 Game?", acceptedAnswer: { "@type": "Answer", text: "Use your registered mobile number and password to login. Raja7 Game also supports OTP-based login for quick access. If you forget your password, use the forgot password option to reset it." } },
    { "@type": "Question", name: "Can I withdraw my bonus money from Raja7 Game?", acceptedAnswer: { "@type": "Answer", text: "Bonus usage depends on the app terms. Usually, bonus amounts must be wagered before withdrawal. Check the Raja7 Game app for current bonus terms and withdrawal requirements." } },
    { "@type": "Question", name: "Is Raja7 Game available on the Play Store?", acceptedAnswer: { "@type": "Answer", text: "Currently, Raja7 Game is available via direct APK download from the official website. This allows faster updates and the full feature set without Play Store restrictions." } },
    { "@type": "Question", name: "What payment methods does Raja7 Game support?", acceptedAnswer: { "@type": "Answer", text: "Raja7 Game supports UPI (PhonePe, GPay, Paytm), Net Banking, and IMPS for both deposits and withdrawals. Transactions are fast, secure, and have no hidden charges." } },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }} />
      <HomePage />
    </>
  );
}

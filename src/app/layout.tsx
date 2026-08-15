import type { Metadata, Viewport } from "next";
import Script from "next/script";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  INDEXABLE,
  GA4_ID,
  SKIP_LINK_LABEL,
} from "@/lib/site";
import { jsonLd } from "@/lib/schema";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBookingBar from "@/components/layout/MobileBookingBar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  // Without metadataBase, Next warns at build and every OG/Twitter URL resolves
  // relatively — which is why social shares of this site rendered blank.
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Integrative Mental Health Care in Arizona`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  robots: INDEXABLE
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Integrative Mental Health Care in Arizona`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Integrative Mental Health Care in Arizona`,
    description: SITE_DESCRIPTION,
    images: ["/og.jpg"],
  },
};

// themeColor belongs in the viewport export in Next 14, not in metadata.
export const viewport: Viewport = {
  themeColor: "#0B0B0F",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:font-heading focus:text-deep"
        >
          {SKIP_LINK_LABEL}
        </a>
        <Header />
        {/* tabIndex={-1} so the skip link actually moves focus, not just scroll. */}
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <MobileBookingBar />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd("home")}
        />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('js',new Date());gtag('config','${GA4_ID}');`}
        </Script>
      </body>
    </html>
  );
}

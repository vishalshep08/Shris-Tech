import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout/Layout";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Shris Tech - Innovation & Excellence in Technology Solutions",
  description:
    "Leading technology solutions provider specializing in web development, mobile apps, data analytics, digital marketing, and AI/ML solutions. Empowering businesses through innovation and technical excellence.",
  keywords:
    "web development, mobile apps, data analytics, digital marketing, AI/ML solutions, technology consulting, software development",
  authors: [{ name: "Shris Tech" }],
  creator: "Shris Tech",
  publisher: "Shris Tech",
  icons: {
    icon: "/ShrisTechLogo.png", // 👈 from /public
    shortcut: "/ShrisTechLogo.png",
    apple: "/ShrisTechLogo.png",
  },
  metadataBase: new URL("https://shristech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shris Tech - Innovation & Excellence in Technology Solutions",
    description:
      "Leading technology solutions provider specializing in web development, mobile apps, data analytics, digital marketing, and AI/ML solutions.",
    url: "https://shristech.com",
    siteName: "Shris Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shris Tech - Technology Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shris Tech - Innovation & Excellence in Technology Solutions",
    description:
      "Leading technology solutions provider specializing in web development, mobile apps, data analytics, digital marketing, and AI/ML solutions.",
    images: ["/og-image.jpg"],
    site: "@shristech",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* 👇 Force update favicon & touch icon */}
        <link rel="icon" href="/ShrisTechLogo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/ShrisTechLogo.png" />
        <link rel="shortcut icon" href="/ShrisTechLogo.png" />
      </head>
      <body className="font-sans antialiased">
        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shris Tech",
              url: "https://shristech.com",
              logo: "/ShrisTechLogo.png",
              sameAs: [
                "https://www.facebook.com/",
                "https://www.linkedin.com/",
                "https://twitter.com/",
              ],
            }),
          }}
        />

        <Layout>{children}</Layout>

        {/* Optional Google Analytics */}
        {/* <Script src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script> */}
      </body>
    </html>
  );
}

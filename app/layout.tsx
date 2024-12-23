import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const poppins_extrabold = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-poppins-extrabold",
});

const poppins_bold = Poppins({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-poppins-bold",
});

export const metadata: Metadata = {
  title: "Alc AI - Your Smart Alcohol AI Assistant",
  description:
    "Capture & Identify alcohol brands, ingredients, and more with Alc AI",
  metadataBase: new URL("https://www.alcai.me/"),
  openGraph: {
    title: "Alc AI - Your Smart Alcohol AI Assistant",
    description:
      "Capture & Identify alcohol brands, ingredients, and more with Alc AI",
    url: "https://www.alcai.me/",
    siteName: "Alc AI",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Alc AI - Your Smart Alcohol AI Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alc AI - Your Smart Alcohol AI Assistant",
    description: "Identify alcohol brands, ingredients, and more with Alc AI",
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://www.alcai.me/" />
        <meta
          name="twitter:title"
          content="Alc AI - Your Smart Alcohol AI Assistant"
        />
        <meta
          name="twitter:description"
          content="Capture & Identify alcohol brands, ingredients, and more with Alc AI"
        />
        <meta name="twitter:image" content="/opengraph-image.png" />
      </Head>
      <body
        className={`${poppins.variable} ${poppins_extrabold.variable} ${poppins_bold.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

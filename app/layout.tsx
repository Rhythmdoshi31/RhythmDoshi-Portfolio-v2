import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://rhythmdoshi.site"),
  alternates: {
    canonical: "/",
  },
  title: "Rhythm Doshi — Full Stack Developer portfolio",
  description:
    "Full Stack Engineer building modern web applications. Explore my projects, stack, and experience in React, Next.js, Node.js and more.",

  icons: {
    icon: [
      { url: "/meta/fav16.png", sizes: "16x16", type: "image/png" },
      { url: "/meta/fav32.png", sizes: "32x32", type: "image/png" },
      { url: "/meta/fav48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/meta/apple-touch-icon180.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/meta/apple-touch-icon180.png",
        color: "#000000",
      },
      { rel: "msapplication-TileImage", url: "/meta/mstile144.png" },
    ],
  },
  openGraph: {
    title: "Rhythm Doshi — I Build Things for the Web",
    description: "Full Stack Engineer building modern web applications.",
    url: "https://rhythmdoshi.site",
    siteName: "Rhythm Doshi",
    images: [
      {
        url: "https://rhythmdoshi.site/meta/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
  card: 'summary_large_image',
  title: "Rhythm Doshi — I Build Things for the Web",
  description: "Full Stack Engineer building modern web applications. Explore my projects, stack, and experience in React, Next.js, Node.js and more.",
  images: ['https://rhythmdoshi.site/meta/twitter-image.png'], // absolute URL
},
  manifest: "/meta/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`font1 font2 antialiased`}>
        <div className="sticky top-0 h-2 w-full bg1 z-50"></div>
        <Navbar />
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}

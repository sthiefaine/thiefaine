import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import "./variables.css";
import "./index.css";
import Header from "@/components/Header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thiefaine - Portfolio",
  description: "Thiefaine portfolio développeur Next.js React",
  keywords:
    "Thiefaine, portfolio, développeur, Next.js, React, JavaScript, développeur web",
  author: "Thiefaine",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://thiefaine.dev",
    title: "Thiefaine - Portfolio",
    description: "Thiefaine portfolio développeur Next.js React",
    images: [
      {
        url: "https://thiefaine.dev/thief-head.png",
        width: 800,
        height: 600,
        alt: "Thiefaine Portfolio",
      },
    ],
    site_name: "Thiefaine Portfolio",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#317EFB",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="fr">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/thief-head.png" />
          <meta name="google-site-verification" content="dEefzALe9pOh3tZfmpZG7yoMJmYaudnQshLvjUhBlbk" />
        </head>
        <body className={inter.className}>
          <Header />

          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}

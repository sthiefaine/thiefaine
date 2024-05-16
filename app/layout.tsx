import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import "./variables.css";
import "./index.css";
import Header from "@/components/Header/header";
import { Tech } from "@/components/Tech/tech";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thiefaine - Portfolio",
  description: "Thiefaine portfolio developpeur nextjs react",
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
        </head>
        <body className={inter.className}>
          <Header />

          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}

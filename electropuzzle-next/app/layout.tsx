import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ElectroPuzzle",
  description: "ElectroPuzzle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
        <link rel="stylesheet" href="css/style.min.css" />
        <script src="js/script.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

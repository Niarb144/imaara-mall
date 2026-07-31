import type { Metadata } from "next";
import { Fjalla_One, Quicksand, Lobster_Two } from "next/font/google";
import "./globals.css";

// -----Web-components------
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer/Footer"
import SmoothScrollProvider from "@/components/SmoothScrollProvider"

// -----------------------------------------------------------------------------
// Fonts
// -----------------------------------------------------------------------------
const fjalla = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fjalla",
  display: "swap",
});
 
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});
 
const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lobster",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Imaara Mall",
  description: "The future of shopping, today. Explore a world of endless possibilities at The Imaara Mall, where innovation meets convenience. Discover a curated selection of products and experiences that redefine the way you shop. Join us on this exciting journey as we build the future of retail together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
       className={`${fjalla.variable} ${quicksand.variable} ${lobsterTwo.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <SmoothScrollProvider>
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
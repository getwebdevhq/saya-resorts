import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Sans carries UI and headlines (variable font: every weight from one file).
const sans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

// Serif is reserved for the italic accent word inside headlines.
const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saya Forest Resort, Alibaug — Luxury Forest Sanctuary & Chalets",
  description:
    "Saya Forest Resort (formerly Giriraj Garden Resort) is a serene luxury forest retreat in Alibaug. Featuring signature Forest Chalets, private 4BHK villas, and suites immersed in ancient trees. Check live availability on WhatsApp.",
  keywords: [
    "Saya Forest Resort Alibaug",
    "Giriraj Garden Resort Alibaug revamp",
    "Forest Chalet Alibaug",
    "luxury resort Alibaug",
    "forest resort near Mumbai",
    "4BHK villa Alibaug",
    "Mandwa jetty resorts",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-forest-bg font-sans text-forest-text selection:bg-forest-green selection:text-forest-bg">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${display.variable} ${sans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-forest-bg text-forest-text font-sans selection:bg-forest-green selection:text-forest-bg">
        {children}
      </body>
    </html>
  );
}

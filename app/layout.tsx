import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari, Noto_Sans_Tamil, Noto_Sans_Malayalam, Noto_Sans_Telugu, Noto_Sans_Bengali, Noto_Sans_Kannada } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "700"],
});

const notoTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
  weight: ["400", "700"],
});

const notoMalayalam = Noto_Sans_Malayalam({
  variable: "--font-noto-malayalam",
  subsets: ["malayalam"],
  weight: ["400", "700"],
});

const notoTelugu = Noto_Sans_Telugu({
  variable: "--font-noto-telugu",
  subsets: ["telugu"],
  weight: ["400", "700"],
});

const notoBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  weight: ["400", "700"],
});

const notoKannada = Noto_Sans_Kannada({
  variable: "--font-noto-kannada",
  subsets: ["kannada"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "The Divine Sanctuary | Christian Platform",
  description: "A holy and amazing platform for the faithful.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${notoDevanagari.variable} ${notoTamil.variable} ${notoMalayalam.variable} ${notoTelugu.variable} ${notoBengali.variable} ${notoKannada.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

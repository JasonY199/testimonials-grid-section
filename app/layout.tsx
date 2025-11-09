import type { Metadata } from "next";
import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  weight: ["500", "600"],
  variable: "--font-barlowSemiCondensed",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Testimonials Grid Section",
  description: "A simple Frontend Mentor project built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlowSemiCondensed.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

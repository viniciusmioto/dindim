import type { Metadata } from "next";
import { Comic_Neue, Inter } from "next/font/google";
import "./globals.css";

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Adventures of Dindim",
  description: "Personal finance without the nonsense.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comicNeue.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

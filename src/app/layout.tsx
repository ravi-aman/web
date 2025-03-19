import "./globals.css";


import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Use Inter as Geist is unavailable
// import Navbar from "@/components/common/navbar";
// import Footer from "@/components/common/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DU Festival 2025", // Fixed title typo
  description: "Book appointments effortlessly", // Improved description for clarity
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning={true} className="antialiased">
        {children}
      </body>
    </html>
  );
}

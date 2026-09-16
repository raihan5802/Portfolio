import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Preloader from "@/components/Preloader";
import Header from "@/components/layout/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MD Raihan Chowdhury | Data Scientist",
  description:
    "Portfolio of MD Raihan Chowdhury — Data Scientist specializing in recommendation systems, NLP, and AI applications.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} page-shell antialiased`}
      >
        <Preloader />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

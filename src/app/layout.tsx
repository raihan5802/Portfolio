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
  title: "MD Raihan Chowdhury | Software & AI Engineer",
  description:
    "Portfolio of MD Raihan Chowdhury — Software & AI Systems Engineer building agentic AI, full-stack applications, and production pipelines.",
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

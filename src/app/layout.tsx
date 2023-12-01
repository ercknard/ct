import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/ysabeau";
import "./globals.css";
import Navigation from "@/layout/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cryptech Services",
  description:
    "We provide web3 and fullstack development services and support, primarily focusing on cryptocurrency, blockchain technology and cyber security.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

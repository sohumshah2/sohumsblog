import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sohum's blog",
  description: "An MDX blog with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-gray-800 text-white max-w-6xl mx-auto py-20 px-4 "
    >
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/utils/Provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hacker News",
  description: "A clone of Hacker News built with Next.js and NestJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-amber-50`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

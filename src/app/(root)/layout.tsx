import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Care",
  description:
    "Your go-to platform for reliable healthcare support and solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-dvh`}>
        <div className="h-screen flex flex-col lg:gap-y-5 lg:p-5 bg-unnamed-page-bg">
          <Header />
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";

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
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}

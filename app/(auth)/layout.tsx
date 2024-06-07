import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata: Metadata = {
  title: "Signup | Eyewear",
  description: "Signup | Eyewear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={``}>{children}</body>
    </html>
  );
}

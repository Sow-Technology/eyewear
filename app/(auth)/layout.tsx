import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "sonner";

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
      <body className={``}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}

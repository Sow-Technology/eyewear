import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import Footer from "@/components/Footer";

// const inter = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
// });
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Eyewear",
  description: "Eyewear Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClerkProvider> */}
        <ToasterProvider />
        <Toaster />

        <Navbar />
        {children}
        <Footer />
        {/* </ClerkProvider> */}
      </body>
    </html>
  );
}

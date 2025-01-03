import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Modules/Home/Navbar";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  // variable : '--font-poppins'
});

export const metadata: Metadata = {
  title: "DM Cockpit: Master SEO, PPC & Social Media || All-in-One Tool",
  description: "DM Cockpit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}

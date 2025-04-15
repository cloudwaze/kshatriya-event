import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Initialize the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the app
export const metadata: Metadata = {
  title: "Kshatriya Event 2025",
  description: "Register and manage your passes for Kshatriya Event 2025",
  keywords: "event, kshatriya, registration, 2025",
};

/**
 * Root layout component that wraps all pages in the application
 * Provides consistent structure with navbar and footer
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

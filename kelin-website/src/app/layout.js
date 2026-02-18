import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./bison-global.css";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Kelin Graphics System - Professional Printing Solutions',
  description: 'Your trusted partner for professional printing solutions, equipment, and materials. Discover our comprehensive range of products and services.',
  keywords: 'printing, graphics, equipment, materials, professional printing solutions',
  openGraph: {
    title: 'Kelin Graphics System - Professional Printing Solutions',
    description: 'Professional printing solutions and graphic systems',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="app-container">
          {children}
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}

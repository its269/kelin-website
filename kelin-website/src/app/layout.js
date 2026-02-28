import "./globals.css";
import "./bison-global.css";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import GlobalChatbot from "./components/GlobalChatbot";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="app-container">
          {children}
          <Footer />
          <CookieConsent />
          <GlobalChatbot />
        </div>
      </body>
    </html>
  );
}

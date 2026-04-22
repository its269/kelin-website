import "./globals.css";
import "./bison-global.css";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import GlobalChatbot from "./components/GlobalChatbot";

export const metadata = {
  metadataBase: new URL('https://www.kelinph.com'),
  title: {
    default: 'Kelin Graphics System — Printing Machines, Cutters & Laser Equipment Philippines',
    template: '%s | Kelin Graphics System',
  },
  description: 'Kelin Graphics System is the Philippines\' leading supplier of eco-solvent printers, UV flatbed printers, DTF machines, digital cutting plotters, heat press, sublimation, laminating, and laser equipment. Expert support and after-sales service.',
  keywords: 'eco solvent printer Philippines, UV printer, DTF machine, digital cutter, iEcho, GCC, heat press, sublimation printer, laser cutting machine, Kelin Graphics',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Kelin Graphics System — Printing Machines & Equipment Philippines',
    description: 'Philippines\' trusted supplier of professional printing machines, digital cutters, UV printers, DTF, sublimation, heat press, and laser equipment.',
    url: 'https://www.kelinph.com',
    siteName: 'Kelin Graphics System',
    type: 'website',
    locale: 'en_PH',
    images: [{ url: '/marquee-logo/kelin logo.webp', width: 1200, height: 630, alt: 'Kelin Graphics System' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelin Graphics System — Printing Machines & Equipment Philippines',
    description: 'Philippines\' trusted supplier of professional printing and laser equipment.',
    images: ['/marquee-logo/kelin logo.webp'],
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

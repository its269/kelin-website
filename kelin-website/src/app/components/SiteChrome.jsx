"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import GlobalChatbot from "./GlobalChatbot";

export default function SiteChrome({ children }) {
  const pathname = usePathname() || "";
  const isPrivateShell =
    pathname.startsWith("/kgs-admin") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/inquiry-reply");

  return (
    <div className="app-container">
      {children}
      {!isPrivateShell && (
        <>
          <Footer />
          <CookieConsent />
          <GlobalChatbot />
        </>
      )}
    </div>
  );
}

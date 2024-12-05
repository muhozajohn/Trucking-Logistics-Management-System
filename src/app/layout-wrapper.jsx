"use client";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import "./globals.scss";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function RootLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isDashboardRoute = pathname?.startsWith("/dashboard");

  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {!isDashboardRoute && <Navigation />}
          <div className="layout">{children}</div>
          {!isDashboardRoute && <Footer />}
        </SessionProvider>
      </body>
    </html>
  );
}
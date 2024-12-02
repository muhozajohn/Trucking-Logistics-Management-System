"use client";
import { usePathname } from "next/navigation";
import "./globals.scss";
import Navigation from "../components/navigation";
import Footer from "../components/footer";


export default function RootLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isDashboardRoute = pathname?.startsWith("/dashboard");

  return (
    <html lang="en">
      <body>
        {!isDashboardRoute && <Navigation />}
        <div className="layout">{children}</div>
        {!isDashboardRoute && <Footer />}
      </body>
    </html>
  );
}

'use client';

import "@/styles/globals.css";
import ScrollToTop from "@/components/scrollToTop";
import Header from '@/components/header'
import Footer from '@/components/footer'
import { usePathname } from "next/navigation"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname()
  return (
    <html lang="en">
      <body>
        { (path === '/') ?  
          <>
            {children}
          </> : 
          <>
            <ScrollToTop />
            <Header />
            {children}
            <Footer />
          </>
          }
      </body>
    </html>
  );
}

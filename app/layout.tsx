"use client";

import { Inter } from "next/font/google";
import { ReactLenis } from "@studio-freight/react-lenis";
import NavBar from "@/components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-charcoal-950 text-foreground-primary">
      <body className={`${inter.className} min-h-screen antialiased overflow-x-hidden selection:bg-lightning selection:text-white`}>
        <ReactLenis root>
          <NavBar />
          <main className="relative flex flex-col w-full min-h-screen">
            {children}
          </main>
        </ReactLenis>
      </body>
    </html>
  );
}
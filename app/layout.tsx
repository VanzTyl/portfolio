import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import LenisProvider from "./providers/LenisProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-charcoal-950 text-foreground-primary">
      <body
        className={`${inter.className} min-h-screen antialiased overflow-x-hidden selection:bg-lightning selection:text-white`}
      >
        <LenisProvider>
          <NavBar />
          <main className="relative flex flex-col w-full min-h-screen">
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
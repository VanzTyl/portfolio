"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import ContactModal from "./ContactModal";

const navLinks = [
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Education", href: "/#education" },
  { name: "Projects", href: "/#projects" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If we are already on the home page and clicking a hash link, smoothly scroll to it.
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "#");
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // If we are NOT on the home page (e.g., on /projects), default Next.js Link behavior
    // will correctly route the user to "/" and anchor down to the section.
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled || pathname !== "/" 
            ? "bg-charcoal-950/80 backdrop-blur-md border-charcoal-800 py-4 shadow-lg shadow-charcoal-950/50" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Terminal className="w-6 h-6 text-lightning group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-white tracking-wide">
              Vanz<span className="text-lightning">Tyl</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
               <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-foreground-secondary hover:text-lightning transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="hover:scale-[1.025] flex items-center cursor-pointer px-4 py-2 border-2 rounded-br-xl bg-charcoal-900 border-gray-400 text-sm text-white font-medium hover:border-lightning hover:text-lightning transition-all"
          >
            Contact Me
          </button>
        </div>
      </motion.nav>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
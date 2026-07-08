"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-150 h-150 bg-lightning/15 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-16 md:mt-0"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground-primary mb-4">
          Ian De Guzman
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-white via-foreground-secondary to-charcoal-700 mt-2">
            aka <span className="text-lightning">VanzTyl</span>
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground-secondary max-w-2xl mb-10 font-light">
          CS Student Specializing in <strong className="font-semibold text-white">Artificial Intelligence, Cloud Computing</strong>
          <br />
          Web Developer | Mobile App Developer | Data Science | AI / ML
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link 
            href="/projects" 
            className="hover:scale-[1.025] flex items-center gap-2 px-6 py-3 rounded-3xl bg-charcoal-900 border border-gray-400 text-white font-medium hover:border-lightning hover:text-lightning hover:shadow-[0_0_20px_rgba(178,75,243,0.2)] transition-all group shrink-0"
          >
            <Terminal className="w-5 h-5" />
            Explore Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
        </motion.div>
      </motion.div>
    </section>
  );
}
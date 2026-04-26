"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Database, Wrench, BookText, BotIcon, Rocket, Gamepad2, LandPlot } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C#", "Python", "Go", "PHP", "Javascript", "HTML", "CSS"],
  },
  {
    title: "Web Frameworks",
    icon: Globe,
    skills: ["Next.js", "React.js", "Express.js", "FastAPI"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Supabase"],
  },
  {
    title: "IDEs",
    icon: Wrench,
    skills: ["VS Code", "Visual Studio", "Android Studio"],
  },
  {
    title: "AI Tools",
    icon: BotIcon,
    skills: ["Gemini", "Claude", "OpenCode", "Antigravity"],
  },
  {
    title: "Deployment Platforms",
    icon: Rocket,
    skills: ["Netlify", "Render", "Github Pages"],
  },
  {
    title: "Game Engines",
    icon: Gamepad2,
    skills: ["Unity", "Roblox Studio"]
  },
  {
    title: "Version Control",
    icon: LandPlot,
    skills: ["Git"],
  },
];

export default function SkillsMatrix() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 3, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative w-full py-24 px-4 md:px-8 bg-charcoal-950 flex justify-center">
      <div className="max-w-6xl w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-lightning">Skills</span>
            </h2>
            <p className="text-foreground-secondary text-lg max-w-md font-light">
              A comprehensive list of programming languages, databases, frameworks & tools I use.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-charcoal-700">
            <BookText className="w-6 h-6" />
            <span className="font-mono text-sm tracking-widest uppercase"></span>
          </div>
        </motion.div>

        {/* Skills Grid - now repeatable with once: false */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <motion.div 
                key={index}
                variants={cardVariants}
                className="group relative p-8 rounded-3xl bg-charcoal-900 border border-charcoal-800 hover:border-lightning/30 transition-colors duration-500 overflow-hidden isolate"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-lightning/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-charcoal-800 border border-charcoal-700 text-lightning">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 rounded-full text-sm font-medium bg-charcoal-950 border border-charcoal-800 text-foreground-secondary group-hover:text-foreground-primary group-hover:border-charcoal-700 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
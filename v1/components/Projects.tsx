"use client";

import { motion } from "framer-motion";
import { FolderGit2, TerminalSquare, X, Image as ImageIcon, ExternalLink, Code2, GitBranch } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const featuredProjects = projectsData.filter(project => project.featured);

  const getDetailDelay = (index: number) => {
    if (index === 0) return 0.1;
    if (index === 1) return 0.5;
    if (index === 2) return 0.8;
    return 0.1;
  };

  const renderCardContent = (project: typeof featuredProjects[0], isExpanded: boolean = false) => {
    const Icon = project.icon;
    return (
      <>
        <div className="absolute top-0 right-0 w-64 h-64 bg-lightning/5 rounded-full blur-3xl -z-10 group-hover:bg-lightning/10 transition-colors duration-500" />
        
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="p-3 rounded-2xl bg-charcoal-950 border border-charcoal-800 text-lightning group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-6 h-6" />
          </div>
          <TerminalSquare className={`w-5 h-5 text-charcoal-700 transition-colors duration-500 ${!isExpanded && 'group-hover:text-lightning/50'}`} />
        </div>

        <div className="mb-6 grow">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-sm font-medium text-lightning mb-4">{project.type}</p>
          {!isExpanded && (
            <p className="text-foreground-secondary text-sm leading-relaxed">
              {project.description}
            </p>
          )}
        </div>

        <div className="pt-6 border-t border-charcoal-800/50 mt-auto">
          <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-foreground-tertiary uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" /> Tech Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-charcoal-950 border border-charcoal-800 text-foreground-secondary">
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-charcoal-950 border border-charcoal-800 text-foreground-secondary">
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <section id="projects" className="relative w-full py-24 px-4 md:px-8 bg-charcoal-950 flex justify-center min-h-200">
      <div className="max-w-6xl w-full flex flex-col">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
              <FolderGit2 className="w-8 h-8 text-lightning" />
              Featured <span className="text-lightning">Projects</span>
            </h2>
            <p className="text-foreground-secondary text-lg max-w-xl font-light">
              Select a card to view project, or explore the full directory.
            </p>
          </div>
          
          <Link 
            href="/projects" 
            className="hover:scale-[1.025] flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal-900 border border-charcoal-800 text-white font-medium hover:border-lightning hover:text-lightning hover:shadow-[0_0_20px_rgba(178,75,243,0.2)] transition-all group shrink-0"
          >
            View Full Directory
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        <div className="relative w-full grow">
          {selectedProject !== null && (
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full">
              <motion.div 
                layoutId={`project-card-${selectedProject}`}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col w-full lg:w-1/3 shrink-0 bg-charcoal-900 border border-charcoal-800 rounded-3xl p-6 md:p-8 isolate overflow-hidden"
              >
                {renderCardContent(featuredProjects[selectedProject], true)}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: getDetailDelay(selectedProject), ease: "easeOut" }}
                className="flex-1 flex flex-col bg-charcoal-900 border border-charcoal-800 rounded-3xl overflow-hidden"
              >
                <div className="relative h-50 lg:h-70 w-full bg-charcoal-950 border-b border-charcoal-800 flex flex-col items-center justify-center p-6">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-charcoal-900 border border-charcoal-800 rounded-full text-foreground-secondary hover:text-white hover:border-lightning transition-all z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="w-full h-full border border-dashed border-charcoal-800 rounded-xl bg-charcoal-950 flex items-center justify-center text-charcoal-700">
                    <ImageIcon className="w-16 h-16 opacity-50" />
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex-1 bg-charcoal-900">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl font-bold text-white">System Overview</h4>
                      <span className={`px-2 py-0.5 rounded text-xs font-mono border ${
                        featuredProjects[selectedProject].visibility === 'Public' 
                          ? 'border-green-500/30 text-green-400 bg-green-500/10' 
                          : 'border-red-500/30 text-red-400 bg-red-500/10'
                      }`}>
                        {featuredProjects[selectedProject].visibility}
                      </span>
                    </div>

                    <div className="flex gap-3">
                      {featuredProjects[selectedProject].repoUrl && (
                        <a href={featuredProjects[selectedProject].repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-charcoal-950 border border-charcoal-800 text-foreground-secondary text-xs font-medium hover:border-lightning hover:text-lightning transition-colors">
                          <GitBranch className="w-3.5 h-3.5" /> Code
                        </a>
                      )}
                      {featuredProjects[selectedProject].liveUrl && featuredProjects[selectedProject].visibility === "Public" && (
                        <a href={featuredProjects[selectedProject].liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-charcoal-950 border border-charcoal-800 text-foreground-secondary text-xs font-medium hover:border-lightning hover:text-lightning transition-colors">
                          <ExternalLink className="w-3.5 h-3.5" /> Live
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-foreground-secondary leading-relaxed text-sm md:text-base">
                    {featuredProjects[selectedProject].description}
                  </p>
                </div>
              </motion.div>
            </div>
          )}

          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full ${selectedProject !== null ? 'hidden' : ''}`}>
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={index}
                layoutId={`project-card-${index}`}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedProject(index)}
                className="group relative flex flex-col h-full bg-charcoal-900 border border-charcoal-800 rounded-3xl p-6 md:p-8 hover:border-lightning/40 hover:shadow-[0_0_30px_rgba(178,75,243,0.1)] transition-all duration-500 isolate overflow-hidden cursor-pointer"
              >
                {renderCardContent(project)}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
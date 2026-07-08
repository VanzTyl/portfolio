"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderGit2, ChevronRight, Terminal as TerminalIcon, Code2, 
  LayoutTemplate, FolderOpen, ArrowLeft, ExternalLink, GitBranch 
} from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function ProjectsTerminalPage() {
  const groupedProjects = useMemo(() => {
    return projectsData.reduce((acc, project) => {
      if (!acc[project.year]) acc[project.year] = [];
      acc[project.year].push(project);
      return acc;
    }, {} as Record<string, typeof projectsData>);
  }, []);

  const sortedYears = Object.keys(groupedProjects).sort((a, b) => Number(b) - Number(a));
  const [activeTab, setActiveTab] = useState(groupedProjects[sortedYears[0]][0]);

  return (
    <div className="min-h-screen bg-charcoal-950 pt-32 px-4 md:px-8 pb-12 flex flex-col items-center">
      <div className="max-w-7xl w-full mb-6 flex justify-between items-center">
        <Link href="/#projects" className="flex items-center gap-2 text-foreground-secondary hover:text-lightning transition-colors group text-sm font-medium">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </div>

      <div className="max-w-7xl w-full h-[750px] flex flex-col border border-charcoal-800 rounded-xl overflow-hidden shadow-2xl shadow-black/50">
        <div className="h-12 bg-charcoal-900 border-b border-charcoal-800 flex items-center px-4 justify-between select-none shrink-0">
          <div className="flex items-center gap-2 text-foreground-tertiary">
            <TerminalIcon className="w-4 h-4" />
            <span className="text-xs font-mono tracking-wider">~/portfolio/projects/directory</span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:brightness-110 transition-all cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:brightness-110 transition-all cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-green-500 hover:brightness-110 transition-all cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-grow bg-charcoal-950 overflow-hidden">
          <div className="w-full md:w-64 lg:w-72 border-r border-charcoal-800 bg-charcoal-950/50 flex flex-col shrink-0 overflow-y-auto">
            <div className="p-4 text-xs font-bold text-foreground-tertiary uppercase tracking-widest flex items-center gap-2 select-none sticky top-0 bg-charcoal-950/90 backdrop-blur-sm z-10">
              <FolderGit2 className="w-4 h-4" /> Explorer
            </div>
            <div className="flex flex-col pb-4">
              {sortedYears.map((year) => (
                <div key={year} className="mb-2">
                  <div className="flex items-center gap-2 px-4 py-2 text-sm font-mono text-foreground-secondary select-none">
                    <FolderOpen className="w-4 h-4 text-lightning/70" />
                    <span>{year} Builds</span>
                  </div>
                  <div className="flex flex-col">
                    {groupedProjects[year].map((project) => {
                      const isActive = activeTab.id === project.id;
                      const Icon = project.terminalIcon;
                      return (
                        <button
                          key={project.id}
                          onClick={() => setActiveTab(project)}
                          className={`flex flex-col items-start px-6 py-2 transition-colors text-left pl-10 ${isActive ? "bg-lightning/10 border-r-2 border-lightning" : "hover:bg-charcoal-900 border-r-2 border-transparent"}`}
                        >
                          <div className={`flex items-center gap-2 text-sm font-medium ${isActive ? 'text-lightning' : 'text-white'}`}>
                            <Icon className="w-4 h-4 shrink-0" />
                            <span className="truncate">{project.title}</span>
                          </div>
                          <span className={`text-xs mt-0.5 ${isActive ? 'text-lightning/70' : 'text-foreground-tertiary'}`}>
                            {project.category}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col bg-charcoal-900/30 relative overflow-hidden">
            <div className="h-10 bg-charcoal-900 flex items-center px-4 border-b border-charcoal-800 text-sm font-mono text-lightning gap-2 select-none shrink-0">
              <activeTab.terminalIcon className="w-4 h-4" />
              {activeTab.title} / <span className="text-foreground-secondary">{activeTab.category}</span>
            </div>

            <div className="flex-1 p-6 md:p-10 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-4xl flex flex-col h-full"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                    <h1 className="text-3xl md:text-5xl font-bold text-white flex items-center gap-4">
                      {activeTab.title}
                      {activeTab.visibility === "Public" && activeTab.liveUrl && (
                        <a href={activeTab.liveUrl} target="_blank" rel="noreferrer" className="text-foreground-secondary hover:text-lightning transition-colors" title="View Live Deployment">
                          <ExternalLink className="w-7 h-7" />
                        </a>
                      )}
                    </h1>
                    <span className={`px-2.5 py-1 rounded text-xs font-mono border w-max ${
                      activeTab.visibility === 'Public' 
                        ? 'border-green-500/30 text-green-400 bg-green-500/10' 
                        : 'border-red-500/30 text-red-400 bg-red-500/10'
                    }`}>
                      {activeTab.visibility}
                    </span>
                  </div>

                  <p className="text-lg md:text-xl text-lightning font-light mb-6">{activeTab.type}</p>
                  
                  {activeTab.repoUrl && (
                    <div className="mb-8">
                      <a 
                        href={activeTab.repoUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-charcoal-900 border border-charcoal-800 text-white text-sm font-medium hover:border-lightning hover:text-lightning hover:shadow-[0_0_15px_rgba(178,75,243,0.15)] transition-all"
                      >
                        <GitBranch className="w-4 h-4" /> View Repository
                      </a>
                    </div>
                  )}

                  <div className="flex-1 flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 space-y-8">
                      <div>
                        <h3 className="text-sm font-bold text-foreground-tertiary uppercase tracking-widest mb-3 flex items-center gap-2">
                          <LayoutTemplate className="w-4 h-4" /> System Overview
                        </h3>
                        <p className="text-foreground-secondary leading-relaxed text-sm md:text-base">
                          {activeTab.description}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-foreground-tertiary uppercase tracking-widest mb-3 flex items-center gap-2">
                          <Code2 className="w-4 h-4" /> Architecture Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {activeTab.stack.map((tech, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-mono bg-charcoal-950 border border-charcoal-800 text-foreground-secondary">{tech}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-foreground-tertiary uppercase tracking-widest mb-3 flex items-center gap-2">
                          <TerminalIcon className="w-4 h-4" /> Core Features
                        </h3>
                        <ul className="space-y-2">
                          {activeTab.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-foreground-secondary">
                              <ChevronRight className="w-4 h-4 text-lightning shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="w-full h-64 lg:h-full min-h-[300px] border border-dashed border-charcoal-800 rounded-xl bg-charcoal-950 flex flex-col items-center justify-center text-charcoal-700 p-6 text-center">
                        <activeTab.terminalIcon className="w-16 h-16 mb-4 opacity-30" />
                        <span className="font-mono text-xs uppercase tracking-widest text-center">
                          UI Render for <br/><span className="text-lightning/50">{activeTab.title}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
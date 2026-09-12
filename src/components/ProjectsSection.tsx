"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ExternalLink, 
  ArrowRight, 
  Lock, 
  FileCheck2, 
  Atom, 
  Building2, 
  Sprout, 
  MapPin, 
  Glasses,
  Code2
} from "lucide-react";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";
import { ProjectModal } from "./ProjectModal";
import { GithubIcon } from "./SocialIcons";

const iconMap: Record<string, React.ElementType> = {
  FileCheck2,
  Atom,
  Building2,
  Sprout,
  MapPin,
  Glasses
};

export const ProjectsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("Tous");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const tagsList = [
    "Tous",
    "RAG & IA Générative",
    "Recherche / NLP",
    "Full-Stack + IA",
    "Génie Logiciel",
    "VR / Unity"
  ];

  const filteredProjects = selectedTag === "Tous"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.tags.includes(selectedTag));

  return (
    <section id="projects" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-indigo-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Réalisations & Projets Phares</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projets d&apos;Ingénierie &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-400">
              Recherche Appliquée
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Une sélection de 6 projets majeurs démontrant rigueur scientifique, explicabilité IA et maîtrise des architectures logicielles.
          </p>

          {/* Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {tagsList.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                  selectedTag === tag
                    ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 text-white shadow-lg shadow-indigo-500/25 scale-105 border border-white/20"
                    : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const IconComponent = iconMap[project.iconName] || Code2;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-2xl backdrop-blur-xl group flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
                >
                  
                  {/* Card Header & Visual Gradient Bar */}
                  <div>
                    {/* Visual Placeholder Header Banner */}
                    <div className={`h-28 bg-gradient-to-r ${project.gradient} opacity-80 p-6 flex items-center justify-between relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="relative z-10 p-3 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white shadow-lg">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      <span className="relative z-10 px-3 py-1 text-[11px] font-mono rounded-full bg-black/40 text-white border border-white/20 backdrop-blur-md">
                        {project.codeStatus}
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors tracking-tight">
                        {project.title}
                      </h3>

                      {/* Short summary */}
                      <p className="text-xs text-zinc-300 font-light leading-relaxed line-clamp-3">
                        {project.shortSummary}
                      </p>

                      {/* Key highlights preview */}
                      <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                        {project.highlights.slice(0, 2).map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                            <span className="text-indigo-400 font-bold">›</span>
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stack badges preview */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-white/[0.04] text-zinc-400 border border-white/[0.08]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 4 && (
                          <span className="px-2 py-0.5 text-[10px] font-mono text-zinc-500">
                            +{project.stack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/[0.06] mt-4">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 hover:text-white transition-colors group/btn"
                    >
                      <span>En savoir plus</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Code Source GitHub"
                          className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors border border-white/10"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Démo externe"
                          className="p-2 text-zinc-400 hover:text-amber-400 hover:bg-white/10 rounded-lg transition-colors border border-white/10"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Modal for selected project */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};

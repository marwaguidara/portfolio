"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Lock, 
  FileCheck2, 
  Atom, 
  Building2, 
  Sprout, 
  MapPin, 
  Glasses,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Project } from "@/data/portfolioData";
import { GithubIcon } from "./SocialIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  FileCheck2,
  Atom,
  Building2,
  Sprout,
  MapPin,
  Glasses
};

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const images = project?.images || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  // Keyboard escape handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  // Reset index when project changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [project?.id]);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Autoplay every 5s, paused on hover
  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, images.length, goToNext]);

  const isVideo = (src: string) =>
    src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg");

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0
    })
  };

  if (!project) return null;

  const IconComponent = iconMap[project.iconName] || Code2;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#12151E] border border-white/15 rounded-3xl shadow-2xl overflow-y-auto z-10 p-6 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors border border-white/10"
            aria-label="Fermer la modale"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-4 pr-10">
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/25"
                >
                  {tag}
                </span>
              ))}

              <span className="px-3 py-1 text-xs font-mono rounded-full bg-white/[0.04] text-amber-300 border border-white/10 flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-amber-400" />
                {project.codeStatus}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-lg shrink-0`}>
                <IconComponent className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Project Media Carousel */}
          {images.length > 0 && (
            <div className="my-8">
              <div
                className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0D0F14]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Media viewport */}
                <div className="relative flex items-center justify-center" style={{ maxHeight: 500 }}>
                  <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
                      className="w-full flex items-center justify-center"
                      style={{ maxHeight: 500 }}
                    >
                      {isVideo(images[currentIndex]) ? (
                        <video
                          src={images[currentIndex]}
                          controls
                          className="w-full object-contain"
                          style={{ maxHeight: 500 }}
                          preload="metadata"
                        />
                      ) : (
                        <img
                          src={images[currentIndex]}
                          alt={`Capture ${currentIndex + 1} — ${project.title}`}
                          className="w-full object-contain"
                          style={{ maxHeight: 500 }}
                          loading="lazy"
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={goToPrev}
                      aria-label="Média précédent"
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/80 border border-white/10 backdrop-blur-sm transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={goToNext}
                      aria-label="Média suivant"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/80 border border-white/10 backdrop-blur-sm transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Counter badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white/90 text-[11px] font-mono backdrop-blur-sm border border-white/10">
                  {currentIndex + 1} / {images.length}
                </div>

                {/* Pause indicator on hover */}
                {isPaused && images.length > 1 && (
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full bg-black/50 text-white/70 text-[10px] font-mono backdrop-blur-sm">
                    Pause
                  </div>
                )}
              </div>

              {/* Navigation dots */}
              {images.length > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      aria-label={`Aller à la capture ${idx + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? "w-6 h-2 bg-indigo-400"
                          : "w-2 h-2 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Detailed Content */}
          <div className="space-y-6 text-zinc-300 text-sm leading-relaxed">
            
            {/* Description */}
            <div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Description Approfondie
              </h3>
              <p className="whitespace-pre-line text-zinc-300 font-light text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-indigo-500/40">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Highlights */}
            <div>
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Points Forts & Apports Techniques
              </h3>
              <ul className="grid grid-cols-1 gap-2.5">
                {project.highlights.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold">
                      ✓
                    </span>
                    <span className="text-zinc-200 font-light text-xs sm:text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-400" />
                Technologies & Outils Mobilisés
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-white/[0.04] text-zinc-200 border border-white/[0.08] text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action Links */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-zinc-500 font-mono">
                Statut : <span className="text-zinc-300">{project.codeStatus}</span>
              </div>

              <div className="flex items-center gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-colors shadow-md"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Voir le Code (GitHub)</span>
                  </a>
                ) : project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-amber-600 rounded-xl hover:bg-amber-500 transition-colors shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Voir la Démo (LinkedIn)</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono text-zinc-400 bg-white/[0.04] rounded-xl border border-white/10">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Dépôt privé / Disponible sur demande</span>
                  </span>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

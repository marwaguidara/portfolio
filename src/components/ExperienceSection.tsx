"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Sparkles, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2 
} from "lucide-react";
import { EXPERIENCES_DATA } from "@/data/portfolioData";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-amber-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Expérience & Immersion</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Parcours Professionnel &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
              Stages de Spécialité
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            De la recherche appliquée en Deep Learning au développement d&apos;applications d&apos;entreprise en production.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-amber-500/20 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {EXPERIENCES_DATA.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#12151E] border-2 border-amber-400 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-400/20 z-10 hidden sm:flex">
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all duration-300 shadow-2xl backdrop-blur-xl space-y-4 group">
                      
                      {/* Period Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
                        <span className="px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-mono font-semibold flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>

                        <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-indigo-400" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors tracking-tight">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-indigo-300 mt-1 flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-purple-400" />
                          {exp.company}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Bullet points */}
                      <ul className="space-y-2 pt-2">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                        {exp.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

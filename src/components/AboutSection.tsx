"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Binary, 
  Cpu, 
  Users, 
  GraduationCap, 
  Sparkles,
  CheckCircle,
  Award,
  BookOpen
} from "lucide-react";
import { PERSONAL_INFO, EDUCATION_DATA } from "@/data/portfolioData";

const iconMap = {
  ShieldCheck,
  Binary,
  Cpu,
  Users
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-indigo-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>À propos & Vision</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ingénieure en Informatique &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-400">
              Chercheuse Appliquée en IA
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Allier la rigeur mathématique et algorithmique de l&apos;IA aux normes les plus exigeantes du génie logiciel.
          </p>
        </div>

        {/* Bio & Differentiators Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Bio Cards Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-xl space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                Mon Parcours
              </h3>

              <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                {PERSONAL_INFO.bioParagraphs.map((para, idx) => (
                  <p key={idx} className="relative pl-4 border-l-2 border-indigo-500/40">
                    {para}
                  </p>
                ))}
              </div>

              {/* Associative badging */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono text-zinc-400">Associations (Licence) :</span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium">
                  IEEE Student Branch (2022-2023)
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium">
                  Leader Club (2023-2024)
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                  Microsoft Club (2025)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Differentiators Grid Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 gap-4"
          >
            {PERSONAL_INFO.keyDifferentiators.map((diff, index) => {
              const IconComponent = iconMap[diff.icon as keyof typeof iconMap] || ShieldCheck;
              return (
                <div
                  key={diff.title}
                  className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300 border border-indigo-500/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors">
                        {diff.title}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1 font-light leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

        {/* Formation / Academic Background Cards */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-amber-400" />
            <h3 className="text-2xl font-bold text-white tracking-tight">Formation Académique</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 font-mono text-xs">
                    {edu.period}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">{edu.location}</span>
                </div>

                <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                <p className="text-sm text-indigo-300 font-medium mt-0.5">{edu.institution}</p>
                <p className="text-xs text-zinc-400 mt-3 leading-relaxed font-light">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

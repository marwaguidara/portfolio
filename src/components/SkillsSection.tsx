"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, 
  Sparkles, 
  Server, 
  Layout, 
  Database, 
  Wrench, 
  Globe,
  CheckCircle2
} from "lucide-react";
import { SKILLS_DATA } from "@/data/portfolioData";

const categoryIconMap: Record<string, React.ElementType> = {
  Brain,
  Sparkles,
  Server,
  Layout,
  Database,
  Wrench
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  const categories = ["Tous", ...SKILLS_DATA.map(c => c.title)];

  const filteredCategories = selectedCategory === "Tous"
    ? SKILLS_DATA
    : SKILLS_DATA.filter(c => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-purple-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Stack Technique & Spécialités</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Compétences &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400">
              Technologies Clés
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Un éventail complet combinant l&apos;ingénierie des modèles d&apos;IA de pointe et l&apos;architecture d&apos;applications distribuées.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105 border border-white/20"
                    : "bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, catIdx) => {
              const IconComponent = categoryIconMap[category.icon] || Brain;
              return (
                <motion.div
                  key={category.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: catIdx * 0.05 }}
                  className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl backdrop-blur-xl group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/20 transition-all" />

                  <div>
                    {/* Card Header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                      <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:text-amber-300 group-hover:scale-110 transition-all border border-indigo-500/20">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skill Badges List */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIdx) => (
                        <motion.span
                          key={skill.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: skillIdx * 0.03 }}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                            skill.highlight
                              ? "bg-gradient-to-r from-indigo-950/80 to-purple-950/80 text-indigo-200 border border-indigo-500/40 shadow-sm shadow-indigo-500/20 font-semibold"
                              : "bg-white/[0.04] text-zinc-300 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white"
                          }`}
                        >
                          {skill.highlight && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          )}
                          <span>{skill.name}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>{category.skills.length} compétences</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Languages & Soft Skills Footer Pill Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-semibold text-white">Langues pratiquées :</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
              <strong className="text-white">Arabe</strong> (Natif)
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
              <strong className="text-white">Français</strong> (Courant / Professionnel)
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
              <strong className="text-white">Anglais</strong> (Niveau B2)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

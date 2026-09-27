"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  Brain, 
  Cpu, 
  Terminal, 
  FileText, 
  CheckCircle2,
  Code2
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      
      {/* Glow highlight behind Hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-amber-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-mono font-medium shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Disponible pour opportunités AI / ML Engineer
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {PERSONAL_INFO.location}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                <span className="block font-sans">{PERSONAL_INFO.name}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-400 font-sans text-3xl sm:text-5xl lg:text-5xl mt-2 font-bold">
                  {PERSONAL_INFO.title}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
                Conception de <strong className="text-white font-medium">systèmes d&apos;IA fiables & explicables</strong> (RAG hybrides, NLI, garde-fous anti-hallucination) couplée à un <strong className="text-white font-medium">développement full-stack rigoureux</strong>.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>RAG & Anti-Hallucination</span>
                </div>
                <p className="text-xs text-zinc-400">NLI continuous confidence & grounding lexical</p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-mono mb-1">
                  <Brain className="w-4 h-4" />
                  <span>NLP & Transformers</span>
                </div>
                <p className="text-xs text-zinc-400">DeBERTa, RoBERTa, SHAP explicabilité</p>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>Full-Stack Architecture</span>
                </div>
                <p className="text-xs text-zinc-400">FastAPI, Spring Boot, Node.js, Next.js</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 rounded-2xl shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-white/20 group"
              >
                <span>Explorer les 6 projets</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-md"
              >
                <span>Me contacter</span>
              </a>
            </div>

          </motion.div>

          

        </div>
      </div>
    </section>
  );
};

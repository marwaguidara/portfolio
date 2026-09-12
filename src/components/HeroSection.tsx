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

          {/* Right Column: Abstract Interactive Code / AI Node Terminal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1 border border-white/15 shadow-2xl backdrop-blur-xl group">
              
              {/* Header Bar of mock terminal */}
              <div className="bg-[#141720] px-4 py-3 rounded-t-xl flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>marwa_rag_pipeline.py</span>
                </div>
                <div className="text-[10px] text-zinc-500 font-mono">Python 3.11</div>
              </div>

              {/* Body of Terminal */}
              <div className="bg-[#0F1117] p-5 rounded-b-xl font-mono text-xs text-zinc-300 space-y-3.5 overflow-hidden">
                <div className="flex items-center justify-between text-zinc-500 text-[11px] pb-2 border-b border-white/[0.06]">
                  <span># Verification Pipeline (ISIMS AI Research)</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> VERIFIED
                  </span>
                </div>

                <div className="space-y-1 text-zinc-300">
                  <p><span className="text-purple-400">class</span> <span className="text-amber-300">CitationValidator</span>:</p>
                  <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">evaluate_claim</span>(self, claim, docs):</p>
                  <p className="pl-8 text-zinc-400"># Dense + BM25 + RRF Fusion</p>
                  <p className="pl-8">sources = self.hybrid_retriever.query(claim, top_k=<span className="text-amber-400">5</span>)</p>
                  <p className="pl-8 text-zinc-400"># Cross-Encoder Reranking & NLI Verification</p>
                  <p className="pl-8">nli_score = self.nli_model.predict(claim, sources)</p>
                  <p className="pl-8 text-purple-400">if</p> <p className="pl-12">nli_score &lt; <span className="text-amber-400">0.75</span>:</p>
                  <p className="pl-16 text-emerald-400">return <span className="text-emerald-300">&quot;Données insuffisantes&quot;</span>  <span className="text-zinc-500"># Explicit Refusal</span></p>
                </div>

                {/* Execution Metrics snippet */}
                <div className="mt-4 pt-3 border-t border-white/[0.08] grid grid-cols-2 gap-2 text-[11px]">
                  <div className="bg-indigo-950/40 border border-indigo-500/20 rounded-lg p-2">
                    <span className="text-zinc-400 block text-[10px]">Faithfulness Score</span>
                    <span className="text-indigo-300 font-bold">0.942 (RoBERTa-MNLI)</span>
                  </div>
                  <div className="bg-amber-950/40 border border-amber-500/20 rounded-lg p-2">
                    <span className="text-zinc-400 block text-[10px]">Citation Accuracy</span>
                    <span className="text-amber-300 font-bold">100% Strict Guard</span>
                  </div>
                </div>

                {/* Micro Animated Status */}
                <div className="flex items-center gap-2 pt-1 text-[11px] text-zinc-400">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
                  <span>Pipeline NLI local actif sur Qdrant Vector Store</span>
                </div>
              </div>

              {/* Decorative Accent Glow */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-tr from-amber-500 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

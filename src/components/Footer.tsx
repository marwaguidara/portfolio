"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0A0C10] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-amber-500 p-[1.5px]">
              <div className="w-full h-full bg-[#0D0F14] rounded-[10px] flex items-center justify-center">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-amber-300 text-sm">
                  MG
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                {PERSONAL_INFO.title}
              </p>
            </div>
          </div>

          {/* Center Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] text-zinc-400 hover:text-indigo-400 hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-white/[0.04] text-zinc-400 hover:text-amber-400 hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Scroll to top */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-zinc-500 font-mono">
              © {new Date().getFullYear()} Marwa Guidara. Tous droits réservés.
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
              aria-label="Retour en haut de page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

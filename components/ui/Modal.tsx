"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Project } from "@/types";

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/*
           * Layer 1 – True full-screen backdrop.
           * Uses fixed + inset-0 at z-[9000] so it sits ABOVE every section
           * (automations, ai-agents, etc.) and the blur covers the whole page.
           */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[9000] bg-[#020409]/85 backdrop-blur-2xl"
          />

          {/*
           * Layer 2 – Scroll wrapper that lives ABOVE the backdrop (z-[9001]).
           * overflow-y-auto lets the modal card scroll on small screens,
           * but this div itself is NOT a new stacking context for the backdrop.
           */}
          <div
            className="fixed inset-0 z-[9001] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
          >
            {/* Centre the card; my-8 gives breathing room top & bottom */}
            <div className="flex min-h-full items-start justify-center p-4 sm:p-6">
              <motion.div
                key="modal-card"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-3xl my-8 bg-gradient-to-b from-[#0d1326] to-[#060c18] border border-accent/30 rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8),0_0_80px_rgba(108,99,255,0.15)] text-foreground"
              >
                {/* Hero Image */}
                <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-bg-dark">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover brightness-90 transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-transparent to-black/30 pointer-events-none" />

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full border border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-center text-foreground-muted hover:text-accent-pink hover:border-accent-pink hover:rotate-90 transition-all duration-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8">
                  {/* Chips */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.62rem] uppercase tracking-wider px-3 py-1 rounded-full border border-border text-accent-cyan bg-accent-cyan/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wide bg-gradient-to-r from-white via-white to-accent-cyan bg-clip-text text-transparent mb-2">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-accent-pink tracking-wider uppercase mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-foreground-muted text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Highlights if any */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-6 p-4 rounded-lg bg-white/[0.02] border border-border">
                      <h4 className="font-mono text-[0.65rem] uppercase tracking-widest text-accent-cyan mb-3">
                        Key Engineering Achievements
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-foreground/90">
                            <CheckCircle2 className="w-4 h-4 text-accent-mint shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Meta Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.03] border border-border mb-6">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[0.6rem] uppercase tracking-widest text-foreground-muted">
                        My Role
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-foreground">
                        {project.role}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[0.6rem] uppercase tracking-widest text-foreground-muted">
                        Year
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-foreground">
                        {project.year}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[0.6rem] uppercase tracking-widest text-foreground-muted">
                        Tech Stack
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-foreground">
                        {project.stack}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-accent to-accent-cyan text-white font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Preview</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-foreground-muted hover:text-accent-pink hover:border-accent-pink font-mono text-xs uppercase tracking-wider transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

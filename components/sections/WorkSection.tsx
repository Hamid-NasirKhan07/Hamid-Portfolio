"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { ProjectModal } from "@/components/ui/Modal";

export function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header matching template */}
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-xs tracking-[0.3em] text-accent-cyan uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-accent-cyan/60" />
            <span>Portfolio</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide leading-none">
            Selected Work
          </h2>
          <p className="text-foreground-muted text-sm sm:text-base max-w-xl mt-3 font-light">
            Production CRM architectures, autonomous n8n workflows, and full-stack software built for scale.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => setSelectedProject(project)}
              className="project-card group relative aspect-[4/3] rounded-lg overflow-hidden border border-border bg-bg-card backdrop-blur-md cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(108,99,255,0.7)]"
            >
              {/* Thumbnail Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover brightness-75 saturate-80 group-hover:scale-108 group-hover:brightness-50 group-hover:saturate-50 transition-all duration-500 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="font-mono text-[0.58rem] uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-accent-cyan">
                  {project.category}
                </span>
              </div>

              {/* Hover Overlay matching template */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 bg-gradient-to-t from-[#060c18]/95 via-[#060c18]/50 to-transparent translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="font-mono text-[0.62rem] tracking-wider text-accent-cyan uppercase mb-1">
                  {project.tags.slice(0, 2).join(" · ")}
                </div>
                <h3 className="font-semibold text-lg text-white mb-1 leading-snug">
                  {project.title}
                </h3>
                <span className="inline-flex items-center gap-1 font-mono text-[0.68rem] text-accent-pink tracking-wider uppercase mt-1">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

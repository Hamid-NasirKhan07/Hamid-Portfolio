"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site.config";

export function AboutSection() {
  const { owner } = siteConfig;

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: About Image with Deco Frame & Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96"
            >
              {/* Offset Deco Frame */}
              <div className="absolute inset-0 border border-accent/60 rounded-sm translate-x-4 translate-y-4 opacity-50 z-0" />

              {/* Image Frame */}
              <div className="relative w-full h-full rounded-sm overflow-hidden border border-border bg-[#060c18] z-10 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Hamid Nasir Khan workspace and focus"
                  fill
                  className="object-cover grayscale-[35%] contrast-[1.1] hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 300px, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020409] via-transparent to-transparent opacity-60" />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-gradient-to-br from-accent to-accent-cyan px-4 py-3 rounded shadow-[0_8px_32px_rgba(108,99,255,0.4)] text-white font-mono">
                <div className="font-bold text-base leading-tight">
                  {owner.experienceYears}
                </div>
                <div className="text-[0.65rem] text-white/80 uppercase tracking-widest">
                  Experience
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Bio Details & Skill Pills */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Section Label */}
              <div className="font-mono text-xs tracking-[0.3em] text-accent-cyan uppercase mb-3 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-accent-cyan/60" />
                <span>Who I Am</span>
              </div>

              {/* Two-Line Title */}
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide leading-none mb-6">
                {owner.bioHeading.line1}{" "}
                <span className="text-accent-cyan">{owner.bioHeading.line2Accent}</span>
              </h2>

              {/* Paragraphs */}
              <div className="space-y-4 text-foreground-muted text-sm sm:text-base leading-relaxed mb-8 font-normal">
                {owner.bioParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Skill Pills matching template */}
              <div className="pt-2">
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-foreground-muted block mb-3">
                  Core Technologies & Ecosystem:
                </span>
                <div className="flex flex-wrap gap-2">
                  {owner.techPills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full border border-border bg-white/[0.03] backdrop-blur-md font-mono text-[0.68rem] tracking-wider text-foreground-muted hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

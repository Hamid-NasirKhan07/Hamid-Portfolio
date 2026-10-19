"use client";

import { motion } from "framer-motion";
import { stats, skillBars } from "@/data/stats";
import { StatCounter } from "@/components/ui/StatCounter";
import { SkillBar } from "@/components/ui/SkillBar";

export function StatsSection() {
  return (
    <section id="stats" className="py-24 md:py-32 px-6 md:px-12 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Header matching template */}
        <div className="mb-12">
          <div className="font-mono text-xs tracking-[0.3em] text-accent-cyan uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-accent-cyan/60" />
            <span>Numbers</span>
            <span className="w-8 h-[1px] bg-accent-cyan/60" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide leading-none">
            By the Stats
          </h2>
          <p className="text-foreground-muted text-sm sm:text-base max-w-lg mx-auto mt-3 font-light">
            Quantifiable engineering outcomes, verified system reliability, and technical proficiency across core disciplines.
          </p>
        </div>

        {/* 4 Stat Cards matching template */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 my-10">
          {stats.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stat-card group relative p-6 sm:p-8 rounded-lg border border-border bg-bg-card backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-glow text-center"
            >
              {/* Top gradient highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="font-display text-5xl sm:text-6xl leading-none bg-gradient-to-br from-white to-accent-cyan bg-clip-text text-transparent mb-2">
                <StatCounter
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                />
              </div>
              <div className="font-mono text-[0.65rem] sm:text-xs tracking-[0.15em] text-foreground-muted uppercase">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Progress Bars matching template */}
        <div className="mt-16 max-w-3xl mx-auto text-left p-8 rounded-2xl bg-white/[0.02] border border-border backdrop-blur-md">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan font-semibold">
              TECHNICAL COMPETENCY BENCHMARKS
            </span>
            <span className="font-mono text-[0.65rem] text-foreground-muted">
              AUDITED 2026
            </span>
          </div>

          <div className="space-y-4">
            {skillBars.map((skill) => (
              <SkillBar
                key={skill.label}
                label={skill.label}
                percentage={skill.percentage}
                category={skill.category}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

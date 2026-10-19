"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  label: string;
  percentage: number;
  category?: string;
}

export function SkillBar({ label, percentage }: SkillBarProps) {
  return (
    <div className="w-full mb-5">
      <div className="flex justify-between items-center font-mono text-xs tracking-wider text-foreground-muted mb-2">
        <span className="text-foreground/90 font-medium">{label}</span>
        <span className="text-accent-cyan font-bold">{percentage}%</span>
      </div>
      <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          className="h-full bg-gradient-to-r from-accent via-accent to-accent-cyan rounded-full shadow-[0_0_12px_rgba(0,212,255,0.4)]"
        />
      </div>
    </div>
  );
}

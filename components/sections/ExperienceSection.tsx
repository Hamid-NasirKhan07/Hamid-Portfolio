"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-4 h-4 text-accent-cyan" />;
      case "education":
        return <GraduationCap className="w-4 h-4 text-accent-pink" />;
      case "certification":
        return <Award className="w-4 h-4 text-accent-mint" />;
      default:
        return <Briefcase className="w-4 h-4 text-accent" />;
    }
  };

  return (
    <Section
      id="experience"
      label="Career & Track Record"
      title={
        <>
          Experience & <span className="text-accent-cyan">Milestones</span>
        </>
      }
      subtitle="Hands-on software engineering trajectory spanning enterprise CRM development, workflow orchestration, full-stack certification, and university engineering."
    >
      <div className="relative border-l border-accent/20 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-bg-deep border border-accent/40 flex items-center justify-center shadow-[0_0_12px_rgba(108,99,255,0.3)] group-hover:border-accent-cyan group-hover:scale-110 transition-all duration-300">
              {getTypeIcon(exp.type)}
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-7 rounded-xl bg-white/[0.03] border border-border group-hover:border-accent/40 transition-all duration-300 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-accent-cyan tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </span>
                <span className="font-mono text-[0.65rem] text-foreground-muted flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white/[0.04]">
                  <MapPin className="w-3 h-3 text-accent-pink" />
                  {exp.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {exp.role}
              </h3>
              <h4 className="font-mono text-sm text-accent tracking-wide mb-4">
                {exp.company}
              </h4>

              <p className="text-foreground-muted text-sm leading-relaxed mb-5 font-normal">
                {exp.description}
              </p>

              {/* Highlights */}
              {exp.highlights && (
                <div className="space-y-2 mb-5 pt-1">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-accent-mint shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.05]">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[0.62rem] uppercase tracking-wider px-2.5 py-1 rounded bg-white/[0.03] border border-border text-foreground-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

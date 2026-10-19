"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { processSteps } from "@/data/process";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ProcessSection() {
  return (
    <Section
      id="process"
      label="Methodology"
      title={
        <>
          How I <span className="text-accent-cyan">Deliver Results</span>
        </>
      }
      subtitle="A battle-tested 5-phase engineering process designed to eliminate project risk, align stakeholder expectations, and deliver rock-solid automations."
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-5 rounded-xl bg-white/[0.03] border border-border hover:border-accent/50 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group"
          >
            <div>
              {/* Step Number with Glow */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-4xl text-accent-cyan/80 group-hover:text-accent-cyan transition-colors">
                  {step.step}
                </span>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-white/20 hidden md:block" />
                )}
              </div>

              <h3 className="font-bold text-base text-white mb-1">
                {step.title}
              </h3>
              <p className="font-mono text-[0.68rem] text-accent-pink tracking-wider uppercase mb-3">
                {step.subtitle}
              </p>
              <p className="text-foreground-muted text-xs leading-relaxed mb-4 font-normal">
                {step.description}
              </p>
            </div>

            <div className="pt-3 border-t border-white/[0.05] space-y-1.5">
              <span className="font-mono text-[0.58rem] uppercase tracking-wider text-foreground-muted block mb-1">
                DELIVERABLES:
              </span>
              {step.outcomes.map((outcome, i) => (
                <div key={i} className="flex items-start gap-1.5 text-[0.68rem] text-foreground/80">
                  <CheckCircle2 className="w-3 h-3 text-accent-mint shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowUpRight, Sparkles, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/site.config";

export function BookingCtaSection() {
  return (
    <section className="py-20 px-6 md:px-12 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#0c1328] via-[#070d1e] to-[#040813] border border-accent/40 shadow-[0_20px_80px_rgba(108,99,255,0.2)] overflow-hidden text-center"
        >
          {/* Decorative ambient glowing backdrops */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-accent-cyan/20 blur-3xl pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/40 bg-white/[0.04] backdrop-blur-md font-mono text-[0.68rem] uppercase tracking-wider text-accent-cyan mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent-pink" />
            <span>Ready To Accelerate Your Revenue Operations?</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-wide leading-none text-white max-w-3xl mx-auto mb-6">
            Let's Engineer Your <span className="text-accent-cyan">Next Breakthrough</span>
          </h2>

          <p className="text-foreground-muted text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed mb-10">
            Book a 30-minute discovery consultation. We'll diagnose your workflow bottlenecks, review your CRM architecture, and map out an automation blueprint.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md bg-gradient-to-r from-accent to-accent-cyan text-white font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1 transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Discovery Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-md border border-border bg-white/[0.03] text-foreground-muted hover:text-white hover:border-accent font-mono text-xs uppercase tracking-wider transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 text-accent-pink" />
              <span>Send A Direct Message</span>
            </a>
          </div>

          {/* Micro trust indicator */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-[0.65rem] text-foreground-muted">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-mint" />
              Zero Obligation Audit
            </span>
            <span>·</span>
            <span>Direct Engineering Consultation</span>
            <span>·</span>
            <span>Flexible Timezone Scheduling</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

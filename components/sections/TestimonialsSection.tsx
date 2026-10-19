"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <Section
      id="testimonials"
      label="Client Endorsements"
      title={
        <>
          What Clients <span className="text-accent-pink">Say</span>
        </>
      }
      subtitle="Direct feedback from founders, agency partners, and technical leaders on delivery speed and CRM architecture reliability."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-7 rounded-xl bg-white/[0.03] border border-border hover:border-accent/50 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group"
          >
            <div>
              {/* Stars & Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent-gold text-accent-gold"
                    />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-accent/40 group-hover:text-accent-cyan transition-colors" />
              </div>

              {/* Quote text */}
              <p className="text-foreground/90 text-sm leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
            </div>

            {/* Client Info */}
            <div className="pt-4 border-t border-white/[0.06]">
              <div className="font-semibold text-white text-sm">
                {t.clientName}
              </div>
              <div className="font-mono text-xs text-accent-cyan">
                {t.clientRole} · {t.clientCompany}
              </div>
              <div className="font-mono text-[0.62rem] text-foreground-muted mt-1 uppercase tracking-wider">
                {t.projectContext}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

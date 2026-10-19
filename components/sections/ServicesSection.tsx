"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Database, Code2, Network, Gauge, Check } from "lucide-react";
import { services } from "@/data/services";

export function ServicesSection() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot":
        return <Bot className="w-6 h-6 text-accent-cyan" />;
      case "Workflow":
        return <Workflow className="w-6 h-6 text-accent" />;
      case "Database":
        return <Database className="w-6 h-6 text-accent-pink" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-accent-cyan" />;
      case "Network":
        return <Network className="w-6 h-6 text-accent-mint" />;
      case "Gauge":
        return <Gauge className="w-6 h-6 text-accent-gold" />;
      default:
        return <Bot className="w-6 h-6 text-accent" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-xs tracking-[0.3em] text-accent-cyan uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-accent-cyan/60" />
            <span>What I Do</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide leading-none">
            Services
          </h2>
          <p className="text-foreground-muted text-sm sm:text-base max-w-xl mt-3 font-light">
            End-to-end engineering from autonomous AI agent deployment to enterprise CRM architectures and custom web platforms.
          </p>
        </div>

        {/* 6-Card Services Grid matching template */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="service-card group p-7 rounded-xl border border-border bg-bg-card backdrop-blur-md relative overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_0_60px_rgba(108,99,255,0.25)] flex flex-col justify-between"
            >
              {/* Subtle gradient hover layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.08] to-accent-cyan/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              <div className="relative z-10">
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent-cyan/10 border border-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {getServiceIcon(service.icon)}
                  </div>
                  {service.badge && (
                    <span className="font-mono text-[0.62rem] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-border bg-white/[0.02] text-accent-cyan">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground-muted text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>

                {/* Deliverables List */}
                <ul className="space-y-2 pt-2 border-t border-white/[0.06]">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[0.75rem] text-foreground/80">
                      <Check className="w-3.5 h-3.5 text-accent-mint shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

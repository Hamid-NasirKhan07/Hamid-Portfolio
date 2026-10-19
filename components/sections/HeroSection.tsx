"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site.config";

export function HeroSection() {
  const { owner } = siteConfig;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Hero Typography & CTAs */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-cyan mb-6"
          >
            <span className="w-8 h-[1px] bg-accent-cyan/60 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-accent-pink" />
              {owner.title}
            </span>
            <span className="w-8 h-[1px] bg-accent-cyan/60 hidden sm:block" />
          </motion.div>

          {/* Huge Name Headline with Glitch Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-4"
          >
            <div className="glitch-wrap" data-text={owner.headline}>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.9] bg-gradient-to-r from-white via-white to-accent-cyan bg-clip-text text-transparent">
                {owner.headline}
              </h1>
            </div>
          </motion.div>

          {/* Value Proposition Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-foreground-muted max-w-2xl font-light leading-relaxed mb-8 mx-auto lg:mx-0"
          >
            {owner.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <Link href="#work" className="btn-glow">
              <span>View Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="#contact" className="btn-outline-glow">
              <span>Get In Touch</span>
            </Link>
          </motion.div>

          {/* Location & Remote Availability */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-2 font-mono text-xs text-foreground-muted"
          >
            <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
            <span>{owner.location}</span>
          </motion.div>
        </div>

        {/* Right Column: Hero Portrait Frame with Experience Badge */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[420px]"
          >
            {/* Geometric Deco Border (from template) */}
            <div className="absolute inset-0 border border-accent rounded-sm translate-x-4 translate-y-4 opacity-40 z-0 pointer-events-none" />

            {/* Image Frame */}
            <div className="relative w-full h-full rounded-sm overflow-hidden border border-border bg-[#0a1020] z-10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt={owner.name}
                fill
                priority
                className="object-cover grayscale-[30%] contrast-[1.1] hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 300px, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020409] via-transparent to-transparent opacity-80" />
            </div>

            {/* Experience Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 z-20 bg-gradient-to-br from-accent to-accent-cyan p-4 rounded-lg shadow-[0_8px_32px_rgba(108,99,255,0.4)] text-white"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-white/80">
                Experience
              </div>
              <div className="font-display text-2xl tracking-wider uppercase font-bold">
                {owner.experienceYears}
              </div>
              <div className="font-mono text-[0.62rem] text-white/90">
                CRM & AI Automation
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator (from template) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[0.65rem] tracking-[0.25em] text-foreground-muted uppercase"
      >
        <span className="w-[1px] h-10 bg-gradient-to-b from-accent to-transparent animate-scroll-line" />
        <span className="flex items-center gap-1">
          <span>Scroll</span>
          <ArrowDown className="w-3 h-3 text-accent-cyan animate-bounce" />
        </span>
      </motion.div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site.config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tickerItems = [
    ...siteConfig.owner.techPills,
    "Autonomous AI Agents",
    "n8n Workflow Automation",
    "Podio CRM Architecture",
    "GoHighLevel Pipelines",
    "API Integrations",
  ];

  const duplicatedTicker = [...tickerItems, ...tickerItems];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
        scrolled
          ? "py-3 bg-[#020409]/90 backdrop-blur-md border-b border-white/[0.08] shadow-xl shadow-black/60"
          : "py-4 sm:py-5 bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4">
        {/* Left Section: Logo at the Very Left Corner + Running Bar Right Next to It */}
        <div className="flex items-center gap-3 sm:gap-4 overflow-hidden min-w-0">
          {/* Logo Mark at the Very Left Corner */}
          <Link
            href="#hero"
            className="flex items-center gap-1.5 shrink-0 group"
            aria-label="Hamid Nasir Khan Home"
          >
            <span className="font-display text-2xl sm:text-3xl tracking-[0.14em] bg-gradient-to-r from-accent via-accent to-accent-cyan bg-clip-text text-transparent group-hover:brightness-125 transition-all">
              {siteConfig.owner.shortName}
            </span>
          </Link>

          {/* Divider */}
          <div className="h-4 sm:h-5 w-[1px] bg-white/15 shrink-0" />

          {/* Running Bar (Marquee Ticker) Right Next to Logo */}
          <div className="relative overflow-hidden w-44 sm:w-72 md:w-96 lg:w-[480px] xl:w-[560px] select-none [mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 22,
                ease: "linear",
              }}
              className="flex shrink-0 items-center gap-6 whitespace-nowrap"
            >
              {duplicatedTicker.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-accent-cyan shrink-0" />
                  <span className="font-mono text-[0.62rem] sm:text-[0.68rem] tracking-wider uppercase text-foreground-muted hover:text-white transition-colors">
                    {item}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-accent-pink/60 shrink-0 ml-4" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Section: Status Badge + CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Status Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white/[0.03] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent-mint shadow-[0_0_8px_#2dffb3] animate-pulse" />
            <span className="font-mono text-[0.65rem] text-foreground-muted tracking-wider uppercase">
              {siteConfig.owner.statusBadge}
            </span>
          </div>

          {/* Quick CTA */}
          <Link
            href="#contact"
            className="btn-glow !py-2 !px-3.5 sm:!px-4 text-[0.68rem] sm:text-[0.7rem]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Drawer Trigger (Mobile Only) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="sm:hidden p-1.5 rounded-md border border-border bg-white/[0.04] text-foreground"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#060c18]/95 backdrop-blur-2xl border-b border-border px-6 py-6 transition-all">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-white/[0.04] w-fit mb-2">
              <span className="w-2 h-2 rounded-full bg-accent-mint shadow-[0_0_8px_#2dffb3] animate-pulse" />
              <span className="font-mono text-[0.65rem] text-foreground-muted uppercase">
                {siteConfig.owner.statusBadge}
              </span>
            </div>

            {siteConfig.navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-wider text-foreground-muted hover:text-white py-1.5 border-b border-white/[0.04]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail, Calendar, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site.config";
import { socials } from "@/data/socials";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github className="w-4 h-4" />;
      case "Linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "Mail":
        return <Mail className="w-4 h-4" />;
      case "Calendar":
        return <Calendar className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#020409] py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Title */}
        <div className="text-center md:text-left space-y-2">
          <Link href="#hero" className="inline-block">
            <span className="font-display text-3xl tracking-widest bg-gradient-to-r from-accent via-accent to-accent-cyan bg-clip-text text-transparent">
              {siteConfig.owner.shortName}
            </span>
          </Link>
          <p className="font-mono text-xs text-foreground-muted tracking-wide">
            {siteConfig.owner.title}
          </p>
          <p className="text-xs text-foreground-muted/70">
            {siteConfig.owner.location}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.platform}
              className="w-10 h-10 rounded-full border border-border bg-white/[0.03] flex items-center justify-center text-foreground-muted hover:text-accent-cyan hover:border-accent-cyan hover:-translate-y-1 transition-all duration-300"
            >
              {getSocialIcon(s.icon)}
            </a>
          ))}
        </div>

        {/* Copyright & Scroll Top */}
        <div className="flex items-center gap-6 text-center md:text-right">
          <p className="font-mono text-[0.68rem] text-foreground-muted">
            © {new Date().getFullYear()} {siteConfig.owner.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full border border-border bg-white/[0.03] flex items-center justify-center text-foreground-muted hover:text-accent-cyan hover:border-accent-cyan transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

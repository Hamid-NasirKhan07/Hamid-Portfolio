"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site.config";

export function SideNav() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const navItems = siteConfig.navItems.filter((item) => {
    // Check if section is enabled in config
    const sectionKey = item.id === "hero" ? "hero" : item.id === "ai-agents" ? "aiAgents" : item.id;
    return siteConfig.sections[sectionKey as keyof typeof siteConfig.sections] !== false;
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 40;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      id="main-nav"
      aria-label="Section Navigation"
      className="fixed right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 sm:gap-5 pointer-events-auto select-none"
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const isHovered = hoveredSection === item.id;
        const showLabel = isActive || isHovered;

        return (
          <div
            key={item.id}
            className="relative flex items-center justify-end group cursor-pointer"
            onMouseEnter={() => setHoveredSection(item.id)}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => scrollTo(item.id)}
          >
            {/* Label to the Left of the Dot */}
            <span
              className={`absolute right-6 font-mono text-[0.68rem] tracking-[0.1em] text-foreground-muted whitespace-nowrap transition-all duration-200 pointer-events-none pr-1 ${
                showLabel
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2"
              } ${isActive ? "text-white font-bold" : "group-hover:text-accent-cyan"}`}
            >
              {item.label}
            </span>

            {/* Navigation Dot */}
            <button
              aria-label={`Scroll to ${item.label}`}
              className={`relative rounded-full transition-all duration-300 ${
                isActive
                  ? "w-3 h-3 bg-accent border-[1.5px] border-accent shadow-[0_0_14px_rgba(108,99,255,0.95)] scale-125"
                  : "w-2.5 h-2.5 bg-transparent border-[1.5px] border-white/30 hover:border-accent hover:bg-accent/40 hover:scale-125"
              }`}
            />
          </div>
        );
      })}
    </nav>
  );
}

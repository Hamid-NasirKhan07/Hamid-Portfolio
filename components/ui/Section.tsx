"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  label?: string;
  title?: string | ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  align?: "left" | "center";
}

export function Section({
  id,
  label,
  title,
  subtitle,
  children,
  className,
  containerClassName,
  align = "left",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 md:py-32 w-full px-6 md:px-12 lg:px-20 overflow-hidden",
        className
      )}
    >
      <div className={cn("max-w-6xl mx-auto w-full relative z-10", containerClassName)}>
        {(label || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={cn("mb-12 md:mb-16", align === "center" ? "text-center" : "text-left")}
          >
            {label && (
              <div
                className={cn(
                  "font-mono text-xs tracking-[0.28em] text-accent-cyan uppercase mb-3 flex items-center gap-3",
                  align === "center" ? "justify-center" : "justify-start"
                )}
              >
                <span className="w-8 h-[1px] bg-accent-cyan/60" />
                <span>{label}</span>
                {align === "center" && <span className="w-8 h-[1px] bg-accent-cyan/60" />}
              </div>
            )}
            {title && (
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wide uppercase leading-none">
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "text-foreground-muted text-base sm:text-lg max-w-2xl mt-4 font-normal leading-relaxed",
                  align === "center" && "mx-auto"
                )}
              >
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

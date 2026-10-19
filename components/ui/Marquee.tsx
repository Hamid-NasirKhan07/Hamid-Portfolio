"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
}

export function Marquee({ items }: MarqueeProps) {
  // Duplicate for seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-6 border-y border-white/[0.06] bg-black/40 backdrop-blur-md relative z-10">
      <div className="flex select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
          className="flex shrink-0 items-center gap-8 whitespace-nowrap"
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted hover:text-accent-cyan transition-colors">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { faqItems } from "@/data/faq";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section
      id="faq"
      label="Clear Answers"
      title={
        <>
          Frequently Asked <span className="text-accent-cyan">Questions</span>
        </>
      }
      subtitle="Everything you need to know about remote working arrangements, technical stack choices, pricing models, and post-deployment support."
      align="center"
    >
      <div className="max-w-3xl mx-auto space-y-3.5">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-white/[0.04] border-accent/40 shadow-[0_4px_20px_rgba(108,99,255,0.12)]"
                  : "bg-white/[0.02] border-border hover:border-white/20"
              }`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full py-5 px-6 text-left flex items-center justify-between gap-4"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-sm sm:text-base text-foreground">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-accent-cyan shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 pb-6 text-foreground-muted text-xs sm:text-sm leading-relaxed border-t border-white/[0.04] pt-3 font-normal">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

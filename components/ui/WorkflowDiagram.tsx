"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Webhook,
  Bot,
  Database,
  Send,
  Mail,
  Sparkles,
  BellRing,
  CreditCard,
  FileCode,
  FolderGit2,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { AutomationWorkflow } from "@/types";

interface WorkflowDiagramProps {
  workflows: AutomationWorkflow[];
}

export function WorkflowDiagram({ workflows }: WorkflowDiagramProps) {
  const [activeWorkflowId, setActiveWorkflowId] = useState(workflows[0]?.id || "");
  const activeWorkflow = workflows.find((w) => w.id === activeWorkflowId) || workflows[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Webhook":
        return <Webhook className="w-5 h-5 text-accent-cyan" />;
      case "Bot":
        return <Bot className="w-5 h-5 text-accent" />;
      case "Database":
        return <Database className="w-5 h-5 text-accent-pink" />;
      case "Send":
        return <Send className="w-5 h-5 text-accent-mint" />;
      case "Mail":
        return <Mail className="w-5 h-5 text-accent-cyan" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-accent" />;
      case "BellRing":
        return <BellRing className="w-5 h-5 text-accent-mint" />;
      case "CreditCard":
        return <CreditCard className="w-5 h-5 text-accent-cyan" />;
      case "FileCode":
        return <FileCode className="w-5 h-5 text-accent" />;
      case "FolderGit2":
        return <FolderGit2 className="w-5 h-5 text-accent-pink" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5 text-accent-mint" />;
      default:
        return <Bot className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Workflow Tabs */}
      <div className="flex flex-wrap gap-2.5 pb-2">
        {workflows.map((wf) => {
          const isActive = wf.id === activeWorkflow.id;
          return (
            <button
              key={wf.id}
              onClick={() => setActiveWorkflowId(wf.id)}
              className={`px-4 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-300 border flex items-center gap-2 ${
                isActive
                  ? "bg-accent/20 border-accent-cyan text-white shadow-[0_0_20px_rgba(108,99,255,0.3)]"
                  : "bg-white/[0.02] border-border text-foreground-muted hover:border-accent/40 hover:text-foreground"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isActive ? "bg-accent-cyan animate-pulse" : "bg-white/20"
                }`}
              />
              <span>{wf.title}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeWorkflow.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          {/* Node Graph Visualizer */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0a1020]/90 to-[#040812]/90 border border-accent/20 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            {/* Top decorative header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent-mint shadow-[0_0_8px_#2dffb3]" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan font-bold">
                  {activeWorkflow.category}
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[0.65rem] text-foreground-muted">
                <span>EXECUTION ENGINE:</span>
                <span className="text-white px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 font-bold">
                  n8n Event Runner
                </span>
              </div>
            </div>

            {/* Nodes Chain */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
              {activeWorkflow.nodes.map((node, index) => (
                <div key={node.id} className="relative flex flex-col">
                  {/* Node Card */}
                  <div className="p-4 rounded-xl bg-white/[0.04] border border-border hover:border-accent/60 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(108,99,255,0.2)] flex-1 flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          {getIcon(node.icon)}
                        </div>
                        <span className="font-mono text-[0.6rem] uppercase tracking-widest text-foreground-muted px-2 py-0.5 rounded bg-white/[0.03]">
                          STEP 0{index + 1}
                        </span>
                      </div>
                      <h4 className="font-semibold text-sm text-foreground mb-1 group-hover:text-accent-cyan transition-colors">
                        {node.label}
                      </h4>
                      <p className="font-mono text-xs text-foreground-muted leading-relaxed">
                        {node.sublabel}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                      <span className="font-mono text-[0.58rem] uppercase tracking-wider text-accent-cyan/80">
                        STATUS: ACTIVE
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-mint animate-pulse" />
                    </div>
                  </div>

                  {/* Flow Arrow on Desktop */}
                  {index < activeWorkflow.nodes.length - 1 && (
                    <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-bg-deep border border-accent/40 items-center justify-center text-accent-cyan shadow-[0_0_10px_rgba(0,212,255,0.3)]">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Tools Badges */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-foreground-muted">
                INTEGRATED SERVICES:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeWorkflow.tools.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.65rem] px-2.5 py-1 rounded bg-white/[0.04] border border-border text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Problem -> Solution -> Result Storyboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Problem */}
            <div className="p-5 rounded-xl bg-gradient-to-b from-red-500/[0.04] to-transparent border border-red-500/20">
              <div className="flex items-center gap-2 mb-3 text-red-400 font-mono text-xs tracking-wider uppercase font-semibold">
                <AlertTriangle className="w-4 h-4" />
                <span>The Bottleneck</span>
              </div>
              <p className="text-foreground-muted text-sm leading-relaxed font-normal">
                {activeWorkflow.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="p-5 rounded-xl bg-gradient-to-b from-accent/[0.06] to-transparent border border-accent/25">
              <div className="flex items-center gap-2 mb-3 text-accent-cyan font-mono text-xs tracking-wider uppercase font-semibold">
                <Lightbulb className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-foreground-muted text-sm leading-relaxed font-normal">
                {activeWorkflow.solution}
              </p>
            </div>

            {/* Result */}
            <div className="p-5 rounded-xl bg-gradient-to-b from-emerald-500/[0.06] to-transparent border border-emerald-500/25">
              <div className="flex items-center gap-2 mb-3 text-accent-mint font-mono text-xs tracking-wider uppercase font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>Business Impact</span>
              </div>
              <p className="text-foreground-muted text-sm leading-relaxed font-normal">
                {activeWorkflow.result}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Bot, Sparkles, CheckCircle2, Play, RefreshCw, Cpu, Layers } from "lucide-react";
import { AIAgent } from "@/types";

interface AgentTerminalProps {
  agents: AIAgent[];
}

export function AgentTerminal({ agents }: AgentTerminalProps) {
  const [selectedAgentId, setSelectedAgentId] = useState(agents[0]?.id || "");
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState(4); // default all displayed

  const currentAgent = agents.find((a) => a.id === selectedAgentId) || agents[0];

  const handleRunSimulation = () => {
    setIsPlaying(true);
    setActiveStep(1);

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= currentAgent.interactiveDemo.messages.length) {
          clearInterval(stepInterval);
          setIsPlaying(false);
          return currentAgent.interactiveDemo.messages.length;
        }
        return prev + 1;
      });
    }, 900);
  };

  return (
    <div className="w-full space-y-8">
      {/* Agent Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {agents.map((agent) => {
          const isSelected = agent.id === currentAgent.id;
          return (
            <button
              key={agent.id}
              onClick={() => {
                setSelectedAgentId(agent.id);
                setActiveStep(agent.interactiveDemo.messages.length);
              }}
              className={`text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "bg-accent/15 border-accent-cyan shadow-[0_0_25px_rgba(108,99,255,0.25)]"
                  : "bg-white/[0.03] border-border hover:border-accent/40 hover:bg-white/[0.05]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Bot
                    className={`w-5 h-5 ${
                      isSelected ? "text-accent-cyan" : "text-foreground-muted"
                    }`}
                  />
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? "bg-accent-mint animate-pulse" : "bg-white/20"
                    }`}
                  />
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-1">
                  {agent.name}
                </h4>
                <p className="text-xs text-foreground-muted line-clamp-2 font-normal leading-relaxed">
                  {agent.tagline}
                </p>
              </div>
              <span className="font-mono text-[0.62rem] text-accent-pink tracking-wider uppercase mt-4 block">
                {agent.useCase}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail Showcase & Live Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Agent Specs Card */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0a1024]/90 to-[#040812]/90 border border-accent/25 backdrop-blur-xl flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-cyan mb-2">
              <Cpu className="w-4 h-4 text-accent-cyan" />
              <span>AGENT ARCHITECTURE</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-foreground mb-3">
              {currentAgent.name}
            </h3>
            <p className="text-foreground-muted text-sm leading-relaxed mb-6 font-normal">
              {currentAgent.description}
            </p>

            <div className="space-y-3 pt-2">
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-foreground-muted block">
                CAPABILITIES & TOOL CALLING:
              </span>
              <ul className="space-y-2.5">
                {currentAgent.capabilities.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-foreground/90">
                    <Sparkles className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
            <span className="font-mono text-xs text-foreground-muted">TARGET ENVIRONMENT</span>
            <span className="font-mono text-xs text-accent-pink px-2.5 py-1 rounded bg-accent-pink/10 border border-accent-pink/20">
              {currentAgent.useCase}
            </span>
          </div>
        </div>

        {/* Right: Live Interactive Terminal */}
        <div className="lg:col-span-7 rounded-2xl bg-[#030611] border border-border shadow-2xl flex flex-col overflow-hidden">
          {/* Terminal Window Header */}
          <div className="px-4 py-3 bg-[#080d1e] border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs text-foreground-muted flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                agent-worker.bin --session-live
              </span>
            </div>
            <button
              onClick={handleRunSimulation}
              disabled={isPlaying}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-accent/20 hover:bg-accent/40 text-accent-cyan border border-accent/40 font-mono text-[0.65rem] uppercase tracking-wider transition-all disabled:opacity-50"
            >
              {isPlaying ? (
                <>
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3" />
                  <span>Run Live Test</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-5 font-mono text-xs space-y-4 flex-1 overflow-y-auto min-h-[360px] bg-[#02050e]/95">
            {/* Input Event */}
            <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-accent-cyan/90">
              <span className="text-foreground-muted block text-[0.65rem] uppercase tracking-wider mb-1">
                // INCOMING PAYLOAD EVENT
              </span>
              <p className="text-white text-xs">{currentAgent.interactiveDemo.initialPrompt}</p>
            </div>

            {/* Simulated Live Messages */}
            {currentAgent.interactiveDemo.messages.slice(0, activeStep).map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                {msg.sender === "system" && (
                  <div className="flex items-start gap-2 text-foreground-muted text-[0.72rem]">
                    <span className="text-accent-pink font-bold">[SYSTEM]</span>
                    <span>{msg.text}</span>
                  </div>
                )}

                {msg.sender === "agent" && (
                  <div className="space-y-2 pl-3 border-l-2 border-accent">
                    <div className="flex items-center gap-2 text-accent-cyan font-bold text-[0.72rem]">
                      <Bot className="w-3.5 h-3.5" />
                      <span>[AGENT THOUGHT & ACTION]</span>
                    </div>
                    <p className="text-foreground/90 text-xs leading-relaxed">{msg.text}</p>

                    {msg.actionTaken && (
                      <div className="p-2 rounded bg-black/60 border border-accent/30 text-accent-mint font-mono text-[0.65rem]">
                        <span>EXEC: </span>
                        {msg.actionTaken}
                      </div>
                    )}

                    {msg.dataSnippet && (
                      <div className="p-3 rounded bg-black/80 border border-white/10 text-[0.7rem] overflow-x-auto text-accent-cyan">
                        <pre>{JSON.stringify(msg.dataSnippet, null, 2)}</pre>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}

            {isPlaying && (
              <div className="flex items-center gap-2 text-accent-cyan animate-pulse text-xs">
                <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                <span>Agent reasoning across tools...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Section } from "@/components/ui/Section";
import { AgentTerminal } from "@/components/ui/AgentTerminal";
import { aiAgents } from "@/data/ai-agents";

export function AiAgentsSection() {
  return (
    <Section
      id="ai-agents"
      label="Autonomous Systems"
      title={
        <>
          AI Agent <span className="text-accent-pink">Architectures</span>
        </>
      }
      subtitle="Purpose-built autonomous agents with tool-calling capabilities, vector RAG grounding, and enterprise guardrails. Run the live terminal test to inspect decision loops."
    >
      <AgentTerminal agents={aiAgents} />
    </Section>
  );
}

"use client";

import { Section } from "@/components/ui/Section";
import { WorkflowDiagram } from "@/components/ui/WorkflowDiagram";
import { automationWorkflows } from "@/data/automations";

export function AutomationsSection() {
  return (
    <Section
      id="automations"
      label="Workflows & Orchestration"
      title={
        <>
          n8n Automation <span className="text-accent-cyan">Showcase</span>
        </>
      }
      subtitle="Interactive node graphs demonstrating real-world event pipelines that connect forms, AI inference engines, CRMs, and messaging channels."
    >
      <WorkflowDiagram workflows={automationWorkflows} />
    </Section>
  );
}

import { StatItem, SkillBarItem } from "@/types";

export const stats: StatItem[] = [
  {
    id: "workflows-automated",
    value: 40,
    suffix: "+",
    label: "Workflows Automated",
  },
  {
    id: "systems-integrated",
    value: 15,
    suffix: "+",
    label: "Systems & APIs Integrated",
  },
  {
    id: "uptime-sla",
    value: 99,
    suffix: "%",
    label: "Reliability & Uptime SLA",
  },
  {
    id: "years-experience",
    value: 2,
    suffix: "+",
    label: "Years Engineering Experience",
  },
];

export const skillBars: SkillBarItem[] = [
  {
    label: "Podio & GoHighLevel CRM Architecture",
    percentage: 95,
    category: "CRM & ERP",
  },
  {
    label: "n8n Workflow Automation & Webhook Routing",
    percentage: 92,
    category: "Automation",
  },
  {
    label: "Next.js, React & TypeScript Frontend",
    percentage: 88,
    category: "Frontend",
  },
  {
    label: "PHP / Laravel & Backend REST APIs",
    percentage: 84,
    category: "Backend",
  },
  {
    label: "Autonomous AI Agents & LLM Tool Calling",
    percentage: 86,
    category: "AI & LLM",
  },
];

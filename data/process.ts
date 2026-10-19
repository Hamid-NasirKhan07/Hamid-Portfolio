import { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover & Audit",
    subtitle: "Identify Bottlenecks & Data Flows",
    description:
      "We dive deep into your current operational friction. I map out your manual repetitive tasks, review your existing CRM schema (Podio, GoHighLevel, HubSpot), inspect API capabilities, and quantify the hours lost to manual work.",
    outcomes: [
      "Process Bottleneck Audit Document",
      "API & Tool Compatibility Matrix",
      "ROI & Time-Saved Projections",
    ],
  },
  {
    step: "02",
    title: "Design & Architecture",
    subtitle: "Blueprint The System Flow",
    description:
      "Before writing a line of code, I architect the data models, state transitions, fail-safes, and prompt hierarchies. You get a clear visual node diagram of the entire automated pipeline so there are no surprises.",
    outcomes: [
      "Visual Workflow Node Architecture",
      "Data Schema & Entity Relationship Model",
      "AI Prompt & Guardrail Framework",
    ],
  },
  {
    step: "03",
    title: "Build & Integrate",
    subtitle: "Clean Code & Resilient Pipelines",
    description:
      "I develop the custom components, whether that's Next.js web applications, Laravel backends, or custom n8n node scripts. Every webhook, database query, and API call is typed, authenticated, and stress-tested.",
    outcomes: [
      "Configured CRM Workspaces & Pipelines",
      "Production-Ready n8n Microservices",
      "Secure Webhook Handlers & REST Endpoints",
    ],
  },
  {
    step: "04",
    title: "Automate & Stress-Test",
    subtitle: "Edge Cases & Autonomous Loops",
    description:
      "We run mock edge cases, network dropouts, rate limit simulations, and unexpected payloads through the system to guarantee zero silent failures. Error alerts are tied directly into Slack or Telegram.",
    outcomes: [
      "Automated Fallback & Retry Logic",
      "Edge-case Testing & Payload Validation",
      "Real-time Incident Notification Channels",
    ],
  },
  {
    step: "05",
    title: "Support & Scale",
    subtitle: "Continuous Optimization & Training",
    description:
      "Once deployed, I train your team with recorded walkthroughs and provide documentation. I monitor API updates, token consumption, and webhook health to ensure your automations run smoothly as your volume scales.",
    outcomes: [
      "Loom Video Walkthrough & Runbooks",
      "Ongoing Health Monitoring & Tuning",
      "Dedicated Slack/Async Support Channel",
    ],
  },
];

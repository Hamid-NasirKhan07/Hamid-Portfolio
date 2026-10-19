import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "ai-agents",
    title: "AI Agent Development",
    shortDesc:
      "Autonomous conversational & task-execution agents with tool-calling capabilities that work 24/7.",
    fullDesc:
      "I design and deploy custom LLM agents engineered for mission-critical workflows. Whether it's qualifying inbound prospects, auto-responding across email/SMS, triaging customer support with vector embeddings, or running continuous data enrichment, my agents operate autonomously with guardrails and audit logs.",
    icon: "Bot",
    badge: "High Demand",
    deliverables: [
      "Autonomous tool-calling & reasoning agents",
      "Vector search / RAG knowledge-base grounding",
      "Custom guardrails, latency & prompt optimization",
      "Multi-channel deployment (Email, SMS, Web, Slack)",
    ],
  },
  {
    id: "n8n-automation",
    title: "n8n Workflow Automation",
    shortDesc:
      "Self-hosted & cloud n8n architectures that link disparate platforms with zero operational friction.",
    fullDesc:
      "Eliminate repetitive manual busywork with custom event-driven n8n microservices. I architect resilient workflows that ingest webhooks, transform payloads, call AI endpoints, sync databases, and notify stakeholders in real time with comprehensive error handling and retry logic.",
    icon: "Workflow",
    badge: "Core Specialization",
    deliverables: [
      "Custom node logic & complex webhook routing",
      "Error recovery & self-healing retry pipelines",
      "Self-hosted Docker/VPS n8n setup for data privacy",
      "End-to-end data transformation & schema mapping",
    ],
  },
  {
    id: "crm-architecture",
    title: "CRM Setup & Customization",
    shortDesc:
      "Tailor-made architectures for Podio and GoHighLevel that accelerate sales cycle velocity.",
    fullDesc:
      "Stop wrestling with off-the-shelf CRM limitations. As an Associate CRM Developer, I specialize in architecting relational Podio workspaces with GlobiFlow/ProcFu and configuring high-conversion GoHighLevel pipelines with automated opportunity routing, appointment triggers, and SMS bots.",
    icon: "Database",
    badge: "Certified Hands-on",
    deliverables: [
      "Podio workspace architecture & GlobiFlow scripting",
      "GoHighLevel multi-tier snapshot & pipeline buildout",
      "Automated appointment scheduling & no-show reduction",
      "Role-based permission models & executive reporting",
    ],
  },
  {
    id: "custom-web-apps",
    title: "Custom Web Applications",
    shortDesc:
      "Production-grade web apps using Next.js, React, and Laravel built for velocity and scale.",
    fullDesc:
      "When SaaS templates can't handle your unique business logic, I build full-stack web applications from scratch. Combining modern React/Next.js frontends with robust Node.js or Laravel backends, I deliver clean, typed codebases optimized for high-throughput operational demands.",
    icon: "Code2",
    badge: "Modern Stack",
    deliverables: [
      "Next.js App Router with TypeScript & Tailwind CSS",
      "Robust REST & GraphQL API services (Node / Laravel)",
      "Role-based authentication & database optimization",
      "Sub-second load times & WCAG-compliant UX",
    ],
  },
  {
    id: "api-integrations",
    title: "API & Third-Party Integrations",
    shortDesc:
      "Seamless bi-directional bridges connecting Stripe, Twilio, CRMs, ERPs, and external services.",
    fullDesc:
      "Connect your fragmented software stack into a single unified source of truth. I build secure API bridges, webhook dispatchers, and synchronous data synchronizers that handle authentication, rate limits, pagination, and payload formatting without dropping a single event.",
    icon: "Network",
    badge: "Mission Critical",
    deliverables: [
      "Custom REST / Webhook endpoint development",
      "Payment gateway integration (Stripe, PayPal)",
      "Twilio SMS / WhatsApp telephony automation",
      "Bi-directional data synchronization with collision control",
    ],
  },
  {
    id: "performance-maintenance",
    title: "Performance & Maintenance",
    shortDesc:
      "Proactive uptime monitoring, database indexing, latency tuning, and ongoing pipeline updates.",
    fullDesc:
      "Automations and CRM workflows are live production systems that require dedicated vigilance. I provide proactive maintenance, API deprecation updates, database query indexing, webhook health monitoring, and system optimization so your business never misses an automated event.",
    icon: "Gauge",
    badge: "Peace of Mind",
    deliverables: [
      "24/7 webhook & endpoint uptime alerting",
      "PostgreSQL / MySQL query & index optimization",
      "API version migration & security patch management",
      "Comprehensive runbook & architecture documentation",
    ],
  },
];

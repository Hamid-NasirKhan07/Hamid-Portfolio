import { AutomationWorkflow } from "@/types";

export const automationWorkflows: AutomationWorkflow[] = [
  {
    id: "ai-lead-qualification",
    title: "AI Lead Intake & Instant Qualification Pipeline",
    category: "Inbound Pipeline · n8n + GPT-4 + GHL",
    nodes: [
      {
        id: "node-1",
        label: "Inbound Lead Webhook",
        sublabel: "Typeform / Meta Ad Event",
        icon: "Webhook",
        type: "trigger",
      },
      {
        id: "node-2",
        label: "AI Fit & Scraper Agent",
        sublabel: "Scrapes domain + GPT-4 Scoring",
        icon: "Bot",
        type: "ai",
      },
      {
        id: "node-3",
        label: "GoHighLevel CRM Router",
        sublabel: "Pipeline Stage + Tag Assignment",
        icon: "Database",
        type: "crm",
      },
      {
        id: "node-4",
        label: "Personalized Outreach & Alert",
        sublabel: "Dynamic SMS + Slack Ping to SDR",
        icon: "Send",
        type: "action",
      },
    ],
    problem:
      "Sales team was manually vetting 40+ inbound inquiries a day, taking an average of 4.5 hours to respond, by which point 60% of leads had already cooled down or booked competitors.",
    solution:
      "Built an event-triggered n8n workflow that ingests form payloads, passes the company domain to an AI agent to scrape and verify ICP criteria, writes the enriched lead into GHL, and fires a personalized text message within 45 seconds.",
    result:
      "Reduced lead response time from 4.5 hours to under 60 seconds; converted 34% more qualified appointments in the first 30 days.",
    tools: ["n8n", "OpenAI GPT-4", "GoHighLevel", "Slack API", "Twilio"],
  },
  {
    id: "support-ticket-triage",
    title: "Autonomous 24/7 Support Triage & Auto-Resolution",
    category: "Support Automation · n8n + Embeddings + Podio",
    nodes: [
      {
        id: "node-1",
        label: "Inbound Email / Ticket",
        sublabel: "Support@ IMAP / Webhook",
        icon: "Mail",
        type: "trigger",
      },
      {
        id: "node-2",
        label: "Vector Knowledge Search",
        sublabel: "RAG lookup across documentation",
        icon: "Sparkles",
        type: "ai",
      },
      {
        id: "node-3",
        label: "Podio Ticket Sync",
        sublabel: "App record created + SLA counter",
        icon: "Database",
        type: "crm",
      },
      {
        id: "node-4",
        label: "Draft Reply or Escalation",
        sublabel: "Auto-reply or high-priority SMS alert",
        icon: "BellRing",
        type: "action",
      },
    ],
    problem:
      "Clients in different time zones waited up to 12 hours for routine support questions (API keys, invoice copies, reset instructions), clogging tier-1 agent inboxes.",
    solution:
      "Engineered an automated triage workflow in n8n. If similarity score exceeds 88%, the AI sends a validated resolution draft immediately; if ambiguous, it tags the ticket in Podio and alerts the on-duty engineer on Telegram.",
    result:
      "Deflected 48% of tier-1 support tickets automatically with zero human intervention; improved first-contact satisfaction score to 96%.",
    tools: ["n8n", "Pinecone Vector DB", "OpenAI Embeddings", "Podio API", "Telegram Bot"],
  },
  {
    id: "stripe-onboarding-drip",
    title: "Closed-Won Contract & Provisioning Engine",
    category: "Operations Sync · n8n + Stripe + Podio + DocuSign",
    nodes: [
      {
        id: "node-1",
        label: "Stripe Payment Succeeded",
        sublabel: "Checkout Session Complete",
        icon: "CreditCard",
        type: "trigger",
      },
      {
        id: "node-2",
        label: "Contract & Token Synthesis",
        sublabel: "AI customizes onboarding brief",
        icon: "FileCode",
        type: "ai",
      },
      {
        id: "node-3",
        label: "CRM Client Workspace",
        sublabel: "Podio Client App + GHL Snapshot",
        icon: "FolderGit2",
        type: "crm",
      },
      {
        id: "node-4",
        label: "Welcome Pack & Invite",
        sublabel: "Google Drive folder + Portal Link",
        icon: "CheckCircle2",
        type: "action",
      },
    ],
    problem:
      "After closing a high-ticket client, operations spent 90 minutes manually drafting contracts, making shared folders, and inviting them to CRM boards, leading to delayed onboarding.",
    solution:
      "Constructed a zero-touch onboarding pipeline triggered by the Stripe payment webhook. Automatically compiles the master agreement, creates dedicated client workspaces in Podio, and delivers branded welcome credentials.",
    result:
      "Onboarding cycle dropped from 90 minutes of manual staff time to 12 seconds automated; zero human error on agreement terms.",
    tools: ["n8n", "Stripe API", "Podio GlobiFlow", "Google Drive API", "SendGrid"],
  },
];

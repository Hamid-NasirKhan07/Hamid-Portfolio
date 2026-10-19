import { AIAgent } from "@/types";

export const aiAgents: AIAgent[] = [
  {
    id: "lead-qualifier",
    name: "Autonomous Lead Qualification Agent",
    tagline: "Instantly score, research, and route incoming leads before your competitors can call.",
    description:
      "Connects to your website forms or ad campaigns, visits the prospect's company URL, analyzes their business model, checks if they match your ICP, and writes a synthesized brief directly to your CRM.",
    capabilities: [
      "Real-time domain & LinkedIn enrichment",
      "Dynamic qualification rubric (Budget, Tech, Authority)",
      "High-intent routing directly into sales calendars",
      "Automatic disqualification and friendly routing",
    ],
    useCase: "B2B SaaS, Agencies, High-Ticket Consultancies",
    interactiveDemo: {
      initialPrompt: "New lead submitted: Sarah Jenkins · VP of Ops @ CloudPeak Logistics",
      messages: [
        {
          sender: "system",
          text: "Trigger: Inbound Webhook received from Form #402",
        },
        {
          sender: "agent",
          text: "Agent initialized: Scraping cloudpeaklogistics.com ... Found 65 employees, US-based, using HubSpot CRM and outdated dispatch software.",
          actionTaken: "GET https://api.hunter.io/v2/domain-search?domain=cloudpeaklogistics.com",
        },
        {
          sender: "agent",
          text: "Lead scored 94/100 (Enterprise Tier Match). Formulating personalized outreach pitch focusing on CRM dispatch integration.",
          dataSnippet: {
            leadName: "Sarah Jenkins",
            fitScore: 94,
            tier: "Enterprise Tier 1",
            urgency: "Immediate",
            recommendedAction: "Send custom GHL Calendar Link via SMS",
          },
        },
        {
          sender: "system",
          text: "Success: Lead inserted into GoHighLevel stage 'High Priority Inbound'. SMS invitation dispatched.",
        },
      ],
    },
  },
  {
    id: "auto-reply",
    name: "Intelligent Inbound Auto-Reply Agent",
    tagline: "Drafts and sends contextual, human-grade email replies with your tone of voice.",
    description:
      "Tired of email back-and-forth for scheduling, pricing guidelines, or portfolio requests? This agent classifies intent, pulls answers from your private knowledge base, and drafts or sends hyper-relevant responses.",
    capabilities: [
      "Multi-turn thread context awareness",
      "Human-in-the-loop review mode or fully autonomous dispatch",
      "Availability sync with Calendly / Google Calendar",
      "Spam filtering & sentiment detection",
    ],
    useCase: "Professional Services, Executive Inboxes, Sales Teams",
    interactiveDemo: {
      initialPrompt: "Client email: 'Hi Hamid, do you have experience integrating Podio with DocuSign for 500+ monthly contracts? What's your turnaround?'",
      messages: [
        {
          sender: "system",
          text: "IMAP listener: Inbound message parsed from prospective client.",
        },
        {
          sender: "agent",
          text: "Analyzing query parameters: Technology (Podio + DocuSign), Volume (500/mo), Intent (Case study + timeline inquiry).",
        },
        {
          sender: "agent",
          text: "Referencing portfolio knowledge base: Retrieved Crecentech investment firm case study (10,000+ monthly contracts). Formulating response draft.",
          dataSnippet: {
            replyDraft:
              "Hi David, yes! I've architected Podio + GlobiFlow + DocuSign pipelines syncing over 10k monthly contracts. For 500/mo, typical build and QA time is 7-10 business days. Here's a live demo calendar to discuss your data schema: [Calendly Link]",
          },
        },
        {
          sender: "system",
          text: "Status: Staged as approved auto-reply draft in Gmail & notified via Slack.",
        },
      ],
    },
  },
  {
    id: "support-agent",
    name: "24/7 Context-Grounded Support Agent",
    tagline: "Resolves customer queries instantly with strict zero-hallucination guardrails.",
    description:
      "Trained on your private documentation, API specs, and FAQ archives. Answers user inquiries across web chat, Discord, or ticketing systems, resolving support issues without waking your team.",
    capabilities: [
      "Vector database retrieval (RAG) with source citations",
      "Zero-hallucination strict fallback instructions",
      "Multi-language translation and ticket logging",
      "Automatic ticket creation when human escalation is required",
    ],
    useCase: "SaaS Platforms, E-Commerce, Multi-tenant Portals",
    interactiveDemo: {
      initialPrompt: "Customer query: 'How do I reconnect my expired webhook token in the dashboard?'",
      messages: [
        {
          sender: "system",
          text: "WebChat Event: Session #88392",
        },
        {
          sender: "agent",
          text: "Running cosine similarity search on knowledge base embeddings... Matched doc /docs/api/webhooks#refresh-token (98% confidence).",
        },
        {
          sender: "agent",
          text: "To refresh your webhook token, navigate to Settings > Developer Keys, click 'Rotate Secret', and paste the new 32-char string into your n8n header. Your existing subscribers will remain uninterrupted.",
        },
        {
          sender: "system",
          text: "Resolution confirmed: User clicked 'Helpful'. Ticket marked resolved.",
        },
      ],
    },
  },
  {
    id: "data-enrichment",
    name: "Continuous Data Enrichment Bot",
    tagline: "Monitors, sanitizes, and enriches CRM records in the background automatically.",
    description:
      "Never let stale or incomplete contacts decay in your CRM. This agent detects newly added records, queries public APIs, verifies email deliverability, and appends company headcount, funding, and tech stack info.",
    capabilities: [
      "MX record & SMTP inbox deliverability verification",
      "Company revenue, headcount & funding round extraction",
      "Duplicate deduplication & fuzzy phone number normalization",
      "Scheduled background audit runs via cron",
    ],
    useCase: "Outbound Sales Engines, CRM Hygiene, Marketing Operations",
    interactiveDemo: {
      initialPrompt: "Trigger: 50 raw contact rows imported to Podio without job titles or company sizes.",
      messages: [
        {
          sender: "system",
          text: "Cron: Nightly enrichment worker launched on 50 pending records.",
        },
        {
          sender: "agent",
          text: "Executing parallel enrichment workers: Cleaned email syntax, verified 48/50 active mailboxes. Querying Apollo and Clearbit endpoints.",
          actionTaken: "BATCH_ENRICH [50 items] -> Status 200 OK",
        },
        {
          sender: "agent",
          text: "Normalized 50 phone numbers to E.164 format (+1...). Appended company revenue tier and primary CRM tech stack.",
          dataSnippet: {
            processed: 50,
            enriched: 48,
            syntaxCleaned: 50,
            duplicatesMerged: 2,
          },
        },
        {
          sender: "system",
          text: "Database sync complete. Clean CRM dataset updated with zero errors.",
        },
      ],
    },
  },
];

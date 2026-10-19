import { FAQItem } from "@/types";

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do you collaborate with international clients across time zones?",
    answer:
      "I am based in Lahore, Pakistan (GMT+5) and routinely work with clients across the US (EST/PST), UK (GMT), and Europe (CET). I structure projects with clear async communication via Slack/Discord, daily Loom video progress updates, and flexible overlap hours for live strategy and kickoff calls.",
    category: "collaboration",
  },
  {
    id: "faq-2",
    question: "Why should we choose n8n over Zapier or Make for our automations?",
    answer:
      "While Zapier and Make charge steep per-task fees that explode as your volume grows, n8n can be self-hosted on your own secure cloud server (Docker/VPS) for full data sovereignty, zero per-task billing limits, native code execution (JavaScript/Python), and granular error-handling branching.",
    category: "technical",
  },
  {
    id: "faq-3",
    question: "Do you build custom CRM solutions in Podio and GoHighLevel from scratch?",
    answer:
      "Yes. Whether you need a ground-up Podio architecture with relational apps, GlobiFlow automation, and custom PHP calculation hooks, or a GoHighLevel snapshot with multi-channel appointment funnels, SMS bots, and Stripe checkout webhooks, I handle both architectural design and technical execution.",
    category: "technical",
  },
  {
    id: "faq-4",
    question: "How do you prevent AI agents from hallucinating in customer-facing workflows?",
    answer:
      "I implement strict Retrieval-Augmented Generation (RAG) guardrails. The agent only responds using verified source documents and structured data passed in its system context. If the confidence score falls below a set threshold, the agent gracefully falls back to escalating to a human team member.",
    category: "technical",
  },
  {
    id: "faq-5",
    question: "What is your typical project timeline and delivery structure?",
    answer:
      "Smaller automations and single-system integrations typically take 3 to 7 business days. Comprehensive CRM overhauls, multi-agent pipelines, or custom web application portals generally take 2 to 4 weeks, delivered in iterative milestones with continuous client testing.",
    category: "collaboration",
  },
  {
    id: "faq-6",
    question: "What happens after the project is deployed? Do you provide maintenance?",
    answer:
      "Every project includes 14 to 30 days of complimentary post-launch monitoring to ensure all webhooks, token lifespans, and edge cases are performing seamlessly. I also offer monthly retainer packages for continuous feature additions, API updates, and performance tuning.",
    category: "pricing",
  },
];

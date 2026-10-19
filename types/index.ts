export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SectionToggles {
  hero: boolean;
  about: boolean;
  projects: boolean;
  stats: boolean;
  services: boolean;
  automations: boolean;
  aiAgents: boolean;
  experience: boolean;
  process: boolean;
  testimonials: boolean;
  faq: boolean;
  bookingCta: boolean;
  contact: boolean;
}

export interface SiteOwner {
  name: string;
  shortName: string;
  title: string;
  headline: string;
  subheadline: string;
  location: string;
  statusBadge: string;
  availability: boolean;
  experienceYears: string;
  bioHeading: {
    line1: string;
    line2Accent: string;
  };
  bioParagraphs: string[];
  techPills: string[];
}

export interface SiteConfig {
  owner: SiteOwner;
  sections: SectionToggles;
  navItems: NavItem[];
  meta: {
    title: string;
    description: string;
    url: string;
    ogImage: string;
  };
  calendlyUrl: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  detailedDescription?: string[];
  role: string;
  year: string;
  stack: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights?: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  deliverables: string[];
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: "work" | "education" | "certification";
  description: string;
  skills: string[];
  highlights?: string[];
}

export interface WorkflowNode {
  id: string;
  label: string;
  sublabel: string;
  icon: string;
  type: "trigger" | "ai" | "crm" | "action";
}

export interface AutomationWorkflow {
  id: string;
  title: string;
  category: string;
  nodes: WorkflowNode[];
  problem: string;
  solution: string;
  result: string;
  tools: string[];
}

export interface AIAgentMessage {
  sender: "user" | "agent" | "system";
  text: string;
  actionTaken?: string;
  dataSnippet?: Record<string, any>;
}

export interface AIAgent {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  useCase: string;
  interactiveDemo: {
    initialPrompt: string;
    messages: AIAgentMessage[];
  };
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  avatar?: string;
  quote: string;
  projectContext: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "collaboration" | "technical" | "pricing";
}

export interface StatItem {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface SkillBarItem {
  label: string;
  percentage: number;
  category?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: string;
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Github, Linkedin, Mail, Calendar, ExternalLink } from "lucide-react";
import { socials, contactDetails } from "@/data/socials";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "AI Agent / Workflow Automation",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard for spam bots

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "AI Agent / Workflow Automation",
        message: "",
        honeypot: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit message.");
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github className="w-5 h-5" />;
      case "Linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "Mail":
        return <Mail className="w-5 h-5" />;
      case "Calendar":
        return <Calendar className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 relative z-10 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        {/* Eyebrow Label matching template */}
        <div className="font-mono text-xs tracking-[0.3em] text-accent-cyan uppercase mb-3 flex items-center justify-center gap-2">
          <span className="w-8 h-[1px] bg-accent-cyan/60" />
          <span>Let's Talk</span>
          <span className="w-8 h-[1px] bg-accent-cyan/60" />
        </div>

        {/* Section Title matching template */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-wide leading-none text-white mb-4">
          Start a Project
        </h2>

        <p className="text-foreground-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8 font-light">
          Have an automation pipeline to build, a CRM architecture to overhaul, or an autonomous AI agent to deploy? Let's engineer something exceptional together.
        </p>

        {/* Big Email Link matching template */}
        <motion.a
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          href={`mailto:${contactDetails.email}`}
          className="font-display text-2xl sm:text-4xl md:text-5xl tracking-wider bg-gradient-to-r from-accent via-accent to-accent-cyan bg-clip-text text-transparent hover:opacity-80 transition-opacity block my-6"
        >
          {contactDetails.email}
        </motion.a>

        {/* Contact Form matching template structure */}
        <div className="mt-10 p-6 sm:p-10 rounded-2xl bg-white/[0.03] border border-border backdrop-blur-xl text-left shadow-2xl">
          {status === "success" ? (
            <div className="p-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-accent-mint mx-auto" />
              <h3 className="text-xl font-bold text-white">Message Dispatched!</h3>
              <p className="text-foreground-muted text-sm max-w-md mx-auto">
                Thank you for getting in touch. I will review your requirements and respond within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="btn-glow !text-xs !py-2 !px-5 mt-4"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Spam Honeypot - hidden from real users */}
              <input
                type="text"
                name="company_website"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Two Column Row (Name & Email) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[0.65rem] uppercase tracking-wider text-foreground-muted mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-white/[0.04] border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-foreground-muted/40"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[0.65rem] uppercase tracking-wider text-foreground-muted mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-white/[0.04] border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-foreground-muted/40"
                  />
                </div>
              </div>

              {/* Project Type Dropdown */}
              <div>
                <label className="block font-mono text-[0.65rem] uppercase tracking-wider text-foreground-muted mb-1.5">
                  Project Domain / Focus Area
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-[#0a1024] border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="AI Agent / Workflow Automation">AI Agent / Workflow Automation (n8n)</option>
                  <option value="Podio CRM Architecture">Podio CRM Architecture & Customization</option>
                  <option value="GoHighLevel Pipeline Buildout">GoHighLevel Pipeline Buildout & Funnel</option>
                  <option value="Custom Web Application">Custom Web Application (Next.js / Laravel)</option>
                  <option value="API & System Integration">API & System Integration</option>
                  <option value="Other / Consultation">Other / General Consultation</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="block font-mono text-[0.65rem] uppercase tracking-wider text-foreground-muted mb-1.5">
                  Project Scope & Goals *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your current tools, team bottlenecks, and what you would like to automate..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-md bg-white/[0.04] border border-border text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-foreground-muted/40"
                />
              </div>

              {/* Error Alert */}
              {status === "error" && (
                <div className="p-3 rounded bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button matching template btn-glow */}
              <div className="pt-2 text-center sm:text-left">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-glow !py-3.5 !px-8 w-full sm:w-auto"
                >
                  {status === "submitting" ? (
                    <span>Dispatching Payload...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Social Round Buttons matching template */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={s.platform}
              className="social-btn w-12 h-12 rounded-full border border-border bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-foreground-muted hover:text-accent hover:border-accent hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(108,99,255,0.3)] transition-all duration-300"
            >
              {getSocialIcon(s.icon)}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

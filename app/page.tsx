import { siteConfig } from "@/data/site.config";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { AutomationsSection } from "@/components/sections/AutomationsSection";
import { AiAgentsSection } from "@/components/sections/AiAgentsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { BookingCtaSection } from "@/components/sections/BookingCtaSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const { sections, owner } = siteConfig;

  return (
    <>
      {/* 1. Hero */}
      {sections.hero && <HeroSection />}

      {/* 2. About */}
      {sections.about && <AboutSection />}

      {/* 3. Selected Work (Projects Grid + Detail Modal) */}
      {sections.projects && <WorkSection />}

      {/* 4. Automation Showcase (n8n node graph) */}
      {sections.automations && <AutomationsSection />}

      {/* 5. AI Agents Section (Cards + Live Terminal Demo) */}
      {sections.aiAgents && <AiAgentsSection />}

      {/* 6. Experience Timeline */}
      {sections.experience && <ExperienceSection />}

      {/* 7. Services (6 cards with hover states) */}
      {sections.services && <ServicesSection />}

      {/* 8. Process (5 steps) */}
      {sections.process && <ProcessSection />}

      {/* 9. Stats & Skill Progress Bars */}
      {sections.stats && <StatsSection />}

      {/* 10. Testimonials */}
      {sections.testimonials && <TestimonialsSection />}

      {/* 11. FAQ Accordion */}
      {sections.faq && <FaqSection />}

      {/* 12. Booking CTA Band */}
      {sections.bookingCta && <BookingCtaSection />}

      {/* 13. Contact Form & Direct Email */}
      {sections.contact && <ContactSection />}
    </>
  );
}

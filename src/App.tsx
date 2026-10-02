import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { Services } from './components/Services';
import { FeaturedProjects } from './components/FeaturedProjects';
import { TechMarquee } from './components/TechMarquee';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { AchievementsLeadership } from './components/AchievementsLeadership';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string>('Website Development');

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18191B] font-sans antialiased flex flex-col selection:bg-[#18191B] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onStartProject={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onStartProject={() => scrollToContact()}
          onViewWork={scrollToProjects}
        />

        {/* Core Trust & Capability Bar */}
        <TrustBar />

        {/* About Section */}
        <About onStartProject={() => scrollToContact()} />

        {/* Services Section */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* Selected Work & Featured Projects with Case Studies */}
        <FeaturedProjects
          onStartProjectWithContext={(projectName) =>
            scrollToContact(`Project Inquiry related to: ${projectName}`)
          }
        />

        {/* Technology Marquee */}
        <TechMarquee />

        {/* Skills & Technology Stack */}
        <Skills />

        {/* 4-Step Client Workflow: Idea to Deployment */}
        <Process onStartProject={() => scrollToContact()} />

        {/* Why Clients Choose to Work With Me */}
        <WhyWorkWithMe />

        {/* Achievements, Leadership & Education */}
        <AchievementsLeadership />

        {/* Freelance CTA & Project Inquiry Section */}
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

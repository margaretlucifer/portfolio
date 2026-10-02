import React from 'react';
import { ArrowUp, ExternalLink, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#E8E6E1] py-16 text-[#575B62]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E8E6E1]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="font-heading font-bold text-xl text-[#18191B]">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-sm font-medium text-[#464A53]">
              {PERSONAL_INFO.role}
            </p>
            <p className="text-xs text-[#717682] max-w-sm leading-relaxed">
              Engineering modern web experiences, high-performance dashboards, AI-assisted applications, and interactive 3D WebGL interfaces.
            </p>
            <div className="pt-2 text-xs text-[#18191B] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Available for Freelance Opportunities worldwide</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8A8F9C]">
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#home" className="hover:text-[#18191B] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#18191B] transition-colors">
                  About Aryan
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#18191B] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#18191B] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#18191B] transition-colors">
                  Technology Stack
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#18191B] transition-colors">
                  Start a Project
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#8A8F9C]">
              Connect
            </div>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-[#18191B] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-[#18191B] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>GitHub Profile</span>
                  <Github className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-[#18191B] transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="text-[#8A8F9C] pt-1">
                {PERSONAL_INFO.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Aryan Jadhav. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#DDD9CE] hover:border-[#18191B] text-[#18191B] font-medium transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

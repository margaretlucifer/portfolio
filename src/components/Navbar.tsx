import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'projects', 'skills', 'process', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-md border-b border-[#E8E6E1] shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex flex-col tracking-tight"
        >
          <span className="font-heading font-bold text-lg text-[#18191B] tracking-tight group-hover:text-black transition-colors">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-[11px] text-[#575B62] font-medium tracking-normal hidden sm:inline-block">
            Freelance Software Developer
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#444850]">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative py-1 transition-colors hover:text-[#18191B] ${
                  isActive ? 'text-[#18191B] font-semibold' : ''
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#18191B] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Header Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden sm:inline-flex items-center justify-center p-2 rounded-lg text-[#18191B] hover:bg-[#EFECE6] border border-[#DDD9CE] transition-colors"
            title="GitHub Profile (aryanjadhav917)"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <button
            onClick={onStartProject}
            className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-[#18191B] text-white text-xs sm:text-sm font-medium hover:bg-black transition-all shadow-sm hover:shadow active:scale-98"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#18191B] hover:bg-[#EFECE6] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#E8E6E1] px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 text-base font-medium text-[#18191B] rounded-lg hover:bg-[#F4F2EB] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E8E6E1] flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full py-2.5 rounded-lg border border-[#DDD9CE] text-[#18191B] text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#F4F2EB] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Profile (aryanjadhav917)</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onStartProject();
                }}
                className="w-full py-3 rounded-lg bg-[#18191B] text-white text-sm font-semibold flex items-center justify-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs text-[#575B62] pt-1">
                Mumbai, Maharashtra · Available for Freelance
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { ArrowRight, Code, Layers, Sparkles, Box, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroThreeCanvas } from './HeroThreeCanvas';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#F6F4EE] to-[#FAF9F6]"
    >
      {/* Three.js interactive background */}
      <HeroThreeCanvas />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Messaging */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Availability & Multi-disciplinary Indicator */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E4E1D8] shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold tracking-wide text-[#23272E]">
                  Available for Client & Freelance Projects
                </span>
              </div>
              <span className="text-xs font-bold text-[#8A8F9C] uppercase tracking-wider px-2 hidden sm:inline">
                Technology × Creativity × Marketing
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#18191B] leading-[1.08]">
              {PERSONAL_INFO.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#525761] leading-relaxed max-w-2xl">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Key Value Highlights - Clean metadata without pills */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-[#5B6069] pt-1">
              <span className="flex items-center gap-1.5 text-[#18191B]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Idea → Design → Code → Launch
              </span>
              <span className="text-[#C5C2BA]" aria-hidden="true">·</span>
              <span>Direct Client Collaboration</span>
              <span className="text-[#C5C2BA]" aria-hidden="true">·</span>
              <span>Based in Mumbai, India</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
              <button
                onClick={onStartProject}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#18191B] text-white text-sm font-semibold hover:bg-black transition-all shadow-[0_4px_16px_rgba(24,25,27,0.12)] hover:shadow-[0_6px_20px_rgba(24,25,27,0.2)] active:scale-98 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewWork}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#18191B] text-sm font-medium border border-[#DDD9CE] hover:border-[#18191B] hover:bg-[#FAF9F6] transition-all cursor-pointer"
              >
                <span>View My Work</span>
              </button>
            </div>
          </div>

          {/* Right Column: Official Portrait of Aryan Jadhav */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Subtle ambient halo */}
              <div
                className="absolute -inset-4 bg-gradient-to-tr from-[#E6E2D8] via-[#EFECE3] to-[#DFDACF] rounded-3xl blur-2xl opacity-60 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Image Frame */}
              <div className="relative rounded-2xl bg-white p-2.5 sm:p-3 border border-[#E3DFD5] shadow-[0_16px_40px_-8px_rgba(24,25,27,0.08)]">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#202226]">
                  <img
                    src={PERSONAL_INFO.heroPortrait}
                    alt="Aryan Jadhav — Freelance Software Developer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
                    loading="eager"
                  />
                  {/* Subtle lighting gradient at the bottom of the image for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Identification Tag overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-heading font-bold text-sm tracking-wide">
                      ARYAN JADHAV
                    </p>
                    <p className="text-[11px] text-slate-200 font-medium">
                      Software Developer · AI & 3D
                    </p>
                  </div>
                </div>

                {/* Floating Tech Elements */}
                <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-[#E3DFD5] shadow-sm text-xs font-semibold text-[#18191B]">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>AI & 3D Systems</span>
                </div>

                <div className="absolute -bottom-4 -left-3 hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/95 backdrop-blur-md border border-[#E3DFD5] shadow-sm text-xs text-[#18191B]">
                  <Code className="w-3.5 h-3.5 text-blue-600" />
                  <span className="font-semibold">Web · Dashboards · Apps</span>
                </div>
              </div>

              {/* Small supporting phrase */}
              <p className="text-center text-xs text-[#717682] mt-4 font-medium tracking-wide">
                Build. Innovate. Experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

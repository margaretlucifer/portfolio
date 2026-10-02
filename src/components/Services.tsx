import React, { useState } from 'react';
import {
  Code2,
  Palette,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Check,
  ChevronRight,
} from 'lucide-react';
import { SERVICE_PILLARS } from '../data/portfolioData';
import { ServicePillar } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Palette,
  TrendingUp,
  Sparkles,
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-white border-b border-[#EAE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#797F8B] mb-3">
              Services & Capabilities
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18191B] tracking-tight leading-tight">
              Four Core Pillars of Execution
            </h2>
            <p className="text-base text-[#575B62] mt-3">
              An integrated multidisciplinary partner delivering seamless value across technology, creative design, growth marketing, and brand identity.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E4E0D6] text-xs font-semibold text-[#18191B]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Client & Freelance Projects</span>
          </div>
        </div>

        {/* 4 Major Pillars - 2x2 Large Visual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICE_PILLARS.map((service: ServicePillar) => {
            const Icon = iconMap[service.icon] || Code2;
            const isHovered = hoveredPillar === service.pillar;

            return (
              <div
                key={service.pillar}
                onMouseEnter={() => setHoveredPillar(service.pillar)}
                onMouseLeave={() => setHoveredPillar(null)}
                className="group relative rounded-3xl bg-[#FAF9F6] border border-[#E5E1D7] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-[#18191B] hover:shadow-[0_20px_48px_rgba(24,25,27,0.08)] hover:-translate-y-1 overflow-hidden"
              >
                {/* Subtle Decorative Gradient Aura */}
                <div
                  className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
                    service.accentColor === 'blue'
                      ? 'bg-blue-400/10'
                      : service.accentColor === 'violet'
                      ? 'bg-violet-400/10'
                      : service.accentColor === 'emerald'
                      ? 'bg-emerald-400/10'
                      : 'bg-amber-400/10'
                  } ${isHovered ? 'opacity-100 scale-120' : 'opacity-30'}`}
                />

                <div className="relative z-10">
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-xs font-bold text-[#848993] tracking-widest">
                        PILLAR {service.number}
                      </span>
                      <span className="text-[#C5C2BA]" aria-hidden="true">·</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#18191B]">
                        {service.pillar}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E3DFD5] flex items-center justify-center text-[#18191B] shadow-xs group-hover:scale-105 group-hover:bg-[#18191B] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#18191B] mb-2 tracking-tight">
                    {service.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#8B6B23] mb-4">
                    {service.tagline}
                  </div>

                  <p className="text-sm text-[#525761] leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* Key Capabilities */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#797F8B]">
                      Core Capabilities
                    </div>
                    {service.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#383C44]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables Tags */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#797F8B] mb-2">
                      Key Deliverables
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.deliverables.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-white border border-[#E4E0D6] text-xs font-medium text-[#2F333B] shadow-2xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Tools & Inquiry Action */}
                <div className="relative z-10 pt-6 border-t border-[#EAE7DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#717682]">
                    <span className="font-medium text-[#18191B]">Stack:</span>
                    {service.tools.slice(0, 4).map((tool, i) => (
                      <React.Fragment key={tool}>
                        <span className="font-mono text-[#383C44]">{tool}</span>
                        {i < 3 && <span className="text-[#C5C2BA]" aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18191B] group-hover:text-black group-hover:translate-x-1 transition-all cursor-pointer self-start sm:self-auto"
                  >
                    <span>Discuss {service.pillar}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

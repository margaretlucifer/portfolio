import React from 'react';
import { Award, Eye, Box, Code2, Users2, Zap } from 'lucide-react';
import { TRUST_BADGES } from '../data/portfolioData';

const icons = [Award, Eye, Box, Code2, Users2, Zap];

export const TrustBar: React.FC = () => {
  return (
    <div className="relative z-20 border-y border-[#E8E6E1] bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#848993] shrink-0">
            Core Competencies & Proof
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {TRUST_BADGES.map((badge, idx) => {
              const IconComponent = icons[idx % icons.length];
              return (
                <div
                  key={badge.label}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-colors ${
                    badge.highlight
                      ? 'bg-[#F4F2EA] text-[#18191B] font-semibold border border-[#E0DCCE]'
                      : 'bg-[#FAF9F6] text-[#4F545E] font-medium border border-[#EBE8E0]'
                  }`}
                >
                  <IconComponent
                    className={`w-3.5 h-3.5 shrink-0 ${
                      badge.highlight ? 'text-amber-600' : 'text-[#7A808C]'
                    }`}
                  />
                  <span className="truncate">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

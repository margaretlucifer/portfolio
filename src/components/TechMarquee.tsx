import React from 'react';
import { TECH_MARQUEE } from '../data/portfolioData';

export const TechMarquee: React.FC = () => {
  // Double the list for seamless infinite loop
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE];

  return (
    <div className="relative py-8 bg-white border-b border-[#E8E6E1] overflow-hidden select-none">
      {/* Edge gradient masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-8 animate-marquee whitespace-nowrap will-change-transform">
        {items.map((tech, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3 text-sm font-semibold text-[#3C414B] hover:text-[#18191B] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#18191B]/30" />
            <span className="font-heading tracking-tight">{tech}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

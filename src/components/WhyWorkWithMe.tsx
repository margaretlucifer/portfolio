import React from 'react';
import { Sparkles, Users, Cpu, Compass, Code } from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

const icons = [Sparkles, Users, Cpu, Compass, Code];

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-[#EAE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#797F8B] mb-3">
            Value Proposition
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18191B] tracking-tight leading-tight">
            Why Clients Choose to Work With Me
          </h2>
          <p className="text-base text-[#575B62] mt-3">
            Factual advantages rooted in disciplined engineering, interactive design skills, and transparent direct communication.
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-[#FAF9F6] border border-[#E7E4DC] p-7 hover:border-[#18191B] hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E3DFD5] flex items-center justify-center text-[#18191B] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#18191B] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#525761] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#EAE7DF] text-xs font-semibold text-[#878D99]">
                  Advantage 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

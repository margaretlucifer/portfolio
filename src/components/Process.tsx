import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Compass, Code, Rocket } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

const stepIcons = [MessageSquare, Compass, Code, Rocket];

interface ProcessProps {
  onStartProject: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onStartProject }) => {
  return (
    <section id="process" className="py-24 bg-[#FAF9F6] border-b border-[#EAE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#797F8B] mb-3">
            Client Workflow & Engagement
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18191B] tracking-tight leading-tight">
            From Idea to Deployment
          </h2>
          <p className="text-base text-[#575B62] mt-3">
            A clear, collaborative four-step development process ensuring your project is delivered on schedule, within scope, and ready for your audience.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={step.step}
                className="relative rounded-2xl bg-white border border-[#E5E2D8] p-7 flex flex-col justify-between hover:border-[#18191B] hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#848993] tracking-widest">
                      STEP {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF9F6] border border-[#E7E4DC] flex items-center justify-center text-[#18191B]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#18191B] mb-1 tracking-tight">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#5B606C] mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#525761] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE7DF] space-y-2">
                  {step.activities.map((activity, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#383C44]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Client Collaboration Callout Banner */}
        <div className="mt-12 rounded-2xl bg-white border border-[#E4E0D6] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF9F6] border border-[#E5E2D8] text-xs font-semibold text-[#18191B] mb-3">
              <span>● Direct Client Collaboration</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-[#18191B]">
              Transparent Communication At Every Stage
            </h3>
            <p className="text-sm text-[#575B62] mt-1.5 leading-relaxed">
              Aryan works directly with clients—from local businesses to educational organizations—understanding specific operational goals, presenting iterative previews, and refining deliverables with no unnecessary bureaucracy.
            </p>
          </div>

          <button
            onClick={onStartProject}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#18191B] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-all shrink-0 cursor-pointer"
          >
            <span>Start With Step 01</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

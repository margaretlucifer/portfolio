import React from 'react';
import { MapPin, Target, GraduationCap, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onStartProject: () => void;
}

export const About: React.FC<AboutProps> = ({ onStartProject }) => {
  return (
    <section id="about" className="py-24 bg-[#FAF9F6] border-b border-[#EAE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#797F8B] mb-3">
            About Aryan Jadhav
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18191B] tracking-tight leading-tight">
            Technology × Creativity × Marketing
          </h2>
          <p className="text-base text-[#575B62] mt-3">
            I don’t treat code, design, and growth as isolated silos. I unite all three to build digital solutions that convert.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#454A53] leading-relaxed text-base sm:text-lg">
            <p>
              I am a freelance software developer, digital designer, and marketing strategist based in{' '}
              <strong className="text-[#18191B] font-semibold">Mumbai, Maharashtra</strong>, currently pursuing my Bachelor of Computer Applications (BCA) at Sanjay Ghodawat University.
            </p>

            <p>
              Rather than merely building websites that sit idle, I partner directly with founders, academies, and growing businesses to deliver complete digital ecosystems — from high-performance web development and interactive 3D WebGL experiences to high-converting UI/UX design systems, paid ad lead generation funnels, and authoritative brand identities.
            </p>

            <p>
              Whether engineering a live production education portal like <strong className="text-[#18191B]">Avishkaar Academy</strong>, crafting modular pitch decks, running targeted Meta & Google ad campaigns, or designing relational databases and AI voice assistants — I prioritize clean logic, aesthetic refinement, and measurable business growth.
            </p>

            {/* Direct Client Workflow Highlights */}
            <div className="pt-4 border-t border-[#EAE7DF] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#18191B]">Full-Spectrum Execution</h4>
                  <p className="text-xs text-[#5D6370] mt-0.5">
                    Build (Code) + Design (UI/UX) + Grow (Marketing & Branding).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#18191B]">Direct Client Partnership</h4>
                  <p className="text-xs text-[#5D6370] mt-0.5">
                    No middlemen. Direct collaboration with the creator executing your vision.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#18191B] hover:text-black underline underline-offset-4 cursor-pointer"
              >
                <span>Discuss a project with Aryan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Profile Cards & Approved Photo Asset */}
          <div className="lg:col-span-5 space-y-6">
            {/* Approved Profile Photo Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E5E2D8] flex items-center gap-5 shadow-xs">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#18191B] shrink-0 border border-[#E2DED5]">
                <img
                  src={PERSONAL_INFO.heroPortrait}
                  alt="Aryan Jadhav — Profile"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-[#18191B] text-base">
                  Aryan Jadhav
                </h3>
                <p className="text-xs text-[#5D6370] mt-0.5">
                  Tech • Design • Growth • Branding
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Open for New Projects</span>
                </div>
              </div>
            </div>

            {/* Structured Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 border border-[#E5E2D8] shadow-2xs">
                <div className="flex items-center gap-2 text-xs text-[#7A808D] font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#18191B]" />
                  <span>Based in</span>
                </div>
                <div className="font-semibold text-sm text-[#18191B]">
                  Mumbai, Maharashtra
                </div>
                <div className="text-xs text-[#6F7582] mt-0.5">India (IST / UTC+5:30)</div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-[#E5E2D8] shadow-2xs">
                <div className="flex items-center gap-2 text-xs text-[#7A808D] font-medium mb-1">
                  <Target className="w-3.5 h-3.5 text-[#18191B]" />
                  <span>Cross-Disciplinary</span>
                </div>
                <div className="font-semibold text-sm text-[#18191B]">
                  Tech · Design · Growth
                </div>
                <div className="text-xs text-[#6F7582] mt-0.5">Comprehensive execution</div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-[#E5E2D8] shadow-2xs">
                <div className="flex items-center gap-2 text-xs text-[#7A808D] font-medium mb-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#18191B]" />
                  <span>Education</span>
                </div>
                <div className="font-semibold text-sm text-[#18191B]">
                  BCA Degree
                </div>
                <div className="text-xs text-[#6F7582] mt-0.5">Sanjay Ghodawat University</div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-[#E5E2D8] shadow-2xs">
                <div className="flex items-center gap-2 text-xs text-[#7A808D] font-medium mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#18191B]" />
                  <span>Availability</span>
                </div>
                <div className="font-semibold text-sm text-[#18191B]">
                  Immediate
                </div>
                <div className="text-xs text-[#6F7582] mt-0.5">Client & freelance work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

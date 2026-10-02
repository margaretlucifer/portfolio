import React from 'react';
import { Award, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { ACHIEVEMENTS, EDUCATION } from '../data/portfolioData';

export const AchievementsLeadership: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-[#FAF9F6] border-b border-[#EAE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Achievements Section */}
        <div>
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#797F8B] mb-3">
              Recognition & Excellence
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#18191B] tracking-tight leading-tight">
              Verified Achievements
            </h2>
            <p className="text-base text-[#575B62] mt-2">
              Competitive technical accomplishments validated by hands-on prototype delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Trophy Card */}
            <div className="lg:col-span-8 rounded-2xl bg-white border border-[#E4E0D6] p-7 sm:p-9 shadow-sm hover:border-[#18191B] transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">
                      Regional Hackathon Award
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-[#18191B]">
                      3rd Prize — Regional Hackathon
                    </h3>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E5E2D8] text-xs font-semibold text-[#18191B] self-start">
                  Awarded Prototype
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#4C515B] leading-relaxed mb-6">
                {ACHIEVEMENTS[0].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#EAE7DF]">
                {ACHIEVEMENTS[0].highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#2F333B]">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="lg:col-span-4 rounded-2xl bg-[#F4F2EA] border border-[#E1DDD0] p-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6F7582]">
                  Core Tech Evaluated
                </span>
                <h4 className="font-heading text-lg font-bold text-[#18191B] mt-1 mb-3">
                  Cross-Disciplinary Integration
                </h4>
                <p className="text-xs text-[#525761] leading-relaxed mb-4">
                  Evaluated on real-time responsiveness, touchless tracking stability with MediaPipe, 3D WebGL rendering smoothness, and conversational clinical relevance.
                </p>
              </div>

              <div className="pt-4 border-t border-[#DFDACB] text-xs font-mono text-[#18191B]">
                Status: Awarded & Documented
              </div>
            </div>
          </div>
        </div>

        {/* Academic Background / Education */}
        <div>
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#797F8B] mb-2">
              Academic Background
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#18191B] tracking-tight">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu) => (
              <div
                key={edu.institution}
                className="rounded-2xl bg-white border border-[#E5E2D8] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs text-[#6B717D]">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#18191B]" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#18191B]">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-[#484D57] mt-0.5 mb-3">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-[#5D6370] leading-relaxed">
                    {edu.highlights}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#EAE7DF] flex items-center justify-between text-xs">
                  <span className="text-[#848993]">Status</span>
                  <span className="font-semibold text-[#18191B]">{edu.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

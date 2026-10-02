import React, { useEffect, useState } from 'react';
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  Globe,
  Code2,
  Award,
  Smartphone,
  Sparkles,
  ExternalLink,
  Layers,
  Palette,
  Layout,
  CheckCircle2,
} from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onNextProject: () => void;
  onPrevProject: () => void;
  onStartProjectWithContext: (projectName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onNextProject,
  onPrevProject,
  onStartProjectWithContext,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'experience' | 'responsive' | 'result'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNextProject();
      if (e.key === 'ArrowLeft') onPrevProject();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNextProject, onPrevProject]);

  // Reset tab when project changes
  useEffect(() => {
    setActiveTab('overview');
  }, [project?.id]);

  if (!project) return null;

  const { caseStudy } = project;
  const isExtended = Boolean(caseStudy.websiteExperience || caseStudy.responsiveDesign);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#E4E0D6] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E5DC] bg-[#FAF9F6]">
          <div className="flex items-center gap-3">
            <span className="font-heading text-xs font-bold text-[#848993] tracking-widest">
              CASE STUDY {project.number}
            </span>
            <span className="text-[#D0CDC4]" aria-hidden="true">/</span>
            <span className="text-xs font-medium text-[#575B62]">{project.category}</span>
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 transition-colors mr-2"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-600" />
                <span>Visit Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            <button
              onClick={onPrevProject}
              className="p-1.5 rounded-lg text-[#575B62] hover:text-[#18191B] hover:bg-[#EFECE6] transition-colors"
              title="Previous project (Left arrow)"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNextProject}
              className="p-1.5 rounded-lg text-[#575B62] hover:text-[#18191B] hover:bg-[#EFECE6] transition-colors"
              title="Next project (Right arrow)"
              aria-label="Next project"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#575B62] hover:text-[#18191B] hover:bg-[#EFECE6] transition-colors ml-2"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          {/* Title Area */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {project.badge && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>{project.badge}</span>
                </div>
              )}
              {project.projectType && (
                <span className="text-xs font-semibold text-[#666B77]">
                  {project.projectType}
                </span>
              )}
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#18191B] tracking-tight">
              {project.title}
            </h2>

            {project.role && (
              <div className="text-xs font-semibold text-[#8B6B23] mt-1">
                {project.role}
              </div>
            )}

            <p className="text-sm sm:text-base text-[#575B62] mt-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Top Visual Preview / Gallery Banner */}
          <div className="relative rounded-xl overflow-hidden border border-[#E2DED5] bg-[#0A1A35] shadow-inner aspect-[16/9] max-h-96">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-md bg-black/80 hover:bg-black text-white text-xs font-semibold backdrop-blur-xs flex items-center gap-1.5 transition-colors"
              >
                <span>Live Website: {project.liveUrl.replace('https://', '')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F2F0E8] rounded-xl self-start">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-white text-[#18191B] shadow-xs'
                  : 'text-[#626771] hover:text-[#18191B]'
              }`}
            >
              01-02 Overview & Role
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-white text-[#18191B] shadow-xs'
                  : 'text-[#626771] hover:text-[#18191B]'
              }`}
            >
              03-05 UI, Features & Tech
            </button>
            <button
              onClick={() => setActiveTab('responsive')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'responsive'
                  ? 'bg-white text-[#18191B] shadow-xs'
                  : 'text-[#626771] hover:text-[#18191B]'
              }`}
            >
              07-09 Responsive & Gallery
            </button>
            <button
              onClick={() => setActiveTab('result')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'result'
                  ? 'bg-white text-[#18191B] shadow-xs'
                  : 'text-[#626771] hover:text-[#18191B]'
              }`}
            >
              10 Final Result
            </button>
          </div>

          {/* TAB 1: 01 Overview, 02 My Role, Problem & Approach */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in-50 duration-150">
              {/* 01 — Project Overview */}
              <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#E7E4DC]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#797F8B] mb-2.5">
                  01 — Project Overview
                </h4>
                <p className="text-sm text-[#383D46] leading-relaxed">
                  {caseStudy.overview}
                </p>
              </div>

              {/* 02 — My Role */}
              {caseStudy.myRole && (
                <div className="p-6 rounded-2xl bg-white border border-[#E4E0D6]">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#797F8B]">
                      02 — My Role
                    </h4>
                    <span className="px-3 py-1 rounded-md bg-[#FAF9F6] border border-[#E3DFD5] text-xs font-bold text-[#18191B]">
                      {caseStudy.myRole.title}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {caseStudy.myRole.responsibilities.map((resp, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#FAF9F6] border border-[#EAE7DF] text-xs text-[#2D3139]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Problem & Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[#FAF9F6] border border-[#E7E4DC]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#797F8B] mb-2">
                    Objective & Challenge
                  </h4>
                  <p className="text-sm text-[#444850] leading-relaxed">
                    {caseStudy.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#FAF9F6] border border-[#E7E4DC]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#797F8B] mb-2">
                    Development Approach
                  </h4>
                  <p className="text-sm text-[#444850] leading-relaxed">
                    {caseStudy.approach}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 03 Website Experience, 04 Design & UI, 05 Key Features, 06 Technology */}
          {activeTab === 'experience' && (
            <div className="space-y-8 animate-in fade-in-50 duration-150">
              {/* 03 — Website Experience */}
              {caseStudy.websiteExperience && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#797F8B] mb-3">
                    03 — Website Experience & Structure
                  </h4>
                  <p className="text-xs text-[#5D6370] mb-4">
                    {caseStudy.websiteExperience.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {caseStudy.websiteExperience.sections.map((sec, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E7E4DC] flex flex-col justify-between"
                      >
                        <h5 className="font-heading font-bold text-sm text-[#18191B] mb-1">
                          {sec.name}
                        </h5>
                        <p className="text-xs text-[#575B62] leading-relaxed">
                          {sec.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 04 — Design & UI */}
              {caseStudy.designAndUI && (
                <div className="p-6 rounded-2xl bg-white border border-[#E4E0D6] space-y-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#797F8B]">
                    04 — Design & UI System
                  </h4>
                  <p className="text-xs text-[#575B62]">
                    {caseStudy.designAndUI.description}
                  </p>

                  {/* Swatches */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {caseStudy.designAndUI.palette.map((c) => (
                      <div
                        key={c.name}
                        className="p-3 rounded-xl border border-[#E5E2D8] bg-[#FAF9F6] space-y-2"
                      >
                        <div
                          className="h-9 w-full rounded-md shadow-xs border border-black/10"
                          style={{ backgroundColor: c.hex }}
                        />
                        <div className="text-xs font-bold text-[#18191B]">{c.name}</div>
                        <div className="text-[11px] font-mono text-[#717682]">{c.hex}</div>
                        <div className="text-[11px] text-[#555963] leading-tight">{c.note}</div>
                      </div>
                    ))}
                  </div>

                  {/* Typography */}
                  <div className="pt-3 border-t border-[#EAE7DF]">
                    <span className="text-xs font-bold text-[#18191B] block mb-2">
                      Typography
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#4E535E]">
                      {caseStudy.designAndUI.typography.map((t, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#18191B]" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* 05 — Key Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#797F8B] mb-3">
                  05 — Key Features (Verified from Site)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {caseStudy.keyFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-[#FAF9F6] border border-[#E7E4DC] text-xs text-[#3A3F47]"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 06 — Technology */}
              <div className="p-5 rounded-xl bg-white border border-[#E4E0D6]">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#797F8B]">
                    06 — Technologies
                  </h4>
                  {caseStudy.techStackStatus && (
                    <span className="text-[11px] font-mono text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                      {caseStudy.techStackStatus}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {caseStudy.technologiesUsed.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-md bg-[#FAF9F6] text-xs text-[#2A2E35] border border-[#E8E5DD]"
                    >
                      <Code2 className="w-3.5 h-3.5 text-[#18191B] shrink-0" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 07 Responsive Design, 08 Development Highlights, 09 Gallery */}
          {activeTab === 'responsive' && (
            <div className="space-y-8 animate-in fade-in-50 duration-150">
              {/* 07 — Responsive Design */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#797F8B] mb-3">
                  07 — Responsive Design (Desktop → Tablet → Mobile)
                </h4>
                {caseStudy.responsiveDesign && (
                  <p className="text-xs text-[#525761] mb-4">
                    {caseStudy.responsiveDesign.description}
                  </p>
                )}

                {/* Multi-Device Mockup Image */}
                {project.responsiveImage && (
                  <div className="rounded-xl overflow-hidden border border-[#E2DED5] bg-[#FAF9F6] mb-5 aspect-[16/9]">
                    <img
                      src={project.responsiveImage}
                      alt={`${project.title} across desktop, tablet, and mobile`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Viewports breakdown */}
                {caseStudy.responsiveDesign && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {caseStudy.responsiveDesign.viewports.map((v, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E7E4DC] space-y-1.5"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#18191B]">
                          <Smartphone className="w-3.5 h-3.5" />
                          <span>{v.device}</span>
                        </div>
                        <p className="text-xs text-[#575B62] leading-relaxed">
                          {v.adaptation}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 08 — Development Highlights */}
              {caseStudy.developmentHighlights && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#797F8B] mb-3">
                    08 — Development Highlights
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {caseStudy.developmentHighlights.map((hl, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white border border-[#E4E0D6] space-y-1.5"
                      >
                        <h5 className="font-heading font-bold text-sm text-[#18191B]">
                          {hl.title}
                        </h5>
                        <p className="text-xs text-[#575B62] leading-relaxed">
                          {hl.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 09 — Project Gallery */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#797F8B] mb-3">
                  09 — Project Gallery & Interface Previews
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden border border-[#E2DED5] bg-black">
                    <img
                      src={project.image}
                      alt="Homepage Desktop"
                      referrerPolicy="no-referrer"
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="p-3 bg-white text-xs font-medium text-[#18191B]">
                      Homepage & Hero Enrollment Funnel
                    </div>
                  </div>
                  {project.responsiveImage && (
                    <div className="rounded-xl overflow-hidden border border-[#E2DED5] bg-black">
                      <img
                        src={project.responsiveImage}
                        alt="Multi-device responsive layout"
                        referrerPolicy="no-referrer"
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-3 bg-white text-xs font-medium text-[#18191B]">
                        Multi-Device Responsive Screen System
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: 10 Final Result */}
          {activeTab === 'result' && (
            <div className="space-y-6 animate-in fade-in-50 duration-150">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0A1A35] to-[#12274F] text-white space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>10 — Final Result</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {caseStudy.finalResult?.headline || 'A Digital Platform Built for Learning'}
                </h3>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                  {caseStudy.finalResult?.summary || caseStudy.outcome}
                </p>

                {project.liveUrl && (
                  <div className="pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#e0bc43] text-[#0A1A35] font-heading font-bold text-sm shadow-md transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Visit Live Website →</span>
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                )}
              </div>

              {/* Accuracy & Verifiable details callout */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <div className="font-semibold text-slate-800 mb-1">
                  Source of Truth Verification
                </div>
                <div>
                  Live production URL verified at{' '}
                  <a
                    href={project.liveUrl || 'https://avishkaaracademy.in/'}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="underline text-blue-600 font-mono"
                  >
                    {project.liveUrl || 'https://avishkaaracademy.in/'}
                  </a>
                  . All program tracks, student results, and contact channels reflect the actual client deployment.
                </div>
              </div>
            </div>
          )}

          {/* Modal Footer Controls */}
          <div className="pt-6 border-t border-[#E8E5DC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onStartProjectWithContext(project.title);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#18191B] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Build Something Similar</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onNextProject}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white border border-[#DDD9CE] hover:border-[#18191B] text-xs sm:text-sm font-medium text-[#18191B] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Next Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

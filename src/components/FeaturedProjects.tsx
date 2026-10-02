import React, { useState, useMemo } from 'react';
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Globe,
  Sparkles,
  ExternalLink,
  Code2,
  Palette,
  TrendingUp,
  Sparkle,
  SlidersHorizontal,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectPillar } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { Interactive3DDemo } from './Interactive3DDemo';

interface FeaturedProjectsProps {
  onStartProjectWithContext: (projectName: string) => void;
}

type FilterKey = 'all' | ProjectPillar;

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onStartProjectWithContext,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterKey>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showInteractiveDemo, setShowInteractiveDemo] = useState(false);

  const filterOptions: { key: FilterKey; label: string; icon?: React.ElementType }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'development', label: 'Development', icon: Code2 },
    { key: 'design', label: 'Design', icon: Palette },
    { key: 'marketing', label: 'Marketing', icon: TrendingUp },
    { key: 'branding', label: 'Branding', icon: Sparkles },
  ];

  // Count items per filter
  const filterCounts = useMemo(() => {
    return {
      all: PROJECTS.length,
      development: PROJECTS.filter((p) => p.pillar === 'development').length,
      design: PROJECTS.filter((p) => p.pillar === 'design').length,
      marketing: PROJECTS.filter((p) => p.pillar === 'marketing').length,
      branding: PROJECTS.filter((p) => p.pillar === 'branding').length,
    };
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.pillar === selectedFilter);
  }, [selectedFilter]);

  // Handle hero card logic: if Avishkaar is in filtered list, feature it; otherwise first project in list
  const heroProject = useMemo(() => {
    if (selectedFilter === 'all' || selectedFilter === 'development') {
      return PROJECTS.find((p) => p.id === 'avishkaar-academy');
    }
    return null;
  }, [selectedFilter]);

  const gridProjects = useMemo(() => {
    if (heroProject) {
      return filteredProjects.filter((p) => p.id !== heroProject.id);
    }
    return filteredProjects;
  }, [filteredProjects, heroProject]);

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[prevIndex]);
  };

  return (
    <section id="projects" className="py-24 bg-[#FAF9F6] border-b border-[#EAE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#797F8B] mb-3">
              Portfolio & Featured Work
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18191B] tracking-tight leading-tight">
              Selected Work
            </h2>
            <p className="text-base text-[#575B62] mt-3">
              Work spanning modern web development, UI/UX design systems, performance marketing campaigns, and brand identity.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowInteractiveDemo(!showInteractiveDemo)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#DDD9CE] hover:border-[#18191B] text-xs font-semibold text-[#18191B] transition-colors shadow-2xs cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{showInteractiveDemo ? 'Hide 3D WebGL Demo' : 'Try Live 3D WebGL Demo'}</span>
            </button>
          </div>
        </div>

        {/* Optional Live 3D Canvas Showcase */}
        {showInteractiveDemo && (
          <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-300">
            <Interactive3DDemo />
          </div>
        )}

        {/* ============================================================== */}
        {/* ELEGANT PROJECT FILTER NAVIGATION */}
        {/* ============================================================== */}
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 p-2 rounded-2xl bg-white border border-[#E5E2D8] shadow-2xs">
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            {filterOptions.map((opt) => {
              const isActive = selectedFilter === opt.key;
              const Icon = opt.icon;
              const count = filterCounts[opt.key];

              return (
                <button
                  key={opt.key}
                  onClick={() => setSelectedFilter(opt.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#18191B] text-white shadow-xs'
                      : 'text-[#585D67] hover:text-[#18191B] hover:bg-[#FAF9F6]'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5 opacity-80" />}
                  <span>{opt.label}</span>
                  <span
                    className={`ml-1 text-[11px] font-mono px-1.5 py-0.2 rounded ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#EFECE5] text-[#696F7C]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-[#7A808D] font-medium hidden md:flex items-center gap-2 px-3">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#18191B]" />
            <span>Showing {filteredProjects.length} of {PROJECTS.length} results</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* HERO FEATURED PROJECT (Avishkaar Academy when in Dev or All) */}
        {/* ============================================================== */}
        {heroProject && (
          <div className="mb-14 rounded-3xl bg-white border border-[#E3DFD5] overflow-hidden shadow-[0_16px_40px_rgba(24,25,27,0.06)] hover:border-[#18191B] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left/Visual Column */}
              <div className="lg:col-span-7 relative bg-[#0A1A35] overflow-hidden min-h-[340px] sm:min-h-[420px] flex items-center justify-center p-6 group">
                <img
                  src={heroProject.image}
                  alt="Avishkaar Academy — Live Website Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top rounded-xl shadow-2xl transition-transform duration-700 ease-out group-hover:scale-102"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none" />

                {/* Live Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500 text-white text-xs font-bold shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>LIVE WEBSITE</span>
                </div>

                {/* Subtitle tag */}
                <div className="absolute bottom-4 left-4 right-4 text-white hidden sm:block">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37]">
                    avishkaaracademy.in
                  </span>
                </div>
              </div>

              {/* Right/Info Column */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  {/* Prominent Category Badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-md bg-[#18191B] text-white text-xs font-bold tracking-wider uppercase font-mono shadow-2xs">
                      {heroProject.categoryBadge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700">
                      {heroProject.projectType}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#18191B] tracking-tight mb-1">
                    {heroProject.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#8B6B23] tracking-wide mb-4">
                    Education • Digital Learning • Web Development
                  </div>

                  <p className="text-sm text-[#4E535E] leading-relaxed mb-6">
                    {heroProject.shortDescription}
                  </p>

                  {/* Role Tag */}
                  <div className="p-3 rounded-xl bg-[#FAF9F6] border border-[#E7E4DC] mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#797F8B] block mb-1">
                      My Role
                    </span>
                    <span className="text-xs font-semibold text-[#18191B]">
                      {heroProject.role}
                    </span>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {heroProject.highlights.slice(0, 4).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#383C44]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dual Action CTAs */}
                <div className="pt-6 border-t border-[#EAE7DF] flex flex-col sm:flex-row items-center gap-3">
                  {heroProject.liveUrl && (
                    <a
                      href={heroProject.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#18191B] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-all shadow-xs"
                    >
                      <Globe className="w-4 h-4 text-emerald-400" />
                      <span>View Live Website →</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(heroProject)}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#DDD9CE] hover:border-[#18191B] text-[#18191B] text-xs sm:text-sm font-semibold hover:bg-[#FAF9F6] transition-all cursor-pointer"
                  >
                    <span>View Case Study →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* PROJECTS GRID (Card layout with clearly visible Category Badge) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {gridProjects.map((project: Project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl bg-white border border-[#E5E2D8] overflow-hidden transition-all duration-300 hover:border-[#18191B] hover:shadow-[0_16px_40px_rgba(24,25,27,0.08)] hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Visual Image / Mockup Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#18191B]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none" />

                  {/* Top Left: Number */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[#18191B] font-mono text-xs font-bold shadow-xs">
                    PROJ {project.number}
                  </div>

                  {/* Top Right: Badge if applicable */}
                  {project.badge && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500 text-white text-xs font-bold shadow-xs">
                      <Award className="w-3.5 h-3.5" />
                      <span>{project.badge}</span>
                    </div>
                  )}

                  {/* Bottom Hover CTA */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 backdrop-blur-xs text-[#18191B] px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-md">
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7">
                  {/* PROMINENT CATEGORY BADGE */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-md bg-[#18191B] text-white text-[11px] font-bold tracking-wider uppercase font-mono shadow-2xs">
                      {project.categoryBadge}
                    </span>
                    <span className="text-xs font-semibold text-[#797F8B]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#18191B] mb-3 tracking-tight group-hover:text-black">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#525761] leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {project.highlights.slice(0, 4).map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#383C44]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies & Footer Action */}
              <div className="px-7 pb-7 pt-4 border-t border-[#EAE7DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#6B7280]">
                  {project.technologies.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span className="font-medium text-[#22262E]">{tech}</span>
                      {i < project.technologies.length - 1 && (
                        <span className="text-[#C5C2BA]" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <div className="text-xs font-semibold text-[#18191B] inline-flex items-center gap-1 shrink-0 group-hover:underline">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNextProject={handleNextProject}
        onPrevProject={handlePrevProject}
        onStartProjectWithContext={onStartProjectWithContext}
      />
    </section>
  );
};

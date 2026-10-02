import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Terminal, Layers, Box, Bot, Database, BarChart3, Users } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  Programming: Terminal,
  'Web Development': Layers,
  '3D & Interactive': Box,
  'AI & Automation': Bot,
  'Database Systems': Database,
  'Data & Analytics': BarChart3,
  'Professional Skills': Users,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-white border-b border-[#EAE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#797F8B] mb-3">
              Technologies & Methodologies
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18191B] tracking-tight leading-tight">
              My Technology Stack
            </h2>
            <p className="text-base text-[#575B62] mt-3">
              A balanced toolkit spanning modern front-end engineering, spatial 3D WebGL graphics, computer vision, relational databases, and AI tooling.
            </p>
          </div>

          {/* Category Filter Buttons - Segmented button controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F2F0E8] rounded-xl self-start md:self-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white text-[#18191B] shadow-xs'
                  : 'text-[#5B606C] hover:text-[#18191B]'
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((c) => (
              <button
                key={c.category}
                onClick={() => setSelectedCategory(c.category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === c.category
                    ? 'bg-white text-[#18191B] shadow-xs'
                    : 'text-[#5B606C] hover:text-[#18191B]'
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const Icon = categoryIcons[group.category] || Code;
            return (
              <div
                key={group.category}
                className="rounded-2xl bg-[#FAF9F6] border border-[#E7E4DC] p-6 hover:border-[#18191B] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading text-lg font-bold text-[#18191B]">
                      {group.category}
                    </h3>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E2D8] flex items-center justify-center text-[#18191B]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-[#5D6370] leading-relaxed mb-5">
                    {group.description}
                  </p>

                  {/* Skills tags/badges - clean subtle card chips */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-white border border-[#DDD9CE] text-xs font-semibold text-[#18191B] shadow-2xs hover:border-[#18191B] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EAE7DF] flex items-center justify-between text-[11px] text-[#787E8B]">
                  <span>Practical Application</span>
                  <span className="font-mono text-[#18191B]">Verified in Projects</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

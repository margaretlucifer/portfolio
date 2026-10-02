import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, ExternalLink, Sparkles, Github } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website Development',
    budgetRange: '$1,500 – $3,000',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        projectType: preselectedService,
      }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#18191B', '#E5E2D8', '#10B981', '#3B82F6'],
      });
    }, 600);
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.projectType} — ${formData.name || 'Client'}`
  )}&body=${encodeURIComponent(
    `Hi Aryan,\n\nI would like to discuss a project with you.\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nEstimated Budget: ${formData.budgetRange}\n\nProject Overview:\n${formData.description}\n\nLooking forward to hearing from you!`
  )}`;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Freelance Callout Banner */}
        <div className="rounded-3xl bg-[#FAF9F6] border border-[#E5E2D8] p-8 sm:p-12 lg:p-16 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-gradient-to-bl from-[#EBE7DC] via-[#FAF9F6] to-transparent rounded-full blur-3xl opacity-70 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E0DCD1] text-xs font-semibold text-[#18191B] mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Direct Freelance Collaboration</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-[#18191B] tracking-tight leading-[1.1] mb-6">
              Have an Idea? Let&apos;s Build It.
            </h2>

            <p className="text-base sm:text-lg text-[#525761] leading-relaxed mb-8">
              Whether you need a business website, web application, dashboard, AI-powered experience, or interactive digital product, let&apos;s turn your idea into something real.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#inquiry-form"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#18191B] text-white text-sm font-semibold hover:bg-black transition-all shadow-sm"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#18191B] text-sm font-medium border border-[#DDD9CE] hover:border-[#18191B] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me Directly</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact & Inquiry Grid */}
        <div id="inquiry-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#797F8B] mb-3">
                Get In Touch
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#18191B] tracking-tight">
                Let&apos;s Build Something Great
              </h3>
              <p className="text-sm text-[#575B62] mt-3 leading-relaxed">
                Have a project brief, an architectural question, or an RFP? Share the details and Aryan will get back to you within 24 hours.
              </p>
            </div>

            {/* Contact details list */}
            <div className="space-y-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF9F6] border border-[#E7E4DC] hover:border-[#18191B] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E2D8] flex items-center justify-center text-[#18191B] group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#7A808D] font-medium">Email</div>
                  <div className="text-sm font-semibold text-[#18191B] group-hover:underline">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF9F6] border border-[#E7E4DC]">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E2D8] flex items-center justify-center text-[#18191B]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#7A808D] font-medium">Direct Phone</div>
                  <div className="text-sm font-semibold text-[#18191B]">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF9F6] border border-[#E7E4DC] hover:border-[#18191B] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E2D8] flex items-center justify-center text-[#18191B] group-hover:scale-105 transition-transform">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#7A808D] font-medium">LinkedIn Profile</div>
                  <div className="text-sm font-semibold text-[#18191B] group-hover:underline flex items-center gap-1">
                    <span>{PERSONAL_INFO.linkedinDisplay}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF9F6] border border-[#E7E4DC] hover:border-[#18191B] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E2D8] flex items-center justify-center text-[#18191B] group-hover:scale-105 transition-transform">
                  <Github className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-[#7A808D] font-medium">GitHub Profile</div>
                  <div className="text-sm font-semibold text-[#18191B] group-hover:underline flex items-center gap-1">
                    <span>{PERSONAL_INFO.githubDisplay}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF9F6] border border-[#E7E4DC]">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E2D8] flex items-center justify-center text-[#18191B]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#7A808D] font-medium">Location</div>
                  <div className="text-sm font-semibold text-[#18191B]">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#FAF9F6] border border-[#E5E2D8] p-6 sm:p-9 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-[#18191B]">
                    Inquiry Received!
                  </h4>
                  <p className="text-sm text-[#525761] max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || 'friend'}. Your project details have been noted. You can also send the pre-composed message directly via email with one click below:
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoLink}
                      className="px-6 py-3 rounded-xl bg-[#18191B] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-all inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Launch In Email Client</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-xl bg-white border border-[#DDD9CE] text-xs sm:text-sm font-medium text-[#18191B] hover:bg-[#FAF9F6]"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h4 className="font-heading text-xl font-bold text-[#18191B]">
                    Project Inquiry Form
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#30343C] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD9CE] text-sm text-[#18191B] placeholder-[#9CA3AF] focus:outline-none focus:border-[#18191B] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#30343C] mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD9CE] text-sm text-[#18191B] placeholder-[#9CA3AF] focus:outline-none focus:border-[#18191B] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#30343C] mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD9CE] text-sm text-[#18191B] focus:outline-none focus:border-[#18191B] transition-colors cursor-pointer"
                      >
                        <option value="Website Development">Development: Website Development</option>
                        <option value="Web Applications & Dashboards">Development: Web App & Dashboard</option>
                        <option value="Interactive 3D / AI Automation">Development: Interactive 3D / AI System</option>
                        <option value="UI/UX & Design Systems">Design: UI/UX & Design System</option>
                        <option value="Marketing Creatives & Presentations">Design: Marketing Creatives & Pitch Deck</option>
                        <option value="Digital Marketing & Paid Ads">Marketing: Paid Ads (Meta / Google)</option>
                        <option value="Lead Generation & Funnel Optimization">Marketing: Lead Generation Funnel</option>
                        <option value="Brand Strategy & Visual Identity">Branding: Brand Strategy & Visual Identity</option>
                        <option value="Complete Digital Ecosystem">Full Ecosystem (Tech + Design + Marketing)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#30343C] mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) =>
                          setFormData({ ...formData, budgetRange: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD9CE] text-sm text-[#18191B] focus:outline-none focus:border-[#18191B] transition-colors cursor-pointer"
                      >
                        <option value="$500 – $1,500">$500 – $1,500 (Small/Starter Project)</option>
                        <option value="$1,500 – $3,000">$1,500 – $3,000 (Standard Website / App)</option>
                        <option value="$3,000 – $5,000+">$3,000 – $5,000+ (Full System / Custom)</option>
                        <option value="Flexible / Let's Discuss">Flexible / Let&apos;s Discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#30343C] mb-2">
                      Project Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      placeholder="Tell Aryan about your idea, key goals, target audience, and preferred timeframe..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD9CE] text-sm text-[#18191B] placeholder-[#9CA3AF] focus:outline-none focus:border-[#18191B] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#18191B] text-white text-sm font-semibold hover:bg-black transition-all cursor-pointer shadow-xs disabled:opacity-60"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Project Inquiry →'}</span>
                    </button>

                    <span className="text-xs text-[#7A808D]">
                      Direct reply from Aryan within 24 hours.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

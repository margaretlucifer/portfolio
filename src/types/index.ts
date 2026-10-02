export type ProjectPillar = 'development' | 'design' | 'marketing' | 'branding';

export interface Project {
  id: string;
  number: string;
  title: string;
  pillar: ProjectPillar;
  categoryBadge: string;
  badge?: string;
  category: string;
  projectType?: string;
  role?: string;
  shortDescription: string;
  technologies: string[];
  highlights: string[];
  image: string;
  liveUrl?: string;
  responsiveImage?: string;
  galleryImages?: { title: string; image: string; description: string }[];
  caseStudy: {
    overview: string;
    problem: string;
    approach: string;
    myRole?: {
      title: string;
      responsibilities: string[];
    };
    websiteExperience?: {
      description: string;
      sections: { name: string; detail: string }[];
    };
    designAndUI?: {
      description: string;
      palette: { name: string; hex: string; note: string }[];
      typography: string[];
      layoutNotes: string[];
    };
    technologiesUsed: string[];
    techStackStatus?: string;
    keyFeatures: string[];
    developmentProcess: string[];
    responsiveDesign?: {
      description: string;
      viewports: { device: string; adaptation: string }[];
    };
    developmentHighlights?: {
      title: string;
      description: string;
    }[];
    finalResult?: {
      headline: string;
      summary: string;
      liveUrl?: string;
    };
    outcome: string;
    placeholders?: {
      github?: string;
      liveUrl?: string;
      clientName?: string;
    };
  };
}

export interface ServicePillar {
  number: string;
  pillar: string;
  title: string;
  tagline: string;
  summary: string;
  capabilities: string[];
  deliverables: string[];
  tools: string[];
  icon: string;
  accentColor: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
}

import { Project, ServicePillar, SkillCategory, ProcessStep } from '../types';

export const PERSONAL_INFO = {
  name: 'ARYAN JADHAV',
  role: 'Technology • Design • Digital Marketing • Branding',
  location: 'Mumbai, Maharashtra, India',
  email: 'jadhavaryan0119@gmail.com',
  phone: '+91 7208627943',
  linkedin: 'https://www.linkedin.com/in/aryan-jadhav-1b315b37a/',
  linkedinDisplay: 'linkedin.com/in/aryan-jadhav-1b315b37a',
  github: 'https://github.com/aryanjadhav917',
  githubDisplay: 'github.com/aryanjadhav917',
  status: 'Available for Freelance & Client Projects',
  tagline: 'Technology × Creativity × Marketing',
  headline: 'I Build, Design & Grow Digital Experiences.',
  subheadline:
    'From websites and web applications to branding, digital marketing, creative design, and AI-powered experiences — I help turn ideas into digital solutions.',
  heroPortrait: '/assets/aryan-jadhav-profile.jpg',
};

export const TRUST_BADGES = [
  { label: 'Technology + Design + Marketing', highlight: true },
  { label: 'Live Client Deployment (avishkaaracademy.in)', highlight: true },
  { label: '3rd Prize — Regional Hackathon', highlight: false },
  { label: 'Performance Ads & Lead Generation', highlight: false },
  { label: 'Brand Strategy & Visual Identity', highlight: false },
  { label: 'Interactive 3D & Web Applications', highlight: false },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    number: '01',
    pillar: 'DEVELOPMENT',
    title: 'Full-Stack Web & Software Development',
    tagline: 'Websites • Web Apps • Dashboards • AI • Automation • Interactive 3D',
    summary:
      'Engineered for high performance, intuitive responsiveness, and robust architectures — from production business websites to custom administrative dashboards and WebGL experiences.',
    capabilities: [
      'Website Development & E-Learning Platforms',
      'Custom Web Applications & SaaS Dashboards',
      'Interactive 3D / WebGL & Computer Vision (Three.js, MediaPipe)',
      'AI Applications & NLP Automation Workflows',
      'Database Systems & Normalized Schemas (MySQL, SQL)',
    ],
    deliverables: [
      'Production Websites',
      'Web Applications',
      'Admin Dashboards',
      'Interactive 3D WebGL',
      'Python Automation Scripts',
    ],
    tools: ['React', 'JavaScript', 'HTML5/CSS3', 'Python', 'Three.js', 'SQL', 'MySQL'],
    icon: 'Code2',
    accentColor: 'blue',
  },
  {
    number: '02',
    pillar: 'DESIGN',
    title: 'UI/UX & Creative Digital Design',
    tagline: 'UI/UX • Graphic Design • Marketing Creatives • Presentations • Templates',
    summary:
      'Purposeful design systems that prioritize user psychology, typographic elegance, structured visual hierarchy, and polished digital brand collateral.',
    capabilities: [
      'UI/UX Design for Web & Mobile Applications',
      'Modern Design Systems & Component Libraries',
      'Marketing Creatives & High-Conversion Ad Visuals',
      'Investor Pitch Decks & Executive Presentations',
      'Landing Page Design & Conversion Wireframing',
    ],
    deliverables: [
      'Figma Prototypes & Design Systems',
      'Responsive UI Layouts',
      'Social Media & Ad Creative Packs',
      'Presentation / Pitch Decks',
      'Reusable Design Templates',
    ],
    tools: ['Figma', 'UI/UX Wireframing', 'Typography Systems', 'Design Tokens', 'Design Systems'],
    icon: 'Palette',
    accentColor: 'violet',
  },
  {
    number: '03',
    pillar: 'MARKETING',
    title: 'Digital Marketing & Growth Strategy',
    tagline: 'Digital Marketing • Google Ads • Meta Ads • Social Media • Lead Generation • Campaign Optimization',
    summary:
      'Data-driven acquisition campaigns designed to generate high-intent leads, maximize return on ad spend (ROAS), and build engaging digital brand presence.',
    capabilities: [
      'Paid Advertising (Meta Ads & Google Search/Display)',
      'End-to-End High-Intent Lead Generation Funnels',
      'Social Media Marketing & Content Strategy',
      'Campaign Tracking, A/B Testing & ROAS Optimization',
      'Performance Analytics & Conversion Rate Optimization (CRO)',
    ],
    deliverables: [
      'Paid Ad Campaigns (Meta & Google)',
      'Lead Generation Funnel Architecture',
      'Campaign Analytics & Performance Reports',
      'Content Calendar & Growth Playbooks',
      'Audience Targeting & Retargeting Sets',
    ],
    tools: ['Meta Ads Manager', 'Google Ads', 'Google Analytics', 'Lead Funnels', 'A/B Testing'],
    icon: 'TrendingUp',
    accentColor: 'emerald',
  },
  {
    number: '04',
    pillar: 'BRANDING',
    title: 'Brand Strategy & Visual Identity',
    tagline: 'Brand Identity • Visual Identity • Brand Strategy • Digital Branding',
    summary:
      'Building memorable, cohesive brand foundations that establish trust, elevate perceived market value, and resonate across all customer touchpoints.',
    capabilities: [
      'Complete Brand Identity & Visual Guideline Systems',
      'Logo Marks, Monograms & Adaptive Brand Assets',
      'Brand Positioning, Tone of Voice & Messaging Strategy',
      'Digital Branding across Websites, Socials & Products',
      'Personal & Business Brand Architecture',
    ],
    deliverables: [
      'Comprehensive Brand Guideline Book',
      'Primary & Secondary Logo Assets',
      'Color Palette & Font Hierarchy Rules',
      'Stationery, Cards & Digital Brand Assets',
      'Brand Story & Messaging Guidelines',
    ],
    tools: ['Brand Strategy', 'Visual Identity Systems', 'Typography Specimen', 'Logo Suites'],
    icon: 'Sparkles',
    accentColor: 'amber',
  },
];

export const PROJECTS: Project[] = [
  // ==========================================
  // DEVELOPMENT PILLAR
  // ==========================================
  {
    id: 'avishkaar-academy',
    number: '01',
    title: 'Avishkaar Academy',
    pillar: 'development',
    categoryBadge: 'WEB DEVELOPMENT',
    badge: 'Live Client Website',
    category: 'Education / E-Learning',
    projectType: 'Freelance Web Development',
    role: 'Web Design • Frontend Development • Responsive Development',
    shortDescription:
      'Avishkaar Academy — A modern education-focused website designed and developed to present the academy, its offerings, and information through a responsive digital experience.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'EmailJS', 'Responsive Web Design'],
    highlights: [
      'Live production deployment at avishkaaracademy.in',
      'Curriculum tracks for Boards, JEE, NEET, CET, NDA & Merchant Navy',
      'Interactive Demo Class booking funnel with automated notifications',
      'Wall of Fame celebrating academic toppers & achievers',
      'Fully responsive across mobile, tablet, and desktop viewports',
      'Direct mobile phone inquiry integration (7021390635)',
    ],
    image: '/src/assets/images/avishkaar_academy_preview_1790959339795.jpg',
    liveUrl: 'https://avishkaaracademy.in/',
    responsiveImage: '/src/assets/images/avishkaar_responsive_devices_1790959353315.jpg',
    caseStudy: {
      overview:
        'Avishkaar Academy is an established coaching institute based in Vikhroli (West), Mumbai, providing comprehensive academic coaching for Class 5th to 12th alongside specialized competitive entrance training for JEE, NEET, MHT-CET, NDA, and Merchant Navy (IMU-CET). The website was designed and engineered as a central digital platform to present offerings, faculty, and achievers with a seamless demo booking flow.',
      problem:
        'Avishkaar Academy required a modern, authoritative digital presence to replace fragmented local flyers, communicate disparate learning paths with clarity, and provide an intuitive mobile-friendly inquiry mechanism.',
      approach:
        'Conducted structured requirement gathering with academy management. Developed a custom, high-contrast visual design rooted in institutional trust (navy blue with prestige gold accents), structured clear modular course sections, and built a lightweight responsive frontend with interactive demo booking.',
      myRole: {
        title: 'Freelance Web Developer',
        responsibilities: [
          'Website visual design & layout composition',
          'Frontend development & responsive implementation',
          'Interactive UI implementation & modal/drawer navigation',
          'Information architecture across all course tracks',
          'Form integration with EmailJS for instant demo inquiry dispatch',
          'Direct client collaboration and live deployment at avishkaaracademy.in',
        ],
      },
      websiteExperience: {
        description:
          'The website is architected into focused sequential narrative sections based on the live site at avishkaaracademy.in:',
        sections: [
          {
            name: 'Homepage Hero',
            detail:
              'Headline: "Your Gateway to Academic Excellence & Dream Careers", featuring real-time statistics counter and direct "Book a Free Demo Class" CTA.',
          },
          {
            name: 'Dynamic Notices Banner',
            detail: 'Admissions and batch update announcements displayed at the top of the interface.',
          },
          {
            name: 'Wall of Fame / Achievers',
            detail:
              'Showcases verified board exam and competitive entrance toppers with scores and ranks.',
          },
          {
            name: 'Academic Programs (School & Boards)',
            detail:
              'Class 5th to 10th (State Board, CBSE, ICSE) and 11th & 12th Science and Commerce coaching modules.',
          },
          {
            name: 'Competitive & Defence Careers',
            detail:
              'Specialized preparation tracks for JEE Main/Advanced, NEET Medical, MHT-CET, NDA, and Merchant Navy (IMU-CET).',
          },
          {
            name: 'Interactive Demo Booking & Contact',
            detail:
              'Full inquiry form for booking free trial sessions, direct phone click-to-dial (7021390635), and physical address in Vikhroli (W), Mumbai with embedded map.',
          },
        ],
      },
      designAndUI: {
        description:
          'The design system combines collegiate authority with clean modern agency responsiveness:',
        palette: [
          { name: 'Deep Institutional Navy', hex: '#0A1A35', note: 'Primary branding conveying discipline and trust' },
          { name: 'Prestige Academic Gold', hex: '#D4AF37', note: 'Accent color for primary buttons and honors' },
          { name: 'Crisp Card White', hex: '#FFFFFF', note: 'Content containers for high contrast and readability' },
          { name: 'Charcoal Slate', hex: '#1E293B', note: 'Readable typography with WCAG AA compliant contrast' },
        ],
        typography: [
          'Playfair Display — Sophisticated serif used for authoritative academic headlines',
          'Inter — Crisp, highly legible grotesque sans-serif for body text, course lists, and navigation',
          'IBM Plex Mono — Modern monospaced font for badges, dates, and statistical metrics',
        ],
        layoutNotes: [
          'High-contrast visual hierarchy guiding visitors directly to free demo registration',
          'Card-based grid modularity allowing easy addition of new course batches',
          'Spacious vertical padding ensuring zero clutter on both desktop and mobile screens',
        ],
      },
      technologiesUsed: [
        'Semantic HTML5 Architecture',
        'Modern CSS3 with CSS Custom Properties',
        'Vanilla JavaScript (ES6+) for interactive DOM, counters, and scroll reveal',
        'EmailJS Browser SDK for instant automated demo booking notifications',
        'Google Fonts (Playfair Display, Inter, IBM Plex Mono)',
        'Custom Mobile-First Responsive Layout Engine',
      ],
      techStackStatus: 'Technology Stack — To Be Updated',
      keyFeatures: [
        'Fully responsive mobile, tablet, and desktop experience',
        'Complete course breakdowns across Boards, JEE, NEET, CET, NDA, and Merchant Navy',
        'Interactive "Book Free Demo" inquiry flow with instant submission confirmation',
        'Animated statistical impact counters that trigger upon scrolling into viewport',
        'Interactive Achiever Wall of Fame celebrating high-scoring students',
        'Direct phone link (7021390635) for instant parent consultations on smartphones',
        'Integrated location details for the physical academy campus in Vikhroli (W), Mumbai',
      ],
      developmentProcess: [
        'Client discovery meeting to map all course tracks, target age groups, and admission timelines',
        'Information architecture planning ensuring quick access to both board exam prep and defence careers',
        'Design mockup iteration focusing on deep navy and gold palette aligned with academy prestige',
        'Frontend development adhering to clean semantic HTML, modular CSS, and responsive breakpoints',
        'Integration of interactive demo inquiry form with automated notification handling',
        'Live domain deployment and DNS setup for avishkaaracademy.in',
      ],
      responsiveDesign: {
        description:
          'Avishkaar Academy was engineered mobile-first to ensure parents browsing on WhatsApp links or mobile search experience zero friction:',
        viewports: [
          {
            device: 'Desktop (1200px+)',
            adaptation:
              'Full navigation bar with quick-dial phone and CTA, multi-column program grid, and expanded achiever photo cards.',
          },
          {
            device: 'Tablet (768px – 1024px)',
            adaptation:
              'Two-column fluid card layout, balanced typography scaling, and streamlined section spacing.',
          },
          {
            device: 'Mobile (320px – 767px)',
            adaptation:
              'Touch-optimized drawer menu, full-width thumb-friendly buttons, single-column stacked forms, and direct click-to-call integration.',
          },
        ],
      },
      developmentHighlights: [
        {
          title: 'Responsive Experience',
          description:
            'Engineered to provide a consistent, high-speed experience across smartphones, tablets, and wide desktop displays.',
        },
        {
          title: 'Modern Interface',
          description:
            'Structured around strong visual hierarchy, accessible typography, and intuitive navigation that guides parents to demo enrollment.',
        },
        {
          title: 'Client-Focused Development',
          description:
            'Built directly around Avishkaar Academy’s specific institutional goals, admission cycles, and diverse student curriculum tracks.',
        },
      ],
      finalResult: {
        headline: 'A Digital Platform Built for Learning',
        summary:
          'Avishkaar Academy now operates with a modern, high-credibility digital portal that effectively showcases its comprehensive educational offerings, honors student excellence, and generates consistent demo class admissions inquiries.',
        liveUrl: 'https://avishkaaracademy.in/',
      },
      outcome:
        'Live, production-grade education website active at avishkaaracademy.in, serving students and parents across Mumbai.',
      placeholders: {
        liveUrl: 'https://avishkaaracademy.in/',
        clientName: 'Avishkaar Academy, Vikhroli (W), Mumbai',
      },
    },
  },
  {
    id: 'gesture-medical-chatbot',
    number: '02',
    title: '3D Hand-Gesture Interaction System & Medical Chatbot',
    pillar: 'development',
    categoryBadge: '3D / WEBGL & AI',
    badge: '3rd Prize — Regional Hackathon',
    category: 'Computer Vision & Interactive 3D',
    projectType: 'Engineering Prototype',
    role: 'Full-Stack Developer • 3D & AI Integration',
    shortDescription:
      'An interactive 3D particle application using Three.js and MediaPipe for real-time, touchless hand-gesture interaction, combined with an AI-driven medical chatbot capable of handling real-time clinical queries.',
    technologies: ['Python', 'Three.js', 'MediaPipe', 'NLP', 'JavaScript', 'WebGL'],
    highlights: [
      'Real-time gesture interaction',
      'Computer vision tracking',
      'Interactive 3D particles',
      'AI-driven chatbot',
      'NLP processing',
      'Hardware-accelerated WebGL',
    ],
    image: '/src/assets/images/project_gesture_ai_1790958350597.jpg',
    caseStudy: {
      overview:
        'Award-winning multidisciplinary solution developed for a regional hackathon, bridging touchless computer vision interfaces with an intelligent medical query assistant.',
      problem:
        'Sterile environments and clinical setups require touchless computational interfaces to reduce contamination risks while maintaining fast access to clinical intelligence.',
      approach:
        'Coupled browser-accessible WebGL rendering via Three.js with MediaPipe real-time hand landmark extraction. Simultaneously deployed an NLP-powered conversational model to answer clinical inquiries smoothly.',
      technologiesUsed: [
        'MediaPipe for 21 3D hand landmarks',
        'Three.js / WebGL for particle cloud physics',
        'Python NLP engine for clinical response synthesis',
        'JavaScript client-side coordinate synchronization',
      ],
      keyFeatures: [
        'Real-time touchless hand gesture recognition via webcam',
        'Dynamic 3D particle field reacting to hand velocity and expansion',
        'NLP-based medical chatbot handling triage inquiries and clinical FAQs',
        'Zero external hardware sensors required; runs via browser & webcam',
      ],
      developmentProcess: [
        'Prototyped gesture detection pipeline using MediaPipe Python & JS bindings',
        'Built custom Three.js particle canvas with interactive repulsion and attraction vectors',
        'Trained and structured conversational NLP intents for medical guidance',
        'Optimized frame rates and client latency for responsive live demonstration',
      ],
      outcome:
        'Awarded 3rd Prize at the Regional Hackathon for exceptional integration of computer vision, interactive 3D graphics, and real-time medical utility.',
      placeholders: {
        github: 'https://github.com/aryanjadhav917',
      },
    },
  },
  {
    id: 'hospital-management-system',
    number: '03',
    title: 'Hospital Management System',
    pillar: 'development',
    categoryBadge: 'DATABASE & MANAGEMENT SYSTEM',
    category: 'Relational Database Architecture',
    projectType: 'Database Architecture',
    role: 'Database Designer & SQL Developer',
    shortDescription:
      'A structured hospital management database designed around patient records, medical staff departments, and appointment management with rigorous data integrity.',
    technologies: ['MySQL', 'SQL', 'Relational Database Design'],
    highlights: [
      'Relational database architecture',
      'Patient records & medical history',
      'Staff & doctor department rosters',
      'Appointment scheduling & status management',
      'Optimized SQL query performance',
      'Data integrity & duplicate prevention',
    ],
    image: '/src/assets/images/project_hospital_db_1790958367976.jpg',
    caseStudy: {
      overview:
        'Comprehensive relational database architecture engineering a clinical operational system that unifies patient admissions, departmental staff assignments, and patient appointments.',
      problem:
        'Healthcare institutions face operational bottlenecks and compliance risks when patient records, department rosters, and appointment slots are fragmented or duplicate-prone.',
      approach:
        'Designed a normalized relational schema with strict foreign key constraints, indexing strategies, and modular tables for patients, medical staff, departments, treatments, and appointments.',
      technologiesUsed: [
        'MySQL Database Engine',
        'Advanced SQL Query Formulation & Procedures',
        'Entity-Relationship (ER) Modeling',
        'Relational Normalization (3NF)',
      ],
      keyFeatures: [
        'Centralized patient records tracking medical logs and admissions',
        'Departmental staff management linking doctors to specialties',
        'Structured appointment scheduling preventing double-booking',
        'Optimized analytical queries for department workload and patient flow',
        'Enforced referential integrity preventing orphan records',
      ],
      developmentProcess: [
        'Conducted clinical domain analysis mapping patient-to-doctor workflows',
        'Drafted conceptual Entity Relationship diagrams and resolved many-to-many relationships',
        'Implemented SQL schema with constraints, auto-increment keys, and foreign keys',
        'Wrote and validated complex JOIN queries, views, and data integrity tests',
      ],
      outcome:
        'Robust database structure ensuring zero record duplication, swift appointment lookups, and clear relational consistency.',
      placeholders: {
        github: 'https://github.com/aryanjadhav917',
      },
    },
  },
  {
    id: 'jarvis-voice-assistant',
    number: '04',
    title: '"Jarvis" Style Voice-Responsive Assistant',
    pillar: 'development',
    categoryBadge: 'AUTOMATION & PYTHON',
    category: 'Desktop Automation & Speech AI',
    projectType: 'Desktop Software',
    role: 'Python Developer & Automation Engineer',
    shortDescription:
      'A desktop voice assistant that converts verbal commands into automated operating-system actions and daily computing workflows.',
    technologies: ['Python', 'Speech Recognition APIs', 'OS Automation'],
    highlights: [
      'Verbal voice commands',
      'Speech recognition processing',
      'Desktop & OS automation',
      'Python scripting',
      'Hands-free application control',
    ],
    image: '/src/assets/images/project_jarvis_voice_1790958383453.jpg',
    caseStudy: {
      overview:
        'A Python-powered desktop voice assistant created to execute automated system commands, launch applications, retrieve information, and handle routine OS tasks hands-free.',
      problem:
        'Repetitive desktop workflows, file navigation, and multi-step OS operations consume significant daily developer and user time when performed manually.',
      approach:
        'Built a modular Python engine utilizing speech recognition pipelines to capture microphone input, parse verbal intents, and map commands to OS-level automated scripts and APIs.',
      technologiesUsed: [
        'Python 3',
        'SpeechRecognition Library',
        'OS & Subprocess System Automations',
        'Text-to-Speech (TTS) Feedback Engines',
      ],
      keyFeatures: [
        'Real-time voice capture and intent parsing',
        'Automated execution of operating system actions (app launch, system control)',
        'Auditory confirmation and vocal response loop',
        'Extensible command architecture allowing custom developer macros',
      ],
      developmentProcess: [
        'Engineered microphone audio capture and background ambient noise calibration',
        'Integrated speech-to-text API endpoints with error fallback',
        'Constructed custom command dispatcher mapping keywords to system actions',
        'Implemented verbal confirmation feedback with responsive turnaround times',
      ],
      outcome:
        'Reliable desktop assistant streamlining daily computing tasks through natural conversational voice triggers.',
      placeholders: {
        github: 'https://github.com/aryanjadhav917',
      },
    },
  },

  // ==========================================
  // DESIGN & CREATIVE PILLAR
  // ==========================================
  {
    id: 'saas-dashboard-design-system',
    number: '05',
    title: 'SaaS Analytics Dashboard & UI/UX Design System',
    pillar: 'design',
    categoryBadge: 'UI/UX DESIGN',
    badge: 'Design System',
    category: 'UI/UX Design & Design System',
    projectType: 'Interface & Interaction Design',
    role: 'Lead UI/UX Designer • Design System Architect',
    shortDescription:
      'A comprehensive UI/UX design architecture and modular component library for complex analytics dashboards, focusing on data density, visual hierarchy, and accessible workflows.',
    technologies: ['Figma', 'UI/UX Design', 'Design Tokens', 'Wireframing', 'Responsive UI'],
    highlights: [
      'Modular atomic design system with 120+ reusable components',
      'High-density data visualization widgets and table patterns',
      'Dark and light mode accessible color token palettes (WCAG AAA)',
      'Frictionless customer onboarding and filtering workflows',
      'Interactive Figma prototypes with realistic micro-animations',
    ],
    image: '/src/assets/images/design_ui_showcase_1790960090288.jpg',
    caseStudy: {
      overview:
        'Engineered a complete UI/UX design system and web/mobile dashboard interface designed to streamline complex business data, subscription metrics, and team collaboration into clear, decision-oriented dashboards.',
      problem:
        'Enterprise SaaS users suffer from visual fatigue and cluttered interfaces when trying to monitor metrics across multiple fragmented tabular screens.',
      approach:
        'Adopted atomic design principles: crafted clear typographic scales, unified color tokens, responsive card modules, and contextual drawer modals to make high-density analytics intuitive.',
      technologiesUsed: ['Figma Design System', 'Component Variant Architecture', 'Auto-Layout 5.0', 'WCAG Contrast Testing'],
      keyFeatures: [
        'Adaptive card layouts with configurable metric widgets',
        'Keyboard-accessible table filters with multi-attribute sorting',
        'Pre-built presentation templates and client dashboard views',
        'Comprehensive style guide detailing spacing, typography, and states',
      ],
      developmentProcess: [
        'User journey mapping and information architecture wireframing',
        'Design token definition for typography, color semantic roles, and elevation',
        'Component prototyping with full interactive state variants',
        'User testing sessions and developer design-token documentation handoff',
      ],
      outcome:
        'Delivered an enterprise-ready UI/UX design foundation that drastically reduces front-end implementation time and improves user task completion rates.',
      placeholders: {
        clientName: 'SaaS Analytics Platform',
      },
    },
  },
  {
    id: 'marketing-creatives-pitch-deck',
    number: '06',
    title: 'Marketing Creatives & Executive Pitch Deck Suite',
    pillar: 'design',
    categoryBadge: 'MARKETING CREATIVES',
    category: 'Graphic Design & Presentations',
    projectType: 'Creative Direction & Collateral',
    role: 'Creative Designer • Presentation Specialist',
    shortDescription:
      'High-impact visual marketing collateral, social media creative systems, and executive pitch decks engineered to engage investors and drive high-intent prospect conversions.',
    technologies: ['Graphic Design', 'Figma', 'Pitch Deck Design', 'Social Creatives', 'Visual Storytelling'],
    highlights: [
      'Investor-ready 18-slide pitch deck structure with narrative pacing',
      'Omnichannel social media ad creative templates (Meta, LinkedIn, Instagram)',
      'Data-dense infographics and financial diagram visualizations',
      'Modular templates for quick client turnaround and brand consistency',
    ],
    image: '/src/assets/images/branding_identity_mockup_1790960130120.jpg',
    caseStudy: {
      overview:
        'Designed high-end marketing creative assets and a strategic investor pitch deck for high-growth ventures, harmonizing corporate typography, persuasive narrative flow, and high-conversion social ad templates.',
      problem:
        'Founders and marketers often present fragmented visual materials that fail to capture investor interest or convert paid social traffic into qualified inquiries.',
      approach:
        'Combined strategic storytelling with disciplined typography and bold negative space, creating clean template suites that convey authority and drive action.',
      technologiesUsed: ['Presentation Design Systems', 'Figma Auto-Layout Templates', 'Vector Illustrations', 'Ad Asset Specifications'],
      keyFeatures: [
        'Structured pitch deck with problem, solution, market size, and traction slides',
        'Multi-aspect ratio ad creative sets optimized for Meta Feed and Stories',
        'Clear visual cues and bold callout cards for key statistics',
      ],
      developmentProcess: [
        'Discovery interview on target audience, investor expectations, and ad goals',
        'Storyline outline and slide hierarchy wireframing',
        'High-fidelity visual design, asset export, and reusable template setup',
      ],
      outcome:
        'Delivered a cohesive visual deck and ad suite that successfully elevated brand credibility and improved audience engagement.',
      placeholders: {
        clientName: 'Growth Venture Collateral',
      },
    },
  },

  // ==========================================
  // MARKETING & GROWTH PILLAR
  // ==========================================
  {
    id: 'performance-lead-gen-campaign',
    number: '07',
    title: 'Performance Marketing & Lead Generation Funnel',
    pillar: 'marketing',
    categoryBadge: 'DIGITAL MARKETING',
    badge: 'Growth Funnel',
    category: 'Paid Advertising & Lead Generation',
    projectType: 'Paid Media & Conversion Campaign',
    role: 'Performance Marketer • Funnel Strategist',
    shortDescription:
      'Data-driven Meta & Google Ads performance campaigns paired with optimized landing page funnels, delivering qualified leads and maximizing return on ad spend (ROAS).',
    technologies: ['Meta Ads Manager', 'Google Ads', 'Lead Generation', 'A/B Testing', 'Conversion Optimization'],
    highlights: [
      'Multi-tier audience segmentation (cold prospecting, warm remarketing, lookalikes)',
      'Landing page conversion rate optimization (CRO) boosting lead captures',
      'Automated instant lead notification dispatch to sales reps',
      'Real-time ad spend and Cost Per Lead (CPL) performance dashboard',
      'Creative A/B testing framework evaluating copy and visual hooks',
    ],
    image: '/src/assets/images/marketing_growth_preview_1790960114523.jpg',
    caseStudy: {
      overview:
        'End-to-end performance marketing campaign architecture designed to capture high-intent prospective customers through targeted Meta & Google Ads funnels and conversion-optimized landing pages.',
      problem:
        'Generic paid ad campaigns often suffer from escalating cost per lead (CPL), poor audience relevance, and low landing page conversion rates.',
      approach:
        'Engineered a structured full-funnel strategy: high-intent keyword search campaigns and demographic Meta interest targeting, routed to rapid-loading landing pages with clear value propositions and low-friction inquiry forms.',
      technologiesUsed: ['Meta Ads API', 'Google Ads Keyword Planner', 'Conversion Tracking Pixels', 'Funnel Analytics'],
      keyFeatures: [
        'Granular ad group segmentation matching search intent with dedicated headlines',
        'Dynamic creative testing identifying top-performing copy hooks and visual styles',
        'Automated CRM and email notification pipeline upon lead submission',
        'Weekly optimization routines pruning non-converting keywords and ad fatigue',
      ],
      developmentProcess: [
        'Audience persona research and competitor ad intelligence mapping',
        'Campaign structure design, tracking pixel setup, and conversion event verification',
        'Creative production and copywriting tailored to pain points and objections',
        'Live launch, continuous bid optimization, and weekly performance reporting',
      ],
      outcome:
        'Achieved significant reductions in Cost Per Lead (CPL) and established a predictable, scalable lead generation engine for client admissions.',
      placeholders: {
        clientName: 'Education & Professional Services Funnel',
      },
    },
  },
  {
    id: 'social-media-content-growth',
    number: '08',
    title: 'Social Media Growth & Content Strategy',
    pillar: 'marketing',
    categoryBadge: 'SOCIAL MEDIA MARKETING',
    category: 'Organic Social Media & Brand Marketing',
    projectType: 'Social Media Management & Strategy',
    role: 'Growth Strategist • Content Director',
    shortDescription:
      'A structured organic social media growth and content strategy system combining educational carousels, video reels, and brand storytelling to build authority and community.',
    technologies: ['Content Strategy', 'Social Media Management', 'Brand Marketing', 'Growth Analytics'],
    highlights: [
      'Editorial calendar framework balancing educational, proof, and promotional pillars',
      'High-retention carousel slide templates and hook-first copywriting',
      'Engagement routines and community management strategies',
      'Performance tracking on impressions, profile visits, and inbound inquiries',
    ],
    image: '/src/assets/images/design_ui_showcase_1790960090288.jpg',
    caseStudy: {
      overview:
        'Developed a holistic social media content engine and visual storytelling blueprint to transform passive social followers into engaged, high-intent client prospects.',
      problem:
        'Inconsistent posting, lack of clear visual identity, and generic content result in stagnant social channels that fail to generate inbound business inquiries.',
      approach:
        'Created a three-pillar content engine (Authority, Social Proof, Conversion), backed by branded graphic templates and disciplined scheduling.',
      technologiesUsed: ['Content Calendar Architecture', 'Copywriting Frameworks', 'Social Metrics Tracking', 'Visual Asset Templates'],
      keyFeatures: [
        'Weekly thematic scheduling ensuring consistent presence across platforms',
        'Hook-to-action copywriting tailored to short-form social attention spans',
        'Direct inquiry funnel driving profile visitors to consultation links',
      ],
      developmentProcess: [
        'Channel audit and competitor benchmark analysis',
        'Content pillars and branded visual template design',
        'Batch production of educational carousels and announcements',
        'Bi-weekly metrics review optimizing for engagement and profile conversion',
      ],
      outcome:
        'Substantially increased brand organic reach, improved profile engagement, and generated organic inbound inquiries.',
      placeholders: {
        clientName: 'Digital Growth Program',
      },
    },
  },

  // ==========================================
  // BRANDING PILLAR
  // ==========================================
  {
    id: 'visual-identity-brand-strategy',
    number: '09',
    title: 'Visual Identity & Digital Brand Strategy',
    pillar: 'branding',
    categoryBadge: 'BRAND STRATEGY & IDENTITY',
    badge: 'Comprehensive System',
    category: 'Brand Identity & Visual Strategy',
    projectType: 'Brand Strategy & Visual Guidelines',
    role: 'Brand Strategist • Visual Identity Designer',
    shortDescription:
      'A complete visual identity system and strategic brand guideline suite uniting typography, color theory, logo marks, and digital brand application across all customer touchpoints.',
    technologies: ['Brand Strategy', 'Visual Identity', 'Typography Hierarchy', 'Logo Systems', 'Digital Branding'],
    highlights: [
      'Primary, secondary, and sub-mark responsive logo variations',
      'Semantic color system engineered for digital screens and print materials',
      'Clear typographic hierarchy guidelines with web-font pairings',
      'Brand positioning statement, core values, and voice tone guidelines',
      'Complete brand asset guideline book with clear do’s and don’ts',
    ],
    image: '/src/assets/images/branding_identity_mockup_1790960130120.jpg',
    caseStudy: {
      overview:
        'Crafted an authoritative brand identity and strategic positioning guidelines for modern digital businesses, ensuring absolute visual consistency across digital websites, mobile apps, marketing campaigns, and print collateral.',
      problem:
        'Emerging brands struggle with disjointed visual presentations across marketing channels, diluting customer trust and lowering perceived pricing power.',
      approach:
        'Conducted deep market and audience positioning research to develop a timeless visual identity rooted in clarity, premium restraint, and flexible digital-first adaptability.',
      technologiesUsed: ['Brand Archetype Strategy', 'Vector Logo Engineering', 'Digital Color Specification', 'Guideline Documentation'],
      keyFeatures: [
        'Responsive logo suite optimized from 16px favicons to billboard signage',
        'Tailored color palette with precise HEX, RGB, and CMYK values',
        'Editorial typography pairing delivering instant authority and readability',
        'Standardized mockups for stationery, social banners, and pitch decks',
      ],
      developmentProcess: [
        'Brand strategy workshop defining mission, audience, and differentiation',
        'Exploratory moodboards, logo concept drafting, and refinement',
        'Systematization of color palette, type rules, and component usage',
        'Comprehensive 30-page brand guideline handbook delivery',
      ],
      outcome:
        'Established a timeless, cohesive brand identity that elevated market positioning and unified all customer-facing touchpoints.',
      placeholders: {
        clientName: 'Digital Brand System',
      },
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Web & Software Development',
    items: ['Website Development', 'React', 'JavaScript', 'HTML5/CSS3', 'Python', 'Three.js / WebGL', 'SQL & MySQL'],
    description: 'Modern front-end engineering, responsive architecture, 3D WebGL, and robust databases.',
  },
  {
    category: 'UI/UX & Creative Design',
    items: ['UI/UX Design', 'Figma', 'Design Systems', 'Graphic Design', 'Pitch Decks', 'Marketing Creatives'],
    description: 'User-centered interface design, component libraries, typography hierarchy, and branded presentations.',
  },
  {
    category: 'Digital Marketing & Growth',
    items: ['Meta Ads', 'Google Ads', 'Lead Generation', 'Social Media Marketing', 'Conversion Optimization', 'A/B Testing'],
    description: 'Data-driven paid advertising, high-intent lead funnels, and performance campaign management.',
  },
  {
    category: 'Branding & Identity',
    items: ['Brand Strategy', 'Visual Identity', 'Logo Systems', 'Brand Guidelines', 'Digital Branding'],
    description: 'Strategic market positioning, timeless visual identity guidelines, and cohesive brand systems.',
  },
  {
    category: 'Professional Execution',
    items: ['Direct Client Collaboration', 'Agile Prototyping', 'Technical Documentation', 'End-to-End Delivery'],
    description: 'Clear client communication, disciplined timelines, and unified execution across tech and design.',
  },
];

export const TECH_MARQUEE = [
  'Website Development',
  'UI/UX Design',
  'Digital Marketing',
  'Brand Strategy',
  'React',
  'Meta Ads',
  'Google Ads',
  'Three.js & WebGL',
  'Figma Design Systems',
  'Python Automation',
  'Lead Generation',
  'Visual Identity',
  'SQL Databases',
  'Conversion Optimization',
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover & Strategize',
    subtitle: 'Vision, Audience & Market',
    description:
      'We begin with a focused discovery session to understand your business objectives, target audience, competitive landscape, and digital growth priorities.',
    activities: [
      'Core business & market analysis',
      'Target customer & audience mapping',
      'Strategy formulation across Tech, Design & Growth',
      'Scope definition & milestone timeline',
    ],
  },
  {
    step: '02',
    title: 'Design & Architecture',
    subtitle: 'Brand, UX & Technical Foundations',
    description:
      'We establish the visual identity, wireframes, user journeys, database schemas, and marketing funnel structure before writing code or launching campaigns.',
    activities: [
      'UI/UX wireframes & design systems',
      'Brand identity & visual asset planning',
      'Technical architecture & database schemas',
      'Marketing funnel & tracking setup plan',
    ],
  },
  {
    step: '03',
    title: 'Build & Produce',
    subtitle: 'Precision Development & Content Creation',
    description:
      'We build clean, responsive web solutions, implement interactive elements, design high-converting ad creatives, and configure marketing systems.',
    activities: [
      'Responsive web & software development',
      'Design asset production & collateral creation',
      'Ad creative production & copy drafting',
      'Continuous client milestone review',
    ],
  },
  {
    step: '04',
    title: 'Launch, Measure & Grow',
    subtitle: 'Deployment, Analytics & Optimization',
    description:
      'Rigorous cross-device quality checks, production deployment, campaign activation, live performance tracking, and iterative growth optimization.',
    activities: [
      'Live domain & cloud deployment',
      'Paid campaign activation & conversion tracking',
      'Performance analytics & A/B testing',
      'Ongoing refinement & client handoff',
    ],
  },
];

export const EDUCATION = [
  {
    institution: 'Sanjay Ghodawat University',
    degree: 'Bachelor of Computer Applications (BCA)',
    location: 'Kolhapur, Maharashtra',
    period: 'November 2025 – Present',
    status: 'Current Student',
    highlights: 'Focus on advanced software engineering, database architectures, and interactive digital systems.',
  },
  {
    institution: 'K.V.K. Ghatkopar Sarvajanik High School & College',
    degree: '12th Standard (Higher Secondary Certificate)',
    location: 'Mumbai, Maharashtra',
    period: 'Graduated 2024',
    status: 'Completed',
    highlights: 'Strong foundation in mathematics, analytical thinking, and scientific principles.',
  },
];

export const ACHIEVEMENTS = [
  {
    title: '3rd Prize — Regional Hackathon',
    category: 'Competitive Engineering Award',
    description:
      'Recognized for developing an integrated touchless system combining AI frameworks, real-time computer vision (MediaPipe), interactive 3D particle graphics (Three.js), and a practical medical triage chatbot.',
    highlights: ['Multi-disciplinary technology integration', 'Real-time gesture interaction', 'Awarded 3rd Prize'],
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: 'Technology + Design + Marketing',
    description:
      'Eliminate the friction of hiring separate developers, designers, and marketers. You get an integrated partner who builds the tech, designs the visuals, and understands the growth funnel.',
    icon: 'Sparkles',
  },
  {
    title: 'Direct Client Collaboration',
    description:
      'No intermediaries or lost context. You communicate directly with the creator who understands your vision and executes with precision.',
    icon: 'Users',
  },
  {
    title: 'Results & Conversion Focused',
    description:
      'Every website, design asset, and ad campaign is engineered around measurable outcomes: higher conversions, clear brand perception, and real business growth.',
    icon: 'TrendingUp',
  },
  {
    title: 'End-to-End Digital Execution',
    description:
      'From the initial brand identity and Figma prototype to responsive code deployment, SEO, and paid ad lead generation.',
    icon: 'Compass',
  },
  {
    title: 'Modern Tools & Rapid Iteration',
    description:
      'Leverages modern design systems, clean React architectures, Python, and data-driven ad managers for speed, quality, and adaptability.',
    icon: 'Code',
  },
];

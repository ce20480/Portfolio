// ===== CARD TYPES =====

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  specialization?: string;
  grade?: string;
  dateRange: string;
  activities?: string[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  type: "full-time" | "part-time" | "self-employed";
  dateRange: string;
  location?: string;
  description: string;
  highlights?: string[];
  isCurrent: boolean;
}

export interface BackgroundData {
  headline: string;
  subheadline: string;
  education: EducationEntry[];
  experience: ExperienceEntry[];
}

export interface SocialLink {
  platform: "github" | "linkedin" | "twitter" | "youtube";
  url: string;
  username: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
    app?: string;
  };
  award?: string;
  featured: boolean;
}

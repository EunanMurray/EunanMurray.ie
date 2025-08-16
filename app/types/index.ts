export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    category: string;
    status: string;
    year: string;
    features: string[];
    challenges: string[];
    image: string;
    color: string;
  }
  
  export interface Skill {
    name: string;
    level: number;
    years?: number;
    projects?: number;
    icon: string;
    category?: string;
  }
  
  export interface SkillCategory {
    id: string;
    name: string;
    icon: string;
    color: string;
    skills: Skill[];
  }
  
  export interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    duration: string;
    type: string;
    status: string;
    icon: string;
    color: string;
    description: string;
    responsibilities: string[];
    achievements: string[];
    skills: string[];
    highlights: Record<string, string>;
  }
  
  export interface ContactMethod {
    id: string;
    title: string;
    subtitle: string;
    value: string;
    icon: string;
    color: string;
    action: string | null;
    description: string;
  }
  
  export interface SocialLink {
    name: string;
    url: string;
    icon: string;
    color: string;
    description: string;
  }
  
  export interface QuickAction {
    title: string;
    description: string;
    icon: string;
    color: string;
    action: () => void;
  }
  
  export interface MousePosition {
    x: number;
    y: number;
  }
  
  export interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
  
  export interface EducationMilestone {
    year: string;
    title: string;
    institution: string;
    achievements: string[];
    icon: string;
  }
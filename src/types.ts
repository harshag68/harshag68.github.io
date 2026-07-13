export interface Skill {
  name: string;
  category: string;
  proficiency: number; // 0-100
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  duration: string;
  bullets: string[];
  techStack?: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  tech: string[];
  bullets: string[];
  github?: string;
  demoUrl?: string;
  image?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: Date;
  isPipelineTrigger?: boolean;
}

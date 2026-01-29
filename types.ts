
export interface WorkflowStep {
  label: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  tools: string[];
  challenge: string;
  solution: string;
  workflow: WorkflowStep[];
  color: 'blue' | 'green';
}

export interface MobileApp {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  features: string[];
  techStack: string[];
  image: string;
}

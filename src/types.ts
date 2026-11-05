export type DeviceCategory = 
  | 'smartphone' 
  | 'notebook' 
  | 'macbook' 
  | 'desktop' 
  | 'gpu' 
  | 'outro';

export interface ImportedProduct {
  id: string;
  name: string;
  category: 'smartphones' | 'apple' | 'notebooks' | 'audio' | 'acessorios';
  condition: 'Novo Lacrado' | 'Semi-Novo Grade A+';
  highlight: string;
  specs: string[];
  warranty: string;
  availability: 'Pronta Entrega' | 'Sob Encomenda';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  technicalDetails: string[];
  equipment: string;
  turnaroundTime: string;
  warranty: string;
  category: DeviceCategory;
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  protocol: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  device: string;
  issue: string;
  solution: string;
  quote: string;
  rating: number;
}

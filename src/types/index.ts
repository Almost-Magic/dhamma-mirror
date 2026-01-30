// Core types for Dhamma Mirror

export interface PaliTerm {
  term: string;
  pronunciation: string;
  meaning: string;
  etymology?: string;
  suttaRef?: string;
  category: PaliCategory;
  goenkaNote?: string;
  practiceRelevance?: string;
  related?: string[];
}

export type PaliCategory = 
  | 'core-concepts'
  | 'meditation'
  | 'psychology'
  | 'ethics'
  | 'path'
  | 'hindrances'
  | 'awakening-factors'
  | 'dependent-origination'
  | 'liberation'
  | 'general';

export interface Sutta {
  id: string;
  title: string;
  paliTitle?: string;
  nikaya: 'DN' | 'MN' | 'SN' | 'AN' | 'KN';
  reference: string;
  summary: string;
  themes: string[];
  practiceRelevance?: string;
}

export interface FlowStep {
  id: string;
  type: 'message' | 'options' | 'input' | 'reflection';
  content: string;
  options?: FlowOption[];
  next?: string | Record<string, string>;
  delay?: number;
}

export interface FlowOption {
  id: string;
  label: string;
  description?: string;
  next: string;
}

export interface StaticFlow {
  id: string;
  name: string;
  description: string;
  entryPoint: string;
  steps: Record<string, FlowStep>;
}

export interface VaultEntry {
  id: string;
  content: string;
  createdAt: Date;
  unlocksAt: Date;
  isUnlocked: boolean;
  context?: string;
  reflection?: string;
}

export interface PracticeLog {
  id: string;
  date: Date;
  didSit: boolean;
  duration?: number;
  quality?: number; // 1-10
  hindrances?: Hindrance[];
  awakeningFactors?: AwakeningFactor[];
  notes?: string;
}

export type Hindrance = 
  | 'sensual-desire'
  | 'ill-will'
  | 'sloth-torpor'
  | 'restlessness-worry'
  | 'doubt';

export type AwakeningFactor = 
  | 'mindfulness'
  | 'investigation'
  | 'energy'
  | 'joy'
  | 'tranquility'
  | 'concentration'
  | 'equanimity';

export interface JournalEntry {
  id: string;
  type: 'mirror' | 'vault' | 'practice' | 'reflection' | 'first-thought';
  content: string;
  createdAt: Date;
  metadata?: Record<string, unknown>;
}

export interface BodySensation {
  region: BodyRegion;
  quality: 'pleasant' | 'unpleasant' | 'neutral';
  intensity: number; // 1-5
  description?: string;
}

export type BodyRegion = 
  | 'head'
  | 'face'
  | 'throat'
  | 'chest'
  | 'stomach'
  | 'lower-abdomen'
  | 'shoulders'
  | 'arms'
  | 'hands'
  | 'upper-back'
  | 'lower-back'
  | 'legs'
  | 'feet';

export type EmotionalState = 
  | 'anger'
  | 'sadness'
  | 'anxiety'
  | 'hurt'
  | 'overwhelm'
  | 'guilt'
  | 'grief'
  | 'confusion'
  | 'other';

export type EntryPath = 
  | 'decision'
  | 'emotional-state'
  | 'moral-dilemma'
  | 'reaction'
  | 'practice';

export interface ConversationMessage {
  id: string;
  role: 'user' | 'mirror';
  content: string;
  timestamp: Date;
}

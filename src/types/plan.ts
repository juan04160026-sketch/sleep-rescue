import type { FlowAnswers, ScenarioKey } from './flow';

export type PlanItem = {
  label: string;
};

export type PlanSection = {
  key: string;
  title: string;
  items: PlanItem[];
};

export type PlanResult = {
  scenario: ScenarioKey;
  headline: string;
  summary: string;
  primaryAction: {
    title: string;
    description: string;
    href: '/calm';
  };
  sections: PlanSection[];
  calmPrompt: string;
  nextStepTitle: string;
  nextStepItems: string[];
};

export type PlanSession = {
  scenario: ScenarioKey;
  answers: FlowAnswers;
  updatedAt?: number;
};

export type FlowDraft = {
  scenario: ScenarioKey;
  step: number;
  answers: FlowAnswers;
  updatedAt: number;
};

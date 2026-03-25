export type ScenarioKey = 'fall-asleep' | 'wake-at-night' | 'reset-schedule';

export type QuestionOption = {
  label: string;
  value: string;
  hint?: string;
};

export type Question = {
  id: string;
  title: string;
  helper?: string;
  options: QuestionOption[];
};

export type ScenarioMeta = {
  key: ScenarioKey;
  title: string;
  shortTitle: string;
  description: string;
  lead: string;
  windowLabel: string;
  durationLabel: string;
  focusLabel: string;
};

export type FlowAnswers = Record<string, string>;

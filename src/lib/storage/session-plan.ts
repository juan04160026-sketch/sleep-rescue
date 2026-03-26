import type { FlowAnswers, ScenarioKey } from '@/types/flow';
import type { FlowDraft, PlanResult, PlanSession } from '@/types/plan';

const PLAN_KEY = 'sleep-rescue:plan';
const FLOW_DRAFT_PREFIX = 'sleep-rescue:flow:';
const scenarios: ScenarioKey[] = ['fall-asleep', 'wake-at-night', 'reset-schedule'];

function isObjectRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === 'object');
}

function isFlowAnswers(value: unknown): value is FlowAnswers {
  if (!isObjectRecord(value)) return false;
  return Object.values(value).every((item) => typeof item === 'string');
}

function isPlanSession(value: PlanSession | PlanResult | null): value is PlanSession {
  return Boolean(value && typeof value === 'object' && 'scenario' in value && 'answers' in value);
}

function isFlowDraft(value: unknown): value is FlowDraft {
  return Boolean(
    isObjectRecord(value) &&
      typeof value.scenario === 'string' &&
      typeof value.step === 'number' &&
      typeof value.updatedAt === 'number' &&
      isFlowAnswers(value.answers),
  );
}

function getDraftKey(scenario: ScenarioKey) {
  return `${FLOW_DRAFT_PREFIX}${scenario}`;
}

export function savePlan(session: PlanSession) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(
    PLAN_KEY,
    JSON.stringify({
      ...session,
      updatedAt: Date.now(),
    }),
  );
}

export function loadPlan(): PlanSession | null {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem(PLAN_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as PlanSession | PlanResult;
    if (isPlanSession(parsed)) return parsed;
    return null;
  } catch {
    return null;
  }
}

export function saveFlowDraft(draft: FlowDraft) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(getDraftKey(draft.scenario), JSON.stringify(draft));
}

export function loadFlowDraft(scenario: ScenarioKey): FlowDraft | null {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem(getDraftKey(scenario));
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (isFlowDraft(parsed)) return parsed;
    return null;
  } catch {
    return null;
  }
}

export function clearFlowDraft(scenario: ScenarioKey) {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(getDraftKey(scenario));
}

export function loadLatestFlowDraft(): FlowDraft | null {
  if (typeof window === 'undefined') return null;

  let latest: FlowDraft | null = null;

  for (const scenario of scenarios) {
    const draft = loadFlowDraft(scenario);
    if (!draft) continue;
    if (!latest || draft.updatedAt > latest.updatedAt) {
      latest = draft;
    }
  }

  return latest;
}

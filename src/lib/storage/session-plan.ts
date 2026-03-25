import type { PlanResult, PlanSession } from '@/types/plan';

const STORAGE_KEY = 'sleep-rescue:plan';

function isPlanSession(value: PlanSession | PlanResult | null): value is PlanSession {
  return Boolean(value && typeof value === 'object' && 'scenario' in value && 'answers' in value);
}

export function savePlan(session: PlanSession) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function loadPlan(): PlanSession | null {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as PlanSession | PlanResult;
    if (isPlanSession(parsed)) return parsed;
    return null;
  } catch {
    return null;
  }
}

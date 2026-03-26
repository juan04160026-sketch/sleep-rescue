import type { Metadata } from 'next';
import { PlanClient } from '@/components/plan/PlanClient';

export const metadata: Metadata = {
  title: 'Tonight’s plan',
  description: 'Review your personalized sleep rescue plan with primary action, next steps, and tomorrow guidance.',
  alternates: {
    canonical: 'https://sleep-rescue.pages.dev/plan',
  },
};

export default function PlanPage() {
  return <PlanClient />;
}

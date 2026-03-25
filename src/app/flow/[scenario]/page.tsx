import { notFound } from 'next/navigation';
import { FlowExperience } from '@/components/flow/FlowExperience';
import { getScenarioMap, isScenarioKey } from '@/lib/flows/scenarios';

export function generateStaticParams() {
  return Object.keys(getScenarioMap('en')).map((scenario) => ({ scenario }));
}

export default async function ScenarioFlowPage({
  params,
}: {
  params: Promise<{ scenario: string }>;
}) {
  const { scenario } = await params;

  if (!isScenarioKey(scenario)) {
    notFound();
  }

  return <FlowExperience scenario={scenario} />;
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FlowExperience } from '@/components/flow/FlowExperience';
import { FlowStructuredData } from '@/components/flow/FlowStructuredData';
import { getScenarioMap, isScenarioKey } from '@/lib/flows/scenarios';

export function generateStaticParams() {
  return Object.keys(getScenarioMap('en')).map((scenario) => ({ scenario }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ scenario: string }>;
}): Promise<Metadata> {
  const { scenario } = await params;
  if (!isScenarioKey(scenario)) {
    return {};
  }

  const meta = getScenarioMap('en')[scenario];
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://sleep-rescue.pages.dev/flow/${scenario}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://sleep-rescue.pages.dev/flow/${scenario}`,
    },
    twitter: {
      title: meta.title,
      description: meta.description,
    },
  };
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

  return (
    <>
      <FlowStructuredData scenario={scenario} />
      <FlowExperience scenario={scenario} />
    </>
  );
}

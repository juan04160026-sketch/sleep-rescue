import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FlowExperience } from '@/components/flow/FlowExperience';
import { FlowStructuredData } from '@/components/flow/FlowStructuredData';
import { getScenarioMap, isScenarioKey } from '@/lib/flows/scenarios';
import type { ScenarioKey } from '@/types/flow';

export function generateStaticParams() {
  return Object.keys(getScenarioMap('en')).map((scenario) => ({ scenario }));
}

const seoMetadata = {
  'fall-asleep': {
    title: "Can't fall asleep? Calm bedtime reset",
    description:
      "Get a calm bedtime reset when you can't fall asleep. Answer a few quick questions and follow a low-stimulation plan for tonight.",
  },
  'wake-at-night': {
    title: "Woke up at night and can't go back to sleep?",
    description:
      "Use a calmer wake-up reset when you wake in the night and can't go back to sleep. Keep stimulation low and follow one simple next step.",
  },
  'reset-schedule': {
    title: 'How to reset a broken sleep schedule',
    description:
      'Rebuild a broken sleep schedule with a simple wake-up anchor and a calmer reset plan for the next few days.',
  },
} satisfies Record<ScenarioKey, { title: string; description: string }>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ scenario: string }>;
}): Promise<Metadata> {
  const { scenario } = await params;
  if (!isScenarioKey(scenario)) {
    return {};
  }

  const meta = seoMetadata[scenario];
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

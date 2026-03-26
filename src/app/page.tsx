import type { Metadata } from 'next';
import { HeroScenarioPicker } from '@/components/home/HeroScenarioPicker';
import { HomeStructuredData } from '@/components/home/HomeStructuredData';

export const metadata: Metadata = {
  title: 'Sleep help for rough nights',
  description: 'Choose the closest sleep problem, answer a few focused questions, and get a calm plan for tonight.',
  alternates: {
    canonical: 'https://sleep-rescue.pages.dev',
  },
  openGraph: {
    title: 'Sleep help for rough nights',
    description: 'Choose the closest sleep problem, answer a few focused questions, and get a calm plan for tonight.',
    url: 'https://sleep-rescue.pages.dev',
  },
  twitter: {
    title: 'Sleep help for rough nights',
    description: 'Choose the closest sleep problem, answer a few focused questions, and get a calm plan for tonight.',
  },
};

export default function HomePage() {
  return (
    <>
      <HomeStructuredData />
      <HeroScenarioPicker />
    </>
  );
}

import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn what Sleep Rescue is for and how it helps people handle rough nights with less stimulation and clearer next steps.',
  alternates: {
    canonical: 'https://sleep-rescue.pages.dev/about',
  },
};

export default function AboutPage() {
  return <InfoPage kind="about" />;
}

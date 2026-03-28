import type { Metadata } from 'next';
import { GuidePage } from '@/components/seo/GuidePage';
import { GuideStructuredData } from '@/components/seo/GuideStructuredData';
import { getGuide } from '@/lib/seo/guides';

const guide = getGuide('how-to-fall-asleep');

export const metadata: Metadata = {
  title: guide.title,
  description: guide.description,
  alternates: {
    canonical: `https://sleep-rescue.pages.dev${guide.path}`,
  },
  openGraph: {
    title: guide.title,
    description: guide.description,
    url: `https://sleep-rescue.pages.dev${guide.path}`,
  },
  twitter: {
    title: guide.title,
    description: guide.description,
  },
};

export default function HowToFallAsleepPage() {
  return (
    <>
      <GuideStructuredData guide={guide} />
      <GuidePage guide={guide} />
    </>
  );
}

import type { Metadata } from 'next';
import { CalmClient } from '@/components/calm/CalmClient';

export const metadata: Metadata = {
  title: 'Calm breathing mode',
  description: 'A low-stimulation breathing mode for rough nights, wakeups, and sleep reset moments.',
  alternates: {
    canonical: 'https://sleep-rescue.pages.dev/calm',
  },
  openGraph: {
    title: 'Calm breathing mode',
    description: 'A low-stimulation breathing mode for rough nights, wakeups, and sleep reset moments.',
    url: 'https://sleep-rescue.pages.dev/calm',
  },
  twitter: {
    title: 'Calm breathing mode',
    description: 'A low-stimulation breathing mode for rough nights, wakeups, and sleep reset moments.',
  },
};

export default function CalmPage() {
  return <CalmClient />;
}

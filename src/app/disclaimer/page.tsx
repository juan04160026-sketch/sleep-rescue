import type { Metadata } from 'next';
import { InfoPage } from '@/components/shared/InfoPage';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Sleep Rescue offers general support for common sleep situations and is not a replacement for medical care or emergency help.',
  alternates: {
    canonical: 'https://sleep-rescue.pages.dev/disclaimer',
  },
};

export default function DisclaimerPage() {
  return <InfoPage kind="disclaimer" />;
}

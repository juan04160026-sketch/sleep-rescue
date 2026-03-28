import type { Metadata } from 'next';
import { HeroScenarioPicker } from '@/components/home/HeroScenarioPicker';
import { HomeStructuredData } from '@/components/home/HomeStructuredData';

export const metadata: Metadata = {
  title: "Can't sleep tonight? Calm sleep help for rough nights",
  description:
    "Can't fall asleep, woke up at night, or need to reset your sleep schedule? Choose the closest problem and get a calm plan for tonight.",
  alternates: {
    canonical: 'https://sleep-rescue.pages.dev',
  },
  openGraph: {
    title: "Can't sleep tonight? Calm sleep help for rough nights",
    description:
      "Can't fall asleep, woke up at night, or need to reset your sleep schedule? Choose the closest problem and get a calm plan for tonight.",
    url: 'https://sleep-rescue.pages.dev',
  },
  twitter: {
    title: "Can't sleep tonight? Calm sleep help for rough nights",
    description:
      "Can't fall asleep, woke up at night, or need to reset your sleep schedule? Choose the closest problem and get a calm plan for tonight.",
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

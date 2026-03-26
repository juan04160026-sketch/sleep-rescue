import { getScenarioMap } from '@/lib/flows/scenarios';
import { getScenarioSeoContent } from '@/lib/i18n/messages';
import type { ScenarioKey } from '@/types/flow';

const baseUrl = 'https://sleep-rescue.pages.dev';

export function FlowStructuredData({ scenario }: { scenario: ScenarioKey }) {
  const meta = getScenarioMap('en')[scenario];
  const seo = getScenarioSeoContent('en', scenario);
  const url = `${baseUrl}/flow/${scenario}`;

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: meta.title,
    description: meta.description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Sleep Rescue',
      url: baseUrl,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: seo.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

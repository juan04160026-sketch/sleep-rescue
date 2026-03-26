import { uiText } from '@/lib/i18n/messages';
import { getScenarioMap } from '@/lib/flows/scenarios';

const baseUrl = 'https://sleep-rescue.pages.dev';

export function HomeStructuredData() {
  const faq = uiText.en.home.faqItems;
  const scenarios = Object.values(getScenarioMap('en'));

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sleep Rescue',
    url: baseUrl,
    description:
      'A calm nighttime decision tool for rough nights, wakeups, and sleep schedule resets.',
    inLanguage: 'en',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Sleep Rescue scenarios',
    itemListElement: scenarios.map((scenario, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: scenario.title,
      description: scenario.description,
      url: `${baseUrl}/flow/${scenario.key}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    </>
  );
}

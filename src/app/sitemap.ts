import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const base = 'https://sleep-rescue.pages.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/about',
    '/calm',
    '/disclaimer',
    '/flow/fall-asleep',
    '/flow/wake-at-night',
    '/flow/reset-schedule',
    '/plan',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith('/flow/') ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}

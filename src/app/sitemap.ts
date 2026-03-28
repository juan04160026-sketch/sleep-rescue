import type { MetadataRoute } from 'next';
import { guidePaths } from '@/lib/seo/guides';

export const dynamic = 'force-static';

const base = 'https://sleep-rescue.pages.dev';
const guidePathSet = new Set<string>(guidePaths);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '',
    '/about',
    '/calm',
    '/disclaimer',
    '/flow/fall-asleep',
    '/flow/wake-at-night',
    '/flow/reset-schedule',
    ...guidePaths,
  ].map((path) => {
    const isGuideOrFlow = path.startsWith('/flow/') || guidePathSet.has(path);

    return {
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: isGuideOrFlow ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : isGuideOrFlow ? 0.8 : 0.7,
    };
  });
}

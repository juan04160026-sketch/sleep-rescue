'use client';

import { Card } from '@/components/shared/Card';
import { Container } from '@/components/shared/Container';
import { getInfoPageContent } from '@/lib/i18n/messages';
import { useLocale } from '@/lib/i18n/locale';

export function InfoPage({ kind }: { kind: 'about' | 'disclaimer' }) {
  const { locale } = useLocale();
  const content = getInfoPageContent(locale, kind);

  return (
    <section className="py-10 sm:py-14">
      <Container className="max-w-6xl">
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-8 sm:p-10 lg:p-12">
            <div className="eyebrow">{content.eyebrow}</div>
            <h1 className="display-type mt-5 max-w-3xl text-[clamp(2.3rem,9vw,5rem)] leading-[0.96] text-[#f4edde] sm:mt-6 sm:leading-none">{content.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#c0bbaf]">{content.intro}</p>

            <div className="mt-10 space-y-10">
              {content.sections.map((section) => (
                <section key={section.title} className="border-t border-white/8 pt-8 first:border-t-0 first:pt-0">
                  <h2 className="display-type text-3xl leading-none text-[#f4edde]">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-[#cbc4b8]">
                    {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </section>
              ))}
            </div>
          </Card>

          <div className="space-y-4 xl:pt-10">
            <Card className="p-6 sm:p-7">
              <div className="eyebrow">{content.aside.label}</div>
              <h2 className="display-type mt-4 text-3xl leading-none text-[#f4edde]">{content.aside.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#c0bbaf]">{content.aside.body}</p>
            </Card>
            <div className="rounded-[28px] border border-white/8 bg-black/10 p-6 text-sm leading-7 text-[#a79f8f]">
              <div className="eyebrow">{content.note.label}</div>
              <p className="mt-4">{content.note.body}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

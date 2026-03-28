import Link from 'next/link';
import type { Route } from 'next';
import { Card } from '@/components/shared/Card';
import { Container } from '@/components/shared/Container';
import { buttonStyles } from '@/components/shared/Button';
import type { Guide } from '@/lib/seo/guides';

export function GuidePage({ guide }: { guide: Guide }) {
  return (
    <section className="py-10 sm:py-14">
      <Container className="max-w-6xl">
        <div className="grid gap-6 xl:grid-cols-[1.06fr_0.94fr]">
          <Card className="p-8 sm:p-10 lg:p-12">
            <div className="eyebrow">{guide.eyebrow}</div>
            <h1 className="display-type mt-5 max-w-4xl text-[clamp(2.4rem,9vw,5.25rem)] leading-[0.96] text-[#f4edde] sm:mt-6 sm:leading-none">
              {guide.heroTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#c0bbaf]">{guide.heroIntro}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={guide.cta.href as Route} className={buttonStyles({ variant: 'solid', size: 'lg' })}>
                {guide.cta.label}
              </Link>
              <Link href={guide.cta.secondaryHref as Route} className={buttonStyles({ variant: 'ghost', size: 'lg' })}>
                {guide.cta.secondaryLabel}
              </Link>
            </div>

            <div className="mt-10 space-y-10">
              {guide.sections.map((section) => (
                <section key={section.title} className="border-t border-white/8 pt-8 first:border-t-0 first:pt-0">
                  <h2 className="display-type text-3xl leading-none text-[#f4edde]">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-[#cbc4b8]">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </Card>

          <div className="space-y-4 xl:pt-10">
            <Card className="p-6 sm:p-7">
              <div className="eyebrow">Quick summary</div>
              <h2 className="display-type mt-4 text-3xl leading-none text-[#f4edde]">{guide.quickSummaryTitle}</h2>
              <ol className="mt-5 space-y-4">
                {guide.quickSummary.map((item, index) => (
                  <li key={item} className="flex gap-4 border-t border-white/8 pt-4 first:border-t-0 first:pt-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#d9c39c]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <p className="text-sm leading-7 text-[#c0bbaf]">{item}</p>
                  </li>
                ))}
              </ol>
            </Card>

            <div className="space-y-4">
              {guide.faq.map((item, index) => (
                <Card key={item.question} className="p-5 sm:p-6">
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[0.7rem] font-medium uppercase tracking-[0.24em] text-[#d9c39c]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h2 className="text-base font-medium text-[#f2ebdd] sm:text-lg">{item.question}</h2>
                      <p className="mt-3 text-sm leading-7 text-[#bdb5a8] sm:text-base">{item.answer}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

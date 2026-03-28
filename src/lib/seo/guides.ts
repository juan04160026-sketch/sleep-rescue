export type GuideSlug = 'how-to-fall-asleep' | 'how-to-go-back-to-sleep' | 'how-to-reset-sleep-schedule';

export type GuideSection = {
  title: string;
  body: string[];
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideQuestionBlock = {
  question: string;
  answer: string;
};

export type Guide = {
  slug: GuideSlug;
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroIntro: string;
  quickSummaryTitle: string;
  quickSummary: string[];
  sections: GuideSection[];
  searchQuestions: GuideQuestionBlock[];
  faq: GuideFaq[];
  cta: {
    href: string;
    label: string;
    secondaryHref: string;
    secondaryLabel: string;
  };
};

const guides: Record<GuideSlug, Guide> = {
  'how-to-fall-asleep': {
    slug: 'how-to-fall-asleep',
    path: '/how-to-fall-asleep',
    title: "Can't fall asleep? Try a calmer bedtime reset",
    description:
      "Can't fall asleep tonight? Use a low-stimulation bedtime reset, reduce pressure, and follow a calmer step-by-step plan.",
    eyebrow: 'Sleep guide',
    heroTitle: "Can't fall asleep tonight? Make the next move smaller.",
    heroIntro:
      "This guide is for the familiar bedtime state where your body feels tired, but sleep still is not landing. The goal is not to force sleep. The goal is to reduce stimulation, stop escalation, and make the next step easier to follow.",
    quickSummaryTitle: 'Quick bedtime reset',
    quickSummary: [
      'Stop checking the time and stop measuring the night.',
      'Keep the room dim and reduce screens, noise, and decision-making.',
      'If your brain is racing, give it one boring task instead of more input.',
      'If you feel more frustrated than sleepy, do a short low-light reset instead of fighting the bed.',
    ],
    sections: [
      {
        title: 'Why people get stuck at bedtime',
        body: [
          'A rough bedtime often gets worse because the pressure to sleep becomes its own source of alertness. The more you calculate how late it is or how much sleep is left, the louder the night can feel.',
          'Late caffeine, too much screen time, a second-wind feeling, or a racing mind can all keep the body from settling even when you are already tired.',
        ],
      },
      {
        title: 'What helps more than forcing it',
        body: [
          'Keep your next move boring and repeatable. That usually works better than searching for a perfect trick. Slower breathing, relaxed muscles, dim light, and one simple task can be enough to lower the pressure.',
          'If you have been lying there for a long time and the bed now feels like a frustration zone, a short reset outside the bed can be more useful than staying there and bargaining with sleep.',
        ],
      },
      {
        title: 'When to treat it as a pattern',
        body: [
          'One rough night is common. A repeating pattern is different. If trouble falling asleep keeps showing up, starts affecting daytime functioning, or feels tied to something medical, it is worth getting proper support instead of relying on a nighttime workaround alone.',
        ],
      },
    ],
    searchQuestions: [
      {
        question: "Why am I tired but can't fall asleep?",
        answer:
          'That often happens when the body is tired but the brain is still being held in a more alert state by stress, stimulation, timing drift, caffeine, or too much pressure around sleep itself.',
      },
      {
        question: 'What should I do if I cannot fall asleep after 30 minutes?',
        answer:
          'Usually the best next move is to reduce stimulation and stop escalating. If the bed starts to feel like a frustration zone, a short low-light reset can work better than continuing to force it.',
      },
      {
        question: 'Should I stay in bed if I cannot fall asleep?',
        answer:
          'Not always. Staying in bed only helps if the bed still feels calm. If it starts to feel like a place where you fight with sleep, a brief reset outside the bed may be more useful.',
      },
    ],
    faq: [
      {
        question: 'What if I have already been trying to sleep for over an hour?',
        answer:
          'A calmer reset still helps. At that point the main job is usually to reduce pressure, not to keep trying harder in the same exact state.',
      },
      {
        question: 'Should I keep reading more sleep tips?',
        answer:
          'Usually no. At bedtime, more input can become more stimulation. Pick one quiet next step and follow it instead of opening five more tabs.',
      },
      {
        question: 'Does checking the clock make it worse?',
        answer:
          'For a lot of people, yes. Time-checking often turns a sleepy problem into a pressure problem, which can make falling asleep harder instead of easier.',
      },
    ],
    cta: {
      href: '/flow/fall-asleep',
      label: 'Open the interactive bedtime tool',
      secondaryHref: '/calm',
      secondaryLabel: 'Open calm mode',
    },
  },
  'how-to-go-back-to-sleep': {
    slug: 'how-to-go-back-to-sleep',
    path: '/how-to-go-back-to-sleep',
    title: "Woke up at night and can't go back to sleep?",
    description:
      "Woke up in the middle of the night and can't go back to sleep? Lower stimulation, stop clock-checking, and follow a calmer reset.",
    eyebrow: 'Sleep guide',
    heroTitle: "Woke up at night? Try not to make the wake-up bigger.",
    heroIntro:
      "This guide is for middle-of-the-night wakeups, especially the kind that start small and then turn into a fully alert night. The target is not perfect sleep. It is stopping the wake-up from escalating.",
    quickSummaryTitle: 'Middle-of-the-night reset',
    quickSummary: [
      'Do not keep checking the phone or the clock.',
      'Keep light low and reduce extra stimulation fast.',
      'If your system feels activated, try slower breathing or a brief body scan.',
      'If the bed becomes a frustration zone, step away briefly in dim light and return only when you feel a little less alert.',
    ],
    sections: [
      {
        title: 'Why night wakeups spiral so fast',
        body: [
          'A quick wake-up can become a rough night when the next actions increase alertness. Looking at the time, opening your phone, turning on bright lights, or switching between multiple tactics can all push the brain further into daytime mode.',
          'Stress, noise, discomfort, or bathroom trips can trigger the wake-up. What matters next is keeping the response low-stimulation and simple.',
        ],
      },
      {
        title: 'What to do in the next few minutes',
        body: [
          'Start by lowering inputs. Dim light, no scrolling, and no sleep math. Then give your body one softer task, like longer exhales, relaxed muscle release, or quiet attention to a neutral sensation.',
          'If you keep getting more frustrated, do not keep escalating inside the bed. A short reset in another dim space can work better than trying to force sleep while getting more alert.',
        ],
      },
      {
        title: 'How to protect tomorrow too',
        body: [
          'A bad wake-up does not need to wreck the next day and the next night together. Protecting your morning anchor matters. That usually means avoiding a full panic reaction tonight and returning to a stable wake time tomorrow as much as you can.',
        ],
      },
    ],
    searchQuestions: [
      {
        question: "How do I go back to sleep after waking up at 3am?",
        answer:
          'Treat the next few minutes as a stimulation problem first. Lower light, stop checking the time, avoid the phone, and give your body one quieter task instead of several new inputs.',
      },
      {
        question: "Why can't I go back to sleep after waking up in the night?",
        answer:
          'Once you wake, alertness can rise fast if stress, discomfort, light, or scrolling pile on. The body often needs less stimulation, not more effort, to settle again.',
      },
      {
        question: 'Should I get out of bed if I wake up and cannot fall back asleep?',
        answer:
          'Sometimes yes. If staying in bed is making you more frustrated and more awake, a short reset in dim light can be better than forcing the issue in the same place.',
      },
    ],
    faq: [
      {
        question: 'What if I already looked at my phone?',
        answer:
          'That is common. The next step is still the same: reduce stimulation again instead of adding more of it.',
      },
      {
        question: 'Should I stay in bed no matter what?',
        answer:
          'Not always. If you are getting more awake and more irritated, a short dim reset can be better than fighting the mattress.',
      },
      {
        question: 'Is waking up once in the night always a problem?',
        answer:
          'Not necessarily. The bigger issue is often what happens next. A quiet wake-up can stay small, but a stimulated wake-up can become a much rougher night.',
      },
    ],
    cta: {
      href: '/flow/wake-at-night',
      label: 'Open the wake-up reset tool',
      secondaryHref: '/calm',
      secondaryLabel: 'Open calm mode',
    },
  },
  'how-to-reset-sleep-schedule': {
    slug: 'how-to-reset-sleep-schedule',
    path: '/how-to-reset-sleep-schedule',
    title: 'How to reset a broken sleep schedule',
    description:
      'Need to reset a broken sleep schedule? Rebuild one wake-up anchor, reduce drift, and use a calmer plan for the next few days.',
    eyebrow: 'Sleep guide',
    heroTitle: 'Reset the schedule by stabilizing one anchor first.',
    heroIntro:
      'If your bedtime keeps drifting, your mornings keep moving, or weekends keep wrecking weekdays, the fix usually is not a perfect bedtime all at once. A smaller reset works better: choose one wake anchor and make the next few days revolve around it.',
    quickSummaryTitle: 'A gentler schedule reset',
    quickSummary: [
      'Pick one wake-up time you can realistically protect for the next few days.',
      'Do not chase a perfect bedtime on night one; consistency matters more than heroics.',
      'Reduce anything that keeps shifting the schedule, like late caffeine, oversized naps, or large weekend drift.',
      'Use light, routine, and repetition to help the body relearn the pattern.',
    ],
    sections: [
      {
        title: 'Why sleep schedules drift',
        body: [
          'Schedules often break gradually. A few late nights, sleeping in to recover, irregular weekends, or a wired second-wind feeling can all push the clock later and later.',
          'Once that happens, trying to fix everything in one night usually fails. The body responds better to repetition than to one dramatic correction.',
        ],
      },
      {
        title: 'What usually works better',
        body: [
          'Start with the wake anchor. It is often the most stable lever when the whole pattern is drifting. Protect it for several days, keep evenings lower stimulation, and avoid trying to compensate with chaotic naps or huge sleep-ins.',
          'A useful reset is boring on purpose. The more repeatable it is, the more likely it is to last long enough to move the schedule back into place.',
        ],
      },
      {
        title: 'When to get help instead of improvising',
        body: [
          'If the pattern is severe, long-running, or tied to symptoms that feel medical or unsafe, it is better to get proper evaluation. A sleep tool can help with routine, but it cannot diagnose what is underneath a persistent problem.',
        ],
      },
    ],
    searchQuestions: [
      {
        question: 'How do I reset my sleep schedule fast?',
        answer:
          'The fastest sustainable route is usually not dramatic. Pick one wake-up anchor, protect it for several days, and reduce the habits that keep pushing the schedule later.',
      },
      {
        question: 'Why is my sleep schedule suddenly broken?',
        answer:
          'Sleep schedules often break through accumulation: a few late nights, sleeping in to recover, irregular weekends, or a repeated second-wind pattern in the evening.',
      },
      {
        question: 'Can I fix a broken sleep schedule in one night?',
        answer:
          'Usually no. Most schedules respond better to repetition than to a one-night correction. A smaller reset that lasts several days is more realistic and more effective.',
      },
    ],
    faq: [
      {
        question: 'Do I need to fix bedtime first?',
        answer:
          'Usually no. In a broken schedule, the wake-up anchor is often the more reliable place to start.',
      },
      {
        question: 'Can I just sleep in to catch up?',
        answer:
          'Sometimes extra rest feels good in the moment, but repeated sleep-ins can keep the schedule drifting. Consistency usually matters more during a reset.',
      },
      {
        question: 'Do naps make a schedule reset harder?',
        answer:
          'They can. Large or late naps may reduce sleep pressure at night and make it harder for the body to re-lock onto a steadier rhythm.',
      },
    ],
    cta: {
      href: '/flow/reset-schedule',
      label: 'Open the schedule reset tool',
      secondaryHref: '/disclaimer',
      secondaryLabel: 'Read the disclaimer',
    },
  },
};

export const guidePaths = Object.values(guides).map((guide) => guide.path);

export function getGuide(slug: GuideSlug) {
  return guides[slug];
}

export function getGuides() {
  return Object.values(guides);
}

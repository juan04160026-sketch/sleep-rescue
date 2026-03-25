import type { Locale } from '@/lib/i18n/config';
import type { FlowAnswers, ScenarioKey } from '@/types/flow';
import type { PlanResult, PlanSection } from '@/types/plan';

function makeSection(key: string, title: string, items: string[]): PlanSection {
  return { key, title, items: items.map((label) => ({ label })) };
}

type FallAsleepCopy = {
  headline: string;
  summary: string;
  primaryAction: {
    racingMind: string;
    default: string;
    description: string;
  };
  sections: {
    now: {
      title: string;
      phoneAway: string;
      racingMind: string;
      defaultState: string;
      overstimulated: string;
      defaultEnvironment: string;
    };
    next: {
      title: string;
      calmFirst: string;
      longAttempt: string;
      defaultAttempt: string;
      returnToBed: string;
    };
    tomorrow: {
      title: string;
      items: [string, string, string];
    };
  };
  calmPrompt: string;
  nextStepTitle: string;
  nextStepItems: [string, string, string];
};

type WakeAtNightCopy = {
  headline: string;
  summary: string;
  primaryAction: {
    stress: string;
    default: string;
    description: string;
  };
  sections: {
    now: {
      title: string;
      stopMath: string;
      phoneUsed: string;
      defaultEnvironment: string;
      stress: string;
      defaultState: string;
    };
    next: {
      title: string;
      releaseTension: string;
      longWake: string;
      defaultWake: string;
      returnToBed: string;
    };
    tomorrow: {
      title: string;
      items: [string, string, string];
    };
  };
  calmPrompt: string;
  nextStepTitle: string;
  nextStepItems: [string, string, string];
};

type ResetScheduleCopy = {
  headline: string;
  summary: string;
  primaryAction: {
    title: string;
    description: string;
  };
  sections: {
    today: {
      title: string;
      earlyGoal: string;
      defaultGoal: string;
      naps: string;
      defaultNaps: string;
      wired: string;
      defaultEvening: string;
    };
    tonight: {
      title: string;
      wakeTimeFirst: string;
      wired: string;
      defaultEvening: string;
      lastHour: string;
    };
    next3Days: {
      title: string;
      items: [string, string, string];
    };
  };
  calmPrompt: string;
  nextStepTitle: string;
  nextStepItems: [string, string, string];
};

type PlanCopy = {
  'fall-asleep': FallAsleepCopy;
  'wake-at-night': WakeAtNightCopy;
  'reset-schedule': ResetScheduleCopy;
};

const planCopyByLocale: Partial<Record<Locale, PlanCopy>> = {
  en: {
    'fall-asleep': {
      headline: 'Tonight is about lowering pressure, not forcing sleep.',
      summary: 'Use a short downshift now, then switch strategies if the bed is turning into a frustration zone.',
      primaryAction: {
        racingMind: 'Start a 2-minute breathing reset',
        default: 'Start a 60-second body unwind',
        description: 'Give your brain one simple task so it can stop chasing sleep.',
      },
      sections: {
        now: {
          title: 'Right now',
          phoneAway: 'Put the phone face down and stop checking the time.',
          racingMind: 'Match your breath to a slow, steady rhythm.',
          defaultState: 'Relax your jaw, shoulders, and hands first.',
          overstimulated: 'Drop the light level and step away from any bright screen.',
          defaultEnvironment: 'Keep everything quiet and boring for a few minutes.',
        },
        next: {
          title: 'Next 20 minutes',
          calmFirst: 'Do not try to force sleep. Aim for calm first.',
          longAttempt: 'If you are still fully awake, leave the bed for a short low-light reset.',
          defaultAttempt: 'Stay with one low-effort calming action instead of switching tactics.',
          returnToBed: 'Return to bed only when sleepiness starts to come back.',
        },
        tomorrow: {
          title: 'Protect tomorrow',
          items: [
            'Wake at roughly your planned time instead of chasing extra sleep in bed.',
            'Get outside or near daylight early in the day.',
            'Keep caffeine earlier than usual if tonight was rough.',
          ],
        },
      },
      calmPrompt: 'Let the screen go quiet and give yourself one thing to follow: the breath.',
      nextStepTitle: 'Still awake?',
      nextStepItems: [
        'Leave the bed for a few minutes instead of battling it.',
        'Choose one dim, boring activity: sit, breathe, or read one page.',
        'Come back only when you feel sleepier, not more frustrated.',
      ],
    },
    'wake-at-night': {
      headline: 'Your job is to stop this wake-up from turning into a full restart.',
      summary: 'Reduce stimulation, stop clock math, and take the gentlest route back toward drowsiness.',
      primaryAction: {
        stress: 'Start a 2-minute return-to-sleep reset',
        default: 'Start a 60-second quiet breathing reset',
        description: 'Keep your brain from escalating the wake-up into a full alert state.',
      },
      sections: {
        now: {
          title: 'First',
          stopMath: 'Do not calculate how many hours are left.',
          phoneUsed: 'Put the phone back down and let the room stay dark.',
          defaultEnvironment: 'Keep lights low and movements slow.',
          stress: 'Exhale longer than you inhale for a minute or two.',
          defaultState: 'Let your eyes rest and keep stimulation low.',
        },
        next: {
          title: 'Next few minutes',
          releaseTension: 'Release your face, neck, and shoulders before you chase sleep again.',
          longWake: 'If you are getting more alert, step out of bed briefly into a dim room.',
          defaultWake: 'Stay with one quiet technique instead of starting a new one every minute.',
          returnToBed: 'Return only when your body feels softer and less vigilant.',
        },
        tomorrow: {
          title: 'Tomorrow morning',
          items: [
            'Do not over-correct with a huge lie-in if you can avoid it.',
            'Get bright light early to anchor the next night.',
            'Protect your caffeine cutoff and keep the day simple.',
          ],
        },
      },
      calmPrompt: 'The goal is not perfect sleep right now. The goal is to keep the nervous system from climbing higher.',
      nextStepTitle: 'Need the next step?',
      nextStepItems: [
        'Sit somewhere dim for a short reset instead of scrolling in bed.',
        'Keep the activity boring: breathe, sit quietly, or read something flat.',
        'When your eyes feel heavier again, go back without checking the clock.',
      ],
    },
    'reset-schedule': {
      headline: 'You do not need a perfect reset. You need one stable anchor.',
      summary: 'Pick a wake time, reduce drift, and repeat a few boring rules until your rhythm stops sliding.',
      primaryAction: {
        title: 'Open a calm reset and commit to tomorrow’s anchor',
        description: 'Use the calm screen as a deliberate stop, then follow the reset plan for three days.',
      },
      sections: {
        today: {
          title: 'Today',
          earlyGoal: 'Choose an earlier wake-up anchor and protect it for the next three mornings.',
          defaultGoal: 'Choose one realistic wake-up anchor and stop moving it around.',
          naps: 'Cut naps short or skip them while you reset.',
          defaultNaps: 'Keep daytime sleep minimal so pressure can build naturally.',
          wired: 'Start your wind-down earlier than feels necessary.',
          defaultEvening: 'Keep evening input simple and repetitive.',
        },
        tonight: {
          title: 'Tonight',
          wakeTimeFirst: 'Do not chase the perfect bedtime. Follow the wake time instead.',
          wired: 'Reduce bright light and stimulation sooner than usual.',
          defaultEvening: 'Let the night stay boring and predictable.',
          lastHour: 'Keep the final hour light, quiet, and phone-light if possible.',
        },
        next3Days: {
          title: 'Next 3 days',
          items: [
            'Wake at the same time every day, even after a messy night.',
            'Use early daylight and regular meals to reinforce the reset.',
            'Wait for the pattern to stabilize before changing the schedule again.',
          ],
        },
      },
      calmPrompt: 'A reset works when the rules are small enough to repeat, not when they feel heroic.',
      nextStepTitle: 'If the reset slips again',
      nextStepItems: [
        'Go back to the same wake-up anchor instead of moving everything later.',
        'Trim late naps, late caffeine, and the “one more episode” pattern.',
        'Repeat the same boring reset for three consistent days before judging it.',
      ],
    },
  },
  zh: {
    'fall-asleep': {
      headline: '今晚先别逼自己睡，先把压力降下来。',
      summary: '先做一个短降噪，再判断是不是该换策略，不要把床变成新的挫败现场。',
      primaryAction: {
        racingMind: '开始 2 分钟呼吸重置',
        default: '开始 60 秒身体放松',
        description: '给大脑一个单一任务，别让它继续追着“睡着”这件事跑。',
      },
      sections: {
        now: {
          title: '现在先做',
          phoneAway: '把手机扣下，不再看时间。',
          racingMind: '让呼吸变慢，跟着稳定节奏走。',
          defaultState: '先放松下巴、肩膀和手。',
          overstimulated: '把光线压低，先离开明亮屏幕。',
          defaultEnvironment: '先把环境维持得安静、无聊、低刺激。',
        },
        next: {
          title: '接下来 20 分钟',
          calmFirst: '不要强迫自己睡着，先以 calm 为目标。',
          longAttempt: '如果还是很清醒，短暂离床做低刺激重置。',
          defaultAttempt: '先坚持一种低负担动作，不要不停换方法。',
          returnToBed: '等困意回来再回到床上。',
        },
        tomorrow: {
          title: '明天怎么保护',
          items: [
            '明早尽量按计划时间起，不要靠赖床补救。',
            '早点接触自然光或亮光。',
            '如果今晚很糟，明天把咖啡时间再往前收。',
          ],
        },
      },
      calmPrompt: '让屏幕先安静下来，给自己一个唯一要跟随的东西：呼吸。',
      nextStepTitle: '如果还是睡不着',
      nextStepItems: [
        '先离开床几分钟，不要继续在床上硬扛。',
        '只做一件昏暗、无聊、低刺激的事。',
        '等自己更困一点，而不是更烦一点，再回床。',
      ],
    },
    'wake-at-night': {
      headline: '现在的任务，是别让这次夜醒升级成彻底清醒。',
      summary: '先降刺激，别再算睡眠时间，用最轻的方式把身体带回困意方向。',
      primaryAction: {
        stress: '开始 2 分钟回睡重置',
        default: '开始 60 秒安静呼吸',
        description: '先防止大脑把这次夜醒扩散成完整重启。',
      },
      sections: {
        now: {
          title: '现在先做',
          stopMath: '不要再算“还剩几个小时能睡”。',
          phoneUsed: '把手机放下，让房间继续保持黑暗。',
          defaultEnvironment: '保持低光和慢动作。',
          stress: '先把呼气拉长一会儿。',
          defaultState: '闭眼休息，别再增加新刺激。',
        },
        next: {
          title: '接下来几分钟',
          releaseTension: '先把脸、脖子、肩膀放松，再谈回睡。',
          longWake: '如果越来越清醒，就暂时离床，去昏暗的地方待一下。',
          defaultWake: '先守住一个安静动作，不要一分钟换一个方法。',
          returnToBed: '等身体没那么警觉，再回去。',
        },
        tomorrow: {
          title: '明早怎么做',
          items: [
            '尽量不要用大幅赖床来过度补偿。',
            '早点接触亮光，重新锚定下一晚。',
            '把咖啡和白天安排尽量收简单。',
          ],
        },
      },
      calmPrompt: '现在不是追求“完美睡着”，而是别让神经系统继续往上爬。',
      nextStepTitle: '需要下一步？',
      nextStepItems: [
        '去昏暗的地方短暂坐一下，不要在床上刷手机。',
        '活动保持无聊：呼吸、静坐、读一点枯燥内容。',
        '等眼皮再重一点，再回去，不看时间。',
      ],
    },
    'reset-schedule': {
      headline: '你不需要完美重置，只需要一个稳定锚点。',
      summary: '先固定起床时间，减少漂移，用几条无聊但能重复的规则把节奏拉回来。',
      primaryAction: {
        title: '打开 Calm 模式，并确认明天的起床锚点',
        description: '把 Calm 页面当作一个停顿点，然后按三天重置计划执行。',
      },
      sections: {
        today: {
          title: '今天',
          earlyGoal: '把更早的起床时间定下来，接下来三天都守住。',
          defaultGoal: '先定一个现实起得来的锚点，不要来回改。',
          naps: '午睡尽量缩短或先停掉。',
          defaultNaps: '白天睡眠保持最小，让睡压自然回升。',
          wired: '把晚间收尾提前得比你以为需要的更早。',
          defaultEvening: '让晚上保持简单、重复、可预测。',
        },
        tonight: {
          title: '今晚',
          wakeTimeFirst: '别再追求“完美入睡时间”，先跟着起床时间走。',
          wired: '更早开始降光、降刺激。',
          defaultEvening: '让夜晚保持安静、无聊、可重复。',
          lastHour: '最后一小时尽量轻一点、暗一点、少碰手机。',
        },
        next3Days: {
          title: '接下来 3 天',
          items: [
            '每天都在同一时间起，即使前一晚很乱。',
            '用早晨亮光和规律吃饭加固节律。',
            '先坚持三天，再判断要不要改。',
          ],
        },
      },
      calmPrompt: '重置真正有效，不是因为它完美，而是因为它小到可以重复。',
      nextStepTitle: '如果又滑回去了',
      nextStepItems: [
        '重新回到同一个起床锚点，而不是整体往后推。',
        '削掉晚睡、晚咖啡、和“再看一集”的习惯。',
        '至少连续做三天，再评价有没有效果。',
      ],
    },
  },
};

function getPlanCopy(locale: Locale): PlanCopy {
  return planCopyByLocale[locale] ?? planCopyByLocale.en!;
}

function buildFallAsleepPlan(copy: FallAsleepCopy, answers: FlowAnswers): PlanResult {
  const mindRacing = answers.state === 'mind-racing';
  const overstimulated = answers.lateStimulus === 'yes';
  const longAttempt = answers.tryingFor === 'over-60';

  return {
    scenario: 'fall-asleep',
    headline: copy.headline,
    summary: copy.summary,
    primaryAction: {
      title: mindRacing ? copy.primaryAction.racingMind : copy.primaryAction.default,
      description: copy.primaryAction.description,
      href: '/calm',
    },
    sections: [
      makeSection('now', copy.sections.now.title, [
        copy.sections.now.phoneAway,
        mindRacing ? copy.sections.now.racingMind : copy.sections.now.defaultState,
        overstimulated ? copy.sections.now.overstimulated : copy.sections.now.defaultEnvironment,
      ]),
      makeSection('next', copy.sections.next.title, [
        copy.sections.next.calmFirst,
        longAttempt ? copy.sections.next.longAttempt : copy.sections.next.defaultAttempt,
        copy.sections.next.returnToBed,
      ]),
      makeSection('tomorrow', copy.sections.tomorrow.title, [...copy.sections.tomorrow.items]),
    ],
    calmPrompt: copy.calmPrompt,
    nextStepTitle: copy.nextStepTitle,
    nextStepItems: [...copy.nextStepItems],
  };
}

function buildWakeAtNightPlan(copy: WakeAtNightCopy, answers: FlowAnswers): PlanResult {
  const phoneUsed = answers.phoneUsed === 'yes';
  const stress = answers.wakeTrigger === 'stress';
  const longWake = answers.awakeFor === '30-plus';

  return {
    scenario: 'wake-at-night',
    headline: copy.headline,
    summary: copy.summary,
    primaryAction: {
      title: stress ? copy.primaryAction.stress : copy.primaryAction.default,
      description: copy.primaryAction.description,
      href: '/calm',
    },
    sections: [
      makeSection('now', copy.sections.now.title, [
        copy.sections.now.stopMath,
        phoneUsed ? copy.sections.now.phoneUsed : copy.sections.now.defaultEnvironment,
        stress ? copy.sections.now.stress : copy.sections.now.defaultState,
      ]),
      makeSection('next', copy.sections.next.title, [
        copy.sections.next.releaseTension,
        longWake ? copy.sections.next.longWake : copy.sections.next.defaultWake,
        copy.sections.next.returnToBed,
      ]),
      makeSection('tomorrow', copy.sections.tomorrow.title, [...copy.sections.tomorrow.items]),
    ],
    calmPrompt: copy.calmPrompt,
    nextStepTitle: copy.nextStepTitle,
    nextStepItems: [...copy.nextStepItems],
  };
}

function buildResetSchedulePlan(copy: ResetScheduleCopy, answers: FlowAnswers): PlanResult {
  const wired = answers.nightEnergy === 'wired';
  const naps = answers.napping !== 'rarely';
  const earlyGoal = answers.goalWake === 'early';

  return {
    scenario: 'reset-schedule',
    headline: copy.headline,
    summary: copy.summary,
    primaryAction: {
      title: copy.primaryAction.title,
      description: copy.primaryAction.description,
      href: '/calm',
    },
    sections: [
      makeSection('today', copy.sections.today.title, [
        earlyGoal ? copy.sections.today.earlyGoal : copy.sections.today.defaultGoal,
        naps ? copy.sections.today.naps : copy.sections.today.defaultNaps,
        wired ? copy.sections.today.wired : copy.sections.today.defaultEvening,
      ]),
      makeSection('tonight', copy.sections.tonight.title, [
        copy.sections.tonight.wakeTimeFirst,
        wired ? copy.sections.tonight.wired : copy.sections.tonight.defaultEvening,
        copy.sections.tonight.lastHour,
      ]),
      makeSection('next-3-days', copy.sections.next3Days.title, [...copy.sections.next3Days.items]),
    ],
    calmPrompt: copy.calmPrompt,
    nextStepTitle: copy.nextStepTitle,
    nextStepItems: [...copy.nextStepItems],
  };
}

export function buildPlan(locale: Locale, scenario: ScenarioKey, answers: FlowAnswers): PlanResult {
  const copy = getPlanCopy(locale);

  switch (scenario) {
    case 'fall-asleep':
      return buildFallAsleepPlan(copy['fall-asleep'], answers);
    case 'wake-at-night':
      return buildWakeAtNightPlan(copy['wake-at-night'], answers);
    case 'reset-schedule':
      return buildResetSchedulePlan(copy['reset-schedule'], answers);
  }
}

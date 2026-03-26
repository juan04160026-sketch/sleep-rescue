import type { Question, ScenarioKey, ScenarioMeta } from '@/types/flow';
import { localeOptions } from './config';
import type { Locale } from './config';

export { localeOptions };
export type { Locale };

const scenarioEn: Record<ScenarioKey, ScenarioMeta> = {
  'fall-asleep': {
    key: 'fall-asleep',
    shortTitle: "Can't fall asleep",
    title: "I can't fall asleep",
    description: 'A short nighttime reset for when your body is tired but your brain refuses to switch off.',
    lead: 'We will keep this simple and give you a calm plan in under a minute.',
    windowLabel: 'At bedtime',
    durationLabel: '≈45 sec',
    focusLabel: 'Fast reset',
  },
  'wake-at-night': {
    key: 'wake-at-night',
    shortTitle: 'Woke up at night',
    title: "I woke up and can't go back to sleep",
    description: 'Get back to basics before a rough wake-up turns into a fully awake night.',
    lead: 'No doom-scrolling, no overthinking. Just the next step.',
    windowLabel: 'Middle of night',
    durationLabel: '≈45 sec',
    focusLabel: 'Return to drowsy',
  },
  'reset-schedule': {
    key: 'reset-schedule',
    shortTitle: 'Reset my schedule',
    title: 'My sleep schedule is broken',
    description: 'A low-friction reset plan to rebuild an anchor wake time and stop drift.',
    lead: 'We will give you a short reset you can actually follow.',
    windowLabel: 'Next 3 nights',
    durationLabel: '≈60 sec',
    focusLabel: 'Rebuild anchor',
  },
};

const scenarioZh: Record<ScenarioKey, ScenarioMeta> = {
  'fall-asleep': {
    key: 'fall-asleep',
    shortTitle: '难以入睡',
    title: '我就是睡不着',
    description: '适合已经很困，但大脑和身体迟迟不肯停下来的夜晚。',
    lead: '流程会很短，一分钟内给出今晚可执行的方案。',
    windowLabel: '睡前',
    durationLabel: '约45秒',
    focusLabel: '快速降噪',
  },
  'wake-at-night': {
    key: 'wake-at-night',
    shortTitle: '半夜醒来',
    title: '半夜醒了，回不去睡眠',
    description: '先把夜醒从短暂醒来升级成彻底清醒的风险压下去。',
    lead: '不刷手机，不扩散焦虑，只做下一步。',
    windowLabel: '夜里',
    durationLabel: '约45秒',
    focusLabel: '回到困意',
  },
  'reset-schedule': {
    key: 'reset-schedule',
    shortTitle: '重置作息',
    title: '我的作息已经乱了',
    description: '用一个低摩擦的重置方案，把起床锚点重新拉回来。',
    lead: '给你一个能执行三天的轻量重置计划。',
    windowLabel: '接下来3晚',
    durationLabel: '约60秒',
    focusLabel: '重建锚点',
  },
};

const scenarioJa: Record<ScenarioKey, ScenarioMeta> = {
  'fall-asleep': {
    ...scenarioEn['fall-asleep'],
    shortTitle: '眠れない',
    title: 'なかなか眠れない',
    description: '体は疲れているのに、頭や体がまだ止まらない夜のための短いリセット。',
    lead: '1分以内に今夜使える落ち着いたプランを出します。',
    windowLabel: '就寝前',
    durationLabel: '約45秒',
    focusLabel: 'クイックリセット',
  },
  'wake-at-night': {
    ...scenarioEn['wake-at-night'],
    shortTitle: '夜中に目が覚めた',
    title: '夜中に目が覚めて、また眠れない',
    description: '短い中途覚醒が完全な覚醒に変わる前に立て直します。',
    lead: 'スクロールしない、考え込みすぎない、次の一手だけ。',
    windowLabel: '夜中',
    durationLabel: '約45秒',
    focusLabel: '眠気へ戻す',
  },
  'reset-schedule': {
    ...scenarioEn['reset-schedule'],
    shortTitle: '生活リズムを整える',
    title: '睡眠スケジュールが崩れている',
    description: '起床アンカーを作り直し、ズレを止めるための軽いリセット。',
    lead: '3日続けやすい短いリセットプランを出します。',
    windowLabel: '次の3夜',
    durationLabel: '約60秒',
    focusLabel: 'アンカー再構築',
  },
};

const scenarioEs: Record<ScenarioKey, ScenarioMeta> = {
  'fall-asleep': {
    ...scenarioEn['fall-asleep'],
    shortTitle: 'No puedo dormir',
    title: 'No puedo quedarme dormido',
    description: 'Un reinicio nocturno corto para cuando el cuerpo está cansado pero la mente no se apaga.',
    lead: 'Lo mantendremos simple y te daremos un plan tranquilo en menos de un minuto.',
    windowLabel: 'A la hora de dormir',
    durationLabel: '≈45 s',
    focusLabel: 'Reinicio rápido',
  },
  'wake-at-night': {
    ...scenarioEn['wake-at-night'],
    shortTitle: 'Desperté en la noche',
    title: 'Me desperté y no puedo volver a dormir',
    description: 'Vuelve a lo básico antes de que un mal despertar se convierta en una noche totalmente despierta.',
    lead: 'Sin doom-scrolling, sin sobrepensar. Solo el siguiente paso.',
    windowLabel: 'Mitad de la noche',
    durationLabel: '≈45 s',
    focusLabel: 'Volver a la somnolencia',
  },
  'reset-schedule': {
    ...scenarioEn['reset-schedule'],
    shortTitle: 'Reiniciar horario',
    title: 'Mi horario de sueño está roto',
    description: 'Un reinicio ligero para reconstruir una hora fija de despertar y detener la deriva.',
    lead: 'Te daremos un reinicio corto que realmente puedas seguir.',
    windowLabel: 'Próximas 3 noches',
    durationLabel: '≈60 s',
    focusLabel: 'Reconstruir ancla',
  },
};

const scenarioTh: Record<ScenarioKey, ScenarioMeta> = {
  'fall-asleep': {
    ...scenarioEn['fall-asleep'],
    shortTitle: 'นอนไม่หลับ',
    title: 'ฉันหลับไม่ลง',
    description: 'รีเซ็ตสั้น ๆ สำหรับคืนที่ร่างกายง่วงแล้ว แต่สมองยังไม่ยอมหยุด.',
    lead: 'เราจะทำให้สั้นและให้แผนที่ใช้ได้คืนนี้ภายในไม่ถึงหนึ่งนาที.',
    windowLabel: 'ก่อนนอน',
    durationLabel: 'ประมาณ 45 วิ',
    focusLabel: 'รีเซ็ตเร็ว',
  },
  'wake-at-night': {
    ...scenarioEn['wake-at-night'],
    shortTitle: 'ตื่นกลางดึก',
    title: 'ตื่นกลางดึกแล้วกลับไปนอนไม่ได้',
    description: 'พากลับสู่พื้นฐานก่อนที่การตื่นสั้น ๆ จะกลายเป็นตื่นยาวทั้งคืน.',
    lead: 'ไม่ไถมือถือ ไม่คิดวน เอาแค่ก้าวถัดไป.',
    windowLabel: 'กลางดึก',
    durationLabel: 'ประมาณ 45 วิ',
    focusLabel: 'กลับสู่ความง่วง',
  },
  'reset-schedule': {
    ...scenarioEn['reset-schedule'],
    shortTitle: 'รีเซ็ตตารางนอน',
    title: 'ตารางการนอนของฉันพังแล้ว',
    description: 'รีเซ็ตแบบเบา ๆ เพื่อสร้างเวลาตื่นหลักและหยุดความเลื่อนลอยของตารางนอน.',
    lead: 'เราจะให้แผนสั้น ๆ ที่ทำต่อได้จริงสามวัน.',
    windowLabel: '3 คืนถัดไป',
    durationLabel: 'ประมาณ 60 วิ',
    focusLabel: 'สร้างจุดยึดใหม่',
  },
};

const scenarioHi: Record<ScenarioKey, ScenarioMeta> = {
  'fall-asleep': {
    ...scenarioEn['fall-asleep'],
    shortTitle: 'नींद नहीं आ रही',
    title: 'मुझे नींद नहीं आ रही',
    description: 'ऐसी रात के लिए छोटा रीसेट जब शरीर थका है लेकिन दिमाग बंद नहीं हो रहा.',
    lead: 'हम इसे सरल रखेंगे और एक मिनट से कम में आज रात का शांत प्लान देंगे।',
    windowLabel: 'सोने से पहले',
    durationLabel: 'लगभग 45 सेकंड',
    focusLabel: 'त्वरित रीसेट',
  },
  'wake-at-night': {
    ...scenarioEn['wake-at-night'],
    shortTitle: 'रात में जाग गया',
    title: 'मैं रात में जाग गया और फिर सो नहीं पा रहा',
    description: 'छोटे जागने को पूरी तरह जागी हुई रात बनने से पहले संभालो.',
    lead: 'ना स्क्रॉल, ना ज़्यादा सोचना, बस अगला कदम।',
    windowLabel: 'आधी रात',
    durationLabel: 'लगभग 45 सेकंड',
    focusLabel: 'फिर से उनींदापन',
  },
  'reset-schedule': {
    ...scenarioEn['reset-schedule'],
    shortTitle: 'शेड्यूल रीसेट',
    title: 'मेरा स्लीप शेड्यूल बिगड़ गया है',
    description: 'जागने का एंकर फिर से बनाने और शेड्यूल बहकने से रोकने के लिए हल्का रीसेट।',
    lead: 'हम एक छोटा रीसेट प्लान देंगे जिसे आप सच में फॉलो कर सकें।',
    windowLabel: 'अगली 3 रातें',
    durationLabel: 'लगभग 60 सेकंड',
    focusLabel: 'एंकर दोबारा बनाना',
  },
};

const scenarioKo: Record<ScenarioKey, ScenarioMeta> = {
  'fall-asleep': {
    ...scenarioEn['fall-asleep'],
    shortTitle: '잠이 안 와요',
    title: '도무지 잠이 오지 않아요',
    description: '몸은 피곤한데 머리와 몸이 아직 멈추지 않는 밤을 위한 짧은 리셋.',
    lead: '1분 안에 오늘 밤 쓸 수 있는 차분한 플랜을 드릴게요.',
    windowLabel: '잠들기 전',
    durationLabel: '약 45초',
    focusLabel: '빠른 리셋',
  },
  'wake-at-night': {
    ...scenarioEn['wake-at-night'],
    shortTitle: '한밤중에 깼어요',
    title: '한밤중에 깼는데 다시 잠들 수 없어요',
    description: '짧은 각성이 완전한 깨어 있음이 되기 전에 다시 정리합니다.',
    lead: '폰도 스크롤하지 말고, 과하게 생각하지 말고, 다음 한 걸음만.',
    windowLabel: '한밤중',
    durationLabel: '약 45초',
    focusLabel: '졸림으로 복귀',
  },
  'reset-schedule': {
    ...scenarioEn['reset-schedule'],
    shortTitle: '수면 일정 재설정',
    title: '수면 스케줄이 완전히 흐트러졌어요',
    description: '기상 앵커를 다시 세우고 리듬이 밀리는 걸 막기 위한 가벼운 리셋.',
    lead: '실제로 따라갈 수 있는 3일짜리 짧은 리셋 플랜을 드립니다.',
    windowLabel: '다음 3일 밤',
    durationLabel: '약 60초',
    focusLabel: '앵커 재구성',
  },
};

export const scenarioValues: Record<Locale, Record<ScenarioKey, ScenarioMeta>> = {
  en: scenarioEn,
  zh: scenarioZh,
  ja: scenarioJa,
  es: scenarioEs,
  th: scenarioTh,
  hi: scenarioHi,
  ko: scenarioKo,
};

const questionValuesEn: Record<ScenarioKey, Question[]> = {
  'fall-asleep': [
    {
      id: 'tryingFor',
      title: 'How long have you been trying to sleep?',
      helper: 'Choose the closest range. Precision does not matter here.',
      options: [
        { label: 'Under 20 minutes', value: 'under-20' },
        { label: '20 to 60 minutes', value: '20-60' },
        { label: 'More than 1 hour', value: 'over-60' },
      ],
    },
    {
      id: 'state',
      title: 'What feels most true right now?',
      helper: 'Pick the loudest problem, not every problem at once.',
      options: [
        { label: 'My mind is racing', value: 'mind-racing' },
        { label: 'My body feels restless', value: 'restless' },
        { label: 'I am tired but stuck awake', value: 'stuck-awake' },
        { label: 'I keep checking the time', value: 'clock-checking' },
      ],
    },
    {
      id: 'lateStimulus',
      title: 'Did you have late caffeine or a lot of screen time?',
      helper: 'We only need a rough sense of what might still be driving alertness.',
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
      ],
    },
    {
      id: 'wakeNeed',
      title: 'How early do you need to be up tomorrow?',
      helper: 'This helps decide how protective tomorrow’s plan should be.',
      options: [
        { label: 'Early morning', value: 'early' },
        { label: 'Normal morning', value: 'normal' },
        { label: 'I have some flexibility', value: 'flexible' },
      ],
    },
  ],
  'wake-at-night': [
    {
      id: 'awakeFor',
      title: 'How long have you been awake?',
      helper: 'The rough estimate is enough. No need to check the clock again.',
      options: [
        { label: 'A few minutes', value: 'few' },
        { label: '10 to 30 minutes', value: '10-30' },
        { label: 'Longer than 30 minutes', value: '30-plus' },
      ],
    },
    {
      id: 'wakeTrigger',
      title: 'What seems to have pulled you awake?',
      helper: 'Pick the closest fit. You do not need certainty for this to help.',
      options: [
        { label: 'Stress or thoughts', value: 'stress' },
        { label: 'Noise or environment', value: 'noise' },
        { label: 'Bathroom / discomfort', value: 'physical' },
        { label: 'No idea', value: 'unknown' },
      ],
    },
    {
      id: 'phoneUsed',
      title: 'Did you start checking your phone or the time?',
      helper: 'Even a quick glance can change the tone of the next step.',
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
      ],
    },
    {
      id: 'morningPressure',
      title: 'Do you need to function early tomorrow?',
      helper: 'This shapes how much we protect the morning anchor.',
      options: [
        { label: 'Yes, very early', value: 'high' },
        { label: 'Moderately', value: 'medium' },
        { label: 'Not urgently', value: 'low' },
      ],
    },
  ],
  'reset-schedule': [
    {
      id: 'currentPattern',
      title: 'What is happening most nights lately?',
      helper: 'Choose the pattern causing the most drift.',
      options: [
        { label: 'Falling asleep too late', value: 'late-sleep' },
        { label: 'Sleeping and waking at random times', value: 'random' },
        { label: 'Weekend schedule is wrecking weekdays', value: 'weekend-drift' },
      ],
    },
    {
      id: 'goalWake',
      title: 'What kind of wake-up anchor do you want?',
      helper: 'Pick the anchor you can realistically protect, not the perfect one.',
      options: [
        { label: 'Early and consistent', value: 'early' },
        { label: 'Normal workday timing', value: 'normal' },
        { label: 'Gentler reset', value: 'gentle' },
      ],
    },
    {
      id: 'napping',
      title: 'Are naps making things worse?',
      helper: 'This helps size the reset without making it heroic.',
      options: [
        { label: 'Yes, often', value: 'often' },
        { label: 'Sometimes', value: 'sometimes' },
        { label: 'Not really', value: 'rarely' },
      ],
    },
    {
      id: 'nightEnergy',
      title: 'How do evenings usually feel?',
      helper: 'Choose the usual pattern, not only tonight.',
      options: [
        { label: 'Second wind / wired', value: 'wired' },
        { label: 'Tired but inconsistent', value: 'inconsistent' },
        { label: 'Mostly normal but unstable', value: 'mostly-normal' },
      ],
    },
  ],
};

const questionValuesZh: Record<ScenarioKey, Question[]> = {
  'fall-asleep': [
    {
      id: 'tryingFor',
      title: '你大概已经躺了多久？',
      helper: '选最接近的区间，不需要特别精确。',
      options: [
        { label: '不到20分钟', value: 'under-20' },
        { label: '20到60分钟', value: '20-60' },
        { label: '超过1小时', value: 'over-60' },
      ],
    },
    {
      id: 'state',
      title: '现在最明显的问题是什么？',
      helper: '只选最吵的那个问题，不用一次解决全部。',
      options: [
        { label: '脑子停不下来', value: 'mind-racing' },
        { label: '身体有点躁动', value: 'restless' },
        { label: '很困但卡住了', value: 'stuck-awake' },
        { label: '总在看时间', value: 'clock-checking' },
      ],
    },
    {
      id: 'lateStimulus',
      title: '今晚有晚喝咖啡或刷很多屏幕吗？',
      helper: '只需要大致判断有没有刺激还在顶着清醒。',
      options: [
        { label: '有', value: 'yes' },
        { label: '没有', value: 'no' },
      ],
    },
    {
      id: 'wakeNeed',
      title: '明天需要多早起？',
      helper: '这会影响明天保护策略的强度。',
      options: [
        { label: '很早', value: 'early' },
        { label: '正常早晨', value: 'normal' },
        { label: '有一点弹性', value: 'flexible' },
      ],
    },
  ],
  'wake-at-night': [
    {
      id: 'awakeFor',
      title: '你醒着大概多久了？',
      helper: '大致估计就够，不需要再看一眼时间。',
      options: [
        { label: '几分钟', value: 'few' },
        { label: '10到30分钟', value: '10-30' },
        { label: '超过30分钟', value: '30-plus' },
      ],
    },
    {
      id: 'wakeTrigger',
      title: '最像是什么把你弄醒了？',
      helper: '选最接近的就行，不需要绝对确定。',
      options: [
        { label: '压力或思绪', value: 'stress' },
        { label: '噪音或环境', value: 'noise' },
        { label: '上厕所 / 身体不适', value: 'physical' },
        { label: '说不清', value: 'unknown' },
      ],
    },
    {
      id: 'phoneUsed',
      title: '你有没有已经看手机或看时间？',
      helper: '哪怕只是瞄一眼，也会改变接下来的节奏。',
      options: [
        { label: '有', value: 'yes' },
        { label: '没有', value: 'no' },
      ],
    },
    {
      id: 'morningPressure',
      title: '明天早上对状态要求高吗？',
      helper: '这决定明天起床锚点要保护到什么程度。',
      options: [
        { label: '很高，很早要动', value: 'high' },
        { label: '中等', value: 'medium' },
        { label: '不算紧急', value: 'low' },
      ],
    },
  ],
  'reset-schedule': [
    {
      id: 'currentPattern',
      title: '最近大多数晚上最像哪种情况？',
      helper: '选造成偏移最明显的那种。',
      options: [
        { label: '总是睡得太晚', value: 'late-sleep' },
        { label: '睡醒时间完全乱掉', value: 'random' },
        { label: '周末把工作日节奏带乱了', value: 'weekend-drift' },
      ],
    },
    {
      id: 'goalWake',
      title: '你想把起床锚点定在哪一档？',
      helper: '选你真的守得住的，不是理论上最完美的。',
      options: [
        { label: '更早且固定', value: 'early' },
        { label: '正常工作日节奏', value: 'normal' },
        { label: '更温和一点', value: 'gentle' },
      ],
    },
    {
      id: 'napping',
      title: '午睡是不是在拖后腿？',
      helper: '这能帮我们决定重置力度，不需要搞得太硬。',
      options: [
        { label: '是，经常', value: 'often' },
        { label: '有时候', value: 'sometimes' },
        { label: '不太会', value: 'rarely' },
      ],
    },
    {
      id: 'nightEnergy',
      title: '晚上的状态通常更像哪种？',
      helper: '选长期模式，不只看今晚。',
      options: [
        { label: '越晚越精神', value: 'wired' },
        { label: '会困，但不稳定', value: 'inconsistent' },
        { label: '大致正常但总飘', value: 'mostly-normal' },
      ],
    },
  ],
};

const questionValuesJa: Record<ScenarioKey, Question[]> = {
  'fall-asleep': [
    {
      id: 'tryingFor',
      title: 'どれくらい眠ろうとしていましたか？',
      helper: '近い時間帯を選べば十分です。正確さは必要ありません。',
      options: [
        { label: '20分未満', value: 'under-20' },
        { label: '20分から60分', value: '20-60' },
        { label: '1時間以上', value: 'over-60' },
      ],
    },
    {
      id: 'state',
      title: '今いちばん当てはまるのは？',
      helper: '全部ではなく、いちばん強い問題を選んでください。',
      options: [
        { label: '頭が止まらない', value: 'mind-racing' },
        { label: '体がそわそわする', value: 'restless' },
        { label: '眠いのに起きたまま', value: 'stuck-awake' },
        { label: '時間ばかり見てしまう', value: 'clock-checking' },
      ],
    },
    {
      id: 'lateStimulus',
      title: '遅い時間のカフェインや画面時間はありましたか？',
      helper: 'まだ覚醒を押し上げていそうなものがあるか、大まかに分かれば十分です。',
      options: [
        { label: 'はい', value: 'yes' },
        { label: 'いいえ', value: 'no' },
      ],
    },
    {
      id: 'wakeNeed',
      title: '明日はどれくらい早く起きる必要がありますか？',
      helper: '明日の守り方をどれくらい強くするかに使います。',
      options: [
        { label: 'かなり早い', value: 'early' },
        { label: '普通の朝', value: 'normal' },
        { label: '少し融通が利く', value: 'flexible' },
      ],
    },
  ],
  'wake-at-night': [
    {
      id: 'awakeFor',
      title: 'どれくらい起きていますか？',
      helper: 'だいたいで十分です。もう時計を見なくて大丈夫です。',
      options: [
        { label: '数分', value: 'few' },
        { label: '10分から30分', value: '10-30' },
        { label: '30分以上', value: '30-plus' },
      ],
    },
    {
      id: 'wakeTrigger',
      title: '何が目を覚まさせた感じですか？',
      helper: 'いちばん近いものを選んでください。確信は不要です。',
      options: [
        { label: 'ストレスや考えごと', value: 'stress' },
        { label: '音や環境', value: 'noise' },
        { label: 'トイレ / 不快感', value: 'physical' },
        { label: '分からない', value: 'unknown' },
      ],
    },
    {
      id: 'phoneUsed',
      title: 'スマホや時間をもう確認しましたか？',
      helper: 'ひと目でも、その後の流れは変わります。',
      options: [
        { label: 'はい', value: 'yes' },
        { label: 'いいえ', value: 'no' },
      ],
    },
    {
      id: 'morningPressure',
      title: '明日は早く動ける必要がありますか？',
      helper: '朝のアンカーをどれだけ守るかを決めます。',
      options: [
        { label: 'はい、とても早い', value: 'high' },
        { label: 'ある程度', value: 'medium' },
        { label: 'そこまでではない', value: 'low' },
      ],
    },
  ],
  'reset-schedule': [
    {
      id: 'currentPattern',
      title: '最近の夜で一番多いのは？',
      helper: 'いちばんズレを生んでいるパターンを選んでください。',
      options: [
        { label: '寝つくのが遅すぎる', value: 'late-sleep' },
        { label: '寝る時間も起きる時間もばらばら', value: 'random' },
        { label: '週末のズレが平日に響く', value: 'weekend-drift' },
      ],
    },
    {
      id: 'goalWake',
      title: 'どんな起床アンカーにしたいですか？',
      helper: '理想ではなく、実際に守れそうなものを選んでください。',
      options: [
        { label: '早めで一定', value: 'early' },
        { label: '普通の平日ペース', value: 'normal' },
        { label: 'もう少しやさしいリセット', value: 'gentle' },
      ],
    },
    {
      id: 'napping',
      title: '昼寝が悪化させていますか？',
      helper: '無理なリセットにせず、強さを決めるために使います。',
      options: [
        { label: 'はい、よくある', value: 'often' },
        { label: 'ときどき', value: 'sometimes' },
        { label: 'あまりない', value: 'rarely' },
      ],
    },
    {
      id: 'nightEnergy',
      title: '夜は普段どんな感じですか？',
      helper: '今夜だけでなく、よくある流れを選んでください。',
      options: [
        { label: '夜になると目が冴える', value: 'wired' },
        { label: '眠いけれど安定しない', value: 'inconsistent' },
        { label: 'だいたい普通だが不安定', value: 'mostly-normal' },
      ],
    },
  ],
};

const questionValuesEs: Record<ScenarioKey, Question[]> = {
  'fall-asleep': [
    {
      id: 'tryingFor',
      title: '¿Cuánto tiempo llevas intentando dormir?',
      helper: 'Elige el rango más cercano. No hace falta precisión.',
      options: [
        { label: 'Menos de 20 minutos', value: 'under-20' },
        { label: '20 a 60 minutos', value: '20-60' },
        { label: 'Más de 1 hora', value: 'over-60' },
      ],
    },
    {
      id: 'state',
      title: '¿Qué se siente más cierto ahora mismo?',
      helper: 'Elige el problema más fuerte, no todos a la vez.',
      options: [
        { label: 'La mente va demasiado rápido', value: 'mind-racing' },
        { label: 'El cuerpo está inquieto', value: 'restless' },
        { label: 'Tengo sueño pero sigo despierto', value: 'stuck-awake' },
        { label: 'Sigo mirando la hora', value: 'clock-checking' },
      ],
    },
    {
      id: 'lateStimulus',
      title: '¿Tomaste cafeína tarde o pasaste mucho tiempo con pantallas?',
      helper: 'Solo necesitamos una idea general de lo que aún puede sostener la alerta.',
      options: [
        { label: 'Sí', value: 'yes' },
        { label: 'No', value: 'no' },
      ],
    },
    {
      id: 'wakeNeed',
      title: '¿Qué tan temprano necesitas levantarte mañana?',
      helper: 'Esto ayuda a decidir cuánto conviene proteger el día de mañana.',
      options: [
        { label: 'Muy temprano', value: 'early' },
        { label: 'Una mañana normal', value: 'normal' },
        { label: 'Tengo algo de flexibilidad', value: 'flexible' },
      ],
    },
  ],
  'wake-at-night': [
    {
      id: 'awakeFor',
      title: '¿Cuánto tiempo llevas despierto?',
      helper: 'Una estimación basta. No hace falta volver a mirar la hora.',
      options: [
        { label: 'Unos minutos', value: 'few' },
        { label: '10 a 30 minutos', value: '10-30' },
        { label: 'Más de 30 minutos', value: '30-plus' },
      ],
    },
    {
      id: 'wakeTrigger',
      title: '¿Qué parece haberte despertado?',
      helper: 'Elige lo más cercano. No necesitas estar seguro.',
      options: [
        { label: 'Estrés o pensamientos', value: 'stress' },
        { label: 'Ruido o ambiente', value: 'noise' },
        { label: 'Baño / molestia física', value: 'physical' },
        { label: 'No tengo idea', value: 'unknown' },
      ],
    },
    {
      id: 'phoneUsed',
      title: '¿Ya empezaste a mirar el móvil o la hora?',
      helper: 'Incluso una mirada rápida cambia el tono del siguiente paso.',
      options: [
        { label: 'Sí', value: 'yes' },
        { label: 'No', value: 'no' },
      ],
    },
    {
      id: 'morningPressure',
      title: '¿Necesitas funcionar temprano mañana?',
      helper: 'Esto define cuánto protegemos el ancla de la mañana.',
      options: [
        { label: 'Sí, muy temprano', value: 'high' },
        { label: 'Más o menos', value: 'medium' },
        { label: 'No con urgencia', value: 'low' },
      ],
    },
  ],
  'reset-schedule': [
    {
      id: 'currentPattern',
      title: '¿Qué pasa la mayoría de las noches últimamente?',
      helper: 'Elige el patrón que más está moviendo tu horario.',
      options: [
        { label: 'Me duermo demasiado tarde', value: 'late-sleep' },
        { label: 'Duermo y despierto a horas aleatorias', value: 'random' },
        { label: 'El fin de semana arruina la semana', value: 'weekend-drift' },
      ],
    },
    {
      id: 'goalWake',
      title: '¿Qué ancla de despertar quieres?',
      helper: 'Elige la que realmente puedas sostener, no la perfecta.',
      options: [
        { label: 'Temprana y constante', value: 'early' },
        { label: 'Horario normal de trabajo', value: 'normal' },
        { label: 'Un reinicio más suave', value: 'gentle' },
      ],
    },
    {
      id: 'napping',
      title: '¿Las siestas lo empeoran?',
      helper: 'Esto ayuda a ajustar el reinicio sin volverlo heroico.',
      options: [
        { label: 'Sí, seguido', value: 'often' },
        { label: 'A veces', value: 'sometimes' },
        { label: 'No mucho', value: 'rarely' },
      ],
    },
    {
      id: 'nightEnergy',
      title: '¿Cómo suelen sentirse las noches?',
      helper: 'Elige el patrón habitual, no solo el de hoy.',
      options: [
        { label: 'Segundo aire / acelerado', value: 'wired' },
        { label: 'Con sueño pero inestable', value: 'inconsistent' },
        { label: 'Más o menos normal pero frágil', value: 'mostly-normal' },
      ],
    },
  ],
};

const questionValuesTh: Record<ScenarioKey, Question[]> = {
  'fall-asleep': [
    {
      id: 'tryingFor',
      title: 'พยายามนอนมานานแค่ไหนแล้ว?',
      helper: 'เลือกช่วงเวลาที่ใกล้ที่สุดก็พอ ไม่ต้องเป๊ะมาก',
      options: [
        { label: 'น้อยกว่า 20 นาที', value: 'under-20' },
        { label: '20 ถึง 60 นาที', value: '20-60' },
        { label: 'มากกว่า 1 ชั่วโมง', value: 'over-60' },
      ],
    },
    {
      id: 'state',
      title: 'ตอนนี้อะไรตรงที่สุด?',
      helper: 'เลือกปัญหาที่ดังที่สุดตอนนี้ ไม่ต้องเลือกทุกอย่างพร้อมกัน',
      options: [
        { label: 'ความคิดวิ่งไม่หยุด', value: 'mind-racing' },
        { label: 'ร่างกายกระสับกระส่าย', value: 'restless' },
        { label: 'ง่วงแต่ยังค้างอยู่', value: 'stuck-awake' },
        { label: 'เผลอดูเวลาเรื่อย ๆ', value: 'clock-checking' },
      ],
    },
    {
      id: 'lateStimulus',
      title: 'คืนนี้มีคาเฟอีนดึก ๆ หรือใช้หน้าจอเยอะไหม?',
      helper: 'เราต้องการแค่ภาพรวมว่ามีอะไรที่ยังดันความตื่นอยู่หรือเปล่า',
      options: [
        { label: 'มี', value: 'yes' },
        { label: 'ไม่มี', value: 'no' },
      ],
    },
    {
      id: 'wakeNeed',
      title: 'พรุ่งนี้ต้องตื่นเช้าแค่ไหน?',
      helper: 'ช่วยกำหนดว่าควรปกป้องวันพรุ่งนี้มากแค่ไหน',
      options: [
        { label: 'เช้ามาก', value: 'early' },
        { label: 'เช้าปกติ', value: 'normal' },
        { label: 'ยืดหยุ่นได้บ้าง', value: 'flexible' },
      ],
    },
  ],
  'wake-at-night': [
    {
      id: 'awakeFor',
      title: 'ตื่นมานานแค่ไหนแล้ว?',
      helper: 'กะคร่าว ๆ ก็พอ ไม่ต้องกลับไปดูเวลาอีก',
      options: [
        { label: 'ไม่กี่นาที', value: 'few' },
        { label: '10 ถึง 30 นาที', value: '10-30' },
        { label: 'เกิน 30 นาที', value: '30-plus' },
      ],
    },
    {
      id: 'wakeTrigger',
      title: 'อะไรน่าจะปลุกคุณขึ้นมา?',
      helper: 'เลือกอันที่ใกล้ที่สุดพอ ไม่ต้องมั่นใจร้อยเปอร์เซ็นต์',
      options: [
        { label: 'ความเครียดหรือความคิด', value: 'stress' },
        { label: 'เสียงหรือสภาพแวดล้อม', value: 'noise' },
        { label: 'เข้าห้องน้ำ / ไม่สบายตัว', value: 'physical' },
        { label: 'ไม่รู้เลย', value: 'unknown' },
      ],
    },
    {
      id: 'phoneUsed',
      title: 'เริ่มหยิบมือถือหรือดูเวลาแล้วไหม?',
      helper: 'แค่เหลือบมองก็เปลี่ยนจังหวะของก้าวถัดไปได้',
      options: [
        { label: 'ใช่', value: 'yes' },
        { label: 'ยัง', value: 'no' },
      ],
    },
    {
      id: 'morningPressure',
      title: 'พรุ่งนี้ต้องพร้อมใช้งานแต่เช้าไหม?',
      helper: 'ช่วยกำหนดว่าจะปกป้องจุดยึดตอนเช้ามากแค่ไหน',
      options: [
        { label: 'ใช่ เช้ามาก', value: 'high' },
        { label: 'ปานกลาง', value: 'medium' },
        { label: 'ไม่เร่งมาก', value: 'low' },
      ],
    },
  ],
  'reset-schedule': [
    {
      id: 'currentPattern',
      title: 'ช่วงนี้ส่วนใหญ่เกิดอะไรขึ้นในตอนกลางคืน?',
      helper: 'เลือกแบบที่ทำให้ตารางไหลมากที่สุด',
      options: [
        { label: 'หลับช้าเกินไป', value: 'late-sleep' },
        { label: 'เวลานอนและเวลาตื่นมั่วไปหมด', value: 'random' },
        { label: 'ตารางวันหยุดพังวันทำงาน', value: 'weekend-drift' },
      ],
    },
    {
      id: 'goalWake',
      title: 'อยากได้จุดยึดเวลาตื่นแบบไหน?',
      helper: 'เลือกแบบที่ปกป้องได้จริง ไม่ใช่แบบที่สมบูรณ์แบบ',
      options: [
        { label: 'เช้าและสม่ำเสมอ', value: 'early' },
        { label: 'จังหวะวันทำงานปกติ', value: 'normal' },
        { label: 'รีเซ็ตแบบนุ่มกว่า', value: 'gentle' },
      ],
    },
    {
      id: 'napping',
      title: 'งีบทำให้แย่ลงไหม?',
      helper: 'ช่วยปรับความเข้มของรีเซ็ตโดยไม่ทำให้หนักเกินไป',
      options: [
        { label: 'ใช่ บ่อย', value: 'often' },
        { label: 'บางครั้ง', value: 'sometimes' },
        { label: 'ไม่ค่อย', value: 'rarely' },
      ],
    },
    {
      id: 'nightEnergy',
      title: 'ตอนเย็นมักรู้สึกแบบไหน?',
      helper: 'เลือกแพตเทิร์นปกติ ไม่ใช่แค่คืนนี้',
      options: [
        { label: 'ยิ่งดึกยิ่งตื่น', value: 'wired' },
        { label: 'ง่วงแต่ไม่คงที่', value: 'inconsistent' },
        { label: 'ค่อนข้างปกติแต่ไม่นิ่ง', value: 'mostly-normal' },
      ],
    },
  ],
};

const questionValuesHi: Record<ScenarioKey, Question[]> = {
  'fall-asleep': [
    {
      id: 'tryingFor',
      title: 'आप कब से सोने की कोशिश कर रहे हैं?',
      helper: 'जो विकल्प सबसे करीब हो वही चुनें। बिल्कुल सटीक होना जरूरी नहीं है।',
      options: [
        { label: '20 मिनट से कम', value: 'under-20' },
        { label: '20 से 60 मिनट', value: '20-60' },
        { label: '1 घंटे से ज़्यादा', value: 'over-60' },
      ],
    },
    {
      id: 'state',
      title: 'अभी सबसे सही क्या लग रहा है?',
      helper: 'सबसे तेज़ समस्या चुनें, सारी समस्याएं एक साथ नहीं।',
      options: [
        { label: 'दिमाग बहुत तेज़ चल रहा है', value: 'mind-racing' },
        { label: 'शरीर बेचैन है', value: 'restless' },
        { label: 'नींद है लेकिन जागा हुआ हूँ', value: 'stuck-awake' },
        { label: 'मैं बार-बार समय देख रहा हूँ', value: 'clock-checking' },
      ],
    },
    {
      id: 'lateStimulus',
      title: 'क्या आपने देर से कैफीन ली या बहुत स्क्रीन देखी?',
      helper: 'हमें बस इतना जानना है कि क्या कोई चीज़ अभी भी आपको सतर्क रख रही है।',
      options: [
        { label: 'हाँ', value: 'yes' },
        { label: 'नहीं', value: 'no' },
      ],
    },
    {
      id: 'wakeNeed',
      title: 'कल आपको कितनी जल्दी उठना है?',
      helper: 'इससे तय होगा कि कल की सुरक्षा कितनी सख्त रखनी है।',
      options: [
        { label: 'बहुत जल्दी', value: 'early' },
        { label: 'सामान्य सुबह', value: 'normal' },
        { label: 'थोड़ी लचीलापन है', value: 'flexible' },
      ],
    },
  ],
  'wake-at-night': [
    {
      id: 'awakeFor',
      title: 'आप कब से जाग रहे हैं?',
      helper: 'लगभग का अंदाज़ा काफी है। समय फिर से देखने की जरूरत नहीं है।',
      options: [
        { label: 'कुछ मिनट', value: 'few' },
        { label: '10 से 30 मिनट', value: '10-30' },
        { label: '30 मिनट से ज़्यादा', value: '30-plus' },
      ],
    },
    {
      id: 'wakeTrigger',
      title: 'क्या चीज़ आपको जगा गई होगी?',
      helper: 'जो सबसे करीब लगे वही चुनें। पूरी तरह निश्चित होना जरूरी नहीं है।',
      options: [
        { label: 'तनाव या विचार', value: 'stress' },
        { label: 'शोर या माहौल', value: 'noise' },
        { label: 'बाथरूम / शारीरिक असहजता', value: 'physical' },
        { label: 'पता नहीं', value: 'unknown' },
      ],
    },
    {
      id: 'phoneUsed',
      title: 'क्या आपने फोन या समय देखना शुरू कर दिया है?',
      helper: 'एक छोटी सी नज़र भी अगले कदम का सुर बदल सकती है।',
      options: [
        { label: 'हाँ', value: 'yes' },
        { label: 'नहीं', value: 'no' },
      ],
    },
    {
      id: 'morningPressure',
      title: 'क्या कल सुबह आपको जल्दी ठीक से काम करना है?',
      helper: 'इससे तय होता है कि सुबह के एंकर को कितना बचाना है।',
      options: [
        { label: 'हाँ, बहुत जल्दी', value: 'high' },
        { label: 'कुछ हद तक', value: 'medium' },
        { label: 'ज़्यादा जरूरी नहीं', value: 'low' },
      ],
    },
  ],
  'reset-schedule': [
    {
      id: 'currentPattern',
      title: 'इन दिनों ज़्यादातर रातों में क्या हो रहा है?',
      helper: 'वही पैटर्न चुनें जो सबसे ज़्यादा बहाव ला रहा है।',
      options: [
        { label: 'बहुत देर से नींद आ रही है', value: 'late-sleep' },
        { label: 'सोने और उठने का समय बेतरतीब है', value: 'random' },
        { label: 'वीकेंड का शेड्यूल वीकडे बिगाड़ रहा है', value: 'weekend-drift' },
      ],
    },
    {
      id: 'goalWake',
      title: 'आप किस तरह का उठने का एंकर चाहते हैं?',
      helper: 'वही चुनें जिसे आप वास्तव में निभा सकें, न कि सबसे परफेक्ट विकल्प।',
      options: [
        { label: 'जल्दी और स्थिर', value: 'early' },
        { label: 'सामान्य कामकाजी समय', value: 'normal' },
        { label: 'थोड़ा नरम रीसेट', value: 'gentle' },
      ],
    },
    {
      id: 'napping',
      title: 'क्या झपकियां चीज़ों को और खराब कर रही हैं?',
      helper: 'इससे रीसेट की तीव्रता तय होगी, बिना उसे बहुत कठिन बनाए।',
      options: [
        { label: 'हाँ, अक्सर', value: 'often' },
        { label: 'कभी-कभी', value: 'sometimes' },
        { label: 'ज़्यादा नहीं', value: 'rarely' },
      ],
    },
    {
      id: 'nightEnergy',
      title: 'शामें आमतौर पर कैसी लगती हैं?',
      helper: 'सिर्फ आज की रात नहीं, सामान्य पैटर्न चुनें।',
      options: [
        { label: 'दूसरी ऊर्जा / बहुत सक्रिय', value: 'wired' },
        { label: 'नींद आती है लेकिन स्थिर नहीं', value: 'inconsistent' },
        { label: 'ज्यादातर सामान्य लेकिन अस्थिर', value: 'mostly-normal' },
      ],
    },
  ],
};

const questionValuesKo: Record<ScenarioKey, Question[]> = {
  'fall-asleep': [
    {
      id: 'tryingFor',
      title: '얼마나 잠들려고 해왔나요?',
      helper: '가장 가까운 구간이면 충분합니다. 정확할 필요는 없습니다.',
      options: [
        { label: '20분 미만', value: 'under-20' },
        { label: '20분에서 60분', value: '20-60' },
        { label: '1시간 이상', value: 'over-60' },
      ],
    },
    {
      id: 'state',
      title: '지금 가장 맞는 느낌은 무엇인가요?',
      helper: '모든 문제가 아니라 가장 큰 문제 하나를 고르세요.',
      options: [
        { label: '생각이 너무 빨라요', value: 'mind-racing' },
        { label: '몸이 안절부절못해요', value: 'restless' },
        { label: '졸린데 깨어 있어요', value: 'stuck-awake' },
        { label: '계속 시간을 확인해요', value: 'clock-checking' },
      ],
    },
    {
      id: 'lateStimulus',
      title: '늦은 카페인이나 많은 화면 사용이 있었나요?',
      helper: '아직 각성을 밀어 올리는 것이 있는지 대략만 알면 됩니다.',
      options: [
        { label: '예', value: 'yes' },
        { label: '아니요', value: 'no' },
      ],
    },
    {
      id: 'wakeNeed',
      title: '내일 얼마나 일찍 일어나야 하나요?',
      helper: '내일을 얼마나 보호해야 할지 정하는 데 씁니다.',
      options: [
        { label: '아주 일찍', value: 'early' },
        { label: '평소 아침 정도', value: 'normal' },
        { label: '조금 유연해요', value: 'flexible' },
      ],
    },
  ],
  'wake-at-night': [
    {
      id: 'awakeFor',
      title: '얼마나 깨어 있었나요?',
      helper: '대략이면 충분합니다. 다시 시간을 확인할 필요는 없습니다.',
      options: [
        { label: '몇 분', value: 'few' },
        { label: '10분에서 30분', value: '10-30' },
        { label: '30분 이상', value: '30-plus' },
      ],
    },
    {
      id: 'wakeTrigger',
      title: '무엇 때문에 깬 것 같나요?',
      helper: '가장 가까운 것을 고르세요. 확신할 필요는 없습니다.',
      options: [
        { label: '스트레스나 생각', value: 'stress' },
        { label: '소음이나 환경', value: 'noise' },
        { label: '화장실 / 몸의 불편감', value: 'physical' },
        { label: '잘 모르겠어요', value: 'unknown' },
      ],
    },
    {
      id: 'phoneUsed',
      title: '이미 휴대폰이나 시간을 확인했나요?',
      helper: '짧게 보는 것만으로도 다음 흐름이 달라질 수 있습니다.',
      options: [
        { label: '예', value: 'yes' },
        { label: '아니요', value: 'no' },
      ],
    },
    {
      id: 'morningPressure',
      title: '내일 아침 일찍 제 기능을 해야 하나요?',
      helper: '아침 앵커를 얼마나 보호할지 정합니다.',
      options: [
        { label: '예, 아주 일찍', value: 'high' },
        { label: '어느 정도', value: 'medium' },
        { label: '급하진 않아요', value: 'low' },
      ],
    },
  ],
  'reset-schedule': [
    {
      id: 'currentPattern',
      title: '요즘 대부분의 밤에는 어떤 일이 있나요?',
      helper: '가장 큰 흔들림을 만드는 패턴을 고르세요.',
      options: [
        { label: '너무 늦게 잠들어요', value: 'late-sleep' },
        { label: '자는 시간과 깨는 시간이 들쭉날쭉해요', value: 'random' },
        { label: '주말 일정이 평일을 망쳐요', value: 'weekend-drift' },
      ],
    },
    {
      id: 'goalWake',
      title: '어떤 기상 앵커를 원하나요?',
      helper: '완벽한 것보다 실제로 지킬 수 있는 것을 고르세요.',
      options: [
        { label: '이르고 일정하게', value: 'early' },
        { label: '보통의 평일 리듬', value: 'normal' },
        { label: '조금 더 부드러운 리셋', value: 'gentle' },
      ],
    },
    {
      id: 'napping',
      title: '낮잠이 더 악화시키고 있나요?',
      helper: '리셋 강도를 정하는 데 도움이 됩니다. 과하게 만들 필요는 없습니다.',
      options: [
        { label: '예, 자주 그래요', value: 'often' },
        { label: '가끔', value: 'sometimes' },
        { label: '그렇진 않아요', value: 'rarely' },
      ],
    },
    {
      id: 'nightEnergy',
      title: '저녁은 보통 어떤 느낌인가요?',
      helper: '오늘 밤만이 아니라 평소 패턴을 고르세요.',
      options: [
        { label: '밤이 되면 다시 각성돼요', value: 'wired' },
        { label: '졸리지만 들쭉날쭉해요', value: 'inconsistent' },
        { label: '대체로 정상인데 불안정해요', value: 'mostly-normal' },
      ],
    },
  ],
};

type QuestionLocale = Locale;

const questionValues: Record<QuestionLocale, Record<ScenarioKey, Question[]>> = {
  en: questionValuesEn,
  zh: questionValuesZh,
  ja: questionValuesJa,
  es: questionValuesEs,
  th: questionValuesTh,
  hi: questionValuesHi,
  ko: questionValuesKo,
};

const questionLocaleFallback: Record<Locale, QuestionLocale> = {
  en: 'en',
  zh: 'zh',
  ja: 'ja',
  es: 'es',
  th: 'th',
  hi: 'hi',
  ko: 'ko',
};

const uiBase = {
  header: {
    tagline: 'Quiet guidance for rough nights',
    calm: 'Calm',
    about: 'About',
    disclaimer: 'Disclaimer',
    language: 'Language',
  },
  footer: {
    blurb: 'Built for the moment sleep goes sideways: fewer decisions, lower stimulation, and a clearer next move.',
    calm: 'Calm',
    about: 'About',
    disclaimer: 'Disclaimer',
    startOver: 'Start over',
  },
  home: {
    eyebrow: 'Night-use intervention',
    title: 'When sleep breaks, make the next decision quieter.',
    intro: 'Sleep Rescue is a calm entry point for bad nights: choose the closest situation, answer a few focused questions, and follow a plan that does not make the night louder.',
    ctaStart: 'Start with a scenario',
    ctaCalm: 'Open calm mode',
    protocolEyebrow: 'What happens here',
    protocolSteps: [
      {
        label: 'Choose the closest situation',
        text: 'Start with the version of the night you are actually in, not the perfect explanation.',
      },
      {
        label: 'Answer four quiet questions',
        text: 'The flow stays short so you can decide quickly while tired.',
      },
      {
        label: 'Follow one restrained protocol',
        text: 'You leave with a primary action, a fallback step, and guidance for tomorrow.',
      },
    ],
    protocolNote: 'No account, no sleep score, and no generic wellness noise. Just a deliberate tool for rough nights.',
    chooseEyebrow: 'Choose the closest situation',
    chooseTitle: 'Open the right protocol.',
    chooseIntro: 'Each route stays short, deliberate, and low-stimulation so the interface feels usable in the middle of the night.',
    reassurance: [
      {
        title: 'Built for 2am',
        text: 'No bright dashboards, no feature maze, and no long reading session when you are already overloaded.',
      },
      {
        title: 'Fewer decisions',
        text: 'The product is designed to narrow your next move, not expand the list of things you could worry about.',
      },
      {
        title: 'Protect tomorrow',
        text: 'Each plan helps with tonight without turning tomorrow into a recovery spiral.',
      },
    ],
    scenarioCta: 'Open protocol',
    resumeEyebrow: 'Pick up where you left off',
    resumePlanTitle: 'Your last plan is still here.',
    resumePlanBody: 'Jump back into the latest sleep protocol instead of starting from scratch.',
    resumePlanCta: 'Open last plan',
    resumeDraftTitle: 'Your in-progress check-in is saved.',
    resumeDraftBody: 'Continue the last question flow from where you stopped.',
    resumeDraftCta: 'Continue flow',
    faqEyebrow: 'Sleep questions, answered quietly',
    faqTitle: 'A few useful answers before the night gets louder.',
    faqIntro: 'These are the practical questions people usually have when they are tired, overstimulated, or deciding what to do next.',
    faqItems: [
      {
        question: 'Is Sleep Rescue medical advice?',
        answer: 'No. It is a low-stimulation decision tool for rough nights, not diagnosis, treatment, or emergency support.',
      },
      {
        question: 'What if I still cannot sleep after using it?',
        answer: 'That is exactly why the plans include a fallback step and a “still awake” section. The goal is not perfection. It is to stop the night from escalating.',
      },
      {
        question: 'Do I need an account or app download?',
        answer: 'No. The product is designed to work quickly in the browser with no account wall and no setup before you can use it.',
      },
      {
        question: 'Which scenario should I choose if more than one feels true?',
        answer: 'Choose the one that matches the current moment best. The product is intentionally built around the next decision, not a perfect explanation of your sleep.',
      },
    ],
  },
  flow: {
    approach: 'Approach',
    progress: 'Progress',
    totalLabel: 'of',
    startOver: 'Start over',
    bestFit: 'Best fit, not perfect.',
    selectionSaved: 'Selection saved.',
    chooseClosest: 'Choose the closest match.',
    back: 'Back',
    continue: 'Continue',
    buildPlan: 'Build tonight’s plan',
    question: 'Question',
    helperDefault: 'Move quickly. The goal is a calmer next step, not a perfect explanation.',
    helperReset: 'Keep this boring, stable, and repeatable.',
    resumedDraft: 'Your last answers were restored so you can keep going without restarting the night.',
    resetProgress: 'Start this flow over',
    backToPlan: 'Back to plan',
    quietNotes: {
      'fall-asleep': [
        'Choose the closest fit and keep moving. No answer needs to be exact.',
        'The result will focus on one primary action instead of ten sleep tips.',
      ],
      'wake-at-night': [
        'If you are torn between two answers, choose the one that keeps stimulation lower.',
        'You will end with a short plan for now, next, and tomorrow morning.',
      ],
      'reset-schedule': [
        'This route is for rebuilding an anchor, not chasing a perfect bedtime tonight.',
        'The result stays small enough to repeat for a few days without friction.',
      ],
    },
  },
  plan: {
    loadingEyebrow: 'Loading',
    loading: 'Loading tonight’s plan…',
    noPlanEyebrow: 'No plan saved',
    noPlanTitle: 'Start with what is happening right now.',
    noPlanIntro: 'Pick a scenario first so Sleep Rescue can build a protocol for tonight instead of dropping you into an empty page.',
    goHome: 'Go home',
    calm: 'Open calm mode',
    protocol: 'Tonight’s protocol',
    scenario: 'Scenario',
    primaryAction: 'Primary action',
    sectionEyebrow: 'Protocol step',
    rerun: 'Run the questions again',
    stillAwake: 'If sleep is still resisting',
    quietReminder: 'Quiet reminder',
    summaryLabel: 'Summary',
    copyHeading: 'Tonight’s plan',
    copyPlan: 'Copy plan',
    copyHint: 'Copy this plan to notes, chat, or wherever you will actually look at it tonight.',
    copySuccess: 'Plan copied.',
    copyFailed: 'Could not copy automatically. Try again on a secure browser session.',
    nextMovesEyebrow: 'Next moves',
    reminderBody: 'Keep the plan small. The goal is to lower friction and protect the night, not build a whole new sleep system at 2am.',
  },
  calm: {
    eyebrow: 'Calm mode',
    title: 'Follow one quiet rhythm.',
    intro: 'Let the night stay unfinished for a minute. Breathe in gently, breathe out longer, and give the brain less to hold.',
    presetLabels: {
      '60': '60 sec',
      '120': '2 min',
      '300': '5 min',
    },
    presets: {
      '60': 'A very short interruption when you feel the night starting to escalate.',
      '120': 'A calmer reset when you need a little more room before deciding anything else.',
      '300': 'A longer quiet interval when your system needs more time to settle down.',
    },
    oneMinute: 'One minute reset',
    twoMinute: 'Two minute downshift',
    fiveMinute: 'Five minute calm mode',
    inhale: 'Inhale for 4',
    exhale: 'Exhale for 6',
    pause: 'Pause the rhythm',
    begin: 'Begin the rhythm',
    restart: 'Start again',
    backToPlan: 'Back to plan',
    home: 'Go home',
    completeEyebrow: 'Finished',
    completeTitle: 'Nice. Let the next move stay gentle.',
    completeBody: 'You do not need to solve the whole night from here. Go back to your plan and follow the smallest next step.',
    completePrimaryCta: 'Return to tonight’s plan',
    completeNote: 'The breathing set is done. Keep the next step simple and low-stimulation.',
    guidance: [
      {
        title: 'If frustration rises',
        text: 'Step away from the bed briefly instead of bargaining with the clock.',
      },
      {
        title: 'Keep the room dim',
        text: 'Let the screen act more like a night light than another source of stimulation.',
      },
      {
        title: 'Come back softer',
        text: 'Return only when the body feels heavier or less vigilant, not when you feel pressured.',
      },
    ],
  },
};

type UiCopy = typeof uiBase;

export const uiText: Record<Locale, UiCopy> = {
  en: uiBase,
  zh: {
    ...uiBase,
    header: {
      ...uiBase.header,
      tagline: '糟糕夜晚时的安静指引',
      calm: 'Calm 模式',
      about: '关于',
      disclaimer: '免责声明',
      language: '语言',
    },
    footer: {
      ...uiBase.footer,
      blurb: '专门给睡眠突然失控的时刻：更少选择、更低刺激、下一步更清楚。',
      calm: 'Calm 模式',
      about: '关于',
      disclaimer: '免责声明',
      startOver: '重新开始',
    },
    home: {
      ...uiBase.home,
      eyebrow: '夜间干预工具',
      title: '当睡眠出问题时，让下一步更安静。',
      intro: 'Sleep Rescue 是一个给糟糕夜晚用的安静入口：先选最接近的情况，回答几个聚焦问题，再拿到一套不会把夜晚越弄越吵的方案。',
      ctaStart: '从场景开始',
      ctaCalm: '打开 Calm 模式',
      protocolEyebrow: '这里会发生什么',
      protocolSteps: [
        {
          label: '先选最接近的情况',
          text: '先从你真正处在的夜晚版本开始，不用追求最完美的解释。',
        },
        {
          label: '回答四个安静问题',
          text: '流程会保持很短，好让你在疲惫状态下也能迅速做决定。',
        },
        {
          label: '只跟一套克制方案走',
          text: '最后拿到主动作、兜底动作，以及给明天的简单指导。',
        },
      ],
      protocolNote: '不需要账号，不给睡眠分数，也不塞满泛泛内容，只处理糟糕的夜晚。',
      chooseEyebrow: '选择最接近的情况',
      chooseTitle: '打开对的方案。',
      chooseIntro: '每条路线都尽量短、克制、低刺激，适合半夜还在用。',
      reassurance: [
        {
          title: '就是给 2am 做的',
          text: '没有刺眼仪表盘，没有功能迷宫，也没有在你已经过载时还要读很久的内容。',
        },
        {
          title: '更少决策',
          text: '产品的目标是收束下一步，而不是继续扩大你可以焦虑的事项清单。',
        },
        {
          title: '尽量保护明天',
          text: '每个方案都在处理今晚的问题，同时避免把明天一起拖进恢复漩涡。',
        },
      ],
      scenarioCta: '进入方案',
      resumeEyebrow: '继续上次进度',
      resumePlanTitle: '上次生成的方案还在。',
      resumePlanBody: '不用重头开始，可以直接回到你上次的睡眠方案。',
      resumePlanCta: '打开上次方案',
      resumeDraftTitle: '上次做到一半的流程已保存。',
      resumeDraftBody: '可以直接从上次停下来的问题继续。',
      resumeDraftCta: '继续答题流程',
      faqEyebrow: '睡眠常见问题',
      faqTitle: '在夜晚变得更吵之前，先把几个关键问题说清楚。',
      faqIntro: '这些是人在疲惫、过载、又必须决定下一步时，最常会冒出来的几个问题。',
      faqItems: [
        {
          question: 'Sleep Rescue 是医疗建议吗？',
          answer: '不是。它是给糟糕夜晚用的低刺激决策工具，不是诊断、治疗，也不能替代紧急支持。',
        },
        {
          question: '如果用了之后还是睡不着怎么办？',
          answer: '这正是为什么方案里会包含兜底动作和“如果还是不顺”部分。目标不是一次完美睡着，而是别让夜晚继续升级。',
        },
        {
          question: '需要注册账号或下载 App 吗？',
          answer: '不需要。产品就是为了让你在浏览器里尽快用起来，不设账号墙，也不要求提前配置。',
        },
        {
          question: '如果几个场景都像，我该选哪个？',
          answer: '选最符合“此刻”的那个就行。产品关注的是你接下来该做什么，而不是把睡眠问题解释得绝对完整。',
        },
      ],
    },
    flow: {
      ...uiBase.flow,
      approach: '方式',
      progress: '进度',
      totalLabel: '共',
      startOver: '重新开始',
      bestFit: '选最接近的，不求完美。',
      selectionSaved: '已记录本题选择。',
      chooseClosest: '先选最接近的一项。',
      back: '返回',
      continue: '继续',
      buildPlan: '生成今晚方案',
      question: '问题',
      helperDefault: '尽量快一点。目标是找到更 calm 的下一步，不是找到完美解释。',
      helperReset: '让它保持无聊、稳定、可重复。',
      resumedDraft: '已帮你恢复上次的答案，可以直接接着走，不用重新开始整个夜晚。',
      resetProgress: '重新开始这条流程',
      backToPlan: '回到方案页',
      quietNotes: {
        'fall-asleep': [
          '选最接近的就继续往下走，不需要每一题都答得特别准。',
          '结果会收束成一个主动作，而不是再塞给你十条睡眠建议。',
        ],
        'wake-at-night': [
          '如果两个答案都像，优先选那个能让刺激更低的。',
          '最后会给你一套针对现在、接下来、和明早的短方案。',
        ],
        'reset-schedule': [
          '这条路线是为了重建锚点，不是今晚就把作息修到完美。',
          '结果会保持足够小，方便你连续几天低摩擦重复。',
        ],
      },
    },
    plan: {
      ...uiBase.plan,
      loadingEyebrow: '加载中',
      loading: '正在加载今晚方案…',
      noPlanEyebrow: '还没有保存方案',
      noPlanTitle: '先从你现在的情况开始。',
      noPlanIntro: '先选一个场景，Sleep Rescue 才能给今晚生成对应方案，而不是把你丢进空页面。',
      goHome: '回首页',
      calm: '打开 Calm 模式',
      protocol: '今晚方案',
      scenario: '场景',
      primaryAction: '主动作',
      sectionEyebrow: '方案步骤',
      rerun: '重新跑一遍问题',
      stillAwake: '如果还是不顺',
      quietReminder: '提醒',
      summaryLabel: '摘要',
      copyHeading: '今晚方案',
      copyPlan: '复制方案',
      copyHint: '可以把方案复制到备忘录、聊天窗口，或任何你今晚真的会看的地方。',
      copySuccess: '方案已复制。',
      copyFailed: '自动复制失败了，请在安全浏览器环境里再试一次。',
      nextMovesEyebrow: '下一步',
      reminderBody: '方案尽量保持小一点。目标是降低摩擦、保护夜晚，而不是在 2am 建一套完整睡眠系统。',
    },
    calm: {
      ...uiBase.calm,
      eyebrow: 'Calm 模式',
      title: '先跟住一个安静节奏。',
      intro: '先允许这个夜晚暂时没结束。轻轻吸气、慢慢呼气，让大脑少抓一点东西。',
      presetLabels: {
        '60': '60 秒',
        '120': '2 分钟',
        '300': '5 分钟',
      },
      presets: {
        '60': '当你感觉夜晚开始升级时，用一个很短的中断先把局面压住。',
        '120': '当你需要多一点空间再做下一步决定时，用这段更稳的重置。',
        '300': '当神经系统需要更久一点的平复时间时，给自己一个更长的安静区间。',
      },
      oneMinute: '1 分钟重置',
      twoMinute: '2 分钟降速',
      fiveMinute: '5 分钟 Calm 模式',
      inhale: '吸气 4 拍',
      exhale: '呼气 6 拍',
      pause: '暂停节奏',
      begin: '开始节奏',
      restart: '重新开始',
      backToPlan: '回到方案页',
      home: '回首页',
      completeEyebrow: '已完成',
      completeTitle: '很好，下一步继续保持轻一点。',
      completeBody: '你现在不需要把整晚都解决掉，只要回到方案页，跟着最小的下一步走。',
      completePrimaryCta: '回到今晚方案',
      completeNote: '这一轮呼吸已经完成。接下来继续保持简单、低刺激。',
      guidance: [
        {
          title: '如果挫败感上来',
          text: '短暂离开床，比继续和时间讨价还价更有用。',
        },
        {
          title: '让房间保持昏暗',
          text: '让屏幕更像夜灯，而不是新的刺激源。',
        },
        {
          title: '更柔和地回来',
          text: '等身体更沉、更松一点再回去，不要在压力感最重时回床。',
        },
      ],
    },
  },
  ja: {
    ...uiBase,
    header: {
      ...uiBase.header,
      tagline: '荒れた夜のための静かなガイド',
      about: '概要',
      disclaimer: '免責事項',
      language: '言語',
    },
    home: {
      ...uiBase.home,
      eyebrow: '夜の介入ツール',
      title: '眠りが崩れたら、次の判断をもっと静かに。',
      intro: 'Sleep Rescue は荒れた夜のための静かな入口です。近い状況を選び、短い質問に答え、夜をこれ以上うるさくしないプランを受け取れます。',
      ctaStart: 'シナリオから始める',
      ctaCalm: 'Calm を開く',
      chooseTitle: '正しいプロトコルを開く。',
      scenarioCta: '開く',
    },
  },
  es: {
    ...uiBase,
    header: {
      ...uiBase.header,
      tagline: 'Guía tranquila para noches difíciles',
      calm: 'Calma',
      about: 'Acerca de',
      disclaimer: 'Aviso',
      language: 'Idioma',
    },
    home: {
      ...uiBase.home,
      eyebrow: 'Intervención nocturna',
      title: 'Cuando el sueño se rompe, haz que la siguiente decisión sea más silenciosa.',
      intro: 'Sleep Rescue es una entrada tranquila para noches difíciles: elige la situación más cercana, responde unas preguntas cortas y sigue un plan que no haga la noche más ruidosa.',
      ctaStart: 'Empezar con un escenario',
      ctaCalm: 'Abrir modo calm',
      chooseTitle: 'Abre el protocolo correcto.',
      scenarioCta: 'Abrir',
    },
  },
  th: {
    ...uiBase,
    header: {
      ...uiBase.header,
      tagline: 'คำแนะนำเงียบ ๆ สำหรับคืนที่ยาก',
      about: 'เกี่ยวกับ',
      disclaimer: 'ข้อจำกัดความรับผิด',
      language: 'ภาษา',
    },
    home: {
      ...uiBase.home,
      eyebrow: 'เครื่องมือสำหรับกลางคืน',
      title: 'เมื่อการนอนเสียจังหวะ ให้การตัดสินใจถัดไปเงียบลง',
      intro: 'Sleep Rescue คือจุดเริ่มต้นที่สงบสำหรับคืนที่แย่: เลือกสถานการณ์ที่ใกล้ที่สุด ตอบคำถามสั้น ๆ แล้วทำตามแผนที่ไม่ทำให้คืนนี้วุ่นวายกว่าเดิม',
      ctaStart: 'เริ่มจากสถานการณ์',
      ctaCalm: 'เปิดโหมด calm',
      chooseTitle: 'เปิดโปรโตคอลที่ใช่',
      scenarioCta: 'เปิด',
    },
  },
  hi: {
    ...uiBase,
    header: {
      ...uiBase.header,
      tagline: 'मुश्किल रातों के लिए शांत मार्गदर्शन',
      about: 'परिचय',
      disclaimer: 'अस्वीकरण',
      language: 'भाषा',
    },
    home: {
      ...uiBase.home,
      eyebrow: 'रात के लिए इंटरवेंशन',
      title: 'जब नींद टूट जाए, अगला फ़ैसला थोड़ा शांत बनाओ।',
      intro: 'Sleep Rescue खराब रातों के लिए एक शांत प्रवेश बिंदु है: सबसे नज़दीकी स्थिति चुनें, कुछ छोटे सवालों के जवाब दें, और ऐसा प्लान पाएँ जो रात को और शोरभरा न बनाए।',
      ctaStart: 'किसी स्थिति से शुरू करें',
      ctaCalm: 'calm मोड खोलें',
      chooseTitle: 'सही प्रोटोकॉल खोलें।',
      scenarioCta: 'खोलें',
    },
  },
  ko: {
    ...uiBase,
    header: {
      ...uiBase.header,
      tagline: '힘든 밤을 위한 조용한 가이드',
      about: '소개',
      disclaimer: '면책',
      language: '언어',
    },
    home: {
      ...uiBase.home,
      eyebrow: '야간 개입 도구',
      title: '잠이 흐트러질 때, 다음 판단을 더 조용하게.',
      intro: 'Sleep Rescue 는 힘든 밤을 위한 차분한 진입점입니다. 가장 가까운 상황을 고르고, 짧은 질문에 답하고, 밤을 더 시끄럽게 만들지 않는 플랜을 받으세요.',
      ctaStart: '상황부터 시작',
      ctaCalm: 'Calm 열기',
      chooseTitle: '맞는 프로토콜 열기.',
      scenarioCta: '열기',
    },
  },
};

type InfoPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string[];
  }>;
  aside: {
    label: string;
    title: string;
    body: string;
  };
  note: {
    label: string;
    body: string;
  };
};

type InfoPageKind = 'about' | 'disclaimer';
type InfoLocale = 'en' | 'zh';

const infoLocaleFallback: Record<Locale, InfoLocale> = {
  en: 'en',
  zh: 'zh',
  ja: 'en',
  es: 'en',
  th: 'en',
  hi: 'en',
  ko: 'en',
};

const infoPageContent: Record<InfoPageKind, Record<InfoLocale, InfoPageContent>> = {
  about: {
    en: {
      eyebrow: 'About',
      title: 'Built for the moment the night starts getting noisy.',
      intro: 'Sleep Rescue is not trying to become a giant sleep platform. It is a focused intervention product for the specific moment when sleep goes wrong and decision-making gets less useful.',
      sections: [
        {
          title: 'Why it exists',
          body: [
            'Bad nights often get worse because the next decision multiplies the stimulation. The product exists to interrupt that spiral.',
            'Instead of offering a huge library of sleep content, it narrows the moment into a short route, a few questions, and a calmer next move.',
          ],
        },
        {
          title: 'How it works',
          body: [
            'Each route is intentionally brief. You choose the closest scenario, answer a small set of questions, and get a protocol with a primary action, fallback step, and guidance for the next morning or next few days.',
            'The interface is designed for low stimulation: darker surfaces, quieter hierarchy, and fewer competing panels.',
          ],
        },
      ],
      aside: {
        label: 'Product stance',
        title: 'Less input. Better next steps.',
        body: 'The goal is not to make the night feel optimized. The goal is to make it feel manageable enough to follow one calm, deliberate action.',
      },
      note: {
        label: 'What it is not',
        body: 'Sleep Rescue is not medical care, diagnosis, therapy, or a replacement for professional support when symptoms are severe or persistent.',
      },
    },
    zh: {
      eyebrow: '关于',
      title: '为“夜晚开始变吵”的那一刻而做。',
      intro: 'Sleep Rescue 不打算变成一个巨大的睡眠平台。它只专注在一个时刻：当睡眠出了问题，人的判断开始变得不那么有用。',
      sections: [
        {
          title: '为什么存在',
          body: [
            '糟糕夜晚往往会因为后续决定不断增加刺激而恶化。这个产品就是为了打断这条链。',
            '它不提供庞大的内容库，而是收束成一个短路径、几个问题、和一个更 calm 的下一步。',
          ],
        },
        {
          title: '它怎么工作',
          body: [
            '每条路线都故意做得很短。你先选场景，再拿到主动作、兜底动作，以及明早或接下来几天的指导。',
            '界面也以低刺激为原则：更暗的表面、更安静的层级、更少相互竞争的面板。',
          ],
        },
      ],
      aside: {
        label: '产品立场',
        title: '更少输入，更好的下一步。',
        body: '目标不是让夜晚显得更高效，而是让它变得足够可管理。',
      },
      note: {
        label: '它不是什么',
        body: 'Sleep Rescue 不是医疗诊断、治疗、心理咨询，也不能替代专业帮助。',
      },
    },
  },
  disclaimer: {
    en: {
      eyebrow: 'Disclaimer',
      title: 'General support for common sleep situations, not medical care.',
      intro: 'Sleep Rescue offers non-diagnostic guidance for nights when sleep is going badly. It does not replace professional evaluation or treatment.',
      sections: [
        {
          title: 'When to treat this as general guidance only',
          body: [
            'Use the app as lightweight support for common situations like difficulty falling asleep, waking in the night, or trying to rebuild a sleep schedule after drift.',
            'Its suggestions are educational and practical, not personalized medical advice or a substitute for care from a qualified clinician.',
          ],
        },
        {
          title: 'When to get professional help',
          body: [
            'If sleep problems are severe, persistent, or connected to breathing issues, chest pain, panic, safety concerns, or anything that feels urgent, seek professional help right away.',
            'If symptoms keep returning, interfere with daily functioning, or raise concerns about an underlying condition, bring them to a clinician rather than relying on an app alone.',
          ],
        },
      ],
      aside: {
        label: 'Important',
        title: 'Use judgment and seek help when needed.',
        body: 'If something feels medically serious or unsafe, do not wait for a nighttime protocol to fix it. Contact emergency services or a qualified professional instead.',
      },
      note: {
        label: 'Scope',
        body: 'This product intentionally stays narrow: a calm decision aid for rough nights, not a full treatment plan or emergency response tool.',
      },
    },
    zh: {
      eyebrow: '免责声明',
      title: '这里只提供常见睡眠问题的通用支持，不是医疗服务。',
      intro: 'Sleep Rescue 提供的是非诊断性质的夜间指导，不能替代专业评估或治疗。',
      sections: [
        {
          title: '什么时候只能把它当作一般参考',
          body: [
            '它适合用于入睡困难、夜醒、作息漂移这类常见情况的轻量支持。',
            '这里的建议属于教育和实践层面的提醒，不是个性化医疗建议。',
          ],
        },
        {
          title: '什么时候应该找专业帮助',
          body: [
            '如果问题严重、持续，或和呼吸、胸痛、惊恐、安全风险相关，请及时求助专业人士。',
            '如果反复影响日常功能，也应该找医生，而不是只依赖一个 app。',
          ],
        },
      ],
      aside: {
        label: '重要',
        title: '需要时请及时求助。',
        body: '如果情况看起来有医疗风险或不安全，不要等夜间流程来解决。',
      },
      note: {
        label: '范围',
        body: '这个产品故意保持克制：它只是糟糕夜晚里的 calm 决策辅助。',
      },
    },
  },
};


type ScenarioSeoLocale = 'en' | 'zh';

type ScenarioSeoContent = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string[];
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

const scenarioSeoLocaleFallback: Record<Locale, ScenarioSeoLocale> = {
  en: 'en',
  zh: 'zh',
  ja: 'en',
  es: 'en',
  th: 'en',
  hi: 'en',
  ko: 'en',
};

const scenarioSeoContent: Record<ScenarioSeoLocale, Record<ScenarioKey, ScenarioSeoContent>> = {
  en: {
    'fall-asleep': {
      eyebrow: 'For nights when you cannot fall asleep',
      title: 'A shorter route for “I can’t fall asleep” moments.',
      intro: 'This path is designed for the familiar late-night state where you are tired, but sleep is not arriving. Instead of adding more stimulation, it narrows the moment into a few questions and one calmer next move.',
      sections: [
        {
          title: 'What this path helps with',
          body: [
            'It is useful when your mind is racing, your body feels restless, or the pressure to fall asleep is making the bed feel worse.',
            'The goal is not to produce the perfect sleep hack. The goal is to interrupt escalation and reduce the amount of decision-making happening at bedtime.',
          ],
        },
        {
          title: 'Why the questions stay short',
          body: [
            'At bedtime, too much input often becomes its own problem. That is why the flow stays brief and focuses only on what changes the next step.',
            'Once the plan is built, you get a primary action, a fallback, and a way to protect tomorrow morning instead of spiraling into sleep math.',
          ],
        },
      ],
      faq: [
        {
          question: 'What if I have already been trying to sleep for a long time?',
          answer: 'The path still works. In that case it leans harder toward reducing pressure and may suggest a short low-light reset instead of staying stuck in bed.',
        },
        {
          question: 'Can this help if my mind will not stop racing?',
          answer: 'Yes. That is one of the main states the route is designed for. The plan tries to give the brain one simpler task instead of more things to solve.',
        },
      ],
    },
    'wake-at-night': {
      eyebrow: 'For waking up in the middle of the night',
      title: 'A gentler way back when you wake up and cannot return to sleep.',
      intro: 'This path is built for middle-of-the-night wakeups, especially when a quick glance at the phone or the clock starts turning a brief wakeup into a fully alert night.',
      sections: [
        {
          title: 'What this path is trying to prevent',
          body: [
            'The first goal is to stop the wake-up from getting louder. That means lower stimulation, less clock-checking, and fewer abrupt switches between tactics.',
            'It is a practical route for common wakeups triggered by stress, noise, physical discomfort, or that frustrating “no idea why I am awake” feeling.',
          ],
        },
        {
          title: 'How the plan stays useful at 3am',
          body: [
            'The flow avoids over-explaining. Instead, it builds a small plan for the next few minutes, plus a fallback if you are getting more alert instead of sleepier.',
            'It also helps protect the morning anchor so a single rough wakeup does not wreck the next day and the next night together.',
          ],
        },
      ],
      faq: [
        {
          question: 'Should I stay in bed no matter what?',
          answer: 'Not always. If the bed is turning into a frustration zone and you are becoming more alert, a short dim reset can be better than fighting the mattress.',
        },
        {
          question: 'What if I already checked my phone or the time?',
          answer: 'That is common, and the plan still helps. The next step is simply to lower stimulation again instead of compounding it.',
        },
      ],
    },
    'reset-schedule': {
      eyebrow: 'For rebuilding a broken sleep schedule',
      title: 'A realistic sleep schedule reset built around one anchor.',
      intro: 'This route is for the stretch where bedtime is drifting, wake times are unstable, or weekends have pulled the whole sleep schedule sideways. It focuses on a simple reset you can repeat for a few days.',
      sections: [
        {
          title: 'What makes this different from generic sleep tips',
          body: [
            'Most schedule advice becomes useless because it asks for perfection all at once. This path is narrower: pick a wake anchor, reduce drift, and keep the rules small enough to repeat.',
            'It is built for people who need a practical reset after late nights, inconsistent mornings, or a second-wind evening pattern that keeps repeating.',
          ],
        },
        {
          title: 'What the plan gives you',
          body: [
            'Instead of one vague recommendation, the route gives a tonight section, a near-term reset, and a next-few-days structure that reinforces the same anchor.',
            'That makes it easier to rebuild rhythm without turning the reset itself into another exhausting project.',
          ],
        },
      ],
      faq: [
        {
          question: 'Do I need to fix bedtime first?',
          answer: 'Usually no. This path is intentionally built around the wake anchor first, because that is often the more stable lever when the schedule is drifting.',
        },
        {
          question: 'Can this help after weekends or travel throw things off?',
          answer: 'Yes. It is useful anytime your timing has drifted and you need a calmer way to rebuild consistency over the next few days.',
        },
      ],
    },
  },
  zh: {
    'fall-asleep': {
      eyebrow: '适合“就是睡不着”的夜晚',
      title: '给“我就是睡不着”这一刻的更短路径。',
      intro: '这条路径专门处理一种很常见的夜晚状态：身体已经累了，但睡意迟迟落不下来。它不会继续往夜里塞更多刺激，而是把问题收束成几个关键判断和一个更安静的下一步。',
      sections: [
        {
          title: '这条路径主要在处理什么',
          body: [
            '当你脑子停不下来、身体有点躁、或者“必须马上睡着”的压力反而让床变得更难待下去时，这条路径就比较合适。',
            '它不是为了给你一个完美睡眠秘诀，而是为了先打断升级，把睡前决策负担降下来。',
          ],
        },
        {
          title: '为什么问题会故意保持很短',
          body: [
            '睡前输入太多，本身就可能变成新问题。所以流程只保留会影响下一步动作的那几项。',
            '做完之后，你拿到的是主动作、兜底动作，以及明早怎么尽量保护节律，而不是继续陷入“还能睡几个小时”的计算。',
          ],
        },
      ],
      faq: [
        {
          question: '如果我已经躺了很久还没睡着，这条路径还有用吗？',
          answer: '有用。这种情况下方案会更偏向先减压，必要时会提示你做一个短暂的低光重置，而不是继续在床上硬耗。',
        },
        {
          question: '如果是脑子停不下来，它能帮上忙吗？',
          answer: '可以。这正是这条路径重点处理的状态之一。核心不是再给大脑更多事情，而是给它一个更简单、更单一的跟随对象。',
        },
      ],
    },
    'wake-at-night': {
      eyebrow: '适合“半夜醒了回不去”的夜晚',
      title: '当你半夜醒来又回不去睡眠时，一条更轻的回路。',
      intro: '这条路径适合夜里醒来后，原本只是短暂清醒，却因为看了时间、刷了手机、或者开始焦虑，慢慢变成整晚越来越清醒的情况。',
      sections: [
        {
          title: '它最想阻止的是什么',
          body: [
            '第一目标是别让这次夜醒继续放大：减少刺激，不再算时间，也不要不停切换方法。',
            '无论是因为压力、噪音、身体不适，还是“也不知道为什么突然醒了”，这条路径都更关注接下来怎么收住局面。',
          ],
        },
        {
          title: '为什么它适合 3am 使用',
          body: [
            '流程不会要求你在半夜做很多解释，而是直接给出接下来几分钟怎么做，以及如果越来越清醒该怎么兜底。',
            '它还会顺手保护第二天早晨的锚点，避免一次夜醒把第二天和下一晚一起拖乱。',
          ],
        },
      ],
      faq: [
        {
          question: '是不是无论如何都应该继续躺在床上？',
          answer: '不一定。如果床已经变成挫败现场、你也越来越清醒，短暂去昏暗环境里重置一下，往往比继续硬撑更好。',
        },
        {
          question: '如果我已经看过手机或时间了，还有必要继续吗？',
          answer: '有必要。这很常见，方案仍然有效。关键是下一步把刺激重新降下来，而不是继续叠加。',
        },
      ],
    },
    'reset-schedule': {
      eyebrow: '适合重建作息锚点',
      title: '围绕一个锚点，做一个现实可执行的作息重置。',
      intro: '这条路径适合入睡时间不断后移、起床时间忽前忽后，或者周末把整周作息拉歪之后，想用一个可重复的方式慢慢拉回节律的人。',
      sections: [
        {
          title: '它和泛泛睡眠建议有什么不同',
          body: [
            '很多作息建议之所以没法执行，是因为它要求你一次性做到完美。这条路径更窄：先选一个起床锚点，再减少漂移，把规则缩小到能连续做几天。',
            '它更适合那些晚睡、晚起、夜里第二阵精神反复出现的人，而不是给一个空泛的“早点睡”口号。',
          ],
        },
        {
          title: '最后你会拿到什么',
          body: [
            '你不会只得到一句模糊建议，而是会拿到今晚怎么做、接下来几天怎么守锚点、以及如何减少继续漂移的结构。',
            '这样作息重置本身就不会变成另一个难以坚持的大工程。',
          ],
        },
      ],
      faq: [
        {
          question: '是不是应该先把入睡时间修好？',
          answer: '通常不是。这条路径故意优先围绕起床锚点，因为当作息已经漂了，起床时间往往是更稳的抓手。',
        },
        {
          question: '周末、出差、节奏打乱之后也适合用吗？',
          answer: '适合。只要你的节律出现漂移，需要用更温和的方式在接下来几天里重建一致性，这条路径就有用。',
        },
      ],
    },
  },
};

export function getScenarioSeoContent(locale: Locale, scenario: ScenarioKey) {
  return scenarioSeoContent[scenarioSeoLocaleFallback[locale]][scenario];
}

export function getScenarioMap(locale: Locale) {
  return scenarioValues[locale];
}

export function getScenarioList(locale: Locale) {
  return Object.values(scenarioValues[locale]);
}

export function isScenarioKey(value: string): value is ScenarioKey {
  return value in scenarioEn;
}

export function getQuestions(locale: Locale) {
  return questionValues[questionLocaleFallback[locale]];
}

export function getInfoPageContent(locale: Locale, kind: InfoPageKind) {
  return infoPageContent[kind][infoLocaleFallback[locale]];
}

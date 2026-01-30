import { PaliTerm } from '@/types';

export const paliDictionary: PaliTerm[] = [
  // Core Concepts (Tilakkhana)
  {
    term: 'anicca',
    pronunciation: 'ah-NEE-cha',
    meaning: 'Impermanence; the truth that all conditioned phenomena are constantly changing.',
    etymology: 'a (not) + nicca (permanent)',
    suttaRef: 'SN 22.59',
    category: 'core-concepts',
    goenkaNote: 'The first characteristic to be directly experienced in Vipassana. Observe sensations and their arising and passing.',
    practiceRelevance: 'When strong emotions arise, remember: this too is anicca. It will pass.',
    related: ['dukkha', 'anatta', 'sankhara']
  },
  {
    term: 'dukkha',
    pronunciation: 'DOO-kha',
    meaning: 'Unsatisfactoriness; suffering; the inherent dissatisfaction in clinging to what is impermanent.',
    etymology: 'du (bad) + kha (space, or axle-hole) — like a wheel that doesn\'t turn smoothly',
    suttaRef: 'SN 56.11',
    category: 'core-concepts',
    goenkaNote: 'Not mere suffering but the subtle dissatisfaction that comes from craving and aversion.',
    practiceRelevance: 'When dissatisfied, ask: "What am I clinging to?"',
    related: ['anicca', 'anatta', 'tanha']
  },
  {
    term: 'anatta',
    pronunciation: 'ah-NAH-ta',
    meaning: 'Non-self; the truth that there is no permanent, unchanging self or soul.',
    etymology: 'an (not) + atta (self)',
    suttaRef: 'SN 22.59',
    category: 'core-concepts',
    goenkaNote: 'Realized through direct observation of sensations. Who is the "I" that observes?',
    practiceRelevance: "When ego is wounded, ask: 'Which self is hurt here?'",
    related: ['anicca', 'dukkha', 'khandha']
  },
  {
    term: 'sankhara',
    pronunciation: 'san-KHA-ra',
    meaning: 'Mental formations; conditioned phenomena; volitional activities.',
    etymology: 'sam (together) + karoti (to do, make)',
    suttaRef: 'SN 12.1',
    category: 'core-concepts',
    goenkaNote: 'The deep habit patterns that condition our reactions. Purified through equanimous observation.',
    practiceRelevance: 'Reactions reveal sankharas. Observe without reacting to purify.',
    related: ['kamma', 'cetana', 'paticcasamuppada']
  },

  // Meditation (Bhavana)
  {
    term: 'sati',
    pronunciation: 'SAH-tee',
    meaning: 'Mindfulness; awareness; remembering to be present.',
    etymology: 'Root: √sar (to remember)',
    suttaRef: 'MN 10',
    category: 'meditation',
    goenkaNote: 'Not mere attention, but awareness with wisdom (sampajañña).',
    practiceRelevance: 'The foundation. "Where is my attention right now?"',
    related: ['sampajanna', 'satipatthana', 'appamada']
  },
  {
    term: 'samadhi',
    pronunciation: 'sah-MAH-dee',
    meaning: 'Concentration; one-pointedness of mind; mental collectedness.',
    etymology: 'sam (together) + a (towards) + dha (to place)',
    suttaRef: 'MN 44',
    category: 'meditation',
    goenkaNote: 'Developed through Anapana. The mind becomes sharp, fit for wisdom work.',
    practiceRelevance: 'Concentration is the tool. Wisdom is the goal.',
    related: ['jhana', 'ekaggata', 'appana']
  },
  {
    term: 'vipassana',
    pronunciation: 'vi-PAH-sa-na',
    meaning: 'Insight; seeing things as they really are; penetrative understanding.',
    etymology: 'vi (in a special way) + passana (seeing)',
    suttaRef: 'DN 22',
    category: 'meditation',
    goenkaNote: 'The technique taught by the Buddha for liberation. Direct experience of anicca, dukkha, anatta.',
    practiceRelevance: 'Not intellectual understanding but experiential realization.',
    related: ['panna', 'samadhi', 'sila']
  },
  {
    term: 'samatha',
    pronunciation: 'SAH-ma-ta',
    meaning: 'Tranquility; calm; the peaceful settling of the mind.',
    etymology: 'Root: √sam (to be calm)',
    suttaRef: 'AN 4.170',
    category: 'meditation',
    goenkaNote: 'Anapana develops samatha. Vipassana goes beyond to wisdom.',
    practiceRelevance: 'A calm mind sees more clearly.',
    related: ['samadhi', 'passaddhi', 'jhana']
  },

  // Psychology (Citta)
  {
    term: 'vedana',
    pronunciation: 'vay-DAH-na',
    meaning: 'Sensation; feeling-tone; the quality of experience as pleasant, unpleasant, or neutral.',
    etymology: 'Root: √vid (to know, feel)',
    suttaRef: 'MN 44',
    category: 'psychology',
    goenkaNote: 'The crucial link. All sankharas manifest as bodily sensations. Here is where the chain can be broken.',
    practiceRelevance: 'When triggered, ask: "What sensation is arising?"',
    related: ['kaya', 'tanha', 'upadana']
  },
  {
    term: 'tanha',
    pronunciation: 'tah-NHA',
    meaning: 'Craving; thirst; the wanting that leads to suffering.',
    etymology: 'Root: √tas (to be thirsty)',
    suttaRef: 'SN 56.11',
    category: 'psychology',
    goenkaNote: 'Arises from not understanding the impermanent nature of sensations.',
    practiceRelevance: 'When you want something urgently, that\'s tanha. Observe it.',
    related: ['lobha', 'upadana', 'dukkha']
  },
  {
    term: 'lobha',
    pronunciation: 'LOH-ba',
    meaning: 'Greed; craving; attachment; one of the three root defilements.',
    etymology: 'Root: √lubh (to desire)',
    suttaRef: 'AN 3.69',
    category: 'psychology',
    goenkaNote: 'Lobha is the blind reaction of craving to pleasant sensations.',
    practiceRelevance: 'Watch for subtle forms: wanting approval, wanting to be right.',
    related: ['tanha', 'dosa', 'moha']
  },
  {
    term: 'dosa',
    pronunciation: 'DOH-sa',
    meaning: 'Aversion; hatred; ill-will; one of the three root defilements.',
    etymology: 'Root: √dus (to spoil, hate)',
    suttaRef: 'AN 3.69',
    category: 'psychology',
    goenkaNote: 'Dosa is the blind reaction of aversion to unpleasant sensations.',
    practiceRelevance: 'Anger, resentment, wanting to hurt — all dosa. Observe the sensation.',
    related: ['lobha', 'moha', 'patigha']
  },
  {
    term: 'moha',
    pronunciation: 'MOH-ha',
    meaning: 'Delusion; ignorance; confusion; not seeing reality clearly.',
    etymology: 'Root: √muh (to be confused)',
    suttaRef: 'AN 3.69',
    category: 'psychology',
    goenkaNote: 'The root of lobha and dosa. Without moha, craving and aversion cannot arise.',
    practiceRelevance: 'When confused, ask: "What am I not seeing?"',
    related: ['avijja', 'lobha', 'dosa']
  },

  // Ethics (Sila)
  {
    term: 'sila',
    pronunciation: 'SEE-la',
    meaning: 'Morality; ethical conduct; virtue; the foundation of the path.',
    etymology: 'Root: √sil (to practice, observe)',
    suttaRef: 'DN 2',
    category: 'ethics',
    goenkaNote: 'Without sila, the mind remains agitated. It cannot concentrate. Without concentration, wisdom cannot arise.',
    practiceRelevance: 'The base of the pyramid. Check: am I harming myself or others?',
    related: ['panca-sila', 'samadhi', 'panna']
  },
  {
    term: 'metta',
    pronunciation: 'MET-ta',
    meaning: 'Loving-kindness; goodwill; unconditional friendliness toward all beings.',
    etymology: 'Root: √mid (to love)',
    suttaRef: 'Sn 1.8',
    category: 'ethics',
    goenkaNote: 'Arises naturally from purification. Share the merits at the end of each sitting.',
    practiceRelevance: 'May all beings be happy. May all beings be peaceful.',
    related: ['karuna', 'mudita', 'upekkha']
  },
  {
    term: 'karuna',
    pronunciation: 'kah-ROO-na',
    meaning: 'Compassion; the wish for beings to be free from suffering.',
    etymology: 'Root: √kar (to do, act)',
    suttaRef: 'DN 13',
    category: 'ethics',
    goenkaNote: 'Not pity, but active compassion arising from wisdom.',
    practiceRelevance: 'When you see suffering, let it move you to help.',
    related: ['metta', 'mudita', 'upekkha']
  },
  {
    term: 'upekkha',
    pronunciation: 'oo-PEK-kha',
    meaning: 'Equanimity; balanced awareness; neither craving nor aversion.',
    etymology: 'upa (towards) + ikkha (to look, see)',
    suttaRef: 'MN 118',
    category: 'ethics',
    goenkaNote: 'The goal of Vipassana practice. Observe reality with perfect balance.',
    practiceRelevance: 'Not indifference but balanced observation. "This is as it is."',
    related: ['metta', 'karuna', 'mudita']
  },

  // Hindrances (Nivarana)
  {
    term: 'kamacchanda',
    pronunciation: 'kah-ma-CHAN-da',
    meaning: 'Sensual desire; wanting pleasant experiences; one of the five hindrances.',
    etymology: 'kama (sense pleasure) + chanda (desire)',
    suttaRef: 'DN 2',
    category: 'hindrances',
    goenkaNote: 'Overcome by observing the impermanent nature of pleasant sensations.',
    practiceRelevance: 'Notice when the mind reaches for pleasure. Let it be.',
    related: ['nivarana', 'lobha', 'tanha']
  },
  {
    term: 'byapada',
    pronunciation: 'bya-PAH-da',
    meaning: 'Ill-will; hostility; resentment; one of the five hindrances.',
    etymology: 'vi (towards destruction) + apada (to go)',
    suttaRef: 'DN 2',
    category: 'hindrances',
    goenkaNote: 'Antidote: metta. But first, observe the sensation of ill-will in the body.',
    practiceRelevance: 'When aversion arises, feel it. Don\'t feed the story.',
    related: ['nivarana', 'dosa', 'patigha']
  },
  {
    term: 'thina-middha',
    pronunciation: 'TEE-na MID-ha',
    meaning: 'Sloth and torpor; mental dullness and drowsiness; one of the five hindrances.',
    etymology: 'thina (rigidity) + middha (drowsiness)',
    suttaRef: 'DN 2',
    category: 'hindrances',
    goenkaNote: 'Antidote: arouse energy. Sit straighter. Focus on subtler sensations.',
    practiceRelevance: 'When dull, ask: "Is this tiredness or avoidance?"',
    related: ['nivarana', 'viriya', 'alasya']
  },
  {
    term: 'uddhacca-kukkucca',
    pronunciation: 'ood-HA-cha kook-KOOCH-a',
    meaning: 'Restlessness and worry; agitation of mind; one of the five hindrances.',
    etymology: 'uddhacca (restlessness) + kukkucca (remorse, worry)',
    suttaRef: 'DN 2',
    category: 'hindrances',
    goenkaNote: 'Antidote: return to the breath. Let the thoughts pass. Focus on sensations.',
    practiceRelevance: 'Racing mind? Come back to the body.',
    related: ['nivarana', 'samadhi', 'passaddhi']
  },
  {
    term: 'vicikiccha',
    pronunciation: 'vi-chi-KEECH-a',
    meaning: 'Doubt; uncertainty about the teaching and practice; one of the five hindrances.',
    etymology: 'vi (apart) + cikiccha (investigation)',
    suttaRef: 'DN 2',
    category: 'hindrances',
    goenkaNote: 'Overcome by direct experience. Don\'t believe, don\'t disbelieve. Just observe.',
    practiceRelevance: 'When doubt arises, treat it as sensation. Continue practicing.',
    related: ['nivarana', 'saddha', 'panna']
  },

  // Awakening Factors (Bojjhanga)
  {
    term: 'sati-sambojjhanga',
    pronunciation: 'SAH-tee sam-BOJ-jhan-ga',
    meaning: 'Mindfulness as an awakening factor; the foundation for all other factors.',
    suttaRef: 'SN 46.3',
    category: 'awakening-factors',
    goenkaNote: 'Always the first. Without sati, the other factors cannot arise properly.',
    practiceRelevance: 'Am I aware right now? That is sati.',
    related: ['sati', 'bojjhanga']
  },
  {
    term: 'dhamma-vicaya',
    pronunciation: 'DHAM-ma vi-CHA-ya',
    meaning: 'Investigation of phenomena; examining the nature of experience.',
    etymology: 'dhamma (phenomena) + vicaya (investigation)',
    suttaRef: 'SN 46.3',
    category: 'awakening-factors',
    goenkaNote: 'Not intellectual analysis but direct experiential investigation.',
    practiceRelevance: 'What is the nature of this experience? Observe.',
    related: ['panna', 'bojjhanga']
  },
  {
    term: 'viriya',
    pronunciation: 'vi-REE-ya',
    meaning: 'Energy; effort; persistence in practice.',
    etymology: 'Root: √vir (to be heroic)',
    suttaRef: 'SN 46.3',
    category: 'awakening-factors',
    goenkaNote: 'Balanced effort — not too tight, not too loose.',
    practiceRelevance: 'Am I trying too hard? Too little?',
    related: ['bojjhanga', 'passaddhi']
  },
  {
    term: 'piti',
    pronunciation: 'PEE-tee',
    meaning: 'Joy; rapture; the pleasant mental factor arising from practice.',
    etymology: 'Root: √pi (to drink, be satisfied)',
    suttaRef: 'SN 46.3',
    category: 'awakening-factors',
    goenkaNote: 'Arises naturally from good practice. Don\'t crave it.',
    practiceRelevance: 'Joy in practice is natural. Just observe it.',
    related: ['sukha', 'bojjhanga']
  },
  {
    term: 'passaddhi',
    pronunciation: 'pa-SAD-hee',
    meaning: 'Tranquility; calm of body and mind.',
    etymology: 'pa + √sambh (to trust, be calm)',
    suttaRef: 'SN 46.3',
    category: 'awakening-factors',
    goenkaNote: 'Follows piti. The body and mind become very peaceful.',
    practiceRelevance: 'A quiet mind. A relaxed body.',
    related: ['samatha', 'bojjhanga']
  },

  // General Terms
  {
    term: 'dhamma',
    pronunciation: 'DHAM-ma',
    meaning: 'The teaching of the Buddha; truth; the nature of reality; phenomena.',
    etymology: 'Root: √dhar (to hold, support)',
    suttaRef: 'DN 16',
    category: 'general',
    goenkaNote: 'Dhamma is the universal law of nature. It was not invented — it was discovered.',
    practiceRelevance: 'The Dhamma is your guide. Experience it directly.',
    related: ['buddha', 'sangha']
  },
  {
    term: 'kalyana-mitta',
    pronunciation: 'ka-LYA-na MIT-ta',
    meaning: 'Spiritual friend; a good friend who supports your practice.',
    etymology: 'kalyana (good, beautiful) + mitta (friend)',
    suttaRef: 'SN 45.2',
    category: 'general',
    goenkaNote: 'The Buddha said the whole of the holy life is kalyana-mittata — spiritual friendship.',
    practiceRelevance: 'Who supports your growth? Cherish them.',
    related: ['sangha']
  },
  {
    term: 'sankalpa',
    pronunciation: 'san-KAL-pa',
    meaning: 'Intention; resolution; determination.',
    etymology: 'sam (together) + kalp (to prepare, arrange)',
    category: 'general',
    goenkaNote: 'Set your sankalpa before each sitting. What quality do you want to cultivate?',
    practiceRelevance: 'Morning intention. Evening review.',
    related: ['adhitthana', 'cetana']
  },
];

export const getPaliTermsByCategory = (category: string): PaliTerm[] => {
  return paliDictionary.filter(term => term.category === category);
};

export const searchPaliTerms = (query: string): PaliTerm[] => {
  const lowerQuery = query.toLowerCase();
  return paliDictionary.filter(term => 
    term.term.toLowerCase().includes(lowerQuery) ||
    term.meaning.toLowerCase().includes(lowerQuery) ||
    term.practiceRelevance?.toLowerCase().includes(lowerQuery)
  );
};

export const getPaliTerm = (termName: string): PaliTerm | undefined => {
  return paliDictionary.find(term => 
    term.term.toLowerCase() === termName.toLowerCase()
  );
};

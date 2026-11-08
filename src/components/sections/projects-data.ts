import imgFinora from '../../assets/projects/finora.png';
import imgNova from '../../assets/projects/nova.png';
import imgSpendwise from '../../assets/projects/spendwise.png';
import imgCreditCard from '../../assets/projects/credit-card-default.png';

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  number: string;
  color: string;
  image: string;
  imageAlt: string;
  /** When true, applies a smaller, wrapping-friendly title size for this card only */
  longTitle?: boolean;
  /** When true, applies a one-step-smaller title to prevent clipping on wide short words */
  compactTitle?: boolean;
  /** CSS object-position value, defaults to 'center' */
  imagePosition?: string;
  /** CSS object-fit value, defaults to 'cover' */
  objectFit?: string;
}

export const projects: Project[] = [
  {
    title: 'FINORA',
    category: 'Featured Work / Hackathon',
    description: 'Multi-agent AI CFO platform awarded 2nd Runner-Up at the 24-hour Build with Gemma, GDG TIU Buildathon. Team contribution focused on product strategy, problem definition, and the hackathon presentation.',
    tech: ['Multi-Agent Systems', 'AI', 'Product Strategy'],
    link: 'https://vibeforge-cyan.vercel.app/',
    number: '01',
    color: 'bg-[#121212]',
    image: imgFinora,
    imageAlt: 'Finora personal CFO dashboard',
    // Use contain so the full dashboard is visible — letterbox blends with dark card bg
    objectFit: 'contain',
  },
  {
    title: 'NOVA',
    category: 'Featured Work',
    description: 'An AI-powered opportunity and application copilot that assists in finding and applying for roles at scale.',
    tech: ['React', 'Vite', 'Tailwind'],
    link: 'https://nova-ai-delta-five.vercel.app/#workspace',
    github: 'https://github.com/Mk-Zone14/nova-ai',
    number: '02',
    color: 'bg-[#151515]',
    image: imgNova,
    imageAlt: 'Nova AI opportunity intelligence interface',
  },
  {
    title: 'SPENDWISE',
    category: 'Featured Work',
    description: 'A student-focused personal expense tracking application designed for minimal friction and clear financial visibility.',
    tech: ['React', 'Vite', 'Tailwind'],
    link: 'https://spendwise-beta-five.vercel.app/',
    number: '03',
    color: 'bg-[#181818]',
    image: imgSpendwise,
    imageAlt: 'SpendWise personal finance dashboard',
    // Portrait screenshot — frame the hero + stat cards at the top
    imagePosition: 'top',
    // Compact title prevents "SPENDWISE" trailing "e" from clipping
    compactTitle: true,
  },
  {
    title: 'Credit Card Default Prediction',
    category: 'Machine Learning',
    description: 'Predictive model analyzing financial data to assess credit card default probabilities.',
    tech: ['Python', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/Mk-Zone14/credit-card-default-prediction',
    number: '04',
    color: 'bg-[#1a1a1a]',
    image: imgCreditCard,
    imageAlt: 'Age versus credit limit visualization for credit card default prediction',
    // Long title — use reduced sizing for this card only
    longTitle: true,
  },
];


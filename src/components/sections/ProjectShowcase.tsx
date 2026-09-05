import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgFinora from '../../assets/projects/finora.png';
import imgNova from '../../assets/projects/nova.png';
import imgSpendwise from '../../assets/projects/spendwise.png';
import imgCreditCard from '../../assets/projects/credit-card-default.png';

gsap.registerPlugin(ScrollTrigger);

interface Project {
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

const projects: Project[] = [
  {
    title: 'FINORA',
    category: 'Featured Work / Hackathon',
    description: 'Multi-agent AI CFO platform awarded 3rd Place at the Gemini Hackathon. Team contribution focused on product strategy, problem definition, and the hackathon presentation.',
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

export const ProjectShowcase = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');

      cards.forEach((card: any, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
          id: `card-${i}`,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="work" className="relative w-full bg-background text-foreground z-10">
      <div className="pt-36 pb-16 px-6">
        <h2 className="font-display font-medium text-4xl md:text-7xl uppercase tracking-tight max-w-[90vw] mx-auto mb-16">
          Selected Work
        </h2>
      </div>

      <div className="relative">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ zIndex: index + 1 }}
            className={`project-card min-h-screen w-full ${project.color} flex flex-col justify-center border-t border-muted/10 origin-top`}
          >
            <div className="max-w-[90vw] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 px-6 pt-32 pb-24">

              {/* Project Meta */}
              <div className="col-span-1 lg:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <div className="font-sans text-xs tracking-widest uppercase text-muted mb-4">
                    Case Study {project.number}
                  </div>

                  {/*
                    For most projects: large editorial title (text-5xl → 7xl → 8xl).
                    For longTitle projects: a responsive size that prevents clipping
                    while keeping the display-font editorial feel.
                  */}
                  {project.longTitle ? (
                    // Multi-word long title: wrap-friendly with smaller size
                    <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-[1.05] mb-6 [font-synthesis:none] break-words hyphens-auto">
                      {project.title}
                    </h3>
                  ) : project.compactTitle ? (
                    // Short-but-wide title (e.g. SPENDWISE): one step smaller to prevent clipping
                    <h3 className="font-display font-bold text-4xl md:text-6xl lg:text-5xl uppercase tracking-tight leading-[0.9] mb-6 [font-synthesis:none]">
                      {project.title}
                    </h3>
                  ) : (
                    <h3 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] mb-6 [font-synthesis:none]">
                      {project.title}
                    </h3>
                  )}

                  <div className="font-sans text-sm tracking-widest uppercase text-accent mb-8">
                    {project.category}
                  </div>
                </div>

                <div className="space-y-8 mt-12 lg:mt-0">
                  <p className="font-sans text-base md:text-lg text-foreground/80 font-light leading-relaxed max-w-sm">
                    {project.description}
                  </p>

                  <div>
                    <div className="font-sans text-xs tracking-widest uppercase text-muted mb-3">Technology</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 text-xs border border-muted/20 rounded-full font-sans text-foreground/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-6 pt-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="font-sans text-xs uppercase tracking-widest border-b border-accent pb-1 hover:text-accent transition-colors"
                      >
                        View Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="font-sans text-xs uppercase tracking-widest border-b border-muted pb-1 text-muted hover:text-foreground transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Visual */}
              <div className="col-span-1 lg:col-span-8 flex items-center justify-center">
                <div className="w-full aspect-[4/3] md:aspect-video rounded-sm overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full"
                    style={{
                      objectFit: (project.objectFit ?? 'cover') as 'cover' | 'contain' | 'fill' | 'none' | 'scale-down',
                      objectPosition: project.imagePosition ?? 'center',
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

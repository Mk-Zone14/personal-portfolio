import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'FINORA',
    category: 'Featured Work / Hackathon',
    description: 'Multi-Agent AI CFO. 3rd Place — Gemini Hackathon. Contribution: Product storytelling, presentation, and communication.',
    tech: ['Multi-Agent Systems', 'AI', 'Product Strategy'],
    link: 'https://vibeforge-cyan.vercel.app/',
    number: '01',
    color: 'bg-[#121212]'
  },
  {
    title: 'NOVA',
    category: 'Featured Work',
    description: 'An AI-powered opportunity and application copilot that assists in finding and applying for roles at scale.',
    tech: ['React', 'Vite', 'Tailwind', 'AI APIs'],
    link: 'https://nova-ai-delta-five.vercel.app/#workspace',
    github: 'https://github.com/Mk-Zone14/nova-ai',
    number: '02',
    color: 'bg-[#151515]'
  },
  {
    title: 'Credit Card Default Prediction',
    category: 'Machine Learning',
    description: 'Predictive model analyzing financial data to assess credit card default probabilities.',
    tech: ['Python', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/Mk-Zone14/credit-card-default-prediction',
    number: '03',
    color: 'bg-[#181818]'
  },
  {
    title: 'SPENDWISE',
    category: 'Featured Work',
    description: 'A student-focused personal expense tracking application designed for minimal friction and clear financial visibility.',
    tech: ['React', 'Vite', 'Tailwind'],
    link: 'https://spendwise-beta-five.vercel.app/',
    number: '04',
    color: 'bg-[#1a1a1a]'
  },
  {
    title: 'Titanic Survival Prediction',
    category: 'Machine Learning',
    description: 'Classification model predicting survival on the Titanic dataset.',
    tech: ['Python', 'Machine Learning', 'Data Analysis'],
    github: 'https://github.com/Mk-Zone14/titanic-survival-prediction',
    number: '05',
    color: 'bg-[#1c1c1c]'
  }
];

export const ProjectShowcase = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      
      cards.forEach((card: any, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          id: `card-${i}`
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
                  <h3 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.9] mb-6 [font-synthesis:none]">
                    {project.title}
                  </h3>
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
                      <a href={project.link} target="_blank" rel="noreferrer" className="font-sans text-xs uppercase tracking-widest border-b border-accent pb-1 hover:text-accent transition-colors">
                        View Live
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="font-sans text-xs uppercase tracking-widest border-b border-muted pb-1 text-muted hover:text-foreground transition-colors">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Visual Asset Slot */}
              <div className="col-span-1 lg:col-span-8 flex items-center justify-center">
                <div className="w-full aspect-[4/3] md:aspect-video bg-background/30 border border-dashed border-muted/30 rounded-sm relative overflow-hidden flex flex-col items-center justify-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-muted/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-sans text-muted tracking-widest uppercase text-xs opacity-70">
                    Asset Slot (16:9)
                  </span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

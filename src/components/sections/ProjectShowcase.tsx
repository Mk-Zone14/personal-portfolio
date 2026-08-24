import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'NOVA',
    category: 'AI Application',
    description: 'An AI-powered opportunity and application copilot that assists in finding and applying for roles at scale.',
    tech: ['React', 'Vite', 'Tailwind', 'AI APIs'],
    link: 'https://nova-ai-delta-five.vercel.app/',
    github: 'https://github.com/Mk-Zone14/nova-ai',
    number: '01',
    color: 'bg-[#121212]'
  },
  {
    title: 'SPENDWISE',
    category: 'FinTech',
    description: 'A student-focused personal expense tracking application designed for minimal friction and clear financial visibility.',
    tech: ['React', 'Vite', 'Tailwind'],
    number: '02',
    color: 'bg-[#181818]'
  },
  {
    title: 'PLANETARY ROVER',
    category: 'Edge-AI & Robotics',
    description: 'An Edge-AI visual terrain analysis and autonomous mapping concept for planetary exploration. Focuses on terrain segmentation, visual SLAM, and hazard detection.',
    tech: ['Computer Vision', 'Visual SLAM', 'Python'],
    number: '03',
    color: 'bg-[#1a1a1a]'
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
    <section ref={containerRef} id="work" className="relative w-full bg-background text-foreground">
      <div className="pt-32 pb-16 px-6">
        <h2 className="font-display font-medium text-4xl md:text-7xl uppercase tracking-tight max-w-[90vw] mx-auto mb-16">
          Selected Work
        </h2>
      </div>

      <div className="relative">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`project-card min-h-screen w-full ${project.color} sticky top-0 flex flex-col justify-center border-t border-muted/10 origin-top`}
          >
            <div className="max-w-[90vw] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 px-6 py-24">
              
              {/* Project Meta */}
              <div className="col-span-1 lg:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <div className="font-sans text-xs tracking-widest uppercase text-muted mb-4">
                    Case Study {project.number}
                  </div>
                  <h3 className="font-display text-5xl md:text-8xl uppercase tracking-tighter leading-none mb-6">
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

              {/* Project Visual Placeholder */}
              <div className="col-span-1 lg:col-span-8 flex items-center justify-center">
                <div className="w-full aspect-[4/3] md:aspect-video bg-background/50 border border-muted/10 rounded-sm relative overflow-hidden group flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-muted/5 opacity-50"></div>
                  <span className="font-sans text-muted tracking-widest uppercase text-sm group-hover:scale-110 transition-transform duration-700 ease-out">
                    Visual Exploration
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

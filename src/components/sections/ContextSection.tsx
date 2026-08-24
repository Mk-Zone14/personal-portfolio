import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ContextSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sequenceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.sequence-item');
      
      gsap.from(items, {
        scrollTrigger: {
          trigger: sequenceRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
        opacity: 0.1,
        y: 20,
        stagger: 0.5,
        duration: 2,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="context" className="min-h-screen pt-36 pb-24 md:pt-44 md:pb-32 px-6 bg-foreground text-background flex flex-col justify-center">
      <div className="max-w-[90vw] mx-auto w-full">
        <h2 className="font-display font-medium text-4xl md:text-7xl uppercase tracking-tight mb-24">
          A Little Context.
        </h2>
        
        <div ref={sequenceRef} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center font-sans text-xl md:text-3xl font-bold tracking-widest text-background/80 uppercase">
          <span className="sequence-item">Biology</span>
          <span className="sequence-item hidden md:inline">→</span>
          <span className="sequence-item md:hidden">↓</span>
          <span className="sequence-item">Computer Science</span>
          <span className="sequence-item hidden md:inline">→</span>
          <span className="sequence-item md:hidden">↓</span>
          <span className="sequence-item text-background">AI / ML</span>
          <span className="sequence-item hidden md:inline">→</span>
          <span className="sequence-item md:hidden">↓</span>
          <span className="sequence-item animate-pulse">???</span>
        </div>

        <div className="mt-24 max-w-2xl text-lg md:text-2xl font-light leading-relaxed text-background/90 text-balance">
          My path wasn't linear. It started with a fascination for organic systems, which eventually evolved into a deep curiosity about artificial systems, computation, and intelligence. The transition was driven by a desire to build, solve complex problems, and understand how intricate systems work at scale.
        </div>
      </div>
    </section>
  );
};

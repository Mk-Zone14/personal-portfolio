import { SectionSeam } from '../ui/SectionSeam';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ScrollCharSpread } from '../ui/ScrollCharSpread';

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
    <section ref={sectionRef} id="context" className="relative min-h-screen pt-36 pb-24 md:pt-44 md:pb-32 px-6 bg-foreground text-background flex flex-col justify-center overflow-x-clip">
      <SectionSeam from="dark" />
      <div className="max-w-[90vw] mx-auto w-full">
        <ScrollCharSpread
          className="font-display font-medium text-4xl md:text-7xl uppercase tracking-tight mb-24"
          text="A Little Context."
        />

        <div ref={sequenceRef} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center font-sans text-xl md:text-3xl font-bold tracking-widest text-background/80 uppercase">
          <ScrollCharSpread as="span" strength={0.3} className="sequence-item" text="Biology" />
          <span className="sequence-item hidden md:inline">→</span>
          <span className="sequence-item md:hidden">↓</span>
          <ScrollCharSpread as="span" strength={0.3} className="sequence-item" text="Computer Science" />
          <span className="sequence-item hidden md:inline">→</span>
          <span className="sequence-item md:hidden">↓</span>
          <ScrollCharSpread as="span" strength={0.3} className="sequence-item text-background" text="AI / ML" />
          <span className="sequence-item hidden md:inline">→</span>
          <span className="sequence-item md:hidden">↓</span>
          <ScrollCharSpread as="span" strength={0.3} className="sequence-item animate-pulse" text="???" />
        </div>

        <ScrollReveal className="mt-24 max-w-2xl text-lg md:text-2xl font-light leading-relaxed text-background/90 text-balance" text="My path wasn't linear. It started with studying organic systems in biology, moved through visual storytelling and directing short films, and led into computer science and artificial intelligence. The constant thread has always been understanding how intricate systems function, whether biological, narrative, or computational." />
      </div>
    </section>
  );
};
